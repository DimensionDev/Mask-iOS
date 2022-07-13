//
//  MessageComposeCoodinator.swift
//  Maskbook
//
//  Created by xiaojian sun on 2022/7/13.
//  Copyright © 2022 dimension. All rights reserved.
//

import Foundation
import UIKit

final class MessageComposeCoodinator {
    static func isExistingComposeVC() -> Bool {
        if UIApplication.findMessageComposeViewController() is MaskHostViewController<MessageComposeView> {
            return true
        }
        return false
    }
    
    static func showExistingComposeVC(shareMeta: PluginMeta?) {
        if let composeVC = UIApplication.findMessageComposeViewController() as? MaskHostViewController<MessageComposeView> {
            let viewModel = composeVC.rootView.viewModel
            if let shareMeta = shareMeta {
                viewModel.append(newPluginContent: shareMeta)
            }
            composeVC.presentedViewController?.dismiss(animated: true)
        }
    }

    static func showMessageComposeVC(shareMeta: PluginMeta) {
        if isExistingComposeVC() {
            showExistingComposeVC(shareMeta: shareMeta)
        } else {
            @InjectedProvider(\.mainCoordinator)
            var coordinator: Coordinator
            coordinator.present(scene: .messageCompose(shareMeta), transition: .modal())
        }
    }
}

extension UIApplication {
    class func findMessageComposeViewController(
        base: UIViewController? = nil
    ) -> UIViewController? {
        let base: UIViewController? = {
            base ?? UIApplication.shared.windows.first(where: \.isKeyWindow)?.rootViewController
        }()

        if let nav = base as? UINavigationController {
            if let messageComposeVC = nav.visibleViewController as? MaskHostViewController<MessageComposeView> {
                return messageComposeVC
            }
            return findMessageComposeViewController(base: nav.visibleViewController)
        } else if let tab = base as? UITabBarController, let selected = tab.selectedViewController {
            return findMessageComposeViewController(base: selected)
        } else if let presented = base?.presentedViewController {
            if let messageComposeVC = presented as? MaskHostViewController<MessageComposeView> {
                return messageComposeVC
            }
            return findMessageComposeViewController(base: presented)
        }
        return base
    }
}
