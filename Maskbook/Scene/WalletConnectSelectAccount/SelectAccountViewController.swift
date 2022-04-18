//
//  WalletConnectSelectAccountViewController.swift
//  Maskbook
//
//  Created by sxiaojian on 2021/12/16.
//  Copyright © 2021 dimension. All rights reserved.
//

import Combine
import Foundation
import PanModal
import UIKit
import UStack

class SelectAccountViewController: BaseViewController {
    typealias ViewModel = SelectAccountViewModel
    typealias Section = ViewModel.Section
    typealias Item = ViewModel.WalletsItem
    
    let tableViewTopConstant = 154.0
    var tableViewBottomConstant = 88.0
    let tableViewHeight = 85.0
    
    init(viewModel: ViewModel) {
        self.viewModel = viewModel
        super.init(nibName: nil, bundle: nil)
    }
    
    @available(*, unavailable)
    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
    
    var viewModel: ViewModel
    
    @InjectedProvider(\.userDefaultSettings)
    private var userSetting
    
    @InjectedProvider(\.mainCoordinator)
    private var mainCoordinator
    
    @InjectedProvider(\.walletConnectClient)
    internal var walletConnectClient
    
    private lazy var collectionView: UICollectionView = {
        let flowLayout = UICollectionViewFlowLayout()
        flowLayout.scrollDirection = .horizontal
        let view = ControlContainableCollectionView(frame: .zero, collectionViewLayout: flowLayout)
        view.backgroundColor = Asset.Colors.Background.normal.color
        view.showsHorizontalScrollIndicator = false
        view.showsVerticalScrollIndicator = false
        view.layer.masksToBounds = false
        view.register(SelectAccountChainItemCell.self)
        view.delegate = self
        view.dataSource = self
        view.translatesAutoresizingMaskIntoConstraints = false
        return view
    }()
    
    lazy var tableView: UITableView = {
        let view = UITableView()
        view.backgroundColor = Asset.Colors.Background.normal.color
        view.estimatedRowHeight = tableViewHeight
        view.rowHeight = UITableView.automaticDimension
        view.tableFooterView = UIView()
        view.separatorStyle = .none
        view.contentInset = UIEdgeInsets(top: 14, left: 0, bottom: 0, right: 0)
        view.delegate = self
        view.translatesAutoresizingMaskIntoConstraints = false
        view.register(SelectAccountTableViewCell.self)
        view.register(WalletListAddWalletConnectCell.self)
        return view
    }()
    
    private lazy var addWalletLabel: UILabel = {
        let label = UILabel()
        label.font = FontStyles.BH4
        label.textColor = Asset.Colors.Text.dark.color
        label.text = L10n.Scene.WalletList.walletsItemsAdd
        label.textAlignment = .left
        label.translatesAutoresizingMaskIntoConstraints = false
        return label
    }()
    
    private lazy var addImageView: UIImageView = {
        let image = Asset.Images.Scene.WalletAdd.add.image
        let view = UIImageView(image: image)
        view.translatesAutoresizingMaskIntoConstraints = false
        NSLayoutConstraint.activate([
            view.widthAnchor.constraint(equalToConstant: 24),
            view.heightAnchor.constraint(equalToConstant: 24)
        ])
        return view
    }()
    
    private lazy var addWalletView: HStackView = {
        let addWalletView = HStackView {
            addWalletLabel
            Spacer()
            addImageView
        }
        addWalletView.isLayoutMarginsRelativeArrangement = true
        addWalletView.layoutMargins = UIEdgeInsets(top: 12, left: LayoutConstraints.leading, bottom: 20 + view.safeAreaInsets.bottom, right: LayoutConstraints.trailing)
        addWalletView.backgroundColor = Asset.Colors.Background.normal.color
        
        return addWalletView
    }()
    
    private lazy var titleView: UIView = {
        let view = UIView()
        view.withSubViews {
            titleLabel
            editButton
        }
        NSLayoutConstraint.activate([
            titleLabel.centerXAnchor.constraint(equalTo: view.centerXAnchor),
            titleLabel.centerYAnchor.constraint(equalTo: view.centerYAnchor)
        ])
        
        NSLayoutConstraint.activate([
            editButton.trailingAnchor.constraint(equalTo: view.trailingAnchor, constant: -LayoutConstraints.trailing),
            editButton.centerYAnchor.constraint(equalTo: view.centerYAnchor)
        ])
        
        return view
    }()
    
    private lazy var titleLabel: UILabel = {
        let label = UILabel()
        label.font = FontStyles.BH4
        label.textColor = Asset.Colors.Text.dark.color
        label.text = L10n.Scene.WalletConnectServer.switchWallet
        label.textAlignment = .center
        label.translatesAutoresizingMaskIntoConstraints = false
        return label
    }()
    
