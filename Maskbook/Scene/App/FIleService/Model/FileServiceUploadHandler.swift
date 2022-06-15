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
