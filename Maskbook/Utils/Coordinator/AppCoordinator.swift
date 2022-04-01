import PanModal
import UIKit

struct AppCoordinator {
    let coordinatorMap: [String: MaskCoordinator]

    init() {
        self.coordinatorMap = [
            TabCoordinator.coordinatorTag: TabCoordinator(),
            SettingCoordinator.coordinatorTag: SettingCoordinator(),
            WalletSceneCoordinator.coordinatorTag: WalletSceneCoordinator()
        ]
    }
}

extension AppCoordinator: MaskCoordinator {
    func controller(of scene: CoordinatorScene) -> UIViewController? {
        coordinatorMap[scene.coordinatorTag]?.controller(of: scene)
    }

    func setup(window: UIWindow) {
        @InjectedProvider(\.userDefaultSettings)
        var settings

        let maskSocialVC = MaskSocialViewController(socialPlatform: settings.currentProfileSocialPlatform)
        let naviVC = UINavigationController(rootViewController: maskSocialVC)
        window.rootViewController = naviVC
        window.makeKeyAndVisible()

        let welcomeVC = WelcomeViewController()
        welcomeVC.modalPresentationStyle = .fullScreen
        welcomeVC.modalPresentationCapturesStatusBarAppearance = true
        naviVC.present(welcomeVC, animated: false, completion: nil)
    }

    // swiftlint:disable cyclomatic_complexity
    func present(
        scene: CoordinatorScene,
        transition: Coordinator.Transition,
        from: UIViewController? = nil,
        completion: (() -> Void)? = nil
    ) {
        guard let vc = controller(of: scene) else {
            return
        }

        switch scene {
        case let .root(window, subScene):
            let vc = controller(of: subScene)
            window.rootViewController = vc
            window.makeKeyAndVisible()

        default:
            let fromController: UIViewController? = {
                // If presentVC is designated, just use it
                // Otherwise, search for the most top viewController
                from ?? UIApplication.getTopViewController()
            }()

            guard let presentVC = fromController else {
                assertionFailure("Fail to find the presenting UIViewController")
                return
            }

            switch transition {
            case .root:
                assertionFailure("Should only use for root scene")

            case .detail:
                // Get the UINavigationController to push the
                presentVC.show(vc, sender: from)
                completion?()

            case .panModel:
                let presenter = {
                    presentVC.navigationController ?? presentVC
                }()
                showPanModal(presentVC: presenter, vc: vc)
                completion?()

            case let .modal(animated, delegate):
                vc.presentationController?.delegate = delegate
                presentVC.present(vc, animated: animated, completion: completion)

            case let .alertController(completion):
                vc.modalPresentationStyle = .overFullScreen
                vc.modalPresentationCapturesStatusBarAppearance = true
                presentVC.present(vc, animated: false, completion: completion)

            case let .replaceCurrentNavigation(tab, animated, select):
                MainTabBarController.currentTabBarController()?.replace(tab: tab, with: vc, animated: animated, selected: select)
                completion?()

            case let .replaceWalletTab(animated):
                MainTabBarController.currentTabBarController()?.replace(tab: .wallet, with: vc, animated: animated)
                completion?()

            case .popup:
                var controller: UIViewController? = presentVC
                while controller != nil, controller?.isBeingDismissed == true {
                    controller = controller?.presentingViewController
                }

                controller?.present(vc, animated: true, completion: completion)

            case let .presentActivity(animated, from, completion):
                if UIDevice.current.userInterfaceIdiom == .pad {
                    vc.popoverPresentationController?.sourceView = from
                    vc.preferredContentSize = .zero
                }
                vc.modalPresentationCapturesStatusBarAppearance = true
                presentVC.present(vc, animated: animated, completion: completion)
            }
        }

        DispatchQueue.main.asyncAfter(deadline: .now() + 0.5) {
            @InjectedProvider(\.maskBrowser)
            var maskBrowser

            let window = UIApplication.shared.windows.first(where: \.isKeyWindow)
            window?.bringSubviewToFront(maskBrowser.browser.tabs.backgroundTab.webView)
        }
    }
    // swiftlint:enable cyclomatic_complexity

    private func showPanModal(presentVC: UIViewController, vc: UIViewController) {
        guard let panViewController = vc as? PanModalPresentable.LayoutType else {
            return
        }
        let presenter = {
            presentVC.navigationController ?? presentVC
        }()
        presenter.presentPanModal(panViewController)
    }
}
