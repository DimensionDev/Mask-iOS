//
//  Tab+BrowserRuntimeAPI.swift
//  HoloflowsKit
//
//  Created by Cirno MainasuK on 2019-6-15.
//

import Foundation

import SwiftyJSON

extension Tab {

    open func browserRuntimeGetURL(id: String, messageBody: String) {
        let messageResult: Result<WebExtension.Browser.Runtime.GetURL, RPC.Error> = HoloflowsRPC.parseRPC(messageBody: messageBody)
        switch messageResult {
        case let .success(getURL):
            // FIXME:

            let path: String = {
                let prefix = "/"
                let path = getURL.path
                if path.hasPrefix(prefix) {
                    return String(path.dropFirst(prefix.count))
                } else {
                    return path
                }

            }()
            let url = "holoflows-extension://" + [getURL.extensionID, path].joined(separator: "/")
            consolePrint(url)

            let result: Result<HoloflowsRPC.Response<String>, RPC.Error> = .success(HoloflowsRPC.Response(result: url, id: id))
            HoloflowsRPC.dispatchResponse(webView: webView, id: id, result: result, completionHandler: completionHandler())

        case let .failure(error):
            consolePrint(error.localizedDescription)
            let result: Result<HoloflowsRPC.Response<String>, RPC.Error> = .failure(error)
            HoloflowsRPC.dispatchResponse(webView: webView, id: id, result: result, completionHandler: completionHandler())
        }
    }

}

