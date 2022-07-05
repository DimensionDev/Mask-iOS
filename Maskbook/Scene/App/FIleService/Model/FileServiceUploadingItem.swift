import Foundation
import SwiftUI

struct FileServiceUploadingItem: Hashable {
    init(
        fileName: String,
        provider: String,
        fileType: ItemType = .image,
        state: FileServiceUploadingItem.State,
        content: Data,
        uploadedBytes: Double,
        uploadDate: Date? = nil,
        mime: String? = nil,
        option: FileServiceUploadOption,
        tx: FileServiceTranscation? = nil
    ) {
        self.fileName = fileName
        self.provider = provider
        self.state = state
        self.content = content
        self.uploadedBytes = uploadedBytes
        self.uploadDate = uploadDate
        self.fileType = fileType
        self.option = option
        self.tx = tx
        self.mime = mime
    }

    enum State: Int64, Hashable {
        case encrypting = 0
        case preparing
        case uploading
        case uploaded
        case failed

        var detailText: String {
            switch self {
            case .uploading: return L10n.Plugins.FileService.uploading
            case .uploaded: return L10n.Plugins.FileService.uploaded
            case .encrypting: return L10n.Plugins.FileService.encrypting
            case .preparing: return L10n.Plugins.FileService.preparing
            case .failed: return L10n.Plugins.FileService.failed
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
    let uploadedBytes: Double
    let uploadDate: Date?
    let fileType: ItemType

    let mime: String?
    let option: FileServiceUploadOption
    let tx: FileServiceTranscation?

    var totalBytes: Double {
        Double(content.count)
    }

    var progress: CGFloat {
        guard totalBytes > 0 else {
            return 0
        }

        return CGFloat(uploadedBytes) / CGFloat(totalBytes)
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
