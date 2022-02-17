//
//  HitTestExpandedButton.swift
//  Maskbook
//
//  Created by xiaojian sun on 2021/5/19.
//  Copyright © 2021 dimension. All rights reserved.
//

import UIKit

final class HitTestExpandedButton: UIButton {
    var expandEdgeInsets = UIEdgeInsets(top: -10, left: -10, bottom: -10, right: -10)
    
    override func point(inside point: CGPoint, with event: UIEvent?) -> Bool {
        return bounds.inset(by: expandEdgeInsets).contains(point)
    }
}
