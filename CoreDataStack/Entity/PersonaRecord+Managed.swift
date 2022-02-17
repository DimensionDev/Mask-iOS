//
//  PersonaRecord+Managed.swift
//  CoreDataStack
//
//  Created by Brad Gao on 2022/1/14.
//  Copyright © 2022 dimension. All rights reserved.
//

import CoreData
import Foundation

extension PersonaRecord: Managed {
    public static var defaultSortDescriptors: [NSSortDescriptor] {
        return [NSSortDescriptor(keyPath: \PersonaRecord.nickname, ascending: true)]
    }
    
    public static func predicate(nameContains contains: String) -> NSPredicate {
        return NSPredicate(format: "%K CONTAINS %@", #keyPath(PersonaRecord.nickname), contains)
    }
    
    public static func predicate(identifier: String) -> NSPredicate {
        return NSPredicate(format: "%K == %@", #keyPath(PersonaRecord.identifier), identifier)
    }
    
    public static func predicate(ofIdentifiers identifiers: [String]) -> NSPredicate {
        return NSPredicate(format: "%K IN %@", #keyPath(PersonaRecord.identifier), identifiers)
    }
    
    public static func predicate(hasPrivateKey: Bool) -> NSPredicate {
        let format: String
        if hasPrivateKey {
            format = "%K != nil"
        } else {
            format = "%K == nil"
        }
        return NSPredicate(format: format, #keyPath(PersonaRecord.privateKey))
    }
    
    public static func predicate(hasLogout: Bool) -> NSPredicate {
        return NSPredicate(format: "%K == %@", #keyPath(PersonaRecord.hasLogout), NSNumber(booleanLiteral: hasLogout))
    }
    
    public static func predicate(initialized: Bool) -> NSPredicate {
        return NSPredicate(format: "%K == %@", #keyPath(PersonaRecord.initialized), NSNumber(booleanLiteral: initialized))
    }
    
    public static func predicate(identifier: String?,
                                 hasPrivateKey: Bool?,
                                 hasLogout: Bool?,
                                 nameContains: String?,
                                 initialized: Bool?) -> NSPredicate? {
        var predicates = [NSPredicate]()
        if let identifier = identifier {
            predicates.append(Self.predicate(identifier: identifier))
        }
        if let hasPrivateKey = hasPrivateKey {
            predicates.append(Self.predicate(hasPrivateKey: hasPrivateKey))
        }
        if let hasLogout = hasLogout {
            predicates.append(Self.predicate(hasLogout: hasLogout))
        }
        if let nameContains = nameContains {
            predicates.append(Self.predicate(nameContains: nameContains))
        }
        if let initialized = initialized {
            predicates.append(Self.predicate(initialized: initialized))
        }
        if predicates.isEmpty {
            return nil
        }
        return NSCompoundPredicate(andPredicateWithSubpredicates: predicates)
    }
    
    public static func predicate(identifiers: [String]?,
                                 hasPrivateKey: Bool?,
                                 hasLogout: Bool?,
                                 nameContains: String?,
                                 initialized: Bool?) -> NSPredicate? {
        var predicates = [NSPredicate]()
        if let identifiers = identifiers {
            predicates.append(Self.predicate(ofIdentifiers: identifiers))
        }
        if let hasPrivateKey = hasPrivateKey, hasPrivateKey {
            // Only appending the predicate when `hasPrivateKey` is true, because either it's nil or false, means `do not filter privateKey`
            predicates.append(Self.predicate(hasPrivateKey: hasPrivateKey))
        }
        if let hasLogout = hasLogout, !hasLogout {
            predicates.append(Self.predicate(hasLogout: hasLogout))
        }
        if let nameContains = nameContains {
            predicates.append(Self.predicate(nameContains: nameContains))
        }
        if let initialized = initialized {
            predicates.append(Self.predicate(initialized: initialized))
        }
        if predicates.isEmpty {
            return nil
        }
        return NSCompoundPredicate(andPredicateWithSubpredicates: predicates)
    }
}
