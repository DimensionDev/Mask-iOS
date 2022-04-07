//
//  PendTransactionModel.swift
//  Maskbook
//
//  Created by caiyu on 2022/4/7.
//  Copyright © 2022 dimension. All rights reserved.
//

import Foundation
import web3swift

struct PendTransactionModel {
    var address: String
    var networkId: Int64
    var transactionReceipt: TransactionReceipt?
    var txHash: String
}
