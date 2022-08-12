//
//  NftRedPacketSubgraphInMask.swift
//  Maskbook
//
//  Created by xiaojian sun on 2022/8/4.
//  Copyright © 2022 dimension. All rights reserved.
//

import BigInt
import Foundation
import web3swift

struct NftRedPacketSubgraph: Codable {
    struct NFTUser: Codable {
        let address: String
        let name: String
    }

    struct NFTToken: Codable {
        let address: String
        let name: String
        let symbol: String
        let chain_id: Int64
    }

    let rpid: String
    let txid: String
    let contractAddress: String
    let contractVersion: Int
    let password: String
    let shares: Int
    let message: String
    let name: String
    let total: String
    let creationTime: TimeInterval
    let duration: TimeInterval
    let chainId: Int64
    let token: NFTToken
    let tokenContract: NFTToken
    let tokenIds: [String]
    let creator: NFTUser
    let claimers: [NFTUser]

    enum CodingKeys: String, CodingKey {
        case rpid
        case txid
        case contractAddress = "contract_address"
        case contractVersion = "contract_version"
        case password
        case shares
        case message
        case name
        case total
        case creationTime = "creation_time"
        case duration
        case chainId = "chain_id"
        case token
        case tokenContract = "token_contract"
        case tokenIds = "token_ids"
        case creator
        case claimers
    }
}

extension NftRedPacketSubgraph: Identifiable {
    var id: String {
        rpid
    }
}
