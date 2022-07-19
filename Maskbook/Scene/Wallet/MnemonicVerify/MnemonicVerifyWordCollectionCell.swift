//
//  MnemonicVerifyWordCollectionCell.swift
//  Maskbook
//
//  Created by xiaojian sun on 2021/5/24.
//  Copyright © 2021 dimension. All rights reserved.
//

import Foundation
import UIKit

enum MnemonicVerifyWordCellState {
    case normal
    case verified
    case blank
}
class MnemonicVerifyWordCollectionCell: UICollectionViewCell {
    
    let wordLabel: UILabel = {
        let label = UILabel()
        label.font = FontStyles.BH6
        label.textColor = Asset.Colors.Text.main.color
        return label
    }()
    
    let rectangle = CAShapeLayer()
    
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
        applyCornerRadius(radius: 8)
        
        wordLabel.translatesAutoresizingMaskIntoConstraints = false
        contentView.addSubview(wordLabel)
        NSLayoutConstraint.activate([
            wordLabel.centerXAnchor.constraint(equalTo: contentView.centerXAnchor),
            wordLabel.centerYAnchor.constraint(equalTo: contentView.centerYAnchor)
        ])
        
        rectangle.lineCap         = .round
        rectangle.cornerRadius    = 8
        rectangle.strokeColor     = Asset.Colors.Text.link.color.cgColor
        rectangle.lineDashPattern = [4, 4]
        rectangle.fillColor = nil
        rectangle.lineWidth = 2
        contentView.layer.addSublayer(rectangle)
    }
    
    func configWith(word: String, state: MnemonicVerifyWordCellState) {
        wordLabel.text = word
        CATransaction.begin()
        CATransaction.setDisableActions(true)

        switch state {
        case .normal:
            contentView.alpha = 0.5
            contentView.backgroundColor = Asset.Colors.Background.dark.color
            rectangle.opacity = 0
        case .verified:
            contentView.alpha = 1
            contentView.backgroundColor = Asset.Colors.Background.dark.color
            rectangle.opacity = 0
        case .blank:
            wordLabel.text = ""
            contentView.alpha = 1
            contentView.backgroundColor = .clear
            rectangle.opacity = 1
        }
        CATransaction.commit()
    }
    
    override func layoutSubviews() {
        super.layoutSubviews()
        rectangle.frame = self.bounds
        rectangle.path = UIBezierPath(roundedRect: self.bounds, cornerRadius: 8).cgPath
    }
}
