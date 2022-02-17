//
//  AccountCardView.swift
//  Maskbook
//
//  Created by BradGao on 2021/6/4.
//  Copyright © 2021 dimension. All rights reserved.
//

import Combine
import CoreDataStack
import UIKit

protocol AccountCardViewDelegate: AnyObject {
    func moreButtonDidClick(view: AccountCardView, button: UIButton)
}

class AccountCardView: UIView {
    @InjectedProvider(\.userDefaultSettings)
    private var userSetting
    
    @InjectedProvider(\.walletAssetManager)
    private var walletAssetManager: WalletAssetManager
    
    weak var delegate: AccountCardViewDelegate?
    private var disposeBag = Set<AnyCancellable>()
    
    private let cornerRadiusValue: CGFloat = 26
    
    private var backgroundLayer: CAGradientLayer = {
        let layer1 = CAGradientLayer()
        layer1.colors = [
            Asset.Colors.AccountCard.background1.color.cgColor,
            Asset.Colors.AccountCard.background2.color.cgColor
        ]
        layer1.locations = [0, 1]
        layer1.startPoint = CGPoint(x: 0, y: 1)
        layer1.endPoint = CGPoint(x: 1, y: 0)
        layer1.cornerRadius = 26
        layer1.masksToBounds = true
        return layer1
    }()
    
    private var maskImageView1: UIImageView = {
        let mask = UIImageView()
        mask.image = Asset.Images.Scene.Balance.accountBgMask1.image
        mask.contentMode = .scaleAspectFill
        mask.translatesAutoresizingMaskIntoConstraints = false
        return mask
    }()
    
    private var maskImageView2: UIImageView = {
        let mask = UIImageView()
        mask.image = Asset.Images.Scene.Balance.accountBgMask2.image
        mask.contentMode = .scaleAspectFill
        mask.translatesAutoresizingMaskIntoConstraints = false
        return mask
    }()
    
    private var wcMaskImageView: UIImageView = {
        let mask = UIImageView()
        mask.image = Asset.Images.Scene.Balance.accountBgWc.image
        mask.contentMode = .scaleAspectFill
        mask.translatesAutoresizingMaskIntoConstraints = false
        mask.isHidden = true
        return mask
    }()
    
    private var nameLabel: UILabel = {
        let label = UILabel()
        label.font = FontStyles.BH2
        label.textColor = Asset.Colors.AccountCard.nameText.color
        label.translatesAutoresizingMaskIntoConstraints = false
        return label
    }()
    
    private var networkBgView: UIView = {
        let view = UIView()
        view.backgroundColor = Asset.Colors.AccountCard.buttonBg.color
        view.applyCornerRadius(radius: 4)
        view.translatesAutoresizingMaskIntoConstraints = false
        return view
    }()
    
    private var networkIcon: UIImageView = {
        let imageView = UIImageView()
        imageView.contentMode = .scaleAspectFit
        imageView.translatesAutoresizingMaskIntoConstraints = false
        return imageView
    }()
    
    private var networkLabel: UILabel = {
        let label = UILabel()
        label.font = FontStyles.BH7
        label.textColor = Asset.Colors.AccountCard.nameText.color
        label.translatesAutoresizingMaskIntoConstraints = false
        return label
    }()
    
    private var moreButton: UIButton = {
        let button = UIButton(type: .system)
        button.tintColor = Asset.Colors.AccountCard.nameText.color
        button.setImage(Asset.Images.Scene.Balance.moreButton.image, for: .normal)
        button.translatesAutoresizingMaskIntoConstraints = false
        return button
    }()
    
    private var addressLabel: UILabel = {
        let label = UILabel()
        label.font = .systemFont(ofSize: 14, weight: .medium)
        label.textColor = Asset.Colors.AccountCard.addressText.color
        label.translatesAutoresizingMaskIntoConstraints = false
        return label
    }()
    
    private var copyButton: UIButton = {
        let button = HitTestExpandedButton(type: .system)
        button.tintColor = Asset.Colors.AccountCard.nameText.color
        button.setImage(Asset.Images.Scene.Balance.copyButton.image, for: .normal)
        button.translatesAutoresizingMaskIntoConstraints = false
        return button
    }()
    
