//
//  TokenIconImageView.swift
//  Maskbook
//
//  Created by BradGao on 2021/12/2.
//  Copyright © 2021 dimension. All rights reserved.
//

import UIKit

class TokenIconImageView: UIView {
    private var tokenIconImageView: UIImageView = {
        let imageView = UIImageView()
        imageView.contentMode = .scaleAspectFit
        imageView.translatesAutoresizingMaskIntoConstraints = false
        imageView.applyCornerRadius(radius: 19)
        return imageView
    }()
    
    private var tokenBlockchainImageView: UIImageView = {
        let imageView = UIImageView()
        imageView.contentMode = .scaleAspectFit
        imageView.translatesAutoresizingMaskIntoConstraints = false
        imageView.layer.borderWidth = 1
        imageView.layer.borderColor = Asset.Colors.Background.dark.color.cgColor
        imageView.isHidden = true
        imageView.applyCornerRadius(radius: 9)
        return imageView
    }()
    
    init() {
        super.init(frame: .zero)
        setupSubViews()
    }
    
    @available(*, unavailable)
    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
    
    private func setupSubViews() {
        backgroundColor = .clear
        addSubview(tokenIconImageView)
        addSubview(tokenBlockchainImageView)
        
        NSLayoutConstraint.activate([
            tokenIconImageView.leadingAnchor.constraint(equalTo: leadingAnchor),
            tokenIconImageView.topAnchor.constraint(equalTo: topAnchor),
            tokenIconImageView.bottomAnchor.constraint(equalTo: bottomAnchor),
            tokenIconImageView.widthAnchor.constraint(equalTo: tokenIconImageView.heightAnchor)
        ])
        
        NSLayoutConstraint.activate([
            tokenBlockchainImageView.leadingAnchor.constraint(equalTo: tokenIconImageView.leadingAnchor,
                                                              constant: 30),
            tokenBlockchainImageView.widthAnchor.constraint(equalToConstant: 18),
            tokenBlockchainImageView.heightAnchor.constraint(equalToConstant: 18),
            tokenBlockchainImageView.bottomAnchor.constraint(equalTo: tokenIconImageView.bottomAnchor)
        ])
    }
    
    func setImage(iconImageUrl: String?) {
        tokenIconImageView.setNetworkImage(url: iconImageUrl)
    }
    
    func setBlockchainIcon(blockchain: BlockChainNetwork?, isHidden: Bool) {
        tokenBlockchainImageView.isHidden = isHidden
        tokenBlockchainImageView.image = blockchain?.selectedIcon
    }
    
    override func traitCollectionDidChange(_ previousTraitCollection: UITraitCollection?) {
        super.traitCollectionDidChange(previousTraitCollection)
             tokenBlockchainImageView.layer.borderColor = Asset.Colors.Background.dark.color.cgColor
    }
}
