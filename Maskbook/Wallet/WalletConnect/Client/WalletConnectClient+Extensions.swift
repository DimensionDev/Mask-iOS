//
//  WalletConnectClient+Extensions.swift
//  Maskbook
//
//  Created by sxiaojian on 2021/9/28.
//  Copyright © 2021 dimension. All rights reserved.
//

import Foundation
import WalletConnectSwift

extension Session {
    var data: Data? {
        try? JSONEncoder().encode(self)
    }

    static func from(data: Data) -> Self? {
        try? JSONDecoder().decode(Self.self, from: data)
    }
}

extension WCURL {
    var partiallyPercentEncodedStr: String {
        let params = "bridge=\(bridgeURL.absoluteString)&key=\(key)"
            .addingPercentEncoding(withAllowedCharacters: .alphanumerics) ?? ""
        return "wc:\(topic)@\(version)?\(params))"
    }

    var fullyPercentEncodedStr: String {
        absoluteString.addingPercentEncoding(withAllowedCharacters: .alphanumerics) ?? ""
    }
}
