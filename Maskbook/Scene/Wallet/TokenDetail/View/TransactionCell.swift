//
//  TransactionCell.swift
//  Maskbook
//
//  Created by BradGao on 2021/6/16.
//  Copyright © 2021 dimension. All rights reserved.
//

import UIKit

extension ZerionAPIModel.Transaction.TransactionType {
    var displayTitle: String {
        switch self {
        case .receive:
            return L10n.Scene.WalletBalance.transactionReceived

        case .send:
            return L10n.Scene.WalletBalance.transactionSend

        case .trade:
            return L10n.Scene.WalletBalance.transactionSwap

        case .deposit:
            return L10n.Scene.WalletBalance.transactionDeposit

        case .authorize:
            return L10n.Scene.WalletBalance.transactionApprove

        default:
            return rawValue.capitalized
        }
    }
}

extension TransactionHistory.TransactionType {
    var displayTitle: String {
        switch self {
        case .receive,
                .claim:
            return L10n.Scene.WalletBalance.transactionReceived
            
        case .send,
                .transfer,
                .contractInteraction:
            return L10n.Scene.WalletBalance.transactionSend

        case .trade:
            return L10n.Scene.WalletBalance.transactionSwap

        case .deposit:
            return L10n.Scene.WalletBalance.transactionDeposit

        case .approve:
            return L10n.Scene.WalletBalance.transactionApprove
            
        case .cancel:
            return L10n.Scene.WalletBalance.transactionCancel

        default:
            return rawValue.capitalized
        }
    }
}

class TransactionCell: UITableViewCell {
    private var typeIconView: UIImageView = {
        let imageView = UIImageView()
        imageView.contentMode = .scaleAspectFit
        imageView.translatesAutoresizingMaskIntoConstraints = false
        return imageView
    }()
    
    private var typeNameLabel: UILabel = {
        let label = UILabel()
        label.textColor = Asset.Colors.Text.dark.color
        label.font = FontStyles.BH5
        label.translatesAutoresizingMaskIntoConstraints = false
        return label
    }()
    
    private var tokenAmountlabel: UILabel = {
        let label = UILabel()
        label.textColor = Asset.Colors.Text.normal.color
        label.textAlignment = .right
        label.font = UIFont.systemFont(ofSize: 14, weight: .medium)
        label.translatesAutoresizingMaskIntoConstraints = false
        return label
    }()
    
    private var tokenBalanceLabel: UILabel = {
        let label = UILabel()
        label.textColor = Asset.Colors.Text.dark.color
        label.textAlignment = .right
        label.font = FontStyles.BH5
        label.textAlignment = .right
        label.translatesAutoresizingMaskIntoConstraints = false
        return label
    }()
    
    override init(style: UITableViewCell.CellStyle, reuseIdentifier: String?) {
        super.init(style: style, reuseIdentifier: reuseIdentifier)
        _init()
    }
    
    required init?(coder: NSCoder) {
        super.init(coder: coder)
        _init()
    }
    
