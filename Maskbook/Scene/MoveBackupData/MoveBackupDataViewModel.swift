//
//  MoveBackupDataViewModel.swift
//  Maskbook
//
//  Created by xiaojian sun on 2022/3/2.
//  Copyright © 2022 dimension. All rights reserved.
//

import Foundation

class MoveBackupDataViewModel {
    var backupFiles: [URL]?
    
    func detectBackupFiles() {
        backupFiles = try? MoveBackupDataViewModel.detectBackupFiles()
    }
    
    func moveToNewDirectory(directory: URL) -> Bool {
        let fileManager = FileManager.default
        guard let backupFiles = backupFiles else {
            return false
        }
        do {
            for backupFile in backupFiles {
                let destination = directory.appendingPathComponent(backupFile.lastPathComponent)
                if fileManager.fileExists(atPath: destination.absoluteString) {
                    try fileManager.removeItem(at: destination)
                }
                try fileManager.moveItem(at: backupFile, to: destination)
            }
            return true
        } catch {
            print(error)
            return false
        }
    }
    
    static func detectBackupFiles() throws -> [URL] {
        let url = URL.documents
        var backupFiles = [URL]()
        let fileManager = FileManager.default
        if let enumerator = fileManager.enumerator(at: url,
                                                   includingPropertiesForKeys: [.isRegularFileKey],
                                                   options: [.skipsHiddenFiles, .skipsPackageDescendants])
        {
            for case let fileURL as URL in enumerator {
                do {
                    let fileAttributes = try fileURL.resourceValues(forKeys: [.isRegularFileKey])
                    if let isRegularFile = fileAttributes.isRegularFile,
                       isRegularFile == true
                    {
                        if isBinBackupFile(fileURL: fileURL) || isPDFBackupFile(fileURL: fileURL) {
                            backupFiles.append(fileURL)
                        }
                    }
                } catch { print(error, fileURL) }
            }
        }
        return backupFiles
    }
    
    static func isPDFBackupFile(fileURL: URL) -> Bool {
        guard let fileName = fileURL.pathComponents.last else { return false }
        if fileName.hasSuffix("pdf"), fileName.hasPrefix("mask-persona-") {
            return true
        }
        return false
    }
    
    static func isBinBackupFile(fileURL: URL) -> Bool {
        guard let fileName = fileURL.pathComponents.last else { return false }
        if fileName.hasSuffix("bin"), fileName.hasPrefix("maskbook-keystore-backup-") {
            return true
        }
        return false
    }
}
