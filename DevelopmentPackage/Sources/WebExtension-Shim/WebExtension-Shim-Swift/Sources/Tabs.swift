//
//  Tabs.swift
//  HoloflowsKit
//
//  Created by Cirno MainasuK on 2019-6-10.
//

import Foundation
import WebKit
import SwiftyJSON

import os

//public protocol TabsDelegate: class {
//    func plugin(forScriptType type: Plugin.ScriptType) -> Plugin
//    func pluginResourceURLScheme() -> [String]
//    func tabs(_ tabs: Tabs, webViewConfigurationForOptions options: WebExtension.Browser.Tabs.Create.Options?) -> WKWebViewConfiguration
//    func tabDelegate(for tab: Tab) -> TabDelegate?
//    func tabDownloadDelegate(for tab: Tab) -> TabDownloadsDelegate?
//}
//
//extension TabsDelegate {
//    public func pluginResourceURLScheme() -> [String] { return [] }
//    public func tabs(_ tabs: Tabs, webViewConfigurationForOptions options: WebExtension.Browser.Tabs.Create.Options?) -> WKWebViewConfiguration {
//        return WKWebViewConfiguration()
//    }
//    func tabDelegate(for tab: Tab) -> TabDelegate? { return nil }
//    func tabDownloadDelegate(for tab: Tab) -> TabDownloadsDelegate? { return nil }
//}

public class Tabs: NSObject {

    weak var browser: Browser?
    
    public private(set) lazy var backgroundTab: Tab = createExtensionTab()

    public private(set) var storage: [Tab] = []
    private var nextTabID = 1
    
    /// store active tab order. The last is top -most.
    public private(set) var activeTabStack = WeakArray<Tab>([])


    init(browser: Browser) {
        self.browser = browser

        super.init()

        // Init User-Agent
        backgroundTab.webView.evaluateJavaScript("navigator.userAgent") { any, error in
            guard let userAgent = any as? String else { return }
            self.browser?.userAgent = userAgent
        }
    }
    
