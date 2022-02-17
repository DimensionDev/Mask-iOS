//
//  SelectNetworkViewModel.swift
//  Maskbook
//
//  Created by Hugo L on 2021/5/19.
//  Copyright © 2021 dimension. All rights reserved.
//

import Combine
import UIKit

class SelectNetworkViewModel {
    typealias Item = Coin

    // MARK: - Input
    // MARK: - Output
    let menuItems = CurrentValueSubject<[Item], Never>([])
    
    init() {
        menuItems.value = generateMenuItems()
    }
    
    func select(item: Item) {
        WalletCoreStorage.setCurrentNetwork(network: item.network)
        
        menuItems.value = generateMenuItems()
    }
}

private extension SelectNetworkViewModel {
    private func generateMenuItems() -> [Item] {
        let currentNetwork = WalletCoreStorage.getCurrentNetwork()
        let supportNetwork = BlockChainNetwork.supportedNetwork
        
        return supportNetwork.map { item in
            Coin(network: item, isSelected: currentNetwork == item)
        }
    }
}

extension SelectNetworkViewModel {
    struct Coin: Hashable {
        let network: BlockChainNetwork
        var isSelected: Bool
        
        var name: String {
            return network.shortName
        }
        
        var chain: String {
            return network.name
        }
        
        var image: UIImage? {
            return network.selectedIcon
        }
    }
    
    enum Section {
        case main
    }
}
