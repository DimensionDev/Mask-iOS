//
//  SocialProfileCell.swift
//  Maskbook
//
//  Created by BradGao on 2021/8/19.
//  Copyright © 2021 dimension. All rights reserved.
//

import UIKit

class SocialProfileDetectCell: UITableViewCell {
    lazy var bgView: UIView = {
        let view = UIView()
        view.backgroundColor = Asset.Colors.Background.dark.color
        view.applyCornerRadius(radius: 8)
        return view
    }()
    
    lazy var titleLabel: UILabel = {
        let label = UILabel()
        label.font = FontStyles.BH5
        label.textColor = Asset.Colors.Text.dark.color
        label.setContentHuggingPriority(.defaultHigh, for: .horizontal)
        return label
    }()
    
    lazy var connectedLabel: UILabel = {
        let label = UILabel()
        label.font = FontStyles.MH5
        label.text = L10n.Scene.Social.connected
        label.textColor = Asset.Colors.Text.normal.color
        label.textAlignment = .right
        label.setContentHuggingPriority(.defaultLow, for: .horizontal)
        return label
    }()
    
    var isConnected = false {
        didSet {
            connectedLabel.isHidden = !isConnected
            titleLabel.textColor = isConnected ? Asset.Colors.Text.normal.color : Asset.Colors.Text.dark.color
            bgView.backgroundColor = isConnected ? Asset.Colors.Background.disable.color :  Asset.Colors.Background.dark.color
        }
    }
    
    override init(style: UITableViewCell.CellStyle, reuseIdentifier: String?) {
        super.init(style: style, reuseIdentifier: reuseIdentifier)
        
        setupUI()
    }
    
    @available(*, unavailable)
    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
    
    override func prepareForReuse() {
        super.prepareForReuse()
        isConnected = false
        titleLabel.text = nil
        connectedLabel.text = nil
    }
    
    private func setupUI() {
        contentView.backgroundColor = Asset.Colors.Background.normal.color
        contentView.addSubview(bgView)
        bgView.addSubview(titleLabel)
        bgView.addSubview(connectedLabel)

        bgView.translatesAutoresizingMaskIntoConstraints = false
        NSLayoutConstraint.activate([
            bgView.topAnchor.constraint(equalTo: contentView.topAnchor),
            bgView.leadingAnchor.constraint(equalTo: contentView.leadingAnchor, constant: 22.5),
            contentView.bottomAnchor.constraint(equalTo: bgView.bottomAnchor),
            contentView.trailingAnchor.constraint(equalTo: bgView.trailingAnchor, constant: 22.5),
            bgView.heightAnchor.constraint(equalToConstant: 52)
        ])

        titleLabel.translatesAutoresizingMaskIntoConstraints = false
        titleLabel.setContentCompressionResistancePriority(.defaultHigh, for: .horizontal)
        NSLayoutConstraint.activate([
            titleLabel.centerYAnchor.constraint(equalTo: bgView.centerYAnchor),
            titleLabel.leadingAnchor.constraint(equalTo: bgView.leadingAnchor, constant: 12)
        ])
        
        connectedLabel.translatesAutoresizingMaskIntoConstraints = false
        connectedLabel.setContentCompressionResistancePriority(.defaultHigh + 1, for: .horizontal)
        NSLayoutConstraint.activate([
            connectedLabel.centerYAnchor.constraint(equalTo: bgView.centerYAnchor),
            connectedLabel.leadingAnchor.constraint(equalTo: titleLabel.trailingAnchor, constant: 12),
            connectedLabel.trailingAnchor.constraint(equalTo: bgView.trailingAnchor, constant: -12)
        ])
    }
}
