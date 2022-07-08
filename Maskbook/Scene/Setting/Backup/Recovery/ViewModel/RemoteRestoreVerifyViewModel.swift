//
//  RemoteRestoreVerifyViewModel.swift
//  Maskbook
//
//  Created by yzj on 2021/8/24.
//  Copyright © 2021 dimension. All rights reserved.
//

import Alamofire
import Combine
import SwiftUI

final class RemoteRestoreVerifyViewModel: ObservableObject {
    typealias VerifyState = RemoteRestoreVerifyView.VerifyState
    typealias ValidationState = RemoteRestoreVerifyView.ValidationState
    typealias Tips = RemoteRestoreVerifyView.Tips

    private lazy var coutingStorage = Set<AnyCancellable>()
    private lazy var validateCodeStorage = Set<AnyCancellable>()

    let validateResult = PassthroughSubject<(CloudVerifyResult, RemoteBackupPreview), Never>()
    let dismissSignal = PassthroughSubject<Void, Never>()
    var disposebag = Set<AnyCancellable>()

    @Published
    var verifyState = VerifyState.email

    @Published
    var validationCode = "" {
        didSet { checkValidationCode() }
    }

    @Published
    var email = "" {
        didSet { checkEmailOrMobileNumber() }
    }

    @Published
    var mobileNumber = "" {
        didSet { checkEmailOrMobileNumber() }
    }

    @Published
    var zoneNumber = "+" {
        didSet {
            if !zoneNumber.hasPrefix("+") {
                zoneNumber = "+\(zoneNumber)"
            }
            checkEmailOrMobileNumber()
        }
    }

    @Published
    private(set) var tips = Tips.empty
    private var emailErrorTimes = 0
    private var mobileErrorTimes = 0
    
    @Published
    private(set) var validationState = ValidationState.disabled

    @Published
    private(set) var countDownTime: Int = 60

    var isResendEnabled: Bool { countDownTime == 0 }
    var countingText: String { "\(countDownTime)s" }

    private var maxCountingTime: Int {
        let errorTimes = max(emailErrorTimes, mobileErrorTimes)
        switch errorTimes {
        case 0 ..< 10: return 60
        // 5 minutes
        case 10 ..< 20: return 300
        // 10 minutes
        case 20 ..< 30: return 600
        // 30 m
        case 30 ..< 40: return 1_800
        // 1 h
        case 40 ..< 50: return 3_600
        default: return 86_400
        }
    }

    @InjectedProvider(\.userDefaultSettings)
    private var userSettings

    init() {
        let email = userSettings.remoteBackupEmail
        let phoneNumber = userSettings.remoteBackupPhoneNumber?.phoneNumberComponents

        switch (email, phoneNumber) {
        case (let .some(emailAddress), .none):
            self.email = emailAddress
            self.verifyState = .email

        case (.none, let .some((region, number))):
            self.verifyState = .mobile
            self.zoneNumber = region
            self.mobileNumber = number

        case let (.some(emailAddress), .some((region, phoneNumber))):
            self.email = emailAddress
            self.zoneNumber = region
            self.mobileNumber = phoneNumber
            self.verifyState = .email

        case (.none, .none): break
        }
    }

    func switchToNextState() {
        let nextState: VerifyState = {
            switch verifyState {
            case .email: return .mobileZone
            default: return .email
            }
        }()
        verifyState = nextState
    }
}

// MARK: - Updating when email mobileNumber or validationCode changed

extension RemoteRestoreVerifyViewModel {
    var veriftyTipContent: String {
        switch verifyState {
        case .emailCode: return email
        case .mobileCode: return "\(zoneNumber) \(mobileNumber)"
        default: return ""
        }
    }

    var enabled: Bool {
        switch verifyState {
        case .email:
            return email.isValidEmailAddress

        case .mobileZone, .mobile:
            return "\(zoneNumber)\(mobileNumber)".isValidPhoneNumber

        default: return false
        }
    }

    private func checkEmailOrMobileNumber(shouldShowTips: Bool = false) {
        let (showTips, canProcceed): (Bool, Bool) = {
            switch verifyState {
            case .email:
                if email.isEmpty { return (false, false) }
                let validate = enabled
                return (!validate, validate)

            case .mobileZone, .mobile:
                if mobileNumber.isEmpty { return (false, false) }
                let validate = enabled
                return (!validate, validate)

            default: return (false, false)
            }
        }()

        let validationState: ValidationState = {
            switch verifyState {
            case .email, .mobile, .mobileZone: return canProcceed ? .procceedToValidateCode : .disabled
            default: return .disabled
            }
        }()

        if self.validationState != validationState {
            self.validationState = validationState
        }
        
        // clear tips when user is inputing
        self.tips = .empty
        
        guard shouldShowTips else {
            return
        }
        
        let tips: Tips = {
            switch verifyState {
            case .email: return showTips ? .invalidEmailAddress : .empty
            case .mobile, .mobileZone: return showTips ? .invalidMobileNumber : .empty
            default: return .empty
            }
        }()

        if self.tips != tips {
            self.tips = tips
        }
    }

