//
//  PluginResource.swift
//  MaskbookPlugin
//
//  Created by Cirno MainasuK on 2019-6-28.
//  Copyright © 2019 dimension. All rights reserved.
//

import Foundation
import SwiftyJSON

public class MaskbookPluginHelper {

    static public var pluginBundle: Bundle {
        let bundleURL = Bundle(for: MaskbookPluginHelper.self).bundleURL.appendingPathComponent("MaskbookPlugin.bundle")
        return Bundle(url: bundleURL)!
    }

}

public class MaskbookPluginResources {

    public static let id = "eofkdgkhfoebecmamljfaepckoecjhib"
    public let manifest: JSON
    public let resources: JSON
    public let injectedScripts: [String]
    public let externalUris: [String]
    public let universalLinks: [String]

    public init() {
        let bundle = MaskbookPluginHelper.pluginBundle

        let manifest: JSON = {
            guard let url = bundle.url(forResource: "manifest", withExtension: "json"),
            let data = try? Data(contentsOf: url),
            let json = try? JSON(data: data) else {
                return JSON.null
            }
            return json
        }()
        let resources: JSON = {
            var resources = JSON()

            // setup content_scripts
            let jsURLs = bundle.urls(forResourcesWithExtension: "js", subdirectory: "js") ?? []
            for url in jsURLs {
                let filename = url.lastPathComponent
                let key = "js/" + filename
                let content = try? String(contentsOf: url)
                resources[key].string = content
            }

            return resources
        }()

        self.manifest = manifest
        self.resources = resources

        let iosManifest: JSON = {
            guard let url = bundle.url(forResource: "manifest.webextension-shim", withExtension: "json"),
            let data = try? Data(contentsOf: url),
            let json = try? JSON(data: data) else {
                return JSON.null
            }
            return json
        }()
        let injectedScripts: [String] = {
            var scripts: [String] = []
            // `user-scripts` moved into `manifest.webextension-shim.json` file
            let paths = iosManifest["user-scripts"].arrayValue.compactMap { $0.string }
            for path in paths {
                guard let url = URL(string: path, relativeTo: bundle.bundleURL) else { continue }
                guard let content = try? String(contentsOf: url) else { continue }
                    
                scripts.append(content)
            }
            
            return scripts
        }()

        self.injectedScripts = injectedScripts
        self.externalUris = iosManifest["external-uri"].arrayValue.compactMap { $0.string }
        self.universalLinks = iosManifest["universal-link"].arrayValue.compactMap { $0.string }
    }

}

