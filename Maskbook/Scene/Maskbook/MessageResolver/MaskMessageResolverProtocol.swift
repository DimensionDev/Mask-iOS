//
//  MaskMessageResolverProtocol.swift
//  Maskbook
//
//  Created by Brad Gao on 2022/1/19.
//  Copyright © 2022 dimension. All rights reserved.
//

import Foundation
import WebExtension_Shim
import WebKit

struct MaskPublicApiResponse<T: Encodable>: Encodable {
    struct ErrorMessage: Encodable {
        let code: Int
        let message: String
    }
    
    let id: Int
    let jsonrpc: String
    let result: T?
    let error: ErrorMessage?
    let message: String?
}

protocol MaskMessageResolver {
    var webView: WKWebView? { get }
    
    static func canResolve(message: WKScriptMessage) -> Bool
}

extension MaskMessageResolver {
    func sendResponseToWebView<T: Encodable>(response: T, id: String) {
        guard let wkWebview = webView else { return }
        let response = HoloflowsRPC.Response(result: response, id: id)
        HoloflowsRPC.dispatchResponse(webView: wkWebview,
                                      name: MaskBrowser.maskbookJsonRPCScheme,
                                      id: id,
                                      result: .success(response),
                                      completionHandler: nil)
    }
}
