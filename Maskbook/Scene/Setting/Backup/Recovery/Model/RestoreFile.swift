import Foundation
import SwiftMsgPack

struct RestoreFile: Codable {
    let meta: Meta?
    let grantedHostPermissions: [String]?
    let personas: [Persona]?
    let posts: [Post]?
    let profiles: [Profile]?
    let wallets: [WalletBackupInfo]?

    init(from json: [String: Any]) {
        meta = json[CodingKeys.meta.stringValue]
            .flatMap { $0 as? [String: Any] }
            .flatMap { Meta(from: $0) }

        grantedHostPermissions = json[CodingKeys.grantedHostPermissions.stringValue] as? [String]
        personas = json[CodingKeys.personas.stringValue]
            .flatMap { $0 as? [[String: Any]] }
            .flatMap { $0.map(Persona.init) }

        posts = json[CodingKeys.posts.stringValue]
            .flatMap { $0 as? [[String: Any]] }
            .flatMap { $0.map(Post.init) }

        profiles = json[CodingKeys.profiles.stringValue]
            .flatMap { $0 as? [[String: Any]] }
            .flatMap { $0.map(Profile.init) }

        wallets = json[CodingKeys.wallets.stringValue]
            .flatMap { $0 as? [[String: Any]] }
            .flatMap { $0.map { WalletBackupInfo(from: $0) } }
    }

    static func from(data: Data) -> Self? {
        // Data.asCompatibleBackupJSON is used for local repositories to convert data through [String: Any],
        // in which may contain unkeyeddata, eg: `[["person:facebook.com\\/xxx.t.me",{"connectionConfirmState":"confirmed"}]]`
        // so we can not use that api here
        if JSONSerialization.isValidJSONObject(data) {
            return try? JSONDecoder().decode(Self.self, from: data)
        } else {
            guard let json = try? data.unpack() as? [String: Any] else {
                return nil
            }
            return RestoreFile(from: json)
        }
    }

    private enum CodingKeys: String, CodingKey {
        case meta = "_meta_"
        case grantedHostPermissions
        case personas
        case posts
        case profiles
        case wallets
    }

    var isCompletelyDecoded: Bool {
        meta != nil &&
        grantedHostPermissions != nil &&
        personas != nil &&
        profiles != nil
    }
}

extension RestoreFile {
    enum SupportFileType: String {
        case json
        case bin
    }

    static func converTimeInterval(_ anyValue: Any) -> TimeInterval? {
        if let value = anyValue as? UInt64 {
            return TimeInterval(value) / 1000
        } else if let value = anyValue as? TimeInterval {
            return value
        } else {
            return nil
        }
    }
}

extension RestoreFile {
    struct Meta: Codable {
        @BackupValueCompatiableFrom<UInt64, Date>
        private(set) var createdAt: Date?
        let maskbookVersion: String
        let version: Int
        let type: String

        init(from json: [String: Any]) {
            _createdAt = BackupValueCompatiableFrom(
                json[CodingKeys.createdAt.stringValue]
                    .flatMap { RestoreFile.converTimeInterval($0) }
                    .flatMap { Date(timeIntervalSince1970: $0) } ?? Date()
            )

            maskbookVersion = json[CodingKeys.maskbookVersion.stringValue] as? String ?? ""
            version = json[CodingKeys.version.stringValue] as? Int ?? 0
            type = json[CodingKeys.type.stringValue] as? String ?? ""
        }
    }
}

extension RestoreFile {
    struct Persona: Codable {
        @BackupValueCompatiableFrom<UInt64, TimeInterval>
        private(set) var  createdAt: TimeInterval?
        @BackupValueCompatiableFrom<UInt64, TimeInterval>
        private(set) var updatedAt: TimeInterval?
        let identifier: String?
        let nickname: String?
        let mnemonic: Mnemonic?
        let linkedProfiles: [[StringKey: LinkedProfile]]?
        let publicKey: JWK?
        let localKey: LocalKey?
        let privateKey: JWK?

        struct JWK: Codable {
            let d: String?
            let x: String?
            let y: String?
            @BackupValueCompatiableFrom<Never, Bool>
            private(set) var ext: Bool?
            let key_ops: [String]?
            let kty: String?
            let crv: String?

