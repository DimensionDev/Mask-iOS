import Foundation

public struct HadesLogger {
    let label: String
    private let oslogHandler: OSLogHandler
    private let fileLogHandler: FileLogHandler
    
    public init(label: String) {
        self.label = label
        oslogHandler = OSLogHandler(label: label)
        fileLogHandler = FileLogHandler()
    }
    
    public func hadesHandler() -> LogHandler {
        let queue = DispatchQueue.init(label: label)
        var proxyHandler = ProxyLogHandler(loggerQueue: queue, logLevel: .debug, metadata: [:])
        proxyHandler.add(handler: oslogHandler)
        proxyHandler.add(handler: fileLogHandler)
        return proxyHandler
    }
    
    public func zipLogs() throws -> URL? {
        try fileLogHandler.zipLogs()
    }
}
