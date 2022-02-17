import Foundation

struct RemoteBackupBindMobilePhoneStrategy: RemoteBackpVerifyStrategy {
    init() {}

    var title: String { L10n.Scene.Setting.BindPhoneNumber.title }
    var verificationCode: String = ""
    var verificationIdentifier: VerificationIdentifier = .phoneNumber(regionCode: "", number: "")
    var stratetyTitle: String { L10n.Scene.Setting.BindPhoneNumber.subTitle }

    var verificationTip: String { L10n.Scene.Setting.validationCodeViaMobilePhone }
}

extension RemoteBackpVerifyStrategy where Self == RemoteBackupBindMobilePhoneStrategy {
    static var setPhoneNumer: RemoteBackupBindMobilePhoneStrategy { .init() }
}

struct RemoteBackupUpdateMobilePhoneStrategy: RemoteBackpVerifyStrategy {
    @InjectedProvider(\.userDefaultSettings)
    var settings
    init() {
        guard let numberRawValue = settings.remoteBackupPhoneNumber?.components(separatedBy: ","),
              let region = numberRawValue.first,
              let number = numberRawValue.last else {
            verificationIdentifier = .phoneNumber(regionCode: "+", number: "")
            return
        }

        verificationIdentifier = .phoneNumber(regionCode: region, number: number)
    }

    var title: String { L10n.Scene.Setting.ChangePhoneNumber.title }
    var verificationCode: String = ""
    var verificationIdentifier: VerificationIdentifier = .phoneNumber(regionCode: "+", number: "")
    var stratetyTitle: String { L10n.Scene.Setting.ChangePhoneNumber.subTitle }

    var tips: String { L10n.Scene.Setting.ChangePhoneNumber.tips }

    var verificationTip: String { L10n.Scene.Setting.validationCodeViaMobilePhone }

    mutating func cleanVerificationIdentifierIfNeeded() {
        verificationIdentifier = .phoneNumber(regionCode: "+", number: "")
        verificationCode = ""
    }
}

extension RemoteBackpVerifyStrategy where Self == RemoteBackupChangeEamilStrategy {
    static var changePhoneNumber: RemoteBackupUpdateMobilePhoneStrategy { .init() }
}
