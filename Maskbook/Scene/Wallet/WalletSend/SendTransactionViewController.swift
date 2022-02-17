//
//  SendTransactionViewController.swift
//  Maskbook
//
//  Created by caiyu on 2021/6/15.
//  Copyright © 2021 dimension. All rights reserved.
//

import Combine
import CoreDataStack
import PanModal
import SnapKit
import UIKit
import web3swift

class SendTransactionViewController: BaseViewController {
    typealias Section = RecentlyAddressViewModel.Section
    typealias Item = RecentlyAddressViewModel.CellItem
    typealias ViewModel = RecentlyAddressViewModel
    
    typealias ContactParam = Coordinator.Scene.WalletContactParam
    typealias SendTokenParam = Coordinator.Scene.SendTransactionParam
    let viewModel = ViewModel()
    
    var sendParam: SendTokenParam?
    
    var contactParam: ContactParam?
    
    var subscriptions: Set<AnyCancellable> = []
    let addressViewModel = AddressCheckViewModel()
    
    @InjectedProvider(\.walletAssetManager)
    private var walletAssetManager
    
    let toAddressLabel: UILabel = {
        let label = UILabel()
        label.textColor = Asset.Colors.Text.normal.color
        label.font = FontStyles.BH5
        label.text = L10n.Scene.Sendtransaction.Send.labelTo
        return label
    }()
    
