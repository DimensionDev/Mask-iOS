//
//  ProxyLogHandler.swift
//  
//
//  Created by Hugo L on 2022/7/27.
//

import Foundation

struct ProxyLogHandler: HadesLogHandler {
    var logLevel: Logger.Level
    var loggerQueue: DispatchQueue?
    var metadata: Logger.Metadata {
        didSet {
            prettyMetadata = prettify(metadata)
        }
    }
    private var handlers: [LogHandler] = []
    private var prettyMetadata: String?
    
    init(
        loggerQueue: DispatchQueue,
        logLevel: Logger.Level,
        metadata: Logger.Metadata
    ) {
        self.loggerQueue = loggerQueue
        self.logLevel = logLevel
        self.metadata = metadata
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
        loggerQueue?.async {
            var combinedPrettyMetadata = self.prettyMetadata
            if let metadataOverride = metadata, !metadataOverride.isEmpty {
                combinedPrettyMetadata = self.prettify(
                    self.metadata.merging(metadataOverride) {
                        return $1
                    }
                )
            }
            let lastFileComponent = file.components(separatedBy: "/").last ?? ""
            var formedMessage = "\(lastFileComponent):\(line) \(function): \(message.description)"
            if case .trace = level, combinedPrettyMetadata != nil {
                formedMessage += " -- " + combinedPrettyMetadata!
            }
            let message = Logger.Message(stringLiteral: formedMessage)
            self.handlers.forEach { handler in
                handler.log(
                    level: level,
                    message: message,
                    metadata: metadata,
                    source: source,
                    file: file,
                    function: function,
                    line: line
                )
            }
        }
    }
    
    mutating func add(handler: HadesLogHandler) {
        var handler = handler
        handler.loggerQueue = loggerQueue
        self.handlers.append(handler)
    }
    
    private func prettify(_ metadata: Logger.Metadata) -> String? {
        if metadata.isEmpty {
            return nil
        }
        return metadata.map {
            "\($0)=\($1)"
        }.joined(separator: " ")
    }
}
