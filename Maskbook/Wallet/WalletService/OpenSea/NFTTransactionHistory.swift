//
//  NFTTransactionHistory.swift
//  Maskbook
//
//  Created by caiyu on 2021/8/24.
//  Copyright © 2021 dimension. All rights reserved.
//

import Foundation


public struct NFTTransactionHistory: Hashable {

    public enum TransactionType: String, Decodable {
        case send, receive, mint, approve, unknown
    }
    
    var type: TransactionType
    let minedDate: Date
    let txHash: String
}

