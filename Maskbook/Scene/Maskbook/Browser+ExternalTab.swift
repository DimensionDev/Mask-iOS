//
//  Browser+ExternalTab.swift
//  Maskbook
//
//  Created by jk234ert on 10/16/20.
//  Copyright © 2020 dimension. All rights reserved.
//

import Foundation
import WebExtension_Shim

enum TabOpenMode {
    case `default`
    case externalWebView
    case application
}

extension Plugin {
    private var applicationHandledScheme: [String] {
        ["mailto", "itms-apps", "itms-appss"]
    }
    
    func openMode(for url: URL) -> TabOpenMode {
        if let scheme = url.scheme, applicationHandledScheme.contains(scheme) {
            return .application
        }
        for externalUri in externalURIs {
            if url.absoluteString.removingPercentEncoding?.range(of: externalUri, options: .regularExpression) != nil {
                return .externalWebView
            }
        }
        for universalLink in universalLinks {
            if url.absoluteString.removingPercentEncoding?.range(of: universalLink, options: .regularExpression) != nil {
                return .application
            }
        }

        return .default
    }
}
