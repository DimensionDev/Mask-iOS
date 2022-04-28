//
//  Tab+URLAPI.swift
//  HoloflowsKit
//
//  Created by Cirno MainasuK on 2019-6-24.
//

import Foundation


extension Tab {

    open func URLCreateObjectURL(id: String, messageBody: String) {
        let messageResult: Result<WebExtension.URL.CreateObjectURL, RPC.Error> = HoloflowsRPC.parseRPC(messageBody: messageBody)
        switch messageResult {
        case let .success(createObjectURL):
            guard createObjectURL.isDataValid else {
            let result: Result<HoloflowsRPC.Response<String>, RPC.Error> = .failure(.invalidParams)
                HoloflowsRPC.dispatchResponse(webView: webView, id: id, result: result, completionHandler: completionHandler())
                return
            }

            guard let url = URL(string: createObjectURL.url),
            let blobResourceManager = delegate?.tab(self, pluginResourceProviderForURL: url) as? BlobResourceManager else {
                let result: Result<HoloflowsRPC.Response<String>, RPC.Error> = .failure(.internalError)
                HoloflowsRPC.dispatchResponse(webView: webView, id: id, result: result, completionHandler: completionHandler())
                return
            }

            do {
                try blobResourceManager.save(createObjectURL: createObjectURL)

                let result: Result<HoloflowsRPC.Response<String>, RPC.Error> = .success(HoloflowsRPC.Response(result: "", id: id))
                HoloflowsRPC.dispatchResponse(webView: webView, id: id, result: result, completionHandler: completionHandler())

            } catch {
                let result: Result<HoloflowsRPC.Response<String>, RPC.Error> = .failure(.serverError)
                HoloflowsRPC.dispatchResponse(webView: webView, id: id, result: result, completionHandler: completionHandler())
            }

        case let .failure(error):
            let result: Result<HoloflowsRPC.Response<String>, RPC.Error> = .failure(error)
            HoloflowsRPC.dispatchResponse(webView: webView, id: id, result: result, completionHandler: completionHandler())
        }
    }

}
