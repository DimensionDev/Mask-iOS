//
//  PostRepository.swift
//  Maskbook
//
//  Created by xiaojian sun on 2022/2/18.
//  Copyright © 2022 dimension. All rights reserved.
//

import CoreData
import CoreDataStack
import Foundation
import SwiftyJSON

enum PostRepository {
    static let viewContext = AppContext.shared.coreDataStack.persistentContainer.viewContext
    static let backgroundContext = AppContext.shared.backgroundContext

    static func createPost(json: JSON,
                           context: NSManagedObjectContext = PostRepository.viewContext)
    {
        guard let postJson = json.dictionary?["post"]?.dictionary else { return }
        context.performAndWait {
            let postRecord = PostRecord(context: context)
            postRecord.identifier = postJson["identifier"]?.stringValue
            postRecord.encryptBy = postJson["encryptBy"]?.stringValue
            if let postBy = postJson["postBy"]?.string {
                postRecord.postNetwork = ProfileRecord.getSocialPlatformFromIdentifier(postBy)?.url
                postRecord.postUserId = postBy.split(separator: "/").last.flatMap { String($0) }
            }
            postRecord.postCryptoKeyRaw = try? postJson["postCryptoKey"]?.rawData()
            postRecord.url = postJson["url"]?.string
            postRecord.summary = postJson["summary"]?.stringValue
            if let timeInteval = postJson["foundAt"]?.double {
                postRecord.foundAt = Date(timeIntervalSince1970: timeInteval / 1_000)
            }
            postRecord.recipientsRaw = try? postJson["recipients"]?.rawData()
            postRecord.interestedMetaRaw = try? postJson["interestedMeta"]?.rawData()
            try? context.saveOrRollback()
        }
    }
}
