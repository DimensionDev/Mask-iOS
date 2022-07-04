import Combine
import Foundation

struct ArweaveUploadHandler: FileServiceUploadHandler {
    func upload(
        _ item: FileServiceUploadingItem,
        option: FileServiceUploadOption
    ) -> AsyncThrowingStream<FileServiceTranscation, Error> {
        .init { continuation in
            Task.detached {
                typealias Stage = FileServiceUploadProgress.Stage
                var tx = FileServiceTranscation.progress(0)
                var totalBytes: Double = 0

                tx.id = self.encodeArrayBuffer(item.content.hashData())
                tx.state = option.encrypted ? .encrypting : .preparing
                continuation.yield(tx)

                let attachment = AttachmentOptions(
                    encrypted: option.encrypted,
                    type: item.mime,
                    block: item.content,
                    name: item.fileName
                )
                tx.key = attachment.key
                let data = try attachment.encryptedData()
                // all event is on the Task's thread
                let taskDelegate = Delegate()
                let signal = taskDelegate
                    .uploadData
                    .share()

                signal
                    .map { Double($0.1) }
                    .removeDuplicates()
                    .sink { value in
                        totalBytes = value
                    }
                    .store(in: &taskDelegate.cancelableStorage)

                signal
                    .map { (sentBytes, totalBytes) -> Double in
                        let total = Double(totalBytes)
                        let stage = Stage.filePayloadUploading(
                            totalBytesSent: Double(sentBytes),
                            totalBytesExpectedToSend: total
                        )
                        return stage.progress(with: total)
                    }
                    .removeDuplicates()
                    .sink { progress in
                        tx.progress = progress
                        tx.state = .uploading
                        continuation.yield(tx)
                    }
                    .store(in: &taskDelegate.cancelableStorage)
                tx.payloadTxID = try await self.makePayload(
                    data: data,
                    type: "application/octet-stream",
                    delegate: taskDelegate
                )
                tx.progress = Stage.htmlDownloading.progress(with: totalBytes)
                tx.state = .uploading
                continuation.yield(tx)

                tx.landingTxID = try await self.landingPage(item: item, option: option, tx: tx)
                // skip htmlUploading as it doesn't mater
                tx.progress = Stage.uploadFinish.progress(with: totalBytes)
                tx.state = .uploaded
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

        let jsonString = formattedPayload(
            from: item,
            option: option,
            tx: tx
        )
        let htmlText = try await landingHTML()
        let replacedData = try replace(htmlText, with: jsonString)
        return try await makePayload(data: replacedData, type: "text/html")
    }

    func makePayload(data: Data, type: String, delegate: URLSessionTaskDelegate? = nil) async throws -> String {
        var transaction = ArweaveTransaction(data: data)
        let tag = ArweaveTransaction.Tag(name: "Content-Type", value: type)
        transaction.tags.append(tag)
        try await RemoteSigning.signing(transaction: &transaction)
        _ = try await transaction.commit(delegate: delegate)
        return transaction.id
    }

    func buildLink(for payloadTxID: String, option: FileServiceUploadOption) -> String {
        if option.useMesonCDN {
            return Arweave.baseUrl.absoluteString + "/" + payloadTxID
        } else {
            return Arweave.mesonCDNURL.absoluteString + "/" + payloadTxID
        }
    }

    func replace(_ html: String, with text: String) throws -> Data {
        guard let data = html
            .replacingOccurrences(of: "__METADATA__", with: text)
            .data(using: .utf8) else {
            throw "encode html error"
        }

        return data
    }
}

extension ArweaveUploadHandler {
    private final class Delegate: NSObject, URLSessionTaskDelegate {
        var cancelableStorage: Set<AnyCancellable> = []
        let uploadData = PassthroughSubject<(sentBytes: Int64, totalBytes: Int64), Never>()

        func urlSession(
            _ session: URLSession,
            task: URLSessionTask,
            didSendBodyData bytesSent: Int64,
            totalBytesSent: Int64,
            totalBytesExpectedToSend: Int64
        ) {
            uploadData.send((totalBytesSent, totalBytesExpectedToSend))
        }
    }
}

extension FileServiceUploadProgress.Stage {
    func progress(with totalBytes: Double) -> Double {
        let allStageBytes: Double = {
            totalBytes + 95_973 * 2
        }()
        switch self {
        case let .filePayloadUploading(totalBytesSent, _): return totalBytesSent / allStageBytes
        case .htmlUploading: return (totalBytes + 95_973) / allStageBytes
        case .htmlDownloading: return totalBytes / allStageBytes
        case .uploadFinish: return 1.0
        }
    }
}
