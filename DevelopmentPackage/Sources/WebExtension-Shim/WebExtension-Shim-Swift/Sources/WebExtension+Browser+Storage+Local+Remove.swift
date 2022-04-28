//
//  WebExtension+Browser+Storage+Local+Remove.swift
//  HoloflowsKit
//
//  Created by Cirno MainasuK on 2019-6-22.
//

import Foundation
import SwiftyJSON

extension WebExtension.Browser.Storage.Local {

    public struct Remove: WebExtension.ClientRequest {
        public static let method: String = "browser.storage.local.remove"

        public let extensionID: String
        public let key: JSON

        public init(extensionID: String, keys: [String]) {
            self.extensionID = extensionID
            self.key = JSON(keys)
        }
    }
    
}

extension WebExtension.Browser.Storage.Local.Remove {

    public init(from decoder: Decoder) throws {
        var container = try decoder.unkeyedContainer()

        extensionID = try container.decode(String.self)
        key = try container.decode(JSON.self)
    }

    public func encode(to encoder: Encoder) throws {
        var container = encoder.unkeyedContainer()

        try container.encode(extensionID)
        try container.encode(key)
    }
    
}

extension WebExtension.Browser.Storage.Local.Remove {
    public var keyValues: [String] {
        return key.array?.compactMap { $0.string } ?? [key.string].compactMap { $0 }
    }
}
