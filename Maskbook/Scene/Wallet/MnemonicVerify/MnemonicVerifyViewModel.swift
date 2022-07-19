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
final class MnemonicVerifyViewModel {
    var disposeBag = Set<AnyCancellable>()
    
    var words: [String] = []
    
    /// The name of created account user specified at `CreateWalletWithNameViewController`
    var name: String?
    
    lazy var wordsNeedVerify: [String] = wordsIndexesNeedVerify.map { index in
        words[index]
    }
    
    lazy var wordsNeedVerifyShuffle = wordsNeedVerify.shuffled()
    
    lazy var wordsIndexesNeedVerify: [Int] = {
        var indexes = [Int]()
        while indexes.count < 3 {
            let random = Int.random(in: 0 ..< words.count)
            if !indexes.contains(random) {
                indexes.append(random)
            }
        }
        return indexes
    }()
    
    let selectedWords = CurrentValueSubject<[String], Never>([String]())
    let mnemonicError = CurrentValueSubject<Bool, Never>(false)
    
    func validateSelectedWords() {
        let isRight = selectedWords.value.elementsEqual(wordsNeedVerify)
        mnemonicError.value = !isRight
    }
    
    func stateForCurrentWord(word: String) -> MnemonicVerifyWordCellState {
        if wordsNeedVerify.contains(word) {
            if selectedWords.value.contains(word) {
                return .verified
            } else {
                return .blank
            }
        } else {
            return .normal
        }
    }
    
    func verifyStateForCurrentWord(word: String) -> MnemonicVerifyWordCellState {
        if selectedWords.value.contains(word) {
            return .normal
        } else {
            return .verified
        }
    }
}

// swiftlint:enable identifier_name
