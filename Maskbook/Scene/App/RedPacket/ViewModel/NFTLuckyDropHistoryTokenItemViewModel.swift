//
//  NFTLuckyDropHistoryTokenItemViewModel.swift
//  Maskbook
//
//  Created by xiaojian sun on 2022/8/4.
//  Copyright © 2022 dimension. All rights reserved.
//

import Foundation

import BigInt

final class NFTLuckyDropHistoryTokenItemViewModel: ObservableObject {

    private(set) var luckyDrop: NftRedPacketSubgraph

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

    init(luckyDrop: NftRedPacketSubgraph) {
        self.luckyDrop = luckyDrop
        checkRedPacketStatus()
    }

    private(set) lazy var createdDateInfo: String = {
        let date = Date(timeIntervalSince1970: luckyDrop.creationTime)
        return formatter.string(from: date)
    }()
    
    var isExpired: Bool {
        let date = Date(timeIntervalSince1970: luckyDrop.creationTime + luckyDrop.duration)
        return date.isInThePast
    }
    
    var finished: Bool {
        luckyDrop.claimers.count == Int(luckyDrop.total)
    }

    var claimedDetail: String {
        let claimers = luckyDrop.claimers
        let share = luckyDrop.total

        return "\(claimers.count) / \(share)"
    }

    
    private(set) lazy var symbol: String = {
        luckyDrop.token.symbol
    }()
}

extension NFTLuckyDropHistoryTokenItemViewModel {
    private func checkRedPacketStatus() {
        let state: RedPacketStatus? = {
            if finished {
                return .empty
            }
            
            if isExpired  {
                return .refunded
            }
            return .sharable(hasPassword: !(luckyDrop.password.isEmpty))
        }()

        self.luckyDropState = state
    }
    
    @MainActor
    func share() {
//        pluginMetaShareViewModel.shareRedPacket(payload: luckyDrop)
    }
}

extension NFTLuckyDropHistoryTokenItemViewModel {
    enum RedPacketStatus: Equatable {
        case refunded
        case empty
        case sharable(hasPassword: Bool)
    }
}

extension Optional where Wrapped == NFTLuckyDropHistoryTokenItemViewModel.RedPacketStatus {
    var enabled: Bool {
        switch self {
        case .empty, .refunded: return false
        case .none: return false
        case let .sharable(hasPassword): return hasPassword
        }
    }
    
    var showActionButton: Bool {
        self != .none
    }
    
    var title: String {
        switch self {
        case .refunded: return L10n.Scene.OpenRedPackage.refunded
        case .empty: return L10n.Scene.OpenRedPackage.empty
        case .sharable: return L10n.Plugins.Luckydrop.Confirm.share
        default: return ""
        }
    }
}
