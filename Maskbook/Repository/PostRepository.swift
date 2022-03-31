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
    static let RECEIPIENT_EVERYONE = "everyone"
    
    enum Mode: Int, Codable {
        case append = 0
        case override = 1
    }
    
    static let viewContext = AppContext.shared.coreDataStack.persistentContainer.viewContext
    static let backgroundContext = AppContext.shared.backgroundContext

    static func createPost(post: Post,
                           context: NSManagedObjectContext = PostRepository.viewContext)
    {
        context.performAndWait {
            let postRecord = PostRecord(context: context)
            postRecord.identifier = post.identifier
            postRecord.encryptBy = post.encryptBy
            
            if let postBy = post.postBy {
                postRecord.postNetwork = ProfileRecord.getSocialPlatformFromIdentifier(postBy)?.url
                postRecord.postUserId = postBy.components(separatedBy: "/").last
            } else {
                log.debug("no postBy in creating post", source: "Persona")
            }
            
            postRecord.postCryptoKeyRaw = try? post.postCryptoKey?.rawData()
            postRecord.url = post.url
            postRecord.summary = post.summary
            
            if let foundAt = post.foundAt {
                postRecord.foundAt = Date(timeIntervalSince1970: foundAt / 1_000)
            } else {
                log.debug("no foundAt in creating post", source: "Persona")
            }
            postRecord.recipientsRaw = try? post.recipients?.rawData()
            postRecord.interestedMetaRaw = try? post.interestedMeta?.rawData()
            postRecord.createdAt = Date()
            postRecord.updatedAt = Date()
            try? context.saveOrRollback()
        }
    }
    
    static func updatePostRecordWithPartialPost(post: Post, postRecord: PostRecord) {
        if let encryptBy = post.encryptBy {
            postRecord.encryptBy = encryptBy
        }
        if let postBy = post.postBy {
            postRecord.postNetwork = ProfileRecord.getSocialPlatformFromIdentifier(postBy)?.url
            postRecord.postUserId = postBy.components(separatedBy: "/").last
        }
        if let postCryptoKeyData = try? post.postCryptoKey?.rawData() {
            postRecord.postCryptoKeyRaw = postCryptoKeyData
        }
        if let url = post.url {
            postRecord.url = url
        }
        if let summary = post.summary {
            postRecord.summary = summary
        }
        if let foundAt = post.foundAt {
            postRecord.foundAt = Date(timeIntervalSince1970: foundAt / 1_000)
        }
        if let interestedMetaData = try? post.interestedMeta?.rawData() {
            postRecord.interestedMetaRaw = interestedMetaData
        }
    }
    
    static func queryPost(identifier: String,
                          context: NSManagedObjectContext = PostRepository.viewContext) -> PostRecord? {
        do {
            let fetchRequest = PostRecord.sortedFetchRequest
            fetchRequest.predicate = PostRecord.predicate(identifier: identifier)
            fetchRequest.fetchLimit = 1
            return try viewContext.fetch(fetchRequest).first
        } catch {
            return nil
        }
    }
    
    static func queryPosts(encryptBy: String? = nil,
                           userIds: [String]? = nil,
                           network: String? = nil,
                           pageOption: PageOption? = nil,
                           context: NSManagedObjectContext? = viewContext) -> [PostRecord]
    {
        do {
            let queryContext = context ?? viewContext
            let fetchRequest = PostRecord.sortedFetchRequest
            fetchRequest.predicate = PostRecord.predicate(encryptBy: encryptBy,
                                                          userIds: userIds,
                                                          network: network)
            if let pageOption = pageOption {
                fetchRequest.fetchLimit = pageOption.pageSize
                fetchRequest.fetchOffset = pageOption.pageOffset
            }
            
            let records = try queryContext.fetch(fetchRequest)
            return records
        } catch {
            return []
        }
    }
    
    static func updatePost(post: Post,
                           mode: PostRepository.Mode,
                           context: NSManagedObjectContext = PostRepository.viewContext) -> PostRecord?
    {
        context.performAndWait {
            guard let postRecord = PostRepository.queryPost(identifier: post.identifier) else { return }
            Self.updatePostRecordWithPartialPost(post: post, postRecord: postRecord)
            switch mode {
            case .append:
                if let recipientsRaw = postRecord.recipientsRaw,
                   let json = try? JSON(data: recipientsRaw)
                {
                    var mJson = json
                    if let recipients = post.recipients {
                        try? mJson.merge(with: recipients)
                        postRecord.recipientsRaw = try? mJson.rawData()
                    }
                }
                
            case .override:
                if let recipients = post.recipients {
                    postRecord.recipientsRaw = try? recipients.rawData()
                }
            }
            postRecord.updatedAt = Date()
            try? viewContext.saveOrRollback()
        }
        return PostRepository.queryPost(identifier: post.identifier)
    }
    
    static func getPostCount() async -> Int {
        await withCheckedContinuation { continuation in
            let fetchRequest = PostRecord.sortedFetchRequest
            
            var count = 0
            backgroundContext.performAndWait {
                count = (try? backgroundContext.count(for: fetchRequest)) ?? 0
            }
            continuation.resume(returning: count)
        }
    }
    
    static func getPostsForBackup() async -> [JSON] {
        await withCheckedContinuation { continuation in
            var posts: [JSON] = []
            let fetchRequest = PostRecord.sortedFetchRequest
            
            backgroundContext.performAndWait {
                if let postRecords = try? backgroundContext.fetch(fetchRequest) {
                    posts = postRecords.compactMap { $0.getBackupJson() }
                }
            }
            continuation.resume(returning: posts)
        }
    }
}

extension PostRecord {
    func getBackupJson() -> JSON? {
        guard identifier != nil else {
            return nil
        }
        var backupDict = [String: Any]()
        
        // 1. identifier
        backupDict[Post.CodingKeys.identifier.rawValue] = identifier
        
        // 2. postCryptoKey
        if let postCryptoKeyRaw = postCryptoKeyRaw,
           let prostCryptoKeyJson = try? JSON(data: postCryptoKeyRaw) {
            backupDict[Post.CodingKeys.postCryptoKey.rawValue] = prostCryptoKeyJson.object
        }
        
        // 3. foundAt
        backupDict[Post.CodingKeys.foundAt.rawValue] = createdAt?.timeIntervalSince1970
        
        // 4. postBy
        if let postUserId = postUserId,
           let postNetwork = postNetwork
        {
            backupDict[Post.CodingKeys.postBy.rawValue] = "person:\(postNetwork)/\(postUserId)"
        }
        
        // 5. recipients
        if let recipientsRaw = recipientsRaw,
           let recipientsJson = try? JSON(data: recipientsRaw)
        {
            backupDict[Post.CodingKeys.recipients.rawValue] = recipientsJson.object
        }
        
        // 6. interestedMeta
        if let interestedMetaRaw = interestedMetaRaw,
           let interestedMetaJson = try? JSON(data: interestedMetaRaw)
        {
            backupDict[Post.CodingKeys.interestedMeta.rawValue] = interestedMetaJson.object
        }
        
        // 7. summary
        backupDict[Post.CodingKeys.summary.rawValue] = summary
        
        // 8. url
        backupDict[Post.CodingKeys.url.rawValue] = url
        
        return JSON(backupDict)
    }
}
