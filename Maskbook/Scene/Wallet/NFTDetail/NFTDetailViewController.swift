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
    
    lazy var buttonContainerView: UIView = {
        let view = UIView()
        view.translatesAutoresizingMaskIntoConstraints = false
        view.backgroundColor = Asset.Colors.Background.blur.color
        return view
    }()
    
    let sendButton: UIButton = {
        let button = PrimeryButton(title: L10n.Scene.Sendtransaction.Send.btnSend)
        button.tintColor = Asset.Colors.Public.warnings.color
        button.setImage(Asset.Images.Scene.SendTransaction.upload.image, for: .normal)
        button.setBackgroundImage(UIImage.placeholder(color: Asset.Colors.Public.warnings.color),
                                  for: .normal)
        button.setInsets(forContentPadding: .zero, imageTitlePadding: 10)
        button.addTarget(self, action: #selector(sendTransaction(_:)), for: .touchUpInside)
        return button
    }()
    
    let receiveButton: UIButton = {
        let button = PrimeryButton(title: L10n.Scene.WalletBalance.btnReceive)
        button.tintColor = Asset.Colors.Public.blue.color
        button.setImage(Asset.Images.Scene.SendTransaction.receive.image, for: .normal)
        button.setInsets(forContentPadding: .zero, imageTitlePadding: 10)
        button.addTarget(self, action: #selector(receiveBtnClicked(_:)), for: .touchUpInside)
        return button
    }()
    
    lazy var buttonStackView: UIStackView = {
        let view = UIStackView()
        view.translatesAutoresizingMaskIntoConstraints = false
        view.axis = .horizontal
        view.alignment = .center
        view.distribution = .fillEqually
        view.isLayoutMarginsRelativeArrangement = true
        view.layoutMargins = UIEdgeInsets(top: 0, left: 22, bottom: 0, right: 22)
        view.spacing = 12
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
        view.addSubview(buttonContainerView)
        buttonContainerView.addSubview(buttonStackView)
        buttonStackView.translatesAutoresizingMaskIntoConstraints = false
        
        NSLayoutConstraint.activate([
            buttonContainerView.bottomAnchor.constraint(equalTo: view.bottomAnchor),
            buttonContainerView.topAnchor.constraint(equalTo: view.safeAreaLayoutGuide.bottomAnchor,
                                                     constant: -80),
            buttonContainerView.leadingAnchor.constraint(equalTo: view.leadingAnchor),
            buttonContainerView.trailingAnchor.constraint(equalTo: view.trailingAnchor)
        ])
        
        NSLayoutConstraint.activate([
            buttonStackView.topAnchor.constraint(equalTo: buttonContainerView.topAnchor,
                                                 constant: 8),
            buttonStackView.leadingAnchor.constraint(equalTo: view.leadingAnchor),
            buttonStackView.trailingAnchor.constraint(equalTo: view.trailingAnchor),
            buttonStackView.heightAnchor.constraint(equalToConstant: 48)
        ])
        
        NSLayoutConstraint.activate([
            tableView.topAnchor.constraint(equalTo: view.safeAreaLayoutGuide.topAnchor),
            tableView.bottomAnchor.constraint(equalTo: buttonContainerView.topAnchor),
            tableView.leadingAnchor.constraint(equalTo: view.leadingAnchor),
            tableView.trailingAnchor.constraint(equalTo: view.trailingAnchor)
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
