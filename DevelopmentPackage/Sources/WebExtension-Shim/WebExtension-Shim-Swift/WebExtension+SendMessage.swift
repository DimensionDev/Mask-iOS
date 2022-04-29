//
//  WebExtensionSendMessage.swift
//  HoloflowsKit
//
//  Created by Cirno MainasuK on 2019-6-22.
//

import Foundation
import SwiftyJSON

extension WebExtension {

    public struct SendMessage: WebExtension.ClientRequest {
        public static let method: String = "sendMessage"

        public let extensionID: String
        public let toExtensionID: String
        public let tabId: Int?
        public let messageID: String
        public let message: JSON
    }

}

extension WebExtension.SendMessage {

    public init(from decoder: Decoder) throws {
        var container = try decoder.unkeyedContainer()

        extensionID = try container.decode(String.self)
        toExtensionID = try container.decode(String.self)
        tabId = try container.decodeIfPresent(Int.self)
        messageID = try container.decode(String.self)
        message = try container.decode(JSON.self)
    }

    public func encode(to encoder: Encoder) throws {
        var container = encoder.unkeyedContainer()

        try container.encode(extensionID)
        try container.encode(toExtensionID)
        try container.encode(tabId)
        try container.encode(messageID)
        try container.encode(message)
    }

}
