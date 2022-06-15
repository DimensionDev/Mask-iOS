import Foundation
import CryptoKit
import SwiftyJSON

public struct Chunks {
    let data_root: Data
    let chunks: [Chunk]
    let proofs: [Proof]
}

public typealias TransactionId = String
public typealias Base64EncodedString = String

public extension ArweaveTransaction {

    struct PriceRequest {
        
        public init(bytes: Int = 0, target: ArweaveAddress? = nil) {
            self.bytes = bytes
            self.target = target
        }
        
        public var bytes: Int = 0
        public var target: ArweaveAddress?
    }

    struct Tag: Codable {
        public let name: String
        public let value: String

        public init(name: String, value: String) {
            self.name = name.base64URLEncoded
            self.value = value.base64URLEncoded
        }
    }
}

public struct ArweaveTransaction: Codable {
    public let format = Format.v2
    public var id: TransactionId = ""
    public var last_tx: TransactionId = ""
    public var owner: String = ""
    public var tags = [Tag]()
    public var target: String = ""
    public var quantity: String = "0"
    
    // For v2 transactions, `data` is *not* part of the submitted payload.
    // do not remove optional. decode will fail if data comes back empty
    public var data: String = ""
    
    public var data_root: String = ""
    public var data_size: String = "0"
    public var reward: String = ""
    public var signature: String = ""
    
    public var chunks: Chunks?

    private enum CodingKeys: String, CodingKey {
        case format, id, last_tx, owner, tags, target, quantity, data, data_size, data_root, reward, signature
    }

    public var priceRequest: PriceRequest {
        PriceRequest(bytes: rawData.count, target: ArweaveAddress(address: target))
    }

    public var rawData = Data()
    
    public enum Format: Int, Codable {
        case v1 = 1
        case v2 = 2
    }
}

public extension ArweaveTransaction {
    init(data: Data) {
        self.rawData = data
        self.data_size = String(data.count)
        self.owner = APIKey.arweaveOwner
    }

    init(amount: ArweaveAmount, target: ArweaveAddress) {
        self.quantity = String(describing: amount)
        self.target = target.address
    }

    func commit() async throws -> HttpResponse {
        guard !signature.isEmpty else {
            throw "Missing signature on transaction."
        }

        let commit = Arweave.shared.request(for: .commit(self))
        return try await ArweaveHttpClient.request(commit)
    }

    mutating private func signatureBody() async throws -> Data {
        
        if data_root.isEmpty {
            prepareChunks(data: self.rawData)
        }
        
        let last_tx = try await ArweaveTransaction.anchor()
        
        return deepHash(buffers: [
            withUnsafeBytes(of: format) { Data($0) },
            Data(base64URLEncoded: owner),
            Data(base64URLEncoded: target),
            quantity.data(using: .utf8),
            reward.data(using: .utf8),
            Data(base64URLEncoded: last_tx),
            tags.combined.data(using: .utf8),
            withUnsafeBytes(of: data_size) { Data($0) },
            Data(base64URLEncoded: data_root)
        ].compactMap { $0 })
    }
    
    mutating func remoteSignatureBody() async throws -> Data {
        if data_root.isEmpty {
            prepareChunks(data: self.rawData)
        }
        
        self.last_tx = try await ArweaveTransaction.anchor()
        self.data = rawData.base64URLEncodedString()
                
        let priceAmount = try await ArweaveTransaction.price(for: priceRequest)
        self.reward = String(describing: priceAmount)
        
        let array = [
            String(format.rawValue).data(using: .utf8),
            Data(base64URLEncoded: owner),
            Data(base64URLEncoded: target.base64URLEncoded),
            quantity.data(using: .utf8),
            reward.data(using: .utf8),
            Data(base64URLEncoded: last_tx.base64URLEncoded),
            tagData(),
            data_size.data(using: .utf8),
            Data(base64URLEncoded: data_root.base64URLEncoded)
        ] as [Any?]
        var data = Data()
        _ = try? data.pack(array)
        return data
    }
    
    mutating func setRemoteSignature(response: JSON) {
        print(response)
        let dic = response.dictionaryValue
        if let signature = dic["signature"]?.stringValue {
            self.signature = signature
        }
        if let id = dic["id"]?.stringValue {
            self.id = id
        }
        if let owner = dic["owner"]?.stringValue {
            self.owner = owner
        }
    }
    
    private func tagData() -> [[Data]] {
        var tagsArray: [[Data]] = []
        for tag in tags {
            var tagArray: [Data] = []
            if let data = Data(base64URLEncoded: tag.name) {
                tagArray.append(data)
            }
            if let data = Data(base64URLEncoded: tag.value) {
                tagArray.append(data)
            }
            tagsArray.append(tagArray)
        }
        return tagsArray
    }
}

public extension ArweaveTransaction {
    mutating func prepareChunks(data: Data) {
        if chunks == nil && data.count > 0 {
            chunks = generateTransactionChunks(data: data)
            data_root = chunks!.data_root.base64URLEncodedString()
        }
        
        if chunks == nil && data.count == 0 {
            chunks = Chunks(data_root: Data(), chunks: [], proofs: [])
            data_root = ""
        }
    }

    static func find(_ txId: TransactionId) async throws -> ArweaveTransaction {
        let findEndpoint = Arweave.shared.request(for: .transaction(id: txId))
        let response = try await ArweaveHttpClient.request(findEndpoint)
        return try JSONDecoder().decode(ArweaveTransaction.self, from: response.data)
    }

    static func data(for txId: TransactionId) async throws -> Base64EncodedString {
        let target = Arweave.shared.request(for: .transactionData(id: txId))
        let response = try await ArweaveHttpClient.request(target)
        return String(decoding: response.data, as: UTF8.self)
    }

    static func status(of txId: TransactionId) async throws -> ArweaveTransaction.Status {

        let target = Arweave.shared.request(for: .transactionStatus(id: txId))
        let response = try await ArweaveHttpClient.request(target)
        
        var status: ArweaveTransaction.Status
        if response.statusCode == 200 {
            let data = try JSONDecoder().decode(ArweaveTransaction.Status.Data.self, from: response.data)
            status = .accepted(data: data)
        } else {
            status = ArweaveTransaction.Status(rawValue: .status(response.statusCode))!
        }
        return status
    }

    static func price(for request: ArweaveTransaction.PriceRequest) async throws -> ArweaveAmount {
        let target = Arweave.shared.request(for: .reward(request))
        let response = try await ArweaveHttpClient.request(target)

        let costString = String(decoding: response.data, as: UTF8.self)
        guard let value = Double(costString) else {
            throw "Invalid response"
        }
        return ArweaveAmount(value: value, unit: .winston)
    }

    static func anchor() async throws -> String {
        let target = Arweave.shared.request(for: .txAnchor)
        let response = try await ArweaveHttpClient.request(target)
        
        let anchor = String(decoding: response.data, as: UTF8.self)
        return anchor
    }
}

extension Array where Element == ArweaveTransaction.Tag {
    var combined: String {
        reduce(into: "") { str, tag in
            str += tag.name
            str += tag.value
        }
    }
}
