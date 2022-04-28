//
//  WebExtension+Browser+Tabs+Remove.swift
//  HoloflowsKit
//
//  Created by Cirno MainasuK on 2019-6-22.
//

import Foundation

extension WebExtension.Browser.Tabs {

    public struct Remove: WebExtension.ClientRequest {
        public static let method: String = "browser.tabs.remove"

        public let extensionID: String
        public let tabId: Int

        public init(extensionID: String, tabId: Int) {
            self.extensionID = extensionID
            self.tabId = tabId
        }
    }

}

extension WebExtension.Browser.Tabs.Remove {

    public init(from decoder: Decoder) throws {
        var container = try decoder.unkeyedContainer()

        extensionID = try container.decode(String.self)
        tabId = try container.decode(Int.self)
    }

    public func encode(to encoder: Encoder) throws {
        var container = encoder.unkeyedContainer()

        try container.encode(extensionID)
        try container.encode(tabId)
    }

}
