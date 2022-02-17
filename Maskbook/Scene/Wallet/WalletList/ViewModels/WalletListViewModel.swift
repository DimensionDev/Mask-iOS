//
//  WalletListViewModel.swift
//  Maskbook
//
//  Created by Hugo L on 2021/5/19.
//  Copyright © 2021 dimension. All rights reserved.
//

import Combine
import CoreData
import CoreDataStack
import Foundation
import UIKit

class WalletListViewModel: NSObject {
    typealias Item = WalletListViewModel.WalletsItem
    
    // MARK: - Input

    // MARK: - Output

    let accountListSubject = CurrentValueSubject<[WalletsItem], Never>([])
    
    @InjectedProvider(\.userDefaultSettings)
    private var userSetting
    
    @InjectedProvider(\.walletConnectClient)
    private var walletConnectClient
    
    var coinItemsPublisher: AnyPublisher<[CoinItem], Never>?
    lazy var selectNetworkSubject: CurrentValueSubject<BlockChainNetwork, Never> = {
        let network = userSetting.network
        let subject = CurrentValueSubject<BlockChainNetwork, Never>(network)
        return subject
    }()
    
    let fetchedResultsController: NSFetchedResultsController<Account>
    var disposeBag = Set<AnyCancellable>()
    var getAllBalanceCancellable: AnyCancellable?
    
    @InjectedProvider(\.walletAssetManager)
    private var walletAssetManager: WalletAssetManager
    
    init(managedObjectContext: NSManagedObjectContext) {
        self.fetchedResultsController = {
            let fetchRequest = Account.sortedFetchRequest
            fetchRequest.sortDescriptors = [NSSortDescriptor(keyPath: \StoredKey.createdAt,
                                                             ascending: false)]
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
        try? fetchedResultsController.performFetch()
        
        Publishers.CombineLatest(
            selectNetworkSubject.dropFirst().eraseToAnyPublisher(),
            UserDefaultSettings.shared.defaultAccountAddressPublisher.eraseToAnyPublisher()
        )
        .receive(on: RunLoop.main)
        .sink { [weak self] _, _ in
            self?.getAllBalance()
            try? self?.fetchedResultsController.performFetch()
        }
        .store(in: &disposeBag)
    }
    
    func setup() {
        coinItemsPublisher = selectNetworkSubject.flatMap { [weak self] _ -> AnyPublisher<[CoinItem], Never> in
            Future { [weak self] promise in
                guard let self = self else { return promise(.success([])) }
                let items = self.generateCoinItems()
                promise(.success(items))
            }
            .eraseToAnyPublisher()
        }
        .eraseToAnyPublisher()
    }
}

// MARK: - Define strut and enum

extension WalletListViewModel {
    enum Section {
        case main
    }
    
    struct CoinItem: Hashable {
        let chain: BlockChainNetwork
        let isSelected: Bool
        let isFirst: Bool
        let isLast: Bool
        
        var selectedImage: UIImage {
            switch chain {
            case .eth:
                return Asset.Images.Scene.WalletList.Coins.ethSelected.image
                
            case .bsc:
                return Asset.Images.Scene.WalletList.Coins.bscSelected.image
                
            case .polygon:
                return Asset.Images.Scene.WalletList.Coins.polygonSelected.image
                
            case .arbitrum:
                return Asset.Images.Scene.WalletList.Coins.arbitrumSelected.image
                
            case .xdai:
                return Asset.Images.Scene.WalletList.Coins.xdaiSelected.image
                
            default:
                return UIImage()
            }
        }
        
        var unselectedImage: UIImage {
            switch chain {
            case .eth:
                return Asset.Images.Scene.WalletList.Coins.ethUnselected.image
                
            case .bsc:
                return Asset.Images.Scene.WalletList.Coins.bscUnselected.image
                
            case .polygon:
                return Asset.Images.Scene.WalletList.Coins.polygonUnselected.image
                
            case .arbitrum:
                return Asset.Images.Scene.WalletList.Coins.arbitrumUnselected.image
                
            case .xdai:
                return Asset.Images.Scene.WalletList.Coins.xdaiUnselected.image
                
            default:
                return UIImage()
            }
        }
    }
    
