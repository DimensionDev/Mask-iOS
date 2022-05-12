//
//  UIViewController+SocialBack.swift
//  Maskbook
//
//  Created by BradGao on 2021/10/9.
//  Copyright © 2021 dimension. All rights reserved.
//

import SwiftUI
import UIKit

extension UIViewController {
    func addSocialPlatformBackBarButtonItem() {
        let button = SocialIconBackBarItem()
        button.addTarget(self, action: #selector(dismissMainTabBarController), for: .touchUpInside)
        navigationItem.rightBarButtonItems = [
            .fixedSpace(14),
            UIBarButtonItem(customView: button)
        ]
    }
    
    @objc
    func dismissMainTabBarController() {
        let rootVC = UIApplication.shared.windows.first(where: \.isKeyWindow)?.rootViewController
        rootVC?.presentedViewController?.dismiss(animated: true, completion: nil)
    }
}

@objc
protocol NavigationItemConfigable {
    @objc
    func prepareLeftNavigationItems()
}

// use objc to work correctly at runtime
extension UIViewController: NavigationItemConfigable {
    @objc
    func prepareRightNavigationItems() {}

    @objc
    func prepareLeftNavigationItems() {
        let backView = NavigationItemView(imageAsset: Asset.Icon.Arrows.backArrow) {
            self.navigationController?.popViewController(animated: true)
        }
        navigationItem.leftBarButtonItems = [
            // 8 for naviitem margin
            .fixedSpace(14),
            .init(customView: backView.asUIView())
        ]
    }
}
