//
//  Tab+BrowserStorageLocalAPI.swift
//  HoloflowsKit
//
//  Created by Cirno MainasuK on 2019-6-14.
//

import os
import Foundation

import SwiftyJSON

extension Tab {

    open func browserStorageLocalGet(id: String, messageBody: String) {
        let messageResult: Result<WebExtension.Browser.Storage.Local.Get, RPC.Error> = HoloflowsRPC.parseRPC(messageBody: messageBody)
        switch messageResult {
        case let .success(get):
            guard let localStorageManager = delegate?.tab(self, localStorageManagerForExtension: get.extensionID) else {
                let result: Result<HoloflowsRPC.Response<String>, RPC.Error> = .failure(RPC.Error.serverError)
                HoloflowsRPC.dispatchResponse(webView: webView, id: id, result: result, completionHandler: completionHandler())
                return
            }

            let keys = get.keyValues ?? []
            os_log("^ %{public}s[%{public}ld], %{public}s: local get keys: %{public}s", ((#file as NSString).lastPathComponent), #line, #function, keys.debugDescription)
            let entires = localStorageManager.get(keys: keys)

            let dict = entires.reduce(into: [String : JSON]()) { dict, localStorgae in
                dict[localStorgae.key] = (try? JSONDecoder().decode(JSON.self, from: localStorgae.value)) ?? JSON.null
            }
            os_log("^ %{public}s[%{public}ld], %{public}s: local get results: %{public}s", ((#file as NSString).lastPathComponent), #line, #function, dict.debugDescription)
            let result: Result<HoloflowsRPC.Response<[String:JSON]>, RPC.Error> = .success(HoloflowsRPC.Response(result: dict, id: id))
            HoloflowsRPC.dispatchResponse(webView: webView, id: id, result: result, completionHandler: completionHandler())

        case let .failure(error):
            consolePrint(error.localizedDescription)
            let result: Result<HoloflowsRPC.Response<String>, RPC.Error> = .failure(error)
            HoloflowsRPC.dispatchResponse(webView: webView, id: id, result: result, completionHandler: completionHandler())
        }
    }

    open func browserStorageLocalSet(id: String, messageBody: String) {
        let messageResult: Result<WebExtension.Browser.Storage.Local.Set, RPC.Error> = HoloflowsRPC.parseRPC(messageBody: messageBody)
        switch messageResult {
        case let .success(set):
            guard let localStorageManager = delegate?.tab(self, localStorageManagerForExtension: set.extensionID) else {
                let result: Result<HoloflowsRPC.Response<String>, RPC.Error> = .failure(RPC.Error.serverError)
                HoloflowsRPC.dispatchResponse(webView: webView, id: id, result: result, completionHandler: completionHandler())
                return
            }

            let entries = set.entriesDict.map { (key, value) -> KeyValuePair in
                let data = (try? JSONEncoder().encode(value)) ?? Data()
                return (key, data)
            }

            do {
                try localStorageManager.set(localStorages: entries)
                let result: Result<HoloflowsRPC.Response<String>, RPC.Error> = .success(HoloflowsRPC.Response(result: "", id: id))
                HoloflowsRPC.dispatchResponse(webView: webView, id: id, result: result, completionHandler: completionHandler())

            } catch {
                consolePrint(error.localizedDescription)
                let result: Result<HoloflowsRPC.Response<String>, RPC.Error> = .failure(RPC.Error.serverError)
                HoloflowsRPC.dispatchResponse(webView: webView, id: id, result: result, completionHandler: completionHandler())
            }

        case let .failure(error):
            consolePrint(error.localizedDescription)
            let result: Result<HoloflowsRPC.Response<String>, RPC.Error> = .failure(error)
            HoloflowsRPC.dispatchResponse(webView: webView, id: id, result: result, completionHandler: completionHandler())
        }
    }

    open func browserStorageLocalRemove(id: String, messageBody: String) {
        let messageResult: Result<WebExtension.Browser.Storage.Local.Remove, RPC.Error> = HoloflowsRPC.parseRPC(messageBody: messageBody)
        switch messageResult {
        case let .success(remove):
            guard let localStorageManager = delegate?.tab(self, localStorageManagerForExtension: remove.extensionID) else {
                let result: Result<HoloflowsRPC.Response<String>, RPC.Error> = .failure(RPC.Error.serverError)
                HoloflowsRPC.dispatchResponse(webView: webView, id: id, result: result, completionHandler: completionHandler())
                return
            }

            do {
                let keys = remove.keyValues
                let removed = try localStorageManager.remove(keys: keys)
                let dict = removed.reduce(into: [String : JSON]()) { dict, localStorgae in
                    dict[localStorgae.key] = (try? JSONDecoder().decode(JSON.self, from: localStorgae.value)) ?? JSON.null
                }

                let result: Result<HoloflowsRPC.Response<[String: JSON]>, RPC.Error> = .success(HoloflowsRPC.Response(result: dict, id: id))
                HoloflowsRPC.dispatchResponse(webView: webView, id: id, result: result, completionHandler: completionHandler())

            } catch {
                consolePrint(error.localizedDescription)
                let result: Result<HoloflowsRPC.Response<[String: JSON]>, RPC.Error> = .failure(RPC.Error.serverError)
                HoloflowsRPC.dispatchResponse(webView: webView, id: id, result: result, completionHandler: completionHandler())
            }

        case let .failure(error):
            consolePrint(error.localizedDescription)
            let result: Result<HoloflowsRPC.Response<[String: JSON]>, RPC.Error> = .failure(error)
            HoloflowsRPC.dispatchResponse(webView: webView, id: id, result: result, completionHandler: completionHandler())
        }
    }

    open func browserStorageLocalClear(id: String, messageBody: String) {
        let messageResult: Result<WebExtension.Browser.Storage.Local.Clear, RPC.Error> = HoloflowsRPC.parseRPC(messageBody: messageBody)
        switch messageResult {
        case let .success(clear):
            guard let localStorageManager = delegate?.tab(self, localStorageManagerForExtension: clear.extensionID) else {
                let result: Result<HoloflowsRPC.Response<String>, RPC.Error> = .failure(RPC.Error.serverError)
                HoloflowsRPC.dispatchResponse(webView: webView, id: id, result: result, completionHandler: completionHandler())
                return
            }

            do {
                try localStorageManager.clear()

                let result: Result<HoloflowsRPC.Response<String>, RPC.Error> = .success(HoloflowsRPC.Response(result: "", id: id))
                HoloflowsRPC.dispatchResponse(webView: webView, id: id, result: result, completionHandler: completionHandler())

            } catch {
                consolePrint(error.localizedDescription)
                let result: Result<HoloflowsRPC.Response<String>, RPC.Error> = .failure(RPC.Error.serverError)
                HoloflowsRPC.dispatchResponse(webView: webView, id: id, result: result, completionHandler: completionHandler())
            }

        case let .failure(error):
            consolePrint(error.localizedDescription)
            let result: Result<HoloflowsRPC.Response<String>, RPC.Error> = .failure(error)
            HoloflowsRPC.dispatchResponse(webView: webView, id: id, result: result, completionHandler: completionHandler())
        }
    }

}

