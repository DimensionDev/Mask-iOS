//
//  UIView+Shadow.swift
//  Maskbook
//
//  Created by BradGao on 2021/6/4.
//  Copyright © 2021 dimension. All rights reserved.
//

import UIKit

// MARK: - Convinience view appearance modification method

extension UIView {
    @discardableResult
    func applyCornerRadius(radius: CGFloat, cornerCurve: CALayerCornerCurve = .continuous) -> Self {
        layer.masksToBounds = true
        layer.cornerRadius = radius
        layer.cornerCurve = cornerCurve
        return self
    }
    
    func applyRadius(radius: CGFloat, corners: UIRectCorner = .allCorners) {
        self.clipsToBounds = true
        self.layer.cornerRadius = radius
        var arr: CACornerMask = []
        let allCorners: [UIRectCorner] = [.topLeft, .topRight, .bottomLeft, .bottomRight, .allCorners]
        for corn in allCorners {
            guard corners.contains(corn) else { continue }
            switch corn {
            case .topLeft:
                arr.insert(.layerMinXMinYCorner)
                
            case .topRight:
                arr.insert(.layerMaxXMinYCorner)
                
            case .bottomLeft:
                arr.insert(.layerMinXMaxYCorner)
                
            case .bottomRight:
                arr.insert(.layerMaxXMaxYCorner)
                
            case .allCorners:
                arr.insert(.layerMinXMinYCorner)
                arr.insert(.layerMaxXMinYCorner)
                arr.insert(.layerMinXMaxYCorner)
                arr.insert(.layerMaxXMaxYCorner)
                
            default: break
            }
        }
        layer.maskedCorners = arr
        layer.cornerCurve = .continuous
        layer.shouldRasterize = true
        layer.rasterizationScale = UIScreen.main.scale
        clipsToBounds = true
    }
    
    @discardableResult
    func applyShadow(
        color: UIColor,
        alpha: Float,
        x: CGFloat,
        y: CGFloat,
        blur: CGFloat,
        cornerRadius: CGFloat = 0,
        spread: CGFloat = 0) -> Self {
        shadowStyle(
            use: color,
            cornerRadius: cornerRadius,
            shadowOffset: CGSize(width: x, height: y),
            shadowOpacity: alpha,
            blur: blur,
            spread: spread
        )
    }

    @discardableResult
    func shadowStyle(
        use color: UIColor,
        cornerRadius: CGFloat = 8,
        shadowOffset: CGSize = .zero,
        shadowOpacity: Float = 1.0,
        blur: CGFloat = 12,
        spread: CGFloat = 0
    ) -> Self {
        layer.shadowColor = color.cgColor
        layer.shadowOpacity = shadowOpacity
        layer.shadowOffset = shadowOffset
        layer.shadowRadius = blur
        if spread == 0 {
            layer.shadowPath = UIBezierPath(roundedRect: bounds, cornerRadius: cornerRadius).cgPath
        } else {
            let dx = -spread
            let rect = bounds.insetBy(dx: dx, dy: dx)
            layer.shadowPath = UIBezierPath(roundedRect: rect, cornerRadius: cornerRadius).cgPath
        }
        return self
    }

    func blurShadow() {
        shadowStyle(
            use: Asset.Colors.Public.popupShadow.color,
            cornerRadius: 0,
            shadowOffset: .zero,
            blur: 40
        )
    }

    func translucentShadow() {
        shadowStyle(
            use: Asset.Colors.Public.s1.color,
            cornerRadius: 0,
            shadowOffset: CGSize(width: 0, height: 6),
            blur: 12
        )
    }
}
// swiftlint:enable identifier_name
