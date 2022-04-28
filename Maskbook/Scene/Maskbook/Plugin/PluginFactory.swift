//
//  PluginFactory.swift
//  Maskbook
//
//  Created by BradGao on 2021/8/4.
//  Copyright © 2021 dimension. All rights reserved.
//

import Foundation
import MaskbookPlugin
import WebExtension_Shim_Swift
import WebKit

extension Plugin {
    init(for scriptType: Plugin.ScriptType) {
        let maskbookPlugin = MaskbookPluginResources()
        let injectionTime = WKUserScriptInjectionTime.atDocumentStart
        
        self.init(id: MaskbookPluginResources.id,
                  manifest: maskbookPlugin.manifest,
                  environment: scriptType,
                  resources: maskbookPlugin.resources,
                  externalURIs: maskbookPlugin.externalUris,
                  universalLinks: maskbookPlugin.universalLinks)
        
        let userScript: WKUserScript = {
            let bundle = Bundle(for: Tab.self)
            if let bundleURL = bundle.resourceURL?.appendingPathComponent("WebExtensionShimScripts.bundle"),
               let scriptsBundle = Bundle(url: bundleURL),
               let scriptPath = scriptsBundle.path(forResource: "webextension-shim", ofType: "js"),
               var script = try? String(contentsOfFile: scriptPath) {
                let pattern = "// ## Inject here"
                if let patternIndex = script.range(of: pattern)?.upperBound {
                    let registerWebExtension: String = """
                            
                            
                            registerWebExtension(
                            '\(id)',
                            \(manifest.rawString() ?? "")
                            )
                            """
                    script.insert(contentsOf: registerWebExtension, at: patternIndex)
                }
                return WKUserScript(source: script, injectionTime: injectionTime, forMainFrameOnly: false)
            } else {
                fatalError("WebExtensionShim bundle not found!")
            }
        }()
        
        let supportScripts = ["realm", "typescript"].compactMap { filename -> String? in
            let bundle = Bundle(for: Tab.self)
            guard let bundleURL = bundle.resourceURL?.appendingPathComponent("WebExtensionShimScripts.bundle"),
                let scriptsBundle = Bundle(url: bundleURL),
                let scriptPath = scriptsBundle.path(forResource: filename, ofType: "js"),
                let script = try? String(contentsOfFile: scriptPath) else {
                    return nil
            }
            
            return script
        }
        
        let supportUserScripts = supportScripts.map { WKUserScript(source: $0, injectionTime: injectionTime, forMainFrameOnly: false) }
        let injectedScripts = maskbookPlugin.injectedScripts.map { WKUserScript(source: $0, injectionTime: injectionTime, forMainFrameOnly: false) }
        
        userScripts = supportUserScripts + injectedScripts + [userScript]
    }
}
