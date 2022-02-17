//
//  WalletListViewController.swift
//  Maskbook
//
//  Created by Hugo L on 2021/5/18.
//  Copyright © 2021 dimension. All rights reserved.
//

import Combine
import Foundation
import OSLog
import PanModal
import UIKit

class WalletListViewController: UIViewController {
    typealias Section = WalletListViewModel.Section
    typealias Item = WalletListViewModel.WalletsItem
    typealias CoinItem = WalletListViewModel.CoinItem
    typealias ViewModel = WalletListViewModel
    
    @InjectedProvider(\.userDefaultSettings)
    private var userSetting
    
    @InjectedProvider(\.walletConnectClient)
    internal var walletConnectClient
    
    lazy var tableView: UITableView = {
        let view = UITableView()
        view.backgroundColor = Asset.Colors.Background.normal.color
        view.estimatedRowHeight = 56
        view.rowHeight = UITableView.automaticDimension
        view.tableFooterView = UIView()
        view.separatorStyle = .none
        view.contentInset = UIEdgeInsets(top: 14, left: 0, bottom: 0, right: 0)
        view.delegate = self
        
        view.register(WalletListWalletTableViewCell.self)
        view.register(WalletListAddTableViewCell.self)
        view.register(WalletListAddWalletConnectCell.self)
        return view
    }()
    
    lazy var coinTableView: UITableView = {
        let view = UITableView(frame: .zero, style: .plain)
        view.backgroundColor = Asset.Colors.Background.selected.color
        view.estimatedRowHeight = 56
        view.rowHeight = UITableView.automaticDimension
        view.tableFooterView = UIView()
        view.separatorStyle = .none
        view.delegate = self
        
        view.register(WalletListCoinTableViewCell.self, forCellReuseIdentifier: WalletListCoinTableViewCell.reuseIdentifier)
        return view
    }()
    
    lazy var rightStackView: UIStackView = {
        let view = UIStackView()
        view.axis = .vertical
        view.spacing = 8
        view.alignment = .fill
        view.distribution = .fill
        view.isLayoutMarginsRelativeArrangement = true
        view.layoutMargins = UIEdgeInsets(top: 14, left: 16, bottom: 0, right: 16)
        
        walletHeader.translatesAutoresizingMaskIntoConstraints = false
        view.addArrangedSubview(walletHeader)
        
        tableView.translatesAutoresizingMaskIntoConstraints = false
        view.addArrangedSubview(tableView)
        return view
    }()
    
    lazy var stackView: UIStackView = {
        let view = UIStackView()
        view.axis = .horizontal
        view.alignment = .fill
        view.distribution = .fill
        view.spacing = 0
        
        coinTableView.translatesAutoresizingMaskIntoConstraints = false
        view.addArrangedSubview(coinTableView)
        
        rightStackView.translatesAutoresizingMaskIntoConstraints = false
        view.addArrangedSubview(rightStackView)
        
        NSLayoutConstraint.activate([
            coinTableView.widthAnchor.constraint(equalToConstant: 64)
        ])

        return view
    }()
    
    lazy var walletHeader: WalletListHeader = {
        let view = WalletListHeader()
        view.update(title: BlockChainNetwork.eth.name)
        return view
    }()
    
    // MARK: - Data

    lazy var dataSource: UITableViewDiffableDataSource<Section, Item> = {
        UITableViewDiffableDataSource<Section, Item>(
            tableView: tableView) { [weak self] tableView, indexPath, item in
                switch item {
                case let .account(data):
                    let cell: WalletListWalletTableViewCell = tableView.dequeCell(at: indexPath)
                    cell.update(data: data)
                    cell.delegate = self
                    return cell

                case .add:
                    let cell: WalletListAddTableViewCell = tableView.dequeCell(at: indexPath)
                    return cell
                
                case .addWalletConnect:
                    let cell: WalletListAddWalletConnectCell = tableView.dequeCell(at: indexPath)
                    cell.titleLabel.text = L10n.Scene.WalletConnect.walletConnect
                    cell.icon.image = Asset.Images.Scene.WalletConnect.walletConnect.image
                    return cell
                }
            }
    }()
    
    lazy var coinDataSource: UITableViewDiffableDataSource<Section, CoinItem> = {
        UITableViewDiffableDataSource<Section, CoinItem>(
            tableView: coinTableView) { tableView, indexPath, item in
                let cell: WalletListCoinTableViewCell = tableView.dequeCell(at: indexPath)
                
                let sel = item.selectedImage
                let unsel = item.unselectedImage
                cell.update(topRounder: item.isFirst,
                            bottomRounder: item.isLast,
                            selectImage: sel,
                            unselectImage: unsel,
                            isSelected: item.isSelected)
                
                return cell
            }
    }()
    
