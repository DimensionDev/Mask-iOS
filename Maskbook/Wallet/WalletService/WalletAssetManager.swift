//
//  WalletAssetManager.swift
//  Maskbook
//
//  Created by BradGao on 2021/3/24.
//  Copyright © 2021 dimension. All rights reserved.
//

import Combine
import CoreData
import CoreDataStack
import Foundation

// swiftlint:disable identifier_name
public class WalletAssetManager {
    private var disposeBag = Set<AnyCancellable>()
    
    public static let shared = WalletAssetManager()
    
    public var transactions: CurrentValueSubject<[TransactionHistory], Never> = CurrentValueSubject([])
    
    var activateProvider: DebankProvider {
        willSet {
            maskUserDefaults.walletAssetProviderType = newValue.type
        }
    }
    
    let openSeaProvider = OpenSeaProvider()
    let nftscanProvider = NFTScanProvider()
    
    @InjectedProvider(\.userDefaultSettings)
    private var settings
    
    init() {
        activateProvider = DebankProvider()
        activateProvider.delegate = self
        
        Publishers.CombineLatest3(
            settings.defaultAccountAddressPublisher.removeDuplicates(),
            settings.networkPubisher.removeDuplicates(),
            settings.currencyPublisher.removeDuplicates())
            .receive(on: DispatchQueue.main)
            .sink { [weak self] defaultAddress, _, _ in
                guard let self = self, defaultAddress != nil else {
                    self?.disconnect()
                    return
                }
                self.transactions.send([])
                // TODO: Handle different network
                self.disconnect()
                self.connect()
            }
            .store(in: &disposeBag)
    }
    
    func connect() {
        if !activateProvider.isConnected {
            activateProvider.connect()
        }
//        if !openSeaProvider.isConnected {
//            openSeaProvider.connect()
//        }
        
        if !nftscanProvider.isConnected{
            nftscanProvider.connect()
        }
        
    }
    
    func disconnect() {
        activateProvider.disconnect()
//        openSeaProvider.disconnect()
        nftscanProvider.disconnect()
    }
    
    func refresh(_ completion: ((Error?) -> Void)?) {
        activateProvider.refresh(completion)
    }
}

extension WalletAssetManager: WalletAssetProviderDelegate {
    public func didConnected(type: WalletAssetProviderType) {
    }
    
    public func didDisconnected(type: WalletAssetProviderType) {
        print("Disconnected!")
    }
    
    public func didReceived(type: WalletAssetProviderType,
                            tokenIDs: [String],
                            action: AssetActionType,
                            newObjectContext: NSManagedObjectContext) {
        AppContext.shared.backgroundContext.performAndWait { [weak self] in
            do {
                guard let address = maskUserDefaults.defaultAccountAddress else { return }
//                var newIdentifiers: [String] = []
//                newObjectContext.performAndWait {
//                    let newTokens = tokenIDs.compactMap {
//                        return try? newObjectContext.existingObject(with: $0) as? Token
//                    }
//                    newIdentifiers = newTokens.compactMap { $0.identifier }
//                }
                
                switch action {
                case .received:
                    // Only update the tokens' quantity which NOT exist in received value to 0.
                    // New and updated tokens would be added/updated by saving the newObjectContext
                    let toUpdateTokensFetchRequest = Token.sortedFetchRequest
                    toUpdateTokensFetchRequest.predicate = Token.predicate(address: address,
                                                                           notInIdentifiers: tokenIDs)
                    let toUpdateTokens = try AppContext.shared.backgroundContext.fetch(toUpdateTokensFetchRequest)
                    toUpdateTokens.forEach {
                        $0.quantity = NSDecimalNumber.zero
                    }

                case .appended, .changed:
                    // New and updated tokens would be added/updated by saving the newObjectContext
                    break

                case .removed:
                    // Update the tokens' quantity which DO exist in received value to 0.
                    let toUpdateTokensFetchRequest = Token.sortedFetchRequest
                    toUpdateTokensFetchRequest.predicate = Token.predicate(address: address, ofIdentifiers: tokenIDs)
                    let toUpdateTokens = try AppContext.shared.backgroundContext.fetch(toUpdateTokensFetchRequest)
                    toUpdateTokens.forEach {
                        $0.quantity = NSDecimalNumber.zero
                    }
                }
                newObjectContext.performAndWait {
                    try? newObjectContext.saveOrRollback()
                }

                try AppContext.shared.backgroundContext.saveOrRollback()
                self?.activateProvider.refreshCompletionBlock?(nil)
            } catch {
                print(error.localizedDescription)
                self?.activateProvider.refreshCompletionBlock?(error)
            }
        }
        activateProvider.refreshCompletionBlock = nil
    }
    
