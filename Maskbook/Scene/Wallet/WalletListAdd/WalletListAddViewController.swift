//
//  WalletListAddViewController.swift
//  Maskbook
//
//  Created by Hugo L on 2021/5/18.
//  Copyright © 2021 dimension. All rights reserved.
//

import Combine
import Foundation
import PanModal
import UIKit

class WalletListAddViewController: UIViewController {
    typealias Section = WalletListAddViewModel.Section
    typealias Item = WalletListAddViewModel.WalletsItem
    typealias ViewModel = WalletListAddViewModel
    
    lazy var tableView: UITableView = {
        let view = UITableView()
        view.backgroundColor = Asset.Colors.Background.normal.color
        view.estimatedRowHeight = 62
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
            case .createWallet(let title):
                cell.titleLabel.text = title
                cell.iconView.image = Asset.Images.Scene.WalletDetail.iconWalletCreate.image

            case .importWallet(let title):
                cell.titleLabel.text = title
                cell.iconView.image = Asset.Images.Scene.WalletAdd.import.image
            }
            return cell
        }
    }()
    
    let viewModel = ViewModel()
    var disposeBag = Set<AnyCancellable>()
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
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
    
    private func setupUI() {
        view.backgroundColor = Asset.Colors.Background.normal.color
        view.addSubview(tableView)
        
        tableView.translatesAutoresizingMaskIntoConstraints = false
        NSLayoutConstraint.activate([
            tableView.topAnchor.constraint(equalTo: view.topAnchor, constant: 40),
            tableView.leadingAnchor.constraint(equalTo: view.leadingAnchor),
            tableView.bottomAnchor.constraint(equalTo: view.bottomAnchor),
            tableView.trailingAnchor.constraint(equalTo: view.trailingAnchor)
        ])
    }
}

extension WalletListAddViewController: PanModalPresentable {
    var panScrollable: UIScrollView? {
        return nil
    }
    
    var longFormHeight: PanModalHeight {
        return .contentHeight(200)
    }
}

extension WalletListAddViewController: UITableViewDelegate {
    func tableView(_ tableView: UITableView, didSelectRowAt indexPath: IndexPath) {
        guard let item = dataSource.itemIdentifier(for: indexPath) else { return }
        let completion =  {
            switch item {
            case .createWallet:
                Coordinator.main.present(scene: .createWalletWithName(walletStartType: .byCreate(name: nil)), transition: .detail(animated: true))

            case .importWallet:
                Coordinator.main.present(scene: .createWalletWithName(walletStartType: .byImport(name: nil, password: nil)), transition: .detail(animated: true))
            }
        }
        if let presentingVC = self.presentingViewController {
            self.dismiss(animated: false)
            presentingVC.dismiss(animated: true, completion: completion)
        } else {
            self.dismiss(animated: true, completion: completion)
        }
    }
}

#if canImport(SwiftUI) && DEBUG
import SwiftUI
@available(iOS 13.0, *)
struct WalletListAddViewControllerPreview: PreviewProvider {
    static var previews: some SwiftUI.View {
        let vc = WalletListAddViewController()
        Group {
            UIViewPreview {
                let view = vc.view!
                return view
            }
            .previewLayout(.fixed(width: 375, height: 200))
        }
    }
}
#endif
