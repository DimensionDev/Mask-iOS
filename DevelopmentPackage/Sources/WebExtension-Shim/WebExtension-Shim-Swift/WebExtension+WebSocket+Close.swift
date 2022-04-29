//
//  WebExtension+WebSocket+Close.swift
//  HoloflowsKit
//
//  Created by Cirno MainasuK on 2019-7-10.
//

import Foundation

extension WebExtension.WebSocket {

    public struct Close: WebExtension.ClientRequest {
        public static let method: String = "websocket.create"

        public let extensionID: String
        public let websocketID: Int
        public let code: Int
        public let reason: String

        public init(extensionID: String, websocketID: Int, code: Int, reason: String) {
            self.extensionID = extensionID
            self.websocketID = websocketID
            self.code = code
            self.reason = reason
        }
    }

}

extension WebExtension.WebSocket.Close {

    public init(from decoder: Decoder) throws {
        var container = try decoder.unkeyedContainer()

        extensionID = try container.decode(String.self)
        websocketID = try container.decode(Int.self)
        code = try container.decode(Int.self)
        reason = try container.decode(String.self)
    }

    public func encode(to encoder: Encoder) throws {
        var container = encoder.unkeyedContainer()

        try container.encode(extensionID)
        try container.encode(websocketID)
        try container.encode(code)
        try container.encode(reason)
    }

}
