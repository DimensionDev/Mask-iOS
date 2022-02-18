//
//  NFTAssetsModel.swift
//  Maskbook
//
//  Created by Hugo L on 2021/7/14.
//  Copyright © 2021 dimension. All rights reserved.
//

import CoreData
import CoreDataStack
import Foundation

// MARK: - NFTAssetsModel
struct NFTAssetsModel: Codable, Hashable {
    let id: Int?
    let tokenID: String?
    let numSales: Int?
    let imageURL, imagePreviewURL, imageThumbnailURL: String?
    let name, nftAssetsModelDescription: String?
    let externalLink: String?
    let assetContract: AssetContract?
    let permalink: String?
    let collection: Collection?
    let owner: Creator?
    let creator: Creator?
    let isPresale: Bool?
    let animationUrl: String?

    enum CodingKeys: String, CodingKey {
        case id
        case tokenID = "token_id"
        case numSales = "num_sales"
        case imageURL = "image_url"
        case imagePreviewURL = "image_preview_url"
        case imageThumbnailURL = "image_thumbnail_url"
        case name
        case nftAssetsModelDescription = "description"
        case externalLink = "external_link"
        case assetContract = "asset_contract"
        case permalink, collection
        case owner
        case creator
        case isPresale = "is_presale"
        case animationUrl = "animation_url"
    }
}

// MARK: - AssetContract
struct AssetContract: Codable, Hashable {
    let address, assetContractType, createdDate, name: String?
    let nftVersion, openseaVersion: String?
    let owner: Int?
    let schemaName, symbol: String?
    let assetContractDescription: String?
    let externalLink, imageURL: String?
    let defaultToFiat: Bool?
    let devBuyerFeeBasisPoints, devSellerFeeBasisPoints: Int?
    let onlyProxiedTransfers: Bool?
    let openseaBuyerFeeBasisPoints, openseaSellerFeeBasisPoints, buyerFeeBasisPoints, sellerFeeBasisPoints: Int?

    enum CodingKeys: String, CodingKey {
        case address
        case assetContractType = "asset_contract_type"
        case createdDate = "created_date"
        case name
        case nftVersion = "nft_version"
        case openseaVersion = "opensea_version"
        case owner
        case schemaName = "schema_name"
        case symbol
        case assetContractDescription = "description"
        case externalLink = "external_link"
        case imageURL = "image_url"
        case defaultToFiat = "default_to_fiat"
        case devBuyerFeeBasisPoints = "dev_buyer_fee_basis_points"
        case devSellerFeeBasisPoints = "dev_seller_fee_basis_points"
        case onlyProxiedTransfers = "only_proxied_transfers"
        case openseaBuyerFeeBasisPoints = "opensea_buyer_fee_basis_points"
        case openseaSellerFeeBasisPoints = "opensea_seller_fee_basis_points"
        case buyerFeeBasisPoints = "buyer_fee_basis_points"
        case sellerFeeBasisPoints = "seller_fee_basis_points"
    }
}

// MARK: - Collection
struct Collection: Codable, Hashable {
    let createdDate: String?
    let defaultToFiat: Bool?
    let collectionDescription, devBuyerFeeBasisPoints, devSellerFeeBasisPoints: String?
    let displayData: DisplayData?
    let externalURL: String?
    let featured: Bool?
    let featuredImageURL: String?
    let hidden: Bool?
    let safelistRequestStatus: String?
    let imageURL: String?
    let isSubjectToWhitelist: Bool?
    let largeImageURL: String?
    let mediumUsername, name: String?
    let onlyProxiedTransfers: Bool?
    let openseaBuyerFeeBasisPoints, openseaSellerFeeBasisPoints: String?
    let requireEmail: Bool?
    let slug: String?
    let twitterUsername: String?

    enum CodingKeys: String, CodingKey {
        case createdDate = "created_date"
        case defaultToFiat = "default_to_fiat"
        case collectionDescription = "description"
        case devBuyerFeeBasisPoints = "dev_buyer_fee_basis_points"
        case devSellerFeeBasisPoints = "dev_seller_fee_basis_points"
        case displayData = "display_data"
        case externalURL = "external_url"
        case featured
        case featuredImageURL = "featured_image_url"
        case hidden
        case safelistRequestStatus = "safelist_request_status"
        case imageURL = "image_url"
        case isSubjectToWhitelist = "is_subject_to_whitelist"
        case largeImageURL = "large_image_url"
        case mediumUsername = "medium_username"
        case name
        case onlyProxiedTransfers = "only_proxied_transfers"
        case openseaBuyerFeeBasisPoints = "opensea_buyer_fee_basis_points"
        case openseaSellerFeeBasisPoints = "opensea_seller_fee_basis_points"
        case requireEmail = "require_email"
        case slug
        case twitterUsername = "twitter_username"
    }
}

// MARK: - DisplayData
struct DisplayData: Codable, Hashable {
    let cardDisplayStyle: String?

    enum CodingKeys: String, CodingKey {
        case cardDisplayStyle = "card_display_style"
    }
}

// MARK: - Creator
struct Creator: Codable, Hashable {
    let user: User?
    let profileImgURL: String?
    let address, config, discordID: String?

    enum CodingKeys: String, CodingKey {
        case user
        case profileImgURL = "profile_img_url"
        case address, config
        case discordID = "discord_id"
    }
}

// MARK: - User
struct User: Codable, Hashable {
    let username: String?
}

extension Collectible {
    convenience init?(
        nftModel assetModel: NFTAssetsModel,
        network: BlockChainNetwork,
        context: NSManagedObjectContext
    ) {
        self.init(context: context)
        
        self.tokenId = assetModel.tokenID
        self.address = assetModel.assetContract?.address
        self.imageUrl = URL(string: assetModel.imageURL ?? "")
        self.animationUrl = URL(string: assetModel.animationUrl ?? "")
        self.previewUrl = URL(string: assetModel.imagePreviewURL ?? "")
        self.thumbnailUrl = URL(string: assetModel.imageThumbnailURL ?? "")
        self.externalLink = URL(string: assetModel.externalLink ?? "")
        self.creator = assetModel.creator?.user?.username
        self.creatorProfileUrl = URL(string: assetModel.creator?.profileImgURL ?? "")
        self.creatorAddress = assetModel.creator?.address
        self.permalink = URL(string: assetModel.permalink ?? "")
        if let id = assetModel.id {
            self.id = String(id)
        }
        self.nftAssetsModelDescription = assetModel.nftAssetsModelDescription
        self.logoUrl = assetModel.assetContract?.imageURL
        self.name = assetModel.name
        self.chainId = Int64(network.chain.rawValue)
        self.networkId = Int64(network.networkId)
        self.identifier = Collectible.createIdentifier(
            chainId: self.chainId,
            networkId: self.networkId,
            id: self.id ?? "")
        self.tokenName = assetModel.assetContract?.name
        self.tokenSymbol = assetModel.assetContract?.symbol
        self.collectionName = assetModel.collection?.name
        self.collectionImage = assetModel.collection?.imageURL
        self.collectionSlug = assetModel.collection?.slug
    }
}
