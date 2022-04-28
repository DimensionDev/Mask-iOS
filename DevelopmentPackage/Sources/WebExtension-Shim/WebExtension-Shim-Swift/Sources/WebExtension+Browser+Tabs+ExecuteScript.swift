//
//  WebExtension+Browser+Tabs+ExecuteScript.swift
//  HoloflowsKit
//
//  Created by Cirno MainasuK on 2019-6-22.
//

import Foundation

extension WebExtension.Browser.Tabs {

    public struct ExecuteScript: WebExtension.ClientRequest {
        public static let method: String = "browser.tabs.executeScript"

        public let extensionID: String
        public let tabID: Int?
        public let details: Details

        public init(extensionID: String, tabID: Int?, details: Details) {
            self.extensionID = extensionID
            self.tabID = tabID
            self.details = details
        }

        public struct Details: Codable {
            public let code: String?
            public let file: String?
            public let runAt: WebExtension.ExtensionTypes.RunAt?

            public init(code: String?, file: String?, runAt: WebExtension.ExtensionTypes.RunAt?) {
                self.code = code
                self.file = file
                self.runAt = runAt
            }
        }
    }

}

extension WebExtension.Browser.Tabs.ExecuteScript {

    public init(from decoder: Decoder) throws {
        var container = try decoder.unkeyedContainer()

        extensionID = try container.decode(String.self)
        tabID = try container.decodeIfPresent(Int.self)
        details = try container.decode(Details.self)
    }

    public func encode(to encoder: Encoder) throws {
        var container = encoder.unkeyedContainer()

        try container.encode(extensionID)
        try container.encode(tabID)
        try container.encode(details)
    }

}
