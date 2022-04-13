//
//  BalanceViewController.swift
//  Maskbook
//
//  Created by BradGao on 2021/5/28.
//  Copyright © 2021 dimension. All rights reserved.
//

import Combine
import CoreDataStack
import MaskWalletCore
import UIKit

enum BalanceSubTab: CaseIterable {
    case tokens
    case collectibles
    
    var title: String {
        switch self {
        case .tokens:
            return L10n.Scene.WalletBalance.headerTitleTokens
            
        case .collectibles:
            return L10n.Scene.WalletBalance.headerTitleCollectibles
        }
    }
}

class BalanceViewController: BaseViewController {
    typealias Section = BalanceViewModel.Section
    typealias Item = BalanceViewModel.BalanceItem
    typealias ViewModel = BalanceViewModel
    
    @InjectedProvider(\.userDefaultSettings)
    private var userSetting
    
    @InjectedProvider(\.walletConnectClient)
    private var walletConnectClient
    
    @InjectedProvider(\.walletConnectServer)
    private var walletConnectServer
    
    var disposeBag = Set<AnyCancellable>()
    
    lazy var walletConnectButton: WalletConnectPanelButton = {
        let button = WalletConnectPanelButton()
        button.isHidden = true
        return button
    }()
    
    lazy var tableView: UITableView = {
        let view = ControlContainableTableView()
        view.backgroundColor = Asset.Colors.Background.normal.color
        view.estimatedRowHeight = 79
        view.rowHeight = UITableView.automaticDimension
        view.tableFooterView = UIView()
        view.separatorStyle = .none
        view.register(BalanceTokenCell.self)
        view.register(BalanceExpandCell.self)
        view.register(BalanceAccountCell.self)
        view.register(BalanceCollectiblesCell.self, forCellReuseIdentifier: String(describing: BalanceCollectiblesCell.self))
        view.register(EmptyTokenCell.self, forCellReuseIdentifier: String(describing: EmptyTokenCell.self))
        view.register(BalanceHeaderView.self, forHeaderFooterViewReuseIdentifier: String(describing: BalanceHeaderView.self))
        view.translatesAutoresizingMaskIntoConstraints = false
        return view
    }()

    lazy var dataSource: UITableViewDiffableDataSource<Section, Item> = {
        return UITableViewDiffableDataSource<Section, Item>(tableView: tableView) { [weak self] tableView, indexPath, item in
            guard let self = self else { return UITableViewCell() }
            switch item {
            case let .account(account, portfolio):
                let cell: BalanceAccountCell = tableView.dequeCell(at: indexPath)
                cell.setup(account: account, portfolio: portfolio)
                cell.delegate = self
                return cell

            case .token(let token):
                let cell: BalanceTokenCell = tableView.dequeCell(at: indexPath)
                cell.setup(with: token)
                return cell
                
            case .emptyToken:
                let cell: EmptyTokenCell = tableView.dequeCell(at: indexPath)
                cell.titleLabel.text = L10n.Scene.WalletBalance.emptyToken
                return cell
                
            case .emptyCollectible:
                let cell: EmptyTokenCell = tableView.dequeCell(at: indexPath)
                cell.titleLabel.text = L10n.Scene.WalletBalance.emptyCollectibles
                return cell

            case let .expand(expanded, amount):
                let cell: BalanceExpandCell = tableView.dequeCell(at: indexPath)
                cell.setup(expanded: self.viewModel.expandedTokens,
                           collapedTotalAmount: amount)
                return cell

            case let .nft(assets):
                let cell: BalanceCollectiblesCell = tableView.dequeCell(at: indexPath)
                let isExpanded = self.viewModel.expandedNFT.contains(assets.first?.collectionName ?? "")
                let itemWidth = BalanceCollectiblesCell.calculateItemWidth(collectionViewWidth: tableView.readableContentGuide.layoutFrame.width)
                cell.update(items: assets,
                            expandedENS: isExpanded,
                            itemWidth: itemWidth)
                cell.delegate = self
                return cell
            }
        }
    }()
    
    let nativeWalletButton: UIButton = {
        let button = UIButton(type: .custom)
        button.setImage(Asset.Images.Scene.Balance.nativeWallet.image, for: .normal)
        return button
    }()
    
    let walletConnectScanButton: UIButton = {
        let button = UIButton(type: .custom)
        button.setImage(Asset.Images.Scene.Balance.walletConnectScan.image, for: .normal)
        return button
    }()
    
    lazy var viewModel: ViewModel = BalanceViewModel(
        managedObjectContext: AppContext.shared.coreDataStack.persistentContainer.viewContext,
        dataSource: dataSource)
    
