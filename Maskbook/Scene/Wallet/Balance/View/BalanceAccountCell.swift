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
    
    private var actionsStackView: UIStackView = {
        let stackView = UIStackView()
        stackView.axis = .horizontal
        stackView.alignment = .center
        stackView.distribution = .fillEqually
        stackView.spacing = 16
        stackView.translatesAutoresizingMaskIntoConstraints = false
        return stackView
    }()
    
    private var sendButton: UIButton = {
        let button = UIButton(type: .custom)
        button.translatesAutoresizingMaskIntoConstraints = false
        button.imageEdgeInsets = UIEdgeInsets(top: 0, left: 0, bottom: 0, right: 8)
        button.titleEdgeInsets = UIEdgeInsets(top: 0, left: 8, bottom: 0, right: 0)
        button.setImage(Asset.Images.Scene.Balance.sendButton.image, for: .normal)
        button.setTitle(L10n.Scene.WalletBalance.btnSend, for: .normal)
        button.setTitleColor(Asset.Colors.Text.dark.color, for: .normal)
        button.titleLabel?.font = FontStyles.bh5.uifont
        return button
    }()
    
    private var receiveButton: UIButton = {
        let button = UIButton(type: .custom)
        button.translatesAutoresizingMaskIntoConstraints = false
        button.imageEdgeInsets = UIEdgeInsets(top: 0, left: 0, bottom: 0, right: 8)
        button.titleEdgeInsets = UIEdgeInsets(top: 0, left: 8, bottom: 0, right: 0)
        button.setImage(Asset.Images.Scene.Balance.receiveButton.image, for: .normal)
        button.setTitle(L10n.Scene.WalletBalance.btnReceive, for: .normal)
        button.setTitleColor(Asset.Colors.Text.dark.color, for: .normal)
        button.titleLabel?.font = FontStyles.bh5.uifont
        return button
    }()
    
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
        selectionStyle = .none
        backgroundColor = .clear
        
        accountCardView.delegate = self
        accountCardView.translatesAutoresizingMaskIntoConstraints = false
        
        contentView.addSubview(accountCardView)
        contentView.addSubview(actionsStackView)
        NSLayoutConstraint.activate([
            accountCardView.topAnchor.constraint(equalTo: contentView.safeAreaLayoutGuide.topAnchor, constant: 24),
            accountCardView.leadingAnchor.constraint(equalTo: contentView.readableContentGuide.leadingAnchor, constant: 2),
            accountCardView.trailingAnchor.constraint(equalTo: contentView.readableContentGuide.trailingAnchor, constant: -2),
            accountCardView.heightAnchor.constraint(equalToConstant: 185)
        ])
        
        actionsStackView.addArrangedSubview(sendButton)
        actionsStackView.addArrangedSubview(receiveButton)
        
        NSLayoutConstraint.activate([
            actionsStackView.topAnchor.constraint(equalTo: accountCardView.bottomAnchor),
            actionsStackView.leadingAnchor.constraint(equalTo: accountCardView.leadingAnchor),
            actionsStackView.trailingAnchor.constraint(equalTo: accountCardView.trailingAnchor),
            actionsStackView.heightAnchor.constraint(equalToConstant: 80),
            actionsStackView.bottomAnchor.constraint(equalTo: contentView.bottomAnchor)
        ])
        
        NSLayoutConstraint.activate([
            sendButton.heightAnchor.constraint(equalToConstant: 56),
            receiveButton.heightAnchor.constraint(equalToConstant: 56)
        ])
        
        sendButton.addTarget(self, action: #selector(sendButtonDidClicked), for: .touchUpInside)
        receiveButton.addTarget(self, action: #selector(receiveButtonDidClicked), for: .touchUpInside)
    }
    
    func setup(account: Account?, portfolio: Portfolio?) {
        accountCardView.setup(account: account, portfolio: portfolio)
    }
    
    @objc
    private func sendButtonDidClicked() {
        Coordinator.main.present(
            scene: .sendTransaction(param: nil),
            transition: .detail(animated: true))
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
