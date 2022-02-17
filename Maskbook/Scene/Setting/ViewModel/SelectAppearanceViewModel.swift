//
//  SelectAppearanceViewModel.swift
//  Maskbook
//
//  Created by xiaojian sun on 2021/6/2.
//  Copyright © 2021 dimension. All rights reserved.
//

import Combine
import Foundation
import UIKit

class SelectAppearanceViewModel: SelectItemViewModelProtocol {
    static let userInterfaceStyles: [UIUserInterfaceStyle] = [.unspecified, .light, .dark]
    static let statusBarStyle: [UIUserInterfaceStyle: UIStatusBarStyle] = [
        .unspecified: .default,
        .light: .darkContent,
        .dark: .lightContent
    ]

    func titles() -> [String] {
        let titlesDictionary: [UIUserInterfaceStyle: String] = [
            .unspecified: L10n.Scene.Setting.Detail.automatic,
            .light: L10n.Scene.Setting.Detail.light,
            .dark: L10n.Scene.Setting.Detail.dark
        ]
        return SelectAppearanceViewModel.userInterfaceStyles.compactMap {
            titlesDictionary[$0]
        }
    }

    func selectedIndex() -> Int? {
        if SelectAppearanceViewModel.userInterfaceStyles.contains(maskUserDefaults.customUserInterfaceStyle) {
            return Int(SelectAppearanceViewModel.userInterfaceStyles.firstIndex(of: maskUserDefaults.customUserInterfaceStyle)!)
        } else {
            return nil
        }
    }

    func currentValue() -> String? {
        let titlesDictionary: [UIUserInterfaceStyle: String] = [
            .unspecified: L10n.Scene.Setting.Detail.automatic,
            .light: L10n.Scene.Setting.Detail.light,
            .dark: L10n.Scene.Setting.Detail.dark
        ]
        if let index = selectedIndex() {
            return titlesDictionary[SelectAppearanceViewModel.userInterfaceStyles[index]]
        } else {
            return nil
        }
    }

    func select(index: Int) {
        maskUserDefaults.customUserInterfaceStyle = SelectAppearanceViewModel.userInterfaceStyles[index]
        maskUserDefaults.synchronize()
        let keyWindow = UIApplication.shared.windows.first(where: \.isKeyWindow)
       keyWindow?.overrideUserInterfaceStyle = SelectAppearanceViewModel.userInterfaceStyles[index]
        // Overriding the UserInterfaceStyle would NOT automatically update the status bar style, since we do not use ViewController-based staus bar style for now, the only solution I find is update the deprecated UIApplication's statusbarStyle
        UIApplication.shared.statusBarStyle = SelectAppearanceViewModel.statusBarStyle[SelectAppearanceViewModel.userInterfaceStyles[index]] ?? .default
    }
}
