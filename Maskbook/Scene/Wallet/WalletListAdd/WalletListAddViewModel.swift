//
//  WalletListAddViewModel.swift
//  Maskbook
//
//  Created by Hugo L on 2021/5/19.
//  Copyright © 2021 dimension. All rights reserved.
//

import Combine
import Foundation

class WalletListAddViewModel {
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
    
    private func generateMenuItems() -> [WalletsItem] {
        let createWallet = WalletsItem.createWallet(title: L10n.Scene.WalletsListAdd.walletsItemsAdd)
        let importWallet = WalletsItem.importWallet(title: L10n.Scene.WalletsListAdd.walletsListImport)
        let items = [createWallet, importWallet]
        return items
    }
}

extension WalletListAddViewModel {
    enum Section {
        case main
    }
    
    enum WalletsItem: Hashable {
        case createWallet(title: String)
        case importWallet(title: String)
    }
}
