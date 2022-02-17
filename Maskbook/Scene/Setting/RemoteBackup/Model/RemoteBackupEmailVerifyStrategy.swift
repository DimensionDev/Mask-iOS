import Foundation

struct RemoteBackupEmailVerifyStrategy: RemoteBackpVerifyStrategy {
    init() {}

    @InjectedProvider(\.userDefaultSettings)
    private var settings
    var verificationCode = ""
    var verificationIdentifier: VerificationIdentifier = .email("")

    var stratetyTitle: String { L10n.Scene.Backup.backupVerifyFieldEmail }
    var title: String { L10n.Scene.Backup.backupVerifyTitleEmail }

    func asVerificationRequest() -> VerifyValidationCodeRequest {
        VerifyValidationCodeRequest(
            accountType: .email,
            account: verificationIdentifier.accountText,
            code: verificationCode
        )
    }
}

extension RemoteBackpVerifyStrategy where Self == RemoteBackupEmailVerifyStrategy {
    static var email: RemoteBackupEmailVerifyStrategy {
        @InjectedProvider(\.userDefaultSettings)
        var settings
        var strategy = RemoteBackupEmailVerifyStrategy()
        guard let email = settings.remoteBackupEmail else {
            return strategy
        }
        
        strategy.verificationIdentifier = .email(email)
        return strategy
    }
}

struct RemoteBackupPhoneVerifyStrategy: RemoteBackpVerifyStrategy {
    init() {}

    @InjectedProvider(\.userDefaultSettings)
    private var settings
    var verificationCode = ""
    var verificationIdentifier: VerificationIdentifier = .phoneNumber(regionCode: "+", number: "")

    var stratetyTitle: String { L10n.Scene.Backup.backupVerifyFieldPhone }
    var title: String { L10n.Scene.Backup.backupVerifyTitlePhone }

    func asVerificationRequest() -> VerifyValidationCodeRequest {
        VerifyValidationCodeRequest(
            accountType: .phone,
            account: verificationIdentifier.accountText,
            code: verificationCode
        )
    }
}

extension RemoteBackpVerifyStrategy where Self == RemoteBackupPhoneVerifyStrategy {
    static var phone: RemoteBackupPhoneVerifyStrategy {
        @InjectedProvider(\.userDefaultSettings)
        var settings
        var strategy = RemoteBackupPhoneVerifyStrategy()
        guard let wrapperedPhone = settings.remoteBackupPhoneNumber else {
            return strategy
        }
        let items = wrapperedPhone.split(separator: ",").map { String($0) }
        guard items.count == 2,
              let regionCode = items.first,
              let phone = items.last else {
            return strategy
        }
        strategy.verificationIdentifier = .phoneNumber(regionCode: regionCode, number: phone)
        return strategy
    }
}
