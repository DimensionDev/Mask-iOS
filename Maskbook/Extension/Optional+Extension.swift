//
//  Optional+Extension.swift
//  Maskbook
//
//  Created by Brad Gao on 2022/1/20.
//  Copyright © 2022 dimension. All rights reserved.
//

import Foundation
import web3swift

extension Optional where Wrapped == Double {
    var stringValue: String? {
        switch self {
        case .none:
            return nil
        case .some(let value):
            return "\(value)"
        }
    }
}

extension Optional where Wrapped == Bool {
    var boolValue: Bool {
        switch self {
        case .none:
            return false
        case .some(let value):
            return value
        }
    }
}

extension Optional {
    var isSome: Bool {
        switch self {
        case .none: return false
        case .some: return true
        }
    }
}

extension Optional {
    var isNone: Bool {
        switch self {
        case .none: return true
        case .some: return false
        }
    }
}
