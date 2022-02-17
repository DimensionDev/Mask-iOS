//
//  UIApplication.swift
//  Maskbook
//
//  Created by Cirno MainasuK on 2015-8-14.
//  Copyright (c) 2015年 Cirno MainasuK. All rights reserved.
//

import UIKit

// swiftlint:disable force_cast
extension UIApplication {
    class func appVersion() -> String {
        return Bundle.main.object(forInfoDictionaryKey: "CFBundleShortVersionString") as! String
    }

    class func appBuild() -> String {
        return Bundle.main.object(forInfoDictionaryKey: kCFBundleVersionKey as String) as! String
    }

    class func versionBuild() -> String {
        let version = appVersion(), build = appBuild()

        return version == build ? "v\(version)" : "v\(version)(\(build))"
    }
}
// swiftlint:enable force_cast

extension UIApplication {
    class func getTopViewController(
        base: UIViewController? = nil
    ) -> UIViewController? {
        let base: UIViewController? = {
            base ?? UIApplication.shared.windows.first(where: \.isKeyWindow)?.rootViewController
        }()

        if let nav = base as? UINavigationController {
            return getTopViewController(base: nav.visibleViewController)
        } else if let tab = base as? UITabBarController, let selected = tab.selectedViewController {
            return getTopViewController(base: selected)
        } else if let presented = base?.presentedViewController {
            return getTopViewController(base: presented)
        }
        return base
    }
}
