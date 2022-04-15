//
//  UIColor.swift
//  Maskbook
//
//  Created by Cirno MainasuK on 2019-9-16.
//  Copyright © 2019 Sujitech. All rights reserved.
//

import UIKit

extension UIColor {
    static let _secondaryLabel: UIColor = {
        let _secondaryLabel = UIColor(displayP3Red: 60.0 / 255.0, green: 60.0 / 255.0, blue: 67.0 / 255.0, alpha: 0.6)

        if #available(iOS 13, *) {
            return .secondaryLabel
        } else {
            return _secondaryLabel
        }
    }()

    static let _secondarySystemBackground: UIColor = {
        let _secondarySystemBackground = UIColor(displayP3Red: 239.0 / 255.0, green: 239.0 / 255.0, blue: 244.0 / 255.0, alpha: 1.0)

        if #available(iOS 13, *) {
            return .secondarySystemBackground
        } else {
            return _secondarySystemBackground
        }
    }()
}

extension UIColor {
    static let walletColors = [
        Asset.Colors.WalletColor.color1.color,
        Asset.Colors.WalletColor.color2.color,
        Asset.Colors.WalletColor.color3.color,
        Asset.Colors.WalletColor.color4.color,
        Asset.Colors.WalletColor.color5.color,
        Asset.Colors.WalletColor.color6.color
    ]

    static func walletRandomColorHex() -> String? {
        let index = Int.random(in: 0 ... 5)
        return Self.walletColors[index].toHex
    }
}

extension UIColor {
    // MARK: - Initialization

    convenience init?(hex: String) {
        var hexNormalized = hex.trimmingCharacters(in: .whitespacesAndNewlines)
        hexNormalized = hexNormalized.replacingOccurrences(of: "#", with: "")

        // Helpers
        var rgb: UInt64 = 0
        var r: CGFloat = 0.0
        var g: CGFloat = 0.0
        var b: CGFloat = 0.0
        var a: CGFloat = 1.0
        let length = hexNormalized.count

        // Create Scanner
        Scanner(string: hexNormalized).scanHexInt64(&rgb)

        if length == 6 {
            r = CGFloat((rgb & 0xFF0000) >> 16) / 255.0
            g = CGFloat((rgb & 0x00FF00) >> 8) / 255.0
            b = CGFloat(rgb & 0x0000FF) / 255.0

        } else if length == 8 {
            r = CGFloat((rgb & 0xFF000000) >> 24) / 255.0
            g = CGFloat((rgb & 0x00FF0000) >> 16) / 255.0
            b = CGFloat((rgb & 0x0000FF00) >> 8) / 255.0
            a = CGFloat(rgb & 0x000000FF) / 255.0

        } else {
            return nil
        }

        self.init(red: r, green: g, blue: b, alpha: a)
    }

    var toHex: String? {
        // Extract Components
        guard let components = cgColor.components, components.count >= 3 else {
            return nil
        }

        // Helpers
        let r = Float(components[0])
        let g = Float(components[1])
        let b = Float(components[2])
        var a = Float(1.0)

        if components.count >= 4 {
            a = Float(components[3])
        }

        // Create Hex String
        let hex = String(format: "%02lX%02lX%02lX%02lX", lroundf(r * 255), lroundf(g * 255), lroundf(b * 255), lroundf(a * 255))

        return hex
    }
}