            init(from json:[String: Any]) {
                d = json[CodingKeys.d.stringValue] as? String
                x = json[CodingKeys.x.stringValue] as? String
                y = json[CodingKeys.y.stringValue] as? String
                kty = json[CodingKeys.kty.stringValue] as? String
                crv = json[CodingKeys.crv.stringValue] as? String
                key_ops = json[CodingKeys.key_ops.stringValue] as? [String]
                _ext = BackupValueCompatiableFrom<Never, Bool>(json[CodingKeys.ext.stringValue] as? Bool ?? true)
            }
        }

        init(from json: [String: Any]) {
            _createdAt = BackupValueCompatiableFrom(
                json[CodingKeys.createdAt.stringValue]
                    .flatMap(RestoreFile.converTimeInterval) ?? 0
            )

            _updatedAt = BackupValueCompatiableFrom<UInt64, TimeInterval>(
                json[CodingKeys.updatedAt.stringValue]
                    .flatMap(RestoreFile.converTimeInterval) ?? 0
            )

            identifier = json[CodingKeys.identifier.stringValue] as? String
            nickname = json[CodingKeys.nickname.stringValue] as? String

            mnemonic = json[CodingKeys.mnemonic.stringValue]
                .flatMap { $0 as? [String: Any] }
                .flatMap { Mnemonic(from: $0) }

            linkedProfiles = json[CodingKeys.linkedProfiles.stringValue]
                .flatMap { $0 as? [[Any]] }
                .flatMap { $0.flattenWrappers { LinkedProfile(from: $0) } }

            privateKey = json[CodingKeys.privateKey.stringValue]
                .flatMap { $0 as? [String: Any] }
                .flatMap { JWK(from: $0) }

            publicKey = json[CodingKeys.publicKey.stringValue]
                .flatMap { $0 as? [String: Any] }
                .flatMap { JWK(from: $0) }

            localKey = json[CodingKeys.localKey.stringValue]
                .flatMap { $0 as? [String: Any] }
                .flatMap { LocalKey(from: $0) }
        }
    }

    struct LocalKey: Codable {
        let alg: String?

        let k: String?
        let key_ops: [String]?
        let kty: String?

        @BackupValueCompatiableFrom<Never, Bool>
        private(set) var ext: Bool?

        init(from json:[String: Any]) {
            k = json[CodingKeys.k.stringValue] as? String
            alg = json[CodingKeys.alg.stringValue] as? String
            kty = json[CodingKeys.kty.stringValue] as? String
            key_ops = json[CodingKeys.key_ops.stringValue] as? [String]
            _ext = BackupValueCompatiableFrom<Never, Bool>(json[CodingKeys.ext.stringValue] as? Bool ?? true)
        }
    }

    struct Mnemonic: Codable {
        struct Parameter: Codable {
            let path: String
            @BackupValueCompatiableFrom<Never, Bool>
            private(set) var withPassword: Bool?

            init(from json: [String: Any]) {
                path =  json[CodingKeys.path.stringValue] as? String ?? ""
                _withPassword = BackupValueCompatiableFrom<Never, Bool>(json[CodingKeys.withPassword.stringValue] as? Bool ?? false)
            }
        }

        let parameter: Parameter
        let words: String

        init(from json: [String: Any]) {
            words = json[CodingKeys.words.stringValue] as? String ?? ""
            let param = json[CodingKeys.parameter.stringValue] as? [String: Any] ?? [:]
            parameter = Parameter(from: param)
        }
    }
}

extension RestoreFile {
    struct Post: Codable {
        @BackupValueCompatiableFrom<UInt64, TimeInterval>
        private(set) var foundAt: TimeInterval?
        let identifier: String
        let postBy: String
        let recipients: [[StringKey: Recipient]]?
        let recipientGroups: [String]?
        let postCryptoKey: LocalKey?

        init(from json:[String: Any]) {
            _foundAt = BackupValueCompatiableFrom<UInt64, TimeInterval>(
                json[CodingKeys.foundAt.stringValue]
                    .flatMap(RestoreFile.converTimeInterval) ?? 0
            )
            identifier = json[CodingKeys.identifier.stringValue] as? String ?? ""
            postBy = json[CodingKeys.postBy.stringValue] as? String ?? ""
            recipientGroups = json[CodingKeys.recipientGroups.stringValue] as? [String] ?? []

            recipients = json[CodingKeys.recipients.stringValue]
                .flatMap { $0 as? [[Any]] }
                .flatMap { $0.flattenWrappers { Recipient(from: $0) } }

            postCryptoKey = json[CodingKeys.postCryptoKey.stringValue]
                .flatMap { $0 as? [String: Any] }
                .flatMap { LocalKey(from: $0) }
        }
    }

