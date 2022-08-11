//
//  SearchCollectionNFTViewModel.swift
//  Maskbook
//
//  Created by caiyu on 2022/8/1.
//  Copyright © 2022 dimension. All rights reserved.
//

import Combine
import CoreData
import CoreDataStack
import UIKit

extension SearchCollectionNFTViewModel {
    enum Section: CaseIterable {
        case collectibles
    }

    enum CollectionListModel: Hashable {
        case nft(collectibles: [Collectible])
    }
}

class SearchCollectionNFTViewModel: NSObject {
    private var disposeBag = Set<AnyCancellable>()

    private let nftFetchedResultsController: NSFetchedResultsController<Collectible>
    private weak var dataSource: UITableViewDiffableDataSource<Section, CollectionListModel>?

    init(
        managedObjectContext: NSManagedObjectContext,
        dataSource: UITableViewDiffableDataSource<Section, CollectionListModel>
    ) {
        self.dataSource = dataSource

        nftFetchedResultsController = {
            let fetchRequest = Collectible.sortedFetchRequest
            if let address = maskUserDefaults.defaultAccountAddress {
                let predicate = Collectible.predicate(address: address, networkId: maskUserDefaults.network.networkId, enabled: true)
                fetchRequest.predicate = predicate
            }
            fetchRequest.returnsObjectsAsFaults = false
            let controller = NSFetchedResultsController(
                fetchRequest: fetchRequest,
                managedObjectContext: managedObjectContext,
                sectionNameKeyPath: nil,
                cacheName: nil
            )

            return controller
        }()

        super.init()
        nftFetchedResultsController.delegate = self

        try? nftFetchedResultsController.performFetch()

        Publishers.CombineLatest4(
            UserDefaultSettings.shared.currencyPublisher.removeDuplicates().eraseToAnyPublisher(),
            UserDefaultSettings.shared.defaultAccountAddressPublisher.removeDuplicates().eraseToAnyPublisher(),
            UserDefaultSettings.shared.networkPubisher.removeDuplicates().eraseToAnyPublisher(),
            UserDefaultSettings.shared.walletAssetProviderTypePublisher.removeDuplicates().eraseToAnyPublisher()
        )
        .receive(on: RunLoop.main)
        .sink { [weak self] _, address, _, _ in
            guard let self = self else {
                return
            }
            guard let address = address else {
                return
            }
            let nftPredicate = Collectible.predicate(address: address, networkId: maskUserDefaults.network.networkId, enabled: true)
            self.nftFetchedResultsController.fetchRequest.predicate = nftPredicate

            do {
                try self.nftFetchedResultsController.performFetch()
            } catch {
                assertionFailure(error.localizedDescription)
            }
        }
        .store(in: &disposeBag)
    }

    func searchDataWithKey(key: String) {
        guard let address = maskUserDefaults.defaultAccountAddress else {
            return
        }
        let nftKeyPredicate = NSPredicate(format: "%K CONTAINS %@ || %K CONTAINS %@", #keyPath(Collectible.collectionName), key, #keyPath(Collectible.tokenSymbol), key)
        var nftPredicates = [
            NSPredicate(format: "%K == %@", #keyPath(Collectible.account.address), address),
            NSPredicate(format: "%K == %d", #keyPath(Collectible.chainId), maskUserDefaults.network.chain.rawValue),
            NSPredicate(format: "%K == %d", #keyPath(Collectible.networkId), Int(maskUserDefaults.network.networkId)),
        ]

        if !key.isEmpty {
            nftPredicates.append(nftKeyPredicate)
        }

        nftFetchedResultsController.fetchRequest.predicate = NSCompoundPredicate(andPredicateWithSubpredicates: nftPredicates)
        do {
            try nftFetchedResultsController.performFetch()
        } catch {
            assertionFailure(error.localizedDescription)
        }
    }
}

extension SearchCollectionNFTViewModel: NSFetchedResultsControllerDelegate {
    func controller(_ controller: NSFetchedResultsController<NSFetchRequestResult>, didChangeContentWith _: NSDiffableDataSourceSnapshotReference) {
        guard let dataSource = dataSource else {
            assertionFailure("The data source has not implemented snapshot support while it should")
            return
        }
        var newSnapshot = NSDiffableDataSourceSnapshot<Section, CollectionListModel>()

        guard controller == nftFetchedResultsController else {
            return
        }
        newSnapshot.appendSections([.collectibles])
        if let ensAssets = nftFetchedResultsController.fetchedObjects, !ensAssets.isEmpty {
            let groupedAssets = Dictionary(grouping: ensAssets) { item in
                item.collectionName
            }
            let keys: [String] = groupedAssets.keys
                .compactMap { $0 }
                .sorted { $0 < $1 }

            keys.forEach { key in
                guard let assets = groupedAssets[key] else {
                    return
                }
                guard !assets.isEmpty else {
                    return
                }
                let nfts = [CollectionListModel.nft(collectibles: assets)]
                newSnapshot.appendItems(nfts, toSection: .collectibles)
            }
        }

        dataSource.apply(newSnapshot, animatingDifferences: false)
    }
}
