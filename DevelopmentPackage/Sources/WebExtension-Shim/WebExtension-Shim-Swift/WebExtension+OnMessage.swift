//
//  WebExtension+OnMessage.swift
//  HoloflowsKit
//
//  Created by Cirno MainasuK on 2019-6-22.
//

import Foundation
import SwiftyJSON

extension WebExtension {

    public struct OnMessage: WebExtension.ServerRequest {
        public static var method: String = "onMessage"

        public let extensionID: String
        public let toExtensionID: String
        public let messageID: String
        public let message: JSON
        public let sender: WebExtension.Browser.Runtime.MessageSender

        public init(extensionID: String, toExtensionID: String, messageID: String, message: JSON, sender: WebExtension.Browser.Runtime.MessageSender) {
            self.extensionID = extensionID
            self.toExtensionID = toExtensionID
            self.messageID = messageID
            self.message = message
            self.sender = sender
        }

        public init(fromMessageSender sender: WebExtension.Browser.Runtime.MessageSender, sendMessage: WebExtension.SendMessage) {
            self.extensionID = sendMessage.extensionID
            self.toExtensionID = sendMessage.toExtensionID
            self.messageID = sendMessage.messageID
            self.message = sendMessage.message
            self.sender = sender
        }
    }

}

extension WebExtension.OnMessage {

    public init(from decoder: Decoder) throws {
        var container = try decoder.unkeyedContainer()

        extensionID = try container.decode(String.self)
        toExtensionID = try container.decode(String.self)
        messageID = try container.decode(String.self)
        message = try container.decode(JSON.self)
        sender = try container.decode(WebExtension.Browser.Runtime.MessageSender.self)
    }

    public func encode(to encoder: Encoder) throws {
        var container = encoder.unkeyedContainer()

        try container.encode(extensionID)
        try container.encode(toExtensionID)
        try container.encode(messageID)
        try container.encode(message)
        try container.encode(sender)
    }
    
}

extension WebExtension.Browser.Runtime {
    public struct MessageSender: Codable {
        public let tab: Tab.Meta?
        public let id: String? 
        public let url: String?

        public init(tabMeta: Tab.Meta?, id: String?, url: String?) {
            self.tab = tabMeta
            self.id = id
            self.url = url
        }
    }
}
