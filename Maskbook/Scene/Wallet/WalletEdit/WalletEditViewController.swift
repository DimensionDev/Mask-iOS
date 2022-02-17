//
//  WalletEditViewController.swift
//  Maskbook
//
//  Created by Hugo L on 2021/5/18.
//  Copyright © 2021 dimension. All rights reserved.
//

import Combine
import CoreDataStack
import Foundation
import PanModal
import UIKit

class WalletEditViewController: UIViewController {
    typealias Section = WalletEditViewModel.Section
    typealias Item = WalletEditViewModel.WalletsItem
    typealias ViewModelType = WalletEditViewModel
    
    lazy var tableView: UITableView = {
        let view = UITableView()
        view.backgroundColor = Asset.Colors.Background.normal.color
        view.estimatedRowHeight = 56
        view.rowHeight = UITableView.automaticDimension
        view.tableFooterView = UIView()
        view.separatorStyle = .none
        view.register(WalletDetailTableViewCell.self)
        view.delegate = self
        return view
    }()
    
    lazy var dataSource: UITableViewDiffableDataSource<Section, Item> = {
        UITableViewDiffableDataSource<Section, Item>(
            tableView: tableView) { tableView, indexPath, item in
            let cell: WalletDetailTableViewCell = tableView.dequeCell(at: indexPath)
            
            switch item {
            case .rename(let title, let account):
                cell.titleLabel.text = title
                cell.subtitleLabel.text = account.name
                cell.iconView.image = Asset.Images.Scene.WalletDetail.iconWalletRename.image

            case .delete(let title, let account):
                cell.isDestructive = true
                cell.titleLabel.text = title
                cell.iconView.image = Asset.Images.Scene.WalletEdit.iconDelete.image
            
            case .disconnect(let title, let account):
                cell.isDestructive = true
                cell.titleLabel.text = title
                cell.iconView.image = Asset.Images.Scene.WalletEdit.disconnect.image
            }
            return cell
        }
    }()
    
    let viewModel: ViewModelType
    var disposeBag = Set<AnyCancellable>()
    var sourceView: UIView?
    
    init(account: Account, renameSourceView: UIView?) {
        self.viewModel = ViewModelType(account: account)
        self.sourceView = renameSourceView
        super.init(nibName: nil, bundle: nil)
    }
    
    @available(*, unavailable)
    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        setupUI()
        bindViewModel()
    }
    
    // MARK: Actions

    @objc
    func onDoneDidClick() {
        dismiss(animated: true, completion: nil)
    }
    
    // MARK: Private methods

    private func bindViewModel() {
        viewModel.menuItems.eraseToAnyPublisher().sink { [weak self] items in
            guard let self = self else { return }
            var snapshot = NSDiffableDataSourceSnapshot<Section, Item>()
            snapshot.appendSections([.main])
            snapshot.appendItems(items)
            self.dataSource.apply(snapshot)
        }
        .store(in: &disposeBag)
    }
    
    private func setupUI() {
        view.backgroundColor = Asset.Colors.Background.normal.color
        view.addSubview(tableView)
        
        tableView.translatesAutoresizingMaskIntoConstraints = false
        NSLayoutConstraint.activate([
            tableView.topAnchor.constraint(equalTo: view.topAnchor, constant: 26),
            tableView.leadingAnchor.constraint(equalTo: view.leadingAnchor),
            tableView.bottomAnchor.constraint(equalTo: view.bottomAnchor),
            tableView.trailingAnchor.constraint(equalTo: view.trailingAnchor)
        ])
    }
}

extension WalletEditViewController: PanModalPresentable {
    var panScrollable: UIScrollView? {
        nil
    }
    
    var longFormHeight: PanModalHeight {
        let items = viewModel.menuItems.value
        return .contentHeight(CGFloat(56 + 72 * items.count))
    }
}

extension WalletEditViewController: UITableViewDelegate {
    func tableView(_ tableView: UITableView, didSelectRowAt indexPath: IndexPath) {
        guard let item = dataSource.itemIdentifier(for: indexPath) else { return }
        
        dismiss(animated: true) { [weak self] in
            switch item {
            case .rename:
                guard case Item.rename(_, let account) = item else { break }
                Coordinator.main.present(
                    scene: .walletRename(account: account),
                    transition: .panModel(animated: true)
                )

            case .delete:
                guard case Item.delete(_, let account) = item else { break }
                Coordinator.main.present(scene: .walletDelete(account: account), transition: .alertController(completion: nil))
                
            case .disconnect:
                guard case Item.disconnect(_, let account) = item else { break }
                self?.viewModel.disconnectWalletConnectAccount(account: account)
            }
        }
    }
}
