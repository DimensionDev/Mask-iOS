//
//  WalletConnectSelectAccountCollectionCell.swift
//  Maskbook
//
//  Created by sxiaojian on 2021/12/21.
//  Copyright © 2021 dimension. All rights reserved.
//

import Foundation
import UIKit

class WalletConnectSelectAccountCollectionCell: UICollectionViewCell {
    let chainIcon: UIImageView = {
        let imageView = UIImageView()
        imageView.translatesAutoresizingMaskIntoConstraints = false
        imageView.contentMode = .scaleAspectFit
        imageView.applyCornerRadius(radius: 23)
        return imageView
    }()
    
    let dotView: UIView = {
        let view = UIView()
        view.applyCornerRadius(radius: 3)
        view.translatesAutoresizingMaskIntoConstraints = false
        view.backgroundColor = Asset.Colors.Background.yellow.color
        return view
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
        contentView.addSubview(chainIcon)
        NSLayoutConstraint.activate([
            chainIcon.topAnchor.constraint(equalTo: contentView.topAnchor),
            chainIcon.centerXAnchor.constraint(equalTo: contentView.centerXAnchor),
            chainIcon.heightAnchor.constraint(equalToConstant: 46),
            chainIcon.widthAnchor.constraint(equalToConstant: 46)
        ])

        contentView.addSubview(dotView)
        NSLayoutConstraint.activate([
            dotView.centerXAnchor.constraint(equalTo: contentView.centerXAnchor),
            dotView.topAnchor.constraint(equalTo: chainIcon.bottomAnchor, constant: 8),
            dotView.heightAnchor.constraint(equalToConstant: 6),
            dotView.widthAnchor.constraint(equalToConstant: 6)
        ])
    }
    
    func configWith(chain: WalletListViewModel.CoinItem, isSelected: Bool) {
        chainIcon.image = isSelected ? chain.selectedImage : chain.unselectedImage
        dotView.isHidden = !isSelected
    }
}
