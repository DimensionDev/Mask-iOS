//
//  TransactionHistory.swift
//  Maskbook
//
//  Created by BradGao on 2021/7/6.
//  Copyright © 2021 dimension. All rights reserved.
//

import Foundation

public struct TransactionHistory: Hashable {
    public static func == (lhs: TransactionHistory, rhs: TransactionHistory) -> Bool {
        return lhs.id == rhs.id
    }
    
    public func hash(into hasher: inout Hasher) {
        hasher.combine(id)
    }
    
    public enum TransactionType: String, Decodable {
        case send, receive, trade, approve, execution, deployment, cancel,
             deposit, withdraw, borrow, repay, stake, unstake, claim, unknown, swap, contractInteraction, transfer
    }
    
    public enum TransactionStatus: String, Decodable {
        case confirmed, failed, pending
    }
    
    public struct Asset: Decodable {
        let assetCode: String
        let decimals: Int
        let iconUrl: URL?
        let price: Decimal
        let isDisplayable: Bool
        let isVerified: Bool
        let name: String?
        let symbol: String
        let type: String?
    }
    
    public struct TransactionChange: Decodable {
        let asset: Asset
        let value: Decimal
        let address_from: String
        let address_to: String
        let price: Decimal?
    }
    
    var type: TransactionType
    let status: TransactionStatus
    let id: String
    let gasFee: Decimal?
    let gasPrice: Decimal?
    let timeAt: TimeInterval
    let change: TransactionChange?
    let name: String?
    
    var minedDate: Date {
        return Date(timeIntervalSince1970: TimeInterval(timeAt))
    }
}
