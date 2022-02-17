//
//  DebugControl.swift
//  Maskbook
//
//  Created by sxiaojian on 2022/1/17.
//  Copyright © 2022 dimension. All rights reserved.
//

import Foundation

enum AppBuildKind {
    case debug
    case testFlight
    case appStore
}

enum DebugControl {
    // This is private because the use of 'appConfiguration' is preferred.
    private static let isTestFlight = Bundle.main.appStoreReceiptURL?.lastPathComponent == "sandboxReceipt"

    // This can be used to add debug statements.
    static var isDebug: Bool {
        #if DEBUG
            return true
        #else
            return false
        #endif
    }

    static var appBuildKind: AppBuildKind {
        if isDebug {
            return .debug
        } else if isTestFlight {
            return .testFlight
        } else {
            return .appStore
        }
    }

    static var isDebugEntryEnable: Bool {
        switch Self.appBuildKind {
        case .appStore:
            return false
            
        case .debug:
            return true
            
        case .testFlight:
            return true
        }
    }

    static let DebugEntryTapCount = 3
}
