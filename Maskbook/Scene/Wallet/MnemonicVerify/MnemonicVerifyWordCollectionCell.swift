//
//  MnemonicVerifyWordCollectionCell.swift
//  Maskbook
//
//  Created by xiaojian sun on 2021/5/24.
//  Copyright © 2021 dimension. All rights reserved.
//

import Foundation
import UIKit

class MnemonicVerifyWordCollectionCell: UICollectionViewCell {
    let wordLabel: UILabel = {
        let label = UILabel()
        label.font = FontStyles.BH6
        return label
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
    
    func configure() {
        layer.cornerRadius = 8
        layer.cornerCurve = .continuous
        clipsToBounds = true
        
        wordLabel.translatesAutoresizingMaskIntoConstraints = false
        contentView.addSubview(wordLabel)
        NSLayoutConstraint.activate([
            wordLabel.centerXAnchor.constraint(equalTo: contentView.centerXAnchor),
            wordLabel.centerYAnchor.constraint(equalTo: contentView.centerYAnchor)
        ])
    }
    
    func configWith(word: String, isSelected: Bool) {
        wordLabel.text = word
        if isSelected {
            wordLabel.textColor = Asset.Colors.Text.lighter.color
            contentView.backgroundColor = Asset.Colors.Background.blue.color
        } else {
            wordLabel.textColor = Asset.Colors.Text.normal.color
            contentView.backgroundColor = Asset.Colors.Background.dark.color
        }
    }
}
