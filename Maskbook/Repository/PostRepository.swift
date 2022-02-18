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
            
            postRecord.postNetwork = ProfileRecord.getSocialPlatformFromIdentifier(post.postBy)?.url
            postRecord.postUserId = post.postBy.components(separatedBy: "/").last
            
            postRecord.postCryptoKeyRaw = try? post.postCryptoKey?.rawData()
            postRecord.url = post.url
            postRecord.summary = post.summary
            
            postRecord.foundAt = Date(timeIntervalSince1970: post.foundAt / 1_000)
            postRecord.recipientsRaw = try? post.recipients.rawData()
            postRecord.interestedMetaRaw = try? post.interestedMeta?.rawData()
            postRecord.createdAt = Date()
            postRecord.updatedAt = Date()
            try? context.saveOrRollback()
        }
    }
    
    static func updatePostRecordWithPartialPost(post: Post, postRecord: PostRecord) {
        if let postBy = post.encryptBy {
            postRecord.encryptBy = postBy
        }
        postRecord.postNetwork = ProfileRecord.getSocialPlatformFromIdentifier(post.postBy)?.url
        postRecord.postUserId = post.postBy.components(separatedBy: "/").last
        if let postCryptoKeyData = try? post.postCryptoKey?.rawData() {
            postRecord.postCryptoKeyRaw = postCryptoKeyData
        }
        if let url = post.url {
            postRecord.url = url
        }
        if let summary = post.summary {
            postRecord.summary = summary
        }
        
        postRecord.foundAt = Date(timeIntervalSince1970: post.foundAt / 1_000)
        if let interestedMetaData = try? post.interestedMeta?.rawData() {
            postRecord.interestedMetaRaw = interestedMetaData
        }
    }
    
    static func queryPost(identifier: String) -> PostRecord? {
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
                // TODO: need test for this merge
                if let recipientsRaw = postRecord.recipientsRaw,
                   let json = try? JSON(data: recipientsRaw)
                {
                    var mJson = json
                    try? mJson.merge(with: post.recipients)
                    postRecord.recipientsRaw = try? mJson.rawData()
                }
                
            case .override:
                postRecord.recipientsRaw = try? post.recipients.rawData()
            }
            postRecord.updatedAt = Date()
            try? viewContext.saveOrRollback()
        }
        return PostRepository.queryPost(identifier: post.identifier)
    }
}
