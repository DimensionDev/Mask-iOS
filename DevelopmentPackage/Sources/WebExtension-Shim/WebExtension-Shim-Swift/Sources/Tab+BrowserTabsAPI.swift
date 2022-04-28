//
//  Tab+BrowserTabsAPI.swift
//  HoloflowsKit
//
//  Created by Cirno MainasuK on 2019-6-14.
//

import Foundation
import SwiftyJSON


extension Tab {

    open func browserTabsCreate(id: String, messageBody: String) {
        let messageResult: Result<WebExtension.Browser.Tabs.Create, RPC.Error> = HoloflowsRPC.parseRPC(messageBody: messageBody)
        switch messageResult {
        case let .success(create):
            if let taDelegate = delegate, let tabUrlString = create.options.url, let tabUrl = URL(string: tabUrlString), taDelegate.tab(self, shouldOpenExternallyForURL: tabUrl) {
                return
            }
            guard let tabs = self.browser?.tabs else {
                let result: Result<HoloflowsRPC.Response<Tab.Meta>, RPC.Error> = .failure(RPC.Error.serverError)
                HoloflowsRPC.dispatchResponse(webView: webView, id: id, result: result, completionHandler: completionHandler())
                return
            }

            DispatchQueue.main.async {
                tabs.create(options: create.options)
            }
            

        case let .failure(error):
            consolePrint(error.localizedDescription)
            let result: Result<HoloflowsRPC.Response<String>, RPC.Error> = .failure(error)
            HoloflowsRPC.dispatchResponse(webView: webView, id: id, result: result, completionHandler: completionHandler())
        }
    }

    open func browserTabsRemove(id: String, messageBody: String) {
        let messageResult: Result<WebExtension.Browser.Tabs.Remove, RPC.Error> = HoloflowsRPC.parseRPC(messageBody: messageBody)
        switch messageResult {
        case let .success(remove):
            if (self.browser?.tabs.remove(ids: [remove.tabId])) != nil {
                let result: Result<HoloflowsRPC.Response<String>, RPC.Error> = .success(.init(result: "", id: id))
                
                HoloflowsRPC.dispatchResponse(webView: webView, id: id, result: result, completionHandler: completionHandler())

            } else {
                let result: Result<HoloflowsRPC.Response<String>, RPC.Error> = .failure(RPC.Error.serverError)
                HoloflowsRPC.dispatchResponse(webView: webView, id: id, result: result, completionHandler: completionHandler())
            }

        case let .failure(error):
            consolePrint(error.localizedDescription)
            let result: Result<HoloflowsRPC.Response<String>, RPC.Error> = .failure(error)
            HoloflowsRPC.dispatchResponse(webView: webView, id: id, result: result, completionHandler: completionHandler())
        }
    }

    open func browserTabsQuery(id: String, messageBody: String) {
        let messageResult: Result<WebExtension.Browser.Tabs.Query, RPC.Error> = HoloflowsRPC.parseRPC(messageBody: messageBody)
        switch messageResult {
        case let .success(query):
            let tabMetas: [Tab.Meta]
            if let filterActive = query.queryInfo?["active"].bool, filterActive {
                // Return the top-most tab when set "active" query
                let meta = self.browser?.tabs.activeTabStack.unboxItems.last?.meta
                tabMetas = meta.flatMap { [$0] } ?? []
            } else {
                // Return tabs in create order
                tabMetas = self.browser?.tabs.storage.map { $0.meta } ?? []
            }
            let result: Result<HoloflowsRPC.Response<[Tab.Meta]> , RPC.Error> = .success(.init(result: tabMetas, id: id))
            HoloflowsRPC.dispatchResponse(webView: webView, id: id, result: result, completionHandler: completionHandler())

        case let .failure(error):
            consolePrint(error.localizedDescription)
            let result: Result<HoloflowsRPC.Response<String>, RPC.Error> = .failure(error)
            HoloflowsRPC.dispatchResponse(webView: webView, id: id, result: result, completionHandler: completionHandler())
        }
    }

