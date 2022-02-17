//
//  GroupStyleTableViewCell.swift
//  Maskbook
//
//  Created by sxiaojian on 2022/1/7.
//  Copyright © 2022 dimension. All rights reserved.
//

import Foundation
import UIKit
import UStack

final class GroupStyleTableViewCell: UITableViewCell {
    let icon: UIImageView = {
        let imageView = UIImageView()
        imageView.applyCornerRadius(radius: 16)
        return imageView
    }()
    
    lazy var vTitleStackView: UIStackView = {
        let stackView = UIStackView()
        stackView.axis = .vertical
        stackView.spacing = 6
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
        label.font = FontStyles.RH7
        label.numberOfLines = 0
        return label
    }()
    
    let rightArrow: UIImageView = {
        let imageView = UIImageView()
        imageView.image = Asset.Icon.Arrows.celllRight.image
        return imageView
    }()
    
    var iconHeightConstraint: NSLayoutConstraint!
    var iconWidthConstraint: NSLayoutConstraint!

    override func prepareForReuse() {
        super.prepareForReuse()
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

extension GroupStyleTableViewCell {
    private func _init() {
        backgroundColor = .clear
        selectionStyle = .none
        separatorInset = UIEdgeInsets(all: .zero)
        let stackView = UIStackView()
        stackView.axis = .horizontal
        stackView.distribution = .fill
        stackView.alignment = .center
        stackView.spacing = 8
        stackView.isLayoutMarginsRelativeArrangement = true
        stackView.layoutMargins = UIEdgeInsets(top: 12, left: 13, bottom: 12, right: 13)
        stackView.translatesAutoresizingMaskIntoConstraints = false
        stackView.backgroundColor = Asset.Colors.Background.dark.color
        stackView.layer.cornerRadius = 12
        stackView.clipsToBounds = true
        contentView.addSubview(stackView)
        
        NSLayoutConstraint.activate([
            stackView.topAnchor.constraint(equalTo: contentView.topAnchor, constant: 8),
            stackView.leadingAnchor.constraint(equalTo: contentView.leadingAnchor, constant: 22),
            stackView.trailingAnchor.constraint(equalTo: contentView.trailingAnchor, constant: -22),
            stackView.bottomAnchor.constraint(equalTo: contentView.bottomAnchor, constant: -8)
        ])
        
        iconHeightConstraint = icon.heightAnchor.constraint(equalToConstant: 32)
        iconWidthConstraint = icon.widthAnchor.constraint(equalToConstant: 32)
        
        NSLayoutConstraint.activate([
            iconHeightConstraint,
            iconWidthConstraint
        ])
        
        icon.translatesAutoresizingMaskIntoConstraints = false
        stackView.addArrangedSubview(icon)
        
        vTitleStackView.translatesAutoresizingMaskIntoConstraints = false
        stackView.addArrangedSubview(vTitleStackView)
        vTitleStackView.setContentHuggingPriority(.required - 1, for: .vertical)
        
        stackView.addArrangedSubview(UStack.Spacer(height: nil, width: nil))
        rightArrow.translatesAutoresizingMaskIntoConstraints = false
        stackView.addArrangedSubview(rightArrow)

        rightArrow.image = Asset.Icon.Arrows.celllRight.image
    }
    
    func update(title: String, subTitle: String?, iconName: String, iconSize: CGFloat = 32) {
        titleLabel.text = title
        if let subTitle = subTitle, !subTitle.isEmpty {
            subTitleLabel.text = subTitle
            subTitleLabel.isHidden = false
        } else {
            subTitleLabel.isHidden = true
        }
        icon.image = UIImage(named: iconName)
        iconHeightConstraint.constant = iconSize
        iconWidthConstraint.constant = iconSize
    }
}
