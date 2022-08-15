//
//  SearchNFTCollectionViewController.swift
//  Maskbook
//
//  Created by caiyu on 2022/8/1.
//  Copyright © 2022 dimension. All rights reserved.
//

import Combine
import CoreData
import CoreDataStack
import PanModal
import UIKit

protocol ChooseCollectionBackDelegate: AnyObject {
    func chooseNFTCollectionAction(token: [Collectible])
}

class SearchNFTCollectionViewController: BaseViewController {
    typealias Section = SearchCollectionNFTViewModel.Section
    typealias Item = SearchCollectionNFTViewModel.CollectionListModel
    typealias ViewModel = SearchCollectionNFTViewModel
    var viewModel: ViewModel!
    var subscriptions: Set<AnyCancellable> = []
    weak var delegate: ChooseCollectionBackDelegate?

    private let searchTextField: MaskTextField = {
        let textField = MaskTextField()
        textField.attributedPlaceholder = NSAttributedString(
            string: L10n.Scene.Sendtransaction.Tokenlist.placeholder,
            attributes: [
                .foregroundColor: Asset.Colors.Text.light.color,
                .font: FontStyles.BH5,
            ]
        )
        let paddingView = UIView(frame: CGRect(x: 0, y: 0, width: 48, height: 52))
        let imageView = UIImageView()
        imageView.image = Asset.Images.Scene.SendTransaction.search.image
        paddingView.addSubview(imageView)
        imageView.snp.makeConstraints { make in
            make.centerY.equalTo(paddingView)
            make.left.equalTo(12)
            make.right.equalTo(-8)
            make.size.equalTo(CGSize(width: 24, height: 24))
        }
        textField.leftView = paddingView
        return textField
    }()

    lazy var tableView: UITableView = {
        let tableView = UITableView()
        tableView.backgroundColor = Asset.Colors.Background.normal.color
        tableView.rowHeight = 79
        tableView.tableFooterView = UIView()
        tableView.separatorStyle = .none
        tableView.register(SearchCollectionNFTTableViewCell.self, forCellReuseIdentifier: String(describing: SearchCollectionNFTTableViewCell.self))
        tableView.showsVerticalScrollIndicator = false
        tableView.delegate = self
        return tableView
    }()

    lazy var dataSource: UITableViewDiffableDataSource<Section, Item> = {
        UITableViewDiffableDataSource<Section, Item>(tableView: tableView) { tableView, indexPath, item in
            switch item {
            case let .nft(assets):
                let cell: SearchCollectionNFTTableViewCell = tableView.dequeCell(at: indexPath)
                cell.update(items: assets)
                return cell
            }
        }
    }()

    // swiftlint:enable force_cast

    override func viewDidLoad() {
        super.viewDidLoad()
        viewModel = SearchCollectionNFTViewModel(
            managedObjectContext: AppContext.shared.coreDataStack.persistentContainer.viewContext,
            dataSource: dataSource
        )

        setupNaviItems()
        setupSubViews()
        setSubscriptions()
    }

    private func setupNaviItems() {
        navigationItem.largeTitleDisplayMode = .never
        navigationItem.title = L10n.Plugins.Luckydrop.Buttons.selectNftCollection
    }

    func setupSubViews() {
        view.backgroundColor = Asset.Colors.Background.normal.color

        view.addSubview(searchTextField)
        searchTextField.snp.makeConstraints { make in
            make.right.equalTo(-LayoutConstraints.trailing)
            make.left.equalTo(LayoutConstraints.leading)
            make.height.equalTo(52)
            make.top.equalTo(view.safeAreaLayoutGuide.snp.top).offset(LayoutConstraints.top)
        }

        view.addSubview(tableView)
        tableView.snp.makeConstraints { make in
            make.right.equalTo(-LayoutConstraints.trailing)
            make.left.equalTo(LayoutConstraints.leading)
            make.bottom.equalTo(view.safeAreaLayoutGuide.snp.bottom)
            make.top.equalTo(searchTextField.snp.bottom).offset(12)
        }

        tableView.dataSource = dataSource
    }

    func setSubscriptions() {
        searchTextField.textPublisher()
            .receive(on: DispatchQueue.main)
            .sink { [weak self] searchText in
                self?.viewModel.searchDataWithKey(key: searchText)
            }.store(in: &subscriptions)
    }
}

extension SearchNFTCollectionViewController: UITableViewDelegate {
    func tableView(_ tableView: UITableView, didSelectRowAt indexPath: IndexPath) {
        tableView.deselectRow(at: indexPath, animated: true)
        guard let item = dataSource.itemIdentifier(for: indexPath) else {
            return
        }
        switch item {
        case let .nft(assets):
            guard let delegate = delegate else {
                return
            }
            delegate.chooseNFTCollectionAction(token: assets)
            navigationController?.popViewController(animated: true)
        }
    }
}
