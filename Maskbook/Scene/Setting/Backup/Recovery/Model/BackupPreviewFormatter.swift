import Foundation
import SwiftyJSON

struct BackupPreviewFormatter {
    enum Item: String {
        case accounts
        case wallets
        case personas
        case posts
        case relations
        case contacts
        case files
        case email
        case createTime = "createdAt"

        static var nativeItems: [Self] {
            [
                .personas,
                .accounts,
                .contacts,
                .posts,
                .relations,
                .wallets,
                .createTime
            ]
        }
        
        var title: String {
            switch self {
            // ignore email and wallets for now
            case .email: return ""
            case .wallets: return ""
            case .accounts: return L10n.Scene.Backup.restoredAccount
            case .personas: return L10n.Scene.Backup.restoredPersona
            case .posts: return L10n.Scene.Backup.restoredPost
            case .relations: return L10n.Scene.Backup.restoredRelations
            case .contacts: return L10n.Scene.Backup.restoredContacts
            case .files: return L10n.Scene.Backup.restoredFiles
            case .createTime: return L10n.Scene.Backup.restoreCreatedDate
            }
        }
    }

    static func previewItems(of json: [String: JSON], nativeInfo: [Item: Int] ) -> [(String, String)] {
        var previewItems: [(String, String)] = []

        let numberFormatter = NumberFormatter()
        numberFormatter.positiveFormat = "###,##0"

        var fileInfoMerged = false
        let nativaFiles = nativeInfo[.files] ?? 0
        
        for key in json.keys.sorted() {
            guard let item = Item(rawValue: key),
                  let value = json[key] else {
                continue
            }

            switch item {
            case .email, .wallets: continue

            case .files:
                let count: Int = {
                    let count = value.number?.intValue ?? 0
                    return count + nativaFiles
                }()


                fileInfoMerged = true
                let valueString = "\(numberFormatter.string(from: count))"
                previewItems.append((item.title, valueString))

            default:
                guard let count = value.number?.intValue else { continue }
                let valueString = "\(numberFormatter.string(from: count))"
                previewItems.append((item.title, valueString))
            }
        }

        // this is the case in which js has no file but native has some files
        if !fileInfoMerged, nativaFiles != 0 {
            let valueString = "\(numberFormatter.string(from: nativaFiles))"
            previewItems.append((Item.files.title, valueString))
        }

        return previewItems
    }
}
