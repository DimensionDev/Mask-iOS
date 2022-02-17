//
//  IdentityVerifyViewModel.swift
//  Maskbook
//
//  Created by sxiaojian on 2021/8/9.
//  Copyright © 2021 dimension. All rights reserved.
//

import Combine
import Foundation

class IdentityVerifyViewModel: WordsVerifyProtocol {
    var words: [String] = []
    
    var disposeBag = Set<AnyCancellable>()
    
    lazy var randomOrderWords: [String] = {
        words.shuffled()
    }()
    
    var selectedWords = CurrentValueSubject<[String], Never>([String]())
    var mnemonicError = CurrentValueSubject<Bool, Never>(false)
    
    func validateSelectedWords() {
        let isRight = selectedWords.value.elementsEqual(words)
        mnemonicError.value = !isRight
    }
}
