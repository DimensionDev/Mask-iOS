//
//  OpenRedPackageViewController.swift
//  Maskbook
//
//  Created by xiaojian sun on 2022/1/25.
//  Copyright © 2022 dimension. All rights reserved.
//

import Combine
import Foundation
import PanModal
import UIKit
import UStack
import WalletConnectSwift

protocol OpenRedPackageViewControllerDelegate: AnyObject {
    func openRedPackageViewController(didFinishClaim viewController: OpenRedPackageViewController,
                                      requestId: String)
}

class OpenRedPackageViewController: BaseViewController {
    
    weak var delegate: OpenRedPackageViewControllerDelegate?
    var requestId: String?
    
    private var disposeBag = Set<AnyCancellable>()
    
    private let viewModel: OpenRedPackageViewModel
    
    @InjectedProvider(\.userDefaultSettings)
    private var userSetting
    
    @InjectedProvider(\.mainCoordinator)
    private var coordinator: Coordinator
    
    @InjectedProvider(\.walletAssetManager)
    private var walletAssetManager: WalletAssetManager
    
    private lazy var titleLabel: UILabel = {
        let label = UILabel()
        label.font = FontStyles.BH4
        label.textColor = Asset.Colors.Twitter.strong.color
        label.textAlignment = .center
        label.numberOfLines = 2
        label.text = L10n.Scene.OpenRedPackage.title
        return label
    }()
    
    private lazy var redPackageView: RedPackageView = {
        let view = RedPackageView()
        view.applyCornerRadius(radius: 12)
        NSLayoutConstraint.activate([
            view.heightAnchor.constraint(equalToConstant: 236)
        ])
        return view
    }()
    
    private lazy var walletLabel: UILabel = {
        let label = UILabel()
        label.font = FontStyles.BH3
        label.textColor = Asset.Colors.Twitter.strong.color
        label.text = L10n.Scene.OpenRedPackage.wallet
        label.textAlignment = .left
        return label
    }()

    private lazy var walletNetworkContainer: UIView = {
        let view = UIView()
        NSLayoutConstraint.activate([
            view.widthAnchor.constraint(equalToConstant: 42),
            view.heightAnchor.constraint(equalToConstant: 38)
        ])
        view.withSubViews {
            walletIconView
            networkIconView
        }
        NSLayoutConstraint.activate([
            walletIconView.topAnchor.constraint(equalTo: view.topAnchor),
            walletIconView.leadingAnchor.constraint(equalTo: view.leadingAnchor),
            networkIconView.bottomAnchor.constraint(equalTo: view.bottomAnchor),
            networkIconView.trailingAnchor.constraint(equalTo: view.trailingAnchor)
        ])
        return view
    }()
    
    private lazy var walletIconView: UIImageView = {
        let view = UIImageView()
        view.applyCornerRadius(radius: 19)
        NSLayoutConstraint.activate([
            view.widthAnchor.constraint(equalToConstant: 38),
            view.heightAnchor.constraint(equalToConstant: 38)
        ])
        return view
    }()
    
    private lazy var networkIconView: UIImageView = {
        let view = UIImageView()
        NSLayoutConstraint.activate([
            view.heightAnchor.constraint(equalToConstant: 18),
            view.widthAnchor.constraint(equalToConstant: 18)
        ])
        view.applyCornerRadius(radius: 9)
        view.layer.borderColor = Asset.Colors.Background.normal.color.cgColor
        view.layer.borderWidth = 1
        return view
    }()

    private lazy var addressLabel: UILabel = {
        let label = UILabel()
        label.font = FontStyles.MH5
        label.textColor = Asset.Colors.Twitter.second.color
        label.textAlignment = .center
        label.lineBreakMode = .byTruncatingMiddle
        return label
    }()
    
    private lazy var balanceLabel: UILabel = {
        let label = UILabel()
        label.font = FontStyles.BH6
        label.textColor = Asset.Colors.Text.dark.color
        label.textAlignment = .center
        label.lineBreakMode = .byTruncatingMiddle
        return label
    }()

    private lazy var arrowImage: UIImageView = {
        let imageView = UIImageView()
        imageView.contentMode = .scaleAspectFit
        imageView.image = Asset.Icon.Arrows.celllRight.image
        return imageView
    }()
    
    private lazy var button: TertiaryButton = {
        let button = TertiaryButton(title: L10n.Scene.OpenRedPackage.claim)
//        button.setTitle(L10n.Scene.OpenRedPackage.wrongNetwork, for: .disabled)
        return button
    }()
    
