import UIKit

 struct WalletSceneCoordinator: MaskCoordinator {
     func controller(of scene: CoordinatorScene) -> UIViewController? {
         switch scene {
         case .walletList: return WalletListViewController()

         default: return nil
         }
     }
 }
