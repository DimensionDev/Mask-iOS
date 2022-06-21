import CryptoKit
import CryptoSwift
import Foundation
import IpfsLiteApi

struct IPFSUploadHandler {
    init() {
        let fileManager = FileManager.default
        let documentsPath = fileManager.urls(for: .documentDirectory, in: .userDomainMask)[0].appendingPathComponent("ipfs-lite")
        let exist = fileManager.fileExists(atPath: documentsPath.path)

        if !exist {
            try! fileManager.createDirectory(atPath: documentsPath.path,
                                             
                                             withIntermediateDirectories: true, attributes: nil)
        }
        do {
            let _ = try IpfsLiteApi.launch(documentsPath.path, debug: false, lowMem: true)
        } catch {
            print("IPFSUploadHandler error:", error)
        }
    }
}

extension IPFSUploadHandler: FileServiceUploadHandler {
    func upload(
        _ item: FileServiceUploadingItem,
        option: FileServiceUploadOption
    ) -> AsyncThrowingStream<FileServiceTranscation, Error> {
        .init { continuation in
            Task.detached {
                // get transcation id
                var tx = FileServiceTranscation.progress(0)
                tx.id = self.encodeArrayBuffer(item.content.hashData())
                continuation.yield(tx)

                // make attachment and get file key
                // and get payloadTxID
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

                // get landing page and upload the html
                // and get landingTxID
                let landingTxID = try await landingPage(item: item, option: option, tx: tx)
                tx.landingTxID = landingTxID
                tx.progress = 1.0
                continuation.yield(tx)
                continuation.finish()
            }
        }
    }

    func landingPage(
        item: FileServiceUploadingItem,
        option: FileServiceUploadOption,
        tx: FileServiceTranscation
    ) async throws -> String {
        if tx.payloadTxID.isEmpty {
            throw "payloadTxID is empty"
        }

        let jsonString = formattedPayload(from: item, option: option, tx: tx)
        let htmlText = try await landingHTML()
        let replacedData = try replace(htmlText, with: jsonString)
        return try await makePayload(data: replacedData)
    }

    @MainActor
    func makePayload(
        data: Data,
        type: String = "",
        delegate: URLSessionTaskDelegate? = nil
    ) async throws -> String {
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

    func replace(_ html: String, with text: String) throws -> Data {
        guard let replacedData = html
            .replacingOccurrences(of: "__METADATA__", with: text)
            .replacingOccurrences(of: "Arweave", with: "IPFS")
            .data(using: .utf8)
        else {
            throw "encode html error"
        }

        return replacedData
    }

    func buildLink(for payloadTxID: String, option: FileServiceUploadOption) -> String {
        "https://ipfs.infura.io/ipfs/" + payloadTxID
    }
}
