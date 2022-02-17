//
//  SearchTokenListViewModel.swift
//  Maskbook
//
//  Created by caiyu on 2021/6/25.
//  Copyright © 2021 dimension. All rights reserved.
//

import Combine
import CoreData
import CoreDataStack
import UIKit

extension SearchTokenListViewModel {
    enum Section: CaseIterable {
        case main
    }
    
    enum TokenListModel: Hashable {
        case token(token: Token)
        case nftToken(token: Collectible)
    }
}

class SearchTokenListViewModel: NSObject {
    private var disposeBag = Set<AnyCancellable>()
    
    private var isNFTTokenList: Bool
    private let fetchedResultsController: NSFetchedResultsController<Token>
    private let nftFetchedResultsController: NSFetchedResultsController<Collectible>
    private weak var dataSource: UITableViewDiffableDataSource<Section, TokenListModel>?

    init(managedObjectContext: NSManagedObjectContext,
         dataSource: UITableViewDiffableDataSource<Section, TokenListModel>,
         isNFTTokenList: Bool) {
        self.dataSource = dataSource
        self.isNFTTokenList = isNFTTokenList
        
            self.nftFetchedResultsController = {
                let fetchRequest = Collectible.sortedFetchRequest
                if let address = maskUserDefaults.defaultAccountAddress {
                    let predicate = Collectible.predicate(address: address)
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
            
            self.fetchedResultsController = {
                let fetchRequest = Token.sortedFetchRequest
                let network = maskUserDefaults.network
                if let address = maskUserDefaults.defaultAccountAddress {
                    let predicate = Token.predicate(
                        address: address,
                        networkId: Int(network.networkId),
                        chainId: network.chain.rawValue,
                        notInTypes: [
                            TokenType.nft.rawValue,
                            TokenType.compound.rawValue
                        ],
                        quantityNotZero: true)
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
            fetchedResultsController.delegate = self
            nftFetchedResultsController.delegate = self
            
            if isNFTTokenList {
                try? self.nftFetchedResultsController.performFetch()
            } else {
                try? self.fetchedResultsController.performFetch()
            }
            
            Publishers.CombineLatest4(
                UserDefaultSettings.shared.currencyPublisher.removeDuplicates().eraseToAnyPublisher(),
                UserDefaultSettings.shared.defaultAccountAddressPublisher.removeDuplicates().eraseToAnyPublisher(),
                UserDefaultSettings.shared.networkPubisher.removeDuplicates().eraseToAnyPublisher(),
                UserDefaultSettings.shared.walletAssetProviderTypePublisher.removeDuplicates().eraseToAnyPublisher()
            )
            .receive(on: RunLoop.main)
            .sink { [weak self] _, address, network, _ in
                guard let self = self else { return }
                guard let address = address else { return }
                let nftPredicate = Collectible.predicate(address: address)
                self.nftFetchedResultsController.fetchRequest.predicate = nftPredicate
                let predicate = Token.predicate(
                    address: address,
                    networkId: Int(network.networkId),
                    chainId: network.chain.rawValue,
                    notInTypes: [
                        TokenType.nft.rawValue,
                        TokenType.compound.rawValue
                    ],
                    quantityNotZero: true)
                self.fetchedResultsController.fetchRequest.predicate = predicate
                
                do {
                    if isNFTTokenList {
                        try self.nftFetchedResultsController.performFetch()
                    } else {
                        try self.fetchedResultsController.performFetch()
                    }
                } catch {
                    assertionFailure(error.localizedDescription)
                }
            }
            .store(in: &disposeBag)
    }
    
    func searchDataWithKey(key: String) {
        guard let address = maskUserDefaults.defaultAccountAddress else { return }
        let keyPredicate = NSPredicate(format: "%K CONTAINS %@ || %K CONTAINS %@", #keyPath(Token.name), key, #keyPath(Token.symbol), key)
        var predicates = [
            NSPredicate(format: "%K == %@", #keyPath(Token.account.address), address),
            NSPredicate(format: "%K == %d", #keyPath(Token.chainId), maskUserDefaults.network.chain.rawValue),
            NSPredicate(format: "%K == %d", #keyPath(Token.networkId), Int(maskUserDefaults.network.networkId))]
        if !key.isEmpty {
            predicates.append(keyPredicate)
        }
                
        let nftKeyPredicate = NSPredicate(format: "%K CONTAINS %@ || %K CONTAINS %@", #keyPath(Collectible.name), key, #keyPath(Collectible.tokenSymbol), key)
        var nftPredicates = [
            NSPredicate(format: "%K == %@", #keyPath(Collectible.account.address), address),
            NSPredicate(format: "%K == %d", #keyPath(Collectible.chainId), maskUserDefaults.network.chain.rawValue),
            NSPredicate(format: "%K == %d", #keyPath(Collectible.networkId), Int(maskUserDefaults.network.networkId))]
        
        if !key.isEmpty {
            nftPredicates.append(nftKeyPredicate)
        }
        
         self.fetchedResultsController.fetchRequest.predicate = NSCompoundPredicate(andPredicateWithSubpredicates: predicates)
         self.nftFetchedResultsController.fetchRequest.predicate = NSCompoundPredicate(andPredicateWithSubpredicates: nftPredicates)
        
        if  isNFTTokenList {
            do {
                try self.nftFetchedResultsController.performFetch()
            } catch {
                assertionFailure(error.localizedDescription)
            }
        } else {
            do {
                try self.fetchedResultsController.performFetch()
            } catch {
                assertionFailure(error.localizedDescription)
            }
        }
    }
}

extension SearchTokenListViewModel: NSFetchedResultsControllerDelegate {
    func controller(_ controller: NSFetchedResultsController<NSFetchRequestResult>, didChangeContentWith snapshot: NSDiffableDataSourceSnapshotReference) {
        guard let dataSource = dataSource else {
            assertionFailure("The data source has not implemented snapshot support while it should")
            return
        }
        
        if isNFTTokenList {
            guard let tokens = nftFetchedResultsController.fetchedObjects else {
                assertionFailure("Data source does not fetch Tokens")
                return
            }
            
            var newSnapshot = NSDiffableDataSourceSnapshot<Section, TokenListModel>()
            if !tokens.isEmpty {
                let tokenItems = tokens.map { token in
                    return TokenListModel.nftToken(token: token)
                }
                newSnapshot.appendSections([.main])
                newSnapshot.appendItems(tokenItems, toSection: .main)
            }
            dataSource.apply(newSnapshot, animatingDifferences: false)
        } else {
            guard let tokens = fetchedResultsController.fetchedObjects else {
                assertionFailure("Data source does not fetch Tokens")
                return
            }
            
            var newSnapshot = NSDiffableDataSourceSnapshot<Section, TokenListModel>()
            if !tokens.isEmpty {
                let tokenItems = tokens.sorted(by: { token1, token2 in
                    if token1.symbol?.caseInsensitiveCompare("eth") == .orderedSame {
                        return true
                    }
                    if token2.symbol?.caseInsensitiveCompare("eth") == .orderedSame {
                        return false
                    }
                    return token1.displayBalance.compare(token2.displayBalance) == .orderedDescending
                }).map {
                    return TokenListModel.token(token: $0)
                }
                newSnapshot.appendSections([.main])
                newSnapshot.appendItems(tokenItems, toSection: .main)
            }
            dataSource.apply(newSnapshot, animatingDifferences: false)
        }
    }
}
