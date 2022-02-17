//
//  BlobStorage+CoreDataProperties.swift
//  CoreDataStack
//
//  Created by sxiaojian on 2021/10/20.
//  Copyright © 2021 dimension. All rights reserved.
//
//

import Foundation
import CoreData


extension BlobStorage {

    @nonobjc public class func fetchRequest() -> NSFetchRequest<BlobStorage> {
        return NSFetchRequest<BlobStorage>(entityName: "BlobStorage")
    }

    @NSManaged public var blob: Data?
    @NSManaged public var createdAt: Date?
    @NSManaged public var lastModifiedDate: Date?
    @NSManaged public var type: String?
    @NSManaged public var url: String?
    @NSManaged public var uuid: String?

}

extension BlobStorage : Identifiable {

}
