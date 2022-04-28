//
//  Plugin.swift
//  HoloflowsKit
//
//  Created by Cirno MainasuK on 2019-7-9.
//

import Foundation
import SwiftyJSON
import WebKit

public struct Plugin {
    public let id: String
    public let manifest: JSON
    public let environment: ScriptType
    public let resources: JSON
    public let externalURIs: [String]
    public let universalLinks: [String]

    public var userScripts: [WKUserScript] = []

    public enum ScriptType: String {
        case backgroundScript = "background script"
        case contentScript = "content script"
    }

    public init(id: String, manifest: JSON, environment: ScriptType, resources: JSON, externalURIs: [String] = [], universalLinks: [String] = []) {
        self.id = id
        self.manifest = manifest
        self.environment = environment
        self.resources = resources
        self.externalURIs = externalURIs
        self.universalLinks = universalLinks
    }
}