    open func browserTabsUpdate(id: String, messageBody: String) {
        let messageResult: Result<WebExtension.Browser.Tabs.Update, RPC.Error> = HoloflowsRPC.parseRPC(messageBody: messageBody)
        switch messageResult {
        case let .success(update):
            let tab = self.browser?.tabs.storage.first(where: { $0.id == update.tabId })

            guard let targetTab = tab else {
                let result: Result<HoloflowsRPC.Response<String>, RPC.Error> = .failure(RPC.Error.invalidParams)
                HoloflowsRPC.dispatchResponse(webView: webView, id: id, result: result, completionHandler: completionHandler())
                return
            }
            
            if let urlString = update.updateProperties.url, let url = URL(string: urlString) {
                targetTab.webView.load(URLRequest(url: url))
            }
            
            if let active = update.updateProperties.active, active == true {
                // Pop target to stack top
                browser?.tabs.update(tab: targetTab)
                targetTab.delegate?.tab(targetTab, shouldActive: true)
            }

            let result: Result<HoloflowsRPC.Response<Tab.Meta> , RPC.Error> = .success(.init(result: targetTab.meta, id: id))
            HoloflowsRPC.dispatchResponse(webView: webView, id: id, result: result, completionHandler: completionHandler())

        case let .failure(error):
            consolePrint(error.localizedDescription)
            let result: Result<HoloflowsRPC.Response<String>, RPC.Error> = .failure(error)
            HoloflowsRPC.dispatchResponse(webView: webView, id: id, result: result, completionHandler: completionHandler())
        }
    }

    open func browserTabsExecuteScript(id: String, messageBody: String) {
        let messageResult: Result<WebExtension.Browser.Tabs.ExecuteScript, RPC.Error> = HoloflowsRPC.parseRPC(messageBody: messageBody)

        switch messageResult {
        case let .success(executeScript):
            var targetTab = self
            if executeScript.tabID == -1, self.id == -1 {
                // do nothing
            } else {
                guard let tabs = browser?.tabs,
                let target = tabs.storage.first(where: { $0.id == (executeScript.tabID ?? self.id) }) else {
                    let result: Result<HoloflowsRPC.Response<String>, RPC.Error> = .failure(RPC.Error.internalError)
                    HoloflowsRPC.dispatchResponse(webView: webView, id: id, result: result, completionHandler: completionHandler())
                    return
                }

                targetTab = target
            }

            let script = executeScript.details.code ?? ""
            consolePrint("targetTab[\(targetTab.id)] eval: \(script)")
            targetTab.webView.evaluateJavaScript(script) { [weak self] any, error in
                guard let `self` = self else { return }
                if let error = error {
                    let result: Result<HoloflowsRPC.Response<String>, RPC.Error> = .failure(RPCError.serverError)
                    HoloflowsRPC.dispatchResponse(webView: self.webView, id: id, result: result, completionHandler: self.completionHandler())
                    consolePrint(error.localizedDescription)

                } else {
                    let result: Result<HoloflowsRPC.Response<JSON>, RPC.Error> = {
                        guard let any = any else {
                            return .success(HoloflowsRPC.Response(result: JSON.null, id: id))
                        }
                        guard let value = JSON(rawValue: any) else {
                            return .failure(RPCError.serverError)
                        }
                        return .success(HoloflowsRPC.Response(result: value, id: id))
                    }()
                    consolePrint("\(result), \(String(describing: any))")
                    HoloflowsRPC.dispatchResponse(webView: self.webView, id: id, result: result, completionHandler: self.completionHandler())
                }
            }   // end targetTab.seb.evaluateJavaScript(…)

        case let .failure(error):
            consolePrint(error.localizedDescription)
            let result: Result<HoloflowsRPC.Response<String>, RPC.Error> = .failure(error)
            HoloflowsRPC.dispatchResponse(webView: webView, id: id, result: result, completionHandler: completionHandler())
        }
    }

}
