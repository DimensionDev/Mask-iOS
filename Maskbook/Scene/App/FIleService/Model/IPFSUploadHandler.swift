import CryptoKit
import CryptoSwift
import Foundation
import IpfsLiteApi

struct IPFSUploadHandler: FileServiceUploadHandler {
    init() {
        let fileManager = FileManager.default
        let documentsPath = fileManager.urls(for: .documentDirectory, in: .userDomainMask)[0].appendingPathComponent("ipfs-lite")
        let exist = fileManager.fileExists(atPath: documentsPath.path)

        if !exist {
            try! fileManager.createDirectory(atPath: documentsPath.path,
                                             
                                             withIntermediateDirectories: true, attributes: nil)
        }
        do {
            let success = try IpfsLiteApi.launch(documentsPath.path, debug: false, lowMem: true)
        } catch {
            print(error)
        }
    }
    
    func upload(
        _ item: FileServiceUploadingItem,
        option: FileServiceUploadOption
    ) -> AsyncThrowingStream<FileServiceTranscation, Error> {
        .init { continuation in
            Task.detached {
                var tx = FileServiceTranscation.progress(0)
                tx.id = Self.encodeArrayBuffer(data: item.content.hashData())
                
                continuation.yield(tx)
                let attachment = AttachmentOptions(encrypted: false,
                                                   type: item.mime,
                                                   block: item.content,
                                                   name: item.fileName)
                tx.key = attachment.key
                let data = try attachment.encryptedData()
                let payloadID = try await self.makePayload(data: data)
                tx.payloadTxID = payloadID
                tx.progress = 0.5
                continuation.yield(tx)
                let landingTxID = try await uploadLandingPage(item: item, tx: tx)
                tx.landingTxID = landingTxID
                tx.progress = 1.0
                continuation.yield(tx)
                continuation.finish()
            }
        }
    }
    
    func uploadLandingPage(item: FileServiceUploadingItem, tx: FileServiceTranscation) async throws -> String {
        let link = "https://ipfs.infura.io/ipfs/" + tx.payloadTxID
        let dic = [
            "name": item.fileName,
            "size": "\(item.content.count)",
            "provider": "ipfs",
            "link": link,
            "signed": try? Self.makeFileKeySigned(fileKey: tx.key),
            "createdAt": Date().toISOString()
        ] as [String: Any?]
        let jsonString = dic.asString()
        let request = URLRequest(url: Arweave.landingURL)
        let (data, response) = try await URLSession.shared.data(for: request)
        let httpResponse = response as? HTTPURLResponse
        let statusCode = httpResponse?.statusCode ?? 0
        if statusCode != 200 {
            throw "Bad response code \(statusCode)"
        }
        guard let htmlText = String(data: data, encoding: .utf8) else {
            throw "wrong html content"
        }
        guard let replacedData = htmlText
            .replacingOccurrences(of: "__METADATA__", with: jsonString)
            .replacingOccurrences(of: "Arweave", with: "IPFS")
            .data(using: .utf8)
        else {
            throw "encode html error"
        }
        return try await makePayload(data: replacedData)
    }
    
    @MainActor
    func makePayload(data: Data) async throws -> String {
        return await withCheckedContinuation { continuation in
            IpfsLiteApi.instance().addFile(fromInput: InputStream(data: data), params: TTEAddParams()) { callback, _ in
                if let callback = callback {
                    continuation.resume(returning: callback.block.cid)
                } else {
                    continuation.resume(returning: "")
                }
            }
        }
    }
    
    static func makeFileKeySigned(fileKey: String?) throws -> [String] {
        guard let encodedKey = fileKey?.data(using: .utf8) else {
            throw "key not exist"
        }
        let generatedKey: [UInt8] = try Crypto.randomData(length: 64)
        let hmac = HMAC(key: generatedKey, variant: HMAC.Variant.sha2(SHA2.Variant.sha256))
        let signed = try hmac.authenticate(encodedKey.bytes)
        let signedB64 = encodeArrayBuffer(data: Data(signed))
        let generatedKeyB64 = encodeArrayBuffer(data: Data(generatedKey))
        return [signedB64, generatedKeyB64]
    }
    
    static func encodeArrayBuffer(data: Data) -> String {
        data.base64EncodedString()
    }
}
