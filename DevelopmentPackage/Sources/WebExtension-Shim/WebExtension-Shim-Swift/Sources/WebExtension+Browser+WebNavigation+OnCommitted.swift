//
//  WebExtension+Browser+WebNavigation+OnCommitted.swift
//  HoloflowsKit
//
//  Created by Cirno MainasuK on 2019-6-22.
//

import Foundation

extension WebExtension.Browser.WebNavigation {

    public struct OnCommitted: WebExtension.ServerRequest {
        public static var method: String = "browser.webNavigation.onCommitted"

        public let tab: Navigation

        public struct Navigation: Codable {
            public let tabId: Int
            public let url: String
        }
    }
    
}

extension WebExtension.Browser.WebNavigation.OnCommitted {

    public init(from decoder: Decoder) throws {
        var container = try decoder.unkeyedContainer()

        tab = try container.decode(Navigation.self)
    }

    public func encode(to encoder: Encoder) throws {
        var container = encoder.unkeyedContainer()

        try container.encode(tab)
    }

}
