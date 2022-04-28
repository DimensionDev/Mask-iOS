//
//  HoloflowsRPC.swift
//  HoloflowsKit
//
//  Created by Cirno MainasuK on 2019-6-22.
//

import Foundation
import WebKit

import os

public enum HoloflowsRPC {

    public static let encoder = JSONEncoder()
    public static let decoder = JSONDecoder()
    
    static var messageQueue: OperationQueue = {
        var queue = OperationQueue()
        queue.maxConcurrentOperationCount = 1
        return queue
    }()
    
    static func addScriptToQueue(script: String, webView: WKWebView) {
        let operation = HoloflowsOperation(script: script, webView: webView)
        operation.queuePriority = .veryHigh
        messageQueue.addOperation(operation)
    }

    public static func dispatchScript<T: RPC.Request & Encodable>(name: String = ScriptEvent.holoflowsjsonrpc.rawValue, request: T) -> String? {
        guard let jsonData = try? encoder.encode(request),
        let jsonString = String(data: jsonData, encoding: .utf8) else {
            return nil
        }

        let script = "document.dispatchEvent(new CustomEvent('\(name)', { detail: \(jsonString) }))"
        return script
    }

    public static func dispatchScript<T: RPC.Response>(name: String = ScriptEvent.holoflowsjsonrpc.rawValue, id: String, result: Result<T, RPC.Error>) -> String {
        switch result {
        case let .success(response):
            guard let jsonData = try? encoder.encode(response),
            let jsonString = String(data: jsonData, encoding: .utf8) else {
                assertionFailure()
                return "document.dispatchEvent(new CustomEvent('\(name)', { detail: { jsonrpc: '2.0', error: { id: -32603, message: 'server error. internal xml-rpc error' }, id: \(id) } }))"
            }

            let script = "document.dispatchEvent(new CustomEvent('\(name)', { detail: \(jsonString) }))"
            return script

        case let .failure(error):
            let response = HoloflowsRPC.ErrorResponse(error: error, id: id)
            guard let jsonData = try? encoder.encode(response),
            let jsonString = String(data: jsonData, encoding: .utf8) else {
                assertionFailure()
                return "document.dispatchEvent(new CustomEvent('\(name)', { detail: { jsonrpc: '2.0', error: { id: -32603, message: 'server error. internal xml-rpc error' }, id: \(id) } }))"
            }

            let script = "document.dispatchEvent(new CustomEvent('\(name)', { detail: \(jsonString) }))"
            return script
        }
    }

}

extension HoloflowsRPC {

    public static func parseRPCMeta(messageBody: String) throws -> (method: String, id: String) {
        let messageData = Data(messageBody.utf8)
        let request = try decoder.decode(BasicRPCRequest.self, from: messageData)
        return (request.method, request.id)
    }

    public static func parseRPC<T: WebExtension.ClientRequest>(messageBody: String) -> Result<T, RPC.Error> {
        let messageData = Data(messageBody.utf8)
        do {
            let request = try decoder.decode(HoloflowsRPC.Request<T>.self, from: messageData)
            return .success(request.params)
        } catch {
            return .failure(RPC.Error.parseError)
        }
    }

    private struct BasicRPCRequest: Decodable {
        var jsonrpc: String = RPC.Version.default
        let method: String
        let id: String
    }

}

extension HoloflowsRPC {

    public static func dispathRequest<T: RPC.Request & Encodable>(webView: WKWebView, name: String = ScriptEvent.holoflowsjsonrpc.rawValue, request: T, completionHandler: CompletionHandler?) {
            guard let script = dispatchScript(name: name, request: request) else {
                assertionFailure()
                return
            }
            
            addScriptToQueue(script: script, webView: webView)
    }

    public static func dispatchResponse<T: RPC.Response>(webView: WKWebView, name: String = ScriptEvent.holoflowsjsonrpc.rawValue, id: String, result: Result<T, RPC.Error>, completionHandler: CompletionHandler?) {
            let script = dispatchScript(name: name, id: id, result: result)

            addScriptToQueue(script: script, webView: webView)
    }
    
}

extension HoloflowsRPC {

    public struct CompletionHandler {
        let tabMeta: Tab.Meta?
        let file: String
        let method: String
        let line: Int

        func completionHandler(id: String) -> (Any?, Error?) -> Void {
            let file = self.file
            let method = self.method
            let line = self.line

            return { any, error in
                guard let error = error else {
                    let anyString = any.flatMap { String(describing: $0) }
                    let tabMetaString = self.tabMeta.flatMap { "[\($0.id)]\($0.url)" }
                    let description = [tabMetaString, id, anyString].compactMap { $0 }.joined(separator: " | ")
                    consolePrint("eval result =: " + description, file: file, method: method, line: line)
                    return
                }

                consolePrint(error.localizedDescription, file: file, method: method, line: line)
            }
        }

        public init(tabMeta: Tab.Meta? = nil, file: String = #file, method: String = #function, line: Int = #line) {
            self.tabMeta = tabMeta
            self.file = file
            self.method = method
            self.line = line
        }
    }

}


