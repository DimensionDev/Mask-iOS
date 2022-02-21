//
//  NSManagedObjectContext.swift
//  CoreDataStack
//
//  Created by BradGao on 2021/6/2.
//  Copyright © 2021 dimension. All rights reserved.
//

import Combine
import CoreData
import Foundation
import os

public extension NSManagedObjectContext {
     func insert<T: NSManagedObject>() -> T where T: Managed {
        guard let object = NSEntityDescription.insertNewObject(forEntityName: T.entityName, into: self) as? T else {
            fatalError("cannot insert object: \(T.self)")
        }
        
        return object
    }
    
    func saveOrRollback() throws {
        do {
            guard hasChanges else {
                return
            }
            try save()
        } catch {
            rollback()
            print(error)
            os_log("%{public}s[%{public}ld], %{public}s: %s", ((#file as NSString).lastPathComponent), #line, #function, error.localizedDescription)
            
            throw error
        }
    }
    
    func waitUntilSavedOrRollback() throws {
        var saveError: Error?
        performAndWait {
            do {
                try saveOrRollback()
            } catch {
                saveError = error
            }
        }
        if let error = saveError {
            throw error
        }
    }
    
    func performChanges(block: @escaping () -> Void) -> Future<Result<Void, Error>, Never> {
        Future { promise in
            self.perform {
                block()
                do {
                    try self.saveOrRollback()
                    promise(.success(Result.success(())))
                } catch {
                    promise(.success(Result.failure(error)))
                }
            }
        }
    }
}
