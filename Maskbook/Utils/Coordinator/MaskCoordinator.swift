import PanModal
import UIKit

protocol MaskCoordinator {
    func controller(of scene: CoordinatorScene) -> UIViewController?
    func present(
        scene: CoordinatorScene,
        transition: CoordinatorTransition,
        from: UIViewController?, completion: (() -> Void)?
    )
}

extension MaskCoordinator {
    static var coordinatorTag: String { String(describing: Self.self) }

    func setup(window: UIWindow) {}

    func present(
        scene: CoordinatorScene,
        transition: CoordinatorTransition,
        from: UIViewController? = nil,
        completion: (() -> Void)? = nil
    ) {}
}
