import UIKit

struct TabCoordinator: MaskCoordinator {
    func controller(of scene: CoordinatorScene) -> UIViewController? {
        switch scene {
        case let .root(_, scene):
            guard case let .mainTab(selectedTab) = scene else {
                return nil
            }

            let mainTab = MainTabBarController()
            mainTab.selectedIndex = selectedTab.rawValue
            return mainTab

        default: return nil
        }
    }
}
