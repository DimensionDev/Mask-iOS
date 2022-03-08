//
//  PersonaCollectionCell.swift
//  Maskbook
//
//  Created by xiaojian sun on 2022/3/7.
//  Copyright © 2022 dimension. All rights reserved.
//

import Combine
import CoreDataStack
import Foundation
import SwiftUI
import UIKit
import UStack

protocol PersonaCollectionCellDelegate: AnyObject {
    func moreButtonClicked()
    func avatarClicked()
}

class PersonaCollectionCell: UICollectionViewCell {
    static let colors1 = [
        Asset.Colors.Gradient.persona1.color.cgColor,
        Asset.Colors.Gradient.persona2.color.cgColor
    ]
    
    static let colors2 = [
        Asset.Colors.Gradient.persona3.color.cgColor,
        Asset.Colors.Gradient.persona4.color.cgColor
    ]
    
    static let colors3 = [
        Asset.Colors.Gradient.persona5.color.cgColor,
        Asset.Colors.Gradient.persona6.color.cgColor
    ]
    
    static let graidentColors = [colors1, colors2, colors3]
    
    private lazy var disposeBag = Set<AnyCancellable>()
    
    weak var delegate: PersonaCollectionCellDelegate?
    
    private lazy var backgroundImageView: UIImageView = {
        let imageView = UIImageView()
        imageView.contentMode = .scaleToFill
        imageView.image = Asset.Images.Scene.Personas.personaBG.image
        return imageView
    }()
    
//    private lazy var shadowImageView: UIImageView = {
//        let imageView = UIImageView()
//        imageView.contentMode = .scaleAspectFit
//        imageView.image = Asset.Images.Scene.Personas.personaShadow.image
//        return imageView
//    }()
    
    private lazy var avatarImageView: UIImageView = {
        let imageView = UIImageView()
        imageView.contentMode = .scaleAspectFit
        imageView.image = Asset.Images.Scene.Personas.personaDefault.image
        return imageView
    }()
    
    private lazy var nameLabel: UILabel = {
        let label = UILabel()
        label.font = FontStyles.BH5
        label.textColor = Asset.Colors.Public.white.color
        return label
    }()
    
    private lazy var identifierLabel: UILabel = {
        let label = UILabel()
        label.font = FontStyles.RH10
        label.textColor = Asset.Colors.Public.white.color
        label.numberOfLines = 0
        label.adjustsFontSizeToFitWidth = true
        return label
    }()
    
    private lazy var littleMaskView: UIImageView = {
        let imageView = UIImageView()
        imageView.contentMode = .scaleAspectFit
        imageView.image = Asset.Icon.Logo.littleMask.image
        return imageView
    }()
    
    private lazy var moreButton: UIButton = {
        let button = UIButton(type: .system)
        button.tintColor = Asset.Colors.AccountCard.nameText.color
        button.setImage(Asset.Images.Scene.Balance.moreButton.image, for: .normal)
        return button
    }()
    
    private lazy var stack: HStackView = {
        let identifierStackView = HStackView {
            littleMaskView
                .cv.apply {
                    NSLayoutConstraint.activate([
                        $0.heightAnchor.constraint(equalToConstant: 16),
                        $0.widthAnchor.constraint(equalToConstant: 16)
                    ])
                }
            identifierLabel
        }
        
        let infoStack = VStackView {
            nameLabel
            identifierStackView
        }
        
        let stack = HStackView(spacing: 12, alignment: .center) {
            avatarImageView
                .cv.apply {
                    NSLayoutConstraint.activate([
                        $0.heightAnchor.constraint(equalToConstant: 56),
                        $0.widthAnchor.constraint(equalToConstant: 56)
                    ])
                }
            infoStack
            moreButton
                .cv.apply {
                    NSLayoutConstraint.activate([
                        $0.heightAnchor.constraint(equalToConstant: 32),
                        $0.widthAnchor.constraint(equalToConstant: 32)
                    ])
                }
        }
        stack.isLayoutMarginsRelativeArrangement = true
        stack.layoutMargins = UIEdgeInsets(top: 0, left: 12, bottom: 0, right: 12)
        return stack
    }()
    
    override func prepareForReuse() {
        super.prepareForReuse()
    }
    
    override init(frame: CGRect) {
        super.init(frame: .zero)
        configure()
    }
    
    required init?(coder: NSCoder) {
        super.init(coder: coder)
        configure()
    }
    
    private lazy var backgroundLayer: CAGradientLayer = {
        let layer = CAGradientLayer()
        layer.colors = [
            Asset.Colors.Gradient.persona1.color.cgColor,
            Asset.Colors.Gradient.persona2.color.cgColor
        ]
        layer.locations = [0, 1]
        layer.startPoint = CGPoint(x: 0, y: 0)
        layer.endPoint = CGPoint(x: 0, y: 1)
        layer.cornerRadius = 20
        layer.shadowColor = UIColor.black.cgColor
        layer.shadowOffset = CGSize(width: 0, height: 5)
        layer.shadowRadius = 5
        layer.shadowOpacity = 0.5
        return layer
    }()
    
    override func layoutSubviews() {
        super.layoutSubviews()
        backgroundLayer.frame = stack.bounds
    }
    
    private func configure() {
        contentView.backgroundColor = .clear
        
        contentView.withSubViews {
//            shadowImageView
            backgroundImageView
            stack
        }
        
        NSLayoutConstraint.activate([
            stack.topAnchor.constraint(equalTo: contentView.topAnchor),
            stack.leadingAnchor.constraint(equalTo: contentView.leadingAnchor),
            stack.trailingAnchor.constraint(equalTo: contentView.trailingAnchor),
            stack.bottomAnchor.constraint(equalTo: contentView.bottomAnchor, constant: -12)
        ])
        
        NSLayoutConstraint.activate([
            backgroundImageView.topAnchor.constraint(equalTo: contentView.topAnchor),
            backgroundImageView.leadingAnchor.constraint(equalTo: contentView.leadingAnchor),
            backgroundImageView.trailingAnchor.constraint(equalTo: contentView.trailingAnchor),
            backgroundImageView.bottomAnchor.constraint(equalTo: contentView.bottomAnchor, constant: -12)
        ])
        
//        NSLayoutConstraint.activate([
//            shadowImageView.topAnchor.constraint(equalTo: contentView.topAnchor),
//            shadowImageView.leadingAnchor.constraint(equalTo: contentView.leadingAnchor, constant: 40),
//            shadowImageView.trailingAnchor.constraint(equalTo: contentView.trailingAnchor, constant: -40),
//            shadowImageView.heightAnchor.constraint(equalToConstant: 40),
//            shadowImageView.bottomAnchor.constraint(equalTo: contentView.bottomAnchor, constant: 40)
//        ])
        
        contentView.layer.insertSublayer(backgroundLayer, at: 0)
        backgroundLayer.frame = stack.bounds
        
        moreButton
            .cv.tap()
            .sink { [weak self] _ in
                self?.delegate?.moreButtonClicked()
            }
            .store(in: &disposeBag)
        
        avatarImageView
            .cv.tapGesture()
            .sink { [weak self] _ in
                self?.delegate?.avatarClicked()
            }
            .store(in: &disposeBag)
    }
    
    func config(persona: PersonaRecord) {
        nameLabel.text = persona.nickname
        identifierLabel.text = persona.identifier
        avatarImageView.image = Asset.Images.Scene.Personas.personaDefault.image
    }
    
    func applyGradient(index: Int) {
        let index = index % 3
        backgroundLayer.colors = Self.graidentColors[index]
    }
}
