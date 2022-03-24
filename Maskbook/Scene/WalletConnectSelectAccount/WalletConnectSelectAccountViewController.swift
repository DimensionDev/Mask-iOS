//
//  WalletConnectSelectAccountViewController.swift
//  Maskbook
//
//  Created by sxiaojian on 2021/12/16.
//  Copyright © 2021 dimension. All rights reserved.
//

import Combine
import Foundation
import PanModal
import UIKit

class WalletConnectSelectAccountViewController: BaseViewController {
    typealias ViewModel = WalletConnectSelectAccountViewModel
    typealias Section = WalletListViewModel.Section
    typealias Item = WalletListViewModel.WalletsItem
    
    let viewModel = ViewModel()
    
    @InjectedProvider(\.userDefaultSettings)
    private var userSetting
    
    lazy var collectionView: UICollectionView = {
        let flowLayout = UICollectionViewFlowLayout()
        flowLayout.scrollDirection = .horizontal
        let view = ControlContainableCollectionView(frame: .zero, collectionViewLayout: flowLayout)
        view.backgroundColor = .clear
        view.showsHorizontalScrollIndicator = false
        view.showsVerticalScrollIndicator = false
        view.layer.masksToBounds = false
        view.register(WalletConnectSelectAccountCollectionCell.self)
        view.delegate = self
        view.dataSource = self
        view.translatesAutoresizingMaskIntoConstraints = false
        return view
    }()
    
    lazy var tableView: UITableView = {
        let view = UITableView()
        view.backgroundColor = Asset.Colors.Background.normal.color
        view.estimatedRowHeight = 56
        view.rowHeight = UITableView.automaticDimension
        view.tableFooterView = UIView()
        view.separatorStyle = .none
        view.contentInset = UIEdgeInsets(top: 14, left: 0, bottom: 0, right: 0)
        view.delegate = self
        view.translatesAutoresizingMaskIntoConstraints = false
        view.register(WalletListWalletTableViewCell.self)
        
        return view
    }()
    
    lazy var titleLabel: UILabel = {
        let label = UILabel()
        label.font = FontStyles.BH4
        label.textColor = Asset.Colors.Text.dark.color
        label.text = L10n.Scene.WalletConnectServer.switchWallet
        label.textAlignment = .center
        label.translatesAutoresizingMaskIntoConstraints = false
        return label
    }()
    
    // MARK: - Data

    lazy var dataSource: UITableViewDiffableDataSource<Section, Item> = {
        UITableViewDiffableDataSource<Section, Item>(
            tableView: tableView) { tableView, indexPath, item in
                switch item {
                case let .account(data):
                    let cell: WalletListWalletTableViewCell = tableView.dequeCell(at: indexPath)
                    cell.walletConnectUpdate(data: data)
                    return cell
                
                default:
                    return UITableViewCell()
                }
            }
    }()
    
    var disposeBag = Set<AnyCancellable>()
    
    override func viewDidLoad() {
        super.viewDidLoad()
        setupUI()
        bindViewModel()
    }
    
    private func bindViewModel() {
        viewModel.accountListSubject
            .sink { [weak self] items in
                guard let self = self else { return }
                var snapshot = NSDiffableDataSourceSnapshot<Section, Item>()
                snapshot.appendSections([.main])
                snapshot.appendItems(items)
                self.dataSource.apply(snapshot, animatingDifferences: false)
            }
            .store(in: &disposeBag)
        
        viewModel.selectNetworkSubject
            .receive(on: DispatchQueue.main)
            .sink { [weak self] _ in
                self?.collectionView.reloadData()
            }
            .store(in: &disposeBag)
    }

    private func setupUI() {
        view.backgroundColor = Asset.Colors.Background.normal.color
        
        view.addSubview(titleLabel)
        NSLayoutConstraint.activate([
            titleLabel.centerXAnchor.constraint(equalTo: view.centerXAnchor),
            titleLabel.topAnchor.constraint(equalTo: view.topAnchor, constant: 48)
        ])
        
        view.addSubview(collectionView)
        NSLayoutConstraint.activate([
            collectionView.topAnchor.constraint(equalTo: view.topAnchor, constant: 92),
            collectionView.leadingAnchor.constraint(equalTo: view.leadingAnchor),
            collectionView.trailingAnchor.constraint(equalTo: view.trailingAnchor),
            collectionView.heightAnchor.constraint(equalToConstant: 72)
        ])
        
        view.addSubview(tableView)
        NSLayoutConstraint.activate([
            tableView.topAnchor.constraint(equalTo: collectionView.bottomAnchor),
            tableView.leadingAnchor.constraint(equalTo: view.leadingAnchor, constant: LayoutConstraints.leading),
            tableView.bottomAnchor.constraint(equalTo: view.bottomAnchor),
            tableView.trailingAnchor.constraint(equalTo: view.trailingAnchor, constant: -LayoutConstraints.trailing)
        ])
    }
}

extension WalletConnectSelectAccountViewController: PanModalPresentable {
    var panScrollable: UIScrollView? {
        nil
    }
    
    var longFormHeight: PanModalHeight {
        .contentHeight(500)
    }
}

extension WalletConnectSelectAccountViewController: UITableViewDelegate {
    func tableView(_ tableView: UITableView, didSelectRowAt indexPath: IndexPath) {
        let account = viewModel.accountListSubject.value[indexPath.row]
        if case let .account(data) = account {
            userSetting.defaultAccountAddress = data.account.address
        }
        userSetting.network = viewModel.selectNetworkSubject.value
        dismiss(animated: true, completion: nil)
    }
}

extension WalletConnectSelectAccountViewController: UICollectionViewDataSource {
    func collectionView(_ collectionView: UICollectionView, numberOfItemsInSection section: Int) -> Int {
        viewModel.networkItems.count
    }

    func collectionView(_ collectionView: UICollectionView, cellForItemAt indexPath: IndexPath) -> UICollectionViewCell {
        if let cell = collectionView.dequeueReusableCell(withReuseIdentifier: String(describing: WalletConnectSelectAccountCollectionCell.self),
                                                         for: indexPath) as? WalletConnectSelectAccountCollectionCell {
            let chain = viewModel.networkItems[indexPath.item]
            let isSelected = chain.chain == viewModel.selectNetworkSubject.value
            cell.configWith(chain: chain, isSelected: isSelected)
            return cell
        } else {
            return UICollectionViewCell()
        }
    }
}

extension WalletConnectSelectAccountViewController: UICollectionViewDelegate {
    func collectionView(_ collectionView: UICollectionView, didSelectItemAt indexPath: IndexPath) {
        let chain = viewModel.networkItems[indexPath.item]
        viewModel.selectNetworkSubject.value = chain.chain
    }
}

extension WalletConnectSelectAccountViewController: UICollectionViewDelegateFlowLayout {
    func collectionView(_ collectionView: UICollectionView,
                        layout collectionViewLayout: UICollectionViewLayout,
                        minimumInteritemSpacingForSectionAt section: Int) -> CGFloat {
        0
    }
    
    func collectionView(_ collectionView: UICollectionView,
                        layout collectionViewLayout: UICollectionViewLayout,
                        minimumLineSpacingForSectionAt section: Int) -> CGFloat {
        0
    }

    func collectionView(_ collectionView: UICollectionView,
                        layout collectionViewLayout: UICollectionViewLayout,
                        sizeForItemAt indexPath: IndexPath) -> CGSize {
        CGSize(width: 75, height: 60)
    }
}
