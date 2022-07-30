//
//  FileLogHandler.swift
//  
//
//  Created by Hugo L on 2022/7/27.
//

import Foundation
import ZIPFoundation

class FileLogHandler: HadesLogHandler {
    enum Error: Swift.Error {
        // maximumNumberOfLogFiles should bigger then 0
        case wrongMaximumNumberOfLogFiles
    }
    
    var logLevel: Logger.Level = .warning
    var loggerQueue: DispatchQueue?
    var metadata: Logger.Metadata = [:]
    
    var bufferSize: Int = 512
    var currentLogFile: LogFile?
    var fileDateFormatter: DateFormatter
    var maximumFileSize: Int = 5_120_000
    var maximumNumberOfLogFiles: Int = 5
    private var buffer: Data?
    private var logFileManager: LogFileManager
    
    init() {
        fileDateFormatter = DateFormatter()
        fileDateFormatter.dateFormat = "yyyy-MM-dd"
        
        let baseURL = try! FileManager.default.url(
            for: .cachesDirectory,
            in: .userDomainMask,
            appropriateFor: nil,
            create: true
        )
        let logDirectory = baseURL.appendingPathComponent("hades-log", isDirectory: true)
        logFileManager = LogFileManager(logDirectory: logDirectory)
    }
    
    subscript(metadataKey metadataKey: String) -> Logger.Metadata.Value? {
        get {
            return self.metadata[metadataKey]
        }
        set {
            self.metadata[metadataKey] = newValue
        }
    }
    
    func log(
        level: Logger.Level,
        message: Logger.Message,
        metadata: Logger.Metadata?,
        source: String,
        file: String,
        function: String,
        line: UInt
    ) {
        if self.buffer == nil {
            self.buffer = Data()
        }
        guard let data = "\n\(message)".data(using: .utf8) else {
            return
        }
        if let buffer = buffer, (buffer.count + data.count >= bufferSize) {
            try? _flush(true)
        }
        self.buffer?.append(data)
        try? self.flushIfNeeded()
    }
    
    /// Delete the oldest file if the log exceeds the `maximumNumberOfLogFiles` number.
    func cleanup() throws {
        let logFiles = try logFileManager.queryLogFiles()
        guard logFiles.count > maximumNumberOfLogFiles else {
            return
        }
        guard (logFiles.count - maximumNumberOfLogFiles) > 0 else {
            throw Error.wrongMaximumNumberOfLogFiles
        }
        let removeLogs = logFiles.suffix(logFiles.count - maximumNumberOfLogFiles)
        for file in removeLogs {
            try logFileManager.remove(at: file.url)
        }
    }
    
    /// write buffer to an log file
    func flush() throws {
        loggerQueue?.async {
            try? self._flush(false)
        }
    }
    
    /// generate a name for a log file.
    func generateNameForLogFile() throws -> URL {
        let logFiles = try logFileManager.queryLogFiles()
        guard let indexWithExtention = logFiles.first?.url.lastPathComponent.split(separator: "-").last,
              let indexStr = indexWithExtention.split(separator: ".").first,
              let index = Int(indexStr) else {
            let name = "\(fileDateFormatter.string(from: Date()))-\(1).log"
            return logFileManager.logDirectory.appendingPathComponent(name)
        }
        let name = "\(fileDateFormatter.string(from: Date()))-\(index + 1).log"
        return logFileManager.logDirectory.appendingPathComponent(name)
    }
    
    
    /// create a log file
    /// - Returns: an log file include its' size and url.
    @discardableResult
    func touchNewLogFile() throws -> LogFile? {
        let logFileURL = try generateNameForLogFile()
        _ = logFileManager.createLogFile(at: logFileURL)
        try cleanup()
        let logFiles = try logFileManager.queryLogFiles()
        currentLogFile = logFiles.first
        return currentLogFile
    }
    
    /// remove all logs
    func removeAllLogs() throws {
        try logFileManager.removeAllLogs()
    }
    
    /// zip all logs into a zip file
    /// - Returns: a url of log file
    func zipLogs() throws -> URL? {
        try loggerQueue?.sync {
            try? self._flush(false)
            return try self._zipLogs()
        }
    }
    
    private func _zipLogs() throws -> URL? {
        let archiveURL = logFileManager.logDirectory.appendingPathComponent("logs.zip")
        if logFileManager.isExistsDirectory(at: archiveURL) {
            try logFileManager.remove(at: archiveURL)
        }
        guard let archive = Archive(url: archiveURL, accessMode: .create) else  {
            return nil
        }
        let logFiles = try logFileManager.queryLogFiles()
        for file in logFiles.filter({ $0.url.lastPathComponent.hasSuffix(".log") }) {
            try archive.addEntry(
                with: file.url.lastPathComponent,
                relativeTo: file.url.deletingLastPathComponent()
            )
        }
        try archive.data?.write(to: archiveURL)
        return archiveURL
    }
    
    
    // a helper method for `flush`
    private func _flush(_ touchNewFile: Bool = true) throws {
        guard var buffer = buffer else {
            return
        }
        if currentLogFile == nil {
            try touchNewLogFile()
        }
        guard let currentLogFile = currentLogFile else {
            return
        }
        
        while true {
            let fileURL = currentLogFile.url
            let writtenData = buffer.prefix(bufferSize)
            buffer = buffer.subdata(in: writtenData.count..<buffer.count)
            try logFileManager.append(writtenData, at: fileURL)
            self.currentLogFile?.size += writtenData.count
            if touchNewFile {
                try touchNewLogFile()
            }
            
            if buffer.count < bufferSize {
                break
            }
        }
        self.buffer = buffer
    }
    
    // It triggers `flush` if size of buffer is bigger than `bufferSize`.
    private func flushIfNeeded() throws {
        guard (buffer?.count ?? 0) >= bufferSize else {
            return
        }
        try _flush(true)
    }
}
