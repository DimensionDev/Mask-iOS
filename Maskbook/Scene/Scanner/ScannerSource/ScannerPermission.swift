//
//  ScannerPermission.swift
//  Maskbook
//
//  Created by caiyu on 2021/8/12.
//  Copyright © 2021 dimension. All rights reserved.
//

import Foundation
import Photos
import UIKit

import AssetsLibrary

class ScannerPermission: NSObject {
    static func authorizeCameraWith(completion: @escaping (Bool) -> Void) {
        let granted = AVCaptureDevice.authorizationStatus(for: AVMediaType.video)
        switch granted {
        case .authorized:
            completion(true)

        case .denied:
            completion(false)

        case .restricted:
            completion(false)

        case .notDetermined:
            AVCaptureDevice.requestAccess(for: AVMediaType.video, completionHandler: { (granted: Bool) in
                DispatchQueue.main.async {
                    completion(granted)
                }
            })
        @unknown default:
            completion(false)
        }
    }

    static func jumpToSystemPrivacySetting() {
        guard let appSetting = URL(string: UIApplication.openSettingsURLString) else {
            return
        }
        UIApplication.shared.open(appSetting, options: [:], completionHandler: nil)
    }

    static func showCameraAccessAlert(coordinator: Coordinator) {
        let alertController = AlertController(title: L10n.Common.Alert.CameraAccess.title,
                                              message: L10n.Common.Alert.CameraAccess.description,
                                              confirmButtonText: L10n.Common.Controls.goSettings,
                                              cancelButtonText: L10n.Common.Controls.dontAllow,
                                              imageType: .noImage,
                                              confirmButtonClicked: { _ in
                                                  ScannerPermission.jumpToSystemPrivacySetting()
                                              })
        coordinator.present(scene: .alertController(alertController: alertController),
                            transition: .alertController(completion: nil))
    }
}
