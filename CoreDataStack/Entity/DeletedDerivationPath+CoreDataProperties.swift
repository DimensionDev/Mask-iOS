//
//  DeletedDerivationPath+CoreDataProperties.swift
//  CoreDataStack
//
//  Created by BradGao on 2021/7/27.
//  Copyright © 2021 dimension. All rights reserved.
//
//

import CoreData
import Foundation

extension DeletedDerivationPath {
    @nonobjc public class func fetchRequest() -> NSFetchRequest<DeletedDerivationPath> {
        return NSFetchRequest<DeletedDerivationPath>(entityName: "DeletedDerivationPath")
    }

    @NSManaged public var path: String?
    @NSManaged public var storedKey: StoredKey?
}

extension DeletedDerivationPath: Identifiable {
}
