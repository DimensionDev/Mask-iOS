//
//  SelectNetworkViewController.swift
//  Maskbook
//
//  Created by Hugo L on 2021/5/18.
//  Copyright © 2021 dimension. All rights reserved.
//

import Combine
import Foundation
import PanModal
import UIKit

class SelectNetworkViewController: UIViewController {
    typealias Section = SelectNetworkViewModel.Section
    typealias Item = SelectNetworkViewModel.Item
    typealias ViewModel = SelectNetworkViewModel
    
    lazy var navigationBar: UINavigationBar = {
        let view = UINavigationBar()
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
        view.register(SelectNetworkTableViewCell.self)
        view.delegate = self
        return view
    }()
    
    lazy var dataSource: UITableViewDiffableDataSource<Section, Item> = {
        return UITableViewDiffableDataSource<Section, Item>(
            tableView: tableView) { tableView, indexPath, item in
            let cell: SelectNetworkTableViewCell = tableView.dequeCell(at: indexPath)
            cell.update(coin: item)
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
        viewModel.menuItems.sink { [weak self] items in
            guard let self = self else { return }
            var snapshot = NSDiffableDataSourceSnapshot<Section, Item>()
            snapshot.appendSections([.main])
            snapshot.appendItems(items)
            self.dataSource.apply(snapshot, animatingDifferences: false)
        }
        .store(in: &disposeBag)
    }
    
    private func setupUI() {
        view.backgroundColor = Asset.Colors.Background.normal.color
        view.addSubview(navigationBar)
        view.addSubview(tableView)
        
        navigationBar.translatesAutoresizingMaskIntoConstraints = false
        NSLayoutConstraint.activate([
            navigationBar.topAnchor.constraint(equalTo: view.topAnchor),
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

extension SelectNetworkViewController: PanModalPresentable {
    var panScrollable: UIScrollView? {
        return nil
    }
    
    var longFormHeight: PanModalHeight {
        let heightOfItem = 85 * CGFloat(self.dataSource.tableView(self.tableView, numberOfRowsInSection: 0))
        return .contentHeight(CGFloat(heightOfItem))
    }
}

extension SelectNetworkViewController: UITableViewDelegate {
    func tableView(_ tableView: UITableView, didSelectRowAt indexPath: IndexPath) {
        let items = viewModel.menuItems.value
        viewModel.select(item: items[indexPath.row])
        self.dismiss(animated: true, completion: nil)
    }
}

#if canImport(SwiftUI) && DEBUG
import SwiftUI
@available(iOS 13.0, *)
struct SelectNetworkViewControllerPreview: PreviewProvider {
    static var previews: some SwiftUI.View {
        let vc = SelectNetworkViewController()
        Group {
            UIViewPreview {
                let view = vc.view!
                return view
            }
            .previewLayout(.fixed(width: 375, height: 364))
        }
    }
}
#endif
