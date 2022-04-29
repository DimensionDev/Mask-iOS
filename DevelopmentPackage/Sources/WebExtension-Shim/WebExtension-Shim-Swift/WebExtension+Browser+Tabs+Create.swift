//
//  WebExtension+Browser+Tabs+Create.swift
//  HoloflowsKit
//
//  Created by Cirno MainasuK on 2019-6-22.
//

import Foundation

extension WebExtension.Browser.Tabs {

    public struct Create: WebExtension.ClientRequest {
        public static let method: String = "browser.tabs.create"

        public let extensionID: String
        public let options: Options

        public init(extensionID: String, options: Options) {
            self.extensionID = extensionID
            self.options = options
        }

        public struct Options: Codable {
            public let active: Bool?
            public let url: String?

            public init(active: Bool? = nil, url: String? = nil) {
                self.active = active
                self.url = url
            }
        }
    }

}

extension WebExtension.Browser.Tabs.Create {

    public init(from decoder: Decoder) throws {
        var container = try decoder.unkeyedContainer()

        extensionID = try container.decode(String.self)
        options = try container.decode(Options.self)
    }

    public func encode(to encoder: Encoder) throws {
        var container = encoder.unkeyedContainer()

        try container.encode(extensionID)
        try container.encode(options)
    }

}
