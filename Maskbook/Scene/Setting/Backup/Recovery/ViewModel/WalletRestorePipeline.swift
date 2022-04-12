import Combine
import CoreDataStack
import Foundation
import SwiftUI

final class WalletRestorePipeline {
    @InjectedProvider(\.backupWallets)
    private var walletProvider

    @InjectedProvider(\.userDefaultSettings)
    private var userSettings

    @InjectedProvider(\.vault)
    private var vault

    private(set) var walletRestoreSignal = PassthroughSubject<Pipeline, Never>()
    private(set) var sheetPipeline = PassthroughSubject<SheetPipeline, Never>()
    
    private(set) var cancelableStorage: Set<AnyCancellable> = []
    private var restorePipeStorage: Set<AnyCancellable> = []

    init() {
        buildEvent()
    }
    
    func restore(with data: Data) {
        restorePipeStorage.removeAll()
        walletRestoreSignal.send(.startRestore(decryptedData: data))
    }

    private func buildEvent() {
        walletRestoreSignal
            .receive(on: DispatchQueue.main)
            .sink { [weak self] pipeline in
                guard let self = self else { return }

                switch pipeline {
                case let .startRestore(decryptedData):
                    self.parseRestoreFile(from: decryptedData)

                case let .restoreFile(decryptedData, restoreFile, walletItems):
                    // show wallets item
                    self.sheetPipeline.send(.showWalletsInfo(decryptedData, restoreFile, walletItems))

                case let .restoreMessage(message, restorefile):
                    self.sendRestoreMessage(message: message, restorefile: restorefile)

                case .failedToParseRestoreFile:
                    // show failure tips
                    self.sheetPipeline.send(.failedToParseRestoreFile)
                    
                case .noWalletSecureFoundInRestoreFile:
                    self.sheetPipeline.send(.noWalletSecureFoundInRestoreFile)

                case let .restoreSucceed(withWallet):
                    self.sheetPipeline.send(.restoreSucceed(withWallet: withWallet))
                }
            }
            .store(in: &cancelableStorage)
    }

    private func parseRestoreFile(from data: Data) {
        Publishers.CombineLatest(
            LazyFuture<RestoreFile?, Never> { promise in
                let result = try? JSONDecoder().decode(RestoreFile.self, from: data)
                promise(.success(result))
            },
            walletProvider.getAllNativeWallets().map { $0.map { $0.address } }
        )
        .receive(on: DispatchQueue.global())
        .flatMap { [weak self] restoreFile, wallets -> AnyPublisher<Pipeline, Never> in
            guard let self = self else { return Empty().eraseToAnyPublisher() }
            let nextPipe = self.nextPipeForOriginRestoreData(
                data,
                restorefile: restoreFile,
                wallets: wallets
            )
            return LazyFuture { promise in
                promise(.success(nextPipe))
            }
            .eraseToAnyPublisher()
        }
        .receive(on: DispatchQueue.main)
        .bind(to: \.walletRestoreSignal, on: self)
        .store(in: &restorePipeStorage)
    }

    private func sendRestoreMessage(message: RestoreBackupMWEMessage, restorefile: RestoreFile?) {
        vault.getValue(for: .walletPassword)
            .combineLatest(message.asAnyPublisher())
            .sink { [weak self] password, result in
                if result.isSuccess {
                    // sync wallet info before send restoreSucceed
                    if let wallets = restorefile?.wallets, let password = password {
                        // if error occures send message otherwise send succeed message
                        if case .failure = self?.walletProvider.syncWallets(wallets, password: password) {
                            self?.walletRestoreSignal.send(.noWalletSecureFoundInRestoreFile)
                            return
                        }
                    }
                    let isWalletEmty = (restorefile?.wallets ?? []).isEmpty
                    self?.walletRestoreSignal.send(.restoreSucceed(withWallet: !isWalletEmty))
                } else {
                    self?.walletRestoreSignal.send(.failedToParseRestoreFile)
                }
            }
            .store(in: &restorePipeStorage)
    }

    private func nextPipeForOriginRestoreData(
        _ decryptedData: Data,
        restorefile: RestoreFile?,
        wallets: [String?]
    ) -> Pipeline {
        guard let restorefile = restorefile else {
            return .failedToParseRestoreFile
        }

        let walletsInRestoreFile = restorefile.wallets ?? []
        if walletsInRestoreFile.isEmpty {
            return .restoreMessage(
                RestoreBackupMWEMessage.withPayload {
                    .init(backupInfo: String(data: decryptedData, encoding: .utf8))
                },
                restorefile: restorefile
            )
        } else {
            let exsitedWallets = Set(wallets.compactMap { $0 })
            let items = walletsInRestoreFile.map {
                RestoreWalletItem(name: $0.name, address: $0.address, exist: exsitedWallets.contains($0.address))
            }
            return .restoreFile(decryptedData, restorefile, items)
        }
    }

    func setOrCheckPaymentPassword(for decyptedData: Data, restorefile: RestoreFile?) {
        let didSetPaymentPassword: Bool = {
            guard let passwordData = userSettings.walletPasswordData else {
                return false
            }

            return !passwordData.isEmpty
        }()

        guard didSetPaymentPassword else {
            self.sheetPipeline.send(.setupPaymentPassword(decyptedData, restorefile))
            return
        }

        self.sheetPipeline.send(.verifyPaymentPassword(decyptedData, restorefile))
    }

    func sendRestoreMessage(data: Data, restorefile: RestoreFile?) {
        self.walletRestoreSignal.send(
            .restoreMessage(
                RestoreBackupMWEMessage.withPayload {
                    .init(backupInfo: String(data: data, encoding: .utf8))
                },
                restorefile: restorefile
            )
        )
    }
}

extension WalletRestorePipeline {
    enum Pipeline {
        case startRestore(decryptedData: Data)
        case restoreFile(_ decryptedData: Data, _ restoreFile: RestoreFile?, _ items: [RestoreWalletItem])
        case restoreMessage(RestoreBackupMWEMessage, restorefile: RestoreFile?)

        case failedToParseRestoreFile
        case noWalletSecureFoundInRestoreFile
        case restoreSucceed(withWallet: Bool)
    }

    enum SheetPipeline {
        case showWalletsInfo(_ decryptedData: Data, _ restoreFile: RestoreFile?, _ items: [RestoreWalletItem])
        case setupPaymentPassword(_ decryptedData: Data, _ restoreFile: RestoreFile?)
        case verifyPaymentPassword(_ decryptedData: Data, _ restoreFile: RestoreFile?)

        case failedToParseRestoreFile
        case noWalletSecureFoundInRestoreFile
        case restoreSucceed(withWallet: Bool)
    }
}

struct RestoreWalletItem {
    let name: String, address: String, exist: Bool
}

extension RestoreWalletItem {
    var walletName: String {
        exist
        ? "\(name)(\(L10n.Scene.Restore.walletExisted))"
        : name
    }
}
