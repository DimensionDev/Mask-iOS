import Foundation

enum VerificationIdentifier {
    case email(String)
    case phoneNumber(regionCode: String, number: String)

    mutating func updateEmail(_ email: String) {
        switch self {
        case .email: self = .email(email)
        default: break
        }
    }

    mutating func updatePhoneRegion(_ region: String) {
        switch self {
        case let .phoneNumber(_, number):
            var resionCode = region
            if !region.hasPrefix("+") {
                resionCode = "+\(region)"
            }
            self = .phoneNumber(regionCode: resionCode, number: number)
        default: break
        }
    }

    mutating func updatePhoneNumber(_ number: String) {
        switch self {
        case .email: break
        case let .phoneNumber(regionCode, _): self = .phoneNumber(regionCode: regionCode, number: number)
        }
    }

    var textContent: String {
        switch self {
        case let .email(string): return string
        case let .phoneNumber(regionCode, number): return "\(regionCode) \(number)"
        }
    }

    /// remote api parameter
    var accountText: String {
        switch self {
        case let .email(string): return string
        case let .phoneNumber(regionCode, number): return "\(regionCode)\(number)"
        }
    }

    var regionCode: String {
        switch self {
        case let .phoneNumber(regionCode, _): return regionCode
        case .email: return ""
        }
    }

    var isValidContent: Bool {
        switch self {
        case let .email(emailAddress): return emailAddress.isValidEmailAddress
        case let .phoneNumber(regionCode, number): return "\(regionCode)\(number)".isValidPhoneNumber
        }
    }

    var accountType: ValidationCodeParameters.AccountType {
        switch self {
        case .email: return .email
        case .phoneNumber: return .phone
        }
    }

    var tips: String {
        switch self {
        case .email: return L10n.Scene.Backup.tipsEmail
        case .phoneNumber: return L10n.Scene.Backup.tipsPhone
        }
    }
}

protocol RemoteBackpVerifyStrategy {
    var title: String { get }
    var verificationCode: String { get set }
    var verificationIdentifier: VerificationIdentifier { get set }
    var stratetyTitle: String { get }

    var tips: String { get }
    var verificationTip: String { get }

    func asVerificationRequest() -> VerifyValidationCodeRequest
    func asValidationCodeRequest() -> ValidationCodeParameters
    mutating func cleanVerificationIdentifierIfNeeded()
}

extension RemoteBackpVerifyStrategy {
    var tips: String { verificationIdentifier.tips }
    var verificationTip: String { "" }

    func asValidationCodeRequest() -> ValidationCodeParameters {
        ValidationCodeParameters(
            accountType: verificationIdentifier.accountType,
            account: verificationIdentifier.accountText,
            scenario: .backup,
            locale: Locale.current.regionCode ?? "en"
//            locale: "en"
        )
    }

    func asVerificationRequest() -> VerifyValidationCodeRequest {
        VerifyValidationCodeRequest(
            accountType: verificationIdentifier.accountType,
            account: verificationIdentifier.accountText,
            code: verificationCode
        )
    }

    func cleanVerificationIdentifierIfNeeded() {}
}