    @InjectedProvider(\.walletAssetManager)
    private var walletAssetManager: WalletAssetManager
    
    override func viewDidLoad() {
        super.viewDidLoad()
        setupNaviItems()
        setupSubviews()
        subscribeSignals()
        walletConnectClient.reconnectIfNeeded()
    }
    
    private func setupNaviItems() {
        navigationItem.largeTitleDisplayMode = .never
    }
    
    private func setScanButton(isShow: Bool) {
        if isShow {
            navigationItem.leftBarButtonItems = [ .fixedSpace(14),
                                                  UIBarButtonItem(customView: walletConnectScanButton)]
        }
        navigationItem.rightBarButtonItems = [.fixedSpace(14),
                                              UIBarButtonItem(customView: nativeWalletButton)]
    }
    
    private func setupSubviews() {
        view.addSubview(tableView)
        let refreshControl = UIRefreshControl()
        refreshControl.addTarget(self, action: #selector(refreshData), for: .valueChanged)
        tableView.refreshControl = refreshControl
        
        NSLayoutConstraint.activate([
            tableView.topAnchor.constraint(equalTo: view.safeAreaLayoutGuide.topAnchor),
            tableView.bottomAnchor.constraint(equalTo: view.safeAreaLayoutGuide.bottomAnchor),
            tableView.leadingAnchor.constraint(equalTo: view.leadingAnchor),
            tableView.trailingAnchor.constraint(equalTo: view.trailingAnchor)
        ])
        
        tableView.dataSource = dataSource
        tableView.delegate = viewModel
        
        view.addSubview(walletConnectButton)
        NSLayoutConstraint.activate([
            walletConnectButton.trailingAnchor.constraint(equalTo: view.trailingAnchor),
            walletConnectButton.bottomAnchor.constraint(equalTo: view.readableContentGuide.bottomAnchor, constant: -42),
            walletConnectButton.heightAnchor.constraint(equalToConstant: WalletConnectPanelButton.height),
            walletConnectButton.widthAnchor.constraint(equalToConstant: WalletConnectPanelButton.height + WalletConnectPanelButton.extraWidth)
        ])
    }
    
    func subscribeSignals() {
        nativeWalletButton
            .cv.tap()
            .sink { [weak self] in
                self?.showWalletListModal()
            }
            .store(in: &disposeBag)
        
        walletConnectScanButton
            .cv.tap()
            .sink { [weak self] in
                self?.scanAction()
            }
            .store(in: &disposeBag)
        
        walletConnectServer.sessionsPublisher
            .receive(on: DispatchQueue.main)
            .sink { [weak self] sessions in
                guard let self = self else { return }
                self.walletConnectButton.setNumber(number: sessions.count)
                self.walletConnectButton.isHidden = sessions.isEmpty
            }
            .store(in: &disposeBag)
        
        walletConnectButton
            .cv.tap()
            .sink { _ in
                Coordinator.main.present(scene: .walletConnectDappList, transition: .panModel(animated: true))
            }
            .store(in: &disposeBag)
        
        viewModel.accountsPublisher
            .sink { [weak self] accounts in
                let hasStoreKey = accounts.contains {
                    $0.ownedByStoredKey != nil
                }
                self?.setScanButton(isShow: hasStoreKey)
            }
            .store(in: &disposeBag)
    }
    
    private func showWalletListModal() {
        Coordinator.main.present(scene: .walletList, transition: .detail(animated: true))
    }
    
    private func scanAction() {
        Coordinator.main.present(scene: .maskScan(type: .common), transition: .modal(animated: true))
    }
}

extension BalanceViewController: BalanceAccountCellDelegate {
    func balanceAccountCell(cell: BalanceAccountCell, button: UIButton) {
        guard let account = WalletCoreService.shared.getCurrentAccount() else { return }
        Coordinator.main.present(
            scene: .walletDetail(account: account, sourceView: button),
            transition: .panModel(animated: true))
    }
}

extension BalanceViewController: BalanceCollectiblesCellDelegate {
    func balanceCollectiblesCellDelegate(nftToken: Collectible) {
        Coordinator.main.present(scene: .nftDetail(nftToken: nftToken), transition: .detail(animated: true))
    }
}

// MARK: Refresh data

extension BalanceViewController {
    @objc
    func refreshData() {
        walletAssetManager.refresh { [weak self] _ in
            DispatchQueue.main.async {
                self?.tableView.refreshControl?.endRefreshing()
            }
        }
    }
}
