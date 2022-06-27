//
//  UISearchBar+Height.swift
//  Maskbook
//
//  Created by xiaojian sun on 2022/3/10.
//  Copyright © 2022 dimension. All rights reserved.
//

import Foundation
import UIKit
import UStack

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
    
    func setLeftImage(_ image: UIImage,
                      with padding: CGFloat = 0)
    {
        let imageView = UIImageView()
        imageView.image = image
        imageView.translatesAutoresizingMaskIntoConstraints = false
        
        let paddingView = UIView()
        paddingView.translatesAutoresizingMaskIntoConstraints = false
        let stack = HStackView {
            if padding != 0 {
                paddingView
                    .cv.apply {
                        NSLayoutConstraint.activate([
                            $0.widthAnchor.constraint(equalToConstant: padding),
                            $0.heightAnchor.constraint(equalToConstant: padding)
                        ])
                    }
            }
            imageView
                .cv.apply {
                    NSLayoutConstraint.activate([
                        $0.widthAnchor.constraint(equalToConstant: 24),
                        $0.heightAnchor.constraint(equalToConstant: 24)
                    ])
                }
        }
        stack.translatesAutoresizingMaskIntoConstraints = false
        NSLayoutConstraint.activate([
            stack.heightAnchor.constraint(equalToConstant: 24)
        ])
        self.searchTextField.leftView = stack
    }
}
