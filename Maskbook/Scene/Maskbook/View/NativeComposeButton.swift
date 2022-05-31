//
//  NativeComposeButton.swift
//  Maskbook
//
//  Created by caiyu on 2022/5/26.
//  Copyright © 2022 dimension. All rights reserved.
//

import UIKit
import UStack

class NativeComposeButton: UIView {
    
    init() {
        super.init(frame: .zero)
        initView()
    }
    
    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
    
    func initView() {
        self.applyRadius(radius: 20)
        self.applyShadow(color: Asset.Colors.Public.blue.color, alpha: 1, x: 0, y: 4, blur: 8)
        self.applyShadow(color: Asset.Colors.Public.blue.color, alpha: 1, x: 0, y: -4, blur: 4)
        self.layer.borderWidth = 1
        self.layer.borderColor = Asset.Colors.Public.blue.color.cgColor
        addSubview(hStackView)
        hStackView.translatesAutoresizingMaskIntoConstraints = false
        NSLayoutConstraint.activate([
            hStackView.heightAnchor.constraint(equalToConstant: 52),
            hStackView.topAnchor.constraint(equalTo: self.topAnchor),
            hStackView.leadingAnchor.constraint(equalTo: self.leadingAnchor),
            hStackView.bottomAnchor.constraint(equalTo: self.bottomAnchor),
            hStackView.trailingAnchor.constraint(equalTo: self.trailingAnchor),
        ])
    }
    
    private lazy var logoImageView: UIImageView = {
        let imageView = UIImageView()
        imageView.image = Asset.Images.Scene.Compose.logo.image
        imageView.contentMode = .scaleAspectFit
        imageView.translatesAutoresizingMaskIntoConstraints = false
        NSLayoutConstraint.activate([
            imageView.widthAnchor.constraint(equalToConstant: 24),
            imageView.heightAnchor.constraint(equalToConstant: 24)
        ])
        return imageView
    }()
    
    private lazy var titleLabel: UILabel = {
        let label = UILabel()
        label.font = FontStyles.BH7
        label.textColor = Asset.Colors.Twitter.strong.color
        label.text = "Send encrypted post"
        return label
    }()
    
    private lazy var arrowImageView: UIImageView = {
        let imageView = UIImageView()
        imageView.contentMode = .scaleAspectFit
        imageView.image = Asset.Plugins.pluginArrow.image
        imageView.translatesAutoresizingMaskIntoConstraints = false
        NSLayoutConstraint.activate([
            imageView.widthAnchor.constraint(equalToConstant: 24),
            imageView.heightAnchor.constraint(equalToConstant: 24)
        ])
        return imageView
    }()
    
    private lazy var hStackView = HStackView(spacing: 4) {
        Spacer(width: 4)
        logoImageView
        titleLabel
        arrowImageView
        Spacer()
    }
}
