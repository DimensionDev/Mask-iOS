//
//  WalletEditViewModel.swift
//  Maskbook
//
//  Created by Hugo L on 2021/5/19.
//  Copyright © 2021 dimension. All rights reserved.
//

import Combine
import CoreDataStack
import Foundation

class WalletEditViewModel {
    // MARK: - Input
    let account: Account
    
    @InjectedProvider(\.walletConnectClient)
    private var walletConnectClient
    
    // MARK: - Output
    let menuItems: CurrentValueSubject<[WalletsItem], Never> = CurrentValueSubject([])
    
    init(account: Account) {
        self.account = account
        let items = self.generateMenuItems()
        menuItems.accept(items)
    }
    
    private func generateMenuItems() -> [WalletsItem] {
        let rename = WalletsItem.rename(title: L10n.Scene.WalletEdit.itemRename, account: account)
        var items: [WalletsItem] = [rename]
        if account.isDeletable {
            if account.fromWalletConnect {
                let disconnect = WalletsItem.disconnect(title: L10n.Scene.WalletConnect.disconnect, account: account)
                items.append(disconnect)
            } else {
                let delete = WalletsItem.delete(title: L10n.Scene.WalletEdit.itemDelete, account: account)
                items.append(delete)
            }
        }
        return items
    }
    
    func disconnectWalletConnectAccount(account: Account) {
        guard let session = account.session else { return }
        walletConnectClient.disconnect(session: session)
    }
}

extension WalletEditViewModel {
    enum Section {
        case main
    }
    
    enum WalletsItem: Hashable {
        case rename(title: String, account: Account)
        case delete(title: String, account: Account)
        case disconnect(title: String, account: Account)
    }
}