    // swiftlint:disable enum_case_associated_values_count
    enum WalletsItem: Hashable {
        case account(data: WalletWrapType)

        case add
        case addWalletConnect
    }
    // swiftlint:enable enum_case_associated_values_count
    
    struct WalletWrapType: Hashable {
        let name: String?
        let account: Account
        let network: BlockChainNetwork
        let balance: NSDecimalNumber
        let selected: Bool
        let isImported: Bool
        let isFromWalletConnect: Bool
    }
}

private extension WalletListViewModel {
    private func generateMenuItems(accounts: [Account]) {
        let network = selectNetworkSubject.value
        let defaultAccountAddress = userSetting.defaultAccountAddress
        var items = accounts.sorted(by: { Int($0.fromWalletConnect) < Int($1.fromWalletConnect) })
            .filter { account in
                guard let chain = ChainType(rawValue: Int(account.chainId)) else { return false }
                if account.fromWalletConnect {
                    guard let netwrokIDFromSession = account.netwrokIDFromSession else { return false }
                    if netwrokIDFromSession != network.networkId { return false }
                }
                return chain == network.chain
            }
            .compactMap { item -> WalletsItem? in
                let tokens = item.tokens as? Set<Token>
                let mainToken = tokens?.first { $0.networkId == network.networkId && $0.isMainToken }
                let data = WalletWrapType(
                    name: item.displayTitle,
                    account: item,
                    network: selectNetworkSubject.value,
                    balance: mainToken?.displayQuantity ?? .zero,
                    selected: defaultAccountAddress == item.address,
                    isImported: item.ownedByStoredKey?.isImported ?? false,
                    isFromWalletConnect: item.fromWalletConnect
                )
                return WalletsItem.account(data: data)
            }
        
        // If there is no account, one `WalletListAddTableViewCell` will be displayed.
        if items.isEmpty {
            items.append(WalletsItem.add)
        }
        
        items.append(WalletsItem.addWalletConnect)
        accountListSubject.value = items
    }
    
    private func generateCoinItems() -> [CoinItem] {
        let items: [BlockChainNetwork] = BlockChainNetwork.supportedNetwork
        var coinItems: [CoinItem] = []
        for (index, item) in items.enumerated() {
            let preIndex = index - 1
            let postIndex = index + 1
            let preItem = items[safeIndex: preIndex]
            let postItem = items[safeIndex: postIndex]
            let isSelected = selectNetworkSubject.value == item
            let isFirst = selectNetworkSubject.value == preItem
            let isLast = selectNetworkSubject.value == postItem
            let coinItem = CoinItem(chain: item, isSelected: isSelected, isFirst: isFirst, isLast: isLast)
            coinItems.append(coinItem)
        }
        return coinItems
    }
    
    private func getAllBalance() {
        let accounts = WalletCoreService.shared.getAllAccounts()
        let addresses = accounts.compactMap(\.address)
        getAllBalanceCancellable?.cancel()
        getAllBalanceCancellable = walletAssetManager.activateProvider
            .createBalancePublisher(addresses: addresses)?
            .receive(on: DispatchQueue.main)
            .sink(receiveCompletion: { _ in
            }, receiveValue: { _ in
            })
    }
}

extension WalletListViewModel: NSFetchedResultsControllerDelegate {
    func controller(_ controller: NSFetchedResultsController<NSFetchRequestResult>,
                    didChangeContentWith snapshot: NSDiffableDataSourceSnapshotReference) {
        guard let accounts = controller.fetchedObjects as? [Account] else {
            assertionFailure("Data source does not fetch Tokens")
            return
        }
        generateMenuItems(accounts: accounts)
    }
}

extension Int {
    init(_ boolean: Bool) {
        self = boolean ? 1 : 0
    }
}
