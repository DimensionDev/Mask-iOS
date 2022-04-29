//
//  Tab+Fetch.swift
//  HoloflowsKit
//
//  Created by Cirno MainasuK on 2019-7-9.
//

import Foundation
import Alamofire


extension Tab {

    typealias Result = Swift.Result

    open func fetch(id: String, messageBody: String) {
        let messageResult: Result<WebExtension.Fetch, RPC.Error> = HoloflowsRPC.parseRPC(messageBody: messageBody)
        switch messageResult {
        case let .success(fetch):
            consolePrint(fetch.request.url)
            guard let url = URL(string: fetch.request.url) else {
                let result: Result<HoloflowsRPC.Response<String>, RPC.Error> = .failure(RPC.Error.invalidParams)
                HoloflowsRPC.dispatchResponse(webView: webView, id: id, result: result, completionHandler: completionHandler())
                return
            }

            // fetch local resource
            if let recourceProvider = delegate?.tab(self, pluginResourceProviderForURL: url) {
                recourceProvider.data(from: url) { [weak self] result in
                    guard let `self` = self else {
                        return
                    }

                    switch result {
                    case let .success(success):
                        let (data, response) = success

                        let fetchResponse: WebExtension.Fetch.Response
                        if let dataString = String(data: data, encoding: .utf8) {
                            let data = WebExtension.StringOrBlob(type: .text, content: dataString, mimeType: response.mimeType ?? "")
                            fetchResponse = WebExtension.Fetch.Response(status: 200,
                                                                        statusText: HTTPResponseStatus(statusCode: 200).reasonPhrase,
                                                                        data: data)
                            consolePrint(dataString.prefix(300))
                        } else {
                            let data = WebExtension.StringOrBlob(type: .blob, content: data.base64EncodedString(), mimeType: response.mimeType ?? "")
                            fetchResponse = WebExtension.Fetch.Response(status: 200,
                                                                        statusText: HTTPURLResponse.localizedString(forStatusCode: 200),
                                                                        data: data)
                            consolePrint(data)
                        }


                        let result: Result<HoloflowsRPC.Response<WebExtension.Fetch.Response>, RPC.Error> = .success(HoloflowsRPC.Response(result: fetchResponse, id: id))
                        DispatchQueue.main.async { [weak self] in
                            guard let `self` = self else { return }
                            HoloflowsRPC.dispatchResponse(webView: self.webView, id: id, result: result, completionHandler: self.completionHandler())
                        }
                    case let .failure(error):
                        let result: Result<HoloflowsRPC.Response<String>, RPC.Error> = .failure(RPC.Error.internalError)
                        HoloflowsRPC.dispatchResponse(webView: self.webView, id: id, result: result, completionHandler: self.completionHandler())
                        consolePrint(error.localizedDescription)
                        return
                    }   // end switch
                }   // end resourceProvider.data(from:) { }

                return
            }   // end url.scheme == …

            // fetch remote resource
            let group = DispatchGroup()

            group.enter()
            self.webView.configuration.websiteDataStore.httpCookieStore.getAllCookies { cookies in
                HTTPCookieStorage.shared.setCookies(cookies, for: URL(string: "https://m.facebook.com")!, mainDocumentURL: nil)
                group.leave()
            }

            group.notify(queue: .main) {

                let request: URLRequest = {
                    var request = URLRequest(url: url, cachePolicy: .useProtocolCachePolicy, timeoutInterval: 10.0)
                    request.httpMethod = fetch.request.method
                    let cookies = HTTPCookieStorage.shared.cookies(for: url)
                    let dict = HTTPCookie.requestHeaderFields(with: cookies ?? [])
                    for (key, value) in dict {
                        request.setValue(value, forHTTPHeaderField: key)
                    }
                    for (key, value) in fetch.request.headers {
                        request.setValue(value, forHTTPHeaderField: key)
                    }
                    consolePrint(dict)
                    if let body = fetch.request.body {
                        request.httpBody = body.data
                    }
                    return request
                }()
                self.session.request(request).response { [weak self] (defaultDataResponse: Alamofire.AFDataResponse<Data?>) in
                    let _data = defaultDataResponse.data
                    let _response = defaultDataResponse.response
                    let _error = defaultDataResponse.error

                    consolePrint(defaultDataResponse.request)

                    guard let `self` = self else { return }
                    guard _error == nil,
                    let response = _response,
                    let data = _data else {
                        let result: Result<HoloflowsRPC.Response<String>, RPC.Error> = .failure(RPC.Error.internalError)
                        HoloflowsRPC.dispatchResponse(webView: self.webView, id: id, result: result, completionHandler: self.completionHandler())
                        consolePrint(_error?.localizedDescription ?? "nil")
                        return
                    }

                    let fetchResponse: WebExtension.Fetch.Response
                    if let dataString = String(data: data, encoding: .utf8) {
                        let data = WebExtension.StringOrBlob(type: .text, content: dataString, mimeType: response.mimeType ?? "")
                        fetchResponse = WebExtension.Fetch.Response(status: response.statusCode,
                                                                    statusText: HTTPResponseStatus(statusCode: response.statusCode).reasonPhrase,
                                                                    data: data)
                        consolePrint(dataString.prefix(300))
                    } else {
                        let data = WebExtension.StringOrBlob(type: .blob, content: data.base64EncodedString(), mimeType: response.mimeType ?? "")
                        fetchResponse = WebExtension.Fetch.Response(status: response.statusCode,
                                                                    statusText: HTTPURLResponse.localizedString(forStatusCode: response.statusCode),
                                                                    data: data)
                        consolePrint(data.content.prefix(300))
                    }

                    let result: Result<HoloflowsRPC.Response<WebExtension.Fetch.Response>, RPC.Error> = .success(HoloflowsRPC.Response(result: fetchResponse, id: id))

                    DispatchQueue.main.async { [weak self] in
                        guard let `self` = self else { return }
                        HoloflowsRPC.dispatchResponse(webView: self.webView, id: id, result: result, completionHandler: self.completionHandler())
                    }
                }
            }   // end group.notify

        case let .failure(error):
            let result: Result<HoloflowsRPC.Response<String>, RPC.Error> = .failure(error)
            HoloflowsRPC.dispatchResponse(webView: webView, id: id, result: result, completionHandler: completionHandler())
        }
    }

}
