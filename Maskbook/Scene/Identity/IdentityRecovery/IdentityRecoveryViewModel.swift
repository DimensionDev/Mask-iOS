//
//  IdentityRecoveryViewModel.swift
//  Maskbook
//
//  Created by sxiaojian on 2022/1/7.
//  Copyright © 2022 dimension. All rights reserved.
//

import Foundation

final class IdentityRecoveryViewModel {
    enum Item: CaseIterable {
        case identityCode
        case privateKey
        case localBackupRecovery
        case cloudBackupRecovery
        
        var title: String {
            switch self {
            case .identityCode:
                return L10n.Scene.IdentityRecovery.identityButton
                
            case .privateKey:
                return L10n.Scene.IdentityRecovery.privateKeyButton
                
            case .localBackupRecovery:
                return L10n.Scene.IdentityRecovery.localBackupRecoveryButton
                
            case .cloudBackupRecovery:
                return L10n.Scene.IdentityRecovery.cloudBackupRecoveryButtonTitle
            }
        }
        
        var description: String {
            switch self {
            case .identityCode:
                return L10n.Scene.IdentityRecovery.identityButtonDescription
                
            case .privateKey:
                return L10n.Scene.IdentityRecovery.privateKeyButtonDescription
                
            case .localBackupRecovery:
                return L10n.Scene.IdentityRecovery.localBackupRecoveryButtonDescription
                
            case .cloudBackupRecovery:
                return L10n.Scene.IdentityRecovery.cloudBackupRecoveryButtonDescription
            }
        }
        
        var iconName: String {
            switch self {
            case .identityCode:
                return Asset.Images.Scene.Identity.personas.name
                
            case .privateKey:
                return Asset.Images.Scene.Identity.privateKey.name
                
            case .localBackupRecovery:
                return Asset.Images.Scene.Identity.iphone.name
                
            case .cloudBackupRecovery:
                return Asset.Images.Scene.Identity.icloud.name
            }
        }
    }
}
