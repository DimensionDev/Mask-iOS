//
//  WKNavigationDelegateShim.swift
//  WebExtension-Shim
//
//  Created by MainasuK Cirno on 2020/3/5.
//

import os
import Foundation
import WebKit

/// This class is shim of WKNavigationDelegate. It drives WebExtension-Shim and open for override.
/// - Warning:
/// Please check the WKNavigationDelegateShim implement for WKNavigationDelegate before override any method.
/// Call super if needs. Otherwise the shim could be not function.
open class WKNavigationDelegateShim: NSObject {
    
    public weak var tab: Tab?
    
    public init(tab: Tab) {
        self.tab = tab
    }
    
}

// MARK: - WKNavigationDelegate
extension WKNavigationDelegateShim: WKNavigationDelegate {
    
    open func webView(_ webView: WKWebView, didCommit navigation: WKNavigation!) {
        os_log("%{public}s[%{public}ld], %{public}s: url %{public}s", ((#file as NSString).lastPathComponent), #line, #function, webView.url?.absoluteString ?? "nil")

        guard let tab = tab else {
            return
        }
        
        // Create new tab when direct to local scheme. Make UserScript inject .atDocumentStart
        if let previousScheme = webView.backForwardList.backItem?.url.scheme,
        let currentURL = webView.url, let currentScheme = webView.url?.scheme,
        previousScheme != currentScheme {
            let options = WebExtension.Browser.Tabs.Create.Options(active: tab.isActive,
                                                                   url: currentURL.absoluteString)
            tab.browser?.tabs.create(options: options)
            tab.browser?.tabs.remove(id: tab.id)
        }

        // background page will handle didCommit message
    }
    
    open func webView(_ webView: WKWebView, decidePolicyFor navigationAction: WKNavigationAction, decisionHandler: @escaping (WKNavigationActionPolicy) -> Void) {
        decisionHandler(WKNavigationActionPolicy(rawValue: WKNavigationActionPolicy.allow.rawValue + 2)!)
    }
    
    @available(iOS 13.0, *)
    open func webView(_ webView: WKWebView, decidePolicyFor navigationAction: WKNavigationAction, preferences: WKWebpagePreferences, decisionHandler: @escaping (WKNavigationActionPolicy, WKWebpagePreferences) -> Void) {
        preferences.preferredContentMode = .mobile
        let policy = WKNavigationActionPolicy(rawValue: WKNavigationActionPolicy.allow.rawValue + 2)!
        
        decisionHandler(policy, preferences)
    }
    
}
