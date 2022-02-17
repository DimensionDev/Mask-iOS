//
//  WalletDeleteViewModel.swift
//  Maskbook
//
//  Created by Hugo L on 2021/6/16.
//  Copyright © 2021 dimension. All rights reserved.
//

import Combine
import CoreDataStack
import Foundation

class WalletDeleteViewModel {
    let isShowBioIDPage = CurrentValueSubject<Bool, Never>(maskUserDefaults.enableBiometryID)
    
    let passwordError = CurrentValueSubject<Bool, Never>(false)
    
    let passwordValidate = CurrentValueSubject<Bool, Never>(maskUserDefaults.enableBiometryID || false)
    
    enum WalletDeleteViewModelError: Error {
        case notFoundAddress
        case notFoundChainType
        case wrongPassword
    }
    
    let account: Account
    
    init(account: Account) {
        self.account = account
    }
    
    func deleteAccount(password: String?) -> Result<StoredKey?, Error> {
        guard let address = account.address else { return .failure(WalletDeleteViewModelError.notFoundAddress) }
        guard let chainType = ChainType(rawValue: Int(account.chainId)) else { return .failure(WalletDeleteViewModelError.notFoundChainType) }
        // itodo: check password if right
        
        return WalletCoreService.shared.deleteAccount(address: address, chainType: chainType)
    }
}
