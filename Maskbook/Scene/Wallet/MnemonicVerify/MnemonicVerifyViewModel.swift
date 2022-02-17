//
//  MnemonicVerifyViewModel.swift
//  Maskbook
//
//  Created by xiaojian sun on 2021/5/21.
//  Copyright © 2021 dimension. All rights reserved.
//

import Combine
import CoreDataStack
import Foundation

// swiftlint:disable identifier_name
class MnemonicVerifyViewModel: WordsVerifyProtocol {
    var disposeBag = Set<AnyCancellable>()
    
    var words: [String] = []
    
    /// The name of created account user specified at `CreateWalletWithNameViewController`
    var name: String?
    
    lazy var randomOrderWords: [String] = {
        words.shuffled()
    }()
    
    let selectedWords = CurrentValueSubject<[String], Never>([String]())
    let mnemonicError = CurrentValueSubject<Bool, Never>(false)
    
    func validateSelectedWords() {
        let isRight = selectedWords.value.elementsEqual(words)
        mnemonicError.value = !isRight
    }
}
// swiftlint:enable identifier_name