    deinit {
        os_log("%{public}s[%{public}ld], %{public}s: deinit", ((#file as NSString).lastPathComponent), #line, #function)
    }

}

extension Tabs {
    
    var tabDelegate: (Tab?) -> TabDelegate? {
        return { tab in
            guard let browser = self.browser,
            let browserDelegate = self.browser?.delegate else {
                return { _ in return nil }(tab)
            }
            
            return browserDelegate.browser(browser, tabDelegateForTab: tab)
        }
    }
    
    var tabDownloadDelegate: (Tab?) -> TabDownloadsDelegate? {
        return { tab in
            guard let browser = self.browser,
            let browserDelegate = self.browser?.delegate else {
                return { _ in return nil }(tab)
            }
            
            return browserDelegate.browser(browser, tabDownloadDelegateFor: tab)
        }
    }
    
}

extension Tabs {

    /// Creates a new tab.
    ///
    /// - Parameter properties: Properties to give the new tab.
    /// - Note: https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/create
    @discardableResult
    public func create(options: WebExtension.Browser.Tabs.Create.Options?,
                       tabDelegate: TabDelegate? = nil,
                       tabDownloadDelegate: TabDownloadsDelegate? = nil,
                       webViewConfiguration: WKWebViewConfiguration? = nil) -> Tab {
        os_log("^ %{public}s[%{public}ld], %{public}s: %{public}s", ((#file as NSString).lastPathComponent), #line, #function, String(describing: options))

        let tab: Tab = {
            let pluginForContentScript = self.plugin(forScriptType: .contentScript)
            let webViewConfiguration = self.webViewConfiguration(forOptions: options, scriptType: .contentScript)

            let tabConfiguration = TabConfiguration(id: nextTabID,
                                                    plugin: pluginForContentScript,
                                                    createOptions: options,
                                                    webViewConfiguration: webViewConfiguration,
                                                    tabDelegate: tabDelegate,
                                                    tabDownloadDelegate: tabDownloadDelegate,
                                                    browser: browser)

            return Tab(configuration: tabConfiguration)
        }()

        // active tab
        tab.delegate?.tab(tab, shouldActive: tab.isActive)

        nextTabID += 1
        storage.append(tab)

        if tab.isActive {
            activeTabStack.append(tab)
        }

        return tab
    }

    @discardableResult
    public func remove(id: Int) -> Tab? {
        let removed = remove(ids: [id])
        assert(removed.count < 2)
        return removed.first
    }

    @discardableResult
    public func remove(ids: [Int]) -> [Tab] {
        let removed = storage.filter { ids.contains($0.id) }

        storage.removeAll(where: { ids.contains($0.id) })

        for tab in removed {
            tab.resignMessageHandler()
            activeTabStack.removeAll(where: { tab == $0 })
        }

        return removed
    }

    @discardableResult
    public func removeAll() -> [Tab] {
        let allTabs = storage
        allTabs.forEach { $0.resignMessageHandler() }
        storage.removeAll()
        activeTabStack.removeAll()
        return allTabs
    }

    public func update(tab: Tab) {
        activeTabStack.removeAll(where: { tab == $0 })
        activeTabStack.append(tab)
    }
}

extension Tabs {

    private func plugin(forScriptType scriptType: Plugin.ScriptType) -> Plugin? {
        guard let browser = self.browser,
        let plugin = browser.delegate?.browser(browser, pluginForScriptType: scriptType) else {
            return nil
        }

        guard plugin.environment == scriptType else {
            assertionFailure()
            return nil
        }

        return plugin
    }

    private func webViewConfiguration(forOptions options: WebExtension.Browser.Tabs.Create.Options?, scriptType type: Plugin.ScriptType) -> WKWebViewConfiguration {
        let configuration = browser.flatMap { $0.delegate?.browser($0, webViewConfigurationForOptions: options) } ?? WKWebViewConfiguration()
        let schemes = browser.flatMap { $0.delegate?.pluginResourceURLScheme() } ?? []

        let holoflowsExtension = "holoflows-extension"
        let holoflowsBlob = "holoflows-blob"
        for scheme in schemes {
            // avoid duplicate scheme
            guard scheme != holoflowsExtension, scheme != holoflowsBlob else { continue }
            configuration.setURLSchemeHandler(self, forURLScheme: scheme)
        }
        configuration.setURLSchemeHandler(self, forURLScheme: holoflowsExtension)
        configuration.setURLSchemeHandler(self, forURLScheme: holoflowsBlob)

        return configuration
    }

    private func createExtensionTab() -> Tab {
        os_log("^ %{public}s[%{public}ld], %{public}s", ((#file as NSString).lastPathComponent), #line, #function)

        let tab: Tab = {
            let pluginForBackgroundScript = browser.flatMap { $0.delegate?.browser($0, pluginForScriptType: .backgroundScript) } ??
                    Plugin(id: UUID().uuidString, manifest: JSON.null, environment: .backgroundScript, resources: JSON.null, externalURIs: [], universalLinks: [])
            let options: WebExtension.Browser.Tabs.Create.Options = {
                let url = Tabs.backgroundTabPath(for: pluginForBackgroundScript)
                let options = WebExtension.Browser.Tabs.Create.Options(active: true, url: url)
                return options
            }()
            let webViewConfiguration = self.webViewConfiguration(forOptions: options, scriptType: .backgroundScript)
            let tabConfiguration = TabConfiguration(id: -1,
                                                    plugin: pluginForBackgroundScript,
                                                    createOptions: options,
                                                    webViewConfiguration: webViewConfiguration,
                                                    tabDelegate: tabDelegate(nil),
                                                    tabDownloadDelegate: tabDownloadDelegate(nil),
                                                    browser: browser)

            return Tab(configuration: tabConfiguration)
        }()

//        tab.delegate?.tab(tab, shouldActive: tab.isActive)

        return tab
    }

}

// MARK: - WKURLSchemeHandler
extension Tabs: WKURLSchemeHandler {

    public enum URLSchemeHandlerError: Swift.Error {
        case invalidURL
        case noPluginResourceProvider
    }

    public func webView(_ webView: WKWebView, start urlSchemeTask: WKURLSchemeTask) {
        guard let url = urlSchemeTask.request.url else {
            urlSchemeTask.didFailWithError(URLSchemeHandlerError.invalidURL)
            return
        }

        let fileExtension = url.pathExtension
        let filename = url.deletingPathExtension().lastPathComponent
        if filename == "_generated_background_page", fileExtension == "html", url.scheme == "holoflows-extension" {
            let html = """
            <!DOCTYPE html>
            <html>
            <head>
                <title>background page</title>
            </head>
            <body>

            </body>
            </html>
            """
            let data = html.data(using: .utf8)!
            let returnResponse = URLResponse(
                url: url,
                mimeType: "text/html",
                expectedContentLength: data.count,
                textEncodingName: nil)

            urlSchemeTask.didReceive(returnResponse)
            urlSchemeTask.didReceive(data)
            urlSchemeTask.didFinish()
            return
        }

        guard let tab = (storage + [backgroundTab]).first(where: { $0.webView === webView }),
        let resourceProviderForURL = tab.delegate?.tab(tab, pluginResourceProviderForURL: url) else {
            urlSchemeTask.didFailWithError(URLSchemeHandlerError.noPluginResourceProvider)
            return
        }

        resourceProviderForURL.data(from: url) { result in
            switch result {
            case .success(let (data, response)):
//                let httpResponse = HTTPURLResponse(url: response.url, mimeType: response.mimeType, expectedContentLength: response.expectedContentLength, textEncodingName: response.textEncodingName)
//                httpResponse.statusCode

                let header: [String : String] = [
                    "Content-Type": response.mimeType ?? "",
                    "Content-Length" : String(response.expectedContentLength),
                ]
                // fix crash
//                Call this method to provide WebKit with the MIME type of the requested resource and its expected size. You must call this method at least once for each task, and you may call it multiple times if needed. Always call it before sending any data back to WebKit using the didReceiveData: method.
                guard let httpURLResponse = HTTPURLResponse(url: url, statusCode: 200, httpVersion: "HTTP/1.1", headerFields: header) else {
                    urlSchemeTask.didReceive(response)
                    urlSchemeTask.didFailWithError(BundleResourceManager.Error.fileNotFound)
                    return
                }
                urlSchemeTask.didReceive(httpURLResponse)
                urlSchemeTask.didReceive(data)
                urlSchemeTask.didFinish()

                consolePrint("urlSchemeTask.didFinish() =: \(response)")
            case .failure(let error):
                let schemeTaskResponse = URLResponse(url: url,
                                                     mimeType: "",
                                                     expectedContentLength: 0,
                                                     textEncodingName: nil)
                urlSchemeTask.didReceive(schemeTaskResponse)
                urlSchemeTask.didFailWithError(error)
                consolePrint("urlSchemeTask.didFailWithError() =: \(error.localizedDescription)")
            }
        }
    }

    public func webView(_ webView: WKWebView, stop urlSchemeTask: WKURLSchemeTask) {
        // do nothing
    }
    
}

extension Tabs {

    static func backgroundTabPath(for plugin: Plugin) -> String {
        // Infinite loop when use background.html
        if let backgroundPageFilename = plugin.manifest["background"].dictionaryValue["page"]?.string {
            return "holoflows-extension://\(plugin.id)/\(backgroundPageFilename)"
        }
        return "holoflows-extension://\(plugin.id)/_generated_background_page.html"
    }

}
