//
//  KeyboardSheetTransition.swift
//  Maskbook
//
//  Created by yzj on 2021/8/26.
//  Copyright © 2021 dimension. All rights reserved.
//

import UIKit

final class KeyboardSheetTransition: SheetTransition {
    override func transitionDuration(using transitionContext: UIViewControllerContextTransitioning?) -> TimeInterval {
        0.25
    }

    override func update(_ percentComplete: CGFloat) {
        super.update(percentComplete)
    }
}
