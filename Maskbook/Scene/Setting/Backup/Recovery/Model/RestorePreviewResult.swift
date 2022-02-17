//
//  RestorePreviewResult.swift
//  Maskbook
//
//  Created by yzj on 2021/8/19.
//  Copyright © 2021 dimension. All rights reserved.
//

import Foundation
import SwiftyJSON

struct RestorePreviewResult: Equatable {
    let personas: Int?
    let accounts: Int?
    let wallets: Int?
    let files: Int?
    let contacts: Int?
    let posts: Int?

    init(from json: JSON? = nil) {
        personas = json?["personas"].int
        accounts = json?["accounts"].int
        wallets = json?["wallets"].int
        files = json?["files"].int
        contacts = json?["contacts"].int
        posts = json?["posts"].int
    }

    var isEmpty: Bool {
        personas == nil &&
        accounts == nil &&
        files == nil &&
        contacts == nil &&
        posts == nil
    }
}

extension RestorePreviewResult: RestoreItemProvider {
    var supportRestore: Bool { (personas ?? 0) > 0 }
    var previewItems: [PreviewItem] {
        let numberFormatter = NumberFormatter()
        numberFormatter.positiveFormat = "###,##0"

        return [
            // Account
            // Personas
            PreviewItem(
                title: L10n.Scene.Restore.restoredPersona,
                detail: "\(numberFormatter.string(from: personas ?? 0))"
            ),
            // Associated account
            PreviewItem(
                title: L10n.Scene.Restore.restoredAccount,
                detail: "\(numberFormatter.string(from: accounts ?? 0))"
            ),
            // Encrypted post
            PreviewItem(
                title: L10n.Scene.Restore.restoredPost,
                detail: "\(numberFormatter.string(from: posts ?? 0))"
            ),
            // files
            PreviewItem(
                title: L10n.Scene.Restore.restoredFiles,
                detail: "\(numberFormatter.string(from: files ?? 0))"
            ),
            // contacts
            PreviewItem(
                title: L10n.Scene.Restore.restoredContacts,
                detail: "\(numberFormatter.string(from: contacts ?? 0))"
            )
        ]
    }
}
