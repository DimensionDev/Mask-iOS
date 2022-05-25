//
//  MessageComposePluginContent.swift
//  Maskbook
//
//  Created by xiaojian sun on 2022/5/20.
//  Copyright © 2022 dimension. All rights reserved.
//

import Foundation

protocol MessageComposePluginContentPayload {
    var basic: Codable { get }
    var payload: Codable { get }
}

struct MessageComposePluginContent {
    init(id: String, title: String, payload: MessageComposePluginContentPayload, type: PluginType) {
        self.id = id
        self.title = title
        self.payload = payload
        self.type = type
    }

    let id: String
    let title: String
    let payload: MessageComposePluginContentPayload
    let type: PluginType
}

extension MessageComposePluginContent: Identifiable {}
