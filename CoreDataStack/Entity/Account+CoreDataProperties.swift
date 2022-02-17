//
//  Account+CoreDataProperties.swift
//  CoreDataStack
//
//  Created by BradGao on 2021/10/13.
//  Copyright © 2021 dimension. All rights reserved.
//
//

import Foundation
import CoreData


extension Account {

    @nonobjc public class func fetchRequest() -> NSFetchRequest<Account> {
        return NSFetchRequest<Account>(entityName: "Account")
    }

    @NSManaged public var address: String?
    @NSManaged public var chainId: Int64
    @NSManaged public var createdAt: Date?
    @NSManaged public var derivationPath: String?
    @NSManaged public var extendedPublicKey: String?
    @NSManaged public var lastModifiedDate: Date?
    @NSManaged public var name: String?
    @NSManaged public var ensName: String?
    @NSManaged public var sessionData: Data?
    @NSManaged public var collectibles: NSSet?
    @NSManaged public var ownedByStoredKey: StoredKey?
    @NSManaged public var portfolios: NSSet?
    @NSManaged public var tokens: NSSet?

}

// MARK: Generated accessors for collectibles
extension Account {

    @objc(addCollectiblesObject:)
    @NSManaged public func addToCollectibles(_ value: Collectible)

    @objc(removeCollectiblesObject:)
    @NSManaged public func removeFromCollectibles(_ value: Collectible)

    @objc(addCollectibles:)
    @NSManaged public func addToCollectibles(_ values: NSSet)

    @objc(removeCollectibles:)
    @NSManaged public func removeFromCollectibles(_ values: NSSet)

}

// MARK: Generated accessors for portfolios
extension Account {

    @objc(addPortfoliosObject:)
    @NSManaged public func addToPortfolios(_ value: Portfolio)

    @objc(removePortfoliosObject:)
    @NSManaged public func removeFromPortfolios(_ value: Portfolio)

    @objc(addPortfolios:)
    @NSManaged public func addToPortfolios(_ values: NSSet)

    @objc(removePortfolios:)
    @NSManaged public func removeFromPortfolios(_ values: NSSet)

}

// MARK: Generated accessors for tokens
extension Account {

    @objc(addTokensObject:)
    @NSManaged public func addToTokens(_ value: Token)

    @objc(removeTokensObject:)
    @NSManaged public func removeFromTokens(_ value: Token)

    @objc(addTokens:)
    @NSManaged public func addToTokens(_ values: NSSet)

    @objc(removeTokens:)
    @NSManaged public func removeFromTokens(_ values: NSSet)

}

extension Account : Identifiable {

}
