import Foundation

struct FileServiceUploadResult: Codable {
    let createdAt: Date
    let id: String
    let key: String
    let landingTxID: String
    let name: String
    let payloadTxID: String
    let provider: String
    let size: Int
    let type: String
}

struct FileServiceTranscation: Hashable {
    init(
        id: String,
        key: String,
        landingTxID: String,
        payloadTxID: String,
        progress: Double
    ) {
        self.id = id
        self.key = key
        self.landingTxID = landingTxID
        self.payloadTxID = payloadTxID
        self.progress = progress
    }

    let id: String
    let key: String
    let landingTxID: String
    let payloadTxID: String
    let progress: Double

    static func progress(_ value: Double) -> FileServiceTranscation {
        self.init(id: "", key: "", landingTxID: "", payloadTxID: "", progress: value)
    }

    var isFinished: Bool {
        if id.isEmpty {
            return false
        }

        if key.isEmpty {
            return false
        }

        if landingTxID.isEmpty {
            return false
        }

        if payloadTxID.isEmpty {
            return false
        }

        if progress != 1 {
            return false
        }

        return true
    }
}

extension FileServiceUploadResult {
    static func from(
        _ item: FileServiceUploadingItem
    ) -> FileServiceUploadResult? {
        guard let tx = item.tx, tx.isFinished else {
            return nil
        }
        return .init(
            createdAt: item.uploadDate ?? Date(),
            id: tx.id,
            key: tx.key,
            landingTxID: tx.landingTxID,
            name: item.fileName,
            payloadTxID: tx.payloadTxID,
            provider: item.provider,
            size: item.content.count,
            type: "file"
        )
    }
}
