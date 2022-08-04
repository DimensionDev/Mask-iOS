//
//  NFTScanAssetModel.swift
//  Maskbook
//
//  Created by caiyu on 2022/8/4.
//  Copyright © 2022 dimension. All rights reserved.
//

import Foundation
import CoreData
import CoreDataStack

struct NFTScanAssetDataModel: Codable, Hashable {
    let total: Int
    let next: String?
    let content: [NFTScanAssetModel]

    enum CodingKeys: String, CodingKey {
        case total
        case next
        case content
    }
}

struct NFTScanAssetModel: Codable, Hashable {
    let contractAddress, contractName, contractToken: String?
    let tokenID: String?
    let ercType: String?
    let amount: String?
    let minter, owner: String?
    let mintTimeStamp: Int?
    let name: String?
    let imageUri, contentUri: String?
    let contentType: String?
    let nftscanID: String?
    let externalLink: String?

    enum CodingKeys: String, CodingKey {
        case contractAddress = "contract_address"
        case contractName = "contract_name"
        case contractToken = "contract_token"
        case tokenID = "token_id"
        case ercType = "erc_type"
        case amount
        case minter
        case owner
        case mintTimeStamp = "mint_timestamp"
        case name
        case imageUri = "image_uri"
        case contentUri = "content_uri"
        case contentType = "content_type"
        case nftscanID = "nftscan_id"
        case externalLink = "external_link"
    }
}


extension Collectible {
    convenience init?(
        nftScanModel assetModel: NFTScanAssetModel,
        network: BlockChainNetwork,
        context: NSManagedObjectContext
    ) {
        self.init(context: context)
        
        self.tokenId = assetModel.tokenID
        self.address = assetModel.contractAddress
        self.imageUrl = URL(string: assetModel.imageUri ?? "")
        self.animationUrl = URL(string: assetModel.imageUri ?? "")
        self.previewUrl = URL(string: assetModel.imageUri ?? "")
        self.thumbnailUrl = URL(string: assetModel.imageUri ?? "")
        self.externalLink = URL(string: assetModel.externalLink ?? "")
        self.creator = assetModel.owner
        self.creatorProfileUrl = URL(string: assetModel.owner ?? "")
        self.creatorAddress = assetModel.owner
        self.permalink = URL(string: assetModel.imageUri ?? "")
        if let id = assetModel.nftscanID {
            self.id = String(id)
        }
        self.nftAssetsModelDescription = assetModel.contractAddress
        self.logoUrl = assetModel.imageUri
        self.name = assetModel.name
        self.chainId = Int64(network.chain.rawValue)
        self.networkId = Int64(network.networkId)
        self.identifier = Collectible.createIdentifier(
            chainId: self.chainId,
            networkId: self.networkId,
            id: self.id ?? "")
        self.tokenName = assetModel.name
        self.tokenSymbol = assetModel.contractToken
        self.collectionName = assetModel.contractName
        self.collectionImage = assetModel.imageUri
        self.collectionSlug = assetModel.contractName
        self.collectionWebsite = URL(string: assetModel.imageUri ?? "")
    }
}
