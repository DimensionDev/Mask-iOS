import Combine
import OSLog
import web3swift
import WebKit

typealias DappScriptResult = Result<[String: Any], DappError>

protocol DecentralisedApplicationResolver {
    associatedtype Parameters: Codable

    // if CustomRPCResponse refers to EmptyWrapper, means no custom rpc will be used
    associatedtype CustomRPCResponse: Codable

    // url for loading dapp
    var entryPointURL: URL? { get }
    // web3 comunication
    var web3: web3? { get }
    // script payload decoder
    var decoder: JSONDecoder { get }
    // callBackEventName used in js
    var callBackEventName: String { get }
    // script injection identifier
    var scriptMessageHandlerName: String { get }

    func provideRPCURL(with payload: DappScriptPayload<Parameters>, w3Provider: web3) async -> DappScriptResult?
    func provideCoinbaseAddress(with payload: DappScriptPayload<Parameters>, w3Provider: web3) async -> DappScriptResult?
    func provideEthAccount(with payload: DappScriptPayload<Parameters>, w3Provider: web3) async -> DappScriptResult?
    func signTransaction(
        with payload: DappScriptPayload<Parameters>,
        w3Provider: web3
    ) async -> DappScriptResult?
    func signMessage(for payload: DappScriptPayload<Parameters>) async -> DappScriptResult?
    func customRPC(for payload: DappScriptPayload<Parameters>, functionName: String) async -> DappScriptResult?
}

extension DecentralisedApplicationResolver {
    var callBackEventName: String { "PacificDidReceiveNativeCallback" }
    var scriptMessageHandlerName: String { "pacific" }
    var decoder: JSONDecoder { .init() }
    var web3: web3? { Web3ProviderFactory.provider }
}

extension DecentralisedApplicationResolver {
    func dispatchBirdgedEvent(
        _ eventName: String,
        on webView: WKWebView,
        parameters: [String: Any],
        result: Result<[String: Any], DappError>
    ) {
        var eventDetail: [String: Any] = parameters
        switch result {
        case let .failure(error):
            eventDetail["error"] = ["code": error.code, "description": error.description]
            
        case let .success(callbackParameters):
            eventDetail["parameters"] = callbackParameters
        }

        let eventBody: [String: Any] = ["detail": eventDetail]
        let jsString: String

        // swiftlint:disable line_length
        if let data = try? JSONSerialization.data(withJSONObject: eventBody, options: JSONSerialization.WritingOptions()),
           let eventString = String(data: data, encoding: .utf8) {
            jsString = "(function() { var event = new CustomEvent('\(eventName)', \(eventString)); document.dispatchEvent(event)}());"
        } else {
            // When JSON Not Serializable, Invoke with Default Parameters
            switch result {
            case .success:
                jsString = "(function() { var event = new CustomEvent('\(eventName)', {'detail': {'parameters': {}}}); document.dispatchEvent(event)}());"

            case let .failure(error):
                jsString = "(function() { var event = new CustomEvent('\(eventName)', {'detail': {'error': {'code': \(error.code), 'description': '\(error.description)'}}}); document.dispatchEvent(event)}());"
            }
        }
        // swiftlint:enable line_length

        // replace DispatchQueue.main.async
        Task.detached { @MainActor in
            webView.evaluateJavaScript(jsString)
        }
    }

    func resolve(_ message: WKScriptMessage, from webView: WKWebView) {
        let body = message.object
        Task.detached(priority: .userInitiated) {
            do {
                let data = try JSONSerialization.data(withJSONObject: body, options: [])
                let payload = try self.decoder.decode(DappScriptPayload<Parameters>.self, from: data)

                #if DEBUG
                if payload.printable {
                    print(payload)
                }
                #endif
                
                guard let method = payload.action else {
                    return
                }

                guard let excuteResult = await handle(method.rawValue, with: payload, on: webView) else {
                    return
                }
                guard let id = payload.callback else { return }
                // ensure called on main queue
                await MainActor.run {
                    self.dispatchBirdgedEvent(callBackEventName, on: webView, parameters: ["id": id], result: excuteResult)
                }
            } catch {
                #if DEBUG
                print(error)
                #endif
            }
        }
    }

    func handle(
        _ method: String,
        with payload: DappScriptPayload<Parameters>,
        on webView: WKWebView
    ) async -> DappScriptResult? {
        guard let w3Provider = Web3ProviderFactory.provider else {
            os_log(
                "%{public}s[%{public}ld], %{public}s: unsupport blockchain network: %{public}",
                #file.lastFileComponent,
                #line,
                #function,
                maskUserDefaults.network.name
            )
            return .failure(.init(code: -1, description: "unsupport blockchain network \(maskUserDefaults.network.name)"))
        }

        let scriptMethod = DappScriptMethod(rawValue: method)
        switch scriptMethod {
        case .getRPCurl: return await provideRPCURL(with: payload, w3Provider: w3Provider)
        case .ethCoinbase: return await provideCoinbaseAddress(with: payload, w3Provider: w3Provider)
        case .ethGetAccounts, .ethAccounts: return await provideEthAccount(with: payload, w3Provider: w3Provider)
        case .ethSignTransaction: return await self.signTransaction(with: payload, w3Provider: w3Provider)
        case .ethSign: return await self.signMessage(for: payload)
        case let .custom(functionName): return await customRPC(for: payload, functionName: functionName)
        }
    }
}

