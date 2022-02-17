//
//  WalletCoreService+Backup.swift
//  Maskbook
//
//  Created by BradGao on 2021/10/28.
//  Copyright © 2021 dimension. All rights reserved.
//

import CoreData
import CoreDataStack
import Foundation
import web3swift

// MARK: Backup
extension WalletCoreService {
    func prepareWalletRecords(password: String) -> Result<[WalletBackupInfo], Error> {
        var records = [WalletBackupInfo]()
        var coreDataError: Error?
        let backgroundContext = AppContext.shared.backgroundContext
        backgroundContext.performAndWait {
            do {
                let fetchRequest = Account.sortedFetchRequest
                fetchRequest.sortDescriptors = [NSSortDescriptor(keyPath: \StoredKey.createdAt, ascending: false)]
                let accounts = try backgroundContext.fetch(fetchRequest)
                records = try accounts
                    .filter { !$0.fromWalletConnect }
                    .map { account in
                        return try self.generateWalletBackRecord(
                            account: account,
                            password: password,
                            context: backgroundContext)
                            .get()
                    }
            } catch {
                coreDataError = error
            }
        }
        if let error = coreDataError {
            return .failure(error)
        }
        return .success(records)
    }
    
    private func generateWalletBackRecord(account: Account,
                                          password: String,
                                          context: NSManagedObjectContext) -> Result<WalletBackupInfo, Error> {
        guard !account.fromWalletConnect else {
            return .failure(WalletCoreError.coreDataError)
        }
        guard let storedKey = account.ownedByStoredKey else {
            return .failure(WalletCoreError.coreDataError)
        }
        guard let name = account.name,
              let address = account.address,
              let createdAt = account.createdAt?.timeIntervalSince1970,
              let updatedAt = account.lastModifiedDate?.timeIntervalSince1970 else {
                  return .failure(WalletCoreError.coreDataError)
              }
        var mnemonic: WalletBackupInfo.Mnemonic?
        if storedKey.type == StoredKeyType.mnemonic.rawValue {
            guard let mnemonicString = try? exportMnemonic(password: password, account: account).get() else {
                return .failure(WalletCoreError.coreDataError)
            }
            mnemonic = WalletBackupInfo.Mnemonic(
                words: mnemonicString,
                parameter: WalletBackupInfo.Parameter(
                    path: account.derivationPath ?? "")
            )
        }
        do {
            let privateKeyInfo = try generateWalletBackupPrivKeyInfo(account: account, password: password).get()
            let backupInfo = WalletBackupInfo(name: name,
                                              address: address,
                                              createdAt: createdAt,
                                              updateAt: updatedAt,
                                              passphrase: "",
                                              mnemonic: mnemonic,
                                              privateKey: privateKeyInfo)
            return .success(backupInfo)
        } catch {
            return .failure(error)
        }
    }
    
    private func generateWalletBackupPrivKeyInfo(account: Account,
                                                 password: String) -> Result<WalletBackupInfo.PrivateKey, Error> {
        do {
            let privateKey = try exportPrivateKey(password: password, account: account).get()
            guard let privateKeyData = Data.fromHex(privateKey) else {
                throw MaskWalletCoreError.invalidPrivateKey
            }
            
            let privateKeyInfo = WalletBackupInfo.PrivateKey(
                crv: "K-256",
                x: "",
                y: "",
                keyOps: ["deriveKey",
                         "deriveBits"],
                kty: "EC",
                d: privateKeyData.base64URLEncodedString())
            return .success(privateKeyInfo)
        } catch {
            return .failure(error)
        }
    }
}

// MARK: Restore
extension WalletCoreService {
    func restoreFrom(walletRecords: [WalletBackupInfo], password: String) -> Result<Void, Error> {
        var coreDataError: Error?
        let backgroundContext = AppContext.shared.backgroundContext
        backgroundContext.performAndWait {
            do {
                try walletRecords.forEach {
                    var param: CreateAccountParam
                    if let mnemonic = $0.mnemonic?.words,
                       !mnemonic.isEmpty,
                       let paramPath = $0.mnemonic?.parameter.path,
                       let derivationPath = DerivationPath(paramPath)
                    {
                        param = .mnemonic(mnemonic: mnemonic, pathIndex: derivationPath.address)
                    } else {
                        let privKey = try getWalletPrivKeyFromBackupInfo(walletRecord: $0).get()
                        param = .privateKey(privateKey: privKey)
                    }
                    // Since we are restoring wallets from backup, ignore the error caused by
                    // duplicate wallet address
                    _ = self.createAccount(param: param,
                                           name: $0.name,
                                           password: password,
                                           chainType: .ethereum,
                                           isImported: true)
                }
            } catch {
                coreDataError = error
            }
        }
        if let coreDataError = coreDataError {
            return .failure(coreDataError)
        }
        return .success(())
    }
    
    private func getWalletPrivKeyFromBackupInfo(walletRecord: WalletBackupInfo) -> Result<String, Error> {
        guard let privKeyD = walletRecord.privateKey?.d else {
            return .failure(WalletCoreError.requestParamError)
        }
        guard let privKeyData = Data(base64URLEncoded: privKeyD) else {
            return .failure(WalletCoreError.requestParamError)
        }
        let privKeyHexString = privKeyData.toHexString()
        return .success(privKeyHexString)
    }
}
