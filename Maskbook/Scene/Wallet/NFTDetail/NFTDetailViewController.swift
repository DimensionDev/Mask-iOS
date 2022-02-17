//
//  NFTDetailViewController.swift
//  Maskbook
//
//  Created by caiyu on 2021/8/20.
//  Copyright © 2021 dimension. All rights reserved.
//

import CoreData
import CoreDataStack
import UIKit

class NFTDetailViewController: BaseViewController {
    typealias Section = NFTDetailViewModel.Section
    typealias Item = NFTDetailViewModel.SectionItem
    typealias ViewModel = NFTDetailViewModel
    
    var viewModel: NFTDetailViewModel
    
    lazy var tableView: UITableView = {
        let view = UITableView()
        view.backgroundColor = Asset.Colors.Background.normal.color
        view.estimatedRowHeight = 79
        view.rowHeight = UITableView.automaticDimension
        view.tableFooterView = UIView()
        view.separatorStyle = .none
        view.register(NFTDetailTableViewCell.self)
        view.register(NFTTransactionTableViewCell.self)
        view.register(NFTCollectionDetailTableViewCell.self)
        view.register(TransactionHeaderView.self, forHeaderFooterViewReuseIdentifier: String(describing: TransactionHeaderView.self))
        view.translatesAutoresizingMaskIntoConstraints = false
        return view
    }()
    
    let sendButton: PrimeryButton =  {
        let button = PrimeryButton(title: L10n.Scene.Sendtransaction.Send.btnSend)
        button.tintColor = Asset.Colors.AccountCard.nameText.color
        button.setImage(Asset.Images.Scene.SendTransaction.upload.image, for: .normal)
        button.setInsets(forContentPadding: .zero, imageTitlePadding: 10)
        button.addTarget(self, action: #selector(sendTransaction(_:)), for: .touchUpInside)
        return button
    }()
    
    let receiveButton: SecondaryButton =  {
        let button = SecondaryButton(title: L10n.Scene.WalletBalance.btnReceive)
        button.setTitleColor(Asset.Colors.Text.link.color, for: .normal)
        button.setImage(Asset.Images.Scene.Balance.receiveButtonBlue.image, for: .normal)
        button.setInsets(forContentPadding: .zero, imageTitlePadding: 10)
        button.addTarget(self, action: #selector(receiveBtnClicked(_:)), for: .touchUpInside)
        return button
    }()
    
    lazy var buttonStackView: UIStackView = {
        let view = UIStackView()
        view.axis = .horizontal
        view.alignment = .center
        view.distribution = .fillEqually
        view.isLayoutMarginsRelativeArrangement = true
        view.layoutMargins = UIEdgeInsets(top: 0, left: 22, bottom: 24, right: 22)
        view.spacing = 20
        sendButton.translatesAutoresizingMaskIntoConstraints = false
        receiveButton.translatesAutoresizingMaskIntoConstraints = false
        view.addArrangedSubview(sendButton)
        view.addArrangedSubview(receiveButton)
        
        NSLayoutConstraint.activate([
            sendButton.heightAnchor.constraint(equalTo: view.heightAnchor),
            sendButton.heightAnchor.constraint(equalTo: receiveButton.heightAnchor)
        ])
        return view
    }()
    
    // swiftlint:disable force_cast
    lazy var dataSource: UITableViewDiffableDataSource<Section, Item> = {
        return UITableViewDiffableDataSource<Section, Item>(tableView: tableView) { [weak self] tableView, indexPath, item in
            switch item {
            case .token:
                let cell: NFTDetailTableViewCell = tableView.dequeCell(at: indexPath)
                if let token = self?.viewModel.token {
                    cell.setToken(token)
                }
                return cell
            
            case .nftDetail(let statusModel, let floorPrice):
                let cell :NFTCollectionDetailTableViewCell = tableView.dequeCell(at: indexPath)
                if let token = self?.viewModel.token {
                    cell.setCollectionStauts(floor: statusModel, collection: floorPrice, token: token)
                }
                return cell

            case .transaction(let transaction):
                let cell: NFTTransactionTableViewCell = tableView.dequeCell(at: indexPath)
                if let token = self?.viewModel.token {
                    cell.setup(transaction: transaction, assetModel: token)
                }
                return cell
            }
        }
    }()
    // swiftlint:enable force_cast
    
    init(nftTokenModel: Collectible) {
        self.viewModel = ViewModel(token: nftTokenModel)
        super.init(nibName: nil, bundle: nil)
    }
    
    @available(*, unavailable)
    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
    
    override func viewDidLoad() {
        super.viewDidLoad()
        self.viewModel.tableView = tableView
        self.viewModel.dataSource = dataSource
        
        setupNaviItems()
        setupSubviews()
        viewModel.setDataSourceSection()
    }
    
    private func setupNaviItems() {
        navigationItem.largeTitleDisplayMode = .never
    }
    
    private func setupSubviews() {
        view.addSubview(tableView)
        
        NSLayoutConstraint.activate([
            tableView.topAnchor.constraint(equalTo: self.view.safeAreaLayoutGuide.topAnchor),
            tableView.bottomAnchor.constraint(equalTo: self.view.safeAreaLayoutGuide.bottomAnchor),
            tableView.leadingAnchor.constraint(equalTo: self.view.leadingAnchor),
            tableView.trailingAnchor.constraint(equalTo: self.view.trailingAnchor)
        ])
        
        view.addSubview(buttonStackView)
        buttonStackView.translatesAutoresizingMaskIntoConstraints = false

        NSLayoutConstraint.activate([
            buttonStackView.bottomAnchor.constraint(equalTo: self.view.safeAreaLayoutGuide.bottomAnchor),
            buttonStackView.leadingAnchor.constraint(equalTo: self.view.leadingAnchor),
            buttonStackView.trailingAnchor.constraint(equalTo: self.view.trailingAnchor),
            buttonStackView.heightAnchor.constraint(equalToConstant: 48)
        ])
        
        tableView.dataSource = dataSource
        tableView.delegate = viewModel
    }
}

extension NFTDetailViewController {
    @objc
    func receiveBtnClicked(_ sender: UIButton) {
        Coordinator.main.present(
            scene: .receiveAddress(
                network: maskUserDefaults.network,
                token: nil,
                address: maskUserDefaults.defaultAccountAddress!),
            transition: .detail(animated: true))
    }
    
    @objc
    func sendTransaction(_ sender: UIButton) {
        Coordinator.main.present(
            scene: .sendTransaction(
                param: .collectible(collectible: viewModel.token)),
            transition: .detail(animated: true))
    }
}
