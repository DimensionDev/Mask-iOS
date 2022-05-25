//
//  PluginMeta.swift
//  Maskbook
//
//  Created by yzj on 2022/5/24.
//  Copyright © 2022 dimension. All rights reserved.
//

import Foundation

enum EncryptionVersion {
    case v37
    case v38
}

enum PluginMeta: Codable {
    case redPacket(key: String, value: RedPacketPayload)

    func encode(to encoder: Encoder) throws {
        var container = encoder.singleValueContainer()
        switch self {
        case let .redPacket(key, value):
            try container.encode([key: value])
        }
    }

    var plugin: PluginType {
        switch self {
        case .redPacket: return .luckyDrop
        }
    }

    var title: String {
        switch self {
        case let .redPacket(_, value): return value.payload?.sender.message ?? ""
        }
    }
}

extension PluginMeta: Identifiable {
    var id: String {
        switch self {
        case let .redPacket(key, value): return "\(key)\(value.basic?.txid ?? "")"
        }
    }
}

enum StringFormat {
    case json
}

extension Array where Element == PluginMeta {
    func stringfy(format: StringFormat = .json) -> String? {
        switch format {
        case .json:
            let encoder = JSONEncoder()
            guard let rawData = try? encoder.encode(self) else {
                return nil
            }

            return String(data: rawData, encoding: .utf8)
        }
    }
}
