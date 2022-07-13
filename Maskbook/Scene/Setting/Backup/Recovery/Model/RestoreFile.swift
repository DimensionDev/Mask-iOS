import Foundation
import SwiftMsgPack

struct RestoreFile: Codable {
    // MARK: Lifecycle

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

        plugin = json[CodingKeys.plugin.stringValue]
            .flatMap { Plugin(from: $0 as? [String: Any] ?? [:]) }
    }

    // MARK: Internal

    let meta: Meta?
    let grantedHostPermissions: [String]?
    let personas: [Persona]?
    let posts: [Post]?
    let profiles: [Profile]?
    let wallets: [WalletBackupInfo]?
    let plugin: Plugin?

    var isCompletelyDecoded: Bool {
        meta != nil &&
            grantedHostPermissions != nil &&
            personas != nil &&
            profiles != nil
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

    // MARK: Private

    private enum CodingKeys: String, CodingKey {
        case meta = "_meta_"
        case grantedHostPermissions
        case personas
        case posts
        case profiles
        case wallets
        case plugin
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
        // MARK: Lifecycle

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

        // MARK: Internal

        @BackupValueCompatiableFrom<UInt64, Date>
        private(set) var createdAt: Date?
        let maskbookVersion: String
        let version: Int
        let type: String
    }
}

extension RestoreFile {
    struct Persona: Codable {
        // MARK: Lifecycle

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

        // MARK: Internal

        struct JWK: Codable {
            // MARK: Lifecycle

            init(from json: [String: Any]) {
                d = json[CodingKeys.d.stringValue] as? String
                x = json[CodingKeys.x.stringValue] as? String
                y = json[CodingKeys.y.stringValue] as? String
                kty = json[CodingKeys.kty.stringValue] as? String
                crv = json[CodingKeys.crv.stringValue] as? String
                key_ops = json[CodingKeys.key_ops.stringValue] as? [String]
                _ext = BackupValueCompatiableFrom<Never, Bool>(json[CodingKeys.ext.stringValue] as? Bool ?? true)
            }

            // MARK: Internal

            let d: String?
            let x: String?
            let y: String?

            @BackupValueCompatiableFrom<Never, Bool>
            private(set) var ext: Bool?

            let key_ops: [String]?
            let kty: String?
            let crv: String?
        }

        @BackupValueCompatiableFrom<UInt64, TimeInterval>
        private(set) var createdAt: TimeInterval?

        @BackupValueCompatiableFrom<UInt64, TimeInterval>
        private(set) var updatedAt: TimeInterval?

        let identifier: String?
        let nickname: String?
        let mnemonic: Mnemonic?
        let linkedProfiles: [[StringKey: LinkedProfile]]?
        let publicKey: JWK?
        let localKey: LocalKey?
        let privateKey: JWK?
    }

    struct LocalKey: Codable {
        // MARK: Lifecycle

        init(from json: [String: Any]) {
            k = json[CodingKeys.k.stringValue] as? String
            alg = json[CodingKeys.alg.stringValue] as? String
            kty = json[CodingKeys.kty.stringValue] as? String
            key_ops = json[CodingKeys.key_ops.stringValue] as? [String]
            _ext = BackupValueCompatiableFrom<Never, Bool>(json[CodingKeys.ext.stringValue] as? Bool ?? true)
        }

        // MARK: Internal

        let alg: String?

        let k: String?
        let key_ops: [String]?
        let kty: String?

        @BackupValueCompatiableFrom<Never, Bool>
        private(set) var ext: Bool?
    }

    struct Mnemonic: Codable {
        // MARK: Lifecycle

        init(from json: [String: Any]) {
            words = json[CodingKeys.words.stringValue] as? String ?? ""
            let param = json[CodingKeys.parameter.stringValue] as? [String: Any] ?? [:]
            parameter = Parameter(from: param)
        }

        // MARK: Internal

        struct Parameter: Codable {
            // MARK: Lifecycle

            init(from json: [String: Any]) {
                path = json[CodingKeys.path.stringValue] as? String ?? ""
                _withPassword = BackupValueCompatiableFrom<Never, Bool>(json[CodingKeys.withPassword.stringValue] as? Bool ?? false)
            }

            // MARK: Internal

            let path: String
            @BackupValueCompatiableFrom<Never, Bool>
            private(set) var withPassword: Bool?
        }

        let parameter: Parameter
        let words: String
    }
}

extension RestoreFile {
    struct Post: Codable {
        // MARK: Lifecycle

        init(from json: [String: Any]) {
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

        // MARK: Internal

        @BackupValueCompatiableFrom<UInt64, TimeInterval>
        private(set) var foundAt: TimeInterval?
        let identifier: String
        let postBy: String
        let recipients: [[StringKey: Recipient]]?
        let recipientGroups: [String]?
        let postCryptoKey: LocalKey?
    }

