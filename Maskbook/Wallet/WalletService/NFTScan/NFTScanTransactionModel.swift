//
//  NFTScanTransaction.swift
//  Maskbook
//
//  Created by caiyu on 2022/8/4.
//  Copyright © 2022 dimension. All rights reserved.
//

import Foundation

struct NFTScanTransactionDataModel: Codable, Hashable {
    let total: Int
    let next: String?
    let content: [NFTScanTransactionModel]

    enum CodingKeys: String, CodingKey {
        case total
        case next
        case content
    }
}

struct NFTScanTransactionModel: Codable, Hashable {
    let hash: String
    let contractAddress: String
    let tokenID: String
    let to: String
    let from: String
    let timestamp: Int
    let eventType: String
    let send: String
    let receive: String

    enum CodingKeys: String, CodingKey {
        case hash
        case contractAddress = "contract_address"
        case tokenID
        case to
        case from
        case timestamp
        case eventType = "event_type"
        case send
        case receive
    }
}
