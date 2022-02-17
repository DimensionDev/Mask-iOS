//
//  LocalAuthentication.swift
//  Maskbook
//
//  Created by BradGao on 2021/5/30.
//  Copyright © 2021 dimension. All rights reserved.
//

import Foundation
import LocalAuthentication
import UIKit

class LocalAuthentication {
    static var shared = LocalAuthentication()
    
    private var context: LAContext
    @InjectedProvider(\.userDefaultSettings)
    private var settings
    
    private init() {
        context = LAContext.refresh()
    }
    
    func isBiometricsAvailable() -> Bool {
        context.biometryType != .none
    }
    
    func biometryType() -> LABiometryType {
        context.biometryType
    }
    
    func evaluateBiometryID(_ completion: @escaping (Bool, Error?) -> Void) {
        context.evaluatePolicy(.deviceOwnerAuthenticationWithBiometrics, localizedReason: reason()) { [weak self] success, error in
            guard let self = self else { return }
            if success {
                if let data = maskUserDefaults.evaluatedPolicyDomainState {
                    if data == self.context.evaluatedPolicyDomainState {
                        completion(true, nil)
                        self.settings.resetPasswordExpiredDate()
                    } else {
                        LAErrorHandler.handleBiometryHasChanged()
                        completion(false, nil)
                    }
                } else {
                    assertionFailure()
                }
            } else {
                LAErrorHandler.handleError(error: error)
                completion(false, error)
            }
            self.refeshContext()
        }
    }
    
    func openBiometryID(_ completion: @escaping (Bool, Error?) -> Void) {
        context.evaluatePolicy(.deviceOwnerAuthenticationWithBiometrics, localizedReason: reason()) { [weak self] success, error in
            guard let self = self else { return }
            if success {
                maskUserDefaults.evaluatedPolicyDomainState = self.context.evaluatedPolicyDomainState
                completion(true, nil)
            } else {
                LAErrorHandler.handleError(error: error)
                completion(false, error)
            }
            self.refeshContext()
        }
    }
    
    func reason() -> String {
        switch context.biometryType {
        case .touchID:
            return L10n.Scene.BiometryId.touchIdReason

        case .faceID:
            return L10n.Scene.BiometryId.faceIdReason

        default:
            return L10n.Scene.BiometryId.faceIdReason
        }
    }
    
    func bioIDSettingImage() -> UIImage {
        switch context.biometryType {
        case .touchID:
            return Asset.Images.Scene.BioID.touchIDInSetting.image

        case .faceID:
            return Asset.Images.Scene.BioID.faceIDInSetting.image

        default:
            return Asset.Images.Scene.BioID.faceIDInSetting.image
        }
    }
    
    func bioIDButtonImage() -> UIImage {
        switch context.biometryType {
        case .touchID:
            return Asset.Images.Scene.BioID.touchIDInButton.image

        case .faceID:
            return Asset.Images.Scene.BioID.faceIDInButton.image

        default:
            return Asset.Images.Scene.BioID.faceIDInButton.image
        }
    }
    
    func biometryName() -> String {
        switch context.biometryType {
        case .touchID:
            return L10n.Scene.BiometryId.touchId

        case .faceID:
            return L10n.Scene.BiometryId.faceId

        default:
            return L10n.Scene.BiometryId.faceId
        }
    }
}

extension LocalAuthentication {
    func refeshContext() {
        context = LAContext.refresh()
    }

    var authReason: String {
        switch context.biometryType {
        case .touchID: return L10n.Scene.BiometryId.touchIdReason
        case .faceID: return L10n.Scene.BiometryId.faceIdReason
        default: return L10n.Scene.BiometryId.faceIdReason
        }
    }

    var biometry: String {
        switch context.biometryType {
        case .touchID: return L10n.Scene.BiometryId.touchId
        case .faceID: return L10n.Scene.BiometryId.faceId
        default: return L10n.Scene.BiometryId.faceId
        }
    }
}

fileprivate extension LAContext {
     class func refresh() -> LAContext {
        let context = LAContext()
        context.touchIDAuthenticationAllowableReuseDuration = 0
        context.canEvaluatePolicy(.deviceOwnerAuthenticationWithBiometrics, error: nil)
        return context
    }
}
