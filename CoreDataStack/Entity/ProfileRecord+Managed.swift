//
//  ProfileRecord+Managed.swift
//  CoreDataStack
//
//  Created by Brad Gao on 2022/1/14.
//  Copyright © 2022 dimension. All rights reserved.
//

import CoreData
import Foundation

extension ProfileRecord: Managed {
    public static var defaultSortDescriptors: [NSSortDescriptor] {
        return [NSSortDescriptor(keyPath: \ProfileRecord.nickname, ascending: true)]
    }
    
    public static func predicate(identifier: String) -> NSPredicate {
        return NSPredicate(format: "%K == %@", #keyPath(ProfileRecord.identifier), identifier)
    }
    
    public static func predicate(nameContains contains: String) -> NSPredicate {
        return NSPredicate(format: "%K CONTAINS %@", #keyPath(ProfileRecord.nickname), contains)
    }
    
    public static func predicate(network: String) -> NSPredicate {
        return NSPredicate(format: "%K == %@", #keyPath(ProfileRecord.network), network)
    }
    
    public static func predicate(ofIdentifiers identifiers: [String]) -> NSPredicate {
        return NSPredicate(format: "%K IN %@", #keyPath(ProfileRecord.identifier), identifiers)
    }
    
    public static func hasLinkedPersona() -> NSPredicate {
        return NSPredicate(format: "%K != nil", #keyPath(ProfileRecord.linkedPersona))
    }
    
    public static func predicate(identifier: String?,
                                 network: String?,
                                 nameContains: String?) -> NSPredicate? {
        var predicates = [NSPredicate]()
        if let identifier = identifier {
            predicates.append(Self.predicate(identifier: identifier))
        }
        if let network = network {
            predicates.append(Self.predicate(network: network))
        }
        if let nameContains = nameContains {
            predicates.append(Self.predicate(nameContains: nameContains))
        }
        if predicates.isEmpty {
            return nil
        }
        return NSCompoundPredicate(andPredicateWithSubpredicates: predicates)
    }
    
    public static func predicate(identifiers: [String]?,
                                 network: String?,
                                 nameContains: String?) -> NSPredicate? {
        var predicates = [NSPredicate]()
        if let identifiers = identifiers {
            predicates.append(Self.predicate(ofIdentifiers: identifiers))
        }
        if let network = network {
            predicates.append(Self.predicate(network: network))
        }
        if let nameContains = nameContains {
            predicates.append(Self.predicate(nameContains: nameContains))
        }
        if predicates.isEmpty {
            return nil
        }
        return NSCompoundPredicate(andPredicateWithSubpredicates: predicates)
    }
}
