import Foundation

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
