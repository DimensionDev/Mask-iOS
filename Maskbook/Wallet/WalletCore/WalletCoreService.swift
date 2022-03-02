//
//  WalletCoreService.swift
//  Maskbook
//
//  Created by BradGao on 2021/5/25.
//  Copyright © 2021 dimension. All rights reserved.
//

import CoreData
import CoreDataStack
import Foundation
import web3swift
import SwiftUI

class WalletCoreService {
    static let shared = WalletCoreService()
    let caller: RequestCaller = WalletCoreHelper()
    
    @InjectedProvider(\.userDefaultSettings)
    private var userSetting
    
    @InjectedProvider(\.walletConnectClient)
    private var walletConnectClient
}

// MARK: - StoredKey
// swiftlint:disable line_length
extension WalletCoreService {
    enum CreateAccountParam {
        case mnemonic(mnemonic: String, pathIndex: UInt32)
        case privateKey(privateKey: String)
        case keyStoreJson(keyStoreJson: String, keyStoreJsonPassword: String)
    }
    
    func isDefaultStoreKeyExisting() -> Bool {
        WalletCoreStorage.getAllStoreKey(type: .mnemonic, context: AppContext.shared.coreDataStack.persistentContainer.viewContext).contains { key in
            key.isDefault == true
        }
    }
    
    func importLegacyWallets(_ legacyWalletInfos: [LegacyWalletInfo]) {
        for legacyWalletInfo in legacyWalletInfos {
            if !legacyWalletInfo.mnemonic.isEmpty,
               let path = legacyWalletInfo.path,
               let derivationPath = DerivationPath(path) {
                let param = CreateAccountParam.mnemonic(mnemonic: legacyWalletInfo.mnemonic.joined(separator: " "), pathIndex: derivationPath.address)
                _ = createAccount(param: param,
                              name: legacyWalletInfo.name ?? "",
                              password: legacyWalletInfo.passphrase,
                              chainType: .ethereum,
                              isImported: false)
            } else if let privateKey = legacyWalletInfo.private_key,
                      !privateKey.isEmpty {
                let param = CreateAccountParam.privateKey(privateKey: privateKey)
                _ = createAccount(param: param,
                              name: legacyWalletInfo.name ?? "",
                              password: legacyWalletInfo.passphrase,
                              chainType: .ethereum,
                              isImported: false)
            }
        }
    }
    
    /// This method should **ONLY** be used in following situation:
    /// 1. Importing a new **non-mnemonic** type wallet
    /// 2. Creating new wallet when there is **NO** existing `default` StoreKey
    func createAccount(param: CreateAccountParam,
                       name: String,
                       password: String,
                       chainType: ChainType,
                       isImported: Bool) -> Result<Account, Error> {
        do {
            let storedKey: StoredKey
            var derivationPathIndex: UInt32 = 0
            let tempContext = NSManagedObjectContext(concurrencyType: .mainQueueConcurrencyType)
            tempContext.parent = AppContext.shared.coreDataStack.persistentContainer.viewContext
            switch param {
            case let .mnemonic(mnemonic, pathIndex):
                // Check if there is an existing `default` mnemonic type StoreKey
                let exisitingStoreKey = WalletCoreStorage.getAllStoreKey(type: .mnemonic, context: tempContext).first { key in
                    key.isDefault == true
                }
                storedKey = try WalletCoreHelper.importWithMnemonicForcely(password: password, mnemonic: mnemonic.trimmingCharacters(in: .whitespacesAndNewlines), context: tempContext).get()
                derivationPathIndex = pathIndex
                if let exisitingStoreKey = exisitingStoreKey {
                    if exisitingStoreKey.hashString != storedKey.hashString {
                        storedKey.isDefault = false
                    } else {
                        storedKey.isDefault = true
                    }
                } else {
                    storedKey.isDefault = true
                }

            case let .privateKey(privateKey):
                let trimmedPrivateKey = privateKey.stripHexPrefix()
                storedKey = try WalletCoreHelper.importWithPrivateKey(privateKey: trimmedPrivateKey, password: password, name: name, chainType: chainType, context: tempContext).get()

            case let .keyStoreJson(keyStoreJson, keyStoreJsonPassword):
                let jsonParam = keyStoreJson.trimmingCharacters(in: .whitespacesAndNewlines)
                storedKey = try WalletCoreHelper.importWithJSONStoredKey(json: jsonParam, name: name, keyStoreJsonPassword: keyStoreJsonPassword, password: password, chainType: chainType, context: tempContext).get()
            }
            storedKey.isImported = isImported
            let account = try createAccount(password: password, name: name, chainType: chainType, pathIndex: derivationPathIndex, storedKey: storedKey).get()
            try tempContext.saveOrRollback()
            try WalletCoreStorage.saveChanges()
            
            userSetting.defaultAccountAddress = account.address

            return .success(account)
        } catch {
            return .failure(error)
        }
    }
    
