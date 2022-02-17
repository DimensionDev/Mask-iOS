//
//  ChangePasswordViewModel.swift
//  Maskbook
//
//  Created by sxiaojian on 2021/6/21.
//  Copyright © 2021 dimension. All rights reserved.
//

import Combine
import Foundation
import UIKit

class ChangePasswordViewModel {
    let newPassword = CurrentValueSubject<String?, Never>(nil)
    let confirmPassword = CurrentValueSubject<String?, Never>(nil)
    let changePasswordError = CurrentValueSubject<String?, Never>(nil)
    var disposeBag = Set<AnyCancellable>()
    
    weak var viewController: ChangePasswordViewController?
    
    @InjectedProvider(\.userDefaultSettings)
    var userSettings
    @InjectedProvider(\.vault)
    var vault
    
    var shouldEnablConfrimButton: Bool {
        guard let password = newPassword.value else { return false }
        guard isConfirmPasswordCorrect() else { return false }
        return password.isValidPasswordFormat
    }
    
    func checkPasswordValid(password: String?) -> Bool {
        guard let password = password else {
            changePasswordError.value = L10n.Scene.ChangePassword.passwordDemand
            return false
        }

        let valid = password.isValidPasswordFormat
        if !isConfirmPasswordCorrect() {
            changePasswordError.value = L10n.Scene.ChangePassword.passwordNotMatch
            return false
        } else if !valid {
            changePasswordError.value = L10n.Scene.ChangePassword.passwordDemand
        } else {
            changePasswordError.value = nil
        }
        return valid
    }
    
    func isConfirmPasswordCorrect() -> Bool {
        if newPassword.value ?? "" == confirmPassword.value ?? "" {
            return true
        } else {
            return false
        }
    }
    
    func confirmAction() {
        let isNewPasswordValid = checkPasswordValid(password: newPassword.value)
        guard isNewPasswordValid == true else { return }
        guard let newPassword = self.newPassword.value else { return }
        
        vault.getValue(for: .walletPassword)
            .receive(on: DispatchQueue.main)
            .sink { [weak self] password in
                guard let self = self else { return }
                let walletUpdateResult = WalletCoreService.shared.updatePassword(
                    password: password ?? "",
                    newPassword: newPassword)
                switch walletUpdateResult {
                case .success:
                    Vault.shared.set(newPassword, key: .walletPassword)
                    self.viewController?.dismiss(animated: true, completion: {
                        let alertController = AlertController(
                            title: L10n.Common.Alert.ChangePassword.title,
                            message: L10n.Common.Alert.ChangePassword.description,
                            confirmButtonText: L10n.Common.Controls.done,
                            imageType: .success
                        )
                        Coordinator.main.present(
                            scene: .alertController(alertController: alertController),
                            transition: .alertController(completion: nil))
                    })
                    self.userSettings.resetPasswordExpiredDate()
                    
                case .failure(_):
                    self.viewController?.dismiss(animated: true, completion: {
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
            .store(in: &disposeBag)
    }
}
