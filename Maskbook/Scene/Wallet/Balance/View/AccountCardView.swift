//
//  AccountCardView.swift
//  Maskbook
//
//  Created by BradGao on 2021/6/4.
//  Copyright © 2021 dimension. All rights reserved.
//
// swiftlint:disable force_cast line_length type_body_length file_length

import Combine
import CoreDataStack
import UIKit

protocol AccountCardViewDelegate: AnyObject {
    func moreButtonDidClick(view: AccountCardView, button: UIButton)
}

// swiftlint:disable force_cast line_length type_body_length file_length
class AccountCardView: UIView {
    @InjectedProvider(\.userDefaultSettings)
    private var userSetting
    
    @InjectedProvider(\.walletAssetManager)
    private var walletAssetManager: WalletAssetManager
    
    weak var delegate: AccountCardViewDelegate?
    private var disposeBag = Set<AnyCancellable>()
    
    private let cornerRadiusValue: CGFloat = 20
    
    private var addressArr = [String]()

    private var backgroundLayer: CAGradientLayer = {
        let layer1 = CAGradientLayer()
        layer1.colors = WalletDisplayBlockChainType.all.accoundCardBgColors
        layer1.startPoint = CGPoint(x: 0.5, y: 0)
        layer1.endPoint = CGPoint(x: 0.5, y: 1)
        layer1.cornerRadius = 20
        layer1.cornerCurve = .continuous
        layer1.masksToBounds = true
        return layer1
    }()
    
    private lazy var stackViewBackgroudLayer: CALayer = {
        let layer1 = CALayer()
        layer1.maskedCorners = [.layerMinXMaxYCorner, .layerMaxXMaxYCorner]
        layer1.cornerRadius = 20
        layer1.cornerCurve = .continuous
        layer1.masksToBounds = true
        return layer1
    }()
    
