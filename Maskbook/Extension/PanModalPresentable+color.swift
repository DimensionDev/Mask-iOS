//
//  PanModalPresentable+color.swift
//  Maskbook
//
//  Created by xiaojian sun on 2021/11/19.
//  Copyright © 2021 dimension. All rights reserved.
//

import Foundation
import PanModal

public extension PanModalPresentable where Self: UIViewController {
    var dragIndicatorBackgroundColor: UIColor {
        return Asset.Colors.Background.disable.color
    }
    
    var panModalBackgroundColor: UIColor {
        return Asset.Colors.Background.mask.color
    }
}