    private lazy var editButton: UIButton = {
        let button = HitTestExpandedButton(type: .custom)
        button.titleLabel?.font = FontStyles.BH5
        button.setTitle(L10n.Common.Controls.edit, for: .normal)
        button.setTitle(L10n.Common.Controls.done, for: .selected)
        button.setTitleColor(Asset.Colors.Background.blue.color, for: .normal)
        button.setTitleColor(Asset.Colors.Background.blue.color, for: .selected)
        return button
    }()
    
    // MARK: - Data

    private lazy var dataSource: UITableViewDiffableDataSource<Section, Item> = {
        UITableViewDiffableDataSource<Section, Item>(
            tableView: tableView) { [weak self] tableView, indexPath, item in
                guard let self = self else { return UITableViewCell() }
                switch item {
                case let .account(data):
                    let cell: SelectAccountTableViewCell = tableView.dequeCell(at: indexPath)
                    switch self.viewModel.type {
                    case .editEnable:
                        cell.editaleUpdate(data: data, isEditing: self.viewModel.isEditing.value)
                    case .selectWithoutWalletConnect, .selectWithWalletConnect:
                        cell.noEditaleUpdate(data: data)
                    }
                    cell.delegate = self
                    return cell
                case .addWalletConnect:
                    let cell: WalletListAddWalletConnectCell = tableView.dequeCell(at: indexPath)
                    cell.titleLabel.text = L10n.Scene.WalletConnect.walletConnect
                    cell.icon.image = Asset.Images.Scene.WalletConnect.walletConnect.image
                    cell.contentView.alpha = self.viewModel.isEditing.value ? 0.5 : 1
                    return cell
                }
            }
    }()
    
    private var disposeBag = Set<AnyCancellable>()
    
    override func viewDidLoad() {
        super.viewDidLoad()
        setupUI()
        bindViewModel()
    }
    
    private func bindViewModel() {
        viewModel.accountListSubject
            .sink { [weak self] items in
                guard let self = self else { return }
                var snapshot = NSDiffableDataSourceSnapshot<Section, Item>()
                snapshot.appendSections([.main])
                snapshot.appendItems(items)
                self.dataSource.apply(snapshot, animatingDifferences: false)
            }
            .store(in: &disposeBag)
        
        viewModel.selectNetworkSubject
            .receive(on: DispatchQueue.main)
            .sink { [weak self] _ in
                self?.collectionView.reloadData()
            }
            .store(in: &disposeBag)
        
        viewModel.isEditing
            .receive(on: DispatchQueue.main)
            .sink { [weak self] _ in
                guard let self = self else { return }
                self.addWalletView.alpha = self.viewModel.isEditing.value ? 0.5 : 1
                self.tableView.reloadData()
            }
            .store(in: &disposeBag)
        
        editButton
            .cv.tap()
            .sink { [weak self] in
                guard let self = self else { return }
                self.editButton.isSelected = !self.editButton.isSelected
                self.viewModel.isEditing.value = self.editButton.isSelected
            }
            .store(in: &disposeBag)
        
        addImageView
            .cv.tapGesture()
            .sink { [weak self] _ in
                self?.mainCoordinator.present(scene: .walletListAdd, transition: .panModel(animated: true))
            }
            .store(in: &disposeBag)
    }

    private func setupUI() {
        view.backgroundColor = Asset.Colors.Background.normal.color
        
        view.withSubViews {
            titleView
            tableView
            collectionView
            addWalletView
        }
        
        NSLayoutConstraint.activate([
            titleView.topAnchor.constraint(equalTo: view.topAnchor, constant: 44),
            titleView.leadingAnchor.constraint(equalTo: view.leadingAnchor),
            titleView.trailingAnchor.constraint(equalTo: view.trailingAnchor),
            titleView.heightAnchor.constraint(equalToConstant: 24)
        ])
        
        NSLayoutConstraint.activate([
            collectionView.topAnchor.constraint(equalTo: view.topAnchor, constant: 88),
            collectionView.leadingAnchor.constraint(equalTo: view.leadingAnchor),
            collectionView.trailingAnchor.constraint(equalTo: view.trailingAnchor),
            collectionView.heightAnchor.constraint(equalToConstant: 66)
        ])
        
        let bottom: CGFloat = {
            if let bottom = UIApplication.shared.windows.first(where: \.isKeyWindow)?.safeAreaInsets.bottom {
                return bottom
            }
            return 0
        }()
        
        NSLayoutConstraint.activate([
            addWalletView.leadingAnchor.constraint(equalTo: view.leadingAnchor),
            addWalletView.bottomAnchor.constraint(equalTo: view.bottomAnchor),
            addWalletView.trailingAnchor.constraint(equalTo: view.trailingAnchor),
            addWalletView.heightAnchor.constraint(equalToConstant: 54 + bottom)
        ])
        
        NSLayoutConstraint.activate([
            tableView.topAnchor.constraint(equalTo: collectionView.bottomAnchor),
            tableView.leadingAnchor.constraint(equalTo: view.leadingAnchor),
            tableView.bottomAnchor.constraint(equalTo: addWalletView.topAnchor),
            tableView.trailingAnchor.constraint(equalTo: view.trailingAnchor)
        ])
        
        addWalletView.isHidden = !viewModel.isShowAddWallet()
    }
    
