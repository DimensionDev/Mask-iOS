//
//  LoadingAnimator.swift
//  Maskbook
//
//  Created by yzj on 2021/8/16.
//  Copyright © 2021 dimension. All rights reserved.
//

import UIKit

protocol LoadingAnimatable: AnyObject {
    func startAnimation(for view: UIView, layoutIn bounds: CGRect)
    var forgroundColor: UIColor { get }
}

// This will work when Swift 5.5 release with Xcode 13.0
extension LoadingAnimatable where Self == SpinBallAnimator {
   static var spinBall: Self { SpinBallAnimator() }
}
