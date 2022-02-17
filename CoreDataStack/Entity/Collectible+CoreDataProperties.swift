//
//  Collectible+CoreDataProperties.swift
//  CoreDataStack
//
//  Created by BradGao on 2021/7/27.
//  Copyright © 2021 dimension. All rights reserved.
//
//

import CoreData
import Foundation

extension Collectible {
    @nonobjc public class func fetchRequest() -> NSFetchRequest<Collectible> {
        return NSFetchRequest<Collectible>(entityName: "Collectible")
    }

    @NSManaged public var address: String?
    @NSManaged public var chainId: Int64
    @NSManaged public var createdAt: Date?
    @NSManaged public var creator: String?
    @NSManaged public var creatorAddress: String?
    @NSManaged public var creatorProfileUrl: URL?
    @NSManaged public var externalLink: URL?
    @NSManaged public var id: String?
    @NSManaged public var identifier: String?
    @NSManaged public var imageUrl: URL?
    @NSManaged public var animationUrl: URL?
    @NSManaged public var lastModifiedDate: Date?
    @NSManaged public var logoUrl: String?
    @NSManaged public var name: String?
    @NSManaged public var networkId: Int64
    @NSManaged public var nftAssetsModelDescription: String?
    @NSManaged public var permalink: URL?
    @NSManaged public var previewUrl: URL?
    @NSManaged public var thumbnailUrl: URL?
    @NSManaged public var tokenId: String?
    @NSManaged public var account: Account?
    @NSManaged public var tokenSymbol: String?
    @NSManaged public var tokenName: String?
    @NSManaged public var collectionName: String?
    @NSManaged public var collectionImage: String?
    @NSManaged public var collectionSlug: String?
    @NSManaged public var enabled: Bool
}

extension Collectible: Identifiable {
}
