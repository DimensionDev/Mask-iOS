import Foundation

struct FileServiceUploadProgress {
    enum Stage {
        case filePayloadUploading(totalBytesSent: Double, totalBytesExpectedToSend: Double)
        case htmlDownloading
        case htmlUploading
        case uploadFinish
    }
}
