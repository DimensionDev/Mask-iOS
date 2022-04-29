//
//  WKUIDelegateShim.swift
//  WebExtension-Shim
//
//  Created by MainasuK Cirno on 2020/3/5.
//

import Foundation
import WebKit
import SafariServices

/// This class is shim of WKUIDelegate. It drives WebExtension-Shim and open for override.
/// - Warning:
/// Please check the WKUIDelegateShim implement for WKUIDelegate before override any method.
/// Call super if needs. Otherwise the shim could be not function.
open class WKUIDelegateShim: NSObject {
    
    public weak var tab: Tab?
    
    public init(tab: Tab) {
        self.tab = tab
    }
    
}

// MARK: - WKUIDelegate
extension WKUIDelegateShim: WKUIDelegate {
    
    // Creating a webView
    // Shim will create a in-app SafariViewController and display it as modal. (http & https only)
    open func webView(_ webView: WKWebView, createWebViewWith configuration: WKWebViewConfiguration, for navigationAction: WKNavigationAction, windowFeatures: WKWindowFeatures) -> WKWebView? {
        if navigationAction.targetFrame == nil, let url = navigationAction.request.url,
        let scheme = url.scheme, (scheme == "http" || scheme == "https") {
            let safariViewController = SFSafariViewController(url: url)
            UIApplication.shared.windows.first(where: \.isKeyWindow)?.rootViewController?.present(safariViewController, animated: true, completion: nil)
        }
        
        return nil
    }
    
}
