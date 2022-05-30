//
//  WalletConnectSelectAccountViewModel.swift
//  Maskbook
//
//  Created by sxiaojian on 2021/12/16.
//  Copyright © 2021 dimension. All rights reserved.
//

import Combine
import CoreData
import CoreDataStack
import Foundation
import UIKit

class SelectAccountViewModel {
    enum FunctionType {
        case editEnable
        case selectWithWalletConnect
        case selectWithoutWalletConnect
    }
    
    typealias Item = SelectAccountViewModel.WalletsItem
    typealias NetworkItem = SelectAccountViewModel.CoinItem

    var type: FunctionType
    
    var isEditing = CurrentValueSubject<Bool, Never>(false)
    
    @InjectedProvider(\.userDefaultSettings)
    private var userSetting

    @InjectedProvider(\.walletAssetManager)
    private var walletAssetManager: WalletAssetManager

    let accountListOfSelectedChainSubject = CurrentValueSubject<[WalletsItem], Never>([])
    
    var maxAccountsNum: Int = 0

    private lazy var accountsOfAllChainPublisher: FetchedResultsPublisher<Account> = {
        let fetchResultController: NSFetchedResultsController<Account> = {
            let controller = NSFetchedResultsController(
                fetchRequest: Account.withRequest { fetchRequest in
                    fetchRequest.fetchBatchSize = 20
                    fetchRequest.returnsObjectsAsFaults = false
                },
                managedObjectContext: AppContext.shared.coreDataStack.persistentContainer.viewContext,
                sectionNameKeyPath: nil,
                cacheName: nil
            )
            return controller
        }()
        return FetchedResultsPublisher(fetchResultController: fetchResultController)
    }()

    lazy var selectNetworkSubject: CurrentValueSubject<BlockChainNetwork, Never> = {
        let network = userSetting.network
        let subject = CurrentValueSubject<BlockChainNetwork, Never>(network)
        return subject
    }()

    lazy var networkItems: [NetworkItem] = {
        let networkItems = generateNetworkItems()
        return networkItems
    }()

    private func generateNetworkItems() -> [NetworkItem] {
        let items: [BlockChainNetwork] = BlockChainNetwork.supportedNetwork
        return items.map { network in
            let networkItem = NetworkItem(chain: network, isSelected: false)
            return networkItem
        }
    }

    var getAllBalanceCancellable: AnyCancellable?
    var disposeBag = Set<AnyCancellable>()

    init(type: FunctionType) {
        self.type = type
        Publishers.CombineLatest(
            selectNetworkSubject.eraseToAnyPublisher(),
            userSetting.defaultAccountAddressPublisher
        )
        .receive(on: RunLoop.main)
        .sink { [weak self] _, _ in
            guard let self = self else { return }
            self.getAllBalance()
            self.generateWalletAccountItems(accounts: self.accountsOfAllChainPublisher.value)
        }
        .store(in: &disposeBag)

        accountsOfAllChainPublisher
            .sink { [weak self] in
                guard let self = self else { return }
                self.maxAccountsNum = self.maxWalletAccountNumbers(accounts: $0)
                self.batchUpdateColorForAccount(accounts: $0)
                self.generateWalletAccountItems(accounts: $0)
            }
            .store(in: &disposeBag)
    }

    private func getAllBalance() {
        let accounts = WalletCoreService.shared.getAllAccounts()
        let addresses = accounts.compactMap(\.address)
        getAllBalanceCancellable?.cancel()
        getAllBalanceCancellable = walletAssetManager.activateProvider
            .createBalancePublisher(addresses: addresses)?
            .receive(on: DispatchQueue.main)
            .fireAndIgnore()
    }
}

extension SelectAccountViewModel {
    enum Section {
        case main
    }
    
    struct CoinItem: Hashable {
        let chain: BlockChainNetwork
        let isSelected: Bool
        
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
        
