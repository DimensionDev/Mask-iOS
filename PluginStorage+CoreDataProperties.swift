//
//  PluginStorage+CoreDataProperties.swift
//  CoreDataStack
//
//  Created by Hugo L on 2022/4/18.
//  Copyright © 2022 dimension. All rights reserved.
//
//

import Foundation
import CoreData


extension PluginStorage {

    @nonobjc public class func fetchRequest() -> NSFetchRequest<PluginStorage> {
        return NSFetchRequest<PluginStorage>(entityName: "PluginStorage")
    }

    @NSManaged public var createdAt: Date?
    @NSManaged public var pluginID: String?
    @NSManaged public var type: String?
    @NSManaged public var key: String?
    @NSManaged public var lastModifiedDate: Date?
    @NSManaged public var value: String?

}

extension PluginStorage : Identifiable {

}
