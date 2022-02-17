//
//  Web3MessageResolver.swift
//  Maskbook
//
//  Created by BradGao on 2021/8/20.
//  Copyright © 2021 dimension. All rights reserved.
//

import Combine
import Foundation
import OSLog
import PromiseKit
import SwiftyJSON
import web3swift
import WebExtension_Shim
import WebKit

struct MaskWeb3MessageRequest: Decodable {
    struct Web3RequestParam: Decodable {
        let method: String
        let id: Int
        let jsonrpc: String
        let params: JSON
    }
    
    let jsonrpc: String
    let id: String
    let params: Web3RequestParam
}

class Web3MessageResolver: MaskMessageResolver {
    internal weak var webView: WKWebView?
    private let decoder = JSONDecoder()

    class func canResolve(message: WKScriptMessage) -> Bool {
        guard message.name == MaskBrowser.maskbookJsonRPCScheme else { return false }
        guard let body = message.body as? [String: Any], let method = body["method"] as? String else { return false }
        return method == "send"
    }
    
    init(webView: WKWebView) {
        self.webView = webView
    }
    
    @discardableResult
    func resolve(message: WKScriptMessage) -> Bool {
        guard Self.canResolve(message: message) else { return false }
        guard let messageBody = JSON(rawValue: message.body)?.rawString() else {
            return false
        }
        guard let messageData = messageBody.data(using: .utf8),
              let request = try? decoder.decode(MaskWeb3MessageRequest.self, from: messageData) else {
            return false
        }
        DispatchQueue.global().async {
            guard let w3Provider = Web3ProviderFactory.provider else {
                os_log("%{public}s[%{public}ld], %{public}s: unsupport blockchain network: %{public}",
                       ((#file as NSString).lastPathComponent),
                       #line,
                       #function,
                       maskUserDefaults.network.name)
                return
            }
            
            switch request.params.method {
            case "getRPCurl":
                let respParam = ["rpcURL": w3Provider.provider.url.absoluteString]
                let resp = MaskPublicApiResponse<[String: String]>(id: request.params.id,
                                                              jsonrpc: request.params.jsonrpc,
                                                              result: respParam,
                                                              error: nil,
                                                              message: nil)
                self.sendResponseToWebView(response: resp, id: request.id)
                
            case "eth_coinbase":
                let respParam = ["coinbase": maskUserDefaults.defaultAccountAddress ?? ""]
                let resp = MaskPublicApiResponse<[String: String]>(id: request.params.id,
                                                              jsonrpc: request.params.jsonrpc,
                                                              result: respParam,
                                                              error: nil,
                                                              message: nil)
                self.sendResponseToWebView(response: resp, id: request.id)
                
            case "eth_getAccounts",
                 "eth_accounts":
                let accounts = [maskUserDefaults.defaultAccountAddress].compactMap { $0 }
                let resp = MaskPublicApiResponse<[String]>(id: request.params.id,
                                                      jsonrpc: request.params.jsonrpc,
                                                      result: accounts,
                                                      error: nil,
                                                      message: nil)
                self.sendResponseToWebView(response: resp, id: request.id)
                
            case "eth_sendTransaction":
                DispatchQueue.main.async {
                    self.presentSendConfirmPop(request: request)
                }
                
            case "personal_sign":
                DispatchQueue.main.async {
                    guard let params = request.params.params.array,
                          params.count > 1,
                          let message = params[0].string,
                          let fromAddress = params[1].string else {
                              self.sendFailResposneToWebView(code: -1, message: "Invalid Request", request: request)
                              return
                          }
                    self.signMessage(message: message, fromAddress: fromAddress, request: request)
                }
                
            default:
                self.sendWeb3Request(provider: w3Provider, request: request)
            }
        }
        
        return true
    }
    
    @discardableResult
    private func sendWeb3Request(provider: web3, request: MaskWeb3MessageRequest) -> Bool {
        guard let method = JSONRPCmethod(rawValue: request.params.method) else {
            return false
        }

        let web3Request = JSONRPCEncodablerequest(method: method, params: request.params.params.array)
        let queue = provider.requestDispatcher.queue
        queue.async { [weak self] in
            do {
                let respData = try Web3HttpProvider.postRaw(web3Request,
                                                            providerURL: provider.provider.url,
                                                            session: provider.provider.session)
                    .wait()
                self?.sendResponseToWebView(response: JSON(respData), id: request.id)
            } catch {
                os_log("%{public}s[%{public}ld], %{public}s: send web3 request fail: %{public}",
                       ((#file as NSString).lastPathComponent),
                       #line,
                       #function,
                       error.localizedDescription)
            }
        }
        return true
    }
    
//    func sendResponseToWebView<T: Encodable>(response: T, id: String) {
//        guard let wkWebview = webView else { return }
//        let response = HoloflowsRPC.Response(result: response, id: id)
//        HoloflowsRPC.dispatchResponse(webView: wkWebview,
//                                      name: MaskBrowser.maskbookJsonRPCScheme,
//                                      id: id,
//                                      result: .success(response),
//                                      completionHandler: nil)
//    }
    
    func sendFailResposneToWebView(code: Int, message: String, request: MaskWeb3MessageRequest) {
        let error = MaskPublicApiResponse<String>.ErrorMessage(code: code, message: message)
        let resp = MaskPublicApiResponse<String>(id: request.params.id ,
                                            jsonrpc: request.params.jsonrpc,
                                            result: nil,
                                            error: error,
                                            message: nil)
        sendResponseToWebView(response: resp, id: request.id)
    }
    
    func signMessage(message: String, fromAddress: String, request: MaskWeb3MessageRequest) {
        WalletCoreHelper.signMessage(message: message, fromAddress: fromAddress) { [weak self] result in
            switch result {
            case .success(let signature):
                let resp = MaskPublicApiResponse<[String]>(id: request.params.id,
                                                      jsonrpc: request.params.jsonrpc,
                                                      result: [signature],
                                                      error: nil,
                                                      message: nil)
                self?.sendResponseToWebView(response: resp, id: request.id)
                
            case .failure(let error):
                self?.sendFailResposneToWebView(code: -1, message: error.localizedDescription, request: request)
            }
        }
    }
}

// MARK: - SendConfirmPopViewDelegate
extension Web3MessageResolver: SendConfirmPopViewDelegate {
    enum Web3TransactionResponse {
        case signTransaction(_ transaction: EthereumTransaction, request: MaskWeb3MessageRequest)
        case sendTransaction(_ txHash: String, request: MaskWeb3MessageRequest)
        case fail(errorMessage: String, code: Int, request: MaskWeb3MessageRequest)
    }
    
    func web3TransactionResponse(response: Web3TransactionResponse) {
        switch response {
        case let .sendTransaction(txHash, request):
            let resp = MaskPublicApiResponse<String>(id: request.params.id,
                                                jsonrpc: request.params.jsonrpc,
                                                result: txHash,
                                                error: nil,
                                                message: nil)
            sendResponseToWebView(response: resp, id: request.id)
            
        case .signTransaction(_, request: _): break
            
        case let .fail(errorMessage, code, request):
            sendFailResposneToWebView(code: code, message: errorMessage, request: request)
        }
    }
    
    func presentSendConfirmPop(request: MaskWeb3MessageRequest) {
        guard let _ = JSONRPCmethod(rawValue: request.params.method) else {
            return
        }
        guard let params = request.params.params.array?.first?.rawValue as? [String: Any] else { return }
        guard let transaction = EthereumTransaction.fromJSON(params) else { return }
        guard let options = TransactionOptions.fromJSON(params) else { return }
        Coordinator.main.present(
            scene: .maskSendTransactionPopView(
                delegate: self,
                transaction: transaction,
                transactionOptions: options,
                request: request
            ),
            transition: .panModel(animated: true)
        )
    }
}
