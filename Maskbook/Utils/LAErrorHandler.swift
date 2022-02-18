//
//  LAErrorHandler.swift
//  Maskbook
//
//  Created by sxiaojian on 2021/6/25.
//  Copyright © 2021 dimension. All rights reserved.
//

import Foundation
import LocalAuthentication
import UIKit

// swiftlint:disable line_length
enum LAErrorHandler {
    static func handleError(error: Error?) {
        guard let nserror = error as? LAError else { return }
        print(nserror)
        DispatchQueue.main.async {
            var alertController: AlertController?
            let biometryNameName = LocalAuthentication.shared.biometryName()
            switch nserror.code {
            case .passcodeNotSet:
                alertController = AlertController(title: L10n.Scene.BiometryId.passcodeNotset, message: "", confirmButtonText: L10n.Common.Controls.done, imageType: .error)

            case .biometryNotEnrolled:
                alertController = AlertController(title: L10n.Scene.BiometryId.biometryNotEnrolled(biometryNameName), message: "", confirmButtonText: L10n.Common.Controls.done, imageType: .error)

            case .biometryLockout:
                alertController = AlertController(title: L10n.Scene.BiometryId.biometryLockout(biometryNameName, biometryNameName, biometryNameName), message: "", confirmButtonText: L10n.Common.Controls.done, imageType: .error)

            case .biometryNotAvailable:
                maskUserDefaults.enableBiometryID = false
                alertController = AlertController(title: L10n.Scene.BiometryId.biometryNotAvailable(biometryNameName), message: "", confirmButtonText: L10n.Common.Controls.done, imageType: .error, confirmButtonClicked: { _ in
                    guard let url = URL(string: UIApplication.openSettingsURLString) else {
                        return
                    }
                    UIApplication.shared.open(url, options: [:], completionHandler: nil)
                })

            default:
                alertController = nil
            }
            guard let alertController = alertController else { return }

            Coordinator.main.present(scene: .alertController(alertController: alertController), transition: .alertController(completion: nil))
        }
    }
    
    static func handleBiometryHasChanged() {
        let biometryNameName = LocalAuthentication.shared.biometryName()
        maskUserDefaults.enableBiometryID = false
        DispatchQueue.main.async {
            let alertController = AlertController(title: L10n.Scene.BiometryId.biometryHasChanged(biometryNameName, biometryNameName), message: "", confirmButtonText: L10n.Common.Controls.done, imageType: .warning)
            Coordinator.main.present(scene: .alertController(alertController: alertController), transition: .alertController(completion: nil))
        }
    }
}
// swiftlint:enable line_length
