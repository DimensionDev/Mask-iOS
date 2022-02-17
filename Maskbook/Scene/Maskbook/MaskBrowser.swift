//
//  MaskBrowser.swift
//  Maskbook
//
//  Created by BradGao on 2021/8/2.
//  Copyright © 2021 dimension. All rights reserved.
//

import Combine
import Foundation
import MaskbookPlugin
import OSLog
import SafariServices
import SwiftyJSON
import WebExtension_Shim
import WebKit

class MaskBrowser {
    static let maskbookJsonRPCScheme = "maskbookjsonrpc"
    
    fileprivate static let shared = MaskBrowser()
    
    lazy var browser = Browser(delegate: self)
    
    @InjectedProvider(\.userDefaultSettings)
    private var userSetting
    
    // Initialize plugins at launch since we need plugins before UI comes out
    var contentScriptPlugin = Plugin(for: .contentScript)
    var backgroundScriptPlugin = Plugin(for: .backgroundScript)
    
    let processPool = WKProcessPool()
    
    var jsResourceManager: PluginResourceProvider {
        if userSetting.jsResourceIsUsingBundle {
            return bundleResourceManager
        } else {
            jsDocumentResourceManager.documentSubPath = userSetting.jsDocumentResourceSelectedCommitHash
            return jsDocumentResourceManager
        }
    }
    
    private let bundleResourceManager = BundleResourceManager(bundle: MaskbookPluginHelper.pluginBundle)
    private let jsDocumentResourceManager = JSDocumentResourceManager()
    let blobResourceManager: BlobResourceManager? = {
        return BlobResourceManager(delegate: AppContext.shared.webExtensionCoreDataStackBridge)
    }()
    
    @InjectedProvider(\.tabService)
    private var tabService: MaskbookTabService
    
    private let decoder = JSONDecoder()

    @InjectedProvider(\.maskMessageRelay)
    var messageRelay: MaskMessageRelay

    private var isWebViewReady = false

    lazy var web3MessageResolver: Web3MessageResolver = {
        return Web3MessageResolver(webView: browser.tabs.backgroundTab.webView)
    }()
    
    lazy var webPublicApisMessageResolver: WebPublicApiMessageResolver = {
        return WebPublicApiMessageResolver(webView: browser.tabs.backgroundTab.webView)
    }()
    
    private var disposeBag = Set<AnyCancellable>()
    
    init() {
        UserDefaultSettings.shared.defaultAccountAddressPublisher
            .receive(on: DispatchQueue.main)
            .sink { [weak self] address in
                let request = WebExtension.Wallet.UpdateEthereumAccount(payload: .init(account: address))
                self?.messageRelay.request(request) { result in
                    if case let .failure(error) = result {
                        os_log(
                            "%{public}s[%{public}ld], %{public}s: update Ethrereum account fail: %{public}",
                            #file.lastFileComponent,
                            #line,
                            #function,
                            error.localizedDescription
                        )
                    }
                }
            }
            .store(in: &disposeBag)
        UserDefaultSettings.shared.networkPubisher
            .removeDuplicates()
            .receive(on: DispatchQueue.main)
            .sink { [weak self] network in
                let request = WebExtension.Wallet.UpdateEthereumChainId(payload: .init(chainId: network.networkId))
                self?.messageRelay.request(request) { result in
                    switch result {
                    case .failure(let error):
                        os_log(
                            "%{public}s[%{public}ld], %{public}s: update Ethrereum chainId fail: %@",
                            #file.lastFileComponent,
                            #line,
                            #function,
                            error.localizedDescription
                        )
                        
                    case .success:
                        os_log(
                            "%{public}s[%{public}ld], %{public}s: update Ethrereum chainId : %@",
                            #file.lastFileComponent,
                            #line,
                            #function,
                            NSNumber(value: network.networkId)
                        )
                    }
                }
            }
            .store(in: &disposeBag)
    }
}

// MARK: - BrowserDelegate
extension MaskBrowser: BrowserDelegate {
    func pluginResourceURLScheme() -> [String] {
        // no custom url scheme
        return []
    }
    
    func browser(_ browser: Browser, pluginForScriptType scriptType: Plugin.ScriptType) -> Plugin {
        switch scriptType {
        case .contentScript:
            return contentScriptPlugin

        case .backgroundScript:
            return backgroundScriptPlugin
        }
    }
    
    func browser(
        _ browser: Browser,
        webViewConfigurationForOptions options: WebExtension.Browser.Tabs.Create.Options?
    ) -> WKWebViewConfiguration {
        // set shared process pool
        let configuration = WKWebViewConfiguration()
        configuration.processPool = processPool
        return configuration
    }
    
    func browser(_ browser: Browser, tabDelegateForTab tab: Tab?) -> TabDelegate? {
        return self
    }
    