    lazy var selectionStack: HStackView = {
        let vStack = VStackView(spacing: 8, distribution: .fill, alignment: .leading) {
            addressLabel
            balanceLabel
        }
        
        let stack = HStackView(spacing: 8, distribution: .fill, alignment: .center) {
            walletNetworkContainer
            vStack
            UStack.Spacer(height: nil, width: 1)
            arrowImage
                .cv.apply {
                    NSLayoutConstraint.activate([
                        $0.heightAnchor.constraint(equalToConstant: 14),
                        $0.widthAnchor.constraint(equalToConstant: 7)
                    ])
                }
        }
        stack.isLayoutMarginsRelativeArrangement = true
        stack.layoutMargins = UIEdgeInsets(top: 12, left: 12, bottom: 12, right: 12)
        
        stack.applyCornerRadius(radius: 8)
        stack.layer.borderColor = Asset.Colors.RedPackage.border.color.cgColor
        stack.layer.borderWidth = 1
        return stack
    }()
        
    init(viewModel: OpenRedPackageViewModel,
         delegate: OpenRedPackageViewControllerDelegate?,
         requestId: String) {
        self.viewModel = viewModel
        super.init(nibName: nil, bundle: nil)
        self.delegate = delegate
        self.requestId = requestId
    }
    
    @available(*, unavailable)
    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
    
    override func viewDidLoad() {
        super.viewDidLoad()
        fillValueToUIComponent()
        fillValueToRedPackage()
        addContent()
        subscribeSignal()
        getDefaultMainTokenBalance()
        
        viewModel.confirmState.sink { [weak self] state in
            self?.updateButtonTitle(confirmState: state)
//            self?.button.isEnabled = state.isEnabled
        }
        .store(in: &disposeBag)
    }
    
    override func viewDidDisappear(_ animated: Bool) {
        super.viewDidDisappear(animated)
        guard let requestId = requestId else {
            return
        }

        delegate?.openRedPackageViewController(didFinishClaim: self, requestId: requestId)
    }
    
    override func viewDidAppear(_ animated: Bool) {
        super.viewDidAppear(animated)
        updateButtonTitle(confirmState: viewModel.confirmState.value)
    }
    
    func getDefaultMainTokenBalance() {
        if let token = walletAssetManager.getDefaultMainToken() {
            balanceLabel.text = " \(token.displayQuantity ?? .zero) \(userSetting.network.mainToken?.symbol ?? "")"
        } else {
            balanceLabel.text = " \(0) \(userSetting.network.mainToken?.symbol ?? "")"
        }
    }
    
    func subscribeSignal() {
//        button
//            .cv.tap()
//            .sink { [weak self] in
//                guard let self = self else { return }
//                Task {
//                    await self.claimAction()
//                }
//            }
//            .store(in: &disposeBag)
        
        Publishers.CombineLatest(userSetting.networkPubisher, userSetting.defaultAccountAddressPublisher)
            .receive(on: DispatchQueue.main)
            .sink { [weak self] _ in
                guard let self = self else { return }
                self.fillValueToUIComponent()
                self.getDefaultMainTokenBalance()
            }
            .store(in: &disposeBag)
        
        selectionStack
            .cv.tapGesture()
            .sink { [weak self] _ in
                self?.coordinator.present(scene: .redPackageSelectAccount,
                                          transition: .panModel(animated: true))
            }
            .store(in: &disposeBag)
    }
    
    func fillValueToRedPackage() {
        viewModel.payloadSubject.sink { [weak self] payload in
            self?.redPackageView.updateWithPayload(payload: payload)
        }
        .store(in: &disposeBag)
    }
    
    func fillValueToUIComponent() {
        guard let address = userSetting.defaultAccountAddress,
              let account = WalletCoreService.shared.getAccount(address: address)
        else {
            return
        }
        let name = account.name ?? ""
        addressLabel.text = "\(name)(\(address))"
        if account.fromWalletConnect {
            walletIconView.image = Asset.Images.Scene.WalletConnect.walletConnect.image
        } else {
            walletIconView.image = Asset.Icon.Logo.littleMask.image
        }
        networkIconView.image = userSetting.network.selectedIcon
        if let network = viewModel.payloadSubject.value.blockchainNetwork {
            button.isEnabled = network == userSetting.network
        }
    }
    
