//
//  WalletCoreStorage.swift
//  Maskbook
//
//  Created by BradGao on 2021/5/26.
//  Copyright © 2021 dimension. All rights reserved.
//

import CoreData
import CoreDataStack
import WalletConnectSwift
import web3swift

class WalletCoreStorage {}

// MARK: - StoredKey

extension WalletCoreStorage {
    private static let viewContext = AppContext.shared.coreDataStack.persistentContainer.viewContext
    private static let backgroundContext = AppContext.shared.backgroundContext
    
    class func getAllStoreKey(context: NSManagedObjectContext) -> [StoredKey] {
        do {
            let fetchRequest = StoredKey.sortedFetchRequest
            let storedKeys = try context.fetch(fetchRequest)
            return storedKeys
        } catch {
            return []
        }
    }
    
    class func getAllStoreKey(type: StoredKeyType, context: NSManagedObjectContext) -> [StoredKey] {
        do {
            let fetchRequest = StoredKey.sortedFetchRequest
            fetchRequest.predicate = StoredKey.predicate(type: Int16(type.rawValue))
            let storedKeys = try context.fetch(fetchRequest)
            return storedKeys
        } catch {
            return []
        }
    }
    
    class func getStoredKey(hash: String) -> StoredKey? {
        do {
            let fetchRequest = StoredKey.sortedFetchRequest
            fetchRequest.predicate = StoredKey.predicate(hash: hash)
            fetchRequest.fetchLimit = 1
            let storedKeys = try viewContext.fetch(fetchRequest)
            return storedKeys.first
        } catch {
            return nil
        }
    }
    
    class func saveChanges() throws {
        var saveError: Error?
        backgroundContext.performAndWait {
            do {
                try backgroundContext.saveOrRollback()
            } catch {
                saveError = error
            }
        }
        if let error = saveError {
            throw error
        }
        viewContext.perform {
            do {
                try viewContext.saveOrRollback()
            } catch {
                saveError = error
            }
        }
        if let error = saveError {
            throw error
        }
    }
    
    /// Save a new `MaskStoredKey`, return **false** is a same `MaskStoredKey` already exists
    class func addStoredKey(_ storedKey: StoredKey) -> Bool {
        do {
            if let hashString = storedKey.hashString, let _ = WalletCoreStorage.getStoredKey(hash: hashString) {
                return false
            }
            viewContext.insert(storedKey)
            try viewContext.saveOrRollback()
            return true
        } catch {
            return false
        }
    }
    
    /// Remove an existing `MaskStoredKey` of given hsh, return **false** is the `MaskStoredKey` is not found
    @discardableResult
    class func removeStoredKey(hash: String) -> Bool {
        do {
            let fetchRequest = StoredKey.sortedFetchRequest
            fetchRequest.predicate = StoredKey.predicate(hash: hash)
            fetchRequest.fetchLimit = 1
            let existStoredKeys = try viewContext.fetch(fetchRequest)
            if existStoredKeys.isEmpty {
                return false
            }
            existStoredKeys.forEach {
                viewContext.delete($0)
            }
            
            try viewContext.saveOrRollback()
            return true
        } catch {
            return false
        }
    }
}

// MARK: - Account

extension WalletCoreStorage {
    class func getAllAccounts() -> [Account] {
        do {
            // to make sure coredata is initialized
            let context = viewContext
            let fetchRequest = Account.sortedFetchRequest
            fetchRequest.sortDescriptors = [NSSortDescriptor(keyPath: \StoredKey.createdAt, ascending: false)]
            return try context.fetch(fetchRequest)
        } catch {
            return []
        }
    }
    
    class func getAllAccounts(chainType: ChainType) -> [Account] {
        do {
            let fetchRequest = Account.sortedFetchRequest
            fetchRequest.predicate = Account.predicate(chainId: Int64(chainType.rawValue))
            return try viewContext.fetch(fetchRequest)
        } catch {
            return []
        }
    }
    
    class func addAccount(_ account: Account, storedKey: StoredKey) -> Bool {
        do {
            let fetchRequest = Account.sortedFetchRequest
            fetchRequest.predicate = Account.predicate(address: account.address ?? "")
            fetchRequest.fetchLimit = 1
            let existingAccounts = try viewContext.fetch(fetchRequest)
            if !existingAccounts.isEmpty {
                return false
            }
            viewContext.insert(account)
            storedKey.addToAccounts(account)
            try viewContext.saveOrRollback()
            return true
        } catch {
            return false
        }
    }
    
    class func addWalletConnectAccount(session: Session, address: String) -> Bool {
        do {
            let fetchRequest = Account.sortedFetchRequest
            fetchRequest.predicate = Account.predicate(address: address)
            fetchRequest.fetchLimit = 1
            let existingAccounts = try viewContext.fetch(fetchRequest)
            if !existingAccounts.isEmpty, let existingAccount = existingAccounts.first {
                existingAccount.sessionData = session.data
                try viewContext.saveOrRollback()
                return false
            }
            // It coverts some abnomal address to standard. The address from metamask is all lowered case.
            let checksumAddress = EthereumAddress.toChecksumAddress(address) ?? address
            let account = Account(session: session, address: checksumAddress)
            viewContext.insert(account)
            try viewContext.saveOrRollback()
            return true
        } catch {
            return false
        }
    }
    
    class func getAccount(address: String,
                          context: NSManagedObjectContext = AppContext.shared.coreDataStack.persistentContainer.viewContext) -> Account? {
        let fetchRequest = Account.sortedFetchRequest
        fetchRequest.predicate = Account.predicate(address: address)
        fetchRequest.fetchLimit = 1
        var accounts: [Account]?
        context.performAndWait {
            accounts = try? context.fetch(fetchRequest)
        }
        return accounts?.first
    }
    
    class func deleteAccount(_ account: Account,
                             context: NSManagedObjectContext = AppContext.shared.coreDataStack.persistentContainer.viewContext) {
        do {
            context.delete(account)
            try context.saveOrRollback()
        } catch {}
    }
}

// MARK: - Network

extension WalletCoreStorage {
    class func getCurrentNetwork() -> BlockChainNetwork {
        maskUserDefaults.network
    }
    
    class func setCurrentNetwork(network: BlockChainNetwork) {
        UserDefaultSettings.shared.changeNetwork(network: network,
                                                 address: UserDefaultSettings.shared.defaultAccountAddress)
    }
}
