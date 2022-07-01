import CryptoKit
import CryptoSwift
import Foundation
import IPFSClientKit
import web3swift

struct IPFSUploadHandler {
    let client: IPFSClient?

    init() {
        client = try? IPFSClient(host: "ipfs.infura.io", port: 5001, ssl: true)
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
                let attachment = AttachmentOptions(encrypted: option.encrypted,
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
                let landingTxID = try await self.landingPage(item: item, option: option, tx: tx)
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

    func makePayload(
        data: Data,
        type: String = "",
        delegate: URLSessionTaskDelegate? = nil
    ) async throws -> String {
        return try await withCheckedThrowingContinuation { continuation in
            do {
                try client?.add(data) { nodes in
                    continuation.resume(returning: nodes.first?.hash?.value.base58EncodedString ?? "")
                }
            } catch {
                continuation.resume(throwing: error)
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
