//
//  SocialAccountAddCollectionCell.swift
//  Maskbook
//
//  Created by sxiaojian on 2022/1/8.
//  Copyright © 2022 dimension. All rights reserved.
//

import Foundation
import UIKit
class SocialAccountAddCollectionCell: UICollectionViewCell {
    private lazy var imageView: UIImageView = {
        let imageView = UIImageView()
        imageView.image = Asset.Images.Scene.Personas.add.image
        NSLayoutConstraint.activate([
            imageView.heightAnchor.constraint(equalToConstant: 64),
            imageView.widthAnchor.constraint(equalToConstant: 64)
        ])
        return imageView
    }()
    
    private var titleLabel: UILabel = {
        let label = UILabel()
        label.font = FontStyles.MH7
        label.textColor = Asset.Colors.Text.dark.color
        label.text = L10n.Scene.PersonaSocial.add
        label.textAlignment = .center
        return label
    }()
    
    override func prepareForReuse() {
        super.prepareForReuse()
    }
    
    override init(frame: CGRect) {
        super.init(frame: .zero)
        setupUI()
    }
    
    required init?(coder: NSCoder) {
        super.init(coder: coder)
        setupUI()
    }
    
    func setupUI() {
        contentView.withSubViews {
            imageView
            titleLabel
        }
        NSLayoutConstraint.activate([
            imageView.centerXAnchor.constraint(equalTo: contentView.centerXAnchor),
            titleLabel.centerXAnchor.constraint(equalTo: contentView.centerXAnchor)
        ])
        
        NSLayoutConstraint.activate([
            imageView.topAnchor.constraint(equalTo: contentView.topAnchor, constant: 12),
            titleLabel.topAnchor.constraint(equalTo: contentView.topAnchor, constant: 82)
        ])
    }
    
    func setEditMode(isEditing: Bool) {
        imageView.alpha = isEditing ? 0.5 : 1
        titleLabel.alpha = isEditing ? 0.25 : 1
    }
}