    private func checkValidationCode() {
        guard validationCode.count == 6 else {
            validationState = .waitingForCode
            return
        }

        validationState = .codeFullfilled
    }
}

// MARK: - Request validate code

extension RemoteRestoreVerifyViewModel {
    func requestValidationCode() {
        // request validation code
        validateCodeStorage.removeAll()
        getValidationCodeParameters()
            .asResponsePublisher()
            .fireAndIgnore()
            .store(in: &validateCodeStorage)

        updateValidateStateWhenRequestingValidationCode()
    }

    private func getValidationCodeParameters() -> ValidationCodeParameters {
        switch verifyState {
        case .email, .emailCode:
            return ValidationCodeParameters(
                accountType: .email,
                account: email,
                scenario: .backup,
                locale: Locale.current.regionCode ?? "es"
            )

        case .mobileZone, .mobile, .mobileCode:
            return ValidationCodeParameters(
                accountType: .phone,
                account: "\(zoneNumber)\(mobileNumber)",
                scenario: .backup,
                locale: Locale.current.regionCode ?? "es"
            )
        }
    }

    private func updateValidateStateWhenRequestingValidationCode() {
        switch verifyState {
        case .email:
            verifyState = .emailCode
            tips = .emailValidationCode

        case .mobile, .mobileZone:
            verifyState = .mobileCode
            tips = .mobileValidationCode

        case .mobileCode:
            tips = .mobileValidationCode

        case .emailCode:
            tips = .emailValidationCode
        }

        startCounting()
        validationState = .waitingForCode
    }

    private func startCounting() {
        countDownTime = maxCountingTime
        coutingStorage.removeAll()
        Timer.publish(every: 1, on: .main, in: .common)
            .autoconnect()
            .receive(on: DispatchQueue.main)
            .sink { [weak self] _ in
                guard let self = self else { return }
                if self.countDownTime > 0 {
                    self.countDownTime -= 1
                }
            }
            .store(in: &coutingStorage)
    }
}

// MARK: - Finish validation

extension RemoteRestoreVerifyViewModel {
    private var account: String {
        switch verifyState {
        case .email, .emailCode:
            return email

        case .mobileZone, .mobile, .mobileCode:
            return "\(zoneNumber)\(mobileNumber)"
        }
    }
    
    private var textContent: String {
        switch verifyState {
        case .email, .emailCode:
            return email

        case .mobileZone, .mobile, .mobileCode:
            return "\(zoneNumber) \(mobileNumber)"
        }
    }
    
    private var validationCodeParametersType: ValidationCodeParameters.AccountType {
        switch verifyState {
        case .email, .emailCode:
            return .email

        case .mobileZone, .mobile, .mobileCode:
            return .phone
        }
    }

    func finishValidation() {
        guard validationState == .codeFullfilled else {
            return
        }
        
        let result = CloudVerifyResult(
            verify: self.validationCodeParametersType == .email ? .email : .mobileNumber,
            verifyCode: self.validationCode,
            accountContent: self.account,
            accountForCypt: self.textContent
        )
        self.getDownloadInfo(verifyResult: result)
    }
    
    // download file
    func getDownloadInfo(verifyResult: CloudVerifyResult) {
        RemoteBackupRequest(
            accountType: validationCodeParametersType,
            account: verifyResult.accountContent,
            code: verifyResult.verifyCode)
            .asResponsePublisherWithStatusCode((200..<300) + [400])
            .sink { [weak self] completion in
                switch completion {
                case let .failure(error):
                    self?.handleFailure(error)
                    
                default: break
                }
            } receiveValue: { [weak self] preview in
                guard let self = self else { return }
                guard preview.message == nil else {
                    self.handleFailure(nil)
                    return
                }
                self.validateResult.send((verifyResult, preview))
            }
            .store(in: &disposebag)
    }
    
    private func handleFailure(_ error: Error?) {
        switch self.verifyState {
        case .emailCode:
            self.emailErrorTimes += 1
            self.tips = error != nil
                ? .customError(error?.localizedDescription ?? "")
                : .invalidEmailCode(self.emailErrorTimes, error: .invalid)

        case .mobileCode:
            self.mobileErrorTimes += 1
            self.tips = error != nil
                ? .customError(error?.localizedDescription ?? "")
                : .invalideMobileCode(self.mobileErrorTimes, error: .invalid)

        default: break
        }
    }
}
