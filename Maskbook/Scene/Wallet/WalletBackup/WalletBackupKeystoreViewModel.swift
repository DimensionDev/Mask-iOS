//
//  WalletBackupKeystoreViewModel.swift
//  Maskbook
//
//  Created by Hugo L on 2021/6/16.
//  Copyright © 2021 dimension. All rights reserved.
//

import Combine
import Foundation

class WalletBackupKeystoreViewModel {
    enum WalletBackupKeystoreVMError: Error {
        case exportFailed
    }
    
    @InjectedProvider(\.vault)
    var vault: Vault
    
    var disposeBag = Set<AnyCancellable>()
    
    // Input
    // Output
    lazy var keystorePublisher: AnyPublisher<String, Error> = {
        return Future { [weak self] promise in
            guard let self = self else { return promise(.failure(WalletBackupKeystoreVMError.exportFailed)) }
            guard let account = WalletCoreService.shared.getCurrentAccount() else { return promise(.failure(WalletBackupKeystoreVMError.exportFailed)) }
            
            self.vault.getWalletPassword().sink(receiveCompletion: { _ in }) { password in
                let result = WalletCoreService.shared.exportKeystore(
                    password: password,
                    newPassword: password,
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
