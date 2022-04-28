//
//  Tab+BrowserDownloadsAPI.swift
//  HoloflowsKit
//
//  Created by Cirno MainasuK on 2019-6-19.
//

import Foundation


extension Tab {

    open func browserDownloadsDownload(id: String, messageBody: String) {
        let messageResult: Result<WebExtension.Browser.Downloads.Download, RPC.Error> = HoloflowsRPC.parseRPC(messageBody: messageBody)
        switch messageResult {
        case let .success(download):
            guard let url = URL(string: download.options.url) else {
                let result: Result<HoloflowsRPC.Response<String>, RPC.Error> = .failure(.invalidParams)
                HoloflowsRPC.dispatchResponse(webView: webView, id: id, result: result, completionHandler: completionHandler())
                return
            }

            guard let resourceProvider = delegate?.tab(self, pluginResourceProviderForURL: url) else {
                let result: Result<HoloflowsRPC.Response<String>, RPC.Error> = .failure(.internalError)
                HoloflowsRPC.dispatchResponse(webView: webView, id: id, result: result, completionHandler: completionHandler())
                return
            }

            downloadsDelegate?.tab(self, willDownloadBlobWithOptions: download.options)
            // Note: Delay 1 sec to solve createObjectURL script call before download bug
            DispatchQueue.main.asyncAfter(deadline: .now() + 1) {
                consolePrint("browser.downloads.download: \(download)")
                resourceProvider.data(from: url) { [weak self] result in
                    guard let `self` = self else {
                        return
                    }
                    switch result {
                    case let .success(success):
                        let (data, response) = success
                        let result: Result<HoloflowsRPC.Response<String>, RPC.Error> = .success(HoloflowsRPC.Response(result: "", id: id))
                        HoloflowsRPC.dispatchResponse(webView: self.webView, id: id, result: result, completionHandler: self.completionHandler())

                        self.downloadsDelegate?.tab(self, didDownloadBlobWithOptions: download.options, result: .success((data, response)))

                    case let .failure(error):
                        consolePrint(error.localizedDescription)
                        let result: Result<HoloflowsRPC.Response<String>, RPC.Error> = .failure(.serverError)
                        HoloflowsRPC.dispatchResponse(webView: self.webView, id: id, result: result, completionHandler: self.completionHandler())
                    }
                }
            }

        case let .failure(error):
            let result: Result<HoloflowsRPC.Response<String>, RPC.Error> = .failure(error)
            HoloflowsRPC.dispatchResponse(webView: self.webView, id: id, result: result, completionHandler: completionHandler())
        }
    }

}
