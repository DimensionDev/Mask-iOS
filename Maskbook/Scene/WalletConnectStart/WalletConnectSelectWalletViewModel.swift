//
//  WalletConnectSelectWalletViewModel.swift
//  Maskbook
//
//  Created by sxiaojian on 2021/9/26.
//  Copyright © 2021 dimension. All rights reserved.
//

import Combine
import Foundation
import OSLog
import UIKit

class WalletConnectSelectWalletViewModel {
    var disposeBag = Set<AnyCancellable>()
    let wallets = CurrentValueSubject<[[InstalledWallet]], Never>([[InstalledWallet]]())
    var originWallets = [InstalledWallet]()

    let supportBlockChainNetwork: [BlockChainNetwork] = BlockChainNetwork.supportedNetwork

    lazy var supportNetworkID = self.supportBlockChainNetwork.map(\.networkId)

    @InjectedProvider(\.walletConnectClient)
    private var walletConnectClient

    init() {
        self.originWallets = WalletConnectClient.supportedWallets()
        let filterdArray = self.originWallets.filter { wallet in
            return wallet.networkIDs.contains(walletConnectClient.currentSelectedBlockchainNetworkSubject.value.networkId)
        }
        self.wallets.value = self.convertWalletsTo2DArray(wallets: filterdArray)

        walletConnectClient.currentSelectedBlockchainNetworkSubject
            .receive(on: DispatchQueue.main)
            .sink { _ in
            } receiveValue: { [weak self] _ in
                guard let self = self else { return }
                let filterdArray = self.originWallets.filter { wallet in
                    wallet.networkIDs.contains(self.walletConnectClient.currentSelectedBlockchainNetworkSubject.value.networkId)
                }
                self.wallets.value = self.convertWalletsTo2DArray(wallets: filterdArray)
            }
            .store(in: &disposeBag)
    }

    func convertWalletsTo2DArray(wallets: [InstalledWallet]) -> [[InstalledWallet]] {
        let walletsFilter = wallets.sorted { $0.name < $1.name }
        let results = walletsFilter.reduce(into: [[InstalledWallet]]()) { acc, cur in
            if let firstIndex = acc.firstIndex(where: { $0.count < 16 }) {
                acc[firstIndex].append(cur)
            } else {
                acc.append([cur])
            }
        }
        return results
    }
}
