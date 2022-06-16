import Foundation

struct IPFSUploadHandler: FileServiceUploadHandler {
    func upload(
        _ item: FileServiceUploadingItem,
        option: FileServiceUploadOption
    ) -> AsyncThrowingStream<FileServiceTranscation, Error> {

        // TODO: IPFSUploadHandler
        fatalError()
    }
}
