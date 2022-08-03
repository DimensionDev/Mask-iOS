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
    
    private let pluginMetaShareViewModel = PluginMetaShareViewModel()


    @InjectedProvider(\.userDefaultSettings)
    private var settings

    @InjectedProvider(\.walletAssetManager)
    private var walletAssetsManager
    
    @InjectedProvider(\.mainCoordinator)
    var coordinator
    
    @Published var luckyDropState: RedPacketStatus?
    
    @Published var loading: Bool = false

    init(luckyDrop: RedPacketPayload, checkAvailbility: CheckAvailabilityResult?) {
        self.luckyDrop = luckyDrop
        self.checkAvailabilityResult = checkAvailbility
        checkRedPacketStatus()
    }

    private(set) lazy var createdDateInfo: String = {
        guard let time = luckyDrop.basic?.creationTime else {
            return ""
        }

        let date = Date(timeIntervalSince1970: time)
        return formatter.string(from: date)
    }()
    
    private(set) lazy var refundTip: String = {
        guard let time = luckyDrop.basic?.creationTime, let duration = luckyDrop.basic?.duration else {
            return ""
        }
        
        let date = Date(timeIntervalSince1970: time + duration)
        return L10n.Plugins.Luckydrop.refundTip(formatter.string(from: date))
    }()

    var claimedDetail: String {
        let claimers = luckyDrop.payload?.claimers ?? []
        let share = luckyDrop.basic?.shares ?? 0

        return "\(claimers.count) / \(share)"
    }

    private var token: RedPacket.FungibleToken? { luckyDrop.payload?.token }
    
    private(set) lazy var symbol: String = {
        token?.symbol ?? ""
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
        let totalValue = EthUtil.calcAmount(amount: Decimal(total.asDouble() ?? 0), decimals: decimal).stringValue
        let claimedValue = EthUtil.calcAmount(amount: Decimal(claimed.asDouble() ?? 0), decimals: decimal).stringValue

        return "\(claimedValue) / \(totalValue)"
    }()
}

extension LuckyDropHistoryTokenItemViewModel {
    private func checkRedPacketStatus() {
        guard let checkAbility = self.checkAvailabilityResult else {
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

        
        let state: RedPacketStatus? = {
            // refund first, in case after refund, also isEmpty
            if status.isRefunded {
                return .refunded
            }
            
            if status.isEmpty {
                return .empty
            }
            
            if status.isExpired {
                if status.canRefund {
                    // refundable
                    return .refundable
                }
                
                return nil
            } else {
                return .sharable(hasPassword: !(luckyDrop.basic?.password.isEmpty ?? true))
            }
        }()
        
        self.luckyDropState = state
    }

    func refund() {
        guard let rid = luckyDrop.basic?.rpid else {
            return
        }
        
        loading.toggle()
        
        Task {
            let value = await ABI.happyRedPacketV4.refund(rid: rid)
            if value?.isEmpty ?? true {
                luckyDropState = .refundable
            } else {
                luckyDropState = .refunded
            }
            loading.toggle()
        }
    }
    
    @MainActor
    func share() {
        pluginMetaShareViewModel.shareRedPacket(payload: luckyDrop)
    }
}

extension LuckyDropHistoryTokenItemViewModel {
    enum RedPacketStatus: Equatable {
        case refunded
        case refundable
        case empty
        case sharable(hasPassword: Bool)
    }
}

extension Optional where Wrapped == LuckyDropHistoryTokenItemViewModel.RedPacketStatus {
    var enabled: Bool {
        switch self {
        case .empty, .refunded: return false
        case .none: return false
        case let .sharable(hasPassword): return hasPassword
        default: return true
        }
    }
    
    var showActionButton: Bool {
        self != .none
    }
    
    var showRefundTip: Bool {
        guard case .sharable = self else {
            return false
        }
        return true
    }
    
    var title: String {
        switch self {
        case .refunded: return L10n.Scene.OpenRedPackage.refunded
        case .refundable: return L10n.Scene.OpenRedPackage.refund
        case .empty: return L10n.Scene.OpenRedPackage.empty
        case .sharable: return L10n.Plugins.Luckydrop.Confirm.share
        default: return ""
        }
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
