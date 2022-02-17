//
//  SettingViewModel.swift
//  Maskbook
//
//  Created by xiaojian sun on 2021/5/31.
//  Copyright © 2021 dimension. All rights reserved.
//

import Foundation
import UIKit

class SettingViewModel {
    enum Section {
        case general
        case backUpAndRestore
        
        func title() -> String {
            switch self {
            case .backUpAndRestore:
                return L10n.Scene.Setting.BackupRecovery.title

            case .general:
                return L10n.Scene.Setting.General.title
            }
        }
    }
    
    enum Item: Hashable {
        case language
        case appearance
        case dataSource
        case syncWithPlug
        case setupPassword
        case changePassword
        case unlockWithBioID
        
        case restoreData
        case backUpData
        case backUpPassword
        case changeBackUpPassword
        
        case email(value: String)
        case phoneNumber(value: String)
        case logOut
        
        func title() -> String {
            switch self {
            case .language:
                return L10n.Scene.Setting.General.language

            case .appearance:
                return L10n.Scene.Setting.General.appearance

            case .dataSource:
                return L10n.Scene.Setting.General.dataSource

            case .syncWithPlug:
                return L10n.Scene.Setting.General.syncWithPlug

            case .setupPassword:
                return L10n.Scene.Setting.General.setupPaymentPassword
                
            case .changePassword:
                return L10n.Scene.Setting.General.changePaymentPassword

            case .unlockWithBioID:
                switch LocalAuthentication.shared.biometryType() {
                case .faceID:
                    return L10n.Scene.Setting.General.unlockWalletWithFaceId

                case .touchID:
                    return L10n.Scene.Setting.General.unlockWalletWithTouchId

                default:
                    return ""
                }

            case .backUpData:
                return L10n.Scene.Setting.BackupRecovery.backUpData

            case .restoreData:
                return L10n.Scene.Setting.BackupRecovery.restoreData

            case .backUpPassword:
                return L10n.Scene.Setting.BackupRecovery.backUpPassword
                
            case .changeBackUpPassword:
                return L10n.Scene.Setting.BackupRecovery.changeBackupPassword

            case .email:
                return L10n.Scene.Setting.Profile.email

            case .phoneNumber:
                return L10n.Scene.Setting.Profile.phoneNumber

            case .logOut:
                return L10n.Scene.Setting.Profile.logOut
            }
        }
        
        func style() -> SettingCellStyle {
            if self == .unlockWithBioID {
                return .rightSwitch(isOn: maskUserDefaults.enableBiometryID)
            } else {
                return .rightArrow
            }
        }
        
        func iconImage() -> UIImage {
            switch self {
            case .language:
                return Asset.Images.Scene.Setting.language.image

            case .appearance:
                return Asset.Images.Scene.Setting.appearance.image

            case .dataSource:
                return Asset.Images.Scene.Setting.dataSource.image

            case .syncWithPlug:
                return Asset.Images.Scene.Setting.sync.image

            case .setupPassword, .changePassword:
                return Asset.Images.Scene.Setting.changePassword.image

            case .unlockWithBioID:
                return LocalAuthentication.shared.bioIDSettingImage()

            case .backUpData:
                return Asset.Images.Scene.Setting.backupData.image

            case .restoreData:
                return Asset.Images.Scene.Setting.restoreData.image

            case .backUpPassword, .changeBackUpPassword:
                return Asset.Images.Scene.Setting.backupPassword.image

            case .email:
                return Asset.Images.Scene.Setting.email.image

            case .phoneNumber:
                return Asset.Images.Scene.Setting.phoneNumber.image

            case .logOut:
                return Asset.Images.Scene.Setting.signOut.image
            }
        }
        
        func currentValue() -> String? {
            switch self {
            case .language:
                return LanguageUpdateViewModel().currentValue()

            case .appearance:
                return SelectAppearanceViewModel().currentValue()

            case .dataSource:
                return SelectDataSourceViewModel().currentValue()

            case .backUpData:
                return nil

            case .restoreData:
                return nil

            case .syncWithPlug:
                return nil

            case .unlockWithBioID:
                return nil

            case .email:
                return nil

            case .setupPassword, .changePassword:
                return nil

            case .logOut:
                return nil

            case .phoneNumber:
                return nil

            case .backUpPassword, .changeBackUpPassword:
                return nil
            }
        }
    }
}
