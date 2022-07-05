//
//  FileServiceDownloadItem.swift
//  Maskbook
//
//  Created by xiaojian sun on 2022/7/4.
//  Copyright © 2022 dimension. All rights reserved.
//

import Foundation

struct FileServiceDownloadItem {
    typealias ItemType = FileServiceUploadingItem.ItemType
    init(
        fileName: String,
        provider: String,
        fileType: ItemType = .image,
        content: Data?,
        totalBytes: Double,
        uploadDate: Date? = nil,
        mime: String,
        tx: FileServiceTranscation? = nil
    ) {
        self.fileName = fileName
        self.provider = provider
        self.content = content
        self.totalBytes = totalBytes
        self.uploadDate = uploadDate
        self.fileType = fileType
        self.tx = tx
        self.mime = mime
    }

    let fileName: String
    let provider: String
    var content: Data?
    let totalBytes: Double
    let uploadDate: Date?
    let fileType: ItemType

    let tx: FileServiceTranscation?
    let mime: String

    var uploadDateText: String {
        let formatter = DateFormatter()
        formatter.locale = Locale.current
        formatter.dateFormat = "yyyy-MM-dd HH:mm:ss"
        return formatter.string(from: uploadDate ?? Date())
    }
}

extension FileServiceDownloadItem {
    func toSelectedFileItem() -> FileServiceSelectedFileItem {
        return .init(data: content ?? Data(),
              fileName: fileName,
              fileType: fileType,
              mime: mime)
    }
}
