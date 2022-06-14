import Foundation
import JOSESwift
import CryptoKit

public struct ArweaveWallet: Codable, Hashable, Comparable {
    
    public let key: RSAPrivateKey
    public let keyData: Data
    public var ownerModulus: String
    public var address: ArweaveAddress

    private enum CodingKeys: String, CodingKey {
        case keyData, ownerModulus, address
    }
    
    public static func < (lhs: ArweaveWallet, rhs: ArweaveWallet) -> Bool {
        lhs.address < rhs.address
    }
    
    public static func == (lhs: ArweaveWallet, rhs: ArweaveWallet) -> Bool {
        lhs.address == rhs.address
    }
    
    public func hash(into hasher: inout Hasher) {
        hasher.combine(keyData)
    }
    
    public init(jwkFileData: Data) throws {
        do {
            let jwk = try RSAPrivateKey(data: jwkFileData)
            print(jwk)
        }
        catch(let e) {
            print(e)
        }
        let jwk = try RSAPrivateKey(data: jwkFileData)
        key = jwk
        keyData = jwkFileData
        ownerModulus = key.modulus
        address = ArweaveAddress(from: key.modulus)
    }
        
    public init(from decoder: Decoder) throws {
        let container = try decoder.container(keyedBy: CodingKeys.self)
        let data = try container.decode(Data.self, forKey: .keyData)
        try self.init(jwkFileData: data)
    }
    
    public func balance() async throws -> Amount {
        let target = Arweave.shared.request(for: .walletBalance(walletAddress: address))
        let response = try await HttpClient.request(target)
        
        let respString = String(decoding: response.data, as: UTF8.self)
        guard let balance = Double(respString) else {
            throw "Invalid response"
        }
        
        let amount = Amount(value: balance, unit: .winston)
        return amount
    }
    
    public func lastTransactionId() async throws -> TransactionId {
        let target = Arweave.shared.request(for: .lastTransactionId(walletAddress: address))
        let response = try await HttpClient.request(target)

        let lastTx = String(decoding: response.data, as: UTF8.self)
        return lastTx
    }

    public func sign(_ message: Data) throws -> Data {
        return message
    }
}

public struct ArweaveAddress: Hashable, Codable, Equatable, Comparable, CustomStringConvertible {
    
    public let address: String
    public var description: String { address }

    public init(address: String) {
        self.address = address
    }
    
    public static func < (lhs: ArweaveAddress, rhs: ArweaveAddress) -> Bool {
        lhs.address < rhs.address
    }
}

public extension ArweaveAddress {
    init(from modulus: String) {
        guard let data = Data(base64URLEncoded: modulus) else {
            preconditionFailure("Invalid base64 value for JWK public modulus (n) property.")
        }
        let digest = SHA256.hash(data: data)
        address = digest.data.base64URLEncodedString()
    }
}
