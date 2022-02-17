//
//  ProfileRecord+CoreDataProperties.swift
//  CoreDataStack
//
//  Created by Brad Gao on 2022/1/20.
//  Copyright © 2022 dimension. All rights reserved.
//
//

import Foundation
import CoreData


extension ProfileRecord {

    @nonobjc public class func fetchRequest() -> NSFetchRequest<ProfileRecord> {
        return NSFetchRequest<ProfileRecord>(entityName: "ProfileRecord")
    }

    @NSManaged public var createdAt: Date?
    @NSManaged public var identifier: String?
    @NSManaged public var network: String?
    @NSManaged public var nickname: String?
    @NSManaged public var updatedAt: Date?
    @NSManaged public var linkedPersona: PersonaRecord?

}

extension ProfileRecord : Identifiable {

}