    func addContent() {
        let vStack = VStackView(spacing: 24, distribution: .fill, alignment: .fill) {
            titleLabel
            redPackageView
            walletLabel
            selectionStack
                .cv.apply {
                    NSLayoutConstraint.activate([
                        $0.widthAnchor.constraint(equalToConstant: UIScreen.main.bounds.width),
                        $0.heightAnchor.constraint(equalToConstant: 77)
                    ])
                }
            button
                .cv.apply {
                    NSLayoutConstraint.activate([
                        $0.heightAnchor.constraint(equalToConstant: 48)
                    ])
                }
        }
        vStack.isLayoutMarginsRelativeArrangement = true
        vStack.layoutMargins = UIEdgeInsets(top: 38, left: 22.5, bottom: 40, right: 22.5)
        vStack.setCustomSpacing(21, after: titleLabel)
        vStack.setCustomSpacing(16, after: redPackageView)
        vStack.setCustomSpacing(8, after: walletLabel)
        vStack.setCustomSpacing(24, after: selectionStack)
        view.withSubViews {
            vStack
        }
        
        NSLayoutConstraint.activate([
            vStack.topAnchor.constraint(equalTo: view.topAnchor),
            vStack.leadingAnchor.constraint(equalTo: view.leadingAnchor),
            vStack.trailingAnchor.constraint(equalTo: view.trailingAnchor),
            vStack.bottomAnchor.constraint(equalTo: view.readableContentGuide.bottomAnchor)
        ])
        
        button.addTarget(self, action: #selector(buttonAction(sender:)), for: .touchUpInside)
    }
    
    override func traitCollectionDidChange(_ previousTraitCollection: UITraitCollection?) {
        super.traitCollectionDidChange(previousTraitCollection)
        networkIconView.layer.borderColor = Asset.Colors.Background.normal.color.cgColor
        selectionStack.layer.borderColor = Asset.Colors.RedPackage.border.color.cgColor
    }
}

extension OpenRedPackageViewController {
    func updateButtonTitle(confirmState: OpenRedPackageViewModel.ConfirmState) {
        guard let address = WalletCoreService.shared.getCurrentAccount()?.address else {
            return
        }
        let network = WalletCoreStorage.getCurrentNetwork()
        if let currentClaimingRedpacket = Web3TransactionReceiptManger.shared.currentRedPack {
            button.setTitle(L10n.Scene.OpenRedPackage.claiming, for: .disabled)
            button.isEnabled = false
            return
        }
        let redpacketPayload: RedPacketInteractivePayload = {
            if let currentClaimingRedpacket = Web3TransactionReceiptManger.shared.currentRedPack {
                return currentClaimingRedpacket.payload
            }
            return viewModel.payloadSubject.value
        }()
        
        let status = redpacketPayload.parseStatus(accountAddress: address, network: network)
        if case .claiming = confirmState {
            button.setTitle(L10n.Scene.OpenRedPackage.claiming, for: .disabled)
            button.isEnabled = false
            button.indicator.startAnimating()
            return
        } else {
            button.indicator.stopAnimating()
            if case .onGoing = confirmState {
                button.isEnabled = true
                if status.canClaim {
                    button.setTitle(L10n.Scene.OpenRedPackage.claim, for: .normal)
                } else {
                    button.setTitle(L10n.Scene.OpenRedPackage.refunded, for: .normal)
                }
            } else {
                button.setTitle(confirmState.title, for: .disabled)
                button.isEnabled = false
            }
        }
    }
    
    @objc
    func buttonAction(sender: UIButton) {
        Task {
            viewModel.confirmState.send(.claiming)
            await claimAction()
            viewModel.confirmState.send(.onGoing)
        }
    }
    
    func claimAction() async {
        guard let address = WalletCoreService.shared.getCurrentAccount()?.address else {
            return
        }
        let network = WalletCoreStorage.getCurrentNetwork()
        let status = viewModel.payloadSubject.value.parseStatus(accountAddress: address, network: network)
        let payload = viewModel.payloadSubject.value.redpacketPayload
        switch payload {
        case .either(let tokenPayload):
            guard let rpid = tokenPayload.basic?.rpid,
                  let password = tokenPayload.basic?.password else {
                      showUnknownError(message: "Broken payload")
                      return
                  }
            
            log.debug("start get tx hash", source: "red-packet")
            let txHash: String? = await {
                if status.canClaim {
                    return await ABI.happyRedPacketV4.claim(rid: rpid, password: password)
                } else {
                    return await ABI.happyRedPacketV4.refund(rid: rpid)
                }
            }()
            log.debug("txHash: \(txHash)", source: "red-packet")
            guard let txHash = txHash else {
                showUnknownError(message: "Fail to execute the contract")
                return
            }
            log.debug("start to getTransactionReceipt", source: "red-packet")
            Web3TransactionReceiptManger.shared.getTransactionReceipt(txHash: txHash, payload: viewModel.payloadSubject.value)
            
        case .or( _):
            break
        }
    }
    
    @MainActor
    func showUnknownError(message: String) {
        let alertController = AlertController(title: message, message: "", confirmButtonText: L10n.Common.Controls.done, imageType: .error)
        Coordinator.main.present(scene: .alertController(alertController: alertController), transition: .alertController(completion: nil))
    }
    
    func switchNetworkAction() {
        
    }
    
    func confirmRiskWarningAction() {
        
    }
}

extension OpenRedPackageViewController: PanModalPresentable {
    var panScrollable: UIScrollView? {
        nil
    }

    var longFormHeight: PanModalHeight {
        .intrinsicHeight
    }
}
