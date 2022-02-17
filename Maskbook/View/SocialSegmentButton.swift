//
//  SocialSegmentButton.swift
//  Maskbook
//
//  Created by sxiaojian on 2021/8/24.
//  Copyright © 2021 dimension. All rights reserved.
//

import Foundation
import UIKit

class SocialSegmentButton: UIButton {
    init(title: String) {
        super.init(frame: .zero)
        
        setTitleColor(Asset.Colors.Text.normal.color, for: .normal)
        setTitleColor(Asset.Colors.Public.blue.color, for: .selected)
        setTitle(title, for: .normal)
        setTitle(title, for: .selected)
        setBackgroundImage(UIImage.placeholder(color: Asset.Colors.Background.normal.color), for: .normal)
        setBackgroundImage(UIImage.placeholder(color: Asset.Colors.Public.blue.color.withAlphaComponent(0.1)), for: .selected)
        applyCornerRadius(radius: 8)
        clipsToBounds = true
        titleLabel?.font = FontStyles.MH6
    }
    
    @available(*, unavailable)
    init(image: UIImage) {
        fatalError("init(coder:) has not been implemented")
    }
    
    @available(*, unavailable)
    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
    
    override func traitCollectionDidChange(_ previousTraitCollection: UITraitCollection?) {
        setBackgroundImage(UIImage.placeholder(color: Asset.Colors.Background.normal.color), for: .normal)
        setBackgroundImage(UIImage.placeholder(color: Asset.Colors.Public.blue.color.withAlphaComponent(0.1)), for: .selected)
    }
}
