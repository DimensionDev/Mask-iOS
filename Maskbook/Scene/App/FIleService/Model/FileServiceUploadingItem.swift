import Foundation
import SwiftUI

struct FileServiceUploadingItem: Hashable {
    init(
        fileName: String,
        provider: String,
        fileType: ItemType = .image,
        state: FileServiceUploadingItem.State,
        content: Data,
        totalBytes: Double,
        uploadedBytes: Double,
        uploadDate: Date? = nil,
        mime: String? = nil,
        tx: FileServiceTranscation? = nil
    ) {
        self.fileName = fileName
        self.provider = provider
        self.state = state
        self.content = content
        self.totalBytes = totalBytes
        self.uploadedBytes = uploadedBytes
        self.uploadDate = uploadDate
        self.fileType = fileType
        self.tx = tx
        self.mime = mime
    }

    enum State: Int64, Hashable {
        case preparing = 0
        case uploading
        case uploaded
        case failed

        var detailText: String {
            switch self {
            case .preparing: return L10n.Plugins.FileService.preparing
            case .uploading: return L10n.Plugins.FileService.uploading
            case .uploaded: return L10n.Plugins.FileService.uploaded
            case .failed: return ""
            }
        }

        var isUploaded: Bool {
            self == .uploaded
        }
    }

    enum ItemType: Int64 {
        case image = 0
        case file
    }

    let fileName: String
    let provider: String
    let state: State
    let content: Data
    let totalBytes: Double
    let uploadedBytes: Double
    let uploadDate: Date?
    let fileType: ItemType

    let mime: String?
    let tx: FileServiceTranscation?

    var progress: CGFloat {
        guard totalBytes > 0 else {
            return 0
        }

        return CGFloat(uploadedBytes) / CGFloat(totalBytes)
    }

    var progressFileText: String {
        switch self.state {
        case .failed, .preparing: return ""
        case .uploading, .uploaded:
            let uploadingText = uploadedBytes.fileSizeText
            let totalText = totalBytes.fileSizeText
            return "\(uploadingText)/\(totalText)"
        }
    }

    var uploadDateText: String {
        let formatter = DateFormatter()
        formatter.locale = Locale.current
        formatter.dateFormat = "yyyy-MM-dd HH:mm:ss"

        return formatter.string(from: uploadDate ?? Date())
    }

    var isFailed: Bool {
        state != .uploaded
    }

    var fileNameWithoutExt: String {
        return fileName.components(separatedBy:".").first ?? fileName
    }

    var fileExt: String? {
        return fileName.components(separatedBy:".").last
    }
}

extension FileServiceUploadingItem: CustomStringConvertible {
    var description: String {
        var final = ""
        final.write("name: \(fileName) \n")
        final.write("id: \(tx?.id ?? "--") \n")
        final.write("key: \(tx?.key ?? "--") \n")
        final.write("landing: \(tx?.landingTxID ?? "--") \n")
        final.write("payload: \(tx?.payloadTxID ?? "--") \n")

        return final
    }
}

extension Double {
    var fileSizeText: String {
        if self.isZero { return "0.0 kb" }

        let kb = self / 1_024
        guard kb >= 1_024 else {
            return String(format: "%.1f KB", kb)
        }

        let mb = kb / 1_024
        guard mb >= 1_024 else {
            return String(format: "%.1f MB", mb)
        }

        let gb = mb / 1_024
        return String(format: "%.1f GB", gb)
    }
}

extension FileServiceUploadingItem {
    func toFileServiceDownloadItem() -> FileServiceDownloadItem {
        .init(fileName: fileName,
              provider: provider,
              fileType: fileType,
              content: content.isEmpty ? nil : content,
              totalBytes: totalBytes,
              uploadDate: uploadDate,
              mime: mime ?? "",
              tx: tx)
    }
}
