//
//  RemoteRestoreVerifyView+extension.swift
//  Maskbook
//
//  Created by yzj on 2021/8/24.
//  Copyright © 2021 dimension. All rights reserved.
//

import Foundation

extension RemoteRestoreVerifyView {
    enum VerifyState: Equatable {
        case email
        case emailCode
        case mobile
        case mobileCode
        case mobileZone

        var title: String {
            switch self {
            case .email, .emailCode: return L10n.Scene.Restore.Titles.recoveryWithEmail
            case .mobile, .mobileZone, .mobileCode: return L10n.Scene.Restore.Titles.recoveryWithMobile
            }
        }

        var switchActionTitle: String {
            switch self {
            case .email: return L10n.Scene.Restore.Buttontitles.email
            case .mobileZone, .mobile: return L10n.Scene.Restore.Buttontitles.mobile
            default: return ""
            }
        }

        var verifyTitle: String {
            switch self {
            case .email: return  L10n.Scene.Restore.InputTitle.email
            case .emailCode, .mobileCode: return  L10n.Scene.Restore.InputTitle.validationcode
            case .mobile, .mobileZone: return  L10n.Scene.Restore.InputTitle.mobile
            }
        }
    }
}

extension RemoteRestoreVerifyView {
    enum ValidationState: Equatable {
        case waitingForCode
        case codeFullfilled
        case procceedToValidateCode
        case disabled

        var isEnabled: Bool {
            switch self {
            case .disabled, .waitingForCode: return false
            default: return true
            }
        }
    }
}

extension RemoteRestoreVerifyView {
    enum ValidationError: Equatable {
        case invalid
        case incorrect
    }

    enum Tips: Equatable {
        case invalidEmailAddress
        case invalidMobileNumber
        case emailValidationCode
        case mobileValidationCode
        case invalidEmailCode(Int, error: ValidationError)
        case invalideMobileCode(Int, error: ValidationError)
        case empty
        case customError(_ message: String)

        var description: String {
            switch self {
            case .invalidEmailAddress: return L10n.Scene.Restore.Tip.invalidEmailAddress
            case .invalidMobileNumber: return L10n.Scene.Restore.Tip.invalidMobileNumber
            case .emailValidationCode: return L10n.Scene.Restore.Tip.emailValidationcode
            case .mobileValidationCode: return L10n.Scene.Restore.Tip.mobileValidationcode
            case .empty: return ""
            case let .invalidEmailCode(count, error),
                 let .invalideMobileCode(count, error):
                switch count {
                case 1 ..< 10:
                    switch error {
                    case .incorrect: return L10n.Scene.Restore.Tip.incorrectValidationcode
                    case .invalid: return L10n.Scene.Restore.Tip.invalidValidationcode
                    }

                case 10 ..< 20: return L10n.Scene.Restore.Tip.validationcodeFiveMinutes
                case 20 ..< 30: return  L10n.Scene.Restore.Tip.validationcodeTenMinutes
                case 30 ..< 40: return  L10n.Scene.Restore.Tip.validationcodeThirtyMinutes
                case 40 ..< 50: return  L10n.Scene.Restore.Tip.validationcodeOneHour
                default: return  L10n.Scene.Restore.Tip.validationcodeTwentyfourHours
                }

            case let .customError(message):
                return message
            }
        }

        var showing: Bool {
            switch self {
            case .empty: return false
            default: return true
            }
        }
    }
}
