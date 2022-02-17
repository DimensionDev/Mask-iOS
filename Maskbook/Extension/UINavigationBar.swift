//
//  UINavigationBar.swift
//  Maskbook
//
//  Created by BradGao on 2021/5/27.
//  Copyright © 2021 dimension. All rights reserved.
//

import UIKit

extension UINavigationBar {
    func setAppearance() {
        let appearance = UINavigationBarAppearance()
        isTranslucent = false
        appearance.shadowColor = .clear
        appearance.backgroundEffect = nil
        appearance.backgroundColor = Asset.Colors.Background.bar.color
        
        appearance.titleTextAttributes = [.font: FontStyles.BH4,
                                          .foregroundColor: Asset.Colors.Text.dark.color]

        let style = NSMutableParagraphStyle()
        style.alignment = .justified
        style.firstLineHeadIndent = 6
        
        appearance.largeTitleTextAttributes = [
            NSAttributedString.Key.foregroundColor: Asset.Colors.Text.dark.color,
            .font: FontStyles.BH1,
            NSAttributedString.Key.paragraphStyle: style
        ]

        let backButtonImage: UIImage? = Asset.Icon.Arrows.left.image
//        backButtonImage = backButtonImage?.resize(width: 14)
        appearance.setBackIndicatorImage(backButtonImage, transitionMaskImage: backButtonImage)
        standardAppearance = appearance
        scrollEdgeAppearance = appearance
        tintColor = Asset.Colors.Text.dark.color
    }
    
    func setOpaque() {}
}
