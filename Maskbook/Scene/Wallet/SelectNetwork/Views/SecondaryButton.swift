//
//  SecondaryButton.swift
//  Maskbook
//
//  Created by Hugo L on 2021/5/25.
//  Copyright © 2021 dimension. All rights reserved.
//

import UIKit

class SecondaryButton: UIButton {
    init(title: String) {
        super.init(frame: .zero)
        
        setTitleColor(Asset.Colors.Text.link.color, for: .normal)
        setTitle(title, for: .normal)
        setBackgroundImage(UIImage.placeholder(color: Asset.Colors.Background.blue1.color), for: .normal)
        layer.cornerRadius = 8
        clipsToBounds = true
        titleLabel?.font = FontStyles.BH5
    }

    @available(*, unavailable)
    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
    
    override func traitCollectionDidChange(_ previousTraitCollection: UITraitCollection?) {
        setBackgroundImage(UIImage.placeholder(color: Asset.Colors.Background.blue1.color), for: .normal)
    }
}
