//
//  ProfileRecord+CoreDataProperties.swift
//  CoreDataStack
//
//  Created by xiaojian sun on 2022/5/6.
//  Copyright © 2022 dimension. All rights reserved.
//
//

import Foundation
import CoreData


extension ProfileRecord {

    @nonobjc public class func fetchRequest() -> NSFetchRequest<ProfileRecord> {
        return NSFetchRequest<ProfileRecord>(entityName: "ProfileRecord")
    }

    @NSManaged public var avatar: String?
    @NSManaged public var createdAt: Date?
    @NSManaged public var identifier: String?
    @NSManaged public var network: String?
    @NSManaged public var nickname: String?
    @NSManaged public var updatedAt: Date?
    @NSManaged public var cookiesData: Data?
    @NSManaged public var linkedPersona: PersonaRecord?

}

extension ProfileRecord : Identifiable {

}

extension ProfileRecord {
    public var userName: String? {
        guard let substring = identifier?.split(separator: "/").last as? Substring else {
            return nil
        }
        return String(substring)
    }
}
