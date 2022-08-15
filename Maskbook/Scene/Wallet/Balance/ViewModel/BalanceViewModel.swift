//
//  BalanceViewModel.swift
//  Maskbook
//
//  Created by BradGao on 2021/6/8.
//  Copyright © 2021 dimension. All rights reserved.
//

import Combine
import CoreData
import CoreDataStack
import OSLog
import UIKit

extension BalanceViewModel {
    enum Section: Hashable {
        case account
        case tokens
        case collectibles
    }
    
    enum BalanceItem: Hashable {
        case account(account: Account?, portfolio: Portfolio?)
        case token(token: Token)
        case expand(expanded: Bool, collapedBalanceAmount: Decimal)
        case nft(collectibles: [Collectible])
        case emptyToken
        case emptyCollectible
        
        var managedObjectId: NSManagedObjectID? {
            switch self {
            case .token(let token):
                return token.objectID
                
            default:
                return nil
            }
        }
    }
}

class BalanceViewModel: NSObject {
    @InjectedProvider(\.userDefaultSettings)
    private var userSetting
    
    var expandedTokens = false
    var expandedNFT: Set<String> = Set()
    
    var currentTab = CurrentValueSubject<BalanceHeaderView.BalanceHeaderType, Never>(.tokens)
    
    private var disposeBag = Set<AnyCancellable>()
    
    private let fetchedResultsController: NSFetchedResultsController<Token>
    private let nftFetchedResultsController: NSFetchedResultsController<Collectible>
    private weak var dataSource: UITableViewDiffableDataSource<Section, BalanceItem>?
    
    //    private let maxTokenNumberToCollapse = 3
    
    var accountsPublisher: FetchedResultsPublisher<Account> = {
        let fetchResultController: NSFetchedResultsController<Account> = {
            let controller = NSFetchedResultsController(
                fetchRequest: Account.withRequest({ fetchRequest in
                    fetchRequest.fetchBatchSize = 20
                    fetchRequest.returnsObjectsAsFaults = false
                }),
                managedObjectContext: AppContext.shared.coreDataStack.persistentContainer.viewContext,
                sectionNameKeyPath: nil,
                cacheName: nil
            )
            return controller
        }()
        return FetchedResultsPublisher(fetchResultController: fetchResultController)
    }()
    
