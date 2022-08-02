//
//  Logging.swift
//  Maskbook
//
//  Created by Hugo L on 2022/1/24.
//  Copyright © 2022 dimension. All rights reserved.
//

import Foundation
import MaskLog


let hadesLogger = HadesLogger(label: "io.maskbook.maskbook")
var log = Logger(label: "io.maskbook.maskbook")

/// Configure `swift-log` logging system to use OSLog backend
func setupLogging() {
    let handler = hadesLogger.hadesHandler()
    log = Logger(label: "io.maskbook.maskbook") { label in
        handler
    }
    log.logLevel = .debug
    LoggingSystem.bootstrap() { _ in handler }
}
