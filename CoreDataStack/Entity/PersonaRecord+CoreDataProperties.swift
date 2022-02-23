//
//  PersonaRecord+CoreDataProperties.swift
//  CoreDataStack
//
//  Created by xiaojian sun on 2022/2/16.
//  Copyright © 2022 dimension. All rights reserved.
//
//

import Foundation
import CoreData


extension PersonaRecord {

    @nonobjc public class func fetchRequest() -> NSFetchRequest<PersonaRecord> {
        return NSFetchRequest<PersonaRecord>(entityName: "PersonaRecord")
    }

    @NSManaged public var createdAt: Date?
    @NSManaged public var hasLogout: Bool
    @NSManaged public var identifier: String?
    @NSManaged public var initialized: Bool
    @NSManaged public var localKey: String?
    @NSManaged public var mnemonic: String?
    @NSManaged public var nickname: String?
    @NSManaged public var path: String?
    @NSManaged public var privateKey: String?
    @NSManaged public var publicKey: String?
    @NSManaged public var updatedAt: Date?
    @NSManaged public var withPassword: Bool
    @NSManaged public var avatar: String?
    @NSManaged public var linkedProfiles: NSSet?

}

// MARK: Generated accessors for linkedProfiles
extension PersonaRecord {

    @objc(addLinkedProfilesObject:)
    @NSManaged public func addToLinkedProfiles(_ value: ProfileRecord)

    @objc(removeLinkedProfilesObject:)
    @NSManaged public func removeFromLinkedProfiles(_ value: ProfileRecord)

    @objc(addLinkedProfiles:)
    @NSManaged public func addToLinkedProfiles(_ values: NSSet)

    @objc(removeLinkedProfiles:)
    @NSManaged public func removeFromLinkedProfiles(_ values: NSSet)

}

extension PersonaRecord : Identifiable {

}