    private func _init() {
        selectionStyle = .none
        backgroundColor = .clear
        
        contentView.addSubview(typeIconView)
        contentView.addSubview(typeNameLabel)
        contentView.addSubview(tokenAmountlabel)
        contentView.addSubview(tokenBalanceLabel)
        
        NSLayoutConstraint.activate([
            typeIconView.leadingAnchor.constraint(equalTo: contentView.readableContentGuide.leadingAnchor, constant: 6),
            typeIconView.topAnchor.constraint(equalTo: contentView.topAnchor, constant: 3.5),
            typeIconView.widthAnchor.constraint(equalToConstant: 38),
            typeIconView.heightAnchor.constraint(equalToConstant: 38)
        ])
        
        typeNameLabel.setContentCompressionResistancePriority(.required - 1, for: .horizontal)
        NSLayoutConstraint.activate([
            typeNameLabel.leadingAnchor.constraint(equalTo: typeIconView.trailingAnchor, constant: 8),
            typeNameLabel.centerYAnchor.constraint(equalTo: typeIconView.centerYAnchor)
        ])
        
        tokenAmountlabel.setContentCompressionResistancePriority(.required, for: .horizontal)
        NSLayoutConstraint.activate([
            tokenAmountlabel.leadingAnchor.constraint(equalTo: typeNameLabel.trailingAnchor, constant: 16),
            tokenAmountlabel.trailingAnchor.constraint(equalTo: contentView.readableContentGuide.trailingAnchor, constant: -6),
            tokenAmountlabel.topAnchor.constraint(equalTo: contentView.topAnchor),
            tokenAmountlabel.heightAnchor.constraint(equalToConstant: 21)
        ])
        
        tokenBalanceLabel.setContentCompressionResistancePriority(.required, for: .horizontal)
        NSLayoutConstraint.activate([
            tokenBalanceLabel.leadingAnchor.constraint(equalTo: typeNameLabel.trailingAnchor, constant: 16),
            tokenBalanceLabel.trailingAnchor.constraint(equalTo: contentView.readableContentGuide.trailingAnchor, constant: -6),
            tokenBalanceLabel.topAnchor.constraint(equalTo: tokenAmountlabel.bottomAnchor),
            tokenBalanceLabel.heightAnchor.constraint(equalToConstant: 24),
            tokenBalanceLabel.bottomAnchor.constraint(equalTo: contentView.bottomAnchor, constant: -16)
        ])
    }
    
    func setup(transaction: TransactionHistory, displayTokenSymbol: Bool) {
        var transactionTypeTitle = transaction.type.displayTitle
        if transaction.type == .approve || displayTokenSymbol {
            transactionTypeTitle = "\(transactionTypeTitle) \(transaction.change?.asset.symbol ?? "")"
        }
        if let txName = transaction.name, !txName.isEmpty {
            if let sameType = TransactionHistory.TransactionType(rawValue: txName) {
                transactionTypeTitle = sameType.displayTitle
            } else {
                transactionTypeTitle = txName
            }
        }
        typeNameLabel.text = transactionTypeTitle
        let iconImage: UIImage?
        switch (transaction.status, transaction.type) {
        case (.failed, _):
            iconImage = Asset.Images.Scene.Transaction.iconFail.image
            
        case (_, .send),
            (_, .transfer):
            iconImage = Asset.Images.Scene.Transaction.iconSend.image
            
        case (_, .receive),
            (_, .claim):
            iconImage = Asset.Images.Scene.Transaction.iconReceive.image
        case (_, .deposit),
            (_, .trade),
            (_, .execution),
            (_, .contractInteraction):
            iconImage = Asset.Images.Scene.Transaction.iconSwap.image
            
        case (_, .approve):
            iconImage = Asset.Images.Scene.Transaction.iconApprove.image

        case (_, _):
            iconImage = Asset.Images.Scene.Transaction.iconSend.image
        }
        typeIconView.image = iconImage
        switch transaction.type {
        case .approve,
             .execution:
            // FIXME: Hardcode ETH decimals 18 here
            let amountText = EthUtil.calcAmount(amount: transaction.gasFee ?? .zero, decimals: 18).stringValue
            let balance = EthUtil.calcBalance(amount: transaction.gasFee ?? .zero, decimals: 18, price: transaction.gasPrice ?? 0).stringValue
            let balanceText = "\(maskUserDefaults.currency.symbol)\(balance)"
            
            tokenAmountlabel.text = amountText
            tokenBalanceLabel.text = balanceText

        default:
            guard let changesAmount = transaction.change?.value,
                  let changesPrice = transaction.change?.price,
                  let changesDecimal = transaction.change?.asset.decimals else {
                tokenAmountlabel.text = nil
                tokenBalanceLabel.text = nil
                return
            }
            
            tokenAmountlabel.text = EthUtil.calcAmount(amount: changesAmount, decimals: changesDecimal).stringValue
            let balance = EthUtil.calcBalance(amount: changesAmount, decimals: changesDecimal, price: changesPrice).stringValue
            tokenBalanceLabel.text = "\(maskUserDefaults.currency.symbol)\(balance)"
        }
    }
}