    struct Recipient: Codable {
        // MARK: Lifecycle

        init(from json: [String: Any]) {
            reason = json[CodingKeys.reason.stringValue]
                .flatMap { $0 as? [[String: Any]] }
                .flatMap { $0.map { RecipientReason(from: $0) } } ?? []
        }

        // MARK: Internal

        let reason: [RecipientReason]
    }

    struct RecipientReason: Codable {
        // MARK: Lifecycle

        init(from json: [String: Any]) {
            _time = BackupValueCompatiableFrom<UInt64, TimeInterval>(
                json[CodingKeys.time.stringValue]
                    .flatMap(RestoreFile.converTimeInterval) ?? 0
            )

            recipientType = json[CodingKeys.recipientType.stringValue]
                .flatMap { $0 as? String }
                .flatMap { RecipientType(rawValue: $0) } ?? .direct

            group = json[CodingKeys.group.stringValue] as? String
        }

        // MARK: Internal

        enum RecipientType: String, Codable {
            case direct
            case group
        }

        @BackupValueCompatiableFrom<UInt64, TimeInterval>
        private(set) var time: TimeInterval?
        let recipientType: RecipientType
        let group: String?

        // MARK: Private

        private enum CodingKeys: String, CodingKey {
            case time = "at"
            case group
            case recipientType = "type"
        }
    }
}

private extension Array where Element == [Any] {
    func flattenWrappers<T: Codable>(
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
                   let value = rawValue as? [String: Any]
                {
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
        // MARK: Lifecycle

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

        // MARK: Internal

        @BackupValueCompatiableFrom<UInt64, TimeInterval>
        private(set) var createdAt: TimeInterval?
        @BackupValueCompatiableFrom<UInt64, TimeInterval>
        private(set) var updatedAt: TimeInterval?
        let nickName: String
        let identifier: String
        let linkedPersona: String

        // MARK: Private

        private enum CodingKeys: String, CodingKey {
            case createdAt
            case updatedAt
            case nickName = "nickname"
            case identifier
            case linkedPersona
        }
    }
}

extension RestoreFile {
    struct LinkedProfile: Codable {
        // MARK: Lifecycle

        init(from json: [String: Any]) {
            connectionConfirmState = (json[CodingKeys.connectionConfirmState.stringValue] as? String)
                .flatMap { State(rawValue: $0) }
        }

        // MARK: Internal

        enum State: String, Codable {
            case confirmed
        }

        let connectionConfirmState: State?
    }

    struct StringKey: RawRepresentable, Codable, Hashable {
        // MARK: Lifecycle

        init?(rawValue: String) {
            key = rawValue
        }

        init(_ rawValue: String) {
            key = rawValue
        }

        // MARK: Internal

        let key: String

        var rawValue: String { key }
    }
}

extension RestoreFile {
    struct Plugin: Codable {
        // MARK: Lifecycle

        init(from json: [String: Any]) {
            let fileservices = json[CodingKeys.fileService.stringValue] as? [[String: Any]] ?? []
            fileService = fileservices.compactMap(FileService.init)
        }

        // MARK: Internal

        enum CodingKeys: String, CodingKey {
            case fileService = "com.maskbook.fileservice"
        }

        let fileService: [FileService]?
    }

    struct FileService: Codable {
        // MARK: Lifecycle

        init?(from json: [String: Any]) {
            guard let payloadTxID = json[CodingKeys.payloadTxID.stringValue] as? String,
                  let createdAt = json[CodingKeys.createdAt.stringValue] as? String,
                  let size = json[CodingKeys.size.stringValue] as? UInt64,
                  let name = json[CodingKeys.name.stringValue] as? String,
                  let provider = json[CodingKeys.provider.stringValue] as? String,
                  let id = json[CodingKeys.id.stringValue] as? String,
                  let type = json[CodingKeys.type.stringValue] as? String,
                  let landingTxID = json[CodingKeys.landingTxID.stringValue] as? String
            else {
                return nil
            }
            self.payloadTxID = payloadTxID
            self.createdAt = createdAt
            self.size = size
            self.name = name
            self.provider = provider
            self.id = id
            self.type = type
            self.landingTxID = landingTxID
            self.key = json[CodingKeys.key.stringValue] as? String
        }

        // MARK: Internal

        let payloadTxID: String
        // 2022-07-07T03:16:06.123Z
        let createdAt: String
        let size: UInt64

        let name: String
        let provider: String
        let id: String
        let type: String
        let landingTxID: String
        let key: String?
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
    // MARK: Lifecycle

    init(_ value: Value) {
        wrappedValue = value
    }

    // MARK: Internal

    var wrappedValue: Value?
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
        let rawValue = wrappedValue ?? false
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
