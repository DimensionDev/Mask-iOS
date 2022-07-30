//
//  LogHandler.swift
//  
//
//  Created by Hugo L on 2022/7/27.
//

import Foundation

protocol HadesLogHandler: LogHandler {
    var loggerQueue: DispatchQueue? { get set }
}

extension HadesLogHandler {
    func log(level: Logger.Level, message: Logger.Message, metadata: Logger.Metadata?, file: String, function: String, line: UInt) {}
}
