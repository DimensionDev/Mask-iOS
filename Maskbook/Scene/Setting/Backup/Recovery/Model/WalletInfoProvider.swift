import Combine
import CoreDataStack
import Foundation

protocol WalletInfoProvider: AnyObject {
    /// return detailed wallets info under password
    func prepareWallets(password: String) -> AnyPublisher<[WalletBackupInfo], Never>
    /// sync wallets info with password
    func syncWallets(_ walletInfo: [WalletBackupInfo], password: String) -> Result<Void, Error>
    // return nonConnectedWallets
    func getAllNativeWallets() -> AnyPublisher<[Account], Never>
}

extension WalletInfoProvider {
    func nativeWalletsCount() -> AnyPublisher<Int, Never> {
        getAllNativeWallets()
            .map { $0.count }
            .eraseToAnyPublisher()
    }
}

final class DefaultWalletInfoProvider: WalletInfoProvider {
    func prepareWallets(password: String) -> AnyPublisher<[WalletBackupInfo], Never> {
        LazyFuture { promise in
            let records = try? WalletCoreService.shared.prepareWalletRecords(password: password).get()
            promise(.success(records ?? []))
        }
        .eraseToAnyPublisher()
    }
    
    func syncWallets(_ walletInfo: [WalletBackupInfo], password: String) -> Result<Void, Error> {
        return WalletCoreService.shared.restoreFrom(walletRecords: walletInfo,
                                                    password: password)
    }
    
    func getAllNativeWallets() -> AnyPublisher<[Account], Never> {
        LazyFuture { promise in
            let accounts = WalletCoreService.shared.getAllAccounts()
                .filter { !$0.fromWalletConnect }
            promise(.success(accounts))
        }
        .eraseToAnyPublisher()
    }
}

extension WalletInfoProvider where Self == DefaultWalletInfoProvider {
    static var `default`: DefaultWalletInfoProvider { DefaultWalletInfoProvider() }
}

enum WalletInfoProviderKey: InjectValueKey {
    static var defaultInjectValue: WalletInfoProvider = .default
}

extension InjectValues {
    var backupWallets: WalletInfoProvider { Self[WalletInfoProviderKey.self] }
}