    struct Recipient: Codable {
        let reason: [RecipientReason]

        init(from json: [String: Any]) {
            reason = json[CodingKeys.reason.stringValue]
                .flatMap { $0 as? [[String: Any]] }
                .flatMap { $0.map { RecipientReason(from: $0) } } ?? []
        }
    }

    struct RecipientReason: Codable {
        @BackupValueCompatiableFrom<UInt64, TimeInterval>
        private(set)var time: TimeInterval?
        let recipientType: RecipientType
        let group: String?

        enum RecipientType: String, Codable {
            case direct
            case group
        }

        private enum CodingKeys: String, CodingKey {
            case time = "at"
            case group
            case recipientType = "type"
        }

        init(from json: [String: Any]) {
            _time = BackupValueCompatiableFrom<UInt64, TimeInterval>(
                json[CodingKeys.time.stringValue]
                .flatMap(RestoreFile.converTimeInterval) ?? 0
            )

            recipientType = json[CodingKeys.recipientType.stringValue]
                .flatMap { $0 as? String }
                .flatMap { RecipientType.init(rawValue: $0) } ?? .direct

            group = json[CodingKeys.group.stringValue] as? String
        }
    }
}

extension Array where Element == [Any] {
    fileprivate func flattenWrappers<T: Codable>(
        _ transform: @escaping (([String: Any]) -> T)
    ) -> [[RestoreFile.StringKey: T]] {
        var tempResult: [[RestoreFile.StringKey: T]] = []
        for subItem in self {
            if subItem.isEmpty { continue }
            var index = 0
            let count = subItem.count
            var results: [RestoreFile.StringKey: T] = [:]
            while index + 1 < count {
                let rawKey = subItem[index]
                let rawValue = subItem[index + 1]
                if let key = rawKey as? String,
                   let value = rawValue as? [String: Any] {
                    let keyValue = RestoreFile.StringKey(key)
                    let transformedValue = transform(value)
                    results[keyValue] = transformedValue
                }

                index += 2
            }

            if results.isEmpty { continue }
            tempResult.append(results)
        }

        return tempResult
    }
}

extension RestoreFile {
    struct Profile: Codable {
        @BackupValueCompatiableFrom<UInt64, TimeInterval>
        private(set) var createdAt: TimeInterval?
        @BackupValueCompatiableFrom<UInt64, TimeInterval>
        private(set) var updatedAt: TimeInterval?
        let nickName: String
        let identifier: String
        let linkedPersona: String

        private enum CodingKeys: String, CodingKey {
            case createdAt
            case updatedAt
            case nickName = "nickname"
            case identifier
            case linkedPersona
        }

        init(from json: [String: Any]) {
            _createdAt = BackupValueCompatiableFrom<UInt64, TimeInterval>(
                json[CodingKeys.createdAt.stringValue]
                    .flatMap(RestoreFile.converTimeInterval) ?? 0
            )
            _updatedAt = BackupValueCompatiableFrom<UInt64, TimeInterval>(
                json[CodingKeys.updatedAt.stringValue]
                .flatMap(RestoreFile.converTimeInterval) ?? 0
            )
            nickName = json[CodingKeys.nickName.stringValue] as? String ?? ""
            identifier = json[CodingKeys.identifier.stringValue] as? String ?? ""
            linkedPersona = json[CodingKeys.linkedPersona.stringValue] as? String ?? ""
        }
    }
}

extension RestoreFile {
    struct LinkedProfile: Codable {
        let connectionConfirmState: State?

        enum State: String, Codable {
            case confirmed
        }

        init(from json:[String: Any]) {
            connectionConfirmState = (json[CodingKeys.connectionConfirmState.stringValue] as? String)
                .flatMap { State.init(rawValue: $0) }
        }
    }

    struct StringKey: RawRepresentable, Codable, Hashable {
        let key: String

        var rawValue: String { key }

        init?(rawValue: String) {
            self.key = rawValue
        }

        init(_ rawValue: String) {
            self.key = rawValue
        }
    }
}

