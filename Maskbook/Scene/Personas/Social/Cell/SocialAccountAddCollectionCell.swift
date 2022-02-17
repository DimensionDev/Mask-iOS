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
            imageView.heightAnchor.constraint(equalToConstant: 30),
            imageView.widthAnchor.constraint(equalToConstant: 30)
        ])
        return imageView
    }()
    
    private lazy var circleView: UIView = {
        let view = UIView()
        view.backgroundColor = Asset.Colors.Background.dark.color
        view.clipsToBounds = false
        view.applyCornerRadius(radius: 32, cornerCurve: .circular)
        NSLayoutConstraint.activate([
            view.heightAnchor.constraint(equalToConstant: 64),
            view.widthAnchor.constraint(equalToConstant: 64)
        ])
        return view
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
        circleView.applyShadow(color: Asset.Colors.Shadow.socialShadow.color,
                               alpha: 1,
                               x: 0,
                               y: 6,
                               blur: 12,
                               cornerRadius: 5,
                               spread: 0)
        contentView.withSubViews {
            circleView
            imageView
            titleLabel
        }
        NSLayoutConstraint.activate([
            circleView.centerXAnchor.constraint(equalTo: contentView.centerXAnchor),
            imageView.centerXAnchor.constraint(equalTo: contentView.centerXAnchor),
            titleLabel.centerXAnchor.constraint(equalTo: contentView.centerXAnchor)
        ])
        
        NSLayoutConstraint.activate([
            circleView.topAnchor.constraint(equalTo: contentView.topAnchor, constant: 12),
            imageView.topAnchor.constraint(equalTo: contentView.topAnchor, constant: 28),
            titleLabel.topAnchor.constraint(equalTo: contentView.topAnchor, constant: 82)
        ])
    }
    
    func setEditMode(isEditing: Bool) {
        imageView.alpha = isEditing ? 0.5 : 1
        titleLabel.alpha = isEditing ? 0.25 : 1
    }
}
