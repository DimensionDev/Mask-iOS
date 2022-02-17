//
//  WalletRenameViewModel.swift
//  Maskbook
//
//  Created by Hugo L on 2021/6/16.
//  Copyright © 2021 dimension. All rights reserved.
//

import Combine
import CoreDataStack
import Foundation

class WalletRenameViewModel {
    // Input
    // Output
    
    let account: Account
    
    func updateAccount(name: String) -> Result<Account, Error> {
        return WalletCoreService.shared.updateAccount(newName: name, address: account.address ?? "")
    }
    
    init(account: Account) {
        self.account = account
    }
}
