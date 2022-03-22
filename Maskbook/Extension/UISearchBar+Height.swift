//
//  UISearchBar+Height.swift
//  Maskbook
//
//  Created by xiaojian sun on 2022/3/10.
//  Copyright © 2022 dimension. All rights reserved.
//

import Foundation
import UIKit
extension UISearchBar {
    func update(height: CGFloat, color: UIColor, radius: CGFloat = 10.0) {
        let image: UIImage? = UIImage.placeholder(color: color, size: CGSize(width: 1, height: height))
        setSearchFieldBackgroundImage(image, for: .normal)
        for subview in self.subviews {
            for subSubViews in subview.subviews {
                for child in subSubViews.subviews {
                    if let textField = child as? UISearchTextField {
                        textField.layer.cornerRadius = radius
                        textField.clipsToBounds = true
                    }
                }
            }
        }
    }
}
