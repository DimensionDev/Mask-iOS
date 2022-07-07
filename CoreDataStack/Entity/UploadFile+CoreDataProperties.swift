//
//  UploadFile+CoreDataProperties.swift
//  CoreDataStack
//
//  Created by xiaojian sun on 2022/7/5.
//  Copyright © 2022 dimension. All rights reserved.
//
//

import Foundation
import CoreData


extension UploadFile {

    @nonobjc public class func fetchRequest() -> NSFetchRequest<UploadFile> {
        return NSFetchRequest<UploadFile>(entityName: "UploadFile")
    }

    @NSManaged public var createdAt: Date?
    @NSManaged public var fileSize: Double
    @NSManaged public var fileType: Int64
    @NSManaged public var id: String?
    @NSManaged public var key: String?
    @NSManaged public var landingTxID: String?
    @NSManaged public var mime: String?
    @NSManaged public var name: String?
    @NSManaged public var payloadTxID: String?
    @NSManaged public var provider: String?
    @NSManaged public var uploadOption: String?
    @NSManaged public var content: Data?

}

extension UploadFile : Identifiable {

}
