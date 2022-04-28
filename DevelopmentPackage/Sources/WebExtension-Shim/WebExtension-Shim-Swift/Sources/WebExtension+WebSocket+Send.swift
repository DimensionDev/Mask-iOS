//
//  WebExtension+WebSocket+Send.swift
//  HoloflowsKit
//
//  Created by Cirno MainasuK on 2019-7-10.
//

import Foundation

extension WebExtension.WebSocket {

    public struct Send: WebExtension.ClientRequest {
        public static let method: String = "websocket.send"

        public let extensionID: String
        public let websocketID: Int
        public let data: WebExtension.StringOrBlob

        public init(extensionID: String, websocketID: Int, data: WebExtension.StringOrBlob) {
            self.extensionID = extensionID
            self.websocketID = websocketID
            self.data = data
        }
    }

}

extension WebExtension.WebSocket.Send {

    public init(from decoder: Decoder) throws {
        var container = try decoder.unkeyedContainer()

        extensionID = try container.decode(String.self)
        websocketID = try container.decode(Int.self)
        data = try container.decode(WebExtension.StringOrBlob.self)
    }

    public func encode(to encoder: Encoder) throws {
        var container = encoder.unkeyedContainer()

        try container.encode(extensionID)
        try container.encode(websocketID)
        try container.encode(data)
    }

}
