import Combine
import Foundation
import SwiftUI

final class RemoteBackupVerifyViewModel: ObservableObject {
    @Published
    var strategyModel: RemoteBackpVerifyStrategy

    @Published
    var confirmAction: ConfirmAction?
    
    @Published
    private(set) var verifyType: VerifyType
    
    @Published
    private(set) var countDownTime: Int = 60
    
    @Published
    private(set) var error: Error?
    
    @Published
    private(set) var loadingState: LoadingState = .idle
    
    var disposeBag = Set<AnyCancellable>()
    var resendCancelble: AnyCancellable?
    var isResendEnabled: Bool { countDownTime == 0 }
    var countingText: String { "\(countDownTime)s" }
    var resendButtonTitle: String {
        isResendEnabled
            ? L10n.Scene.Restore.Buttontitles.resend
            : countingText
    }
    var isConfirmEnabled: Bool { strategyModel.verificationIdentifier.isValidContent }
    var showSwitchButton: Bool { verifyType == .all }
    var switchTitle: String {
        switch strategyModel.verificationIdentifier {
        case .email:
            return L10n.Scene.Backup.withPhone
            
        case .phoneNumber:
            return L10n.Scene.Backup.withEmail
        }
    }
    
    var tips: String {
        strategyModel.tips
    }

    init(_ verifyType: VerifyType) {
        self.verifyType = verifyType
        
        switch verifyType {
        case .email, .all:
            self.strategyModel = .email
            
        default:
            self.strategyModel = .phone
        }
        
        requestValidationCode()
    }

    func requestValidationCode() {
        strategyModel.asValidationCodeRequest().asResponsePublisher().sink { [weak self] result in
            guard let self = self else { return }

            self.resetResendTimer()
            switch result {
            case let .failure(error):
                self.error = error

            case let .success(response):
                guard let errorMessage = response.message else {
                    self.error = nil
                    return
                }

                let error = NSError(domain: "", code: 0, userInfo: [NSLocalizedDescriptionKey: errorMessage])
                self.error = error
            }
        }.store(in: &disposeBag)
    }
    
    func requestBackupInfo() {
        var verify: CloudVerifyResult.Verify
        switch strategyModel.verificationIdentifier {
        case .email:
            verify = .email
            
        case .phoneNumber:
            verify = .mobileNumber
        }
        
        let verifyData = CloudVerifyResult(
            verify: verify,
            verifyCode: self.strategyModel.verificationCode,
            accountContent: self.strategyModel.verificationIdentifier.accountText,
            accountForCypt: self.strategyModel.verificationIdentifier.textContent
        )
        self.requestBackupInfo(verifyResult: verifyData)
    }
    
    private func requestBackupInfo(verifyResult: CloudVerifyResult) {
        RemoteBackupRequest(from: verifyResult)
            .asResponsePublisherWithStatusCode()
            .sink(receiveCompletion: { [weak self] completion in
                if case let .failure(error) = completion {
                    self?.error = error
                } else {
                    self?.error = nil
                }
            }, receiveValue: { [weak self] data in
                guard data.downloadUrl != nil else {
                    self?.confirmAction = .preview(result: verifyResult)
                    return
                }
                self?.confirmAction = .chooseOperations(result: verifyResult, backupPreview: data)
            })
            .store(in: &disposeBag)
    }
    
    func switchType() {
        switch strategyModel.verificationIdentifier {
        case .email:
            strategyModel = .phone
            
        case .phoneNumber:
            strategyModel = .email
        }
    }
    
    private func resetResendTimer() {
        countDownTime = 60
        resendCancelble?.cancel()
        resendCancelble = Timer.publish(every: 1, on: .main, in: .common)
            .autoconnect()
            .receive(on: DispatchQueue.main)
            .sink { [weak self] _ in
                guard let self = self else { return }
                if self.countDownTime > 0 {
                    self.countDownTime -= 1
                } else {
                    self.resendCancelble = nil
                }
            }
    }
}

extension RemoteBackupVerifyViewModel {
    enum VerifyType {
        case email
        case phone
        case all
    }
    
    enum ConfirmAction {
        case preview(result: CloudVerifyResult)
        case chooseOperations(result: CloudVerifyResult, backupPreview: RemoteBackupPreview?)
    }
    
    enum LoadingState {
        case idle
        case loading
    }
}
