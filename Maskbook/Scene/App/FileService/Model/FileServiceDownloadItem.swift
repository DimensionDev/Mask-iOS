//
//  FileServiceDownloadItem.swift
//  Maskbook
//
//  Created by xiaojian sun on 2022/7/4.
//  Copyright © 2022 dimension. All rights reserved.
//

import Foundation

struct FileServiceDownloadItem {
    init(
        fileName: String,
        provider: String,
        fileType: ItemType,
        totalBytes: Double,
        uploadDate: Date? = nil,
        tx: FileServiceTranscation? = nil
    ) {
        self.fileName = fileName
        self.provider = provider
        self.totalBytes = totalBytes
        self.uploadDate = uploadDate
        self.fileType = fileType
        self.tx = tx
        content = loadFileContent()
    }

    typealias ItemType = FileServiceUploadingItem.ItemType

    let fileName: String
    let provider: String
    var content: Data?
    let totalBytes: Double
    let uploadDate: Date?
    let fileType: ItemType

    let tx: FileServiceTranscation?

    var uploadDateText: String {
        let formatter = DateFormatter()
        formatter.locale = Locale.current
        formatter.dateFormat = "yyyy-MM-dd HH:mm:ss"
        return formatter.string(from: uploadDate ?? Date())
    }

    func loadFileContent() -> Data? {
        tx.flatMap {
            FileServiceLargeFileStorage.data(
                of: $0.id,
                fileName: fileName
            )
        }
    }
}

extension FileServiceDownloadItem {
    func toSelectedFileItem() -> FileServiceSelectedFileItem {
        FileServiceSelectedFileItem(
            data: content ?? Data(),
            fileName: fileName,
            fileType: fileType,
            path: tx.flatMap { FileServiceLargeFileStorage.fileServicePath(id: $0.id, fileName: fileName) }
        )
    }
}
