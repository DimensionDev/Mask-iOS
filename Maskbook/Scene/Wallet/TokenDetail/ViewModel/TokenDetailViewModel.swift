//
//  TokenDetailViewModel.swift
//  Maskbook
//
//  Created by BradGao on 2021/6/15.
//  Copyright © 2021 dimension. All rights reserved.
//

import Combine
import CoreData
import CoreDataStack
import UIKit

extension TokenDetailViewModel {
    enum Section: Hashable {
        case token
        case transaction(date: Date)
    }
    
    enum SectionItem: Hashable {
        case token
        case transaction(transaction: TransactionHistory)
    }
}

class TokenDetailViewModel: NSObject {
    var token: MaskToken
    
    weak var tableView: UITableView?
    weak var dataSource: UITableViewDiffableDataSource<Section, SectionItem>?
    
    private var disposeBag = Set<AnyCancellable>()
    
    init(token: MaskToken) {
        self.token = token
        super.init()
        
        WalletAssetManager.shared.transactions
            .map { [weak self] allTransactions in
                guard let `self` = self else { return [] }
                let displayTransactions = allTransactions.filter { transaction in
                    if let change = transaction.change, change.asset.symbol.caseInsensitiveCompare(self.token.symbol) == .orderedSame {
                        return true
                    } else {
                        return token.isMainToken
                    }
                }
                return displayTransactions
            }
            .receive(on: RunLoop.main)
            .sink { [weak self] transactions in
                self?.refreshTableView(transactions: transactions)
            }
            .store(in: &disposeBag)
        
        refreshTableView(transactions: WalletAssetManager.shared.transactions.value)
    }
    
    func refreshTableView(transactions: [TransactionHistory]) {
        guard let dataSource = dataSource else { return }
        var newSnapshot = NSDiffableDataSourceSnapshot<Section, SectionItem>()
        newSnapshot.appendSections([.token])
        newSnapshot.appendItems([.token], toSection: .token)
        
        if !transactions.isEmpty {
            let dateTransactions: [Date: [TransactionHistory]] = [:]
            
            // 1. Group transactions by month, transactions mined at today or yesterday are grouped separetely
            let monthGrouped = transactions.reduce(into: dateTransactions) { acc, cur in
                var date: Date
                if cur.minedDate.isInToday {
                    let components = Calendar.current.dateComponents([.year, .month, .day], from: Date())
                    date = Calendar.current.date(from: components)!
                } else if cur.minedDate.isInYesterday {
                    let components = Calendar.current.dateComponents([.year, .month, .day], from: Date().advanced(by: -1))
                    date = Calendar.current.date(from: components)!
                } else {
                    let components = Calendar.current.dateComponents([.year, .month], from: cur.minedDate)
                    date = Calendar.current.date(from: components)!
                }
                
                let existing = acc[date] ?? []
                acc[date] = existing + [cur]
            }
            
            let sortedMonthGrouped = monthGrouped.sorted { $0.0 > $1.0 }
            
            // 2. Check if transactions mined at recent 1 month exists
            for monthGroup in sortedMonthGrouped {
                let sectionDate = Section.transaction(date: monthGroup.key)
                newSnapshot.appendSections([sectionDate])
                
                // The data returned by `debank API` may have duplicates.
                let items = monthGroup.value.map { SectionItem.transaction(transaction: $0) }.unique
                newSnapshot.appendItems(items, toSection: sectionDate)
            }
        }
        
        dataSource.apply(newSnapshot, animatingDifferences: false, completion: nil)
    }
}

extension TokenDetailViewModel: UITableViewDelegate {
    func tableView(_ tableView: UITableView, heightForHeaderInSection section: Int) -> CGFloat {
        if section == 0 {
            return 0
        }
        return 46
    }

    // swiftlint:disable force_cast
    func tableView(_ tableView: UITableView, viewForHeaderInSection section: Int) -> UIView? {
        let header = tableView.dequeueReusableHeaderFooterView(withIdentifier: String(describing: TransactionHeaderView.self)) as! TransactionHeaderView
        if let section = dataSource?.snapshot().sectionIdentifiers[section] {
            switch section {
            case .transaction(let date):
                header.setDate(date)

            default:
                break
            }
        }
        
        return header
    }
    // swiftlint:enable force_cast

    func tableView(_ tableView: UITableView, didSelectRowAt indexPath: IndexPath) {
        tableView.deselectRow(at: indexPath, animated: true)
        guard let item = dataSource?.itemIdentifier(for: indexPath) else { return }
        switch item {
        case .transaction(let transaction):
            guard let url = maskUserDefaults.network.getScanUrl(hash: transaction.id) else {
                return
            }
            Coordinator.main.present(scene: .safariView(url: url), transition: .modal(animated: true))

        default:
            return
        }
    }
}
