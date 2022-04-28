//
//  WebExtension+Browser+Tabs+Query.swift
//  HoloflowsKit
//
//  Created by Cirno MainasuK on 2019-7-3.
//

import Foundation
import SwiftyJSON

extension WebExtension.Browser.Tabs {

    public struct Query: WebExtension.ClientRequest {
        public static let method: String = "browser.tabs.query"

        public let extensionID: String
        public let queryInfo: JSON?

        public init(extensionID: String, queryInfo: JSON?) {
            self.extensionID = extensionID
            self.queryInfo = queryInfo
        }
    }

}

extension WebExtension.Browser.Tabs.Query {

    public init(from decoder: Decoder) throws {
        var container = try decoder.unkeyedContainer()

        extensionID = try container.decode(String.self)
        queryInfo = try? container.decodeIfPresent(JSON.self) ?? JSON.null
    }

    public func encode(to encoder: Encoder) throws {
        var container = encoder.unkeyedContainer()

        try container.encode(extensionID)
        try container.encode(queryInfo ?? JSON.null)
    }

}
