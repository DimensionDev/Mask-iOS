//
//  MaskSafariViewController.swift
//  Maskbook
//
//  Created by BradGao on 2021/6/20.
//  Copyright © 2021 dimension. All rights reserved.
//

import SafariServices

class MaskSafariUtil {
    static func createSfSafariVC(url: URL) -> SFSafariViewController {
        let config = SFSafariViewController.Configuration()
        let viewController = SFSafariViewController(url: url, configuration: config)
        viewController.preferredBarTintColor = Asset.Colors.Background.normal.color
        viewController.preferredControlTintColor = Asset.Colors.Text.dark.color
        return viewController
    }
}
