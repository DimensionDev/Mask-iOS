//
//  WebExtension+Browser+Runtime+GetURL.swift
//  HoloflowsKit
//
//  Created by Cirno MainasuK on 2019-6-22.
//

import Foundation

extension WebExtension.Browser.Runtime {

    public struct GetURL: WebExtension.ClientRequest {
        public static let method: String = "browser.runtime.getURL"

        public let extensionID: String
        public let path: String

        public init(extensionID: String, path: String) {
            self.extensionID = extensionID
            self.path = path
        }
    }

}

extension WebExtension.Browser.Runtime.GetURL {

    public init(from decoder: Decoder) throws {
        var container = try decoder.unkeyedContainer()

        extensionID = try container.decode(String.self)
        path = try container.decode(String.self)
    }

    public func encode(to encoder: Encoder) throws {
        var container = encoder.unkeyedContainer()

        try container.encode(extensionID)
        try container.encode(path)
    }
    
}

