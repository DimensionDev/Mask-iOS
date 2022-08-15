//
//  NFTDetailViewModel.swift
//  Maskbook
//
//  Created by caiyu on 2021/8/20.
//  Copyright © 2021 dimension. All rights reserved.
//

import Combine
import CoreData
import CoreDataStack
import UIKit

extension NFTDetailViewModel {
    enum Section: Hashable {
        case token
        case nftDetail
        case transaction(date: Date)
    }
    
    enum SectionItem: Hashable {
        case token
        case nftDetail(collection: NFTScanCollectionModel)
        case transaction(transaction: NFTTransactionHistory)
    }
}

class NFTDetailViewModel: NSObject {
    var token: Collectible
    
    weak var tableView: UITableView?
    weak var dataSource: UITableViewDiffableDataSource<Section, SectionItem>?
    
    private var disposeBag = Set<AnyCancellable>()
    
    @InjectedProvider(\.walletAssetManager)
    private var walletAssetManager
    
    init(token: Collectible) {
        self.token = token
        super.init()
        
        walletAssetManager.openSeaProvider.retrieveAssetsEvents(assetModel: token)
            .receive(on: DispatchQueue.main)
            .sink {  completion in
                switch completion {
                case .finished: break

                case .failure(let error):
                    print("Error: \(error)")
                }
            } receiveValue: {[weak self] transaction in
                let transactionHistory = transaction.filter {
                    return $0.tokenID == token.tokenId
                }.map { eventsModel in
                    return NFTTransactionHistory(eventsModel)
                }
                self?.refreshTableView(transactions: transactionHistory)
            }
            .store(in: &disposeBag)
        
        if let contractAddress = token.address{
            walletAssetManager.nftscanProvider.retrieveCollectionByAddress(contractAddress: contractAddress)?
                .receive(on: DispatchQueue.main)
                .sink {  completion in
                    switch completion {
                    case .finished: break

                    case .failure(let error):
                        print("Error: \(error)")
                    }
                }receiveValue: {[weak self] collectionModel in
                    guard var snp = self?.dataSource?.snapshot() else { return }
                     snp.appendItems([.nftDetail(collection: collectionModel)], toSection: .nftDetail)
                    self?.dataSource?.apply(snp, animatingDifferences: false, completion: nil)
                }
                .store(in: &disposeBag)
        }
        

    }
    
    func setDataSourceSection() {
        guard let dataSource = dataSource else { return }
        var newSnapshot = NSDiffableDataSourceSnapshot<Section, SectionItem>()
        newSnapshot.appendSections([.token])
        newSnapshot.appendItems([.token], toSection: .token)
        newSnapshot.appendSections([.nftDetail])
        dataSource.apply(newSnapshot, animatingDifferences: false, completion: nil)
    }
    
    func refreshTableView(transactions: [NFTTransactionHistory]) {
        guard let dataSource = dataSource else { return }
        guard var snp = self.dataSource?.snapshot() else { return }
        if !transactions.isEmpty {
            let dateTransactions: [Date: [NFTTransactionHistory]] = [:]
            
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
                snp.appendSections([sectionDate])
                snp.appendItems(monthGroup.value.map { SectionItem.transaction(transaction: $0) }, toSection: sectionDate)
            }
        }
                
        dataSource.apply(snp, animatingDifferences: false, completion: nil)
    }
}

extension NFTDetailViewModel: UITableViewDelegate {
    func tableView(_ tableView: UITableView, heightForHeaderInSection section: Int) -> CGFloat {
        if section == 2 {
            return 46
        }
        return 0
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
    
    func tableView(_ tableView: UITableView, didSelectRowAt indexPath: IndexPath) {
        tableView.deselectRow(at: indexPath, animated: true)
        guard let item = dataSource?.itemIdentifier(for: indexPath) else { return }
        switch item {
        case .transaction(let transaction):
            guard let url = maskUserDefaults.network.getScanUrl(hash: transaction.txHash) else {
                return
            }
            Coordinator.main.present(scene: .safariView(url: url), transition: .modal(animated: true))

        default:
            return
        }
    }
}
