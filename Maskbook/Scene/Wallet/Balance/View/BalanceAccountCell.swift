//
//  BalanceAccountCell.swift
//  Maskbook
//
//  Created by BradGao on 2021/6/10.
//  Copyright © 2021 dimension. All rights reserved.
//

import CoreDataStack
import UIKit

protocol BalanceAccountCellDelegate: AnyObject {
    func balanceAccountCell(cell: BalanceAccountCell, button: UIButton)
}

class BalanceAccountCell: UITableViewCell {
    var accountCardView: AccountCardView
    
    private var accountCardShadowView: UIView = {
        let view = UIView()
        view.translatesAutoresizingMaskIntoConstraints = false
        return view
    }()
    
    private var actionsStackView: UIStackView = {
        let stackView = UIStackView()
        stackView.axis = .horizontal
        stackView.alignment = .center
        stackView.distribution = .fillEqually
        stackView.spacing = 12
        stackView.translatesAutoresizingMaskIntoConstraints = false
        return stackView
    }()
    
    private var sendButton: UIButton = {
        let button = UIButton(type: .system)
        button.translatesAutoresizingMaskIntoConstraints = false
        button.imageEdgeInsets = UIEdgeInsets(top: 0, left: 0, bottom: 0, right: 8)
        button.titleEdgeInsets = UIEdgeInsets(top: 0, left: 8, bottom: 0, right: 0)
        button.setImage(Asset.Images.Scene.Balance.sendButton.image, for: .normal)
        button.setTitle(L10n.Scene.WalletBalance.btnSend, for: .normal)
        button.setTitleColor(Asset.Colors.Text.dark.color, for: .normal)
        button.titleLabel?.font = FontStyles.bh5.uifont
        button.backgroundColor = Asset.Colors.Public.Background.dark.color
        button.applyCornerRadius(radius: 16)
        button.layer.masksToBounds = false
        button.applyShadow(color: Asset.Colors.Shadow.sendButton.color,
                           alpha: 1,
                           x: 0,
                           y: 10,
                           blur: 25,
                           cornerRadius: 16,
                           spread: 0)
        return button
    }()
    
    private var receiveButton: UIButton = {
        let button = UIButton(type: .system)
        button.translatesAutoresizingMaskIntoConstraints = false
        button.imageEdgeInsets = UIEdgeInsets(top: 0, left: 0, bottom: 0, right: 8)
        button.titleEdgeInsets = UIEdgeInsets(top: 0, left: 8, bottom: 0, right: 0)
        button.setImage(Asset.Images.Scene.Balance.receiveButton.image, for: .normal)
        button.setTitle(L10n.Scene.WalletBalance.btnReceive, for: .normal)
        button.setTitleColor(Asset.Colors.Text.dark.color, for: .normal)
        button.titleLabel?.font = FontStyles.bh5.uifont
        button.backgroundColor = Asset.Colors.Public.Background.dark.color
        button.applyCornerRadius(radius: 16)
        button.layer.masksToBounds = false
        button.applyShadow(color: Asset.Colors.Shadow.sendButton.color,
                           alpha: 1,
                           x: 0,
                           y: 10,
                           blur: 25,
                           cornerRadius: 16,
                           spread: 0)
        return button
    }()
    
    override func layoutSubviews() {
        super.layoutSubviews()
        let shadowLayer = accountCardShadowView.layer
        shadowLayer.shadowOpacity = 1
        shadowLayer.shadowOffset = .zero
        shadowLayer.shadowRadius = 10
        
        let rect = CGRect(x: 36,
                          y: accountCardView.bounds.height,
                          width: accountCardView.bounds.width - 72,
                          height: 10)
        shadowLayer.shadowPath = UIBezierPath(roundedRect: rect, cornerRadius: 20).cgPath
        sendButton.applyShadow(color: Asset.Colors.Shadow.sendButton.color,
                               alpha: 1,
                               x: 0,
                               y: 10,
                               blur: 6,
                               cornerRadius: 16,
                               spread: 0)
        receiveButton.applyShadow(color: Asset.Colors.Shadow.sendButton.color,
                                  alpha: 1,
                                  x: 0,
                                  y: 10,
                                  blur: 6,
                                  cornerRadius: 16,
                                  spread: 0)
    }
    
    override init(style: UITableViewCell.CellStyle, reuseIdentifier: String?) {
        accountCardView = AccountCardView()
        super.init(style: style, reuseIdentifier: reuseIdentifier)
        _init()
    }
    
    required init?(coder: NSCoder) {
        accountCardView = AccountCardView()
        super.init(coder: coder)
        _init()
    }
    
