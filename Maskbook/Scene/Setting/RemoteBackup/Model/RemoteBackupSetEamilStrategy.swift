import Foundation

struct RemoteBackupSetEamilStrategy: RemoteBackpVerifyStrategy {
    init() {}

    var title: String { L10n.Scene.Setting.BindEmail.title }
    var verificationCode: String = ""
    var verificationIdentifier: VerificationIdentifier = .email("")
    var stratetyTitle: String { L10n.Scene.Setting.BindEmail.subTitle }

    var verificationTip: String { L10n.Scene.Setting.validationCodeViaEmail }
}

extension RemoteBackpVerifyStrategy where Self == RemoteBackupSetEamilStrategy {
    static var setEmail: RemoteBackupSetEamilStrategy { .init() }
}

struct RemoteBackupChangeEamilStrategy: RemoteBackpVerifyStrategy {
    @InjectedProvider(\.userDefaultSettings)
    var settings
    init() {
        verificationIdentifier = .email(settings.remoteBackupEmail ?? "")
    }

    var title: String { L10n.Scene.Setting.ChangeEmail.title }
    var verificationCode: String = ""
    var verificationIdentifier: VerificationIdentifier = .email("")
    var stratetyTitle: String { L10n.Scene.Setting.ChangeEmail.subTitle }

    var tips: String { L10n.Scene.Setting.ChangeEmail.tips }

    var verificationTip: String { L10n.Scene.Setting.validationCodeViaEmail }

    mutating func cleanVerificationIdentifierIfNeeded() {
        verificationIdentifier = .email("")
        verificationCode = ""
    }
}

extension RemoteBackpVerifyStrategy where Self == RemoteBackupChangeEamilStrategy {
    static var changeEmail: RemoteBackupChangeEamilStrategy { .init() }
}
