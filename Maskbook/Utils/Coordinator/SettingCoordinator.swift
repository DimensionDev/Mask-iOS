import UIKit

 struct SettingCoordinator: MaskCoordinator {
     func controller(of scene: CoordinatorScene) -> UIViewController? {
         switch scene {
         case .setPassword:
             return SetPasswordViewController()

         case .changePasswordStep1:
             return ChangePasswordStep1ViewController()

         case .changePasswordStep2:
             return ChangePasswordViewController()

         default: return nil
         }
     }
 }
