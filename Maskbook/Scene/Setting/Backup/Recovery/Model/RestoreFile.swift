//
//  RestoreFile.swift
//  Maskbook
//
//  Created by yzj on 2021/8/18.
//  Copyright © 2021 dimension. All rights reserved.
//

import SwiftyJSON

struct RestoreFile: Codable {
    let meta: Meta?
    let grantedHostPermissions: [String]?
    let personas: [Persona]?
    let posts: [Post]?
    let profiles: [Profile]?

    let wallets: [WalletBackupInfo]?

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
}

extension RestoreFile {
    struct Meta: Codable {
        let createdAt: Date
        let maskbookVersion: String
        let version: Int
        let type: String
    }
}

extension RestoreFile {
    struct Persona: Codable {
        let createdAt: Date?
        let updatedAt: Date?
        let identifier: String?
        let nickname: String?
        let mnemonic: Mnemonic?
        let linkedProfiles: [[FlattenWrapper<LinkedProfile>]]?
    }

    struct Mnemonic: Codable {
        struct Parameter: Codable {
            let path: String
        }
        let parameter: Parameter
        let words: String
    }
}

extension RestoreFile {
    struct Post: Codable {
        let foundAt: Date
        let identifier: String
        let postBy: String
//        let recipients: [[FlattenWrapper<Recipient>]]?
    }

    struct Recipient: Codable {
        let reason: [RecioientReason]
    }

    struct RecioientReason: Codable {
        let time: Date
        let recipientType: RecipientType

        enum RecipientType: String, Codable {
            case direct
        }

        private enum CodingKeys: String, CodingKey {
            case time = "at"
            case recipientType = "type"
        }
    }
}

extension RestoreFile {
    struct Profile: Codable {
        let createdAt: Date
        let updatedAt: Date
        let identifier: String
//        let linkedPersona: String
    }
}

extension RestoreFile {
    struct LinkedProfile: Codable {
        let connectionConfirmState: State?

        enum State: String, Codable {
            case confirmed
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
