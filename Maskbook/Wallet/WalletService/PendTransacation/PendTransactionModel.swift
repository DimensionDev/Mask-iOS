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

struct PendTransactionModel {
    var address: String
    var networkId: Int64
    var transactionReceipt: TransactionReceipt?
    var txHash: String
    var history: TransactionHistory
    var transactionInfo: TranscationInfo?
    var nonce: BigUInt
    
    public struct TranscationInfo {
        var gaslimit: BigUInt?
        var gasPrice: BigUInt?
        var amount: String
        var toAddress: String
        var gasNetModel: GasFeeCellItem?
        var token: Token
    }
    
}


