//
//  AppearanceHelper.swift
//  Maskbook
//
//  Created by jk234ert on 11/9/20.
//  Copyright © 2020 dimension. All rights reserved.
//

import UIKit

class AppearanceHelper {
    class func setupAppearance() {
        let appearance = UINavigationBar.appearance()
        appearance.tintColor = Asset.Colors.Background.systemBackground.color
        appearance.barTintColor = Asset.Colors.Background.systemBackground.color
        appearance.shadowImage = UIImage()
        appearance.setBackgroundImage(UIImage(), for: UIBarMetrics.default)
    }
}
