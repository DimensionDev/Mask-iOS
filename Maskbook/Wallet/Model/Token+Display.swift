//
//  Token+Display.swift
//  Maskbook
//
//  Created by BradGao on 2021/6/10.
//  Copyright © 2021 dimension. All rights reserved.
//

import BigInt
import CoreDataStack
import Foundation

public enum TokenType: String {
    case compound
    case eth
    case nft
    case token
    case trash
    case uniswap
    case uniswapV2 = "uniswap-v2"
}

extension Token {
    var quantityNumber: NSDecimalNumber {
        guard let quantityValue = quantity else { return NSDecimalNumber.zero }
        return quantityValue.dividing(by: NSDecimalNumber(mantissa: 1, exponent: decimal, isNegative: false))
    }
    
    var displayQuantity: NSDecimalNumber {
        guard let quantityValue = quantity else { return NSDecimalNumber.zero }
        let quantityInt = quantityValue.dividing(by: NSDecimalNumber(mantissa: 1, exponent: decimal, isNegative: false))
        let roundBehavior = NSDecimalNumberHandler(roundingMode: .plain, scale: 6, raiseOnExactness: false, raiseOnOverflow: false, raiseOnUnderflow: false, raiseOnDivideByZero: false)
        return quantityInt.rounding(accordingToBehavior: roundBehavior)
    }
    
    var displayBalance: NSDecimalNumber {
        guard let quantityValue = quantity, let priceValue = price else { return NSDecimalNumber.zero }
        let quantityInt = quantityValue.dividing(by: NSDecimalNumber(mantissa: 1, exponent: decimal, isNegative: false))
        let balance = quantityInt.multiplying(by: priceValue)
        let roundBehavior = NSDecimalNumberHandler(roundingMode: .plain, scale: 2, raiseOnExactness: false, raiseOnOverflow: false, raiseOnUnderflow: false, raiseOnDivideByZero: false)
        return balance.rounding(accordingToBehavior: roundBehavior)
    }
    
    func calculateAmountValue(quantity: String) -> String {
        guard let priceValue = price else { return NSDecimalNumber.zero.stringValue }
        let quantityInt = NSDecimalNumber(string: quantity)
        let balance = quantityInt.multiplying(by: priceValue)
        let roundBehavior = NSDecimalNumberHandler(roundingMode: .plain, scale: 2, raiseOnExactness: false, raiseOnOverflow: false, raiseOnUnderflow: false, raiseOnDivideByZero: false)
        return balance.rounding(accordingToBehavior: roundBehavior).stringValue
    }
}

extension Token {
    var isMainToken: Bool {
        guard let chain = ChainType(rawValue: Int(chainId)) else { return false }
        switch chain {
        case .ethereum:
            return BlockChainNetwork(chain: chain, networkId: UInt64(networkId)).mainToken?.symbol(match: symbol ?? "") ?? false

        case .polkadot:
            return false
        }
    }
}
