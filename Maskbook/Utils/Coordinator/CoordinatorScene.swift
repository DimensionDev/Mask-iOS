import Foundation

typealias CoordinatorScene = Coordinator.Scene
typealias CoordinatorTransition = Coordinator.Transition

extension CoordinatorScene {
    var coordinatorTag: String {
        switch self {
        case .root: return TabCoordinator.coordinatorTag

        case .setupEmail,
             .setPassword,
             .changePasswordStep1,
             .changePasswordStep2,
             .changeEmail,
             .changePhoneNumber:
            return SettingCoordinator.coordinatorTag

        case .walletList:
            return WalletSceneCoordinator.coordinatorTag

        default: return AppCoordinator.coordinatorTag
        }
    }
}
