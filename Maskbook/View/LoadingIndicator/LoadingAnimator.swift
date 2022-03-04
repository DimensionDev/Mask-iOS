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
    var forgroundColor: ColorAsset { get }
}