    private var balanceLabel: UILabel = {
        let label = UILabel()
        label.font = .systemFont(ofSize: 32, weight: .semibold)
        label.textColor = .white
        label.translatesAutoresizingMaskIntoConstraints = false
        return label
    }()
    
    private var chainsStackView: UIStackView = {
        let stackView = UIStackView()
        stackView.axis = .horizontal
        stackView.alignment = .center
        stackView.distribution = .equalSpacing
        stackView.spacing = 16
        stackView.translatesAutoresizingMaskIntoConstraints = false
        return stackView
    }()
    
    override init(frame: CGRect) {
        super.init(frame: frame)
        setup()
        addAction()
    }
    
    @available(*, unavailable)
    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
    
    override func layoutSubviews() {
        super.layoutSubviews()
        backgroundLayer.frame = bounds
    }
    
    private func setup() {
        // 1. Apply corder radius
        applyCornerRadius(radius: cornerRadiusValue)
        // 2. Apply shadow
        applyShadow(color: Asset.Colors.Public.shadow.color,
                    alpha: 1,
                    x: 0,
                    y: 10,
                    blur: 35,
                    cornerRadius: cornerRadiusValue,
                    spread: 0)
        
        directionalLayoutMargins = NSDirectionalEdgeInsets(top: 20, leading: 16, bottom: 20, trailing: 16)
        
        layer.addSublayer(backgroundLayer)
        
        addSubview(maskImageView1)
        addSubview(maskImageView2)
        addSubview(wcMaskImageView)
        addSubview(nameLabel)
        addSubview(networkBgView)
        networkBgView.addSubview(networkIcon)
        networkBgView.addSubview(networkLabel)
        addSubview(moreButton)
        addSubview(addressLabel)
        addSubview(copyButton)
        addSubview(balanceLabel)
        addSubview(chainsStackView)
        
        NSLayoutConstraint.activate([
            maskImageView1.centerXAnchor.constraint(equalTo: self.centerXAnchor, constant: -4.5),
            maskImageView1.widthAnchor.constraint(equalTo: self.widthAnchor, multiplier: 407.0 / 330.0),
            maskImageView1.topAnchor.constraint(equalTo: self.topAnchor, constant: 0),
            maskImageView1.heightAnchor.constraint(equalTo: self.heightAnchor, multiplier: 166.0 / 158.0)
        ])
        
        NSLayoutConstraint.activate([
            maskImageView2.centerXAnchor.constraint(equalTo: self.centerXAnchor, constant: -10),
            maskImageView2.widthAnchor.constraint(equalTo: self.widthAnchor, multiplier: 406.0 / 330.0),
            maskImageView2.topAnchor.constraint(equalTo: self.topAnchor, constant: 30),
            maskImageView2.heightAnchor.constraint(equalTo: self.heightAnchor, multiplier: 134.0 / 158.0)
        ])
        
        NSLayoutConstraint.activate([
            nameLabel.topAnchor.constraint(equalTo: self.layoutMarginsGuide.topAnchor),
            nameLabel.leadingAnchor.constraint(equalTo: self.layoutMarginsGuide.leadingAnchor),
            nameLabel.heightAnchor.constraint(equalToConstant: 30)
        ])
        
        NSLayoutConstraint.activate([
            networkBgView.centerYAnchor.constraint(equalTo: nameLabel.centerYAnchor),
            networkBgView.leadingAnchor.constraint(equalTo: nameLabel.trailingAnchor, constant: 4),
            networkBgView.heightAnchor.constraint(equalToConstant: 18),
            networkBgView.trailingAnchor.constraint(equalTo: networkLabel.trailingAnchor, constant: 8),
            networkBgView.trailingAnchor.constraint(lessThanOrEqualTo: moreButton.leadingAnchor, constant: -8)
        ])
        
        NSLayoutConstraint.activate([
            wcMaskImageView.topAnchor.constraint(equalTo: self.topAnchor,
                                                 constant: 39),
            wcMaskImageView.trailingAnchor.constraint(equalTo: self.trailingAnchor),
            wcMaskImageView.widthAnchor.constraint(equalToConstant: 166),
            wcMaskImageView.heightAnchor.constraint(equalToConstant: 100)
        ])
        
        NSLayoutConstraint.activate([
            networkIcon.leadingAnchor.constraint(equalTo: networkBgView.leadingAnchor, constant: 8),
            networkIcon.centerYAnchor.constraint(equalTo: networkBgView.centerYAnchor),
            networkIcon.widthAnchor.constraint(equalToConstant: 9),
            networkIcon.heightAnchor.constraint(equalToConstant: 9)
        ])
        
        networkLabel.setContentCompressionResistancePriority(.required - 1, for: .horizontal)
        NSLayoutConstraint.activate([
            networkLabel.leadingAnchor.constraint(equalTo: networkIcon.trailingAnchor, constant: 4),
            networkLabel.centerYAnchor.constraint(equalTo: networkBgView.centerYAnchor),
        ])
        
        NSLayoutConstraint.activate([
            moreButton.topAnchor.constraint(equalTo: self.layoutMarginsGuide.topAnchor),
            moreButton.trailingAnchor.constraint(equalTo: self.layoutMarginsGuide.trailingAnchor),
            moreButton.widthAnchor.constraint(equalToConstant: 32),
            moreButton.heightAnchor.constraint(equalToConstant: 32)
        ])
        
        NSLayoutConstraint.activate([
            addressLabel.topAnchor.constraint(equalTo: nameLabel.bottomAnchor),
            addressLabel.leadingAnchor.constraint(equalTo: self.layoutMarginsGuide.leadingAnchor),
            addressLabel.heightAnchor.constraint(equalToConstant: 21)
        ])
        
        NSLayoutConstraint.activate([
            copyButton.widthAnchor.constraint(equalToConstant: 16),
            copyButton.heightAnchor.constraint(equalToConstant: 16),
            copyButton.centerYAnchor.constraint(equalTo: addressLabel.centerYAnchor),
            copyButton.leadingAnchor.constraint(equalTo: addressLabel.trailingAnchor, constant: 4)
        ])
        
        NSLayoutConstraint.activate([
            balanceLabel.topAnchor.constraint(equalTo: addressLabel.bottomAnchor, constant: 8),
            balanceLabel.leadingAnchor.constraint(equalTo: self.layoutMarginsGuide.leadingAnchor),
            balanceLabel.trailingAnchor.constraint(equalTo: self.layoutMarginsGuide.trailingAnchor),
            balanceLabel.heightAnchor.constraint(equalToConstant: 38)
        ])
        
        NSLayoutConstraint.activate([
            chainsStackView.topAnchor.constraint(equalTo: balanceLabel.bottomAnchor, constant: 20),
            chainsStackView.leadingAnchor.constraint(equalTo: self.layoutMarginsGuide.leadingAnchor),
            chainsStackView.heightAnchor.constraint(equalToConstant: 28)
        ])
        
        WalletDisplayBlockChainType.supportDisplayBlockChainTypes.forEach { blockChainType in
            let button = self.createBlockChainButton(displayBlockChainType: blockChainType)
            self.chainsStackView.addArrangedSubview(button)
        }
        
        copyButton.addTarget(self, action: #selector(copyButtonDidClick(sender:)), for: .touchUpInside)
    }
    
    @objc
    private func moreButtonDidClick(sender: UIButton) {
        delegate?.moreButtonDidClick(view: self, button: sender)
    }
    
    @objc
    private func copyButtonDidClick(sender: UIButton) {
        UIPasteboard.general.string = userSetting.defaultAccountAddress
        let alertController = AlertController(
            title: L10n.Common.Alert.WalletBackup.title,
            message: "",
            confirmButtonText: L10n.Common.Controls.done,
            imageType: .success,
            confirmButtonClicked: { _ in
            }
        )
        
        Coordinator.main.present(
            scene: .alertController(alertController: alertController),
            transition: .alertController(completion: nil)
        )
    }
    
    @objc
    private func blockChainButtonDidClicked(_ sender: UIButton) {
        guard let defaultWalletAccountAddress = userSetting.defaultAccountAddress else {
            return
        }
        guard let senderIndex = chainsStackView.arrangedSubviews.firstIndex(where: { subView in
            subView === sender
        }) else { return }
        
        guard Int(senderIndex) < WalletDisplayBlockChainType.supportDisplayBlockChainTypes.count else { return }
        let selectedBlockChain = WalletDisplayBlockChainType.supportDisplayBlockChainTypes[Int(senderIndex)]
        
        userSetting.walletDisplayBlockchain = selectedBlockChain
    }
    
    private func addAction() {
        moreButton.addTarget(self, action: #selector(moreButtonDidClick(sender:)), for: .touchUpInside)
    }
    
    private func createBlockChainButton(displayBlockChainType: WalletDisplayBlockChainType) -> UIButton {
        let button = UIButton(type: .system)
        button.setImage(displayBlockChainType.accountViewImage, for: .normal)
        button.addTarget(self, action: #selector(blockChainButtonDidClicked(_:)), for: .touchUpInside)
        return button
    }
    
    func setup(account: Account?, portfolio: Portfolio?) {
        if let portfolio = portfolio {
            portfolio
                .publisher(for: \.assetsValue)
                .filter { _ in
                    UserDefaultSettings.shared.walletDisplayBlockchain != .all
                }
                .receive(on: RunLoop.main)
                .sink { [weak self] value in
                    self?.balanceLabel.text = "\(maskUserDefaults.currency.symbol)\(value.currency)"
                }
                .store(in: &disposeBag)
        } else {
            // When porfolio is nil, try to calculate the account's total balance amount
            let totalBalance = walletAssetManager.getTotalPortfolioBalance()
            balanceLabel.text = "\(maskUserDefaults.currency.symbol)\(totalBalance.currency)"
        }
        if let account = account {
            Publishers.CombineLatest4(
                account.publisher(for: \.name).eraseToAnyPublisher(),
                account.publisher(for: \.address).eraseToAnyPublisher(),
                UserDefaultSettings.shared.displayBlockChainPublisher.eraseToAnyPublisher(),
                UserDefaultPublishers.network.eraseToAnyPublisher()
            )
            .receive(on: RunLoop.main)
            .sink { [weak self] name, address, displayBlockChain, networkType in
                guard let validAddress = address else { return }
                self?.updateBlockChainButtonStatus(currentBlockChain: displayBlockChain)
                self?.nameLabel.text = name
                self?.addressLabel.text = "\(validAddress.prefix(10))...\(validAddress.suffix(10))"
                self?.networkLabel.text = networkType.shortName.lowercased().capitalized
                self?.networkIcon.image = networkType.smallIcon?.withTintColor(Asset.Colors.AccountCard.nameText.color)
                self?.updateBackground(isWalletConnect: account.fromWalletConnect)
            }
            .store(in: &disposeBag)
        } else {
            nameLabel.text = ""
            addressLabel.text = ""
        }
    }
    
    private func updateBlockChainButtonStatus(currentBlockChain: WalletDisplayBlockChainType) {
        guard let selectedIndex = WalletDisplayBlockChainType
                .supportDisplayBlockChainTypes
                .firstIndex(where: { displayBlockChainType in
                    displayBlockChainType == currentBlockChain
                }) else {
                    return
                }
        let selectChainIndex = Int(selectedIndex)
        let allChainButtons = chainsStackView.arrangedSubviews
        guard selectChainIndex < allChainButtons.count else { return }
        allChainButtons.forEach { $0.alpha = 0.6 }
        allChainButtons[selectChainIndex].alpha = 1.0
    }
    
    private func updateBackground(isWalletConnect: Bool) {
        if isWalletConnect {
            maskImageView1.isHidden = true
            maskImageView2.isHidden = true
            wcMaskImageView.isHidden = false
            backgroundLayer.colors = [
                Asset.Colors.AccountCard.wcBackground1.color.cgColor,
                Asset.Colors.AccountCard.wcBackground2.color.cgColor
            ]
        } else {
            maskImageView2.isHidden = false
            maskImageView2.isHidden = false
            wcMaskImageView.isHidden = true
            backgroundLayer.colors = [
                Asset.Colors.AccountCard.background1.color.cgColor,
                Asset.Colors.AccountCard.background2.color.cgColor
            ]
        }
    }
}
