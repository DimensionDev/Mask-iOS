//
//  Tab+Eval.swift
//  Alamofire
//
//  Created by Cirno MainasuK on 2020-5-25.
//

import Foundation

import SwiftyJSON

extension Tab {
    
    // eval script on caller
    open func eval(id: String, messageBody: String) {
        let messageResult: Result<WebExtension.Eval, RPC.Error> = HoloflowsRPC.parseRPC(messageBody: messageBody)
        switch messageResult {
        case let .success(eval):
            let targetTab = self
            let script = eval.string
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
            let result: Result<HoloflowsRPC.Response<String>, RPC.Error> = .failure(error)
            HoloflowsRPC.dispatchResponse(webView: webView, id: id, result: result, completionHandler: completionHandler())
        }
    }
    
}
