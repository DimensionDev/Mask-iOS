//
//  NavigationController.swift
//  Maskbook
//
//  Created by xiaojian sun on 2021/5/28.
//  Copyright © 2021 dimension. All rights reserved.
//

import Foundation
import UIKit

class NavigationController: UINavigationController {
    override init(rootViewController: UIViewController) {
        super.init(rootViewController: rootViewController)
        self.view.backgroundColor = Asset.Colors.Background.normal.color
    }

    @available(*, unavailable)
    required init?(coder aDecoder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }

    override func viewDidLoad() {
        super.viewDidLoad()
        self.interactivePopGestureRecognizer?.delegate = self
    }
    
    override func pushViewController(_ viewController: UIViewController, animated: Bool) {
        if self.viewControllers.count == 1 {
            viewController.hidesBottomBarWhenPushed = true
        } else if viewControllers.count > 1 {
            viewController.hidesBottomBarWhenPushed = true
        }

        super.pushViewController(viewController, animated: animated)

        if viewControllers.count > 1 {
            viewController.prepareLeftNavigationItems()
        }
    }
    
    override var childForStatusBarStyle: UIViewController? {
        let child = super.childForStatusBarStyle
        return child ?? topViewController
    }
}

extension NavigationController: UIGestureRecognizerDelegate {
    func gestureRecognizerShouldBegin(_ gestureRecognizer: UIGestureRecognizer) -> Bool {
        viewControllers.count > 1
    }
}
