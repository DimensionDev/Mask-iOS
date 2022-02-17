//
//  WalletBackupPrivateKeyViewModel.swift
//  Maskbook
//
//  Created by Hugo L on 2021/6/16.
//  Copyright © 2021 dimension. All rights reserved.
//

import Combine
import Foundation

class WalletBackupPrivateKeyViewModel {
    enum WalletBackupPrivateKeyViewModel: Error {
        case exportFailed
    }
    
    @InjectedProvider(\.vault)
    var vault: Vault
    
    var disposeBag = Set<AnyCancellable>()
    
    // Input
    // Output
    lazy var privateKeyPublisher: AnyPublisher<String, Error> = {
        return Future { [weak self] promise in
            guard let self = self else { return promise(.failure(WalletBackupPrivateKeyViewModel.exportFailed)) }
            guard let account = WalletCoreService.shared.getCurrentAccount() else { return promise(.failure(WalletBackupPrivateKeyViewModel.exportFailed)) }
            
            self.vault.getWalletPassword().sink(receiveCompletion: { _ in }) { [weak self] password in
                let result = WalletCoreService.shared.exportPrivateKey(
                    password: password,
                    account: account
                )
                switch result {
                case .success(let json):
                    return promise(.success(json))

                case .failure(let error):
                    return promise(.failure(error))
                }
            }
            .store(in: &self.disposeBag)
        }
        .eraseToAnyPublisher()
    }()
}
