//
//  MnemonicViewModel.swift
//  Maskbook
//
//  Created by xiaojian sun on 2021/5/20.
//  Copyright © 2021 dimension. All rights reserved.
//

import Combine
import CoreDataStack
import Foundation

final class MnemonicViewModel {
    /// The name used to create new account for the new `MaskStoredKey` specified previously
    var name: String!
    
    var mnemonic = CurrentValueSubject<[String], Never>([])
    
    var errorNotifier = PassthroughSubject<Error, Never>()
    
    func generateNewStoredKey() {
        let result = WalletCoreHelper.generateMnemonic()
        switch result {
        case let .success(mnemonic):
            let words = mnemonic.components(separatedBy: " ")
            let unique = words.unique.filter { !$0.isEmpty }
            if !words.elementsEqual(unique) {
                generateNewStoredKey()
                return
            }
            // make sure mnemonic is unique
            self.mnemonic.send(words)

        case let .failure(error):
            self.errorNotifier.send(error)
        }
    }
}