    lazy var viewModel: ViewModel = .init(managedObjectContext: AppContext.shared.coreDataStack.persistentContainer.viewContext)
    
    var disposeBag = Set<AnyCancellable>()
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        title = L10n.Scene.WalletList.title
        navigationItem.backButtonTitle = ""
        setupUI()
        bindViewModel()
        bindAction()
    }
    
    // MARK: Actions

    @objc
    func onAddDidClick(sender: UIView) {
        showCreateScene(sender: sender)
    }
}

private extension WalletListViewController {
    // MARK: Private methods

    private func bindViewModel() {
        viewModel.setup()
        
        viewModel.accountListSubject.sink { [weak self] items in
            guard let self = self else { return }
            var snapshot = NSDiffableDataSourceSnapshot<Section, Item>()
            snapshot.appendSections([.main])
            snapshot.appendItems(items)
            self.dataSource.apply(snapshot, animatingDifferences: false)
        }
        .store(in: &disposeBag)
        
        viewModel.coinItemsPublisher?.sink { [weak self] items in
            guard let self = self else { return }
            var snapshot = NSDiffableDataSourceSnapshot<Section, CoinItem>()
            snapshot.appendSections([.main])
            snapshot.appendItems(items)
            self.coinDataSource.apply(snapshot, animatingDifferences: false)
        }
        .store(in: &disposeBag)
        
        viewModel.selectNetworkSubject.sink { [weak self] coin in
            self?.walletHeader.titleLabel.text = coin.name
        }
        .store(in: &disposeBag)
        
        viewModel.accountListSubject.sink { [weak self] list in
            self?.walletHeader.addButton.isHidden = list.isEmpty
        }
        .store(in: &disposeBag)
    }
    
    private func setupUI() {
        view.backgroundColor = Asset.Colors.Background.normal.color
        view.addSubview(stackView)
        
        stackView.translatesAutoresizingMaskIntoConstraints = false
        NSLayoutConstraint.activate([
            stackView.topAnchor.constraint(equalTo: view.safeAreaLayoutGuide.topAnchor),
            stackView.leadingAnchor.constraint(equalTo: view.leadingAnchor),
            stackView.bottomAnchor.constraint(equalTo: view.bottomAnchor),
            stackView.trailingAnchor.constraint(equalTo: view.trailingAnchor)
        ])
    }
    
    func showCreateScene(sender: UIView?) {
        Coordinator.main.present(scene: .walletListAdd, transition: .panModel(animated: true))
    }
    
    func bindAction() {
        walletHeader.addButton.addTarget(self, action: #selector(onAddDidClick), for: .touchUpInside)
    }
}

extension WalletListViewController: PanModalPresentable {
    var panScrollable: UIScrollView? {
        nil
    }
    
    var longFormHeight: PanModalHeight {
        .contentHeight(500)
    }
}

extension WalletListViewController: UITableViewDelegate {
    func tableView(_ tableView: UITableView, didSelectRowAt indexPath: IndexPath) {
        if tableView == coinTableView {
            guard let item = coinDataSource.itemIdentifier(for: indexPath) else { return }
            viewModel.selectNetworkSubject.value = item.chain
        }
        
        if tableView == self.tableView {
            guard let item = dataSource.itemIdentifier(for: indexPath) else { return }
            switch item {
            case .add:
                let cell = tableView.cellForRow(at: indexPath)
                showCreateScene(sender: cell)

            case .addWalletConnect:
                walletConnectClient.currentSelectedBlockchainNetworkSubject.value = viewModel.selectNetworkSubject.value
                Coordinator.main.present(
                    scene: .walletConnectStart,
                    transition: .panModel(animated: true))
                
            case let .account(data):
                WalletCoreService.shared.changeNetwork(network: data.network, account: data.account)
                navigationController?.popViewController(animated: true)
            }
        }
    }
}

#if canImport(SwiftUI) && DEBUG
import SwiftUI
@available(iOS 13.0, *)
struct WalletListViewControllerPreview: PreviewProvider {
    static var previews: some SwiftUI.View {
        let vc = WalletListViewController()
        Group {
            UIViewPreview {
                let view = vc.view ?? UIView()
                view.translatesAutoresizingMaskIntoConstraints = false
                NSLayoutConstraint.activate([
                    view.widthAnchor.constraint(equalToConstant: 375),
                    view.heightAnchor.constraint(equalToConstant: 500)
                ])
                return view
            }
            .previewLayout(.fixed(width: 375, height: 500))
        }
    }
}
#endif
