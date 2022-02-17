//
//  NFTAssetEventsModel.swift
//  Maskbook
//
//  Created by caiyu on 2021/8/24.
//  Copyright © 2021 dimension. All rights reserved.
//

import Foundation

struct NFTAssetEventsModel: Codable, Hashable {
    let hash: String
    let contractAddress: String
    let tokenID: String
    let to: String
    let from: String
    let timeStamp: String

    enum CodingKeys: String, CodingKey {
        case hash
        case contractAddress
        case tokenID
        case to
        case from
        case timeStamp
    }
}
