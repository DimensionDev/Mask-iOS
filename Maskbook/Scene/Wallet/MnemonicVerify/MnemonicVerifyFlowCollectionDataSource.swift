//
//  MnemonicVerifyFlowCollectionDataSource.swift
//  Maskbook
//
//  Created by xiaojian sun on 2021/5/21.
//  Copyright © 2021 dimension. All rights reserved.
//

import Foundation
import UIKit

class MnemonicVerifyFlowCollectionDataSource: NSObject {
    var viewModel: WordsVerifyProtocol
    init(viewModel: WordsVerifyProtocol) {
        self.viewModel = viewModel
    }
}

extension MnemonicVerifyFlowCollectionDataSource: UICollectionViewDataSource {
    func numberOfSections(in collectionView: UICollectionView) -> Int {
        1
    }

    func collectionView(_ collectionView: UICollectionView, numberOfItemsInSection section: Int) -> Int {
        viewModel.words.count
    }

    func collectionView(_ collectionView: UICollectionView, cellForItemAt indexPath: IndexPath) -> UICollectionViewCell {
        let cell: MnemonicVerifyFlowCollectionCell = collectionView.dequeCell(at: indexPath)
        if let word = viewModel.selectedWords.value[safeIndex: indexPath.row] {
            cell.configWith(word: word, selected: indexPath.row == viewModel.selectedWords.value.count - 1)
        } else {
            cell.configWith(word: nil, selected: false)
        }
        return cell
    }
}

extension MnemonicVerifyFlowCollectionDataSource: UICollectionViewDelegateFlowLayout {
    func collectionView(_ collectionView: UICollectionView, layout collectionViewLayout: UICollectionViewLayout, minimumLineSpacingForSectionAt section: Int) -> CGFloat {
        // return a non-zero number to validate item position
        0.1
    }

    func collectionView(_ collectionView: UICollectionView, layout collectionViewLayout: UICollectionViewLayout, sizeForItemAt indexPath: IndexPath) -> CGSize {
        MnemonicVerifyViewController.flowItemSize
    }
}

extension MnemonicVerifyFlowCollectionDataSource: UICollectionViewDelegate {
    func collectionView(_ collectionView: UICollectionView, didSelectItemAt indexPath: IndexPath) {
        var selectedWords = viewModel.selectedWords.value
        if !selectedWords.isEmpty {
            selectedWords.removeLast()
        }
        viewModel.selectedWords.value = selectedWords
        if viewModel.mnemonicError.value == true {
            viewModel.mnemonicError.value = false
        }
    }
}
