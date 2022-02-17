//
//  RedPacketInteractivePayload+Description.swift
//  Maskbook
//
//  Created by xiaojian sun on 2022/1/27.
//  Copyright © 2022 dimension. All rights reserved.
//

import Foundation


extension RedPacketInteractivePayload {
    var infoDescription: String {
        switch self.redpacketPayload {
        case let .either(redpacketPayload):
            return redpacketPayload.infoDescription
        case let .or(nftRedPacketPayload):
            return ""
        }
    }
}

extension RedPacketPayload {
    var infoDescription: String {
        guard let basic = basic else { return "" }
        guard let payload = payload else { return "" }
        let sharesLeft = basic.shares - (payload.claimers ?? []).count
        let amount = NSDecimalNumber(string: basic.total).decimalValue
        let totalDisplayQuantity = EthUtil.calcAmount(amount: amount,
                                                      decimals: payload.token?.token.decimals ?? 18)
            .stringValue
        return "\(sharesLeft) \(L10n.Scene.OpenRedPackage.shares)"
        + " / \(totalDisplayQuantity) \(payload.tokenDescription)"
        + " \(L10n.Scene.OpenRedPackage.total)"
    }

    var fromDescription: String {
        "\(L10n.Scene.OpenRedPackage.from)\(payload?.sender.name ?? "")"
    }

    var endTimeDescription: String {
        guard let basic = basic else { return "" }
        let endTime = (basic.creationTime + basic.duration) / 1_000
        let date = Date(timeIntervalSince1970: endTime)
        let formatter = DateFormatter()
        formatter.dateFormat = "yyyy/MM/dd hh a"
        let dateStr = formatter.string(from: date)
        let timezone: String = {
            if let timezoneStr = TimeZone.current.abbreviation() {
                return "(\(timezoneStr))"
            }
            return ""
        }()
        return "\(L10n.Scene.OpenRedPackage.ends) \(dateStr)" + " " + timezone
    }
}

extension RedPacket.RedPacketPayload.Payload {
    var tokenDescription: String {
        switch token {
        case let .erc20Token(token):
            return token.name ?? ""
        case let .nativeToken(token):
            return token.name ?? ""
        case let .unsupportType(token):
            return token.name ?? ""
        case .none:
            return ""
        }
    }
}
