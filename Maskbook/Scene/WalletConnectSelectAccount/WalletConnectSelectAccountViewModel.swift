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

class WalletConnectSelectAccountViewModel {
    typealias NetworkItem = WalletListViewModel.CoinItem
    typealias WalletsItem = WalletListViewModel.WalletsItem
    typealias WalletWrapType = WalletListViewModel.WalletWrapType

    var showWalletConnect: Bool
    
    @InjectedProvider(\.userDefaultSettings)
    private var userSetting

    @InjectedProvider(\.walletAssetManager)
    private var walletAssetManager: WalletAssetManager

    let accountListSubject = CurrentValueSubject<[WalletsItem], Never>([])

    private lazy var accountsPublisher: FetchedResultsPublisher<Account> = {
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
            let networkItem = NetworkItem(chain: network, isSelected: false, isFirst: false, isLast: false)
            return networkItem
        }
    }

    var getAllBalanceCancellable: AnyCancellable?
    var disposeBag = Set<AnyCancellable>()

    init() {
        showWalletConnect = false
        Publishers.CombineLatest(
            selectNetworkSubject.dropFirst().eraseToAnyPublisher(),
            UserDefaultSettings.shared.defaultAccountAddressPublisher.eraseToAnyPublisher()
        )
        .receive(on: RunLoop.main)
        .sink { [weak self] _, _ in
            guard let self = self else { return }
            self.getAllBalance()
            self.generateMenuItems(accounts: self.accountsPublisher.value)
        }
        .store(in: &disposeBag)

        accountsPublisher
            .sink { [weak self] in
                self?.generateMenuItems(accounts: $0)
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

extension WalletConnectSelectAccountViewModel {
    private func generateMenuItems(accounts: [Account]) {
        let network = selectNetworkSubject.value
        let defaultAccountAddress = userSetting.defaultAccountAddress
        let showWalletConnect = showWalletConnect
        let items = accounts
            .filter { account in
                guard let chain = ChainType(rawValue: Int(account.chainId)) else { return false }
                if account.fromWalletConnect {
                    if !showWalletConnect {
                        return false
                    }
                    guard let netwrokIDFromSession = account.netwrokIDFromSession else { return false }
                    if netwrokIDFromSession != network.networkId { return false }
                }
                return chain == network.chain
            }
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
        accountListSubject.value = items
    }
}