        var backgroundColor: UIColor {
            switch chain {
            case .eth:
                return Asset.Colors.ChainColor.eth.color
            case .bsc:
                return Asset.Colors.ChainColor.bsc.color
            case .polygon:
                return Asset.Colors.ChainColor.matic.color
            case .arbitrum:
                return Asset.Colors.ChainColor.arbitrum.color
            case .xdai:
                return Asset.Colors.ChainColor.gnosis.color
            default:
                return UIColor.white
            }
        }
    }

    // swiftlint:disable enum_case_associated_values_count
    enum WalletsItem: Hashable {
        case account(data: WalletWrapType)

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

extension SelectAccountViewModel {
    private func batchUpdateColorForAccount(accounts: [Account]) {
        let accountsWithoutColor = accounts.filter {
            $0.colorHex == nil
        }
        if accountsWithoutColor.isEmpty {
            return
        }
        AppContext.shared.coreDataStack.persistentContainer.viewContext
            .perform {
                for account in accountsWithoutColor {
                    account.colorHex = UIColor.walletRandomColorHex()
                }
            }
    }
    
    private func generateWalletAccountItems(accounts: [Account]) {
        let network = selectNetworkSubject.value
        let defaultAccountAddress = userSetting.defaultAccountAddress
        var items = accountsFilteredByWalletConnect(accounts: accounts,
                                                    network: network)
            .compactMap { item -> WalletsItem? in
                let tokens = item.tokens as? Set<Token>
                let mainToken = tokens?.first { $0.networkId == network.networkId && $0.isMainToken }
                let isSelected = defaultAccountAddress == item.address && userSetting.network == network
                let data = WalletWrapType(
                    name: item.displayTitle,
                    account: item,
                    network: selectNetworkSubject.value,
                    balance: mainToken?.displayQuantity ?? .zero,
                    selected: isSelected,
                    isImported: item.ownedByStoredKey?.isImported ?? false,
                    isFromWalletConnect: item.fromWalletConnect
                )
                return WalletsItem.account(data: data)
            }
        if isShowAddWalletConnect {
            items.append(WalletsItem.addWalletConnect)
        }
        accountListOfSelectedChainSubject.value = items
    }
    
    private func accountsFilteredByWalletConnect(accounts: [Account],
                                                 network: BlockChainNetwork) -> [Account]
    {
        accounts
            .sorted(by: { ($0.fromWalletConnect ? 1 : 0) < ($1.fromWalletConnect ? 1 : 0) })
            .filter { account in
                guard let chain = ChainType(rawValue: Int(account.chainId)) else { return false }
                if account.fromWalletConnect {
                    if !isShowWalletConnectWallets {
                        return false
                    }
                    guard let netwrokIDFromSession = account.netwrokIDFromSession else { return false }
                    if netwrokIDFromSession != network.networkId { return false }
                }
                return chain == network.chain
            }
    }
    
    func maxWalletAccountNumbers(accounts: [Account]) -> Int {
        networkItems.map {
            accountsFilteredByWalletConnect(accounts: accounts, network: $0.chain).count
            + (isShowAddWalletConnect ? 1 : 0)
        }
        .max()!
    }
    
    private var isShowWalletConnectWallets: Bool {
        switch type {
        case .editEnable:
            return true
        case .selectWithWalletConnect:
            return true
        case .selectWithoutWalletConnect:
            return false
        }
    }
    
    private var isShowAddWalletConnect: Bool {
        switch type {
        case .editEnable:
            return true
        case .selectWithWalletConnect:
            return false
        case .selectWithoutWalletConnect:
            return false
        }
    }
    
    var isShowAddWallet: Bool {
        switch type {
        case .editEnable:
            return true
        case .selectWithWalletConnect:
            return false
        case .selectWithoutWalletConnect:
            return false
        }
    }
    
    var isEditEnable: Bool {
        switch type {
        case .editEnable:
            return true
        case .selectWithWalletConnect:
            return false
        case .selectWithoutWalletConnect:
            return false
        }
    }
}
