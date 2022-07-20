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
    
    private lazy var wordsNeedVerify: [String] = wordsNeedVerifyIndexes.map { index in
        words[index]
    }
    
    private lazy var wordsNeedVerifyIndexes: [Int] = {
        var indexes = [Int]()
        while indexes.count < 3 {
            let random = Int.random(in: 0 ..< words.count)
            if !indexes.contains(random) {
                indexes.append(random)
            }
        }
        return indexes.sorted {
            $0 < $1
        }
    }()
    
    lazy var wordsNeedVerifyShuffle: [String] = {
        var shuffle = wordsNeedVerify.shuffled()
        while shuffle.elementsEqual(wordsNeedVerify) {
            shuffle = wordsNeedVerify.shuffled()
        }
        return shuffle
    }()
    
    let selectedWords = CurrentValueSubject<[String], Never>([String]())
    var selectedWordsPendingDisplay = [String]()
    
    let mnemonicError = CurrentValueSubject<Bool, Never>(false)
    
    init() {
        selectedWords
            .receive(on: DispatchQueue.main)
            .sink { [weak self] words in
                guard let self = self else { return }
                if self.mnemonicError.value, !words.isEmpty {
                    self.mnemonicError.value = false
                }
                self.selectedWordsPendingDisplay = words
            }
            .store(in: &disposeBag)
    }
    
    func validateSelectedWords() {
        let isRight = selectedWords.value.elementsEqual(wordsNeedVerify)
        mnemonicError.value = !isRight
    }
    
    func verifyStateForCurrentWord(word: String) -> MnemonicVerifyWordCellState {
        if !selectedWords.value.contains(word) {
            return .normal
        } else {
            return .verified
        }
    }
}

// swiftlint:enable identifier_name
