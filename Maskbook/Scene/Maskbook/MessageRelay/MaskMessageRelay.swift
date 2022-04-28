//
//  MaskMessageRelay.swift
//  Maskbook
//
//  Created by BradGao on 2021/8/2.
//  Copyright © 2021 dimension. All rights reserved.
//

import Combine
import Foundation
import OSLog
import WebExtension_Shim_Swift
import WebKit

enum MaskMessageRelayError: Error {
    case timeout
    case targetTabIdNotFound
}

class MaskMessageRelay {
    typealias Completion = (Result<MaskWebMessageResult, Error>) -> Void
    private struct MessageRequest {
        let id: String
        let request: WebExtension.ClientRequest
        let completion: Completion?
        let createdAt: Date
        
        init(id: String,
             request: WebExtension.ClientRequest,
             completion: Completion?) {
            self.id = id
            self.request = request
            self.completion = completion
            self.createdAt = Date()
        }
    }
    
    private static let timeoutDuration: TimeInterval = 100
    private var timer = Timer.publish(every: MaskMessageRelay.timeoutDuration, on: .main, in: .default)
    private var disposeBag = Set<AnyCancellable>()
    
    fileprivate static let shared = MaskMessageRelay()

    private var messageQueue = [String: MessageRequest]()

    @InjectedProvider(\.maskBrowser)
    fileprivate var maskBrowser
    
    @InjectedProvider(\.tabService)
    private var tabService: MaskbookTabService
    
    private init() {
        timer.autoconnect().prepend(Date())
            .sink(receiveValue: { [weak self] _ in
                self?.checkTimeoutRequests()
            })
            .store(in: &disposeBag)
    }
    
    /// Periodically check the `messageQueue`, remove the *timeout* requests and executes their `completion` block with error `MaskMessageRelayError.timeout`
    private func checkTimeoutRequests() {
        let currentDate = Date()
        // 1. Filter out the timeout-ed requests
        let timeoutRequests = messageQueue.filter {
            $0.1.createdAt.distance(to: currentDate) > MaskMessageRelay.timeoutDuration
        }
        // 2. Remove the timeout-ed requests
        messageQueue = messageQueue.filter {
            $0.1.createdAt.distance(to: currentDate) <= MaskMessageRelay.timeoutDuration
        }

        // 3. Notify the timeout-ed requests with timeout error
        timeoutRequests.forEach {
            $0.1.completion?(.failure(MaskMessageRelayError.timeout))
        }
    }
}

extension MaskMessageRelay {
    /// This method **ONLY** sends the request by `HoloflowsRPC`, it preserves the `completion` block
    /// and waits for the `resolve` method to execute the preserved blocks
    ///
    /// This method works properly in both `main` and `background` threads
    /// while the `completion` block would be executed on `main` thread
    func request<T: MWEMessage>(
        _ request: T,
        _ completion: Completion? = nil) {
        let messageId = UUID().uuidString
        let holoflowsRequest = HoloflowsRPC.Request(params: request, id: messageId)
        messageQueue[messageId] = MessageRequest(
            id: messageId,
            request: request,
            completion: completion)
        let targetWebView: WKWebView
        switch request.target {
        case .background:
            targetWebView = maskBrowser.browser.tabs.backgroundTab.webView

        case .content(let id):
            guard let webView = tabService.tabs[id]?.tab?.webView else {
                completion?(.failure(MaskMessageRelayError.targetTabIdNotFound))
                return
            }
            targetWebView = webView
        }
        HoloflowsRPC.dispathRequest(
            webView: targetWebView,
            name: MaskBrowser.maskbookJsonRPCScheme,
            request: holoflowsRequest,
            completionHandler: nil)
    }
    
    /// Only **MaskBrowser** could use this method to resolve the requests
    func resolve(id: String, result: MaskWebMessageResult) {
        guard let request = messageQueue.removeValue(forKey: id) else { return }
        request.completion?(.success(result))
    }

    func send<T: MWEMessage>(
        _ request: T,
        file: String = #file,
        line: Int = #line
    ) -> AnyPublisher<MaskWebMessageResult, Error> {
        LazyFuture { [weak self] promise in
            guard let self = self else { return }
            self.request(request) { result in
                switch result {
                case let .success(wrappedValue):
                    os_log("[MaskWebMessage] send success")
                    promise(.success(wrappedValue))

                case let .failure(error):
                    os_log("[MaskWebMessage] %s", request.payload.debugDescription)
                    os_log("[MaskWebMessage] error: %s", error.localizedDescription)
                    promise(.failure(error))
                }
            }
        }
        .eraseToAnyPublisher()
    }

    func post<T: MWEMessage>(
        _ request: T,
        file: String = #file,
        line: Int = #line
    ) -> AnyPublisher<MaskWebMessageResult, Never> {
        LazyFuture { [weak self] promise in
            guard let self = self else { return }
            self.request(request) { result in
                switch result {
                case let .success(wrappedValue):
                    os_log("[MaskWebMessage] send success")
                    promise(.success(wrappedValue))

                case let .failure(error):
                    os_log("[MaskWebMessage] %s", request.payload.debugDescription)
                    os_log("[MaskWebMessage] error: %s", error.localizedDescription)
                    let errorPayload = MaskWebMessageResult.ErrorPayload(
                        code: 911,
                        message: request.payload.debugDescription,
                        data: .init(type: error.localizedDescription)
                    )
                    let messageResult = MaskWebMessageResult(
                        jsonrpc: "",
                        id: request.extensionID,
                        result: nil,
                        error: errorPayload
                    )
                    promise(.success(messageResult))
                }
            }
        }
        .eraseToAnyPublisher()
    }
}

extension MWEMessage {
    func eraseToAnyPublisher() -> AnyPublisher<MaskWebMessageResult, Error> {
        InjectValues[MaskMessageRelayInjectValueKey.self].send(self)
    }

    func asAnyPublisher() -> AnyPublisher<MaskWebMessageResult, Never> {
        InjectValues[MaskMessageRelayInjectValueKey.self].post(self)
    }
}

private enum MaskMessageRelayInjectValueKey: InjectValueKey {
    static var defaultInjectValue = MaskMessageRelay.shared
}

extension InjectValues {
    var maskMessageRelay: MaskMessageRelay {
        Self[MaskMessageRelayInjectValueKey.self]
    }
}
