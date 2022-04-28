//
//  WebExtension+Browser+Runtime+GetManifest.swift
//  HoloflowsKit
//
//  Created by Cirno MainasuK on 2019-6-22.
//

import Foundation

extension WebExtension.Browser.Runtime {

    public struct GetManifest: WebExtension.ClientRequest {
        public static let method: String = "browser.runtime.getManifest"

        public let extensionID: String

        public init(extensionID: String) {
            self.extensionID = extensionID
        }
    }

}

extension WebExtension.Browser.Runtime.GetManifest {
    
    public init(from decoder: Decoder) throws {
        var container = try decoder.unkeyedContainer()

        extensionID = try container.decode(String.self)
    }

    public func encode(to encoder: Encoder) throws {
        var container = encoder.unkeyedContainer()

        try container.encode(extensionID)
    }

}