    func browser(_ browser: Browser, tabDownloadDelegateFor tab: Tab?) -> TabDownloadsDelegate? {
        return self
    }
}

// MARK: - TabDelegate
extension MaskBrowser: TabDelegate {
    func uiDelegateShim(for tab: Tab) -> WKUIDelegateShim? {
        let maskbookTab = tabService.register(for: tab)
        maskbookTab.maskbookUIDelegateShim.delegate = self
        return maskbookTab.maskbookUIDelegateShim
    }

    func navigationDelegateShim(for tab: Tab) -> WKNavigationDelegateShim? {
        let maskbookTab = tabService.register(for: tab)
        maskbookTab.maskbookNavigationDelegateShim.delegate = self
        return maskbookTab.maskbookNavigationDelegateShim
    }

    func customScriptMessageHandlerNames(for tab: Tab) -> [String] {
        return [MaskBrowser.maskbookJsonRPCScheme]
    }

    func tab(_ tab: Tab, shouldOpenExternallyForURL url: URL) -> Bool {
        return false
    }

    func tab(_ tab: Tab, userContentController: WKUserContentController, didReceive message: WKScriptMessage) {
        if !isWebViewReady {
            // When the MaskBrowser receives the first message from the webview, we could tell the webview is ready to handle RPC requests
            isWebViewReady = true
            NotificationCenter.default.post(name: Notification.Name.extensionTabDidFinishLoad, object: nil)
            syncSettings()
        }

        if Web3MessageResolver.canResolve(message: message) {
            web3MessageResolver.resolve(message: message)
            return
        }
        if WebPublicApiMessageResolver.canResolve(message: message) {
            webPublicApisMessageResolver.resolve(message: message)
            return
        }
        guard let messageBody = JSON(rawValue: message.body)?.rawString() else {
            return
        }
        
        guard let messageData = messageBody.data(using: .utf8),
              let result = try? decoder.decode(MaskWebMessageResult.self, from: messageData) else {
            return
        }
        messageRelay.resolve(id: result.id, result: result)
    }
    
    func tab(_ tab: Tab, shouldActive: Bool) {
        guard shouldActive else { return }

//        tabService.active(tab: tab)
    }

    func tab(_ tab: Tab, webViewWillRemoveFromSuperview webView: WKWebView) {
        tabService.resign(for: tab)
    }

    func tab(_ tab: Tab, localStorageManagerForExtension id: String) -> LocalStorageManager? {
        return LocalStorageManager(delegate: AppContext.shared.webExtensionCoreDataStackBridge, extensionID: id)
    }

    func tab(_ tab: Tab, pluginResourceProviderForURL url: URL) -> PluginResourceProvider? {
        switch url.scheme {
        case "holoflows-extension": return bundleResourceManager
        case "holoflows-blob":      return blobResourceManager
        default:                    return nil
        }
    }
}

// MARK: - TabDownloadsDelegate
extension MaskBrowser: TabDownloadsDelegate {
    typealias DownloadBlobOptions = WebExtension.Browser.Downloads.Download.Options
    func tab(
        _ tab: Tab,
        didDownloadBlobWithOptions options: DownloadBlobOptions, result: Result<(Data, URLResponse), Error>
    ) {}
}

// MARK: - MaskbookUIDelegateShimDelegate
extension MaskBrowser: MaskbookUIDelegateShimDelegate {
    func maskbookViewController() -> UIViewController? {
        return nil
    }
}

// MARK: - MaskbookNavigationDelegateShimDelegate
extension MaskBrowser: MaskbookNavigationDelegateShimDelegate {
    func navigationDidChange(url: URL?) { }
    
    func contentPlugin() -> Plugin {
        return contentScriptPlugin
    }
    
    func navigationDidFinish(_ webView: WKWebView, navigation: WKNavigation) { }
}

// MARK: - Sync native settings with WebView
extension MaskBrowser {
    private func syncSettings() {
        let updateAccountRequest = WebExtension.Wallet
            .UpdateEthereumAccount(payload: .init(account: maskUserDefaults.defaultAccountAddress))
            .eraseToAnyPublisher()
        let updateChainIdRequest = WebExtension.Wallet
            .UpdateEthereumChainId(payload: .init(chainId: maskUserDefaults.network.networkId))
            .eraseToAnyPublisher()
        Publishers.CombineLatest(updateAccountRequest, updateChainIdRequest)
            .fireAndIgnore()
            .store(in: &disposeBag)
    }
}

// MARK: - InjectProvider support
enum MaskBrowserInjectValueKey: InjectValueKey {
    static var defaultInjectValue = MaskBrowser.shared
}

extension InjectValues {
    var maskBrowser: MaskBrowser {
        Self[MaskBrowserInjectValueKey.self]
    }
}
