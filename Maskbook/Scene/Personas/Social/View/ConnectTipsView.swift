//
//  ConnectTipsView.swift
//  Maskbook
//
//  Created by sxiaojian on 2022/1/8.
//  Copyright © 2022 dimension. All rights reserved.
//

import Foundation
import UIKit

extension ConnectableSocialListViewController {
    class ConnectTipsView: UIView {
        private lazy var titleLabel: UILabel = {
            let label = UILabel()
            label.font = FontStyles.RH6
            label.textColor = Asset.Colors.Public.white.color
            label.text = L10n.Scene.PersonaSocial.connectTips
            label.numberOfLines = 0
            return label
        }()
    
        lazy var closeImage: UIImageView = {
            let imageView = UIImageView()
            imageView.image = Asset.Plugins.closeSquare.image.withRenderingMode(.alwaysTemplate)
            imageView.tintColor = Asset.Colors.Public.white.color
            return imageView
        }()
    
        private var backgroundLayer: CAGradientLayer = {
            let layer = CAGradientLayer()
            layer.colors = [
                Asset.Colors.ConnectTip.background1.color.cgColor,
                Asset.Colors.ConnectTip.background2.color.cgColor
            ]
            layer.locations = [0, 1]
            layer.startPoint = CGPoint(x: 0, y: 0)
            layer.endPoint = CGPoint(x: 0, y: 1)
            return layer
        }()
    
        override func layoutSubviews() {
            super.layoutSubviews()
            backgroundLayer.frame = bounds
        }
    
        init() {
            super.init(frame: .zero)
            layer.cornerRadius = 12
            layer.masksToBounds = true
            layer.addSublayer(backgroundLayer)
        
            withSubViews {
                titleLabel
                closeImage
            }
            NSLayoutConstraint.activate([
                titleLabel.topAnchor.constraint(equalTo: topAnchor, constant: 10),
                titleLabel.leadingAnchor.constraint(equalTo: leadingAnchor, constant: 16),
                titleLabel.trailingAnchor.constraint(equalTo: trailingAnchor, constant: -50),
                titleLabel.bottomAnchor.constraint(equalTo: bottomAnchor, constant: -10)
            ])
        
            NSLayoutConstraint.activate([
                closeImage.widthAnchor.constraint(equalToConstant: 24),
                closeImage.heightAnchor.constraint(equalToConstant: 24),
                closeImage.centerYAnchor.constraint(equalTo: centerYAnchor),
                closeImage.trailingAnchor.constraint(equalTo: trailingAnchor, constant: -16)
            ])
        }

        @available(*, unavailable)
        required init?(coder: NSCoder) {
            fatalError("init(coder:) has not been implemented")
        }
    }
}
