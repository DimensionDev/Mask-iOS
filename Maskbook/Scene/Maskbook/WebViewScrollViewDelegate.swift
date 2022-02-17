//
//  WebViewScrollViewDelegate.swift
//  Maskbook
//
//  Created by xiaojian sun on 2022/2/7.
//  Copyright © 2022 dimension. All rights reserved.
//

import Foundation
import UIKit

class WebViewScrollViewDelegate: NSObject {
    weak var navigationController: UINavigationController?

    let animationDuration = 0.3
    init(navigationController: UINavigationController?) {
        self.navigationController = navigationController
    }
}

extension WebViewScrollViewDelegate: UIScrollViewDelegate {
    func scrollViewDidScroll(_ scrollView: UIScrollView) {
        if scrollView.panGestureRecognizer.translation(in: scrollView).y < 0 {
            UIView.animate(withDuration: animationDuration,
                           delay: 0,
                           options: .curveLinear,
                           animations: {
                               self.navigationController?.setNavigationBarHidden(true, animated: true)
                               self.navigationController?.navigationBar.isTranslucent = true
                               self.navigationController?.navigationBar.alpha = 0
                           }, completion: nil)
        }
    }

    func scrollViewWillBeginDecelerating(_ scrollView: UIScrollView) {
        if scrollView.panGestureRecognizer.translation(in: scrollView).y > 0 {
            UIView.animate(withDuration: animationDuration,
                           delay: 0,
                           options: .curveLinear,
                           animations: {
                               self.navigationController?.setNavigationBarHidden(false, animated: true)
                               self.navigationController?.navigationBar.isTranslucent = false
                               self.navigationController?.navigationBar.alpha = 1
                           }, completion: nil)
        }
    }
}
