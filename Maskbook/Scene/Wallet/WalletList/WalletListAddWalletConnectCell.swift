//
//  WalletListAddWalletConnectCell.swift
//  Maskbook
//
//  Created by sxiaojian on 2021/9/27.
//  Copyright © 2021 dimension. All rights reserved.
//

import Combine
import Foundation
import UIKit
import UStack

final class WalletListAddWalletConnectCell: UITableViewCell {
    var disposeBag = Set<AnyCancellable>()
    
    let icon: UIImageView = {
        let imageView = UIImageView()
        imageView.layer.cornerRadius = 12
        imageView.layer.cornerCurve = .circular
        return imageView
    }()
    
    lazy var hTitleStackView: UIStackView = {
        let stackView = UIStackView()
        stackView.axis = .horizontal
        stackView.addArrangedSubview(titleLabel)
        stackView.addArrangedSubview(subTitleLabel)
        return stackView
    }()
    
    let titleLabel: UILabel = {
        let label = UILabel()
        label.textColor = Asset.Colors.Text.dark.color
        label.font = FontStyles.BH5
        return label
    }()
    
    let subTitleLabel: UILabel = {
        let label = UILabel()
        label.textColor = Asset.Colors.Text.normal.color
        label.font = FontStyles.MH6
        return label
    }()
    
    let currentValueLabel: UILabel = {
        let label = UILabel()
        label.textColor = Asset.Colors.Text.normal.color
        label.font = FontStyles.RH5
        label.textAlignment = .right
        return label
    }()
    
    let rightArrow: UIImageView = {
        let imageView = UIImageView()
        imageView.image = Asset.Icon.Arrows.celllRight.image
        return imageView
    }()
    
    override func prepareForReuse() {
        super.prepareForReuse()
        disposeBag.removeAll()
    }
    
    override init(style: UITableViewCell.CellStyle, reuseIdentifier: String?) {
        super.init(style: style, reuseIdentifier: reuseIdentifier)
        _init()
    }
    
    required init?(coder: NSCoder) {
        super.init(coder: coder)
        _init()
    }
}

extension WalletListAddWalletConnectCell {
    private func _init() {
        backgroundColor = .clear
        selectionStyle = .none
        applyCornerRadius(radius: 12)
        let hStack = HStackView(spacing: 8,
                                distribution: .fill,
                                alignment: .center, views: {
            
            icon
            hTitleStackView
            Spacer()
            rightArrow
        })
        hStack.isLayoutMarginsRelativeArrangement = true
        hStack.layoutMargins = UIEdgeInsets(top: 0, left: 12, bottom: 0, right: 22)
        hStack.translatesAutoresizingMaskIntoConstraints = false
        hStack.backgroundColor = Asset.Colors.Background.dark.color
        hStack.applyRadius(radius: 8)
        contentView.addSubview(hStack)
        
        NSLayoutConstraint.activate([
            hStack.topAnchor.constraint(equalTo: contentView.topAnchor, constant: 8),
            hStack.leadingAnchor.constraint(equalTo: contentView.leadingAnchor, constant: LayoutConstraints.leading),
            hStack.trailingAnchor.constraint(equalTo: contentView.trailingAnchor, constant: -LayoutConstraints.trailing),
            hStack.bottomAnchor.constraint(equalTo: contentView.bottomAnchor, constant: -8),
            hStack.heightAnchor.constraint(equalToConstant: 56).priority(.defaultHigh)
        ])
        
        NSLayoutConstraint.activate([
            icon.heightAnchor.constraint(equalToConstant: 32),
            icon.widthAnchor.constraint(equalToConstant: 32)
        ])
    }
}
