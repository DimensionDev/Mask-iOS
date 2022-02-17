//
//  NFTTransactionTableViewCell.swift
//  Maskbook
//
//  Created by caiyu on 2021/8/20.
//  Copyright © 2021 dimension. All rights reserved.
//

import CoreDataStack
import UIKit

extension NFTTransactionHistory.TransactionType {
    var displayTitle: String {
        switch self {
        case .receive:
            return L10n.Scene.WalletBalance.transactionReceived

        case .send:
            return L10n.Scene.WalletBalance.transactionSend

        default:
            return rawValue.capitalized
        }
    }
}

class NFTTransactionTableViewCell: UITableViewCell {
    private var typeIconView: CollectibleIconImageView = {
        let imageView = CollectibleIconImageView()
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
    
    private var timeLabel: UILabel = {
        let label = UILabel()
        label.textColor = Asset.Colors.Text.normal.color
        label.font = FontStyles.MH6
        label.translatesAutoresizingMaskIntoConstraints = false
        label.textAlignment = .right
        return label
    }()
        
    override init(style: UITableViewCell.CellStyle, reuseIdentifier: String?) {
        super.init(style: style, reuseIdentifier: reuseIdentifier)
        buildContent()
    }
    
    required init?(coder: NSCoder) {
        super.init(coder: coder)
        buildContent()
    }
    
    private func buildContent() {
        selectionStyle = .none
        backgroundColor = .clear
        
        contentView.addSubview(typeIconView)
        contentView.addSubview(typeNameLabel)
        contentView.addSubview(timeLabel)

        NSLayoutConstraint.activate([
            typeIconView.leadingAnchor.constraint(equalTo: contentView.readableContentGuide.leadingAnchor, constant: 6),
            typeIconView.topAnchor.constraint(equalTo: contentView.topAnchor, constant: 8),
            typeIconView.widthAnchor.constraint(equalToConstant: 38),
            typeIconView.heightAnchor.constraint(equalToConstant: 38),
            typeIconView.centerYAnchor.constraint(equalTo: contentView.centerYAnchor)
        ])
        
        typeNameLabel.setContentCompressionResistancePriority(.required - 1, for: .horizontal)
        NSLayoutConstraint.activate([
            typeNameLabel.leadingAnchor.constraint(equalTo: typeIconView.trailingAnchor, constant: 8),
            typeNameLabel.centerYAnchor.constraint(equalTo: typeIconView.centerYAnchor)
        ])
        
        NSLayoutConstraint.activate([
            typeNameLabel.trailingAnchor.constraint(equalTo: contentView.trailingAnchor, constant: -8),
            typeNameLabel.centerYAnchor.constraint(equalTo: typeIconView.centerYAnchor)
        ])
    }
    
    func setup(transaction: NFTTransactionHistory, assetModel: Collectible) {
        typeNameLabel.text = transaction.type.displayTitle
        switch transaction.type {
        case .send:
            typeIconView.setImage(Asset.Images.Scene.Transaction.iconSend.image)
            
        case .receive:
            typeIconView.setImage(Asset.Images.Scene.Transaction.iconReceive.image)
            
        default:
            typeIconView.setImageUrl(assetModel.logoUrl)
        }
    }
}