    weak var delegate: BalanceAccountCellDelegate?
    private func _init() {
        accountCardView.shadowView = accountCardShadowView
        
        selectionStyle = .none
        backgroundColor = .clear
        
        accountCardView.delegate = self
        accountCardView.translatesAutoresizingMaskIntoConstraints = false
        
        contentView.addSubview(accountCardShadowView)
        contentView.addSubview(accountCardView)
        contentView.addSubview(actionsStackView)
        
        NSLayoutConstraint.activate([
            accountCardView.topAnchor.constraint(
                equalTo: contentView.safeAreaLayoutGuide.topAnchor,
                constant: LayoutConstraints.top
            ),
            accountCardView.leadingAnchor.constraint(equalTo: contentView.readableContentGuide.leadingAnchor),
            accountCardView.trailingAnchor.constraint(equalTo: contentView.readableContentGuide.trailingAnchor),
            accountCardView.heightAnchor.constraint(equalToConstant: 186)
        ])
        
        NSLayoutConstraint.activate([
            accountCardShadowView.leadingAnchor.constraint(equalTo: accountCardView.leadingAnchor),
            accountCardShadowView.topAnchor.constraint(equalTo: accountCardView.topAnchor),
            accountCardShadowView.trailingAnchor.constraint(equalTo: accountCardView.trailingAnchor),
            accountCardShadowView.bottomAnchor.constraint(equalTo: accountCardView.bottomAnchor)
        ])
        
        actionsStackView.addArrangedSubview(sendButton)
        actionsStackView.addArrangedSubview(receiveButton)
        
        NSLayoutConstraint.activate([
            actionsStackView.topAnchor.constraint(equalTo: accountCardView.bottomAnchor,
                                                  constant: 26),
            actionsStackView.leadingAnchor.constraint(equalTo: accountCardView.leadingAnchor,
                                                      constant: 24),
            actionsStackView.trailingAnchor.constraint(equalTo: accountCardView.trailingAnchor,
                                                       constant: -24),
            actionsStackView.heightAnchor.constraint(equalToConstant: 48),
            actionsStackView.bottomAnchor.constraint(equalTo: contentView.bottomAnchor,
                                                     constant: -16)
        ])
        
        NSLayoutConstraint.activate([
            sendButton.heightAnchor.constraint(equalToConstant: 48),
            receiveButton.heightAnchor.constraint(equalToConstant: 48)
        ])
        
        sendButton.addTarget(self, action: #selector(sendButtonDidClicked), for: .touchUpInside)
        receiveButton.addTarget(self, action: #selector(receiveButtonDidClicked), for: .touchUpInside)
    }
    
    func setup(account: Account?, portfolio: Portfolio?) {
        accountCardView.setup(account: account, portfolio: portfolio)
    }
    
    @objc
    private func sendButtonDidClicked() {
        
        let mainToken = WalletAssetManager.shared.getDefaultMainToken()
        
        if let quantity = mainToken?.quantity {
            
            if quantity.compare(NSDecimalNumber(integerLiteral: 0)) != .orderedDescending {
                 showBalanceNotEnoughAlert()
            } else {
                Coordinator.main.present(
                    scene: .sendTransaction(param: nil),
                    transition: .detail(animated: true))
            }
        } else {
            showBalanceNotEnoughAlert()
        }

    }
    
    @objc
    private func receiveButtonDidClicked() {
        guard let defaultAddress = maskUserDefaults.defaultAccountAddress else {
            return
        }
        Coordinator.main.present(
            scene: .receiveAddress(
                network: maskUserDefaults.network,
                token: nil,
                address: defaultAddress),
            transition: .detail(animated: true))
    }
}

extension BalanceAccountCell: AccountCardViewDelegate {
    func moreButtonDidClick(view: AccountCardView, button: UIButton) {
        self.delegate?.balanceAccountCell(cell: self, button: button)
    }
}

extension BalanceAccountCell {
    func showBalanceNotEnoughAlert() {
        let mainToken = maskUserDefaults.network.mainToken
        guard let symbol = mainToken?.symbol.uppercased() else { return }
        
        let des = L10n.Common.Alert.TokenBalance.description(symbol, symbol)
        let btnConfirm = L10n.Common.Alert.TokenBalance.btnConfirm(symbol)
        
        let alertController = AlertController(
            title: "",
            message: des,
            confirmButtonText: btnConfirm,
            cancelButtonText: L10n.Common.Controls.cancel,
            imageType: .warning,
            confirmButtonClicked: { _ in
                Coordinator.main.present(scene: .showTransakIntegration, transition: .modal())
            },
            cancelButtonClicked: nil)
        Coordinator.main.present(scene: .alertController(alertController:
                                                            alertController),
                                 transition: .alertController(completion: nil))
    }
}
