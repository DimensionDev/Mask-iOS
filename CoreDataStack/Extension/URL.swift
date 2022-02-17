//
//  URL.swift
//  CoreDataStack
//
//  Created by BradGao on 2021/6/2.
//  Copyright © 2021 dimension. All rights reserved.
//

import Foundation

public extension URL {
    static func storeURL(for appGroup: String, databaseName: String) -> URL {
        guard let fileContainer = FileManager.default.containerURL(forSecurityApplicationGroupIdentifier: appGroup) else {
            fatalError("Shared file container could not be created.")
        }
        
        return fileContainer
            .appendingPathComponent("Databases", isDirectory: true)
            .appendingPathComponent("\(databaseName).sqlite")
    }
}
