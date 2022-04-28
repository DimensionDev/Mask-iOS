//
//  File.swift
//  Maskbook
//
//  Created by BradGao on 2021/5/28.
//  Copyright © 2021 dimension. All rights reserved.
//

import Foundation

import Combine
import KeychainAccess

class Vault {
    enum Key: String {
        case walletPassword = "mask_vault_password"
        case backupPassword = "mask_vault_backup_password"
    }
    
    static let shared = Vault()
    
    @InjectedProvider(\.userDefaultSettings)
    private var settings
    
    // Temp comment out for further use
//    private var keychain = Keychain(service: "io.maskbook.maskbook.keychain", accessGroup: "group.io.mask")
    
    func removeAll() {
        settings.walletPasswordData = nil
        settings.backupPasswordData = nil
//        try? keychain.removeAll()
    }
    
    func set(_ value: String, key: Vault.Key, completion: ((Error?) -> Void)? = nil) {
        DispatchQueue.global().async {
            do {
                try self.set(key: key, value)
                completion?(nil)
            } catch {
                completion?(error)
            }
        }
    }
    
    func update(_ value: String, key: Vault.Key, completion: ((Error?) -> Void)? = nil) {
        DispatchQueue.global().async {
            do {
                try self.set(key: key, value)
                completion?(nil)
            } catch {
                completion?(error)
            }
        }
    }
    
    func get(key: Vault.Key, completion: ((String?, Error?) -> Void)? = nil) {
        DispatchQueue.global().async {
            do {
                let decrptedPassword = try self.get(key: key)
                completion?(decrptedPassword, nil)
            } catch {
                completion?(nil, error)
            }
        }
    }
    
    func get(key: Vault.Key) throws -> String? {
        do {
            var decrptedPassword: String?
            switch key {
            case .walletPassword:
                if let walletPasswordData = self.settings.walletPasswordData {
                    decrptedPassword = try Crypto.decrypt(input: walletPasswordData)
                }
                self.settings.resetPasswordExpiredDate()
                
            case .backupPassword:
                if let backupPasswordData = self.settings.backupPasswordData {
                    decrptedPassword = try Crypto.decrypt(input: backupPasswordData)
                }
            }
            return decrptedPassword
        } catch {
            throw error
        }
    }
    
    func set(key: Vault.Key, _ value: String) throws {
        do {
            let encrypted = try Crypto.encrypt(inputText: value)
            switch key {
            case .walletPassword:
                self.settings.walletPasswordData = encrypted
                // reset unlocking expired time
                self.settings.resetPasswordExpiredDate()
                
            case .backupPassword:
                self.settings.backupPasswordData = encrypted
            }
        } catch {
            throw error
        }
    }
}

extension Vault {
    func publisherWhenUpdating(_ value: String, forKey key: Vault.Key) -> AnyPublisher<Void, Error> {
        LazyFuture { [weak self] promise in
            do {
                try self?.set(key: key, value)
                promise(.voidSuccess)
            } catch {
                promise(.failure(error))
            }
        }
        .eraseToAnyPublisher()
    }

    func futureWhenUpdating(_ value: String, forKey key: Vault.Key) -> LazyFuture<Void, Error> {
        LazyFuture { [weak self] promise in
            do {
                try self?.set(key: key, value)
                promise(.voidSuccess)
            } catch {
                promise(.failure(error))
            }
        }
    }

    func getValue(for key: Vault.Key) -> AnyPublisher<String?, Never> {
        LazyFuture<String?, Error> { [weak self] promise in
            do {
                let password = try self?.get(key: key)
                promise(.success(password))
            } catch {
                promise(.failure(error))
            }
        }
        .replaceError(with: nil)
        .eraseToAnyPublisher()
    }

    func updateValue(_ value: String, forKey key: Vault.Key) -> AnyPublisher<Void, Error> {
        LazyFuture { [weak self] promise in
            do {
                try self?.set(key: key, value)
                promise(.voidSuccess)
            } catch {
                promise(.failure(error))
            }
        }
        .eraseToAnyPublisher()
    }

