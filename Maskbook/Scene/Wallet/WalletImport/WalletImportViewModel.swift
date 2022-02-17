//
//  WalletImportViewModel.swift
//  Maskbook
//
//  Created by Hugo L on 2021/5/26.
//  Copyright © 2021 dimension. All rights reserved.
//

import Combine
import Foundation

class WalletImportViewModel {
    // MAKR: - Input & Output
    // MARK: input
    let name: String?
    let password: String
    
    // MARK: output
    let itemsPublisher = CurrentValueSubject<[ImportItem], Error>([])
    
    // MARK: - Property
    var disposeBag = Set<AnyCancellable>()
    
    // MARK: - Methods
    
    init(name: String?, password: String) {
        self.name = name
        self.password = password
        
        self.refreshImportItems()
        
        UserDefaultPublishers.network.sink { [weak self] _ in
            guard let self = self else { return }
            self.refreshImportItems()
        }
        .store(in: &disposeBag)
        
//        WalletCoreStorage.currentNetwork.sink { [weak self] network in
//            guard let self = self else { return }
//            self.refreshImportItems()
//        }
//        .store(in: &disposeBag)
    }
}

extension WalletImportViewModel {
    enum Section {
        case main
    }
}

private extension WalletImportViewModel {
    func refreshImportItems() {
        // FIXED: Doing a lot of work in the main thread can cause issue with the display of navigation bars prefered large title.
        DispatchQueue.global(qos: .background).async {
            let result = WalletCoreService.shared.getImportSupportType(chainType: WalletCoreStorage.getCurrentNetwork().chain)
            switch result {
            case .success(let types):
                let items = self.getImportSupportTypes(types: types)
                self.itemsPublisher.value = items

            case .failure(let error):
                self.itemsPublisher.send(completion: .failure(error))
            }
        }
    }
    
    func getImportSupportTypes(types: [StoredKeyImportType]) -> [ImportItem] {
        var items = [ImportItem]()
        types.forEach {
            switch $0 {
            case .keyStoreJson:
                let keystore = ImportItem.keystore(
                    title: L10n.Scene.WalletImport.itemKeystore,
                    description: L10n.Scene.WalletImport.itemKeystoreDesc
                )
                items.append(keystore)

            case .mnemonic:
                let mnemonic = ImportItem.mnemonicWords(
                    title: L10n.Scene.WalletImport.itemMnemonicWords,
                    description: L10n.Scene.WalletImport.itemMnemonicWordsDesc
                )
                items.append(mnemonic)

            case .privateKey:
                let privateKey = ImportItem.privateKey(
                    title: L10n.Scene.WalletImport.itemPrivateKey,
                    description: L10n.Scene.WalletImport.itemPrivateKeyDesc
                )
                items.append(privateKey)
            }
        }
        
        return items
    }
}
