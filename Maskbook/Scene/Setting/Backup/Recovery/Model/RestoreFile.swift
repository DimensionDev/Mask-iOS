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
        let createdAt: Date
        let maskbookVersion: String
        let version: Int
        let type: String

        init(from json: [String: Any]) {
            createdAt = json[CodingKeys.createdAt.stringValue]
                .flatMap { RestoreFile.converTimeInterval($0) }
                .flatMap { Date(timeIntervalSince1970: $0) } ?? Date()

            maskbookVersion = json[CodingKeys.maskbookVersion.stringValue] as? String ?? ""
            version = json[CodingKeys.version.stringValue] as? Int ?? 0
            type = json[CodingKeys.type.stringValue] as? String ?? ""
        }
    }
}

extension RestoreFile {
    struct Persona: Codable {
        let createdAt: TimeInterval?
        let updatedAt: TimeInterval?
        let identifier: String?
        let nickname: String?
        let mnemonic: Mnemonic?
        let linkedProfiles: [[FlattenWrapper<LinkedProfile>]]?
        let publicKey: JWK?
        let localKey: LocalKey?
        let privateKey: JWK?

        struct JWK: Codable {
            let d: String?
            let x: String?
            let y: String?
            let ext: Bool?
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
                ext = json[CodingKeys.ext.stringValue] as? Bool ?? true
            }
        }

        init(from json: [String: Any]) {
            createdAt = json[CodingKeys.createdAt.stringValue]
                .flatMap(RestoreFile.converTimeInterval) ?? 0

            updatedAt = json[CodingKeys.updatedAt.stringValue]
                .flatMap(RestoreFile.converTimeInterval) ?? 0

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

        let ext: Bool?

        init(from json:[String: Any]) {
            k = json[CodingKeys.k.stringValue] as? String
            alg = json[CodingKeys.alg.stringValue] as? String
            kty = json[CodingKeys.kty.stringValue] as? String
            key_ops = json[CodingKeys.key_ops.stringValue] as? [String]
            ext = json[CodingKeys.ext.stringValue] as? Bool ?? true
        }
    }

    struct Mnemonic: Codable {
        struct Parameter: Codable {
            let path: String
            let withPassword: Bool?

            init(from json: [String: Any]) {
                path =  json[CodingKeys.path.stringValue] as? String ?? ""
                withPassword = json[CodingKeys.withPassword.stringValue] as? Bool ?? false
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
        let foundAt: TimeInterval
        let identifier: String
        let postBy: String
        let recipients: [[FlattenWrapper<Recipient>]]?
        let recipientGroups: [String]?
        let postCryptoKey: LocalKey?

        init(from json:[String: Any]) {
            foundAt = json[CodingKeys.foundAt.stringValue]
                .flatMap(RestoreFile.converTimeInterval) ?? 0
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
        let reason: [RecioientReason]

        init(from json: [String: Any]) {
            reason = json[CodingKeys.reason.stringValue]
                .flatMap { $0 as? [[String: Any]] }
                .flatMap { $0.map { RecioientReason(from: $0) } } ?? []
        }
    }

    struct RecioientReason: Codable {
        let time: TimeInterval
        let recipientType: RecipientType

        enum RecipientType: String, Codable {
            case direct
        }

        private enum CodingKeys: String, CodingKey {
            case time = "at"
            case recipientType = "type"
        }

        init(from json: [String: Any]) {
            time = json[CodingKeys.time.stringValue]
                .flatMap(RestoreFile.converTimeInterval) ?? 0

            recipientType = json[CodingKeys.recipientType.stringValue]
                .flatMap { $0 as? String }
                .flatMap { RecipientType.init(rawValue: $0) } ?? .direct
        }
    }
}

extension Array where Element == [Any] {
    fileprivate func flattenWrappers<T: Codable>(
        _ transform: @escaping (([String: Any]) -> T)
    ) -> [[RestoreFile.FlattenWrapper<T>]] {
        var linkedProfiles: [[RestoreFile.FlattenWrapper<T>]] = []
        for subItem in self {
            if subItem.isEmpty { continue }
            var index = 0
            let count = subItem.count
            var results: [RestoreFile.FlattenWrapper<T>] = []
            while index < count {
                let rawValue = subItem[index]
                if let value = rawValue as? String {
                    results.append(.string(value))
                } else if let value = rawValue as? [String: Any] {
                    let profileModel = transform(value)
                    results.append(.object(profileModel))
                }
                index += 1
            }

            if results.isEmpty { continue }
            linkedProfiles.append(results)
        }

        return linkedProfiles
    }
}

extension RestoreFile {
    struct Profile: Codable {
        let createdAt: TimeInterval
        let updatedAt: TimeInterval
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
            createdAt = json[CodingKeys.createdAt.stringValue]
                .flatMap(RestoreFile.converTimeInterval) ?? 0
            updatedAt = json[CodingKeys.updatedAt.stringValue]
                .flatMap(RestoreFile.converTimeInterval) ?? 0
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
}

extension RestoreFile {
    enum FlattenWrapper<T: Codable>: Codable {
        case string(String)
        case object(T)
        case empty

        init(from decoder: Decoder) throws {
            let container = try decoder.singleValueContainer()
            if let stringValue = try? container.decode(String.self) {
                self = .string(stringValue)
            } else if let objectValue = try? container.decode(T.self) {
                self = .object(objectValue)
            } else {
                self = .empty
            }
        }

        func encode(to encoder: Encoder) throws {
            var container = encoder.singleValueContainer()

            switch self {
            case let .string(value):
                try container.encode(value)

            case let .object(value):
                try container.encode(value)

            case .empty: break
            }
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
        guard let meta = meta else { return "" }
        let date = meta.createdAt

        let dateformatter = DateFormatter()
        dateformatter.locale = Locale.current
        dateformatter.dateFormat = "dd.MM.yyyy HH:mm:ss"
        return dateformatter.string(from: date)
    }
}
