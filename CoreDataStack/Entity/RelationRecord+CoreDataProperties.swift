//
//  RelationRecord+CoreDataProperties.swift
//  CoreDataStack
//
//  Created by Brad Gao on 2022/1/20.
//  Copyright © 2022 dimension. All rights reserved.
//
//

import Foundation
import CoreData


extension RelationRecord {

    @nonobjc public class func fetchRequest() -> NSFetchRequest<RelationRecord> {
        return NSFetchRequest<RelationRecord>(entityName: "RelationRecord")
    }

    @NSManaged public var personaIdentifier: String?
    @NSManaged public var profileIdentifier: String?
    @NSManaged public var favor: Bool
    @NSManaged public var createdAt: Date?
    @NSManaged public var updatedAt: Date?

}

extension RelationRecord : Identifiable {

}
