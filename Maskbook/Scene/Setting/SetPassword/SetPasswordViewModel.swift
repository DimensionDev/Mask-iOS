//
//  SetPasswordViewModel.swift
//  Maskbook
//
//  Created by sxiaojian on 2021/7/2.
//  Copyright © 2021 dimension. All rights reserved.
//

import Combine
import Foundation
import UIKit

// swiftlint:disable line_length
class SetPasswordViewModel {
    let newPassword = CurrentValueSubject<String?, Never>(nil)
    let confirmPassword = CurrentValueSubject<String?, Never>(nil)
    let changePasswordError = CurrentValueSubject<String?, Never>(nil)
    
    weak var viewController: SetPasswordViewController?

    @InjectedProvider(\.userDefaultSettings)
    var userSettings
    
    var shouldEnablConfrimButton: Bool {
        guard let password = newPassword.value else { return false }
        guard isConfirmPasswordsinConsistent() else { return false }
        return password.isValidPasswordFormat
    }
    
    func checkPasswordValid(password: String?) -> Bool {
        guard let password = password else {
            changePasswordError.value = L10n.Scene.SetPassword.passwordInvalid
            return false
        }

        let valid = password.isValidPasswordFormat
        
        if !valid {
            changePasswordError.value = L10n.Scene.ChangePassword.passwordNotMatch
            return false
        } else if !isConfirmPasswordsinConsistent() {
            changePasswordError.value = L10n.Scene.SetPassword.passwordInvalid
        } else {
            changePasswordError.value = nil
        }
        return valid
    }
    
    func isConfirmPasswordsinConsistent() -> Bool {
        if newPassword.value ?? "" == confirmPassword.value ?? "" {
            return true
        } else {
            return false
        }
    }
    
    func confirmAction() {
        let isNewPasswordValid = checkPasswordValid(password: newPassword.value)
        guard isNewPasswordValid == true else { return }
        
        let newWalletPassword = newPassword.value ?? ""
        let walletUpdateResult = WalletCoreService.shared.updatePassword(
            password: "",
            newPassword: newWalletPassword)
        switch walletUpdateResult {
        case .success:
            Vault.shared.set(newWalletPassword, key: .walletPassword)
            viewController?.dismiss(animated: true, completion: {
                let alertController = AlertController(
                    title: L10n.Common.Alert.SetPassword.title,
                    message: L10n.Common.Alert.SetPassword.description,
                    confirmButtonText: L10n.Common.Controls.done,
                    imageType: .success)
                Coordinator.main.present(
                    scene: .alertController(alertController: alertController),
                    transition: .alertController(completion: nil))
            })

        case .failure(_):
            viewController?.dismiss(animated: true, completion: {
                let alertController = AlertController(
                    title: L10n.Common.Alert.ChangePasswordFailed.title,
                    message: "",
                    confirmButtonText: L10n.Common.Controls.done,
                    imageType: .error)
                Coordinator.main.present(
                    scene: .alertController(alertController: alertController),
                    transition: .alertController(completion: nil))
            })
        }
    }
}
// swiftlint:enable line_length
