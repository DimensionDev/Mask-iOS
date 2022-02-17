//
//  Portfolio+CoreDataProperties.swift
//  CoreDataStack
//
//  Created by BradGao on 2021/7/27.
//  Copyright © 2021 dimension. All rights reserved.
//
//

import CoreData
import Foundation

extension Portfolio {
    @nonobjc public class func fetchRequest() -> NSFetchRequest<Portfolio> {
        return NSFetchRequest<Portfolio>(entityName: "Portfolio")
    }

    @NSManaged public var absoluteChange24h: Float
    @NSManaged public var assetsValue: Float
    @NSManaged public var borrowedValue: Float
    @NSManaged public var chainId: Int64
    @NSManaged public var createdAt: Date?
    @NSManaged public var currency: String?
    @NSManaged public var depositedValue: Float
    @NSManaged public var lastModifiedDate: Date?
    @NSManaged public var lockedValue: Float
    @NSManaged public var networkId: Int64
    @NSManaged public var relativeChange24h: Float
    @NSManaged public var stakedValue: Float
    @NSManaged public var totalValue: Float
    @NSManaged public var account: Account?
}

extension Portfolio: Identifiable {
}
