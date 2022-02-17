//
//  WalletConnectServerConfirmViewController.swift
//  Maskbook
//
//  Created by sxiaojian on 2021/12/6.
//  Copyright © 2021 dimension. All rights reserved.
//

import Combine
import Foundation
import PanModal
import UIKit
import UStack
import WalletConnectSwift

class WalletConnectServerConfirmViewController: BaseViewController {
    private var disposeBag = Set<AnyCancellable>()
    
    private let viewModel: WalletConnectServerConfirmViewModel
    
    @InjectedProvider(\.userDefaultSettings)
    private var userSetting
    
    @InjectedProvider(\.mainCoordinator)
    private var coordinator: Coordinator
    
    private lazy var dAppImageView: CollectibleIconImageView = {
        let imageView = CollectibleIconImageView()
        imageView.applyCornerRadius(radius: 32)
        return imageView
    }()
    
    private lazy var titleLabel: UILabel = {
        let label = UILabel()
        label.font = FontStyles.BH4
        label.textColor = Asset.Colors.Text.dark.color
        label.textAlignment = .center
        label.numberOfLines = 2
        return label
    }()
    
    private lazy var dAppURLLabel: UILabel = {
        let label = UILabel()
        label.font = FontStyles.BH4
        label.textColor = Asset.Colors.Public.blue.color
        label.textAlignment = .center
        return label
    }()
    
    private lazy var addressLabel: UILabel = {
        let label = UILabel()
        label.font = FontStyles.BH5
        label.textColor = Asset.Colors.Text.dark.color
        label.textAlignment = .center
        label.lineBreakMode = .byTruncatingMiddle
        return label
    }()
    
    private lazy var networkValueLabel: UILabel = {
        let label = UILabel()
        label.font = FontStyles.MH5
        label.textColor = Asset.Colors.Public.blue.color
        label.textAlignment = .center
        return label
    }()
    
    private lazy var arrowImage: UIImageView = {
        let imageView = UIImageView()
        imageView.contentMode = .scaleAspectFit
        imageView.image = Asset.Icon.Arrows.celllRight.image
        return imageView
    }()
    
    private lazy var cancelButton = SecondaryButton(title: L10n.Common.Controls.cancel)
    
    private lazy var connectButton = PrimeryButton(title: L10n.Scene.WalletConnectServer.connect)
    
    lazy var selectionStack: HStackView = {
        let vStack = VStackView(spacing: 8, distribution: .fill, alignment: .leading) {
            networkValueLabel
            addressLabel
                .cv.apply {
                    NSLayoutConstraint.activate([
                        $0.widthAnchor.constraint(lessThanOrEqualToConstant: 154)
                    ])
                }
        }
        
        let stack = HStackView(spacing: 0, distribution: .fill, alignment: .center) {
            vStack
            UStack.Spacer()
            arrowImage
                .cv.apply {
                    NSLayoutConstraint.activate([
                        $0.heightAnchor.constraint(equalToConstant: 14),
                        $0.widthAnchor.constraint(equalToConstant: 7)
                    ])
                }
        }
        stack.isLayoutMarginsRelativeArrangement = true
        stack.layoutMargins = UIEdgeInsets(top: 0, left: 22.5, bottom: 0, right: 22.5)
        
        return stack
    }()
        
    init(viewModel: WalletConnectServerConfirmViewModel) {
        self.viewModel = viewModel
        super.init(nibName: nil, bundle: nil)
    }
    
    @available(*, unavailable)
    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
    
    override func viewDidLoad() {
        super.viewDidLoad()
        fillValueToUIComponent()
        addContent()
        subscribeSignal()
    }
    
    func subscribeSignal() {
        cancelButton
            .cv.tap()
            .sink { [weak self] in
                guard let self = self else { return }
                if let cancelAction = self.viewModel.cancelAction {
                    cancelAction()
                }
                self.dismiss(animated: true, completion: nil)
            }
            .store(in: &disposeBag)
        
        connectButton
            .cv.tap()
            .sink { [weak self] in
                guard let self = self else { return }
                if let connectAction = self.viewModel.connectAction, let address = self.userSetting.defaultAccountAddress {
                    connectAction(address, Int(self.userSetting.network.networkId))
                }
                self.dismiss(animated: true, completion: nil)
            }
            .store(in: &disposeBag)
        
        Publishers.CombineLatest(userSetting.networkPubisher, userSetting.defaultAccountAddressPublisher)
            .receive(on: DispatchQueue.main)
            .sink { [weak self] _ in
                guard let self = self else { return }
                if let currentAccount = WalletCoreService.shared.getCurrentAccount() {
                    let isFromWalletConnect = currentAccount.fromWalletConnect
                    self.connectButton.isEnabled = !isFromWalletConnect
                    self.addressLabel.alpha = isFromWalletConnect ? 0.5 : 1
                    self.networkValueLabel.alpha = isFromWalletConnect ? 0.5 : 1
                }
                self.addressLabel.text = self.userSetting.defaultAccountAddress
                self.networkValueLabel.attributedText = self.networkAttributeString()
            }
            .store(in: &disposeBag)
        
        selectionStack
            .cv.tapGesture()
            .sink { [weak self] _ in
                self?.coordinator.present(scene: .walletConnectSelectAccount, transition: .panModel(animated: true))
            }
            .store(in: &disposeBag)
    }
    
