//
//  PostRecord+CoreDataProperties.swift
//  CoreDataStack
//
//  Created by xiaojian sun on 2022/2/17.
//  Copyright © 2022 dimension. All rights reserved.
//
//

import Foundation
import CoreData


extension PostRecord {

    @nonobjc public class func fetchRequest() -> NSFetchRequest<PostRecord> {
        return NSFetchRequest<PostRecord>(entityName: "PostRecord")
    }

    @NSManaged public var identifier: String?
    @NSManaged public var encryptBy: String?
    @NSManaged public var postNetwork: String?
    @NSManaged public var postUserId: String?
    @NSManaged public var postCryptoKeyRaw: Data?
    @NSManaged public var url: String?
    @NSManaged public var summary: String?
    @NSManaged public var foundAt: Date?
    @NSManaged public var recipientsRaw: Data?
    @NSManaged public var interestedMetaRaw: Data?

}

extension PostRecord : Identifiable {

}
