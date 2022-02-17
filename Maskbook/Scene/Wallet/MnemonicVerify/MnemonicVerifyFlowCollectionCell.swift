//
//  MnemonicVerifyFlowCollectionCell.swift
//  Maskbook
//
//  Created by xiaojian sun on 2021/5/21.
//  Copyright © 2021 dimension. All rights reserved.
//

import Foundation
import UIKit

class MnemonicVerifyFlowCollectionCell: UICollectionViewCell {
    let wordLabel: UILabel = {
        let label = UILabel()
        label.font = FontStyles.BH1
        return label
    }()
    
    let line: UIView = {
        let view = UIView()
        view.backgroundColor = Asset.Colors.Text.lighter.color
        return view
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
        applyCornerRadius(radius: 12)
        applyShadow(color: Asset.Colors.Public.s1.color, alpha: 0.15, x: 0, y: 6, blur: 12, cornerRadius: 12, spread: 0)
        contentView.clipsToBounds = true
        contentView.backgroundColor = Asset.Colors.Background.dark.color
        
        wordLabel.translatesAutoresizingMaskIntoConstraints = false
        contentView.addSubview(wordLabel)
        NSLayoutConstraint.activate([
            wordLabel.topAnchor.constraint(equalTo: contentView.topAnchor, constant: 30),
            wordLabel.centerXAnchor.constraint(equalTo: contentView.centerXAnchor)
        ])
        
        line.translatesAutoresizingMaskIntoConstraints = false
        contentView.addSubview(line)
        NSLayoutConstraint.activate([
            line.topAnchor.constraint(equalTo: contentView.topAnchor, constant: 94),
            line.centerXAnchor.constraint(equalTo: contentView.centerXAnchor),
            line.widthAnchor.constraint(equalToConstant: 120),
            line.heightAnchor.constraint(equalToConstant: 1)
        ])
    }
    
    func configWith(word: String?, selected: Bool) {
        wordLabel.text = word ?? ""
        if selected {
            wordLabel.textColor = Asset.Colors.Text.lighter.color
            contentView.backgroundColor = Asset.Colors.Public.blue.color
            line.isHidden = false
        } else {
            wordLabel.textColor = Asset.Colors.Public.info.color
            contentView.backgroundColor = Asset.Colors.Public.Background.info.color
            line.isHidden = true
        }
    }
}
