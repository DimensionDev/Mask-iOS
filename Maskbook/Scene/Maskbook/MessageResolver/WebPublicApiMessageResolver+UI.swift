//
//  WebPublicApiMessageResolver+UI.swift
//  Maskbook
//
//  Created by Brad Gao on 2022/1/19.
//  Copyright © 2022 dimension. All rights reserved.
//

import UIKit

extension WebPublicApiMessageResolver {
    func openDashboard() {
        let keyWindow = UIApplication.shared.windows.first(where: \.isKeyWindow)
        let baseNaviVC = keyWindow?.rootViewController as? UINavigationController
        let adaptiveDelegate = baseNaviVC?.viewControllers[0] as? UIAdaptivePresentationControllerDelegate
        coordinator.present(scene: .mainTab(selectedTab: .personas),
                            transition: .modal(animated: true, adaptiveDelegate: adaptiveDelegate))
    }
    
    func openWalletView() {
        let keyWindow = UIApplication.shared.windows.first(where: \.isKeyWindow)
        let baseNaviVC = keyWindow?.rootViewController as? UINavigationController
        let adaptiveDelegate = baseNaviVC?.viewControllers[0] as? UIAdaptivePresentationControllerDelegate
        coordinator.present(scene: .mainTab(selectedTab: .wallet),
                            transition: .modal(animated: true, adaptiveDelegate: adaptiveDelegate))
    }
}