    ///    This method should **ONLY** be used in following situation:
    ///    There exists a `default` StoreKey, and user tries to create a new wallet
    func deriveNewAccount(name: String,
                          password: String,
                          chainType: ChainType) -> Result<Account, Error> {
        let tempContext = NSManagedObjectContext(concurrencyType: .privateQueueConcurrencyType)
        tempContext.parent = AppContext.shared.backgroundContext
        
        var failError: Error?
        var newAccountAddress: String?
        
        tempContext.performAndWait {
            let storeKey = WalletCoreStorage.getAllStoreKey(type: .mnemonic, context: tempContext).first { key in
                key.isDefault == true
            }
            guard let defaultStoreKey = storeKey else {
                failError = WalletCoreError.defaultStoreKeyNotFound
                return
            }
            // 1. Search for the largest path from deleted indexPaths
            let largestIndexPath: DerivationPath? = defaultStoreKey.deletedDerivationPaths?.compactMap({ path in
                guard let pathString = path as? String else { return nil }
                return DerivationPath(pathString)
            }).max(by: {
                $0.address > $1.address
            })
            
            let largestDeletedIndex: UInt32 = {
                if let address = largestIndexPath?.address {
                    return address + 1
                }
                return 0
            }()
            
            // 2. Search for the largest path from existing accounts
            let largestExistIndex = defaultStoreKey.accounts?
                .compactMap { $0 as? Account }
                .compactMap { $0.derivationPath }
                .compactMap { DerivationPath($0)?.address }
                .max(by: <)
            
            let toDeriveExistIndex: UInt32 = {
                if let address = largestExistIndex {
                    return address + 1
                }
                return 0
            }()
            
            let toDeriveIndex = max(largestDeletedIndex, toDeriveExistIndex)
            
            if let account = try? self.createAccount(
                password: password,
                name: name,
                chainType: chainType,
                pathIndex: toDeriveIndex,
                storedKey: defaultStoreKey).get() {
                newAccountAddress = account.address
            }
        }
        if let failError = failError {
            return .failure(failError)
        }
        guard let validNewAccountAddress = newAccountAddress else {
            return .failure(WalletCoreError.coreDataError)
        }
        do {
            try tempContext.waitUntilSavedOrRollback()
            try WalletCoreStorage.saveChanges()
            
            guard let account = WalletCoreStorage.getAccount(address: validNewAccountAddress) else {
                return .failure(WalletCoreError.coreDataError)
            }
            userSetting.defaultAccountAddress = account.address
            return .success(account)
        } catch {
            return .failure(error)
        }
    }
    
    /// Remove an existing `MaskStoredKey` of given hash, return **false** is the `MaskStoredKey` with same hash is not found
    @discardableResult
    private func removeWallet(hash: String) -> Bool {
        if !WalletCoreStorage.removeStoredKey(hash: hash) {
            return false
        }
        do {
            try WalletCoreStorage.saveChanges()
        } catch {
            return false
        }
        if getAllAccounts().isEmpty {
            userSetting.defaultAccountAddress = nil
        }
        return true
    }
    
