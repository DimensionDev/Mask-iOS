//
//  StoredKey+CoreDataProperties.swift
//  CoreDataStack
//
//  Created by BradGao on 2021/7/27.
//  Copyright © 2021 dimension. All rights reserved.
//
//

import CoreData
import Foundation

extension StoredKey {
    @nonobjc public class func fetchRequest() -> NSFetchRequest<StoredKey> {
        return NSFetchRequest<StoredKey>(entityName: "StoredKey")
    }

    @NSManaged public var createdAt: Date?
    @NSManaged public var data: Data?
    @NSManaged public var hashString: String?
    @NSManaged public var id: String?
    @NSManaged public var isImported: Bool
    @NSManaged public var lastModifiedDate: Date?
    @NSManaged public var type: Int16
    @NSManaged public var isDefault: Bool
    @NSManaged public var accounts: NSSet?
    @NSManaged public var deletedDerivationPaths: NSSet?
}

// MARK: Generated accessors for accounts
extension StoredKey {
    @objc(addAccountsObject:)
    @NSManaged public func addToAccounts(_ value: Account)

    @objc(removeAccountsObject:)
    @NSManaged public func removeFromAccounts(_ value: Account)

    @objc(addAccounts:)
    @NSManaged public func addToAccounts(_ values: NSSet)

    @objc(removeAccounts:)
    @NSManaged public func removeFromAccounts(_ values: NSSet)
}

// MARK: Generated accessors for deletedDerivationPaths
extension StoredKey {
    @objc(addDeletedDerivationPathsObject:)
    @NSManaged public func addToDeletedDerivationPaths(_ value: DeletedDerivationPath)

    @objc(removeDeletedDerivationPathsObject:)
    @NSManaged public func removeFromDeletedDerivationPaths(_ value: DeletedDerivationPath)

    @objc(addDeletedDerivationPaths:)
    @NSManaged public func addToDeletedDerivationPaths(_ values: NSSet)

    @objc(removeDeletedDerivationPaths:)
    @NSManaged public func removeFromDeletedDerivationPaths(_ values: NSSet)
}

extension StoredKey: Identifiable {}
