//
//  MainTabBarController.swift
//  Maskbook
//
//  Created by xiaojian sun on 2021/5/18.
//  Copyright © 2021 dimension. All rights reserved.
//

import Combine
import Foundation
import UIKit

class MainTabBarController: UITabBarController {
    @InjectedProvider(\.userDefaultSettings)
    private var settings
    
    enum Tab: Int, CaseIterable {
        case personas
        case wallet
        case labs
        case setting
        
        var title: String {
            switch self {
            case .personas:             return L10n.Tab.personas
            case .wallet:               return L10n.Tab.wallet
            case .labs:                  return L10n.Tab.labs
            case .setting:              return L10n.Tab.setting
            }
        }
        
        var image: UIImage {
            switch self {
            case .personas:             return Asset.Tab.profile.image
            case .wallet:               return Asset.Tab.wallet.image
            case .labs:                  return Asset.Tab.app.image
            case .setting:              return Asset.Tab.setting.image
            }
        }
        
        func viewController() -> UIViewController {
            switch self {
            case .personas:
                @InjectedProvider(\.personaManager)
                var personaManager
                
                if let _ = personaManager.currentPersona.value {
                    return PersonasViewController()
                } else {
                    return IdentityEmptyViewController()
                }

            case .labs:
                return LabsViewController()

            case .setting:
                return SettingViewController()

            case .wallet:
                if WalletCoreService.shared.getAllAccounts().isEmpty {
                    return WalletEmptyViewController()
                } else {
                    return BalanceViewController()
                }
            }
        }
    }
    
    var disposeBag = Set<AnyCancellable>()

    private var tabControllerMap: [Tab: UINavigationController] = [:]

    init() {
        super.init(nibName: nil, bundle: nil)
    }
    
    @available(*, unavailable)
    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
}

extension MainTabBarController {
    override func viewDidLoad() {
        super.viewDidLoad()
        let tabBar = MaskTabBar()
        
        setValue(tabBar, forKey: "tabBar")

        setViewControllers()
        
        selectedIndex = 0
    }
    
    private func setViewControllers() {
        let tabs = Tab.allCases

        var subtabControllers: [UIViewController] = []
        for tab in tabs {
            let controller = self.createSubTabController(for: tab)
            tabControllerMap[tab] = controller
            subtabControllers.append(controller)
        }
        setViewControllers(subtabControllers, animated: false)
    }

    private func createSubTabController(for tab: Tab) -> NavigationController {
        let viewController = tab.viewController()
        let navigationController = NavigationController(rootViewController: viewController)
        navigationController.updateTabBarItem(for: tab)
        navigationController.navigationBar.setAppearance()
        return navigationController
    }
    
    func navigationController(tab: Tab) -> UINavigationController? {
        tabControllerMap[tab]
    }

    func replace(tab: Tab, with controller: UIViewController, animated: Bool = false, selected: Bool = false) {
        guard let navigationController = tabControllerMap[tab] else {
            return
        }

        navigationController.setViewControllers([controller], animated: animated)

        if selected {
            // replace navigation stack of tab and select tab
            selectedIndex = tab.rawValue
        } else {
            // replace navigation stack of tab
            selectedIndex = selectedIndex
        }
        if self.tabBar.isHidden {
            self.tabBar.isHidden = false
        }
    }
    
    func refreshAllTabWhenChangeLanguage() {
        let tabs = Tab.allCases
        for tab in tabs {
            guard let navigationController = tabControllerMap[tab] else {
                return
            }
            let viewController = tab.viewController()
            // tabBar Item did appear, so updte once before set root viewcontroller
            navigationController.updateTabBarItem(for: tab)
            navigationController.setViewControllers([viewController], animated: false)
        }
        selectedIndex = Tab.setting.rawValue

        if self.tabBar.isHidden {
            self.tabBar.isHidden = false
        }
    }
    
    override var selectedViewController: UIViewController? {
        willSet {
            guard let newValue = newValue else {
                return
            }
            guard let tabBar = tabBar as? MaskTabBar, let index = viewControllers?.firstIndex(of: newValue) else {
                return
            }
            tabBar.select(at: index, animated: false)
        }
    }
    
    override var selectedIndex: Int {
        willSet {
            guard let tabBar = tabBar as? MaskTabBar else {
                return
            }
            tabBar.select(at: selectedIndex, animated: false)
        }
    }
    
    override func tabBar(_ tabBar: UITabBar, didSelect item: UITabBarItem) {
        guard let idx = tabBar.items?.firstIndex(of: item) else {
            return
        }
        if let controller = viewControllers?[idx] {
            selectedIndex = idx
            delegate?.tabBarController?(self, didSelect: controller)
        }
    }

    var barHeight: CGFloat {
        if let tabbar = tabBar as? MaskTabBar {
            return tabbar.barHeight + view.safeAreaInsets.bottom
        } else {
            return tabBar.frame.height
        }
    }
    
    override func viewSafeAreaInsetsDidChange() {
        super.viewSafeAreaInsetsDidChange()
        updateTabBarFrame()
    }
    
    private func updateTabBarFrame() {
        var tabFrame = tabBar.frame
        tabFrame.size.height = barHeight + view.safeAreaInsets.bottom
        tabFrame.origin.y = view.frame.size.height - tabFrame.size.height
        tabBar.frame = tabFrame
        tabBar.setNeedsLayout()
    }
}

extension MainTabBarController {
    static func currentTabBarController() -> MainTabBarController? {
        let keyWindow = UIApplication.shared.windows.first(where: \.isKeyWindow)
        if let rootController = keyWindow?.rootViewController?.presentedViewController as? MainTabBarController {
            return rootController
        }
        return nil
    }
    
    static func tabbarHeight() -> CGFloat? {
        return MainTabBarController.currentTabBarController()?.tabBar.frame.size.height
    }
}

extension MainTabBarController: MaskTabBarDelegate {
    func tabBar(_ tabBar: MaskTabBar, shouldSelctedAt: Int) -> Bool {
        return true
    }
}

private extension UINavigationController {
    func updateTabBarItem(for tab: MainTabBarController.Tab) {
        tabBarItem.title = tab.title
        tabBarItem.image = tab.image
    }
}

private extension UIViewController {
    var selfOrFirstChildOfNavVC: UIViewController? {
        if let navVC = self as? UINavigationController {
            return navVC.viewControllers.first
        }
        return self
    }
}
