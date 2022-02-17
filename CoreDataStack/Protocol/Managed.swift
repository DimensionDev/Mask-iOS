//
//  Managed.swift
//  CoreDataStack
//
//  Created by BradGao on 2021/6/2.
//  Copyright © 2021 dimension. All rights reserved.
//

import CoreData
import Foundation

public protocol Managed: NSFetchRequestResult {
    static var entityName: String { get }
    static var defaultSortDescriptors: [NSSortDescriptor] { get }
}

public extension Managed {
     static var defaultSortDescriptors: [NSSortDescriptor] {
        return []
    }
    
    static var sortedFetchRequest: NSFetchRequest<Self> {
        let request = NSFetchRequest<Self>(entityName: entityName)
        request.sortDescriptors = defaultSortDescriptors
        return request
    }
}

extension NSManagedObjectContext {
    public func insertObject<T: NSManagedObject>() -> T where T: Managed {
        guard let object = NSEntityDescription.insertNewObject(forEntityName: T.entityName, into: self) as? T else {
            fatalError("Wrong object type")
        }
        
        return object
    }
}

extension Managed where Self: NSManagedObject {
    public static var entityName: String { return entity().name! }
}

// swiftlint:disable force_try
extension Managed where Self: NSManagedObject {
    public static func findOrCreate(in context: NSManagedObjectContext, matching predicate: NSPredicate, configure: (Self) -> Void) -> Self {
        guard let object = findOrFetch(in: context, matching: predicate) else {
            let newObject: Self = context.insertObject()
            configure(newObject)
            return newObject
        }
        
        return object
    }
    
    public static func findOrFetch(in context: NSManagedObjectContext, matching predicate: NSPredicate) -> Self? {
        guard let object = materializedObject(in: context, matching: predicate) else {
            return fetch(in: context) { request in
                request.predicate = predicate
                request.returnsObjectsAsFaults = false
                request.fetchLimit = 1
            }.first
        }
        
        return object
    }
    
    public static func materializedObject(in context: NSManagedObjectContext, matching predicate: NSPredicate) -> Self? {
        for object in context.registeredObjects where !object.isFault {
            guard let result = object as? Self, predicate.evaluate(with: result) else { continue }
            return result
        }
        
        return nil
    }
    
    public static func fetch(in context: NSManagedObjectContext, configurationBlock: (NSFetchRequest<Self>) -> Void = { _ in }) -> [Self] {
        let request = NSFetchRequest<Self>(entityName: Self.entityName)
        configurationBlock(request)
        return try! context.fetch(request)
    }
}
// swiftlint:enable force_try
