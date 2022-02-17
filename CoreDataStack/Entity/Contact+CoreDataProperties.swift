//
//  Contact+CoreDataProperties.swift
//  CoreDataStack
//
//  Created by BradGao on 2021/9/30.
//  Copyright © 2021 dimension. All rights reserved.
//
//

import Foundation
import CoreData


extension Contact {

    @nonobjc public class func fetchRequest() -> NSFetchRequest<Contact> {
        return NSFetchRequest<Contact>(entityName: "Contact")
    }

    @NSManaged public var address: String?
    @NSManaged public var chainId: Int64
    @NSManaged public var createdAt: Date?
    @NSManaged public var ensName: String?
    @NSManaged public var id: String?
    @NSManaged public var lastModifedDate: Date?
    @NSManaged public var name: String?
    @NSManaged public var networkId: Int64

}

extension Contact : Identifiable {

}
