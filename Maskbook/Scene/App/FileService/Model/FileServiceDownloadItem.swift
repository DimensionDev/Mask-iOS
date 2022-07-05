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
        fileType: ItemType,
        totalBytes: Double,
        uploadDate: Date? = nil,
        mime: String,
        tx: FileServiceTranscation? = nil
    ) {
        self.fileName = fileName
        self.provider = provider
        self.totalBytes = totalBytes
        self.uploadDate = uploadDate
        self.fileType = fileType
        self.tx = tx
        self.mime = mime
        self.content = loadFileContent()
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

    func loadFileContent() -> Data? {
        guard let id = tx?.id else {
            return nil
        }
        return FileServiceLargeFileStorage.data(of: id)
    }
}

extension FileServiceDownloadItem {
    func toSelectedFileItem() -> FileServiceSelectedFileItem {
        let path: URL? = {
            if let id = tx?.id {
                return FileServiceLargeFileStorage.fileServicePath(id: id)
            }
            return nil
        }()
        return FileServiceSelectedFileItem(data: content ?? Data(),
                                           fileName: fileName,
                                           fileType: fileType,
                                           mime: mime,
                                           path: path)
    }
}
