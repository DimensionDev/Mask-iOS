//
//  WalletConnectSession+CoreDataProperties.swift
//  CoreDataStack
//
//  Created by sxiaojian on 2021/12/9.
//  Copyright © 2021 dimension. All rights reserved.
//
//

import Foundation
import CoreData


extension WalletConnectSession {

    @nonobjc public class func fetchRequest() -> NSFetchRequest<WalletConnectSession> {
        return NSFetchRequest<WalletConnectSession>(entityName: "WalletConnectSession")
    }

    @NSManaged public var createdAt: Date?
    @NSManaged public var lastModifiedDate: Date?
    @NSManaged public var sessionRaw: Data?
    @NSManaged public var topic: String?

}

extension WalletConnectSession : Identifiable {

}
