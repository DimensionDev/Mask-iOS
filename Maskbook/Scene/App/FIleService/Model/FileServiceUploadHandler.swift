import Foundation

protocol FileServiceUploadHandler {
    func upload(
        _ item: FileServiceUploadingItem,
        option: FileServiceUploadOption
    ) -> AsyncThrowingStream<FileServiceTranscation, Error>
}

struct MockUploadingHandler: FileServiceUploadHandler {
    func upload(
        _ item: FileServiceUploadingItem,
        option: FileServiceUploadOption
    ) -> AsyncThrowingStream<FileServiceTranscation, Error> {
        .init { continuation in
            Task.detached {
                try await Task.sleep(nanoseconds: 200_000_000)
                continuation.yield(FileServiceTranscation.progress(0.2))
                try await Task.sleep(nanoseconds: 100_000_000)
                continuation.yield(FileServiceTranscation.progress(0.4))
                try await Task.sleep(nanoseconds: 100_000_000)
                continuation.yield(FileServiceTranscation.progress(0.6))
                try await Task.sleep(nanoseconds: 100_000_000)
                continuation.yield(FileServiceTranscation.progress(0.8))
                try await Task.sleep(nanoseconds: 100_000_000)
                continuation.yield(FileServiceTranscation.progress(1))
                continuation.finish()
            }
        }
    }
}

struct ArweaveUploadHandler: FileServiceUploadHandler {
    func upload(
        _ item: FileServiceUploadingItem,
        option: FileServiceUploadOption
    ) -> AsyncThrowingStream<FileServiceTranscation, Error> {
        // TODO: ArweaveUploadHandler
        .init { continuation in
            Task.detached {
//                let attachment = AttachmentOptions(
//                    encrypted: false,
//                    type: item.fileExt,
//                    block: item.content,
//                    name: item.fileNameWithoutExt
//                )
//
//                var transaction = try attachment.toTransaction()
//                try await RemoteSigning.signing(transaction: &transaction)
//                let data = try await transaction.commit()
            }
        }
//        return data
    }
}

struct IPFSUploadHandler: FileServiceUploadHandler {
    func upload(
        _ item: FileServiceUploadingItem,
        option: FileServiceUploadOption
    ) -> AsyncThrowingStream<FileServiceTranscation, Error> {

        // TODO: IPFSUploadHandler
        fatalError()
    }
}
