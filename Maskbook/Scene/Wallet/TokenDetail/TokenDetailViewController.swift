//
//  TokenDetailViewController.swift
//  Maskbook
//
//  Created by BradGao on 2021/6/15.
//  Copyright © 2021 dimension. All rights reserved.
//

import Combine
import CoreData
import CoreDataStack
import UIKit
import WalletConnectSwift

class TokenDetailViewController: BaseViewController {
    typealias Section = TokenDetailViewModel.Section
    typealias Item = TokenDetailViewModel.SectionItem
    typealias ViewModel = TokenDetailViewModel
    var disposeBag = Set<AnyCancellable>()
    
    var viewModel: ViewModel
    
    @InjectedProvider(\.userDefaultSettings)
    private var userSetting
    
    lazy var tableView: UITableView = {
        let view = UITableView()
        view.backgroundColor = Asset.Colors.Background.normal.color
        view.estimatedRowHeight = 79
        view.rowHeight = UITableView.automaticDimension
        view.tableFooterView = UIView()
        view.separatorStyle = .none
        view.register(TokenDetailTokenCell.self, forCellReuseIdentifier: String(describing: TokenDetailTokenCell.self))
        view.register(TransactionCell.self, forCellReuseIdentifier: String(describing: TransactionCell.self))
        view.register(TransactionHeaderView.self,
                      forHeaderFooterViewReuseIdentifier: String(describing: TransactionHeaderView.self))
        view.translatesAutoresizingMaskIntoConstraints = false
        return view
    }()
    
    lazy var dataSource: UITableViewDiffableDataSource<Section, Item> = {
        UITableViewDiffableDataSource<Section, Item>(tableView: tableView) { [weak self] tableView, indexPath, item in
            switch item {
            case .token:
                let cell: TokenDetailTokenCell = tableView.dequeCell(at: indexPath)
                if let token = self?.viewModel.token {
                    cell.setToken(token)
                }
                return cell
                
            case .transaction(let transaction):
                let cell: TransactionCell = tableView.dequeCell(at: indexPath)
                cell.setup(transaction: transaction, displayTokenSymbol: false)
                return cell
            }
        }
    }()
    