    public func didReceived(type: WalletAssetProviderType, transactions: [TransactionHistory], action: AssetActionType) {
        switch action {
        case .received:
            self.transactions.send(transactions)

        case .appended:
            var newTransactions = self.transactions.value
            newTransactions.insert(contentsOf: transactions, at: 0)
            self.transactions.send(newTransactions)

        case .changed:
            var newTransactions = self.transactions.value
            for transaction in transactions {
                if let index = newTransactions.firstIndex(where: { t in
                    t.id == transaction.id
                }) {
                    newTransactions.replaceSubrange(index..<index + 1, with: [transaction])
                }
            }
            self.transactions.send(newTransactions)

        case .removed:
            var newTransactions = self.transactions.value
            for transaction in transactions {
                if let index = newTransactions.firstIndex(where: { t in
                    t.id == transaction.id
                }) {
                    newTransactions.remove(at: index)
                }
            }
            self.transactions.send(newTransactions)
        }
    }
    
    public func didReceived(type: WalletAssetProviderType, error: Error?) {
        print(error?.localizedDescription ?? "")
        activateProvider.refreshCompletionBlock?(error)
        activateProvider.refreshCompletionBlock = nil
    }
}

extension WalletAssetManager {
    func getToken(name: String, chainId: Int, networkId: Int, context: NSManagedObjectContext) -> Token? {
        do {
            let fetchRequest = Token.sortedFetchRequest
            fetchRequest.predicate = Token.predicate(name: name, networkId: networkId, chainId: chainId)
            fetchRequest.fetchLimit = 1
            let tokens = try context.fetch(fetchRequest)
            return tokens.first
        } catch {
            return nil
        }
    }
    
    func getToken(address: String, name: String, chainId: Int, networkId: Int, context: NSManagedObjectContext) -> Token? {
        do {
            let fetchRequest = Token.sortedFetchRequest
            fetchRequest.predicate = Token.predicate(address: address, name: name, networkId: networkId, chainId: chainId)
            fetchRequest.fetchLimit = 1
            let tokens = try context.fetch(fetchRequest)
            return tokens.first
        } catch {
            return nil
        }
    }
    
    func getToken(tokenIdentifier: String, context: NSManagedObjectContext) -> Token? {
        do {
            let fetchRequest = Token.sortedFetchRequest
            fetchRequest.predicate = Token.predicate(identifier: tokenIdentifier)
            fetchRequest.fetchLimit = 1
            let tokens = try context.fetch(fetchRequest)
            return tokens.first
        } catch {
            return nil
        }
    }

    func getMainToken(network: BlockChainNetwork, chainId: Int, networkId: Int, context: NSManagedObjectContext) -> Token? {
        guard let address = maskUserDefaults.defaultAccountAddress ,
              let symbol = BlockChainNetwork(chain: network.chain, networkId: UInt64(network.networkId)).mainToken?.symbol else {
              return nil
        }
        do {
            let fetchRequest = Token.sortedFetchRequest

            fetchRequest.predicate = Token.predicate(address: address, symbol: symbol, networkId: networkId, chainId: chainId)
            fetchRequest.fetchLimit = 1
            fetchRequest.returnsObjectsAsFaults = false
            let tokens = try context.fetch(fetchRequest)
            return tokens.first
        } catch {
            return nil
        }
    }

    func getDefaultMainToken() -> Token? {
        getMainToken(
            network: maskUserDefaults.network,
            chainId: maskUserDefaults.network.chain.rawValue,
            networkId: Int(maskUserDefaults.network.networkId),
            context: AppContext.shared.coreDataStack.persistentContainer.viewContext
        )
    }
    
    func getTotalPortfolioBalance() -> Float {
        guard let address = WalletCoreService.shared.getCurrentAccount()?.address else {
            return 0
        }
        let fetchPortfoliosRequest = Portfolio.sortedFetchRequest
        let chainIDs = BlockChainNetwork.supportedNetwork.map { Int64($0.chain.rawValue) }
        let networkIDs = BlockChainNetwork.supportedNetwork.map { Int64($0.networkId) }
        fetchPortfoliosRequest.predicate = Portfolio.predicate(chainIDs: chainIDs, networkIDs: networkIDs)
        let portfolios = try? AppContext.shared.coreDataStack.persistentContainer.viewContext.fetch(fetchPortfoliosRequest)
            .filter { $0.account?.address == address }
        let totalAssetsValue = portfolios?.reduce(0) {
            $0 + $1.assetsValue
        }
        return totalAssetsValue ?? 0
    }
}
// swiftlint:enable identifier_name

// MARK: - InjectProvider support
enum WalletAssetManagerInjectValueKey: InjectValueKey {
    static var defaultInjectValue = WalletAssetManager.shared
}

extension InjectValues {
    var walletAssetManager: WalletAssetManager {
        Self[WalletAssetManagerInjectValueKey.self]
    }
}