    override func viewDidLayoutSubviews() {
        super.viewDidLayoutSubviews()
        addCollectionShadow()
    }
    
    override func traitCollectionDidChange(_ previousTraitCollection: UITraitCollection?) {
        super.traitCollectionDidChange(previousTraitCollection)
        addCollectionShadow()
    }
    
    private func addCollectionShadow() {
        collectionView.applyShadow(color: Asset.Colors.Shadow.socialShadow.color, alpha: 1, x: 0, y: 6, blur: 12, cornerRadius: 0, spread: 0)
    }
}

extension SelectAccountViewController: PanModalPresentable {
    var panScrollable: UIScrollView? {
        nil
    }
    
    var longFormHeight: PanModalHeight {
        let bottom = viewModel.type == .editEnable ? tableViewBottomConstant : 0
        let content = tableViewTopConstant + bottom + tableViewHeight * Double(viewModel.accountListSubject.value.count)
        return .contentHeight(content)
    }
}

extension SelectAccountViewController: UITableViewDelegate {
    func tableView(_ tableView: UITableView, didSelectRowAt indexPath: IndexPath) {
        guard let item = dataSource.itemIdentifier(for: indexPath) else { return }
        switch item {
        case .addWalletConnect:
            walletConnectClient.currentSelectedBlockchainNetworkSubject.value = viewModel.selectNetworkSubject.value
            mainCoordinator.present(
                scene: .walletConnectStart,
                transition: .panModel(animated: true))
            
        case let .account(data):
            WalletCoreService.shared.changeNetwork(network: data.network, account: data.account)
            DispatchQueue.main.asyncAfter(deadline: .now() + .milliseconds(300)) {
                self.dismiss(animated: true, completion: nil)
            }
        }
    }
}

extension SelectAccountViewController: SelectAccountTableViewCellDelegate {
    func walletTableViewCell(cell: SelectAccountTableViewCell, moreBtnClicked: UIButton) {
        guard let indexPath = tableView.indexPath(for: cell) else { return }
        guard let item = dataSource.itemIdentifier(for: indexPath) else { return }

        guard case let Item.account(data) = item else { return }
        
        mainCoordinator.present(
            scene: .walletEdit(account: data.account, sourceView: moreBtnClicked),
            transition: .panModel(animated: true))
    }
}

extension SelectAccountViewController: UICollectionViewDataSource {
    func collectionView(_ collectionView: UICollectionView, numberOfItemsInSection section: Int) -> Int {
        viewModel.networkItems.count
    }

    func collectionView(_ collectionView: UICollectionView, cellForItemAt indexPath: IndexPath) -> UICollectionViewCell {
        if let cell = collectionView.dequeueReusableCell(withReuseIdentifier: String(describing: SelectAccountChainItemCell.self),
                                                         for: indexPath) as? SelectAccountChainItemCell
        {
            let chain = viewModel.networkItems[indexPath.item]
            let isSelected = chain.chain == viewModel.selectNetworkSubject.value
            cell.configWith(chain: chain, isSelected: isSelected)
            return cell
        } else {
            return UICollectionViewCell()
        }
    }
}

extension SelectAccountViewController: UICollectionViewDelegate {
    func collectionView(_ collectionView: UICollectionView, didSelectItemAt indexPath: IndexPath) {
        let chain = viewModel.networkItems[indexPath.item]
        viewModel.selectNetworkSubject.value = chain.chain
    }
}

extension SelectAccountViewController: UICollectionViewDelegateFlowLayout {
    func collectionView(_ collectionView: UICollectionView,
                        layout collectionViewLayout: UICollectionViewLayout,
                        minimumInteritemSpacingForSectionAt section: Int) -> CGFloat
    {
        0
    }
    
    func collectionView(_ collectionView: UICollectionView,
                        layout collectionViewLayout: UICollectionViewLayout,
                        minimumLineSpacingForSectionAt section: Int) -> CGFloat
    {
        0
    }

    func collectionView(_ collectionView: UICollectionView,
                        layout collectionViewLayout: UICollectionViewLayout,
                        sizeForItemAt indexPath: IndexPath) -> CGSize
    {
        SelectAccountChainItemCell.itemSize
    }
}
