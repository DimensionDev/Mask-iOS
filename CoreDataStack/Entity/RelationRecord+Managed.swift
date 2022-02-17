//
//  RelationRecord+Managed.swift
//  CoreDataStack
//
//  Created by Brad Gao on 2022/1/20.
//  Copyright © 2022 dimension. All rights reserved.
//

import CoreData
import Foundation

extension RelationRecord: Managed {
    public static var defaultSortDescriptors: [NSSortDescriptor] {
        return [NSSortDescriptor(keyPath: \RelationRecord.updatedAt, ascending: false)]
    }
    
    public static func predicate(personaIdentifier: String) -> NSPredicate {
        return NSPredicate(format: "%K == %@", #keyPath(RelationRecord.personaIdentifier), personaIdentifier)
    }
    
    public static func predicate(profileIdentifier: String) -> NSPredicate {
        return NSPredicate(format: "%K == %@", #keyPath(RelationRecord.profileIdentifier), profileIdentifier)
    }
    
    public static func predicate(favor: Bool) -> NSPredicate {
        return NSPredicate(format: "%K == %@", #keyPath(RelationRecord.favor), NSNumber(booleanLiteral: favor))
    }
    
    public static func predicate(profileIdentifier: String?,
                                 personaIdentifier: String?,
                                 favor: Bool?) -> NSPredicate? {
        var predicates = [NSPredicate]()
        if let profileIdentifier = profileIdentifier {
            predicates.append(Self.predicate(profileIdentifier: profileIdentifier))
        }
        if let personaIdentifier = personaIdentifier {
            predicates.append(Self.predicate(personaIdentifier: personaIdentifier))
        }
        if let favor = favor {
            predicates.append(Self.predicate(favor: favor))
        }
        if predicates.isEmpty {
            return nil
        }
        return NSCompoundPredicate(andPredicateWithSubpredicates: predicates)
    }
}
