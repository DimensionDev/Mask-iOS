//
//  LanguageUpdateViewModel.swift
//  Maskbook
//
//  Created by yzj on 2021/7/13.
//  Copyright © 2021 dimension. All rights reserved.
//

import Foundation
import UIKit

final class LanguageUpdateViewModel: SelectItemViewModelProtocol {
    @InjectedProvider(\.userDefaults)
    private var userDefault
    
    @InjectedProvider(\.mainCoordinator)
    private var coordinator

    func titles() -> [String] {
        Language.allCases.map { $0.localizedDescription }
    }

    func selectedIndex() -> Int? {
        guard let currentLanguage = languageStringValue,
              let language = Language(rawValue: currentLanguage) else {
            return nil
        }

        return Language.allCases.firstIndex(of: language)
    }

    func currentValue() -> String? {
        // if get index, the user did selected language, just return selection
        if let index = self.selectedIndex() {
            return Language.allCases.element(at: index)?.localizedDescription
        } else {
            // why not return a defaultValue?
            guard let selectedLanguage = languageStringValue else {
                return nil
            }

            // maybe this pack of code used for mirgration, which was used to adapt the exsist value
            var updatedLanguage = selectedLanguage
            for language in Language.allCases.map({ $0.rawValue }) {
                if selectedLanguage.hasPrefix(language) {
                    userDefault.set([language], forKey: Key.value.appleLanguage)
                    updatedLanguage = language
                }
            }

            return Language(rawValue: updatedLanguage)?.localizedDescription
        }
    }

    func select(index: Int) {
        guard let selectedLanguage = Language.allCases.element(at: index)?.rawValue else {
            return
        }
        userDefault.set([selectedLanguage], forKey: Key.value.appleLanguage)

        let bundlePath: String = {
            guard let path = Bundle.main.path(forResource: selectedLanguage, ofType: "lproj") else {
                return Bundle.main.path(forResource: Language.english.rawValue, ofType: "lproj") ?? ""
            }
            return path
        }()

        guard let bundle = Bundle(path: bundlePath) else {
            return
        }
        L10n.bundle = bundle
        // force to refresh all text language
        if let window = UIApplication.shared.windows.first(where: \.isKeyWindow) {
            MainTabBarController.currentTabBarController()?.refreshAllTabWhenChangeLanguage()
            if let maskSocialVC = (window.rootViewController as? UINavigationController)?.viewControllers.first as? MaskSocialViewController {
                maskSocialVC.refreshTitle()
            }
        }
    }

    private var languageStringValue: String? {
        guard let languages = userDefault.object(forKey: Key.value.appleLanguage) as? [String],
              let current = languages.first else {
            return nil
        }
        return current
    }
}

extension LanguageUpdateViewModel {
    enum Key {
        case value
        var appleLanguage: String { "AppleLanguages" }
    }

    enum Language: String, CaseIterable {
        case english = "en"
        case zhHant = "zh-Hant"
        case zhHans = "zh-Hans"
        case japanese = "ja"

        var localizedDescription: String {
            switch self {
            case .english: return "English"
            case .zhHant: return "繁体中文"
            case .zhHans: return "简体中文"
            case .japanese: return "日本語"
            }
        }
    }
}