extension DecentralisedApplicationResolver {
    func provideRPCURL(with payload: DappScriptPayload<Parameters>, w3Provider: web3) async -> DappScriptResult? {
        let respParam = ["rpcURL": w3Provider.provider.url.absoluteString]
        return .success(respParam)
    }

    func provideCoinbaseAddress(with payload: DappScriptPayload<Parameters>, w3Provider: web3) async -> DappScriptResult? {
        let respParam = ["coinbase": maskUserDefaults.defaultAccountAddress ?? ""]
        return .success(respParam)
    }

    func provideEthAccount(with payload: DappScriptPayload<Parameters>, w3Provider: web3) async -> DappScriptResult? {
        let allAccounts = maskUserDefaults.defaultAccountAddress.flatMap { [$0] } ?? []
        let respParam = ["accounts": allAccounts]
        return .success(respParam)
    }

    func signTransaction(
        with payload: DappScriptPayload<Parameters>,
        w3Provider: web3
    ) async -> DappScriptResult? {
        guard let json = payload.json?.dictionaryObject,
              let transactionJSON = json["transaction"] as? [String: Any],
              let (transaction, options) = transactionJSON.asTransactionAndOptions() else {
            return .failure(.init(code: -1, description: "Invalid parameters"))
        }

        guard var updatedTransaction = await transaction.prepareSigning(with: options, web3: w3Provider) else {
            return .failure(.init(code: 0, description: "Data is invalid"))
        }

        @InjectedProvider(\.vault)
        var vault

        do {
            async let addressInfo = options.addressInfo()
            async let passwordTask = vault.getWalletPassword()
            let (storedKeyData, _, _, fromAddress) = try await addressInfo
            let password = try await passwordTask
            try Web3Signer.signTX(
                transaction: &updatedTransaction,
                privateKey: storedKeyData,
                account: fromAddress,
                password: password
            )
            let signedContent = transaction.encode(forSignature: false, chainID: nil)?.hexStringWithPrefix() ?? ""
            return .success(["signedTransaction": signedContent])
        } catch {
            return nil
        }
    }

    func signMessage(for payload: DappScriptPayload<Parameters>) async -> DappScriptResult? {
        let parameters = payload.parameters
        let jsonParameters = payload.json
        if parameters == nil {
            return .failure(.init(code: 0, description: "No parameters provided"))
        }
        guard let personalMessage = jsonParameters?["data"].string,
              let account = jsonParameters?["from"].string else {
            return .failure(.init(code: 0, description: "Not enough parameters provided"))
        }

        return await withCheckedContinuation { continuation in
            WalletCoreHelper.signMessage(message: personalMessage, fromAddress: account) { result in
                switch result {
                case let .success(signature):
                    let json = ["signedMessage": signature]
                    continuation.resume(returning: .success(json))

                case let .failure(error):
                    continuation.resume(returning: .failure(.init(code: -1, description: error.localizedDescription)))
                }
            }
        }
    }

    func customRPC(for payload: DappScriptPayload<Parameters>, functionName: String) async -> DappScriptResult? {
        let parameters = payload.parameters
        let request = DappRPCRequest<Parameters?>(
            method: functionName,
            id: Int(web3swift.Counter.increment()),
            params: parameters
        )

        let response: DappRPCResponse<CustomRPCResponse> = await self.asyncPost(request)
        if let data = try? JSONEncoder().encode(response.result),
           let json = try? JSONSerialization.jsonObject(with: data, options: []) as? [String: Any] {
            return .success(json)
        } else {
            return .success([:])
        }
    }
}

extension DecentralisedApplicationResolver {
    private func urlRequest<T>(for url: URL, and dappRequest: DappRPCRequest<T>) throws -> URLRequest where T: Encodable {
        let encoder = JSONEncoder()
        let requestData = try encoder.encode(dappRequest)

        var urlRequest = URLRequest(url: url, cachePolicy: .reloadIgnoringCacheData)
        urlRequest.httpMethod = "POST"
        urlRequest.setValue("application/json", forHTTPHeaderField: "Content-Type")
        urlRequest.setValue("application/json", forHTTPHeaderField: "Accept")
        urlRequest.httpBody = requestData

        return urlRequest
    }

    func asyncPost<T, V>(
        _ request: DappRPCRequest<T>
    ) async -> DappRPCResponse<V> where T: Encodable, V: Decodable {
        guard let url = self.web3?.provider.url,
              let session = web3?.provider.session else {
                  return .init(error: .invalidWeb3)
        }

        do {
            let urlRequest = try self.urlRequest(for: url, and: request)
            let (data, _) = try await session.data(for: urlRequest)
            return try self.decoder.decode(DappRPCResponse<V>.self, from: data)
        } catch {
            return .init(error: error)
        }
    }
}
