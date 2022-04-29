//
//  Tab+MessageExchange.swift
//  HoloflowsKit
//
//  Created by Cirno MainasuK on 2019-6-22.
//

import Foundation

private let exchangeMessageQueue = DispatchQueue(label: "com.dimension.mask.exchange")

extension Tab {

    open func sendMessage(id: String, messageBody: String) {
        let meta = self.meta
        let url = webView.url?.absoluteString
        let completionHandler = completionHandler()
        
        exchangeMessageQueue.async { [weak self] in
            guard let `self` = self else { return }
            let result: Result<WebExtension.SendMessage, RPC.Error> = HoloflowsRPC.parseRPC(messageBody: messageBody)
            
            switch result {
            case let .success(sendMessage):
                let sender = WebExtension.Browser.Runtime.MessageSender(tabMeta: meta, id: sendMessage.extensionID, url: url)
                
                // transfer message to target
                let onMessage = WebExtension.OnMessage(fromMessageSender: sender, sendMessage: sendMessage)
                let request = HoloflowsRPC.ServerRequest(params: onMessage, id: id)
                if let tabID = sendMessage.tabId {
                        if let targetTab = self.browser?.tabs.storage.first(where: { $0.id == tabID }) {
                            HoloflowsRPC.dispathRequest(webView: targetTab.webView, request: request, completionHandler: completionHandler)
                        } else {
                            let result: Result<HoloflowsRPC.Response<WebExtension.OnMessage>, RPC.Error> = .failure(RPC.Error.invalidParams)
                            HoloflowsRPC.dispatchResponse(webView: self.webView, id: id, result: result, completionHandler: completionHandler)
                        }
                } else {
                        if let browser = self.browser {
                            var allTabs = [Tab]()
                            allTabs.append(contentsOf: browser.tabs.storage)
                            allTabs.append(browser.tabs.backgroundTab)

                            for targetTab in allTabs {
                                guard targetTab.id != self.id else { continue }
                                HoloflowsRPC.dispathRequest(webView: targetTab.webView, request: request, completionHandler: completionHandler)
                            }
                        }

                        let result: Result<HoloflowsRPC.Response<String>, RPC.Error> = .success(.init(result: "", id: id))
                        HoloflowsRPC.dispatchResponse(webView: self.webView, id: id, result: result, completionHandler: completionHandler)
                }
                
            case let .failure(error):
                    let result: Result<HoloflowsRPC.Response<WebExtension._Echo>, RPC.Error> = .failure(error)
                    HoloflowsRPC.dispatchResponse(webView: self.webView, id: id, result: result, completionHandler: completionHandler)
            }   // end switch
        }
    }
    
}
