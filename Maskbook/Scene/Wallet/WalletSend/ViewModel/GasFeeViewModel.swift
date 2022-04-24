//
//  GasFeeViewModel.swift
//  Maskbook
//
//  Created by caiyu on 2021/6/22.
//  Copyright © 2021 dimension. All rights reserved.
//

import BigInt
import Combine
import web3swift
import UIKit

// swiftlint:disable line_length
extension GasFeeViewModel {
    enum Section: Hashable {
        case main
    }
    
    enum SectionItem: Hashable {
        case item(_ gasFeeModel: GasFeeCellItem)
    }
}

class GasFeeViewModel: NSObject {
    private var disposeBag = Set<AnyCancellable>()
    let gasFeePublisher = CurrentValueSubject<GasFeeCellItem?, Never>(nil)
    let confirmedGasFeePublisher = CurrentValueSubject<GasFeeCellItem?, Never>(nil)
    let gasLimitPublisher = CurrentValueSubject<BigUInt, Never>(BigUInt(21_000))
    
    weak var collectionView: UICollectionView?
    weak var dataSource: UICollectionViewDiffableDataSource<Section, SectionItem>?
    var indicatorView = MaskLoadingIndicator()
    var localGasFeeModel: GasFeeCellItem?
    
    func refresh(gasFeeModel: GasFeeModel) {
        guard let dataSource = dataSource else { return }
        var newSnapshot = NSDiffableDataSourceSnapshot<Section, SectionItem>()
        newSnapshot.appendSections([.main])
        newSnapshot.appendItems(getCellItem(gasFeeModel)
                                    .map {gasFeeCellItem in
                    return SectionItem.item(gasFeeCellItem)
                                    }, toSection: .main)
        dataSource.apply(newSnapshot, animatingDifferences: false, completion: nil)
    }
    
    func refresh() {
        indicatorView.startAnimation()
        GasFeeApi.getGasFee()
            .receive(on: DispatchQueue.main)
            .sink { [weak self] completion in
                self?.indicatorView.stopAnimation()
                switch completion {
                case .finished: break

                case .failure(let error):
                    print("Error: \(error)")
                }
            } receiveValue: { [weak self] model in
                let cellItem = GasFeeCellItem(gasFeeModel: model, type: .medium)
                self?.localGasFeeModel = cellItem
                self?.gasFeePublisher.value = cellItem
                self?.confirmedGasFeePublisher.accept(cellItem)
                self?.refresh(gasFeeModel: model)
            }
            .store(in: &disposeBag)
    }
}

extension GasFeeViewModel: UICollectionViewDelegate {
    func collectionView(_ collectionView: UICollectionView, didSelectItemAt indexPath: IndexPath) {
        guard let item = dataSource?.itemIdentifier(for: indexPath) else { return }
        switch item {
        case .item(let cellItem):
            self.gasFeePublisher.value = cellItem
            collectionView.reloadData()
        }
    }
}

extension GasFeeViewModel: UICollectionViewDelegateFlowLayout {
    func collectionView(_ collectionView: UICollectionView, layout collectionViewLayout: UICollectionViewLayout, sizeForItemAt indexPath: IndexPath) -> CGSize {
        let isiPad: Bool = (UIDevice.current.userInterfaceIdiom == .pad)
        if isiPad {
            return CGSize(width: 84, height: 64)
        }
        return CGSize(width: (UIScreen.main.bounds.width - 68) / 3, height: 64)
    }
}
// swiftlint:disable line_length
extension GasFeeViewModel {
    func getCellItem(_ model: GasFeeModel) -> [GasFeeCellItem] {
        var arr: [GasFeeCellItem] = []
        arr.append(GasFeeCellItem(gasFeeModel: model, type: .low))
        arr.append(GasFeeCellItem(gasFeeModel: model, type: .medium))
        arr.append(GasFeeCellItem(gasFeeModel: model, type: .high))

        return arr
    }
}
