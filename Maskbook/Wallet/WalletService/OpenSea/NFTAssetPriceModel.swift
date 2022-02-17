//
//  NFTAssetPriceModel.swift
//  Maskbook
//
//  Created by caiyu on 2022/1/13.
//  Copyright © 2022 dimension. All rights reserved.
//

import Foundation

// MARK: - NFTAssetsModel

struct NFTAssetPriceModel: Codable, Hashable {
    let owner: Owner
    let lastSale: LastSaleDetail?
    let orders: [AssetOrders]

    enum CodingKeys: String, CodingKey {
        case owner
        case lastSale = "last_sale"
        case orders
    }
}

// MARK: - LastSaleDetail
struct LastSaleDetail: Codable, Hashable {
    let totalPrice: String?
    enum CodingKeys: String, CodingKey {
        case totalPrice = "total_price"
    }
}

// MARK: - AssetOrders
struct AssetOrders: Codable, Hashable {
    let maker: Owner
    let currentPrice: String

    enum CodingKeys: String, CodingKey {
        case currentPrice = "current_price"
        case maker = "maker"
    }
}

// MARK: - Creator
struct Owner: Codable, Hashable {
    let address: String
}

