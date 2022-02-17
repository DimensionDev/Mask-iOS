//
//  MaskPersistentContainer.swift
//  CoreDataStack
//
//  Created by BradGao on 2021/6/2.
//  Copyright © 2021 dimension. All rights reserved.
//

import CoreData

public class MaskPersistentContainer: NSPersistentContainer {
    public var backgroundContext: NSManagedObjectContext!
    
    override public init(name: String, managedObjectModel model: NSManagedObjectModel) {
        super.init(name: name, managedObjectModel: model)
    }
}
