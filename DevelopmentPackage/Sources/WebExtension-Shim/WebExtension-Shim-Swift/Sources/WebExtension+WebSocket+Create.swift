//
//  WebExtension+WebSocket+Create.swift
//  HoloflowsKit
//
//  Created by Cirno MainasuK on 2019-7-10.
//

import Foundation

extension WebExtension.WebSocket {

    public struct Create: WebExtension.ClientRequest {
        public static let method: String = "websocket.create"

        public let extensionID: String
        public let url: String

        public init(extensionID: String, url: String) {
            self.extensionID = extensionID
            self.url = url
        }
    }

}

extension WebExtension.WebSocket.Create {

    public init(from decoder: Decoder) throws {
        var container = try decoder.unkeyedContainer()

        extensionID = try container.decode(String.self)
        url = try container.decode(String.self)
    }

    public func encode(to encoder: Encoder) throws {
        var container = encoder.unkeyedContainer()

        try container.encode(extensionID)
        try container.encode(url)
    }

}
