//
//  Logging.swift
//  Maskbook
//
//  Created by Hugo L on 2022/1/24.
//  Copyright © 2022 dimension. All rights reserved.
//

import Foundation
import MaskLog

var log = Logger(label: "io.maskbook.maskbook")

/// Configure `swift-log` logging system to use OSLog backend
func setupLogging() {
    LoggingSystem.bootstrap(LoggingOSLog.init)
    log.logLevel = .debug
}
