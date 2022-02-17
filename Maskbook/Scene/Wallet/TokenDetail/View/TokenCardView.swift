//
//  TokenCardView.swift
//  Maskbook
//
//  Created by BradGao on 2021/6/15.
//  Copyright © 2021 dimension. All rights reserved.
//

import Combine
import CoreDataStack
import UIKit

class TokenCardView: UIView {
    @InjectedProvider(\.userDefaultSettings)
    private var userSetting
    
    private var disposeBag = Set<AnyCancellable>()
    
    private let cornerRadiusValue: CGFloat = 20
    
    private var backgroundLayer: CAGradientLayer = {
        let layer1 = CAGradientLayer()
        layer1.locations = [0, 1]
        layer1.startPoint = CGPoint(x: 0, y: 0.5)
        layer1.endPoint = CGPoint(x: 1, y: 0.5)
        layer1.cornerRadius = 20
        layer1.masksToBounds = true
        return layer1
    }()
    
    private var maskView1: UIView = {
        let view = UIView()
        view.layer.cornerRadius = 20
        view.layer.masksToBounds = true
        view.translatesAutoresizingMaskIntoConstraints = false
        view.backgroundColor = UIColor.black.withAlphaComponent(0.3)
        return view
    }()
    
    private var maskLargeCircleView: UIImageView = {
        let view = UIImageView()
        view.image = Asset.Images.Scene.Balance.tokenBgCircleLarge.image
        view.contentMode = .scaleAspectFill
        view.translatesAutoresizingMaskIntoConstraints = false
        return view
    }()
    
    private var maskSmallCircleView: UIImageView = {
        let view = UIImageView()
        view.image = Asset.Images.Scene.Balance.tokenBgCircleSmall.image
        view.contentMode = .scaleAspectFill
        view.translatesAutoresizingMaskIntoConstraints = false
        return view
    }()
    
    private var nameLabel: UILabel = {
        let label = UILabel()
        label.font = .systemFont(ofSize: 14, weight: .semibold)
        label.textColor = Asset.Colors.AccountCard.nameText.color
        label.translatesAutoresizingMaskIntoConstraints = false
        return label
    }()
    
    private var tokenIcon: TokenIconImageView = {
        let imageView = TokenIconImageView()
        imageView.contentMode = .scaleAspectFit
        imageView.translatesAutoresizingMaskIntoConstraints = false
        return imageView
    }()
    
    private var amountLabel: UILabel = {
        let label = UILabel()
        label.font = .systemFont(ofSize: 14, weight: .medium)
        label.textAlignment = .right
        label.textColor = Asset.Colors.AccountCard.nameText.color
        label.translatesAutoresizingMaskIntoConstraints = false
        return label
    }()
    
    private var balanceLabel: UILabel = {
        let label = UILabel()
        label.font = FontStyles.BH3
        label.textAlignment = .right
        label.textColor = Asset.Colors.AccountCard.nameText.color
        label.translatesAutoresizingMaskIntoConstraints = false
        return label
    }()
    
    override init(frame: CGRect) {
        super.init(frame: frame)
        setup()
    }
    
    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
    
