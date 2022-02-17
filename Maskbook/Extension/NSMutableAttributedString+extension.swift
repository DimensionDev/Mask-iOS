//
//  NSMutableAttributedString+extension.swift
//  Maskbook
//
//  Created by sxiaojian on 2021/11/1.
//  Copyright © 2021 dimension. All rights reserved.
//

import Foundation
import UIKit
extension NSMutableAttributedString {
    func addAttribute(_ name: NSAttributedString.Key, value: Any, keywords: String) {
        addAttribute(name,
                     value: value,
                     range: (string as NSString).range(of: keywords))
    }
    
    func addAttribute(color: UIColor, keywords: String) {
        addAttribute(.foregroundColor, value: color, keywords: keywords)
    }
    
    func addAttributes(attributes: [String: UIColor]) {
        attributes.forEach { key, color in
            addAttribute(color: color, keywords: key)
        }
    }
}