    init(managedObjectContext: NSManagedObjectContext,
         dataSource: UITableViewDiffableDataSource<Section, BalanceItem>) {
        self.dataSource = dataSource
        let displayBlockchain = UserDefaultSettings.shared.walletDisplayBlockchain
        self.fetchedResultsController = {
            let fetchRequest = Token.sortedFetchRequest
            if let address = maskUserDefaults.defaultAccountAddress {
                let predicate = Self.getTokenPredicate(address: address, displayBlockchain: displayBlockchain)
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
        
        self.nftFetchedResultsController = {
            let fetchRequest = Collectible.sortedFetchRequest
            if let address = maskUserDefaults.defaultAccountAddress {
                let predicate = Self.getCollectiblesPredicate(address: address,
                                                              displayBlockchain: displayBlockchain,
                                                              enabled: true)
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
        try? self.fetchedResultsController.performFetch()
        
        Publishers.CombineLatest4(
            UserDefaultSettings.shared.defaultAccountAddressPublisher.removeDuplicates().eraseToAnyPublisher(),
            UserDefaultSettings.shared.displayBlockChainPublisher.removeDuplicates().eraseToAnyPublisher(),
            UserDefaultSettings.shared.walletAssetProviderTypePublisher.removeDuplicates().eraseToAnyPublisher(),
            currentTab.removeDuplicates().eraseToAnyPublisher()
        )
            .receive(on: RunLoop.main)
            .sink { [weak self] address, displayBlockchain, _, selectedTab in
                guard let self = self else { return }
                guard let address = address else { return }
                self.expandedTokens = false
                
                do {
                    switch selectedTab {
                    case .tokens:
                        let predicate = Self.getTokenPredicate(address: address, displayBlockchain: displayBlockchain)
                        self.fetchedResultsController.fetchRequest.predicate = predicate
                        try self.fetchedResultsController.performFetch()
                        
                    case .collectibles:
                        let nftPredicate = Self.getCollectiblesPredicate(address: address,
                                                                         displayBlockchain: displayBlockchain,
                                                                         enabled: true)
                        self.nftFetchedResultsController.fetchRequest.predicate = nftPredicate
                        try self.nftFetchedResultsController.performFetch()
                    }
                } catch {
                    assertionFailure(error.localizedDescription)
                }
            }
            .store(in: &disposeBag)
        
        UserDefaultSettings.shared.defaultAccountAddressPublisher.removeDuplicates().eraseToAnyPublisher()
            .combineLatest(UserDefaultSettings.shared.networkPubisher.removeDuplicates().eraseToAnyPublisher())
            .receive(on: RunLoop.main)
            .sink { address, network in
                if network == .eth {
                    guard let address = address else { return }
                    WalletCoreService.shared.updateAccountENSName(address: address)
                }
            }
            .store(in: &disposeBag)
    }
    
    private static func getTokenPredicate(
        address: String,
        displayBlockchain: WalletDisplayBlockChainType) -> NSPredicate {
            switch displayBlockchain {
            case .all:
                return Token.predicate(
                    address: address,
                    notInTypes: [
                        TokenType.nft.rawValue,
                        TokenType.compound.rawValue
                    ],
                    quantityNotZero: true)
                
            case .blockchain(let blockchain):
                return Token.predicate(
                    address: address,
                    networkId: Int(blockchain.networkId),
                    chainId: blockchain.chain.rawValue,
                    notInTypes: [
                        TokenType.nft.rawValue,
                        TokenType.compound.rawValue
                    ],
                    quantityNotZero: true)
            }
        }
    
    private static func getCollectiblesPredicate(
        address: String,
        displayBlockchain: WalletDisplayBlockChainType,
        enabled: Bool
    ) -> NSPredicate {
        switch displayBlockchain {
        case .all:
            return Collectible.predicate(address: address, enabled: enabled)
            
        case .blockchain(let blockChainNetwork):
            return Collectible.predicate(
                address: address,
                networkId: blockChainNetwork.networkId,
                enabled: true)
        }
    }
}

// MARK: NSFetchedResultsControllerDelegate
extension BalanceViewModel: NSFetchedResultsControllerDelegate {
    func controller(
        _ controller: NSFetchedResultsController<NSFetchRequestResult>,
        didChangeContentWith snapshot: NSDiffableDataSourceSnapshotReference) {
            guard let dataSource = dataSource else {
                assertionFailure("The data source has not implemented snapshot support while it should")
                return
            }
            
            var newSnapshot = NSDiffableDataSourceSnapshot<Section, BalanceItem>()
            newSnapshot.appendSections([.account])
            let account = WalletCoreService.shared.getCurrentAccount()
            switch userSetting.walletDisplayBlockchain {
            case .all:
                newSnapshot.appendItems([.account(account: account, portfolio: nil)], toSection: .account)
                newSnapshot.reloadSections([.account])
                
            case .blockchain(let blockchain):
                let portfolio = account?
                    .portfolios?.first(where: { portfolio in
                        (portfolio as AnyObject).chainId == blockchain.chain.rawValue &&
                        (portfolio as AnyObject).networkId == blockchain.networkId
                    }) as? Portfolio
                newSnapshot.appendItems([.account(account: account, portfolio: portfolio)], toSection: .account)
            }
            
            switch currentTab.value {
            case .tokens:
                guard controller == fetchedResultsController else { return }
                guard let tokens = fetchedResultsController.fetchedObjects else {
                    assertionFailure("Data source does not fetch Tokens")
                    return
                }
                newSnapshot.appendSections([.tokens])
                if !tokens.isEmpty {
                    let items = sortTokens(tokens,
                                           displayBlockchain: userSetting.walletDisplayBlockchain,
                                           expanded: expandedTokens)
                    newSnapshot.appendItems(items, toSection: .tokens)
                } else {
                    newSnapshot.appendItems([.emptyToken], toSection: .tokens)
                }
                
            case .collectibles:
                guard controller == nftFetchedResultsController else { return }
                newSnapshot.appendSections([.collectibles])
                if let ensAssets = nftFetchedResultsController.fetchedObjects, !ensAssets.isEmpty {
                    let groupedAssets = Dictionary(grouping: ensAssets) { item in
                        return item.collectionName
                    }
                    let keys: [String] = groupedAssets.keys
                        .compactMap({ $0 })
                        .sorted { $0 < $1 }
                    
                    keys.forEach { key in
                        guard let assets = groupedAssets[key] else { return }
                        guard !assets.isEmpty else { return }
                        let nfts = [BalanceItem.nft(collectibles: assets)]
                        newSnapshot.appendItems(nfts, toSection: .collectibles)
                    }
                } else {
                    newSnapshot.appendItems([.emptyCollectible], toSection: .collectibles)
                }
            }
            dataSource.apply(newSnapshot, animatingDifferences: false)
        }
}

// MARK: UITableViewDelegate
extension BalanceViewModel: UITableViewDelegate {
    func tableView(_ tableView: UITableView, heightForHeaderInSection section: Int) -> CGFloat {
        guard let sectionIdentifier = dataSource?.snapshot().sectionIdentifiers[section] else {
            return 0
        }
        
        switch sectionIdentifier {
        case .account:
            return 0
            
        case .tokens,
                .collectibles:
            return 50
        }
    }
    
    // swiftlint:disable force_cast
    func tableView(_ tableView: UITableView, viewForHeaderInSection section: Int) -> UIView? {
        guard let sectionIdentifier = dataSource?.snapshot().sectionIdentifiers[section] else {
            return nil
        }
        
        switch sectionIdentifier {
        case .account:
            return nil
            
        case .tokens, .collectibles:
            let header = tableView.dequeueReusableHeaderFooterView(
                withIdentifier: String(describing: BalanceHeaderView.self)) as! BalanceHeaderView
            header.setupType(currentTab.value)
            header.segments.delegate = self
            return header
        }
    }
    // swiftlint:enable force_cast
    
    func tableView(_ tableView: UITableView, didSelectRowAt indexPath: IndexPath) {
        tableView.deselectRow(at: indexPath, animated: true)
        guard let item = dataSource?.itemIdentifier(for: indexPath) else { return }
        switch item {
        case .token(let token):
            var logoUrl: URL?
            if let logoUrlString = token.logoUrl {
                logoUrl = URL(string: logoUrlString)
            }
            let tokenModel = MaskToken(coinId: token.chainId,
                                       chainId: token.networkId,
                                       decimals: Int(token.decimal),
                                       name: token.name ?? "",
                                       symbol: token.symbol ?? "",
                                       logoURI: logoUrl,
                                       address: "")
            guard let tokenBlockChain = BlockChainNetwork(chainId: Int(token.chainId),
                                                          networkId: UInt64(token.networkId)) else {
                return
            }
            if userSetting.network.networkId != token.networkId {
                userSetting.network = tokenBlockChain
            }
            Coordinator.main.present(scene: .tokenDetail(token: tokenModel), transition: .detail(animated: true))
            
        case .expand:
            self.expandedTokens = !self.expandedTokens
            try? self.fetchedResultsController.performFetch()
            
        case .nft(let collectibles):
            guard let collectionName = collectibles.first?.collectionName else {
                return
            }
            if expandedNFT.contains(collectionName) {
                expandedNFT.remove(collectionName)
            } else {
                expandedNFT.insert(collectionName)
            }
            guard var snp = self.dataSource?.snapshot() else { return }
            snp.reloadItems([item])
            self.dataSource?.apply(snp, animatingDifferences: true, completion: nil)
            
        default:
            return
        }
    }
}

extension BalanceViewModel: BalanceSegmentViewDelegate {
    func didSelectedIndex(at index: Int) {
        switch index {
        case 0:
            currentTab.send(.tokens)
            
        case 1:
            currentTab.send(.collectibles)
            
        default:
            break
        }
    }
}