    private var stackViewTopBorderLayer: CAGradientLayer = {
        let layer1 = CAGradientLayer()
        layer1.colors = [
            UIColor.white.withAlphaComponent(0.4).cgColor,
            UIColor.clear.cgColor,
            UIColor.white.withAlphaComponent(0.3).cgColor
        ]
        layer1.startPoint = CGPoint(x: 0.0, y: 0.5)
        layer1.endPoint = CGPoint(x: 1.0, y: 0.5)
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
    
    private var maskImageView3: UIImageView = {
        let mask = UIImageView()
        mask.image = Asset.Images.Scene.Balance.accountBgMask3.image
        mask.contentMode = .scaleAspectFill
        mask.translatesAutoresizingMaskIntoConstraints = false
        return mask
    }()
    
    private var chainLargeImageView: UIImageView = {
        let mask = UIImageView()
        mask.contentMode = .scaleAspectFill
        mask.translatesAutoresizingMaskIntoConstraints = false
        return mask
    }()
    
    private lazy var chainLargeImageContainer: UIStackView = {
        let view = UIStackView()
        view.axis = .horizontal
        view.spacing = 0
        view.addArrangedSubview(chainLargeImageViewPadding)
        view.addArrangedSubview(chainLargeImageView)
        return view
    }()
    
    private var chainLargeImageViewPadding: UIView = {
        let view = UIView()
        view.backgroundColor = .clear
        return view
    }()
    
    private var nameLabel: UILabel = {
        let label = UILabel()
        label.font = FontStyles.BH3
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
        label.font = .systemFont(ofSize: 32, weight: .bold)
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
    
    private static let chainButtonViewTag = 1
    private static let chainDotViewTag = 2
    
    weak var shadowView: UIView?
    
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
        stackViewBackgroudLayer.frame = CGRect(
            x: bounds.origin.x,
            y: chainsStackView.frame.origin.y - 13,
            width: bounds.width,
            height: 60)
        stackViewTopBorderLayer.frame = CGRect(
            x: stackViewBackgroudLayer.frame.origin.x,
            y: stackViewBackgroudLayer.frame.origin.y,
            width: bounds.width,
            height: 0.5)
    }
    
    private func setup() {
        applyCornerRadius(radius: 20)
        
        directionalLayoutMargins = NSDirectionalEdgeInsets(top: 16, leading: 16, bottom: 0, trailing: 16)

        layer.addSublayer(backgroundLayer)
        addSubview(chainLargeImageContainer)
        addSubview(maskImageView1)
        addSubview(maskImageView2)
        addSubview(maskImageView3)
        addSubview(nameLabel)
        addSubview(networkBgView)
        networkBgView.addSubview(networkIcon)
        networkBgView.addSubview(networkLabel)
        addSubview(moreButton)
        addSubview(addressLabel)
        addSubview(copyButton)
        addSubview(balanceLabel)
        layer.addSublayer(stackViewBackgroudLayer)
        addSubview(chainsStackView)
        layer.addSublayer(stackViewTopBorderLayer)
        
        chainLargeImageContainer.translatesAutoresizingMaskIntoConstraints = false
        chainLargeImageViewPadding.translatesAutoresizingMaskIntoConstraints = false
        NSLayoutConstraint.activate([
            chainLargeImageContainer.leadingAnchor.constraint(
                equalTo: maskImageView2.leadingAnchor),
            chainLargeImageContainer.topAnchor.constraint(
                equalTo: self.layoutMarginsGuide.topAnchor,
                constant: 30
            ),
            // Set the position on the x-axis of `chainLargeImageView` according to the width of `maskImageView2`.
            chainLargeImageViewPadding.widthAnchor.constraint(
                equalTo: maskImageView2.widthAnchor,
                multiplier: 53.0 / 158.0),
            chainLargeImageView.widthAnchor.constraint(
                equalTo: self.widthAnchor,
                multiplier: 67.0 / 330),
            chainLargeImageView.heightAnchor.constraint(
                equalTo: chainLargeImageView.widthAnchor)
        ])
        
        NSLayoutConstraint.activate([
            maskImageView1.leftAnchor.constraint(equalTo: self.leftAnchor, constant: -63),
            maskImageView1.widthAnchor.constraint(equalTo: self.widthAnchor, multiplier: 277.0 / 330.0),
            maskImageView1.topAnchor.constraint(equalTo: self.topAnchor, constant: 60),
            maskImageView1.heightAnchor.constraint(equalTo: self.heightAnchor, multiplier: 182.0 / 196.0)
        ])
        
        NSLayoutConstraint.activate([
            maskImageView2.trailingAnchor.constraint(equalTo: self.trailingAnchor, constant: 60),
            maskImageView2.widthAnchor.constraint(equalTo: self.widthAnchor, multiplier: 232.0 / 330.0),
            maskImageView2.topAnchor.constraint(equalTo: self.topAnchor, constant: -48),
            maskImageView2.heightAnchor.constraint(equalTo: self.heightAnchor, multiplier: 332.0 / 158.0)
        ])
        
        NSLayoutConstraint.activate([
            maskImageView3.leadingAnchor.constraint(equalTo: self.leadingAnchor, constant: -197),
            maskImageView3.widthAnchor.constraint(equalTo: self.widthAnchor, multiplier: 356.0 / 330.0),
            maskImageView3.bottomAnchor.constraint(equalTo: self.bottomAnchor, constant: -53),
            maskImageView3.heightAnchor.constraint(equalTo: self.heightAnchor, multiplier: 261.0 / 158.0)
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
            networkIcon.leadingAnchor.constraint(equalTo: networkBgView.leadingAnchor, constant: 8),
            networkIcon.centerYAnchor.constraint(equalTo: networkBgView.centerYAnchor),
            networkIcon.widthAnchor.constraint(equalToConstant: 9),
            networkIcon.heightAnchor.constraint(equalToConstant: 9)
        ])
        
        networkLabel.setContentCompressionResistancePriority(.required - 1, for: .horizontal)
        NSLayoutConstraint.activate([
            networkLabel.leadingAnchor.constraint(equalTo: networkIcon.trailingAnchor, constant: 4),
            networkLabel.centerYAnchor.constraint(equalTo: networkBgView.centerYAnchor)
        ])
        
        NSLayoutConstraint.activate([
            moreButton.topAnchor.constraint(equalTo: self.layoutMarginsGuide.topAnchor,
                                            constant: 10),
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
            balanceLabel.topAnchor.constraint(equalTo: addressLabel.bottomAnchor, constant: 10),
            balanceLabel.leadingAnchor.constraint(equalTo: self.layoutMarginsGuide.leadingAnchor),
            balanceLabel.trailingAnchor.constraint(equalTo: self.layoutMarginsGuide.trailingAnchor),
            balanceLabel.heightAnchor.constraint(equalToConstant: 38)
        ])
        
        NSLayoutConstraint.activate([
            chainsStackView.topAnchor.constraint(equalTo: balanceLabel.bottomAnchor, constant: 24),
            chainsStackView.leadingAnchor.constraint(equalTo: self.layoutMarginsGuide.leadingAnchor),
            chainsStackView.heightAnchor.constraint(equalToConstant: 36)
        ])
        
        WalletDisplayBlockChainType.supportDisplayBlockChainTypes.forEach { blockChainType in
            let buttonView = self.createBlockChainButton(displayBlockChainType: blockChainType)
            self.chainsStackView.addArrangedSubview(buttonView)
        }
        
        copyButton.addTarget(self, action: #selector(copyButtonDidClick(sender:)), for: .touchUpInside)
        
        addressLabel.gesture()
            .sink { [weak self] _ in
                self?.addressArr = Array(self?.addressArr.reversed() ?? [])
                let displayAddress = self?.addressArr.first ?? ""
                if displayAddress.utf16.count > 30 {
                    self?.addressLabel.text = "\(displayAddress.prefix(10))...\(displayAddress.suffix(10))"
                } else {
                    self?.addressLabel.text = displayAddress
                }
            }
            .store(in: &disposeBag)
    }
    
    @objc
    private func moreButtonDidClick(sender: UIButton) {
        delegate?.moreButtonDidClick(view: self, button: sender)
    }
    
    @objc
    private func copyButtonDidClick(sender: UIButton) {
        let displayAddress = self.addressArr.first ?? ""
        UIPasteboard.general.string = displayAddress
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
        guard userSetting.defaultAccountAddress != nil else {
            return
        }
        guard let senderIndex = chainsStackView.arrangedSubviews.firstIndex(where: { subView in
            subView.viewWithTag(Self.chainButtonViewTag) === sender
        }) else { return }
        
        guard Int(senderIndex) < WalletDisplayBlockChainType.supportDisplayBlockChainTypes.count else { return }
        let selectedBlockChain = WalletDisplayBlockChainType.supportDisplayBlockChainTypes[Int(senderIndex)]
        
        userSetting.walletDisplayBlockchain = selectedBlockChain
        switch selectedBlockChain {
        case .all:
            break
            
        case .blockchain(let network):
            userSetting.network = network
        }
    }
    
    private func addAction() {
        moreButton.addTarget(self, action: #selector(moreButtonDidClick(sender:)), for: .touchUpInside)
    }
    
    private func createBlockChainButton(displayBlockChainType: WalletDisplayBlockChainType) -> UIView {
        let containerView = UIView()
        containerView.translatesAutoresizingMaskIntoConstraints = false
        
        let button = UIButton(type: .system)
        button.translatesAutoresizingMaskIntoConstraints = false
        button.setImage(displayBlockChainType.accountViewImage, for: .normal)
        button.addTarget(self, action: #selector(blockChainButtonDidClicked(_:)), for: .touchUpInside)
        button.tag = Self.chainButtonViewTag
        
        let dotView = UIView()
        dotView.translatesAutoresizingMaskIntoConstraints = false
        dotView.backgroundColor = .clear
        dotView.layer.masksToBounds = true
        dotView.layer.cornerRadius = 2
        dotView.tag = Self.chainDotViewTag
        
        containerView.addSubview(button)
        containerView.addSubview(dotView)
        
        NSLayoutConstraint.activate([
            containerView.widthAnchor.constraint(equalToConstant: 28),
            containerView.heightAnchor.constraint(equalToConstant: 36)
        ])
        
        NSLayoutConstraint.activate([
            button.widthAnchor.constraint(equalToConstant: 28),
            button.heightAnchor.constraint(equalToConstant: 28),
            button.topAnchor.constraint(equalTo: containerView.topAnchor),
            button.leadingAnchor.constraint(equalTo: containerView.leadingAnchor)
        ])
        
        NSLayoutConstraint.activate([
            dotView.widthAnchor.constraint(equalToConstant: 4),
            dotView.heightAnchor.constraint(equalToConstant: 4),
            dotView.bottomAnchor.constraint(equalTo: containerView.bottomAnchor),
            dotView.centerXAnchor.constraint(equalTo: containerView.centerXAnchor)
        ])
        return containerView
    }
    
    func setup(account: Account?, portfolio: Portfolio?) {
        disposeBag.removeAll()
        if let portfolio = portfolio {
            portfolio
                .publisher(for: \.assetsValue)
                .filter { _ in
                    UserDefaultSettings.shared.walletDisplayBlockchain != .all
                }
                .receive(on: DispatchQueue.main)
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
            .receive(on: DispatchQueue.main)
            .sink { [weak self] name, address, displayBlockChain, networkType in
                guard let validAddress = address else { return }

                self?.updateBlockChainButtonStatus(currentBlockChain: displayBlockChain)
                self?.updateBackground(isWalletConnect: account.fromWalletConnect,
                                       displayBlockchain: displayBlockChain)
                self?.nameLabel.text = name
                self?.addressLabel.text = "\(validAddress.prefix(10))...\(validAddress.suffix(10))"
                self?.networkLabel.text = networkType.shortName.lowercased().capitalized
                self?.networkIcon.image = networkType.smallIcon?.withTintColor(Asset.Colors.AccountCard.nameText.color)
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
        allChainButtons.forEach {
            $0.viewWithTag(Self.chainButtonViewTag)?.alpha = 0.6
            $0.viewWithTag(Self.chainDotViewTag)?.backgroundColor = .clear
        }
        allChainButtons[selectChainIndex].viewWithTag(Self.chainButtonViewTag)?.alpha = 1.0
        allChainButtons[selectChainIndex].viewWithTag(Self.chainDotViewTag)?.backgroundColor = .white
    }
    
    private func updateBackground(
        isWalletConnect: Bool,
        displayBlockchain: WalletDisplayBlockChainType) {
            let shadowLayer = shadowView?.layer
            if isWalletConnect {
                chainLargeImageView.image = Asset.Images.Scene.Balance.accountBgWc.image
                backgroundLayer.colors = [
                    Asset.Colors.AccountCard.wcBackground1.color.cgColor,
                    Asset.Colors.AccountCard.wcBackground2.color.cgColor
                ]
                stackViewBackgroudLayer.backgroundColor =
                    Asset.Colors.AccountCard.wcBackground3.color.cgColor
                shadowLayer?.shadowColor =
                    Asset.Colors.Shadow.Card.all.color.cgColor
            } else {
                chainLargeImageView.image = displayBlockchain.chainBgImage
                backgroundLayer.colors = displayBlockchain.accoundCardBgColors
                stackViewBackgroudLayer.backgroundColor = displayBlockchain.bottomBgColor
                shadowLayer?.shadowColor = displayBlockchain.shadowColor
            }
        }
    }
    
    private func getAddressAndENS(account: Account) {
        self.addressArr.removeAll()
        guard let validAddress = account.address else { return }
        guard let ensName = account.ensName else {
            self.addressLabel.text = "\(validAddress.prefix(10))...\(validAddress.suffix(10))"
            return
        }
        if ensName.isNotEmpty { self.addressArr.append(ensName) }
        self.addressArr.append(validAddress)
    }
}
// swiftlint:ensable force_cast line_length type_body_length file_length
