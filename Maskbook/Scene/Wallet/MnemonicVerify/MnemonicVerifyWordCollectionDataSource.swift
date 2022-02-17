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
    var viewModel: WordsVerifyProtocol
    init(viewModel: WordsVerifyProtocol) {
        self.viewModel = viewModel
    }
}

extension MnemonicVerifyWordCollectionDataSource: UICollectionViewDataSource {
    func collectionView(_ collectionView: UICollectionView, numberOfItemsInSection section: Int) -> Int {
        viewModel.randomOrderWords.count
    }

    // swiftlint:disable force_cast
    func collectionView(_ collectionView: UICollectionView, cellForItemAt indexPath: IndexPath) -> UICollectionViewCell {
        let cell = collectionView.dequeueReusableCell(withReuseIdentifier: String(describing: MnemonicVerifyWordCollectionCell.self), for: indexPath) as! MnemonicVerifyWordCollectionCell
        guard let word = viewModel.randomOrderWords[safeIndex: indexPath.row] else {
            return MnemonicVerifyWordCollectionCell()
        }
        let selected = viewModel.selectedWords.value.contains(word)
        cell.configWith(word: word, isSelected: selected)
        return cell
    }
    // swiftlint:enable force_cast
}

extension MnemonicVerifyWordCollectionDataSource: UICollectionViewDelegateFlowLayout {
    func collectionView(_ collectionView: UICollectionView, layout collectionViewLayout: UICollectionViewLayout, minimumInteritemSpacingForSectionAt section: Int) -> CGFloat {
        14
    }

    func collectionView(_ collectionView: UICollectionView, layout collectionViewLayout: UICollectionViewLayout, sizeForItemAt indexPath: IndexPath) -> CGSize {
        CGSize(width: (collectionView.frame.width - 42) / 4, height: 32)
    }
}

extension MnemonicVerifyWordCollectionDataSource: UICollectionViewDelegate {
    func collectionView(_ collectionView: UICollectionView, didSelectItemAt indexPath: IndexPath) {
        guard let word = viewModel.randomOrderWords[safeIndex: indexPath.row] else {
            return
        }
        let isSelected = viewModel.selectedWords.value.contains(word)
        if isSelected {
            return
        }
        var selectedWords = viewModel.selectedWords.value
        selectedWords.append(word)
        viewModel.selectedWords.value = selectedWords
    }
}
