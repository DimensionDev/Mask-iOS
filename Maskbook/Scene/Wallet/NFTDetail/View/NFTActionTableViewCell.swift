//
//  NFTActionTableViewCell.swift
//  Maskbook
//
//  Created by caiyu on 2022/2/23.
//  Copyright © 2022 dimension. All rights reserved.
//

import UIKit

class NFTActionTableViewCell: UITableViewCell {
    static let reuseIdentifier = "NFTActionTableViewCell"

    lazy var bgView: UIView = {
        let view = UIView()
        view.backgroundColor = Asset.Colors.Background.dark.color
        view.layer.cornerRadius = 8
        return view
    }()
    
    lazy var iconView: UIImageView = {
        let view = UIImageView()
        return view
    }()
    
    lazy var titleLabel: UILabel = {
        let label = UILabel()
        label.font = FontStyles.BH5
        label.textColor = Asset.Colors.Text.dark.color
        label.setContentHuggingPriority(.defaultLow, for: .horizontal)
        return label
    }()
    
    lazy var stackView: UIStackView = {
        let view = UIStackView()
        view.axis = .horizontal
        view.alignment = .center
        view.distribution = .fill
        view.layoutMargins = UIEdgeInsets(top: 12, left: 16, bottom: 12, right: 16)
        view.isLayoutMarginsRelativeArrangement = true
        view.spacing = 8
        return view
    }()
    
    lazy var arrowView: UIImageView = {
        let view = UIImageView()
        view.image = Asset.Images.Scene.Balance.expandArrowRight.image
        view.isHidden = true
        return view
    }()
    
    var isArrowDisplay = false {
        didSet {
            arrowView.isHidden = !isArrowDisplay
        }
    }
    
    override init(style: UITableViewCell.CellStyle, reuseIdentifier: String?) {
        super.init(style: style, reuseIdentifier: reuseIdentifier)
        
        setupUI()
    }
    
    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
    
    private func setupUI() {
        contentView.backgroundColor = Asset.Colors.Background.normal.color
        contentView.addSubview(bgView)
        contentView.addSubview(stackView)

        stackView.addArrangedSubview(iconView)
        stackView.addArrangedSubview(titleLabel)
        stackView.addSubview(arrowView)

        bgView.translatesAutoresizingMaskIntoConstraints = false
        NSLayoutConstraint.activate([
            bgView.topAnchor.constraint(equalTo: contentView.topAnchor, constant: 8),
            bgView.leadingAnchor.constraint(equalTo: contentView.leadingAnchor, constant: LayoutConstraints.leading),
            contentView.bottomAnchor.constraint(equalTo: bgView.bottomAnchor, constant: 8),
            contentView.trailingAnchor.constraint(equalTo: bgView.trailingAnchor, constant: LayoutConstraints.trailing)
        ])

        stackView.translatesAutoresizingMaskIntoConstraints = false
        NSLayoutConstraint.activate([
            stackView.topAnchor.constraint(equalTo: bgView.topAnchor),
            stackView.leadingAnchor.constraint(equalTo: bgView.leadingAnchor),
            bgView.bottomAnchor.constraint(equalTo: stackView.bottomAnchor),
            bgView.trailingAnchor.constraint(equalTo: stackView.trailingAnchor)
        ])

        iconView.translatesAutoresizingMaskIntoConstraints = false
        NSLayoutConstraint.activate([
            iconView.widthAnchor.constraint(equalToConstant: 32),
            iconView.heightAnchor.constraint(equalToConstant: 32)
        ])
        
        arrowView.translatesAutoresizingMaskIntoConstraints = false
        NSLayoutConstraint.activate([
            arrowView.widthAnchor.constraint(equalToConstant: 24),
            arrowView.heightAnchor.constraint(equalToConstant: 24),
            arrowView.centerYAnchor.constraint(equalTo: stackView.centerYAnchor),
            arrowView.rightAnchor.constraint(equalTo: stackView.rightAnchor, constant: -12)
        ])
    }
}
