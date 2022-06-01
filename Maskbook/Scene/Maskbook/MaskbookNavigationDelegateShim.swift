//
//  MaskbookNavigationDelegateShim.swift
//  Maskbook
//
//  Created by MainasuK Cirno on 2020/3/5.
//  Copyright © 2020 dimension. All rights reserved.
//

import UIKit
import WebExtension_Shim
import WebKit

public extension Notification.Name {
    static let extensionTabDidFinishLoad = Notification.Name(rawValue: "io.mask.notification.name.extensionTabDidFinishLoad")
    static let connectingViewWillDisappear = Notification.Name(rawValue: "io.mask.notification.name.connectingViewWillDisappear")
}

protocol MaskbookNavigationDelegateShimDelegate: AnyObject {
    func contentPlugin() -> Plugin
    func navigationDidChange(url: URL?)
    func navigationDidFinish(_ webView: WKWebView, navigation: WKNavigation)
}

final class MaskbookNavigationDelegateShim: WKNavigationDelegateShim {
    weak var delegate: MaskbookNavigationDelegateShimDelegate?
    
    var currentNavigationAction: WKNavigationAction?
    var retryCount = 0
}

// MARK: - WKNavigationDelegate
extension MaskbookNavigationDelegateShim {
    // reset progress view when loading reject uniserval link
    override func webView(
        _ webView: WKWebView,
        decidePolicyFor navigationAction: WKNavigationAction,
        decisionHandler: @escaping (WKNavigationActionPolicy) -> Void
    ) {
        if let requestUrl = navigationAction.request.url {
            if delegate?.contentPlugin().openMode(for: requestUrl) == .application {
                if UIApplication.shared.canOpenURL(requestUrl) {
                    UIApplication.shared.open(requestUrl, options: [:], completionHandler: nil)
                }
                decisionHandler(.cancel)
                return
            }
            if delegate?.contentPlugin().openMode(for: requestUrl) != .default {
                decisionHandler(.cancel)
                return
            }
        }
        super.webView(webView, decidePolicyFor: navigationAction, decisionHandler: decisionHandler)
        
        if let url = navigationAction.request.url, let scheme = url.scheme, scheme.hasPrefix("fb") {
            DispatchQueue.main.asyncAfter(deadline: .now() + 1) { [weak self] in
                guard let tab = self?.tab else { return }
                guard let cache = MaskbookTabService.shared.cache(for: tab) else { return }
                cache.progressView.setProgress(0, animated: false)
            }
        }
        
        self.currentNavigationAction = navigationAction
        delegate?.navigationDidChange(url: navigationAction.request.url)
    }

    // reset progress view when loading reject uniserval link
    @available(iOS 13.0, *)
    override func webView(
        _ webView: WKWebView,
        decidePolicyFor navigationAction: WKNavigationAction,
        preferences: WKWebpagePreferences,
        decisionHandler: @escaping (WKNavigationActionPolicy, WKWebpagePreferences) -> Void
    ) {
        if let requestUrl = navigationAction.request.url {
            if delegate?.contentPlugin().openMode(for: requestUrl) == .application {
                if UIApplication.shared.canOpenURL(requestUrl) {
                    UIApplication.shared.open(requestUrl, options: [:], completionHandler: nil)
                }
                preferences.preferredContentMode = .mobile
                decisionHandler(.cancel, preferences)
                return
            }
            if delegate?.contentPlugin().openMode(for: requestUrl) != .default {
                preferences.preferredContentMode = .mobile
                decisionHandler(.cancel, preferences)
                return
            }
        }

        super.webView(webView, decidePolicyFor: navigationAction, preferences: preferences, decisionHandler: decisionHandler)
        
        if let url = navigationAction.request.url, let scheme = url.scheme, scheme.hasPrefix("fb") {
            DispatchQueue.main.asyncAfter(deadline: .now() + 1) { [weak self] in
                guard let tab = self?.tab else { return }
                guard let cache = MaskbookTabService.shared.cache(for: tab) else { return }
                cache.progressView.setProgress(0, animated: false)
            }
        }
        
        self.currentNavigationAction = navigationAction
        delegate?.navigationDidChange(url: navigationAction.request.url)
    }
    
    func webView(_ webView: WKWebView, didReceiveServerRedirectForProvisionalNavigation navigation: WKNavigation!) {
        print("")
    }
    
    func webViewWebContentProcessDidTerminate(_ webView: WKWebView) {
        print("")
    }
    
    func webView(_ webView: WKWebView, didStartProvisionalNavigation navigation: WKNavigation) {
    }
    
    func webView(_ webView: WKWebView, didFailProvisionalNavigation navigation: WKNavigation, withError error: Error) {
        guard let navigationAction = currentNavigationAction else { return }
        guard let tab = tab else { return }
        guard let cache = MaskbookTabService.shared.cache(for: tab) else { return }

        let failure = MaskbookTabViewModel.NavigationFailure(navigationAction: navigationAction, error: error)
        cache.viewModel.navigationFailure.accept(failure)
        delegate?.navigationDidChange(url: navigationAction.request.url)
    }
    
    override func webView(_ webView: WKWebView, didCommit navigation: WKNavigation) {
        super.webView(webView, didCommit: navigation)
        
        DispatchQueue.main.asyncAfter(deadline: .now() + 1) {
            guard let tab = self.tab else { return }
            guard let cache = MaskbookTabService.shared.cache(for: tab) else { return }
            cache.activityIndicatorView.stopAnimating()
        }
        
        // remove navigation failure
        guard let tab = tab else { return }
        guard let cache = MaskbookTabService.shared.cache(for: tab) else { return }
        cache.viewModel.navigationFailure.accept(nil)
    }
    
    public func webView(_ webView: WKWebView, didFinish navigation: WKNavigation) {
        delegate?.navigationDidFinish(webView, navigation: navigation)
    }
}
