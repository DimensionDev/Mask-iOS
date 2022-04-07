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
    let keyboardExpandView = UIView()
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
        let rightView = UIView(frame: CGRect(x: 0, y: 0, width: 24, height: 52))
        let rightImageView = UIImageView()
        rightImageView.image = Asset.Images.Scene.SendTransaction.scan.image
        rightView.addSubview(rightImageView)
        rightImageView.snp.makeConstraints { make in
            make.centerY.equalTo(rightView)
            make.centerX.equalTo(rightView)
            make.size.equalTo(CGSize(width: 24, height: 24))
        }
        textField.rightView = rightView
        textField.rightViewMode = .always
        
        let leftView = UIView(frame: CGRect(x: 0, y: 0, width: 48, height: 52))
        let leftImageView = UIImageView()
        leftImageView.image = Asset.Images.Scene.SendTransaction.search.image
        leftView.addSubview(leftImageView)
        leftImageView.snp.makeConstraints { make in
            make.centerY.equalTo(leftView)
            make.left.equalTo(12)
            make.right.equalTo(-8)
            make.size.equalTo(CGSize(width: 24, height: 24))
        }
        textField.leftView = leftView
        textField.leftViewMode = .unlessEditing
        
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
        tableView.register(RecentlyAddressTableViewCell.self)
        tableView.register(RecentlyPasteTableViewCell.self)
        tableView.registerHeaderFooter(RecentlyHeaderView.self)
        tableView.delegate = self
        return tableView
    }()
    
    lazy var dataSource: UITableViewDiffableDataSource<Section, Item> = {
        return UITableViewDiffableDataSource<Section, Item>(
            tableView: tableView) { tableView, indexPath, item in
            switch item {
            case let .address(address):
                let cell: RecentlyAddressTableViewCell = tableView.dequeCell(at: indexPath)
                cell.setModel(name: nil, address: address)
                return cell

            case let .contact(name, ensName, address):
                let cell: RecentlyAddressTableViewCell = tableView.dequeCell(at: indexPath)
                let displayAddress = ensName ?? address
                cell.setModel(name: name, address: displayAddress ?? "")
                return cell

            case let .paste(address, ensName):
                let cell: RecentlyPasteTableViewCell = tableView.dequeCell(at: indexPath)
                cell.setModel(name: ensName, address: address)
                return cell
            }
        }
    }()
        
    override func viewDidLoad() {
        super.viewDidLoad()
        
        setupNaviItems()
        setupSubViews()
        setTableViewSource()
        setSubscriptions()
        handleForKeyboard()
    }
    
    private func setupNaviItems() {    
        navigationItem.largeTitleDisplayMode = .never
        navigationItem.title = L10n.Scene.Sendtransaction.Send.btnSend
    }
    
    func setupSubViews() {
        view.backgroundColor = Asset.Colors.Background.normal.color
        
        view.addSubview(toAddressLabel)
        toAddressLabel.snp.makeConstraints { make in
            make.leading.equalTo(LayoutConstraints.leading)
            make.top.equalTo(view.safeAreaLayoutGuide.snp.top).offset(LayoutConstraints.top)
        }
            
        view.addSubview(enterAddressTextField)
        enterAddressTextField.snp.makeConstraints {make in
            make.left.equalTo(toAddressLabel)
            make.top.equalTo(toAddressLabel.snp.bottom).offset(8)
            make.trailing.equalTo(-LayoutConstraints.trailing)
            make.height.equalTo(54)
        }
        
        view.addSubview(tableView)
        tableView.snp.makeConstraints { make in
            make.top.equalTo(enterAddressTextField.snp.bottom).offset(4)
            make.left.right.equalTo(view)
            make.bottom.equalTo(view.safeAreaLayoutGuide)
        }
        tableView.dataSource = dataSource
        
        view.addSubview(nextButton)
        nextButton.snp.makeConstraints { make in
            make.leading.equalTo(LayoutConstraints.leading)
            make.trailing.equalTo(-LayoutConstraints.trailing)
            make.height.equalTo(54)
        }
        
        view.addSubview(keyboardExpandView)
        keyboardExpandView.snp.makeConstraints { make in
            make.top.equalTo(nextButton.snp.bottom).offset(8)
            make.leading.trailing.equalToSuperview()
            make.bottom.equalTo(view.safeAreaLayoutGuide.snp.bottom)
            make.height.equalTo(0)
        }
    }
    
    func setTableViewSource() {
        var snapshot = NSDiffableDataSourceSnapshot<Section, Item>()
        let recentAddressItems = self.viewModel.generateRecentAddressCellItem()
        let contactAddressItems = self.viewModel.generateContactCellItem()
        snapshot.appendSections([.paste])
        snapshot.appendSections([.search])
        snapshot.appendSections([.contact])
        snapshot.appendItems(contactAddressItems)
        snapshot.appendSections([.address])
        snapshot.appendItems(recentAddressItems)
        self.dataSource.apply(snapshot, animatingDifferences: false)
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
                var snapshot = self.dataSource.snapshot()
                snapshot.appendItems(items, toSection: .search)
                self.dataSource.apply(snapshot, animatingDifferences: false)
            }
            .store(in: &subscriptions)
        
        sharedPublisher
            .receive(on: DispatchQueue.main)
            .sink { [weak self] text in
                guard let self = self else { return }
                if text.isEmpty {
                    let recentAddressItems = self.viewModel.generateRecentAddressCellItem()
                    let contactAddressItems = self.viewModel.generateContactCellItem()
                    var snapshot = self.dataSource.snapshot()
                    snapshot.appendItems(contactAddressItems, toSection: .contact)
                    snapshot.appendItems(recentAddressItems, toSection: .address)
                    self.dataSource.apply(snapshot, animatingDifferences: false)
                } else {
                    let items = self.viewModel.generateCellItem(toSearch: text)
                    var snapshot = self.dataSource.snapshot()
                    snapshot.appendItems(items, toSection: .search)
                    self.dataSource.apply(snapshot, animatingDifferences: false)
                }
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
        
        enterAddressTextField.rightView?.gesture()
            .receive(on: DispatchQueue.main)
            .sink(receiveValue: {[weak self] _ in
                guard let self = self else { return }
                Coordinator.main.present(scene: .scanBase(delegate: self), transition: .detail(animated: true))
            })
            .store(in: &subscriptions)
        
        viewModel.pasteStringPublisher
            .sink { [weak self] pasteStr in
                if WalletCoreHelper.validateAddress(address: pasteStr, chainType: maskUserDefaults.network.chain){
                    guard let self = self else { return }
                    guard let ens = ENS(web3: Web3.InfuraMainnetWeb3()) else { return }
                    DispatchQueue.global().async {
                        do {
                            let ensName = try ens.getName(forNode: pasteStr.stripHexPrefix() + ".addr.reverse")
                            DispatchQueue.main.async {
                                let cellItem = self.viewModel.pasteCellItem(pasteText: pasteStr, ensName: ensName)
                                var snapshot = self.dataSource.snapshot()
                                snapshot.appendItems(cellItem, toSection: .paste)
                                self.dataSource.apply(snapshot, animatingDifferences: false)
                            }
                        } catch {
                            return
                        }
                    }
                }
            }
            .store(in: &subscriptions)
    }
    
    func handleForKeyboard() {
        let endFrame = KeyboardResponderService.shared.endFrame.removeDuplicates()
        let willShow = NotificationCenter.default.publisher(for: UIResponder.keyboardWillShowNotification, object: nil)
        let willHide = NotificationCenter.default.publisher(for: UIResponder.keyboardWillHideNotification, object: nil)
        Publishers.CombineLatest(willShow, endFrame).sink { notification, _ in
            guard let duration = notification.userInfo?[UIResponder.keyboardAnimationDurationUserInfoKey] as? Double else {
                return
            }
            guard let endFrame = notification.userInfo?[UIResponder.keyboardFrameEndUserInfoKey] as? CGRect else {
                return
            }
            UIView.animate(
                withDuration: duration,
                delay: 0,
                options: .curveEaseIn) {
                    self.keyboardExpandView.snp.remakeConstraints { make in
                        make.top.equalTo(self.nextButton.snp.bottom).offset(8)
                        make.leading.trailing.equalToSuperview()
                        make.bottom.equalTo(self.view.snp.bottom)
                        make.height.equalTo(endFrame.height)
                        self.nextButton.layoutIfNeeded()
                    }
            }
            self.view.layoutIfNeeded()
        }.store(in: &subscriptions)
        
        Publishers.CombineLatest(willHide, endFrame).sink { notification, _ in
            guard let duration = notification.userInfo?[UIResponder.keyboardAnimationDurationUserInfoKey] as? Double else {
                return
            }
            UIView.animate(
                withDuration: duration,
                delay: 0,
                options: .curveEaseIn) {
                    self.keyboardExpandView.snp.remakeConstraints { make in
                        make.top.equalTo(self.nextButton.snp.bottom).offset(8)
                        make.leading.trailing.equalToSuperview()
                        make.bottom.equalTo(self.view.safeAreaLayoutGuide.snp.bottom)
                        make.height.equalTo(0)
                    }
            }
            self.view.layoutIfNeeded()
        }.store(in: &subscriptions)
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
            
        case let .paste(address, _):
            enterAddressTextField.text = ""
            enterAddressTextField.insertText(address)
        }
    }
    
    func tableView(_ tableView: UITableView, heightForHeaderInSection section: Int) -> CGFloat {
        switch self.dataSource.snapshot().sectionIdentifiers[section]{
        case .address:
            return self.dataSource.snapshot().numberOfItems(inSection: .address) > 0 ? 44: 0
            
        case .contact:
            return self.dataSource.snapshot().numberOfItems(inSection: .contact) > 0 ? 44: 0

        default:
            return 0
        }
    }

    // swiftlint:disable force_cast
    func tableView(_ tableView: UITableView, viewForHeaderInSection section: Int) -> UIView? {
        switch self.dataSource.snapshot().sectionIdentifiers[section]{
        case .address:
            let header = tableView.dequeueHeaderFooter(RecentlyHeaderView.self)
            header?.setContent(text: L10n.Scene.Sendtransaction.Send.recent, image: Asset.Images.Scene.SendTransaction.recent.image)
            return header
            
        case .contact:
            let header = tableView.dequeueHeaderFooter(RecentlyHeaderView.self)
            header?.setContent(text: L10n.Scene.Sendtransaction.Send.contact, image: Asset.Images.Scene.SendTransaction.contacts.image)
            return header
            
        default:
            return UIView()
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

