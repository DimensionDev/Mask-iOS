//
//  NFTCollectionStatusModel.swift
//  Maskbook
//
//  Created by caiyu on 2022/1/13.
//  Copyright © 2022 dimension. All rights reserved.
//

import Foundation


struct NFTCollectionStatusModel: Codable, Hashable {
    let stats: StatusModel

    enum CodingKeys: String, CodingKey {
        case stats
    }
}

struct StatusModel: Codable, Hashable {
    let floorPrice: Double

    enum CodingKeys: String, CodingKey {
        case floorPrice = "floor_price"
    }
}
