//
//  SetBackupPasswordViewModel.swift
//  Maskbook
//
//  Created by Hugo L on 2021/8/18.
//  Copyright © 2021 dimension. All rights reserved.
//

import Combine
import Foundation
import UIKit

class ChangeBackupPasswordStep2ViewModel {
    @InjectedProvider(\.userDefaultSettings)
    private var userSetting
    
    // input
    // output
    let dismissSignal = PassthroughSubject<Error?, Never>()
    
    let newPassword = CurrentValueSubject<String?, Never>(nil)
    let confirmPassword = CurrentValueSubject<String?, Never>(nil)
    
    let changePasswordError = CurrentValueSubject<String?, Never>(nil)
    
    weak var viewController: SetPasswordViewController?
    
    var shouldEnablConfrimButton: Bool {
        guard let password = newPassword.value else { return false }
        guard isConfirmPasswordsinConsistent() else { return false }
        return password.isValidPasswordFormat
    }
    
    func checkPasswordValid(password: String?) -> Bool {
        guard let password = password else {
            changePasswordError.value = L10n.Scene.SetBackupPassword.tips
            return false
        }

        let valid = password.isValidBackupPasswordFormat
        
        if password.isNotEmpty, !valid {
            changePasswordError.value = L10n.Scene.SetBackupPassword.tips
            return false
        } else if newPassword.value?.isNotEmpty == true,
                  confirmPassword.value?.isNotEmpty == true,
                  !isConfirmPasswordsinConsistent() {
            changePasswordError.value = L10n.Scene.SetBackupPassword.errorInconsistentPassword
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
        guard let password = newPassword.value else { return }
        
        Vault.shared.set(password, key: .backupPassword) { [weak self] error in
            if error == nil {
                self?.userSetting.hasBackupPassword = true
                self?.dismissSignal.send(nil)
            } else {
                self?.dismissSignal.send(error)
            }
        }
    }
}
