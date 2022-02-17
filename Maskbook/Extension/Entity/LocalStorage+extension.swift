//
//  LocalStorage+extension.swift
//  Maskbook
//
//  Created by sxiaojian on 2021/10/19.
//  Copyright © 2021 dimension. All rights reserved.
//

import CoreData
import CoreDataStack
import Foundation

extension LocalStorage {
    convenience init(keyValuePair: (key: String, value: Data), extensionID: String, context: NSManagedObjectContext) {
        self.init(context: context)
        self.key = keyValuePair.key
        self.value = keyValuePair.value
        self.extensionID = extensionID
    }
}
