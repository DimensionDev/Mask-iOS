//
//  BlobStorage+extension.swift
//  Maskbook
//
//  Created by sxiaojian on 2021/10/19.
//  Copyright © 2021 dimension. All rights reserved.
//

import CoreData
import CoreDataStack
import Foundation

extension BlobStorage {
    convenience init(uuid: String, blob: Data, type: String, url: String, context: NSManagedObjectContext) {
        self.init(context: context)
        self.uuid = uuid
        self.blob = blob
        self.type = type
        self.url = url
    }
}
