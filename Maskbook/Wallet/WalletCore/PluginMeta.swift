//
//  PluginMeta.swift
//  Maskbook
//
//  Created by yzj on 2022/5/24.
//  Copyright © 2022 dimension. All rights reserved.
//

import Foundation
import web3swift

enum EncryptionVersion {
    case v37
    case v38
}

enum PluginMeta: Codable {
    case redPacket(RedPacketPayload)
    case fileService(FileServiceUploadResult)

    func encode(to encoder: Encoder) throws {
        var container = encoder.singleValueContainer()
        switch self {
        case let .redPacket(value):
            try container.encode(value)

        case .fileService:
            return
        }
    }

    var plugin: PluginType {
        switch self {
        case .redPacket: return .luckyDrop
        case .fileService: return .fileService
        }
    }

    var key: String {
        switch self {
        case .redPacket: return PluginType.luckyDrop.postEncryptionKey
        case .fileService: return PluginType.fileService.postEncryptionKey
        }
    }

    var title: String {
        switch self {
        case let .redPacket(value):
            let totalStr = value.basic?.total ?? "0"
            let token = value.payload?.token
            let senderName = value.senderName
            let symbol = token?.symbol ?? token?.token.name ?? "Token"
            
            var total = totalStr
            let totalNumber = NSDecimalNumber(string: totalStr)
            if totalNumber != .notANumber, let decimal = token?.decimals {
                total = totalNumber.dividing(by: NSDecimalNumber(
                    mantissa: 1, exponent: Int16(decimal), isNegative: false)
                ).stringValue
            }
            let title = "A Lucky Drop with \(total) $\(symbol) from \(senderName)"
            return title

        case let .fileService(value):
            return "Attached File: \(value.name)"
        }
    }
}

extension PluginMeta: Identifiable {
    var id: String {
        switch self {
        case let .redPacket(value): return "\(value.basic?.txid ?? "")"
        case .fileService: return "\(UUID())"
        }
    }
}

enum StringFormat {
    case json
}

extension Array where Element == PluginMeta {
    /// the results string will be in this format:
    /// """
    ///  {
    ///    "com.maskbook.red_packet:1": { JSONObject... },
    ///    "com.maskbook.file_service:2": { JSONObject ... }
    ///  }
    /// """
    /// convert the array to dictionary and serilize into json string
    func stringfy(format: StringFormat = .json) -> String? {
        switch format {
        case .json:
            let encoder = JSONEncoder()
            let data = self.reduce(into: [:], { $0[$1.key] = $1 })

            return (try? encoder.encode(data))
                .flatMap { String(data: $0, encoding: .utf8) }
        }
    }
}
