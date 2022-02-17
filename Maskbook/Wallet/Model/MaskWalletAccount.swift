//
//  MaskWalletAccount.swift
//  Maskbook
//
//  Created by BradGao on 2021/5/26.
//  Copyright © 2021 dimension. All rights reserved.
//

import CoreDataStack

extension Account {
    var displayTitle: String? {
        if let name = name, !name.isEmpty {
            return name
        } else {
            return address
        }
    }
    
    var isDeletable: Bool {
        guard let storeKey = ownedByStoredKey else {
            return true
        }
        if storeKey.type == StoredKeyType.mnemonic.rawValue {
            if let derivationPath = DerivationPath(derivationPath ?? "") {
                return derivationPath.address > 0
            }
        }
        return true
    }
}
