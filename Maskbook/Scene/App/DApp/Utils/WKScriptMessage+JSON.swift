//
//  WKMessage.swift
//  Maskbook
//
//  Created by yzj on 2022/1/17.
//  Copyright © 2022 dimension. All rights reserved.
//

import WebKit

extension WKScriptMessage {
    var object: [String: Any] {
        switch body {
        case let string as String:
            if let data = string.data(using: .utf8),
               let object = try? JSONSerialization.jsonObject(with: data, options: []),
               let dict = object as? [String: Any] {
                return dict
            }
            return [:]

        case let object as [String: Any]: return object
        default: return [:]
        }
    }
}
