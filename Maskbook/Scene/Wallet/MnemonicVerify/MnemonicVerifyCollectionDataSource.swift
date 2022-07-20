//
//  MnemonicVerifyWordCollectionDataSource.swift
//  Maskbook
//
//  Created by xiaojian sun on 2021/5/21.
//  Copyright © 2021 dimension. All rights reserved.
//

import Foundation
import UIKit

class MnemonicVerifyWordCollectionDataSource: NSObject {
    var viewModel: MnemonicVerifyViewModel
    init(viewModel: MnemonicVerifyViewModel) {
        self.viewModel = viewModel
    }
}

extension MnemonicVerifyWordCollectionDataSource: UICollectionViewDataSource {
    func collectionView(_ collectionView: UICollectionView, numberOfItemsInSection section: Int) -> Int {
        viewModel.words.count
    }

    // swiftlint:disable force_cast
    func collectionView(_ collectionView: UICollectionView, cellForItemAt indexPath: IndexPath) -> UICollectionViewCell {
        let cell = collectionView.dequeueReusableCell(withReuseIdentifier: String(describing: MnemonicVerifyWordCollectionCell.self), for: indexPath) as! MnemonicVerifyWordCollectionCell
        var word = viewModel.words[indexPath.row]
        var state = MnemonicVerifyWordCellState.normal
        if viewModel.wordsNeedVerifyShuffle.contains(word) {
            if let newWord = viewModel.selectedWordsPendingDisplay.first {
                viewModel.selectedWordsPendingDisplay.removeFirst()
                word = newWord
                state = .verified
            } else {
                state = .blank
            }
        }
        cell.configWith(word: word, state: state)
        return cell
    }
    // swiftlint:enable force_cast
}

extension MnemonicVerifyWordCollectionDataSource: UICollectionViewDelegateFlowLayout {
    func collectionView(_ collectionView: UICollectionView, layout collectionViewLayout: UICollectionViewLayout, minimumInteritemSpacingForSectionAt section: Int) -> CGFloat {
        10
    }

    func collectionView(_ collectionView: UICollectionView, layout collectionViewLayout: UICollectionViewLayout, sizeForItemAt indexPath: IndexPath) -> CGSize {
        CGSize(width: (collectionView.frame.width - 24) / 3, height: 32)
    }
}

class MnemonicNeedVerifyDataSource: NSObject {
    var viewModel: MnemonicVerifyViewModel
    init(viewModel: MnemonicVerifyViewModel) {
        self.viewModel = viewModel
    }
}

extension MnemonicNeedVerifyDataSource: UICollectionViewDataSource {
    func collectionView(_ collectionView: UICollectionView, numberOfItemsInSection section: Int) -> Int {
        viewModel.wordsNeedVerifyShuffle.count
    }

    // swiftlint:disable force_cast
    func collectionView(_ collectionView: UICollectionView, cellForItemAt indexPath: IndexPath) -> UICollectionViewCell {
        let cell = collectionView.dequeueReusableCell(withReuseIdentifier: String(describing: MnemonicVerifyWordCollectionCell.self), for: indexPath) as! MnemonicVerifyWordCollectionCell
        guard let word = viewModel.wordsNeedVerifyShuffle[safeIndex: indexPath.row] else {
            return MnemonicVerifyWordCollectionCell()
        }
        let state = viewModel.verifyStateForCurrentWord(word: word)
        cell.configWith(word: word, state: state)
        return cell
    }
    // swiftlint:enable force_cast
}

extension MnemonicNeedVerifyDataSource: UICollectionViewDelegateFlowLayout {
    func collectionView(_ collectionView: UICollectionView, layout collectionViewLayout: UICollectionViewLayout, minimumInteritemSpacingForSectionAt section: Int) -> CGFloat {
        0
    }

    func collectionView(_ collectionView: UICollectionView, layout collectionViewLayout: UICollectionViewLayout, sizeForItemAt indexPath: IndexPath) -> CGSize {
        CGSize(width: (collectionView.frame.width - 16) / 3, height: 32)
    }
}

extension MnemonicNeedVerifyDataSource: UICollectionViewDelegate {
    func collectionView(_ collectionView: UICollectionView, didSelectItemAt indexPath: IndexPath) {
        let word = viewModel.wordsNeedVerifyShuffle[indexPath.row]
        if viewModel.selectedWords.value.contains(word) {
            var oldWords = viewModel.selectedWords.value
            oldWords.removeAll {
                $0 == word
            }
            viewModel.selectedWords.value = oldWords
        } else {
            var oldWords = viewModel.selectedWords.value
            oldWords.append(word)
            viewModel.selectedWords.value = oldWords
        }
    }
}
