//
//  MessageComposePluginContent.swift
//  Maskbook
//
//  Created by xiaojian sun on 2022/5/20.
//  Copyright © 2022 dimension. All rights reserved.
//

import Foundation

struct MessageComposePluginContent {
    init(title: String, payload: PluginMeta) {
        self.title = title
        self.payload = payload
    }

    let title: String
    let payload: PluginMeta
    var type: PluginType {
        payload.plugin
    }
}

extension MessageComposePluginContent: Identifiable {
    var id: String { payload.id }
}
