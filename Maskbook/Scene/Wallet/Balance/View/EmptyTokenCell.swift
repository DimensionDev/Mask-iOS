//
//  EmptyTokenCell.swift
//  Maskbook
//
//  Created by BradGao on 2021/12/3.
//  Copyright © 2021 dimension. All rights reserved.
//

import UIKit

class EmptyTokenCell: UITableViewCell {
    private var iconImageView: UIImageView = {
        let imageView = UIImageView()
        imageView.contentMode = .scaleAspectFit
        imageView.translatesAutoresizingMaskIntoConstraints = false
        return imageView
    }()
    
    var titleLabel: UILabel = {
        let label = UILabel()
        label.font = FontStyles.mh6.uifont
        label.textColor = Asset.Colors.Text.darklight.color
        label.textAlignment = .center
        label.numberOfLines = 0
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
        
        iconImageView.image = Asset.Images.Scene.Balance.emptyToken.image
        
        contentView.addSubview(iconImageView)
        contentView.addSubview(titleLabel)
        
        NSLayoutConstraint.activate([
            iconImageView.topAnchor.constraint(equalTo: contentView.topAnchor,
                                               constant: 80),
            iconImageView.centerXAnchor.constraint(equalTo: contentView.centerXAnchor),
            iconImageView.widthAnchor.constraint(equalToConstant: 64),
            iconImageView.heightAnchor.constraint(equalToConstant: 64)
        ])
        
        NSLayoutConstraint.activate([
            titleLabel.leadingAnchor.constraint(equalTo: contentView.readableContentGuide.leadingAnchor),
            titleLabel.trailingAnchor.constraint(equalTo: contentView.readableContentGuide.trailingAnchor),
            titleLabel.topAnchor.constraint(equalTo: iconImageView.bottomAnchor,
                                            constant: 12),
            titleLabel.heightAnchor.constraint(equalToConstant: 21),
            titleLabel.bottomAnchor.constraint(equalTo: contentView.bottomAnchor, constant: 8)
        ])
    }
    
    func setTitleText(title: String) {
        titleLabel.text = title
    }
}
