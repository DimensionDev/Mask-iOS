//
//  NFTLuckyDropHistoryTokenItemViewModel.swift
//  Maskbook
//
//  Created by xiaojian sun on 2022/8/4.
//  Copyright © 2022 dimension. All rights reserved.
//

import BigInt
import Combine
import Foundation

final class NFTLuckyDropHistoryItemViewModel: ObservableObject {
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

    private var disposeBag = Set<AnyCancellable>()

    @Published var luckyDropState: RedPacketStatus?

    @Published var loading: Bool = false

    @Published var collectionURL: URL?

    var payload: NftRedPacketPayload?

    init(luckyDrop: NftRedPacketSubgraph) {
        self.luckyDrop = luckyDrop
        self.payload = PluginStorageRepository.queryNFTRedPacketRecord(
            chain: settings.network,
            tx: luckyDrop.txid)
        checkRedPacketStatus()
        getCollectionURL()
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

    private(set) lazy var symbol: String = luckyDrop.tokenContract.symbol
    
    private var hasPassword: Bool {
        payload != nil && payload?.privateKey != nil
    }
}

extension NFTLuckyDropHistoryItemViewModel {
    private func checkRedPacketStatus() {
        let state: RedPacketStatus? = {
            if finished {
                return .empty
            }

            if isExpired {
                return .refunded
            }
            return .sharable(hasPassword: hasPassword)
        }()

        luckyDropState = state
    }

    private func getCollectionURL() {
        if let tokenId = luckyDrop.tokenIds.first,
           let collectible = CollectibleRepository.queryCollectible(
               contractAddress: luckyDrop.tokenContract.address,
               network: settings.network,
               tokenId: tokenId),
           let urlString = collectible.collectionImage,
           let url = URL(string: urlString)
        {
            collectionURL = url
            return
        }

        if let publisher = walletAssetsManager.nftscanProvider.retrieveCollectionByAddress(contractAddress: luckyDrop.tokenContract.address) {
            publisher
                .receive(on: DispatchQueue.main)
                .sink { _ in
                } receiveValue: { [weak self] model in
                    if let urlString = model.logoURL,
                       let url = URL(string: urlString)
                    {
                        self?.collectionURL = url
                    }
                }
                .store(in: &disposeBag)
        }
    }

    @MainActor
    func share() {
        if let payload = payload {
            pluginMetaShareViewModel.shareNFTRedPacket(payload: payload)
        }
    }
}

extension NFTLuckyDropHistoryItemViewModel {
    enum RedPacketStatus: Equatable {
        case refunded
        case empty
        case sharable(hasPassword: Bool)
    }
}

extension Optional where Wrapped == NFTLuckyDropHistoryItemViewModel.RedPacketStatus {
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