    let enterAddressTextField: MaskTextField = {
        let textField = MaskTextField()
        textField.attributedPlaceholder = NSAttributedString(string: L10n.Scene.Sendtransaction.Send.placeholderAddress,
                                                             attributes: [.foregroundColor: Asset.Colors.Text.light.color,
                                                                          .font: FontStyles.BH5])
        let paddingView = UIView(frame: CGRect(x: 0, y: 0, width: 48, height: 52))
        let imageView = UIImageView()
        imageView.image = Asset.Images.Scene.SendTransaction.scan.image
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
    
    let nextButton: PrimeryButton = {
        let btn = PrimeryButton(title: L10n.Scene.Sendtransaction.Send.btnNext)
        btn.addTarget(self, action: #selector(nextClicked(_:)), for: .touchUpInside)
        return btn
    }()
    
    lazy var tableView: UITableView = {
        let tableView = UITableView()
        tableView.backgroundColor = Asset.Colors.Background.normal.color
        tableView.tableFooterView = UIView()
        tableView.separatorStyle = .none
        tableView.register(RecentlyAddressTableViewCell.self, forCellReuseIdentifier: String(describing: RecentlyAddressTableViewCell.self))
        tableView.delegate = self
        return tableView
    }()
    
    lazy var dataSource: UITableViewDiffableDataSource<Section, Item> = {
        return UITableViewDiffableDataSource<Section, Item>(
            tableView: tableView) { tableView, indexPath, item in
            let cell: RecentlyAddressTableViewCell = tableView.dequeCell(at: indexPath)
            switch item {
            case let .address(address):
                cell.setModel(name: nil, address: address)

            case let .contact(name, ensName, address):
                let displayAddress = ensName ?? address
                cell.setModel(name: name, address: displayAddress ?? "")
            }
            return cell
        }
    }()
        
    override func viewDidLoad() {
        super.viewDidLoad()
        
        setupNaviItems()
        setupSubViews()
        setSubscriptions()
    }
    
    private func setupNaviItems() {    
        navigationItem.largeTitleDisplayMode = .never
        navigationItem.title = L10n.Scene.Sendtransaction.Send.btnSend
    }
    
    func setupSubViews() {
        view.backgroundColor = Asset.Colors.Background.normal.color
        
        view.addSubview(toAddressLabel)
        toAddressLabel.snp.makeConstraints { make in
            make.left.equalTo(22.5)
            make.top.equalTo(view.safeAreaLayoutGuide.snp.top).offset(24)
        }
        
        view.addSubview(nextButton)
        nextButton.snp.makeConstraints { make in
            make.right.equalTo(-22.5)
            make.height.equalTo(54)
            make.width.equalTo(68)
            make.top.equalTo(toAddressLabel.snp.bottom).offset(8)
        }
        
        view.addSubview(enterAddressTextField)
        enterAddressTextField.snp.makeConstraints {make in
            make.left.equalTo(toAddressLabel)
            make.top.bottom.equalTo(nextButton)
            make.right.equalTo(nextButton.snp.left).offset(-12)
        }
        
        view.addSubview(tableView)

        tableView.snp.makeConstraints { make in
            make.top.equalTo(enterAddressTextField.snp.bottom).offset(16)
            make.left.right.equalTo(view)
            make.bottom.equalTo(view.safeAreaLayoutGuide)
        }

        tableView.dataSource = dataSource
    }
    
    func setSubscriptions() {
        let sharedPublisher = enterAddressTextField.textPublisher().share()
        sharedPublisher
            .receive(on: DispatchQueue.main)
            .sink { [weak self] text in
                guard let self = self else { return }
                self.addressViewModel.addressValidate.value = AddressCheckViewModel.isAddressValid(address: text)
            }
            .store(in: &subscriptions)
        
        sharedPublisher
            .receive(on: DispatchQueue.main)
            .compactMap { [weak self] text in
                return self?.viewModel.generateCellItem(toSearch: text)
            }
            .sink { [weak self] items in
                guard let self = self else { return }
                var snapshot = NSDiffableDataSourceSnapshot<Section, Item>()
                snapshot.appendSections([.main])
                snapshot.appendItems(items)
                self.dataSource.apply(snapshot, animatingDifferences: false)
            }
            .store(in: &subscriptions)
    
        enterAddressTextField.textPublisher()
            .receive(on: DispatchQueue.global())
            .map {[weak self] inputAddress in
                self?.addressViewModel.checkAddressLegal(address: inputAddress) ?? Just("").eraseToAnyPublisher()
            }
            .switchToLatest()
            .sink {[weak self] address in
                guard let self = self else { return }
                self.addressViewModel.ensAddressValidate.value = !address.isEmpty
            }.store(in: &subscriptions)
        
        addressViewModel.addressValidate.combineLatest(addressViewModel.ensAddressValidate)
            .receive(on: DispatchQueue.main)
            .sink { [weak self] addressValidate, ensAddressValidate in
                self?.nextButton.isEnabled = addressValidate || ensAddressValidate
                if addressValidate {
                    self?.contactParam = .address(address: self?.enterAddressTextField.text ?? "")
                }
                if ensAddressValidate {
                    self?.contactParam = .ensName(ensName: self?.enterAddressTextField.text ?? "")
                }
            }
            .store(in: &subscriptions)
        
//        viewModel.cellItemPublisher.sink { [weak self] items in
//            guard let self = self else { return } 
//            var snapshot = NSDiffableDataSourceSnapshot<Section, Item>()
//            snapshot.appendSections([.main])
//            snapshot.appendItems(items)
//            self.dataSource.apply(snapshot, animatingDifferences: false)
//        }
//        .store(in: &subscriptions)
        
        enterAddressTextField.leftView?.gesture()
            .receive(on: DispatchQueue.main)
            .sink(receiveValue: {[weak self] _ in
                guard let self = self else { return }
                Coordinator.main.present(scene: .scanBase(delegate: self), transition: .detail(animated: true))
            })
            .store(in: &subscriptions)
    }
}

// Action
extension SendTransactionViewController {
    @objc
    func nextClicked(_ sender: UIButton) {
        guard let contactParam = contactParam else { return }
        switch sendParam {
        case .none:
            Coordinator.main.present(
                scene: .sendTransactionConfirm(
                    param: contactParam,
                    tokenId: nil),
                transition: .detail(animated: true))
            
        case .collectible(let collectible):
            Coordinator.main.present(
                scene: .sendNFTTransactionConfirm(
                    param: contactParam,
                    nftToken: collectible),
                transition: .detail(animated: true))
            
        case .token(let id):
            Coordinator.main.present(
                scene: .sendTransactionConfirm(
                    param: contactParam,
                    tokenId: id),
                transition: .detail(animated: true))
        }
    }
}

extension UITextField {
   func textPublisher() -> AnyPublisher<String, Never> {
       NotificationCenter.default
           .publisher(for: UITextField.textDidChangeNotification, object: self)
           .map { ($0.object as? UITextField)?.text ?? "" }
           .eraseToAnyPublisher()
   }
}

extension SendTransactionViewController: UITableViewDelegate {
    func tableView(_ tableView: UITableView, didSelectRowAt indexPath: IndexPath) {
        guard let item = dataSource.itemIdentifier(for: indexPath) else { return }
        switch item {
        case let .contact(_, ensName, address):
            var param: Coordinator.Scene.WalletContactParam
            if let validEnsName = ensName {
                param = .ensName(ensName: validEnsName)
            } else {
                param = .address(address: address ?? "")
            }
            switch sendParam {
            case .none:
                Coordinator.main.present(
                    scene: .sendTransactionConfirm(param: param, tokenId: nil),
                    transition: .detail(animated: true))
                
            case .collectible(let collectible):
                Coordinator.main.present(
                    scene: .sendNFTTransactionConfirm(param: param, nftToken: collectible),
                    transition: .detail(animated: true))
                
            case .token(let id):
                Coordinator.main.present(
                    scene: .sendTransactionConfirm(param: param, tokenId: id),
                    transition: .detail(animated: true))
            }

        case .address(let address):
            switch sendParam {
            case .none:
                Coordinator.main.present(
                    scene: .sendTransactionConfirm(
                        param: .address(address: address),
                        tokenId: nil),
                    transition: .detail(animated: true))
                
            case .collectible(let collectible):
                Coordinator.main.present(
                    scene: .sendNFTTransactionConfirm(
                        param: .address(address: address),
                        nftToken: collectible),
                    transition: .detail(animated: true))
                
            case .token(let id):
                Coordinator.main.present(
                    scene: .sendTransactionConfirm(
                        param: .address(address: address),
                        tokenId: id),
                    transition: .detail(animated: true))
            }
        }
    }
    
    func tableView(_ tableView: UITableView, heightForRowAt indexPath: IndexPath) -> CGFloat {
        guard let item = dataSource.itemIdentifier(for: indexPath) else { return 0 }
        switch item {
        case .contact:
            return 54.0

        case .address:
            return 34.0
        }
    }
}

extension SendTransactionViewController: ScannerLineViewControllerDelegate {
    func scanFinished(scanResult: ScanResult?, error: String?) {
        guard let result = scanResult?.scanContent else {
              return
        }
        let address = result.components(separatedBy: ":").last
        enterAddressTextField.insertText(address ?? "")
    }
}
