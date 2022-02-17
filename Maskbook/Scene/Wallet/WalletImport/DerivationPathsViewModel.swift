//
//  WalletDerivationPathsViewModel.swift
//  Maskbook
//
//  Created by Hugo L on 2021/8/3.
//  Copyright © 2021 dimension. All rights reserved.
//

import Combine
import CoreData
import CoreDataStack
import Foundation

class DerivationPathsViewModel {
    typealias GenerateAddressWithPathIndex = (pathIndex: UInt32, address: String)
    
    @InjectedProvider(\.userDefaultSettings)
    private var userSetting
    
    // input
    // output
    let itemListSubject = CurrentValueSubject<[Item], Never>([])
    
    var items: [Item] {
        itemListSubject.value
    }
    
    let name: String?
    let mnemonic: String
    /// **only valid** after showing derivation path list
    var password: String = ""
    
    private var disposeBag = Set<AnyCancellable>()
    private let tempContext = NSManagedObjectContext(concurrencyType: .mainQueueConcurrencyType)
    private var balanceInfo: [String: NSDecimalNumber] = [:]
    private var selectedInfo: [String: Bool] = [:]
    private var addresses: [GenerateAddressWithPathIndex] = []
    
    init(name: String?, mnemonic: String) {
        self.name = name
        self.mnemonic = mnemonic
    }
    
    func fetchAccountsAndBalance() {
        // initialize `selectedInfo`
        let existAddresses = WalletCoreService.shared.getAllAccounts().compactMap { account in
            return account.address
        }
        existAddresses.forEach { address in
            let key = address.lowercased()
            selectedInfo[key] = true
        }
        
        Vault.shared
            .getWalletPassword()
            .sink(receiveCompletion: { _ in }) { [weak self] password in
                guard let self = self else { return }
                
                DispatchQueue.main.async {
                    self.password = password
                    self.addresses = self.getFirst20AccountsHelper(password: password)
                    self.getAllBalance(addresses: self.addresses)
                    
                    self.publishItems()
                }
            }
            .store(in: &disposeBag)
    }
    
    func toggleItem(item: Item) {
        let existAddresses = WalletCoreService.shared.getAllAccounts().compactMap { account in
            return account.address
        }
        guard !existAddresses.contains(item.address) else {
            return
        }
        
        let key = item.address.lowercased()
        selectedInfo[key] = !(selectedInfo[key] ?? false)
        // publish items for updating selection state
        publishItems()
    }
    
    func createAccounts() -> Result<Void, ErrorList> {
        let existAddresses = WalletCoreService.shared.getAllAccounts().compactMap { account in
            return account.address
        }
        let selectedItems = self.items.filter { item in
            return item.isAdded && !existAddresses.contains(item.address)
        }
        
        let mnemonic = self.mnemonic
        let name = self.name ?? ""
        let password = self.password
        var errors: [Error] = []
        selectedItems.forEach { item in
            let result = WalletCoreService.shared.createAccount(
                param: .mnemonic(mnemonic: mnemonic, pathIndex: item.pathIndex),
                name: name,
                password: password,
                chainType: userSetting.network.chain,
                isImported: true)
            
            switch result {
            case let .success(account):
                userSetting.defaultAccountAddress = account.address
                
            case let .failure(error):
                errors.append(error)
            }
        }
        if errors.isEmpty {
            return .success(() )
        } else {
            return .failure(ErrorList(list: errors))
        }
    }
    
    /// There are 3 cases to call this method
    /// - after getting first 20 accounts
    /// - after getting balance every time for specified account
    /// - after selecting / unselecting account
    private func publishItems() {
        var items: [Item] = []
        addresses.forEach { pathIndex, address in
            let key = address.lowercased()
            let balance = self.balanceInfo[key]
            let isAdded = self.selectedInfo[key] ?? false
            let item = Item(pathIndex: pathIndex, address: address, balance: balance, isAdded: isAdded)
            items.append(item)
        }
        self.itemListSubject.accept(items)
    }
    
    private func getFirst20AccountsHelper(password: String) -> [GenerateAddressWithPathIndex] {
        var addresses: [GenerateAddressWithPathIndex] = []
        let chain = maskUserDefaults.network.chain
        
        guard let storedKey = try? WalletCoreHelper.importWithMnemonicForcely(
                password: password,
                mnemonic: mnemonic.trimmingCharacters(in: .whitespacesAndNewlines),
                context: tempContext).get() else {
            return []
        }
        
        for i in 0 ..< 20 {
            guard let result = try? WalletCoreService.shared.generateAddress(
                    storedKey: storedKey,
                    password: password,
                    chainType: chain,
                    pathIndex: UInt32(i)).get() else {
                continue
            }
            let (index, address) = result
            addresses.append((pathIndex: index, address: address))
        }
        
        return addresses
    }
    
    private func getAllBalance(addresses: [GenerateAddressWithPathIndex]) {
        let addresses = addresses.compactMap { $0.1 }
        WalletAssetManager.shared
            .activateProvider
            .createBalancePublisher(addresses: addresses)?
            .receive(on: DispatchQueue.main)
            .sink { _ in
            } receiveValue: { [weak self] address, balance in
                let key = address.lowercased()
                self?.balanceInfo[key] = balance
                // publish items again for getting balance from server
                self?.publishItems()
            }.store(in: &disposeBag)
    }
}

extension DerivationPathsViewModel {
    struct Item: Hashable {
        let pathIndex: UInt32
        let address: String
        let balance: NSDecimalNumber?
        var isAdded: Bool
    }
    
    enum Section: Hashable {
        case main
    }
    
    struct ErrorList: Error {
        let list: [Error]
    }
}
