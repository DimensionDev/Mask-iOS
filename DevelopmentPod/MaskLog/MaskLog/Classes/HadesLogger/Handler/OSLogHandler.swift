//
//  OSLogHandler.swift
//  
//
//  Created by Hugo L on 2022/7/27.
//

import Foundation
import os

class OSLogHandler: HadesLogHandler {
    var logLevel: Logger.Level = .warning
    var loggerQueue: DispatchQueue?
    var metadata: Logger.Metadata = [:]
    private let defaultLogger: OSLog
    private let label: String
    private var loggers: [String: OSLog] = [:]
    
    init(label: String, category: String = "default") {
        self.label = label
        self.defaultLogger = OSLog(subsystem: label, category: category)
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
        line: UInt) {
            if let metadata = metadata {
                self.metadata = metadata
            }
            var logger = self.defaultLogger
            if case .string(let category) = metadata?["category"] {
                guard let categoryLogger = self.loggers[category] else {
                    let categoryLogger = OSLog(subsystem: self.label, category: category)
                    self.loggers[category] = categoryLogger
                    logger = categoryLogger
                    return
                }
                logger = categoryLogger
            }
            os_log("%{public}s", log: logger, type: OSLogType.from(loggerLevel: level), message.description)
        }
}

extension OSLogType {
    static func from(loggerLevel: Logger.Level) -> Self {
        switch loggerLevel {
        case .trace:
            /// `OSLog` doesn't have `trace`, so use `debug`
            return .debug
        case .debug:
            return .debug
        case .info:
            return .info
        case .notice:
            // https://developer.apple.com/documentation/os/logging/generating_log_messages_from_your_code
            // According to the documentation, `default` is `notice`.
            return .default
        case .warning:
            /// `OSLog` doesn't have `warning`, so use `info`
            return .info
        case .error:
            return .error
        case .critical:
            return .fault
        }
    }
}
