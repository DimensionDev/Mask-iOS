//
//  BackupPreviewGenerator.swift
//  Maskbook
//
//  Created by Brad Gao on 2022/3/30.
//  Copyright © 2022 dimension. All rights reserved.
//

import Foundation
import SwiftyJSON

struct BackupPreviewGenerator {
    static func generate(with previewJson: [String: JSON]) async -> [(String, String)] {
        var items: [(String, String)] = []
        async let personasCount = PersonaRepository.getPersonaCount()
        async let accountsCount = PersonaRepository.getAssociatedAccountsCount()
        async let profilesCount = ProfileRepository.getProfilesCount()
        async let relationshipCount = RelationRepository.getRelationshipCount()
        async let postCount = PostRepository.getPostCount()
        async let fileCount = FileServiceRepository.getFilesCount()
        
        let jsPreviewInfo = previewJson
            .filter {
                !BackupPreviewFormatter.Item.nativeItems
                    .map(\.rawValue)
                    .contains($0.0)
            }

        let nativeItems: [(BackupPreviewFormatter.Item, String)] = await
        [
            (.personas, "\(personasCount)"),
            (.accounts, "\(accountsCount)"),
            (.contacts, "\(profilesCount)"),
            (.posts, "\(postCount)"),
            (.relations, "\(relationshipCount)"),
        ]

        let nativeFileCount = await fileCount
        // handle file service info merge
        let jsItems = BackupPreviewFormatter.previewItems(
            of: jsPreviewInfo,
            nativeInfo: [.files: nativeFileCount]
        )

        items.append(contentsOf: nativeItems.map { ($0.0.title, $0.1) })
        items.append(contentsOf: jsItems)
        
        let dateformatter = DateFormatter()
        dateformatter.locale = Locale.current
        dateformatter.dateFormat = "dd.MM.yyyy HH:mm:ss"
        let itemValue = dateformatter.string(from: Date())
        items.append((BackupPreviewFormatter.Item.createTime.title, itemValue))
        return items
    }
}
