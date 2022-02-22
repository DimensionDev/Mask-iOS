//
//  WalletConnectSelectWalletViewController.swift
//  Maskbook
//
//  Created by xiaojian sun on 2021/9/22.
//  Copyright © 2021 dimension. All rights reserved.
//

import Combine
import Foundation
import UIKit
import UStack

class WalletConnectSelectWalletViewController: UIViewController {
    var disposeBag = Set<AnyCancellable>()
    let viewModel = WalletConnectSelectWalletViewModel()

    @InjectedProvider(\.walletConnectClient)
    private var walletConnectClient
    
    let collectionView: UICollectionView = {
        let flowLayout = WalletConnectCollectionFlowLayout()
        flowLayout.scrollDirection = .horizontal
        let collectionView = ControlContainableCollectionView(frame: .zero, collectionViewLayout: flowLayout)
        collectionView.backgroundColor = Asset.Colors.Background.dark.color
        collectionView.showsHorizontalScrollIndicator = false
        collectionView.showsVerticalScrollIndicator = false
        collectionView.layer.masksToBounds = false
        collectionView.translatesAutoresizingMaskIntoConstraints = false
        collectionView.isPagingEnabled = true
        return collectionView
    }()

    let blockChainNetworkButtonsView: ControlContainableScrollView = {
        let view = ControlContainableScrollView()
        view.showsHorizontalScrollIndicator = false
        view.translatesAutoresizingMaskIntoConstraints = false
        return view
    }()

    lazy var blockChainNetworkButtons = viewModel.supportBlockChainNetwork.map { blockChainNetwork in
        self.buttonFor(title: blockChainNetwork.shortName)
    }

    let buttonLeftArrow: UIButton = {
        let button = UIButton(type: .custom)
        button.setImage(Asset.Images.Scene.WalletConnect.arrowLeftCircle.image
            .withRenderingMode(.alwaysTemplate),
            for: .normal)
        button.isEnabled = false
        return button
    }()

    let buttonRightArrow: UIButton = {
        let button = UIButton(type: .custom)
        button.setImage(Asset.Images.Scene.WalletConnect.arrowRightCircle.image
            .withRenderingMode(.alwaysTemplate),
            for: .normal)
        button.isEnabled = true
        return button
    }()
    
    private lazy var emptyImageView: UIImageView = {
        let imageView = UIImageView()
        imageView.image = Asset.Images.Scene.Balance.emptyToken.image
        imageView.contentMode = .scaleAspectFit
        return imageView
    }()

    private lazy var emptyTipsLabel: UILabel = {
        let label = UILabel()
        label.textColor = Asset.Colors.Text.light.color
        label.font = FontStyles.MH6
        label.numberOfLines = 0
        label.textAlignment = .center
        return label
    }()

    private lazy var emptyView: UIStackView = VStackView(spacing: 11,
                                                         distribution: StackView.Distribution.fill,
                                                         alignment: StackView.Alignment.center) {
        emptyImageView
            .cv.apply {
                NSLayoutConstraint.activate([
                    $0.widthAnchor.constraint(equalToConstant: 64),
                    $0.heightAnchor.constraint(equalToConstant: 64)
                ])
            }
        emptyTipsLabel
            .cv.apply {
                NSLayoutConstraint.activate([
                    $0.widthAnchor.constraint(equalToConstant: 260)
                ])
            }
    }

    override func viewDidLoad() {
        super.viewDidLoad()
        setupButtonsView()
        setupCollectionView()
        setupEmptyView()
        subscribeSignal()
    }

    func subscribeSignal() {
        viewModel.wallets
            .receive(on: DispatchQueue.main)
            .sink { [weak self] _ in
                self?.reloadCollectionView()
            }
            .store(in: &disposeBag)

        buttonLeftArrow.publisher(for: \.isEnabled)
            .receive(on: DispatchQueue.main)
            .sink { [weak self] _ in
                guard let self = self else { return }
                if self.buttonLeftArrow.isEnabled {
                    self.buttonLeftArrow.tintColor = Asset.Colors.Text.normal.color
                } else {
                    self.buttonLeftArrow.tintColor = Asset.Colors.Background.disable.color
                }
            }
            .store(in: &disposeBag)

        buttonLeftArrow
            .cv.tap()
            .sink { [weak self] _ in
                guard let self = self else { return }
                let contentOffset = self.collectionView.contentOffset
                self.collectionView.setContentOffset(
                    CGPoint(x: contentOffset.x - self.collectionView.frame.width, y: 0),
                    animated: true)
                DispatchQueue.main.asyncAfter(deadline: .now() + 0.3) {
                    self.scrollViewDidEndDecelerating(self.collectionView)
                }
            }
            .store(in: &disposeBag)

        buttonRightArrow.publisher(for: \.isEnabled)
            .receive(on: DispatchQueue.main)
            .sink { [weak self] _ in
                guard let self = self else { return }
                if self.buttonRightArrow.isEnabled {
                    self.buttonRightArrow.tintColor = Asset.Colors.Text.normal.color
                } else {
                    self.buttonRightArrow.tintColor = Asset.Colors.Background.disable.color
                }
            }
            .store(in: &disposeBag)

        buttonRightArrow
            .cv.tap()
            .sink { [weak self] _ in
                guard let self = self else { return }
                let contentOffset = self.collectionView.contentOffset
                self.collectionView.setContentOffset(
                    CGPoint(x: max(0, contentOffset.x + self.collectionView.frame.width), y: 0),
                    animated: true)
                DispatchQueue.main.asyncAfter(deadline: .now() + 0.3) {
                    self.scrollViewDidEndDecelerating(self.collectionView)
                }
            }
            .store(in: &disposeBag)
    }
    
