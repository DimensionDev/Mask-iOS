//
//  WalletDetailViewController.swift
//  Maskbook
//
//  Created by Hugo L on 2021/5/18.
//  Copyright © 2021 dimension. All rights reserved.
//

import Combine
import CoreDataStack
import Foundation
import MaskWalletCore
import PanModal
import UIKit

class WalletDetailViewController: UIViewController {
    typealias Section = WalletDetailViewModel.Section
    typealias Item = WalletDetailViewModel.WalletsItem
    typealias ViewModel = WalletDetailViewModel
    
    @InjectedProvider(\.walletConnectClient)
    var walletConnectClient
    
    lazy var navigationBar: UINavigationBar = {
        let view = UINavigationBar()
        view.titleTextAttributes = [.font: FontStyles.BH4,
                                    .foregroundColor: Asset.Colors.Text.dark.color]
        view.tintColor = Asset.Colors.Public.blue.color
        view.setBackgroundImage(UIImage(), for: .default)
        view.shadowImage = UIImage()
        return view
    }()
    
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
        return UITableViewDiffableDataSource<Section, Item>(
            tableView: tableView) { tableView, indexPath, item in
            let cell: WalletDetailTableViewCell = tableView.dequeCell(at: indexPath)
            
            switch item {
            case let .chain(blockchain, subtitle):
                cell.subtitleLabel.text = subtitle
                cell.titleLabel.text = blockchain.name
                cell.iconView.image = blockchain.selectedIcon
                
            case let .rename(title, subtitle):
                cell.titleLabel.text = title
                cell.subtitleLabel.text = subtitle
                cell.iconView.image = Asset.Images.Scene.WalletDetail.iconWalletRename.image
            
            case .history(let title):
                cell.titleLabel.text = title
                cell.subtitleLabel.text = nil
                cell.iconView.image = Asset.Images.Scene.WalletDetail.iconWalletHistory.image

            case .backup(let title):
                cell.titleLabel.text = title
                cell.iconView.image = Asset.Images.Scene.WalletDetail.iconWalletBackup.image

            case .delete(let title):
                cell.titleLabel.text = title
                cell.iconView.image = Asset.Images.Scene.WalletEdit.iconDelete.image
                cell.isDestructive = true

            case .disconnect(title: let title):
                cell.isDestructive = true
                cell.titleLabel.text = title
                cell.iconView.image = Asset.Images.Scene.WalletEdit.disconnect.image
            }
            return cell
        }
    }()
    
    let viewModel: ViewModel
    var disposeBag = Set<AnyCancellable>()
    var sourceView: UIView?
    
    init(account: Account, sourceView: UIView?) {
        self.viewModel = ViewModel(account: account)
        self.sourceView = sourceView
        super.init(nibName: nil, bundle: nil)
        
        self.title = account.displayTitle
    }
    
    @available(*, unavailable)
    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        setupNavigationBar()
        setupUI()
        bindViewModel()
    }
    
    // MARK: Actions
    @objc
    func onDoneDidClick() {
        self.dismiss(animated: true, completion: nil)
    }
    
    // MARK: Private methods
    private func bindViewModel() {
        viewModel.menuItemsPublisher.sink { [weak self] items in
            guard let self = self else { return }
            var snapshot = NSDiffableDataSourceSnapshot<Section, Item>()
            snapshot.appendSections([.main])
            snapshot.appendItems(items)
            self.dataSource.apply(snapshot)
        }
        .store(in: &disposeBag)
    }
    
    private func setupNavigationBar() {
        let navigationItem = UINavigationItem(title: self.title ?? "")
        navigationBar.items = [navigationItem]
    }
    
    private func setupUI() {
        view.backgroundColor = Asset.Colors.Background.normal.color
        view.addSubview(navigationBar)
        view.addSubview(tableView)
        
        navigationBar.translatesAutoresizingMaskIntoConstraints = false
        NSLayoutConstraint.activate([
            navigationBar.topAnchor.constraint(equalTo: view.topAnchor, constant: 27),
            navigationBar.leadingAnchor.constraint(equalTo: view.leadingAnchor),
            navigationBar.trailingAnchor.constraint(equalTo: view.trailingAnchor)
        ])
        
        tableView.translatesAutoresizingMaskIntoConstraints = false
        NSLayoutConstraint.activate([
            tableView.topAnchor.constraint(equalTo: navigationBar.bottomAnchor),
            tableView.leadingAnchor.constraint(equalTo: view.leadingAnchor),
            tableView.bottomAnchor.constraint(equalTo: view.bottomAnchor),
            tableView.trailingAnchor.constraint(equalTo: view.trailingAnchor)
        ])
    }
}

extension WalletDetailViewController: PanModalPresentable {
    var panScrollable: UIScrollView? {
        return nil
    }
    
    var longFormHeight: PanModalHeight {
        let heightOfItem = 56 * CGFloat(self.dataSource.tableView(self.tableView, numberOfRowsInSection: 0))
        return .contentHeight(CGFloat(150 + heightOfItem))
    }
}

extension WalletDetailViewController: UITableViewDelegate {
    func tableView(_ tableView: UITableView, didSelectRowAt indexPath: IndexPath) {
        guard let item = dataSource.itemIdentifier(for: indexPath) else { return }
        
        self.dismiss(animated: true) {
            switch item {
            case .chain:
                Coordinator.main.present(
                    scene: .selectNetwork,
                    transition: .panModel(animated: true))
                
            case .rename:
                Coordinator.main.present(
                    scene: .walletRename(account: self.viewModel.account),
                    transition: .panModel(animated: true))
                
            case .history:
                Coordinator.main.present(scene: .walletHistory, transition: .detail(animated: true))

            case .delete:
                Coordinator.main.present(
                    scene: .walletDelete(account: self.viewModel.account),
                    transition: .alertController(completion: nil))

            case .backup:
                Coordinator.main.present(scene: .walletUnlock(cancellable: true, completion: { error in
                    if error == nil {
                        Coordinator.main.present(
                            scene: .walletBackup(account: self.viewModel.account),
                            transition: .detail(animated: true))
                    }
                }), transition: .modal(animated: true, adaptiveDelegate: nil))

            case .disconnect:
                if let session = self.viewModel.account.session {
                    self.walletConnectClient.disconnect(session: session)
                }
            }
        }
    }
}

#if canImport(SwiftUI) && DEBUG
import SwiftUI
@available(iOS 13.0, *)
struct WalletDetailViewControllerPreview: PreviewProvider {
    static var previews: some SwiftUI.View {
        Group {
            UIViewPreview {
                var a = Api_StoredKeyAccountInfo()
                a.name = "xiaming"
                let account = Account(accountInfo: a, context: AppContext.shared.coreDataStack.persistentContainer.viewContext)
                let vc = WalletDetailViewController(account: account, sourceView: nil)
                
                let view = vc.view!
                return view
            }
            .previewLayout(.fixed(width: 375, height: 364))
        }
    }
}
#endif
