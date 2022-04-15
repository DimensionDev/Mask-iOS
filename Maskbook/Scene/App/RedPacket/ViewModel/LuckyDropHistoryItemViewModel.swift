//
//  LuckyDropHistoryItemViewModel.swift
//  Maskbook
//
//  Created by yzj on 2022/4/13.
//  Copyright © 2022 dimension. All rights reserved.
//

import Foundation
import BigInt

final class LuckyDropHistoryTokenItemViewModel: ObservableObject {
    typealias CheckAvailabilityResult = HappyRedPacketV4.CheckAvailabilityResult

    private(set) var luckyDrop: RedPacketPayload
    private var checkAvailabilityResult: CheckAvailabilityResult?

    private lazy var formatter: DateFormatter = {
        let formatter = DateFormatter()
        formatter.dateFormat = "yyyy/MM/dd HH:mm"
        formatter.locale = Locale.current
        return formatter
    }()

    @InjectedProvider(\.userDefaultSettings)
    private var settings

    @InjectedProvider(\.walletAssetManager)
    private var walletAssetsManager

    init(luckyDrop: RedPacketPayload, checkAvailbility: CheckAvailabilityResult?) {
        self.luckyDrop = luckyDrop
        self.checkAvailabilityResult = checkAvailbility
        
    }

    private func checkRedPacketStatus() {
        guard let checkAbility = self.checkAvailabilityResult else {
            // TODO: return invalid default status
            return
        }

        let availibily = RedPacketAvailability(
            tokenAddress: checkAbility.address?.address ?? "",
            balance: checkAbility.balance.flatMap { String($0, radix: 10) } ?? "",
            total: checkAbility.balance.flatMap { String($0, radix: 10) } ?? "",
            claimed: checkAbility.claimed.flatMap { String($0, radix: 10) } ?? "",
            expired: checkAbility.expired ?? true,
            claimedAmount: checkAbility.claimedAmount.flatMap { String($0, radix: 10) } ?? ""
        )

        let interactivePayload = RedPacketInteractivePayload(
            redpacketPayload: .either(luckyDrop),
            availability: availibily,
            postLink: .either("")
        )

        let network = settings.network
        let address = settings.defaultAccountAddress ?? ""
        let status = interactivePayload.parseStatus(accountAddress: address, network: network)

        let state: RedPackedStatus = {
//            {canSend
//                                                    ? t('plugin_red_packet_history_send')
//                                                    : refundState.type === TransactionStateType.HASH
//                                                    ? t('plugin_red_packet_refunding')
//                                                    : listOfStatus.includes(RedPacketStatus.empty)
//                                                    ? t('plugin_red_packet_empty')
//                                                    : t('plugin_red_packet_refund')}

            if status.canSend {
                return .send
            } else {
                // refund state == .HASH
                if false {
                    return .refunding
                } else {
                    if status.isEmpty {
                        return .empty
                    } else {
                        return .refunded
                    }
                }
            }

            return .initial
        }()
        
    }

    private(set) lazy var createdDate: String = {
        guard let time = luckyDrop.basic?.creationTime else {
            return ""
        }

        let date = Date(timeIntervalSince1970: time)

        guard let timeZone = TimeZone.current.abbreviation(for: date) else {
            return formatter.string(from: date)
        }
        return "\(formatter.string(from: date))"
    }()

    var claimedDetail: String {
        let claimers = luckyDrop.payload?.claimers ?? []
        let share = luckyDrop.basic?.shares ?? 0

        return "\(claimers.count) / \(share)"
    }

    private(set) lazy var token: MaskToken? = {
        settings.network.mainToken
    }()

    private(set) lazy var icon: String? = {
        nil
    }()

    private(set) lazy var totalRemain: String = {
        let totalString = luckyDrop.basic?.total
        let totalRemaining = luckyDrop.payload?.totalRemaining.flatMap { BigUInt($0) }
        guard let total = totalString.flatMap({ BigUInt.init($0) }),
              let remaining = totalRemaining else {
            return ""
        }

        let decimal = token?.decimals ?? 18

        let claimed = total - remaining
        let totalValue = EthUtil.calcAmount(amount: Decimal(total.asInt() ?? 0), decimals: decimal).stringValue
        let claimedValue = EthUtil.calcAmount(amount: Decimal(claimed.asInt() ?? 0), decimals: decimal).stringValue

        return "\(claimedValue) / \(totalValue)"
    }()
}

extension LuckyDropHistoryTokenItemViewModel {
    enum RedPackedStatus {
        case send
        case refunded
        case empty
        case sharable
        case refunding
        case initial
    }
}

extension RedPacketPayload {
    var senderName: String {
        payload?.sender.name ?? ""
    }

    var message: String {
        payload?.sender.message ?? ""
    }
}
