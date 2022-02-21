//
//  BalanceTokenService.swift
//  Maskbook
//
//  Created by Hugo L on 2022/2/21.
//  Copyright © 2022 dimension. All rights reserved.
//

import CoreData
import CoreDataStack
import Combine
import Foundation
import SwiftUI

final class BalanceTokenService: NSObject, ObservableObject {
    @InjectedProvider(\.appContext) private var appContext
    @InjectedProvider(\.userDefaultSettings) private var userSetting
    
    var managedObjectContext: NSManagedObjectContext {
        appContext.coreDataStack.persistentContainer.viewContext
    }
    
    var fetchedResultsController: NSFetchedResultsController<Token>?
    @Published var tokenSections: [Section] = []
    
    private var disposeBag = Set<AnyCancellable>()
    private static let collapseAmount = 10.0
    
    override init() {
        super.init()
        
        Publishers.CombineLatest3(
            UserDefaultSettings.shared.defaultAccountAddressPublisher.removeDuplicates().eraseToAnyPublisher(),
            UserDefaultSettings.shared.displayBlockChainPublisher.removeDuplicates().eraseToAnyPublisher(),
            UserDefaultSettings.shared.walletAssetProviderTypePublisher.removeDuplicates().eraseToAnyPublisher()
        )
            .receive(on: RunLoop.main)
            .sink { [weak self] address, blockChain, _ in
                guard let self = self else { return }
                let fetchRequest = Token.sortedFetchRequest
                if let address = maskUserDefaults.defaultAccountAddress {
                    let predicate = Token.getTokenPredicate(
                        address: address,
                        displayBlockchain: blockChain
                    )
                    fetchRequest.predicate = predicate
                }
                fetchRequest.returnsObjectsAsFaults = false
                self.fetchedResultsController = NSFetchedResultsController(
                    fetchRequest: fetchRequest,
                    managedObjectContext: self.managedObjectContext,
                    sectionNameKeyPath: nil,
                    cacheName: nil
                )
                self.fetchedResultsController?.delegate = self
                try? self.fetchedResultsController?.performFetch()
            }
            .store(in: &disposeBag)
    }
    
    private func process(tokens: [Token]) -> [Section] {
        let allMainTokenSymbols = BlockChainNetwork.allCases.compactMap { $0.mainToken?.symbol.lowercased() }
        var expandedTokens = [Token]()
        var collapsedTokens = [Token]()
        for token in tokens {
            if token.displayBalance.doubleValue >= Self.collapseAmount {
                expandedTokens.append(token)
            } else if allMainTokenSymbols.contains(token.symbol?.lowercased() ?? "") {
                // Main tokens do not collapse
                
                expandedTokens.append(token)
            } else {
                collapsedTokens.append(token)
            }
        }
        let expandedItems = expandedTokens.sorted { token1, token2 in
            return token1.displayBalance.compare(token2.displayBalance) == .orderedDescending
        }
        let collapsedTotalAmount = collapsedTokens.reduce(0) { $0 + $1.displayBalance.decimalValue }
        let collapedItems = collapsedTokens.sorted { token1, token2 in
            return token1.displayBalance.compare(token2.displayBalance) == .orderedDescending
        }
        let expandedSection = Section.main(tokens: expandedItems)
        let collapedSection = Section.less(tokens: collapedItems, totalBalance: collapsedTotalAmount)
        return [expandedSection, collapedSection]
    }
}

extension Token {
    static func getTokenPredicate(
        address: String,
        displayBlockchain: WalletDisplayBlockChainType) -> NSPredicate {
            switch displayBlockchain {
            case .all:
                return Token.predicate(
                    address: address,
                    notInTypes: [
                        Maskbook.TokenType.nft.rawValue,
                        Maskbook.TokenType.compound.rawValue
                    ],
                    quantityNotZero: true)
                
            case .blockchain(let blockchain):
                return Token.predicate(
                    address: address,
                    networkId: Int(blockchain.networkId),
                    chainId: blockchain.chain.rawValue,
                    notInTypes: [
                        Maskbook.TokenType.nft.rawValue,
                        Maskbook.TokenType.compound.rawValue
                    ],
                    quantityNotZero: true)
            }
        }
}

extension BalanceTokenService: NSFetchedResultsControllerDelegate {
    func controller(
        _ controller: NSFetchedResultsController<NSFetchRequestResult>,
        didChangeContentWith snapshot: NSDiffableDataSourceSnapshotReference
    ) {
        guard controller == fetchedResultsController else { return }
        guard let tokens = controller.fetchedObjects as? [Token] else {
            assertionFailure("Data source does not fetch Tokens")
            return
        }
        // processing data
        tokenSections = process(tokens: tokens)
    }
}

extension BalanceTokenService {
    enum Section {
        case main(tokens: [Token])
        case less(tokens: [Token], totalBalance: Decimal)
    }
}