    func fillValueToUIComponent() {
        if let icon = viewModel.dappInfo.icons.first?.absoluteString {
            dAppImageView.setImageUrl(icon)
        }

        titleLabel.attributedText = titleAttributeString()
        
        dAppURLLabel.text = viewModel.dappInfo.url.absoluteString
        addressLabel.text = userSetting.defaultAccountAddress
        networkValueLabel.attributedText = networkAttributeString()
    }
    
    func titleAttributeString() -> NSAttributedString {
        let words = L10n.Scene.WalletConnectServer.wantToConnect(viewModel.dappInfo.name)
        let attributeString = NSMutableAttributedString()
        let attribute = NSAttributedString(string: words,
                                           attributes: [.foregroundColor: Asset.Colors.Text.normal.color,
                                                        .font: FontStyles.BH5])
        attributeString.append(attribute)
        attributeString.addAttribute(color: Asset.Colors.Text.dark.color, keywords: viewModel.dappInfo.name)
        return attributeString
    }
    
    func networkAttributeString() -> NSAttributedString? {
        guard let address = userSetting.defaultAccountAddress,
              let account = WalletCoreService.shared.getAccount(address: address)
        else {
            return nil
        }
        let name = account.name ?? ""
        let words = "\(name)(\(userSetting.network.name))"
        let attributeString = NSMutableAttributedString()
        let attribute = NSAttributedString(string: words,
                                           attributes: [.foregroundColor: Asset.Colors.Text.main.color,
                                                        .font: FontStyles.MH5])
        attributeString.append(attribute)
        attributeString.addAttribute(color: Asset.Colors.Text.normal.color, keywords: name)
        return attributeString
    }
    
    func addContent() {
        let buttonSpace: CGFloat = 20
        let buttonLeftMargin: CGFloat = 22.5
        let buttonWidth = (UIScreen.main.bounds.width - buttonLeftMargin * 2 - buttonSpace) / 2
        let hStack = HStackView(spacing: 15, distribution: .fill, alignment: .center) {
            cancelButton
                .cv.apply {
                    NSLayoutConstraint.activate([
                        $0.heightAnchor.constraint(equalToConstant: 54),
                        $0.widthAnchor.constraint(equalToConstant: buttonWidth)
                    ])
                }
            connectButton
                .cv.apply {
                    NSLayoutConstraint.activate([
                        $0.heightAnchor.constraint(equalToConstant: 54),
                        $0.widthAnchor.constraint(equalToConstant: buttonWidth)
                    ])
                }
        }
        hStack.isLayoutMarginsRelativeArrangement = true
        hStack.layoutMargins = UIEdgeInsets(top: 0, left: buttonLeftMargin, bottom: 0, right: buttonLeftMargin)
        let vStack = VStackView(spacing: 24, distribution: .fill, alignment: .center) {
            UStack.Spacer(height: 25, width: nil)
            dAppImageView
                .cv.apply {
                    NSLayoutConstraint.activate([
                        $0.heightAnchor.constraint(equalToConstant: 64),
                        $0.widthAnchor.constraint(equalToConstant: 64)
                    ])
                }
            titleLabel
                .cv.apply {
                    NSLayoutConstraint.activate([
                        $0.widthAnchor.constraint(lessThanOrEqualToConstant: 236)
                    ])
                }
            dAppURLLabel
            selectionStack
                .cv.apply {
                    NSLayoutConstraint.activate([
                        $0.widthAnchor.constraint(equalToConstant: UIScreen.main.bounds.width)
                    ])
                }
            hStack
            UStack.Spacer()
        }
        
        view.withSubViews {
            vStack
        }
        
        NSLayoutConstraint.activate([
            vStack.topAnchor.constraint(equalTo: view.topAnchor),
            vStack.leadingAnchor.constraint(equalTo: view.leadingAnchor),
            vStack.trailingAnchor.constraint(equalTo: view.trailingAnchor),
            vStack.bottomAnchor.constraint(equalTo: view.bottomAnchor)
        ])
    }
}

extension WalletConnectServerConfirmViewController: PanModalPresentable {
    var panScrollable: UIScrollView? {
        nil
    }

    var longFormHeight: PanModalHeight {
        .contentHeight(412)
    }
}