    func reloadCollectionView() {
        collectionView.collectionViewLayout.invalidateLayout()
        collectionView.reloadData()
        buttonLeftArrow.isHidden = viewModel.wallets.value.count <= 1
        buttonRightArrow.isHidden = viewModel.wallets.value.count <= 1
        emptyTipsLabel.text = L10n.Scene.WalletConnect.noWallets(self.walletConnectClient.currentSelectedBlockchainNetworkSubject.value.shortName)
        emptyView.isHidden = !viewModel.wallets.value.isEmpty
    }

    func setupButtonsView() {
        let blockChainButtonWidth = CGFloat(64)
        let blockChainButtonSpace = CGFloat(6)
        view.addSubview(blockChainNetworkButtonsView)
        NSLayoutConstraint.activate([
            blockChainNetworkButtonsView.frameLayoutGuide.topAnchor.constraint(equalTo: view.topAnchor, constant: 17),
            blockChainNetworkButtonsView.frameLayoutGuide.leadingAnchor.constraint(equalTo: view.leadingAnchor, constant: 23),
            blockChainNetworkButtonsView.frameLayoutGuide.trailingAnchor.constraint(equalTo: view.trailingAnchor, constant: -23),
            blockChainNetworkButtonsView.frameLayoutGuide.heightAnchor.constraint(equalToConstant: 36),
            blockChainNetworkButtonsView.contentLayoutGuide.widthAnchor.constraint(equalToConstant: CGFloat(blockChainNetworkButtons.count) * (blockChainButtonWidth + blockChainButtonSpace)),
            blockChainNetworkButtonsView.contentLayoutGuide.heightAnchor.constraint(equalTo: blockChainNetworkButtonsView.frameLayoutGuide.heightAnchor)
        ])

        for (i, button) in blockChainNetworkButtons.enumerated() {
            if i == 0 {
                button.isSelected = true
            }
            button.frame = CGRect(origin: CGPoint(x: CGFloat(i) * (blockChainButtonWidth + blockChainButtonSpace), y: 0), size: CGSize(width: blockChainButtonWidth, height: 36))
            blockChainNetworkButtonsView.addSubview(button)
            button
                .cv.tap()
                .sink { [weak self] _ in
                    guard let self = self else { return }
                    self.walletConnectClient.currentSelectedBlockchainNetworkSubject.value = self.viewModel.supportBlockChainNetwork[i]
                    self.blockChainNetworkButtons.forEach { $0.isSelected = false }
                    button.isSelected = true
                }
                .store(in: &disposeBag)
        }
        
        walletConnectClient.currentSelectedBlockchainNetworkSubject
            .sink { [weak self] blockChainNetwork in
                guard let self = self else { return }
                if let index = self.viewModel.supportBlockChainNetwork.firstIndex(of: blockChainNetwork) {
                    self.blockChainNetworkButtons.forEach { $0.isSelected = false }
                    self.blockChainNetworkButtons[index].isSelected = true
                }
            }
            .store(in: &disposeBag)
    }

