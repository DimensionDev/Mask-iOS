//
//  AppContext.swift
//  Maskbook
//
//  Created by BradGao on 2021/6/2.
//  Copyright © 2021 dimension. All rights reserved.
//

import Combine
import CoreData
import CoreDataStack
import Foundation

class AppContext {
    static let shared = AppContext()
    
    let coreDataStack = CoreDataStack(databaseName: "shared")
    
    let backgroundContext: NSManagedObjectContext
    
    let webExtensionCoreDataStackBridge: WebExtensionCoreDataStackBridge
    
    private init() {
        backgroundContext = coreDataStack.persistentContainer.backgroundContext
        webExtensionCoreDataStackBridge = WebExtensionCoreDataStackBridge(context: coreDataStack.persistentContainer.viewContext)
    }
}
