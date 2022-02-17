//
//  PrimeryButton.swift
//  Maskbook
//
//  Created by Hugo L on 2021/5/25.
//  Copyright © 2021 dimension. All rights reserved.
//

import UIKit

class PrimeryButton: UIButton {
    init(title: String) {
        super.init(frame: .zero)
        
        setTitleColor(Asset.Colors.Text.lighter.color, for: .normal)
        setTitleColor(Asset.Colors.Text.normal.color, for: .disabled)
        setTitle(title, for: .normal)
        setBackgroundImage(UIImage.placeholder(color: Asset.Colors.Public.blue.color), for: .normal)
        setBackgroundImage(UIImage.placeholder(color: Asset.Colors.Background.disable.color), for: .disabled)
        layer.cornerRadius = 8
        clipsToBounds = true
        titleLabel?.font = FontStyles.BH5
    }
    
    init(image: UIImage) {
        super.init(frame: .zero)
        
        setTitleColor(Asset.Colors.Text.lighter.color, for: .normal)
        setImage(image, for: .normal)
        setImage(image, for: .disabled)
        setImage(image, for: .selected)
        setBackgroundImage(UIImage.placeholder(color: Asset.Colors.Public.blue.color), for: .normal)
        setBackgroundImage(UIImage.placeholder(color: Asset.Colors.Background.disable.color), for: .disabled)
        layer.cornerRadius = 8
        clipsToBounds = true
    }
    
    @available(*, unavailable)
    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
    
    override func traitCollectionDidChange(_ previousTraitCollection: UITraitCollection?) {
        setBackgroundImage(UIImage.placeholder(color: Asset.Colors.Public.blue.color), for: .normal)
        setBackgroundImage(UIImage.placeholder(color: Asset.Colors.Background.disable.color), for: .disabled)
    }
}
