//
//  LogFileManager.swift
//  
//
//  Created by Hugo L on 2022/7/27.
//

import Foundation

struct LogFileManager {
    let logDirectory: URL
    private let fileManager = FileManager.default
    
    init(logDirectory: URL) {
        self.logDirectory = logDirectory
        try? createEmptyDirectoryIfNeeded(at: logDirectory)
    }
    
    /// create a new log file if not exist
    @discardableResult
    func createLogFile(at url: URL) -> Bool {
        fileManager.createFile(atPath: url.path, contents: nil)
    }
    
    func createEmptyDirectoryIfNeeded(at url: URL) throws {
        guard !isExistsDirectory(at: url) else {
            return
        }
        try fileManager.createDirectory(
            atPath: url.path,
            withIntermediateDirectories: true,
            attributes: nil
        )
    }
    
    /// load all log files sorted by created timestamp
    func queryLogFiles() throws -> [LogFile] {
        let path = logDirectory.path
        let paths = try fileManager.contentsOfDirectory(atPath: path)
        let fileURLs = paths.compactMap { logDirectory.appendingPathComponent($0) }
        let logFiles = fileURLs.map { url -> LogFile in
            let attributes = try? fileManager.attributesOfItem(atPath: url.path)
            let createDate = attributes?[.creationDate] as? Date
            return LogFile(
                url: url,
                createTimestamp: createDate?.timeIntervalSince1970 ?? 0,
                size: (attributes?[.size] as? Int) ?? 0
            )
        }
        return logFiles.sorted { lf, rf in
            lf.createTimestamp > rf.createTimestamp
        }
    }
    
    /// append data to current log file
    func append(_ data: Data?, at url: URL) throws {
        guard let data = data else {
            return
        }
        guard fileManager.fileExists(atPath: url.path) else {
            try data.write(to: url, options: [.atomic])
            return
        }
        let fileHandle = try FileHandle(forWritingTo: url)
        fileHandle.seekToEndOfFile()
        fileHandle.write(data)
        fileHandle.closeFile()
    }
    
    func removeAllLogs() throws {
        try removeDirectory(at: logDirectory)
        try createEmptyDirectoryIfNeeded(at: logDirectory)
    }
    
    
    func remove(at url: URL) throws {
        try fileManager.removeItem(atPath: url.path)
    }

    func removeDirectory(at url: URL) throws {
        if isExistsDirectory(at: url) {
            try fileManager.removeItem(at: url)
        }
    }

    func isExistsDirectory(at url: URL) -> Bool {
        var isDirectory: ObjCBool = false
        return fileManager.fileExists(atPath: url.path, isDirectory: &isDirectory)
    }
}

struct LogFile {
    let url: URL
    let createTimestamp: TimeInterval
    var size: Int
}