    func updatePassword(password: String, newPassword: String) -> Result<Void, Error> {
        let tempContext = NSManagedObjectContext(concurrencyType: .privateQueueConcurrencyType)
        tempContext.parent = AppContext.shared.backgroundContext
        var updateError: Error?
        tempContext.performAndWait {
            let storeKeys = WalletCoreStorage.getAllStoreKey(context: tempContext)
            
            for storeKey in storeKeys {
                let result = WalletCoreHelper.updatePassword(password: password, newPassword: newPassword, storedKeyData: storeKey.data!)
                switch result {
                case .success((let newHash, let newData)):
                    storeKey.hashString = newHash
                    storeKey.data = newData

                case .failure(let error):
                    updateError = error
                    break
                }
            }
            if updateError == nil {
                do {
                    try tempContext.saveOrRollback()
                } catch {
                    updateError = error
                }
            }
        }
        if let error = updateError {
            return .failure(error)
        } else {
            AppContext.shared.backgroundContext.performAndWait {
                do {
                    try AppContext.shared.backgroundContext.saveOrRollback()
                } catch {
                    updateError = error
                }
            }
            if let error = updateError {
                return .failure(error)
            }
            return .voidSuccess
        }
    }
}
// swiftlint:enable line_length

// MARK: - Accounts
// swiftlint:disable empty_count
extension WalletCoreService {
    func getAllAccounts() -> [Account] {
        return WalletCoreStorage.getAllAccounts()
    }
    
    func getAllAccounts(chainType: ChainType) -> [Account] {
        WalletCoreStorage.getAllAccounts(chainType: chainType)
    }
    
    func getAccount(address: String) -> Account? {
        return WalletCoreStorage.getAccount(address: address)
    }
    
    @discardableResult
    private func createAccount(password: String, name: String, chainType: ChainType, pathIndex: UInt32, storedKey: StoredKey) -> Result<Account, Error> {
        let derivationPath = chainType.getDerivationPath(index: pathIndex)
        let derivationPathString = derivationPath?.description ?? ""
        guard let storedKeyData = storedKey.data,
              let context = storedKey.managedObjectContext else {
            return .failure(WalletCoreError.coreDataError)
        }
        let result = WalletCoreHelper.createAccount(
            password: password,
            name: name,
            chainType: chainType,
            derivationPath: derivationPathString,
            storedKeyData: storedKeyData,
            context: context
        )
        switch result {
        case .success(let account):
            if let address = account.address {
                walletConnectClient.checkIfWalletConnectWalletHasBeenRepleaced(address: address)
            }
            storedKey.addToAccounts(account)
            return .success(account)

        case .failure(let error):
            return .failure(error)
        }
    }
    
    @discardableResult
    func updateAccount(newName: String, address: String) -> Result<Account, Error> {
        guard let account = WalletCoreStorage.getAccount(address: address) else {
            return .failure(WalletCoreError.accountNotFound(address: address))
        }
        account.name = newName
        do {
            try WalletCoreStorage.saveChanges()
        } catch {
            return .failure(error)
        }
        return .success(account)
    }
    
    func updateAccountENSName(address: String) {
        guard let ens = ENS(web3: Web3.InfuraMainnetWeb3()) else { return }
        DispatchQueue.global().async {
            do {
                let ensName = try ens.getName(forNode: address.stripHexPrefix() + ".addr.reverse")
                DispatchQueue.main.async {
                    guard let account = WalletCoreStorage.getAccount(address: address) else { return }
                    account.ensName = ensName
                    do {
                        try WalletCoreStorage.saveChanges()
                    } catch {
                        return
                    }
                }
            } catch {
                return
            }
        }
    }
    
    @discardableResult
    func deleteAccount(address: String, chainType: ChainType) -> Result<StoredKey?, Error> {
        guard let account = WalletCoreStorage.getAccount(address: address) else {
            return .failure(WalletCoreError.accountNotFound(address: address))
        }

        if let storedKey = account.ownedByStoredKey {
            storedKey.removeFromAccounts(account)
            if storedKey.accounts?.count == 0 {
                WalletCoreStorage.removeStoredKey(hash: storedKey.hashString!)
            }
        } else {
            guard let _ = account.sessionData else {
                return .failure(WalletCoreError.coreDataError)
            }
        }
        WalletCoreStorage.deleteAccount(account)
        
        do {
            try WalletCoreStorage.saveChanges()
        } catch {
            return .failure(error)
        }
        if maskUserDefaults.defaultAccountAddress == address {
            setDefaultAccountAddressAfterAccountDeleted()
        }
        return .success(account.ownedByStoredKey)
    }
    