extension RestoreFile: RestoreItemProvider {
    var supportRestore: Bool { !(personas?.isEmpty ?? true) }
    var previewItems: [PreviewItem] {
        let numberFormatter = NumberFormatter()
        numberFormatter.positiveFormat = "###,##0"

        return [
            // Account
            // Personas
            PreviewItem(
                title: L10n.Scene.Restore.restoredPersona,
                detail: "\(numberFormatter.string(from: personaCount))"
            ),
            // Associated account
            PreviewItem(
                title: L10n.Scene.Restore.restoredAccount,
                detail: "\(numberFormatter.string(from: profilesCount))"
            ),
            // Encrypted post
            PreviewItem(
                title: L10n.Scene.Restore.restoredPost,
                detail: "\(numberFormatter.string(from: postCount))"
            ),
            // Backup time
            PreviewItem(
                title: L10n.Scene.Restore.restoreCreatedDate,
                detail: "\(createdTime)"
            )
        ]
    }

    var personaCount: Int { personas.flatMap { $0.count } ?? 0 }
    var profilesCount: Int { profiles.flatMap { $0.count } ?? 0 }
    var postCount: Int { posts.flatMap { $0.count } ?? 0 }

    var createdTime: String {
        guard let date = meta?.createdAt else { return "" }

        let dateformatter = DateFormatter()
        dateformatter.locale = Locale.current
        dateformatter.dateFormat = "dd.MM.yyyy HH:mm:ss"
        return dateformatter.string(from: date)
    }
}


@propertyWrapper
/// A wrapper for making converting js backup file value to native more compatiable
struct BackupValueCompatiableFrom<From: Codable, Value: Codable>: Codable {
    var wrappedValue: Value?

    init(_ value: Value) {
        wrappedValue = value
    }
}

extension BackupValueCompatiableFrom where From == UInt64, Value == TimeInterval {
    init(from decoder: Decoder) throws {
        let container = try decoder.singleValueContainer()
        if let value = try? container.decode(UInt64.self) {
            wrappedValue = TimeInterval(value) / 1000
        } else if let value = try? container.decode(TimeInterval.self) {
            wrappedValue = value
        } else {
            wrappedValue = nil
        }
    }

    func encode(to encoder: Encoder) throws {
        var container = encoder.singleValueContainer()
        let value = (wrappedValue ?? 0) * 1000
        try container.encode(UInt64(value))
    }
}

extension Swift.Never: Codable {
    public func encode(to encoder: Encoder) throws {
        fatalError()
    }
    public init(from decoder: Decoder) throws {
        fatalError()
    }
}

extension BackupValueCompatiableFrom where From == Never, Value == Bool {
    init(from decoder: Decoder) throws {
        let container = try decoder.singleValueContainer()

        if let stringValue = try? container.decode(String.self) {
            switch stringValue.lowercased() {
            case "false", "no", "0": wrappedValue = false
            case "true", "yes", "1": wrappedValue = true

            default:
                throw DecodingError.dataCorruptedError(
                    in: container,
                    debugDescription: "Expect true/false, yes/no or 0/1 but`\(stringValue)` instead"
                )
            }
        } else if let intValue = try? container.decode(Int.self) {
            switch intValue {
            case 0: wrappedValue = false
            case 1: wrappedValue = true

            default:
                throw DecodingError.dataCorruptedError(
                    in: container,
                    debugDescription: "Expect `0` or `1` but found `\(intValue)` instead"
                )
            }
        } else if let doubleValue = try? container.decode(Double.self) {
            switch doubleValue {
            case 0: wrappedValue = false
            case 1: wrappedValue = true

            default:
                throw DecodingError.dataCorruptedError(
                    in: container,
                    debugDescription: "Expect `0` or `1` but found `\(doubleValue)` instead"
                )
            }
        } else {
            wrappedValue = try container.decode(Bool.self)
        }
    }

    func encode(to encoder: Encoder) throws {
        let rawValue = self.wrappedValue ?? false
        var container = encoder.singleValueContainer()
        try container.encode(rawValue ? Int(1) : 0)
    }
}

extension BackupValueCompatiableFrom where From == UInt64, Value == Date {
    init(from decoder: Decoder) throws {
        let container = try decoder.singleValueContainer()
        if let value = try? container.decode(UInt64.self) {
            wrappedValue = Date(timeIntervalSince1970: TimeInterval(value) / 1000)
        } else if let value = try? container.decode(TimeInterval.self) {
            wrappedValue = Date(timeIntervalSince1970: value)
        } else {
            wrappedValue = nil
        }
    }

    func encode(to encoder: Encoder) throws {
        let value = wrappedValue
            .flatMap { $0.timeIntervalSince1970 }
            .flatMap { UInt64($0 * 1000) }
        if let time = value {
            var container = encoder.singleValueContainer()
            try container.encode(time)
        }
    }
}
