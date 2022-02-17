//
//  SearchTokenListViewController.swift
//  Maskbook
//
//  Created by caiyu on 2021/6/18.
//  Copyright © 2021 dimension. All rights reserved.
//

import Combine
import CoreData
import CoreDataStack
import PanModal
import UIKit

protocol ChooseTokenBackDelegate: NSObjectProtocol {
     func chooseTokenAction(token: Token)
     func chooseNFTTokenAction(token: Collectible)
}
class SearchTokenListViewController: BaseViewController {
    public var isNftTokenList: Bool!
    typealias Section = SearchTokenListViewModel.Section
    typealias Item = SearchTokenListViewModel.TokenListModel
    typealias ViewModel = SearchTokenListViewModel
    var viewModel: ViewModel!
    var subscriptions: Set<AnyCancellable> = []
    weak var delegate: ChooseTokenBackDelegate?
    
    let searchTextField: MaskTextField = {
        let textField = MaskTextField()
        textField.attributedPlaceholder = NSAttributedString(string: L10n.Scene.Sendtransaction.Tokenlist.placeholder,
                                                             attributes: [.foregroundColor: Asset.Colors.Text.light.color,
                                                                          .font: FontStyles.BH5])
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
        tableView.register(TokenListTableViewCell.self, forCellReuseIdentifier: String(describing: TokenListTableViewCell.self))
        tableView.delegate = self
        return tableView
    }()

    lazy var dataSource: UITableViewDiffableDataSource<Section, Item> = {
        return UITableViewDiffableDataSource<Section, Item>(tableView: tableView) { tableView, indexPath, item in
            switch item {
            case .token(let token):
                let cell: TokenListTableViewCell = tableView.dequeCell(at: indexPath)
                cell.setModel(with: token)
                return cell

            case .nftToken(let token):
                let cell: TokenListTableViewCell = tableView.dequeCell(at: indexPath)
                cell.setNFTModel(with: token)
                return cell
            }
        }
    }()
    // swiftlint:enable force_cast

    override func viewDidLoad() {
        super.viewDidLoad()
        viewModel = SearchTokenListViewModel(managedObjectContext: AppContext.shared.coreDataStack.persistentContainer.viewContext,
                                             dataSource: dataSource,
                                             isNFTTokenList: isNftTokenList)
        
        setupNaviItems()
        setupSubViews()
        setSubscriptions()
    }
    
    private func setupNaviItems() {
        navigationItem.largeTitleDisplayMode = .never
        navigationItem.title = L10n.Scene.Sendtransaction.Tokenlist.title
    }
    
    func setupSubViews() {
        view.backgroundColor = Asset.Colors.Background.normal.color
                
        view.addSubview(searchTextField)
        searchTextField.snp.makeConstraints { make in
            make.right.equalTo(-22)
            make.left.equalTo(22)
            make.height.equalTo(52)
            make.top.equalTo(view.safeAreaLayoutGuide.snp.top).offset(24)
        }
        
        view.addSubview(tableView)
        tableView.snp.makeConstraints {make in
            make.left.right.equalTo(view)
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

extension SearchTokenListViewController: UITableViewDelegate {
    func tableView(_ tableView: UITableView, didSelectRowAt indexPath: IndexPath) {
        tableView.deselectRow(at: indexPath, animated: true)
        guard let item = dataSource.itemIdentifier(for: indexPath) else { return }
        switch item {
        case .token(let chooseToken):
            guard let delegate = delegate else {
                return
            }
             delegate.chooseTokenAction(token: chooseToken)
             navigationController?.popViewController(animated: true)

        case .nftToken(let token):
            guard let delegate = delegate else {
                return
            }
            delegate.chooseNFTTokenAction(token: token)
            navigationController?.popViewController(animated: true)
        }
    }
}