    func setupCollectionView() {
        collectionView.register(WalletConnectWalletCell.self)
        collectionView.delegate = self
        collectionView.dataSource = self
        collectionView.applyCornerRadius(radius: 8)

        view.addSubview(collectionView)
        NSLayoutConstraint.activate([
            collectionView.frameLayoutGuide.leadingAnchor.constraint(equalTo: view.leadingAnchor, constant: 23),
            collectionView.frameLayoutGuide.trailingAnchor.constraint(equalTo: view.trailingAnchor, constant: -23),
            collectionView.frameLayoutGuide.topAnchor.constraint(
                equalTo: blockChainNetworkButtonsView.bottomAnchor,
                constant: 16),
            collectionView.frameLayoutGuide.bottomAnchor.constraint(equalTo: view.bottomAnchor, constant: -23),
            collectionView.frameLayoutGuide.heightAnchor.constraint(equalToConstant: 413).priority(.defaultHigh - 1),
            collectionView.contentLayoutGuide.widthAnchor.constraint(equalTo: collectionView.frameLayoutGuide.widthAnchor),
            collectionView.contentLayoutGuide.heightAnchor.constraint(equalTo: collectionView.frameLayoutGuide.heightAnchor)
        ])

        view.withSubViews {
            buttonLeftArrow
            buttonRightArrow
        }
        NSLayoutConstraint.activate([
            buttonLeftArrow.bottomAnchor.constraint(equalTo: collectionView.frameLayoutGuide.bottomAnchor, constant: -22),
            buttonLeftArrow.heightAnchor.constraint(equalToConstant: 25),
            buttonLeftArrow.widthAnchor.constraint(equalToConstant: 25),
            buttonLeftArrow.centerXAnchor.constraint(equalTo: collectionView.centerXAnchor, constant: -20)
        ])

        NSLayoutConstraint.activate([
            buttonRightArrow.bottomAnchor.constraint(equalTo: collectionView.frameLayoutGuide.bottomAnchor, constant: -22),
            buttonRightArrow.heightAnchor.constraint(equalToConstant: 25),
            buttonRightArrow.widthAnchor.constraint(equalToConstant: 25),
            buttonRightArrow.centerXAnchor.constraint(equalTo: collectionView.centerXAnchor, constant: 20)
        ])
    }
    
    func setupEmptyView() {
        view.withSubViews {
            emptyView
        }
        NSLayoutConstraint.activate([
            emptyView.centerXAnchor.constraint(equalTo: collectionView.centerXAnchor),
            emptyView.centerYAnchor.constraint(equalTo: collectionView.centerYAnchor)
        ])
    }

    func buttonFor(title: String) -> UIButton {
        let button = UIButton(type: .custom)
        button.setBackgroundImage(
            UIImage.placeholder(
                color: Asset.Colors.Public.blue.color.withAlphaComponent(0.1)),
            for: .selected)
        button.setBackgroundImage(UIImage.placeholder(color: UIColor.clear), for: .normal)
        button.setTitle(title, for: .normal)
        button.titleLabel?.font = FontStyles.MH6
        button.setTitleColor(Asset.Colors.Text.link.color, for: .selected)
        button.setTitleColor(Asset.Colors.Text.normal.color, for: .normal)
        button.applyCornerRadius(radius: 8)
        NSLayoutConstraint.activate([
            button.heightAnchor.constraint(equalToConstant: 36),
            button.widthAnchor.constraint(equalToConstant: 64)
        ])
        return button
    }
}

extension WalletConnectSelectWalletViewController: UICollectionViewDelegate {
    func collectionView(_ collectionView: UICollectionView, didSelectItemAt indexPath: IndexPath) {
        let app = viewModel.wallets.value[indexPath.section][indexPath.row]
        WalletConnectClient.connectWithInstalledWallet(app)
        
        parent?.dismiss(animated: false) {
            Coordinator.main.present(scene: .walletConnectConnecting, transition: .panModel(animated: false))
        }
    }
}

extension WalletConnectSelectWalletViewController: UICollectionViewDataSource {
    func numberOfSections(in collectionView: UICollectionView) -> Int {
        if !viewModel.wallets.value.isEmpty {
            return viewModel.wallets.value.count
        } else {
            return 1
        }
    }

    func collectionView(_ collectionView: UICollectionView, numberOfItemsInSection section: Int) -> Int {
        if let count = viewModel.wallets.value[safeIndex: section]?.count {
            return count
        } else {
            return 0
        }
    }

    func collectionView(_ collectionView: UICollectionView, cellForItemAt indexPath: IndexPath) -> UICollectionViewCell {
        let cell: WalletConnectWalletCell = collectionView.dequeCell(at: indexPath)
        let wallet = viewModel.wallets.value[indexPath.section][indexPath.row]
        cell.configWith(wallet: wallet)

        return cell
    }
}

extension WalletConnectSelectWalletViewController: UIScrollViewDelegate {
    func scrollViewDidEndDecelerating(_ scrollView: UIScrollView) {
        let contentOffset = scrollView.contentOffset

        buttonLeftArrow.isEnabled = contentOffset.x != 0
        buttonRightArrow.isEnabled = contentOffset.x != (scrollView.contentSize.width - scrollView.frame.width)
    }
}
