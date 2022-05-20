//
//  MessageComposePluginContent.swift
//  Maskbook
//
//  Created by xiaojian sun on 2022/5/20.
//  Copyright © 2022 dimension. All rights reserved.
//

import Foundation

struct MessageComposePluginContent {
    init(title: String, type: PluginType) {
        self.title = title
        self.type = type
        self.id = Self.generatId(title: title, type: type)
    }
    
    let title: String
    let type: PluginType
    let id: String
}

extension MessageComposePluginContent: Identifiable {
    static func generatId(title: String, type: PluginType) -> String {
        var hasher = Hasher()
        hasher.combine(title)
        hasher.combine(type)
        return String(hasher.finalize())
    }
}
