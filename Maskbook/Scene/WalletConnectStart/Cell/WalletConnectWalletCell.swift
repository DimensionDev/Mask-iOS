//
//  WalletConnectWalletCell.swift
//  Maskbook
//
//  Created by xiaojian sun on 2021/9/22.
//  Copyright © 2021 dimension. All rights reserved.
//

import Combine
import Foundation
import UIKit

class WalletConnectWalletCell: UICollectionViewCell {
    var disposeBag = Set<AnyCancellable>()
    
    let walletIcon: UIImageView = {
        let imageView = UIImageView()
        imageView.translatesAutoresizingMaskIntoConstraints = false
        imageView.contentMode = .scaleAspectFit
        imageView.applyCornerRadius(radius: 20)
        return imageView
    }()
    
    let nameLabel: UILabel = {
        let label = UILabel()
        label.textColor = Asset.Colors.Text.normal.color
        label.font = FontStyles.RH10
        label.translatesAutoresizingMaskIntoConstraints = false
        label.lineBreakMode = .byTruncatingTail
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
        contentView.addSubview(walletIcon)
        NSLayoutConstraint.activate([
            walletIcon.topAnchor.constraint(equalTo: contentView.topAnchor),
            walletIcon.centerXAnchor.constraint(equalTo: contentView.centerXAnchor),
            walletIcon.heightAnchor.constraint(equalToConstant: 48),
            walletIcon.widthAnchor.constraint(equalToConstant: 48)
        ])
        walletIcon.publisher(for: \.bounds)
            .sink { [weak self] rect in
                self?.walletIcon.applyCornerRadius(radius: rect.width / 2)
            }
            .store(in: &disposeBag)
        
        contentView.addSubview(nameLabel)
        NSLayoutConstraint.activate([
            nameLabel.centerXAnchor.constraint(equalTo: contentView.centerXAnchor),
            nameLabel.topAnchor.constraint(equalTo: walletIcon.bottomAnchor, constant: 10)
        ])
    }
    
    func configWith(wallet: InstalledWallet) {
        walletIcon.setNetworkImage(url: wallet.imageURL)
        if wallet.shortName.isNotEmpty {
            nameLabel.text = wallet.shortName
        } else {
            nameLabel.text = wallet.name
        }
    }
}
