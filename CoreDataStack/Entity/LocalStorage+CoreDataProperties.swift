//
//  LocalStorage+CoreDataProperties.swift
//  CoreDataStack
//
//  Created by sxiaojian on 2021/10/19.
//  Copyright © 2021 dimension. All rights reserved.
//
//

import Foundation
import CoreData


extension LocalStorage {

    @nonobjc public class func fetchRequest() -> NSFetchRequest<LocalStorage> {
        return NSFetchRequest<LocalStorage>(entityName: "LocalStorage")
    }

    @NSManaged public var createdAt: Date?
    @NSManaged public var key: String?
    @NSManaged public var lastModifiedDate: Date?
    @NSManaged public var value: Data?
    @NSManaged public var extensionID: String?

}

extension LocalStorage : Identifiable {

}