    func updateValue(_ value: String, forKey key: Vault.Key) -> LazyFuture<Void, Error> {
        LazyFuture { [weak self] promise in
            do {
                try self?.set(key: key, value)
                promise(.voidSuccess)
            } catch {
                promise(.failure(error))
            }
        }
    }
}

extension Vault {
    enum WalletPasswordError: Error {
        case unknown
        case cancel
    }
    
    func getWalletPassword() -> AnyPublisher<String, WalletPasswordError> {
        guard settings.isPasswordExpried() else {
            return getValue(for: .walletPassword)
                .map { $0 ?? "" }
                .setFailureType(to: WalletPasswordError.self)
                .eraseToAnyPublisher()
        }
        return LazyFuture { [weak self] promise in
            DispatchQueue.main.async {
                self?.showUnlockScene(promise: promise)
            }
        }
        .subscribe(on: DispatchQueue.global())
        .receive(on: RunLoop.main)
        .eraseToAnyPublisher()
    }

    private func showUnlockScene(promise: @escaping (Result<String, Vault.WalletPasswordError>) -> Void) {
        Coordinator.main.present(
            scene: .walletUnlock(cancellable: true) { [weak self] error in
                do {
                    guard error == nil else {
                        // the error must be `UnlockError.cancel` if had error
                        promise(.failure(.cancel))
                        return
                    }
                    
                    let walletPassword = try self?.get(key: .walletPassword)
                    promise(.success(walletPassword ?? ""))
                } catch {
                    promise(.failure(.unknown))
                }
            },
            transition: .modal(animated: true, adaptiveDelegate: nil)
        )
    }
    
    func verifyWalletPassword(_ password: String?) -> AnyPublisher<Bool, Never> {
        LazyFuture<Bool, Never> { [weak self] promise in
            do {
                let passwordExpiredDate = self?.settings.passwordExpiredDate
                let walletPassword = try self?.get(key: .walletPassword)
                let result = password == walletPassword
                // revert passwordExpiredDate if walletPassword verify is failed
                if !result {
                    self?.settings.passwordExpiredDate = passwordExpiredDate
                }
                promise(.success(result))
            } catch {
                promise(.success(false))
            }
        }
        .subscribe(on: DispatchQueue.global())
        .receive(on: RunLoop.main)
        .eraseToAnyPublisher()
    }
    
    /// check if has set wallet password
    /// - Returns: return true if has set otherwise return false
    func hasSetWalletPassword() -> Bool {
        return self.settings.walletPasswordData?.isEmpty == false
    }
}

// MARK: new api with async/await

extension Vault {
    func getPassword(for key: Key) async throws -> String? {
        let rawData: Data? = {
            switch key {
            case .walletPassword: return self.settings.walletPasswordData
            case .backupPassword: return self.settings.backupPasswordData
            }
        }()

        let result = Task { () -> Result<String?, Error> in
            do {
                var decrptedPassword: String?
                switch key {
                case .walletPassword:
                    if let walletPasswordData = rawData {
                        decrptedPassword = try Crypto.decrypt(input: walletPasswordData)
                    }
                    await MainActor.run {
                        self.settings.resetPasswordExpiredDate()
                    }

                case .backupPassword:
                    if let backupPasswordData = rawData {
                        decrptedPassword = try Crypto.decrypt(input: backupPasswordData)
                    }
                }

                return .success(decrptedPassword)
            } catch {
                return .failure(error)
            }
        }

        return try await result.value.get()
    }

    func getWalletPassword() async throws -> String {
        guard settings.isPasswordExpried() else {
            return try await getPassword(for: .walletPassword) ?? ""
        }

        let task = Task.detached(priority: .userInitiated) { @MainActor in
            return try await self.passwordFromWalletUnlock()
        }

        return try await task.value
    }

    @MainActor
    private func passwordFromWalletUnlock() async throws -> String {
        return try await withCheckedThrowingContinuation { continuation in
            self.showUnlockScene { result in
                continuation.resume(with: result)
            }
        }
    }
}
