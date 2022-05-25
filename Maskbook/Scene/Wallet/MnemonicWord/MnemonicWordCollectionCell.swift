//
//  MnemonicWordCollectionCell.swift
//  Maskbook
//
//  Created by xiaojian sun on 2021/5/20.
//  Copyright © 2021 dimension. All rights reserved.
//

import Foundation
import UIKit

class MnemonicWordCollectionCell: UICollectionViewCell {
    let orderLabel: UILabel = {
        let label = UILabel()
        label.font = FontStyles.BH5
        label.textColor = Asset.Colors.Text.light.color
        return label
    }()
    
    let wordLabel: UILabel = {
        let label = UILabel()
        label.font = FontStyles.BH5
        label.textColor = Asset.Colors.Text.normal.color
        label.numberOfLines = 1
        label.adjustsFontSizeToFitWidth = true
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
        contentView.applyCornerRadius(radius: 8)
        contentView.clipsToBounds = false
        contentView.backgroundColor = Asset.Colors.Background.dark.color
        let stackView = UIStackView()
        stackView.axis = .horizontal
        stackView.spacing = 8
        stackView.layoutMargins = UIEdgeInsets(top: 0, left: 26, bottom: 0, right: 0)
        stackView.isLayoutMarginsRelativeArrangement = true
        stackView.distribution = .fill
        stackView.alignment = .center
        contentView.addSubview(stackView)
        
        stackView.translatesAutoresizingMaskIntoConstraints = false
        NSLayoutConstraint.activate([
            stackView.topAnchor.constraint(equalTo: contentView.topAnchor),
            stackView.leadingAnchor.constraint(equalTo: contentView.leadingAnchor),
            stackView.trailingAnchor.constraint(equalTo: contentView.trailingAnchor),
            stackView.bottomAnchor.constraint(equalTo: contentView.bottomAnchor)
        ])
        
        orderLabel.translatesAutoresizingMaskIntoConstraints = false
        stackView.addArrangedSubview(orderLabel)
        
        wordLabel.translatesAutoresizingMaskIntoConstraints = false
        stackView.addArrangedSubview(wordLabel)
        
        let space = UIView()
        space.setContentHuggingPriority(.defaultLow, for: .horizontal)
        space.translatesAutoresizingMaskIntoConstraints = false
        stackView.addArrangedSubview(space)
    }
}
