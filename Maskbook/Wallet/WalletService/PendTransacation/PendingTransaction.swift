//
//  PendTransactionModel.swift
//  Maskbook
//
//  Created by caiyu on 2022/4/7.
//  Copyright © 2022 dimension. All rights reserved.
//

import Foundation
import web3swift
import BigInt
import CoreDataStack

struct PendingTransaction {
    var address: String
    var network: BlockChainNetwork
    var transactionReceipt: TransactionReceipt?
    var txHash: String
    var history: TransactionHistory?
    var transactionInfo: TranscationInfo?
    var nonce: BigUInt
    
    public struct TranscationInfo {
        var gaslimit: BigUInt?
        var gasPrice: BigUInt?
        var amount: String
        var toAddress: String
        var gasNetModel: GasFeeCellItem?
        var token: Token?
        var nftTokenAddr: EthereumAddress?
        var erc721TokenIDs: [BigUInt]?
    }
}

extension PendingTransaction {
    var isNFTRedPacket: Bool {
        transactionInfo?.nftTokenAddr != nil
    }
}