    lazy var sendButton: UIButton = {
        let button = PrimeryButton(title: L10n.Scene.Sendtransaction.Send.btnSend)
        button.tintColor = Asset.Colors.Public.warnings.color
        button.setImage(Asset.Images.Scene.SendTransaction.upload.image, for: .normal)
        button.setBackgroundImage(UIImage.placeholder(color: Asset.Colors.Public.warnings.color),
                                  for: .normal)
        button.setInsets(forContentPadding: .zero, imageTitlePadding: 10)
        button.addTarget(self, action: #selector(sendTransaction(_:)), for: .touchUpInside)
        return button
    }()
    
    lazy var receiveButton: UIButton = {
        let button = PrimeryButton(title: L10n.Scene.WalletBalance.btnReceive)
        button.tintColor = Asset.Colors.Public.blue.color
        button.setImage(Asset.Images.Scene.SendTransaction.receive.image, for: .normal)
        button.setInsets(forContentPadding: .zero, imageTitlePadding: 10)
        button.addTarget(self, action: #selector(receiveBtnClicked(_:)), for: .touchUpInside)
        return button
    }()
    
    lazy var buttonContainerView: UIView = {
        let view = UIView()
        view.translatesAutoresizingMaskIntoConstraints = false
        view.backgroundColor = Asset.Colors.Background.blur.color
        return view
    }()
    
    lazy var buttonStackView: UIStackView = {
        let view = UIStackView()
        view.translatesAutoresizingMaskIntoConstraints = false
        view.axis = .horizontal
        view.alignment = .center
        view.distribution = .fillEqually
        view.isLayoutMarginsRelativeArrangement = true
        view.layoutMargins = UIEdgeInsets(top: 0, left: LayoutConstraints.leading, bottom: 0, right: LayoutConstraints.trailing)
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
    
    init(tokenModel: MaskToken) {
        self.viewModel = ViewModel(token: tokenModel)
        super.init(nibName: nil, bundle: nil)
    }
    
    @available(*, unavailable)
    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
    
    override func viewDidLoad() {
        super.viewDidLoad()
        viewModel.tableView = tableView
        viewModel.dataSource = dataSource
        
        setupNaviItems()
        setupSubviews()
        setSubscriptions()
    }
    
    private func setupNaviItems() {
        navigationItem.largeTitleDisplayMode = .never
    }
    
    private func setupSubviews() {
        view.addSubview(tableView)
        view.addSubview(buttonContainerView)
        buttonContainerView.addSubview(buttonStackView)
        
        tableView.dataSource = dataSource
        tableView.delegate = viewModel
        
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
    }
    
    func setSubscriptions() {
        viewModel.cellItems
            .map(\.isEmpty)
            .removeDuplicates()
            .map {
                $0
                ? Asset.Colors.Background.normal.color
                : Asset.Colors.Background.blur.color
            }
            .asDriver()
            .assign(to: \.buttonContainerView.backgroundColor, on: self)
            .store(in: &disposeBag)
    }
}

extension TokenDetailViewController {
    @objc
    func receiveBtnClicked(_ sender: UIButton) {
        guard let accountAddress = maskUserDefaults.defaultAccountAddress else {
            return
        }
        guard let blockchain = BlockChainNetwork(chainId: Int(viewModel.token.coinId),
                                                 networkId: UInt64(viewModel.token.chainId))
        else { return }
        Coordinator.main.present(
            scene: .receiveAddress(
                network: blockchain,
                token: nil,
                address: accountAddress),
            transition: .detail(animated: true))
    }
    
    @objc
    func sendTransaction(_ sender: UIButton) {
        let network = userSetting.network
        guard let displayBlockchain = BlockChainNetwork(chainId: Int(viewModel.token.coinId),
                                                        networkId: UInt64(viewModel.token.chainId))
        else {
            return
        }
        if displayBlockchain != network {
            // Check whether current account is from WalletConnect
            let account = WalletCoreService.shared.getCurrentAccount()
            if let session = account?.session,
               account?.fromWalletConnect == true {
                showWalletConnectNetworkAlert(session: session,
                                              tokenBlockchain: displayBlockchain)
            } else {
                showSwitchNetworkAlert(tokenBlockchain: displayBlockchain,
                                       currentBlockchain: network)
            }
            return
        }
        
        let tokenIdentifier = Token.createIdentifier(
            chainId: Int64(network.chain.rawValue),
            networkId: Int64(network.networkId),
            symbol: viewModel.token.symbol,
            account: userSetting.defaultAccountAddress)
        Coordinator.main.present(
            scene: .sendTransaction(
                param: .token(id: tokenIdentifier)),
            transition: .detail(animated: true))
    }
    
    func showWalletConnectNetworkAlert(session: Session, tokenBlockchain: BlockChainNetwork) {
        let keyword1 = tokenBlockchain.name
        let keyword2 = " \(tokenBlockchain.name) "
        let words = L10n.Scene.TokenDetail.walletconnectSwitchNetworkAlert(keyword1,
                                                                           keyword2)
        let attributeString = NSMutableAttributedString()
        let paragraphStyle = NSMutableParagraphStyle()
        paragraphStyle.minimumLineHeight = 24
        paragraphStyle.maximumLineHeight = 24
        
        let attribute = NSAttributedString(string: words,
                                           attributes: [.foregroundColor: Asset.Colors.Text.normal.color,
                                                        .font: FontStyles.MH5,
                                                        .paragraphStyle: paragraphStyle])
        attributeString.append(attribute)
        attributeString.addAttributes(attributes: [
            keyword1: Asset.Colors.Text.dark.color,
            keyword2: Asset.Colors.Text.dark.color
        ])
        let alertController = AlertController(
            title: L10n.Scene.TokenDetail.switchNetwork,
            message: words,
            confirmButtonText: L10n.Common.Controls.ok,
            cancelButtonText: L10n.Common.Controls.cancel,
            imageType: .warning,
            confirmButtonClicked: { _ in
                WalletConnectClient.openInstalledWallet(from: session)
            },
            cancelButtonClicked: nil)
        alertController.setAttributeMessage(attrMessage: attributeString)
        Coordinator.main.present(scene: .alertController(alertController:
                                                            alertController),
                                 transition: .alertController(completion: nil))
    }
    
    func showSwitchNetworkAlert(tokenBlockchain: BlockChainNetwork,
                                currentBlockchain: BlockChainNetwork) {
        let keyword1 = "(\(currentBlockchain.name))"
        let keyword2 = "(\(tokenBlockchain.name))"
        let keyword3 = " \(tokenBlockchain.name) "
        let words = L10n.Scene.WalletConnect.networkNotMatch(keyword1, keyword2, keyword3)
        let attributeString = NSMutableAttributedString()
        let paragraphStyle = NSMutableParagraphStyle()
        paragraphStyle.minimumLineHeight = 24
        paragraphStyle.maximumLineHeight = 24
        let attribute = NSAttributedString(string: words,
                                           attributes: [.foregroundColor: Asset.Colors.Text.normal.color,
                                                        .font: FontStyles.MH5,
                                                        .paragraphStyle: paragraphStyle])
        attributeString.append(attribute)
        attributeString.addAttributes(attributes: [
            keyword1: Asset.Colors.Public.blue.color,
            keyword2: Asset.Colors.Public.blue.color,
            keyword3: Asset.Colors.Public.blue.color
        ])
        let alertController = AlertController(
            title: L10n.Scene.TokenDetail.switchNetwork,
            message: words,
            confirmButtonText: L10n.Common.Controls.ok,
            cancelButtonText: L10n.Common.Controls.cancel,
            imageType: .warning,
            confirmButtonClicked: { [weak self] _ in
                guard let self = self else { return }
                self.userSetting.network = tokenBlockchain
                let tokenIdentifier = Token.createIdentifier(
                    chainId: Int64(tokenBlockchain.chain.rawValue),
                    networkId: Int64(tokenBlockchain.networkId),
                    symbol: self.viewModel.token.symbol,
                    account: self.userSetting.defaultAccountAddress)
                Coordinator.main.present(
                    scene: .sendTransaction(
                        param: .token(id: tokenIdentifier)),
                    transition: .detail(animated: true))
            }
        )
        alertController.setAttributeMessage(attrMessage: attributeString)
        Coordinator.main.present(scene: .alertController(alertController:
                                                            alertController),
                                 transition: .alertController(completion: nil))
    }
}
