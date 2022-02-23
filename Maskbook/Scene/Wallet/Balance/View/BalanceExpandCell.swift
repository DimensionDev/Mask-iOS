//
//  BalanceExpandCell.swift
//  Maskbook
//
//  Created by BradGao on 2021/6/27.
//  Copyright © 2021 dimension. All rights reserved.
//

import UIKit

class BalanceExpandCell: UITableViewCell {
    private var containerView: UIView = {
        let view = UIView()
        view.layer.masksToBounds = true
        view.layer.cornerRadius = 16
        view.layer.cornerCurve = .continuous
        view.backgroundColor = Asset.Colors.Balances.expandButtonBackground.color
        view.translatesAutoresizingMaskIntoConstraints = false
        return view
    }()
    
    private var titleLabel: UILabel = {
        let label = UILabel()
        label.font = FontStyles.rh5.uifont
        label.textColor = Asset.Colors.Text.normal.color
        label.translatesAutoresizingMaskIntoConstraints = false
        return label
    }()
    
    private var smallBalanceLabel: UILabel = {
        let label = UILabel()
        label.font = FontStyles.bh5.uifont
        label.textColor = Asset.Colors.Text.normal.color
        label.translatesAutoresizingMaskIntoConstraints = false
        return label
    }()
    
    private var expandIconImageView: UIImageView = {
        let imageView = UIImageView()
        imageView.contentMode = .scaleAspectFit
        imageView.translatesAutoresizingMaskIntoConstraints = false
        return imageView
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
        
        contentView.addSubview(containerView)
        containerView.addSubview(titleLabel)
        containerView.addSubview(expandIconImageView)
        contentView.addSubview(smallBalanceLabel)
        
        NSLayoutConstraint.activate([
            containerView.leadingAnchor.constraint(equalTo: contentView.readableContentGuide.leadingAnchor,
                                                   constant: 2),
            containerView.topAnchor.constraint(equalTo: contentView.topAnchor,
                                               constant: 8),
            containerView.heightAnchor.constraint(equalToConstant: 32),
            containerView.trailingAnchor.constraint(equalTo: expandIconImageView.trailingAnchor,
                                                    constant: 14),
            containerView.bottomAnchor.constraint(equalTo: contentView.bottomAnchor,
                                                  constant: -8)
        ])
        
        NSLayoutConstraint.activate([
            titleLabel.leadingAnchor.constraint(equalTo: containerView.leadingAnchor,
                                                constant: 14),
            titleLabel.topAnchor.constraint(equalTo: containerView.topAnchor,
                                            constant: 4),
            titleLabel.heightAnchor.constraint(equalToConstant: 24)
        ])
        
        NSLayoutConstraint.activate([
            expandIconImageView.topAnchor.constraint(equalTo: containerView.topAnchor, constant: 4),
            expandIconImageView.leadingAnchor.constraint(equalTo: titleLabel.trailingAnchor),
            expandIconImageView.heightAnchor.constraint(equalToConstant: 24),
            expandIconImageView.widthAnchor.constraint(equalToConstant: 24)
        ])
        
        NSLayoutConstraint.activate([
            smallBalanceLabel.trailingAnchor.constraint(equalTo: contentView.readableContentGuide.trailingAnchor,
                                                        constant: -6),
            smallBalanceLabel.centerYAnchor.constraint(equalTo: containerView.centerYAnchor)
        ])
    }
    
    func setup(expanded: Bool, collapedTotalAmount: Decimal) {
        let image = expanded ?
        Asset.Images.Scene.Balance.expandArrowUp.image :
        Asset.Images.Scene.Balance.expandArrowRight.image
        expandIconImageView.image = image
        titleLabel.text = expanded ?
        L10n.Scene.WalletBalance.balanceExpandLess :
        L10n.Scene.WalletBalance.balanceExpandAll
        
        smallBalanceLabel.text = "\(maskUserDefaults.currency.symbol)\(collapedTotalAmount.currency)"
    }
}
