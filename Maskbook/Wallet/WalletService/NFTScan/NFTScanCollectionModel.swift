//
//  NFTScanCollection.swift
//  Maskbook
//
//  Created by caiyu on 2022/8/4.
//  Copyright © 2022 dimension. All rights reserved.
//

import Foundation

struct NFTScanCollectionDataModel: Codable, Hashable {
    let total: Int
    let next: String?
    let content: [NFTScanCollectionModel]

    enum CodingKeys: String, CodingKey {
        case total
        case next
        case content
    }
}

struct NFTScanCollectionModel: Codable, Hashable {
    let name: String
    let contractAddress: String
    let symbol: String
    let description: String
    let website: String
    let logoURL: String
    let floorPrice: String

    enum CodingKeys: String, CodingKey {
        case name
        case contractAddress = "contract_address"
        case symbol
        case description
        case website
        case logoURL = "logo_url"
        case floorPrice = "floor_price"
    }
}
