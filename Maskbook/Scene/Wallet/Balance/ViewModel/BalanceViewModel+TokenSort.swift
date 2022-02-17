//
//  BalanceViewModel+TokenSort.swift
//  Maskbook
//
//  Created by BradGao on 2021/12/5.
//  Copyright © 2021 dimension. All rights reserved.
//

import CoreData
import CoreDataStack
import OSLog
import UIKit

extension BalanceViewModel {
    private static let collapseAmount = 10.0
    
    func sortTokens(_ tokens: [Token],
                    displayBlockchain: WalletDisplayBlockChainType,
                    expanded: Bool) -> [BalanceViewModel.BalanceItem] {
        var items = [BalanceViewModel.BalanceItem]()
        let allMainTokenSymbols = BlockChainNetwork.allCases.compactMap { $0.mainToken?.symbol.lowercased() }
        var expandedTokens = [Token]()
        var collapsedTokens = [Token]()
        for token in tokens {
            if token.displayBalance.doubleValue >= Self.collapseAmount {
                expandedTokens.append(token)
            } else {
                // Main tokens do not collapse
                if allMainTokenSymbols.contains(token.symbol?.lowercased() ?? "") {
                    expandedTokens.append(token)
                } else {
                    collapsedTokens.append(token)
                }
            }
        }
        
        let expandedItems = expandedTokens.sorted(by: { token1, token2 in
            return token1.displayBalance.compare(token2.displayBalance) == .orderedDescending
        }).map { BalanceItem.token(token: $0) }
        
        let collapsedTotalAmount = collapsedTokens.reduce(0) { $0 + $1.displayBalance.decimalValue }
        let expandIndicatorItem = BalanceItem.expand(expanded: expanded,
                                                     collapedBalanceAmount: collapsedTotalAmount)
        
        items.append(contentsOf: expandedItems)
        items.append(expandIndicatorItem)
        if expanded {
            let collapedItems = collapsedTokens.sorted(by: { token1, token2 in
                return token1.displayBalance.compare(token2.displayBalance) == .orderedDescending
            }).map { BalanceItem.token(token: $0) }
            items.append(contentsOf: collapedItems)
        }
        return items
    }
}