    func setDefaultAccountAddressAfterAccountDeleted() {
        if getAllAccounts().isEmpty {
            userSetting.defaultAccountAddress = nil
        } else {
            let accountsOfCurrentChain = getAllAccounts(chainType: maskUserDefaults.network.chain)
            var account: Account?
            if !accountsOfCurrentChain.isEmpty {
                account = accountsOfCurrentChain.first
            } else {
                account = getAllAccounts().first
            }
            guard let account = account else { return }
            if account.fromWalletConnect, let networkId = account.netwrokIDFromSession {
                userSetting.network = BlockChainNetwork(chain: .ethereum, networkId: UInt64(networkId))
            }
            userSetting.defaultAccountAddress = account.address
        }
    }
    
    func getCurrentAccount() -> Account? {
        guard let defaultAccountAddress = maskUserDefaults.defaultAccountAddress else {
            return nil
        }
        return getAccount(address: defaultAccountAddress)
    }
    
    func changeNetwork(network: BlockChainNetwork, account: Account? = nil) {
        if let account = account {
            self.userSetting.defaultAccountAddress = account.address
        } else {
            let accounts = WalletCoreService.shared.getAllAccounts()
            guard let account = accounts.first(where: {
                ChainType(rawValue: Int($0.chainId)) == network.chain
                && $0.fromWalletConnect == false }) else {
                return
            }
            self.userSetting.defaultAccountAddress = account.address
        }
        userSetting.changeNetwork(network: network,
                                  address: userSetting.defaultAccountAddress)
    }
}
// swiftlint:enable empty_count

// MARK: - StoredKey Import / Export
extension WalletCoreService {
    func getImportSupportType(chainType: ChainType) -> Result<[StoredKeyImportType], Error> {
        let result = WalletCoreHelper.getImportSupportType(chainType: chainType)
        switch result {
        case .success(let types):
            return .success(types)

        case .failure(let error):
            return .failure(error)
        }
    }
    
    func getExportSupportType(chainType: ChainType) -> Result<[StoredKeyExportType], Error> {
        let result = WalletCoreHelper.getExportSupportType(chainType: chainType)
        switch result {
        case .success(let types):
            return .success(types)

        case .failure(let error):
            return .failure(error)
        }
    }
    
    func exportKeystore(password: String, newPassword: String, account: Account) -> Result<String, Error> {
        var result: Result<String, Error> = .failure(WalletCoreError.coreDataError)
        account.managedObjectContext!.performAndWait {
            result = WalletCoreHelper.exportKeystore(password: password, newPassword: newPassword, account: account)
        }

        switch result {
        case .success(let types):
            return .success(types)

        case .failure(let error):
            return .failure(error)
        }
    }
    
    func exportPrivateKey(password: String, account: Account) -> Result<String, Error> {
        var result: Result<String, Error> = .failure(WalletCoreError.coreDataError)
        account.managedObjectContext!.performAndWait {
            result = WalletCoreHelper.exportPrivateKey(password: password, account: account)
        }
        switch result {
        case .success(let types):
            return .success(types)

        case .failure(let error):
            return .failure(error)
        }
    }
    
    func exportMnemonic(password: String, account: Account) -> Result<String, Error> {
        var result: Result<String, Error> = .failure(WalletCoreError.coreDataError)
        account.managedObjectContext?.performAndWait {
            result = WalletCoreHelper.exportMnemonic(password: password, account: account)
        }
        switch result {
        case .success(let types):
            return .success(types)

        case .failure(let error):
            return .failure(error)
        }
    }
}

// MARK: - Generate addresses
extension WalletCoreService {
    func generateAddress(
        storedKey: StoredKey,
        password: String,
        chainType: ChainType,
        pathIndex: UInt32) -> Result<(UInt32, String), Error> {
        let derivationPath = chainType.getDerivationPath(index: pathIndex)
        let derivationPathString = derivationPath?.description ?? ""
        guard let storedKeyData = storedKey.data else {
            return .failure(WalletCoreError.coreDataError)
        }
        let result = WalletCoreHelper.generateAccountAddressForcely(
            password: password,
            name: password,
            chainType: chainType,
            derivationPath: derivationPathString,
            storedKeyData: storedKeyData)
        switch result {
        case let .success(address):
            return .success((pathIndex, address))
            
        case .failure(let error):
            return .failure(error)
        }
    }
}
