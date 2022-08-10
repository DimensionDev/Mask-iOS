//
//  WalletHistoryViewModel.swift
//  Maskbook
//
//  Created by BradGao on 2021/8/17.
//  Copyright © 2021 dimension. All rights reserved.
//

import Combine
import CoreData
import CoreDataStack
import UIKit

extension WalletHistoryViewModel {
    enum Section: Hashable {
        case transaction(date: Date)
    }
    
    enum SectionItem: Hashable {
        case transaction(transaction: TransactionHistory)
    }
}

class WalletHistoryViewModel: NSObject {
    weak var tableView: UITableView?
    weak var dataSource: UITableViewDiffableDataSource<Section, SectionItem>?
    
    @InjectedProvider(\.walletAssetManager)
    private var walletAssetManager: WalletAssetManager
    
    private var disposeBag = Set<AnyCancellable>()
    
    override init() {
        super.init()

        Publishers.CombineLatest(WalletAssetManager.shared.transactions,
                                 PendingTransactionManager.shared.pendingTransactions)
        .map { allTransactions, allPendingTransactions in
            let pendingTransactions = allPendingTransactions.filter {
                $0.address == maskUserDefaults.defaultAccountAddress &&
                $0.network == maskUserDefaults.network
            }.compactMap {
                return $0.history
            }
            return (pendingTransactions + allTransactions).sorted{ $0.timeAt > $1.timeAt }
        }.receive(on: RunLoop.main)
            .sink { [weak self] transactions in
                self?.refreshTableView(transactions: transactions)
            }
            .store(in: &disposeBag)
        
    }
    
    func refreshTableView(transactions: [TransactionHistory]) {
        guard let dataSource = dataSource else { return }
        var newSnapshot = NSDiffableDataSourceSnapshot<Section, SectionItem>()
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
                
                let items = monthGroup.value.map { SectionItem.transaction(transaction: $0) }.unique
                newSnapshot.appendItems(items, toSection: sectionDate)
            }
        }
        
        dataSource.apply(newSnapshot, animatingDifferences: false, completion: nil)
    }
}

extension WalletHistoryViewModel: UITableViewDelegate {
    func tableView(_ tableView: UITableView, heightForHeaderInSection section: Int) -> CGFloat {
        return 46
    }

    // swiftlint:disable force_cast
    func tableView(_ tableView: UITableView, viewForHeaderInSection section: Int) -> UIView? {
        let header = tableView.dequeueReusableHeaderFooterView(withIdentifier: String(describing: TransactionHeaderView.self)) as! TransactionHeaderView
        if let section = dataSource?.snapshot().sectionIdentifiers[section] {
            switch section {
            case .transaction(let date):
                header.setDate(date)
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
        }
    }
}
