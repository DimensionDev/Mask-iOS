//
//  WalletHistoryViewController.swift
//  Maskbook
//
//  Created by BradGao on 2021/8/17.
//  Copyright © 2021 dimension. All rights reserved.
//

import Combine
import UIKit
import UStack

class WalletHistoryViewController: BaseViewController {
    typealias Section = WalletHistoryViewModel.Section
    typealias Item = WalletHistoryViewModel.SectionItem
    typealias ViewModel = WalletHistoryViewModel
    
    var viewModel: ViewModel
    var disposeBag = Set<AnyCancellable>()
    
    lazy var tableView: UITableView = {
        let view = UITableView()
        view.backgroundColor = Asset.Colors.Background.normal.color
        view.estimatedRowHeight = 79
        view.rowHeight = UITableView.automaticDimension
        view.tableFooterView = UIView()
        view.separatorStyle = .none
        view.register(TransactionCell.self)
        view.register(TransactionHeaderView.self, forHeaderFooterViewReuseIdentifier: String(describing: TransactionHeaderView.self))
        view.translatesAutoresizingMaskIntoConstraints = false
        return view
    }()
    
    lazy var dataSource: UITableViewDiffableDataSource<Section, Item> = {
        UITableViewDiffableDataSource<Section, Item>(tableView: tableView) { [weak self] tableView, indexPath, item in
            switch item {
            case .transaction(let transaction):
                let cell: TransactionCell = tableView.dequeCell(at: indexPath)
                cell.setup(transaction: transaction, displayTokenSymbol: true)
                return cell
            }
        }
    }()
    
    private lazy var emptyView: UIStackView = VStackView(spacing: 11,
                                                         distribution: StackView.Distribution.fill,
                                                         alignment: StackView.Alignment.center) {
        emptyImageView
            .cv.apply {
                NSLayoutConstraint.activate([
                    $0.widthAnchor.constraint(equalToConstant: 64),
                    $0.heightAnchor.constraint(equalToConstant: 64)
                ])
            }
        emptyTipsLabel
    }

    private let emptyImageView: UIImageView = {
        let imageView = UIImageView()
        imageView.image = Asset.Images.Scene.Empty.emptyBox.image
        imageView.contentMode = .scaleAspectFit
        return imageView
    }()

    private let emptyTipsLabel: UILabel = {
        let label = UILabel()
        label.text = L10n.Scene.TransactionHistory.noTransaction
        label.textColor = Asset.Colors.Text.dark.color
        label.font = FontStyles.MH6
        label.numberOfLines = 0
        label.textAlignment = .center
        return label
    }()
    
    // swiftlint:enable force_cast
    
    init() {
        self.viewModel = ViewModel()
        super.init(nibName: nil, bundle: nil)
    }
    
    @available(*, unavailable)
    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
    
    override func viewDidLoad() {
        super.viewDidLoad()
        viewModel.tableView = tableView
        viewModel.dataSource = dataSource
        
        setupNaviItems()
        setupSubviews()
        
        Publishers.CombineLatest(WalletAssetManager.shared.transactions,
                                 PendTransactionManager.shared.pendTransactions)
            .receive(on: DispatchQueue.main)
            .sink { _ in }
        receiveValue: { [weak self] allTransactions, allPendingTransactions in
            
            let pendingTransactions = allPendingTransactions.filter {
                $0.address == maskUserDefaults.defaultAccountAddress &&
                $0.networkId == maskUserDefaults.network.networkId
            }.compactMap {
                return $0.history
            }
            let histories = (pendingTransactions + allTransactions).sorted{ $0.timeAt > $1.timeAt }
            self?.tableView.isHidden = histories.isEmpty
            self?.emptyView.isHidden = !histories.isEmpty
            self?.viewModel.refreshTableView(transactions: histories)
            }
        .store(in: &disposeBag)
    }
    
    private func setupNaviItems() {
        navigationItem.largeTitleDisplayMode = .never
    }
    
    private func setupSubviews() {
        view.addSubview(tableView)
        
        NSLayoutConstraint.activate([
            tableView.topAnchor.constraint(equalTo: view.safeAreaLayoutGuide.topAnchor),
            tableView.bottomAnchor.constraint(equalTo: view.safeAreaLayoutGuide.bottomAnchor),
            tableView.leadingAnchor.constraint(equalTo: view.leadingAnchor),
            tableView.trailingAnchor.constraint(equalTo: view.trailingAnchor)
        ])
        
        tableView.dataSource = dataSource
        tableView.delegate = viewModel
        
        view.addSubview(emptyView)
        emptyView.translatesAutoresizingMaskIntoConstraints = false
        NSLayoutConstraint.activate([
            emptyView.centerXAnchor.constraint(equalTo: view.centerXAnchor),
            emptyView.centerYAnchor.constraint(equalTo: view.centerYAnchor, constant: -20)
        ])
    }
}
