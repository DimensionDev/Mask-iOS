//
//  PostRecord+Managed.swift
//  CoreDataStack
//
//  Created by xiaojian sun on 2022/2/18.
//  Copyright © 2022 dimension. All rights reserved.
//

import Foundation
extension PostRecord: Managed {
    public static var defaultSortDescriptors: [NSSortDescriptor] {
        return [NSSortDescriptor(keyPath: \PostRecord.updatedAt, ascending: false)]
    }
    
    public static func predicate(identifier: String) -> NSPredicate {
        return NSPredicate(format: "%K == %@", #keyPath(PostRecord.identifier), identifier)
    }
    
    public static func predicate(encryptBy: String) -> NSPredicate {
        return NSPredicate(format: "%K == %@", #keyPath(PostRecord.encryptBy), encryptBy)
    }
    
    public static func predicate(userIds: [String]) -> NSPredicate {
        return NSPredicate(format: "%K IN %@", #keyPath(PostRecord.postUserId), userIds)
    }
    
    public static func predicate(network: String) -> NSPredicate {
        return NSPredicate(format: "%K == %@", #keyPath(PostRecord.postNetwork), network)
    }
    
    public static func predicate(encryptBy: String?,
                                 userIds: [String]?,
                                 network: String?) -> NSPredicate? {
        var predicates = [NSPredicate]()
        if let encryptBy = encryptBy {
            predicates.append(Self.predicate(encryptBy: encryptBy))
        }
        if let userIds = userIds {
            predicates.append(Self.predicate(userIds: userIds))
        }
        if let network = network {
            predicates.append(Self.predicate(network: network))
        }
        if predicates.isEmpty {
            return nil
        }
        return NSCompoundPredicate(andPredicateWithSubpredicates: predicates)
    }
}
