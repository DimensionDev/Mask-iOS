//
//  FileServiceSelectedFileItem.swift
//  Maskbook
//
//  Created by xiaojian sun on 2022/7/5.
//  Copyright © 2022 dimension. All rights reserved.
//

import Foundation

struct FileServiceSelectedFileItem {
    init(data: Data,
         fileName: String,
         fileType: FileServiceUploadingItem.ItemType,
         path: URL?
    ) {
        self.data = data
        self.fileName = fileName
        self.fileType = fileType
        self.path = path
    }
    let data: Data
    let fileName: String
    let fileType: FileServiceUploadingItem.ItemType
    let path: URL?
    lazy var tempURL: URL = Self.generateTempUrl(item: self)
    
    var totalBytes: Double {
        Double(data.count)
    }
    
}

extension FileServiceSelectedFileItem {
    enum FileType {
        case video
        case audio
        case image
        case text
        case application
    }
    
    var mime: String {
        fileName.mimeType()
    }
    
    var specificFileType: FileType {
        let mime = mime
        if mime.mimeIsImage {
            return .image
        } else if mime.mimeIsVideo {
            return .video
        } else if mime.containsIgnoreCase(string: "audio") {
            return .audio
        } else if mime.containsIgnoreCase(string: "text") {
            return .text
        } else {
            return .application
        }
    }
    
    static func generateTempUrl(item: FileServiceSelectedFileItem) -> URL {
        if let url = item.path {
            return url
        }
        let cacheURL = FileManager.default.urls(for: .cachesDirectory,
                                                in: .userDomainMask)
            .first!
            .appendingPathComponent(item.fileName)
        do {
            try item.data.write(to: cacheURL, options: .atomicWrite)
        } catch let err {
            print("Failed with error:", err.localizedDescription)
        }
        return cacheURL
    }
}
