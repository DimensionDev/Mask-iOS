//
//  WalletDetailViewModel.swift
//  Maskbook
//
//  Created by Hugo L on 2021/5/19.
//  Copyright © 2021 dimension. All rights reserved.
//

import Combine
import CoreDataStack
import Foundation

class WalletDetailViewModel {
    // MARK: - Input
    // MARK: - Output
    lazy var menuItemsPublisher: AnyPublisher<[WalletsItem], Never> = {
        return Future { [weak self] promise in
            guard let self = self else { return promise(.success([])) }
            let items = self.generateMenuItems()
            promise(.success(items))
        }
        .eraseToAnyPublisher()
    }()
    
    let account: Account
    
    init(account: Account) {
        self.account = account
    }
    
    private func generateMenuItems() -> [WalletsItem] {
        let renameItem = WalletsItem.rename(
            title: L10n.Scene.WalletDetail.walletItemsRename,
            subtitle: account.displayTitle
        )
        let backupItem = WalletsItem.backup(title: L10n.Scene.WalletDetail.walletItemsBackup)
        let historyItem = WalletsItem.history(title: L10n.Scene.WalletDetail.walletItemsHistory)
        var items = [WalletsItem]()
        
        if account.fromWalletConnect {
            items.append(renameItem)
        } else {
            let network = WalletCoreStorage.getCurrentNetwork()
            let chainItem = WalletsItem.chain(type: network,
                                              subtitle: L10n.Scene.WalletDetail.walletTitleChange)
            items.append(chainItem)
            items.append(renameItem)
        }
        
        if !account.fromWalletConnect {
            items.append(backupItem)
        }
        
        items.append(historyItem)
        if account.isDeletable {
            if account.fromWalletConnect {
                let disconnect = WalletsItem.disconnect(title: L10n.Scene.WalletConnect.disconnect)
                items.append(disconnect)
            } else {
                let delete = WalletsItem.delete(title: L10n.Scene.WalletDetail.walletItemsDelete)
                items.append(delete)
            }
        }
        return items
    }
}

// swiftlint:disable identifier_name
extension WalletDetailViewModel {
    enum Section {
        case main
    }
    
    enum WalletsItem: Hashable {
        case chain(type: BlockChainNetwork, subtitle: String?)
        case rename(title: String, subtitle: String?)
        case history(title: String)
        case backup(title: String)
        case delete(title: String)
        case disconnect(title: String)
    }
}
// swiftlint:enable identifier_name
