//
//  Browser.swift
//  HoloflowsKit
//
//  Created by Cirno MainasuK on 2019-6-10.
//

import os
import Foundation
import WebKit
import SwiftyJSON

public protocol BrowserDelegate: AnyObject {
    func pluginResourceURLScheme() -> [String]
    func browser(_ browser: Browser, pluginForScriptType scriptType: Plugin.ScriptType) -> Plugin
    func browser(_ browser: Browser, webViewConfigurationForOptions options: WebExtension.Browser.Tabs.Create.Options?) -> WKWebViewConfiguration
    func browser(_ browser: Browser, tabDelegateForTab tab: Tab?) -> TabDelegate?
    func browser(_ browser: Browser, tabDownloadDelegateFor tab: Tab?) -> TabDownloadsDelegate?
}

public class Browser: NSObject {

    public weak var delegate: BrowserDelegate?
    
    public private(set) var tabs: Tabs!
    public internal(set) var userAgent: String?
    
    public init(delegate: BrowserDelegate?) {
        self.delegate = delegate
        super.init()
        self.tabs = Tabs(browser: self)
    }

    deinit {
        os_log("%{public}s[%{public}ld], %{public}s: deinit", ((#file as NSString).lastPathComponent), #line, #function)
    }

}