    private func setup() {
        // 1. Apply corder radius
        applyCornerRadius(radius: cornerRadiusValue)
        // 2. Apply shadow
        applyShadow(color: Asset.Colors.TokenDetail.shadow.color, alpha: 1, x: 0, y: 4, blur: 14, cornerRadius: cornerRadiusValue, spread: 0)
        
        directionalLayoutMargins = NSDirectionalEdgeInsets(top: 16, leading: 15, bottom: 16, trailing: 15)
        
        layer.addSublayer(backgroundLayer)
        
        addSubview(maskView1)
        addSubview(maskLargeCircleView)
        addSubview(maskSmallCircleView)
        addSubview(tokenIcon)
        addSubview(nameLabel)
        addSubview(amountLabel)
        addSubview(balanceLabel)
        
        NSLayoutConstraint.activate([
            maskView1.leadingAnchor.constraint(equalTo: leadingAnchor),
            maskView1.topAnchor.constraint(equalTo: topAnchor),
            maskView1.trailingAnchor.constraint(equalTo: trailingAnchor),
            maskView1.bottomAnchor.constraint(equalTo: bottomAnchor)
        ])
        
        NSLayoutConstraint.activate([
            maskLargeCircleView.topAnchor.constraint(equalTo: topAnchor),
            maskLargeCircleView.widthAnchor.constraint(equalToConstant: 238),
            maskLargeCircleView.heightAnchor.constraint(equalToConstant: 80),
            maskLargeCircleView.leadingAnchor.constraint(equalTo: leadingAnchor)
        ])
        
        NSLayoutConstraint.activate([
            maskSmallCircleView.topAnchor.constraint(equalTo: topAnchor),
            maskSmallCircleView.widthAnchor.constraint(equalToConstant: 217),
            maskSmallCircleView.heightAnchor.constraint(equalToConstant: 80),
            maskSmallCircleView.leadingAnchor.constraint(equalTo: leadingAnchor)
        ])
        
        NSLayoutConstraint.activate([
            tokenIcon.leadingAnchor.constraint(equalTo: self.layoutMarginsGuide.leadingAnchor),
            tokenIcon.topAnchor.constraint(equalTo: self.topAnchor, constant: 20.5),
            tokenIcon.widthAnchor.constraint(equalToConstant: 49),
            tokenIcon.heightAnchor.constraint(equalToConstant: 38)
        ])
        
        nameLabel.setContentCompressionResistancePriority(.required - 1, for: .horizontal)
        NSLayoutConstraint.activate([
            nameLabel.centerYAnchor.constraint(equalTo: tokenIcon.centerYAnchor),
            nameLabel.leadingAnchor.constraint(equalTo: tokenIcon.trailingAnchor, constant: 8)
        ])
        
        amountLabel.setContentCompressionResistancePriority(.required, for: .horizontal)
        NSLayoutConstraint.activate([
            amountLabel.topAnchor.constraint(equalTo: self.layoutMarginsGuide.topAnchor),
            amountLabel.trailingAnchor.constraint(equalTo: self.layoutMarginsGuide.trailingAnchor),
            amountLabel.heightAnchor.constraint(equalToConstant: 21),
            amountLabel.leadingAnchor.constraint(equalTo: nameLabel.trailingAnchor, constant: 16)
        ])
        
        balanceLabel.setContentCompressionResistancePriority(.required, for: .horizontal)
        NSLayoutConstraint.activate([
            balanceLabel.topAnchor.constraint(equalTo: amountLabel.bottomAnchor, constant: 4),
            balanceLabel.trailingAnchor.constraint(equalTo: self.layoutMarginsGuide.trailingAnchor),
            balanceLabel.heightAnchor.constraint(equalToConstant: 22),
            balanceLabel.leadingAnchor.constraint(equalTo: nameLabel.trailingAnchor, constant: 16)
        ])
    }
    
    override func layoutSubviews() {
        super.layoutSubviews()
        backgroundLayer.frame = bounds
    }
    
    func updateInfo(token: MaskToken) {
        nameLabel.text = token.name
        guard let address = maskUserDefaults.defaultAccountAddress else {
            return
        }
        let fetchToken = WalletAssetManager.shared.getToken(
            address: address,
            name: token.name,
            chainId: maskUserDefaults.network.chain.rawValue,
            networkId: Int(token.chainId),
            context: AppContext.shared.coreDataStack.persistentContainer.viewContext)
        let blockchain = BlockChainNetwork(chain: maskUserDefaults.network.chain,
                                           networkId: UInt64(token.chainId))
        if let url = fetchToken?.logoUrl {
            tokenIcon.setImage(iconImageUrl: url)
        } else {
            tokenIcon.setImage(iconImageUrl: token.logoURI?.absoluteString)
        }
        tokenIcon.setBlockchainIcon(blockchain: blockchain,
                                    isHidden: userSetting.walletDisplayBlockchain != .all)
        amountLabel.text = "\(fetchToken?.displayQuantity.stringValue.currency ?? "0") \(token.symbol)"
        balanceLabel.text = "\(maskUserDefaults.currency.symbol)\(fetchToken?.displayBalance.stringValue.currency ?? "0")"
        
        backgroundLayer.colors = blockchain.themeColors.map(\.cgColor)
    }
}
