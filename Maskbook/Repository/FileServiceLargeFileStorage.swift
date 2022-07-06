//
//  FileServiceLargeFileStorage.swift
//  Maskbook
//
//  Created by xiaojian sun on 2022/7/5.
//  Copyright © 2022 dimension. All rights reserved.
//

import Foundation
import SwiftUI

struct FileServiceLargeFileStorage {
    static let fileManager = FileManager.default
    
    static let fileServiceDownloadDirectory = URL.documents.appendingPathComponent("FileServiceDownload")
    
    static func createFileServiceDownloadDirectory() {
        let exist = fileManager.fileExists(atPath: fileServiceDownloadDirectory.path)
        if !exist {
            try? fileManager.createDirectory(at: fileServiceDownloadDirectory, withIntermediateDirectories: true)
        }
    }
    
    static func fileServicePath(id: String) -> URL {
        createFileServiceDownloadDirectory()
        return fileServiceDownloadDirectory.appendingPathComponent(id.base64URLEscaped(), isDirectory: false)
    }
    
    static func data(of id: String) -> Data? {
        try? Data(contentsOf: fileServicePath(id: id))
    }
    
    static func deleteFile(id: String) {
        try? fileManager.removeItem(at: fileServicePath(id: id))
    }
    
    static func save(id: String, content: Data) {
        let path = fileServicePath(id: id)
        if fileManager.fileExists(atPath: path.path) {
            try? fileManager.removeItem(at: path)
        }
        fileManager.createFile(atPath: path.path, contents: content)
    }
}
