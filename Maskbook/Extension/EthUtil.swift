//
//  EthUtil.swift
//  Maskbook
//
//  Created by BradGao on 2021/6/20.
//  Copyright © 2021 dimension. All rights reserved.
//

import BigInt
import CoreDataStack
import Foundation
import web3swift

// swiftlint:disable force_cast line_length type_body_length file_length

enum EthUtil {
    static func calcAmount(amount: Decimal, decimals: Int) -> NSDecimalNumber {
        let quantityInt = NSDecimalNumber(decimal: amount).dividing(by: NSDecimalNumber(mantissa: 1, exponent: Int16(decimals), isNegative: false))
        let roundBehavior = NSDecimalNumberHandler(roundingMode: .plain, scale: 6, raiseOnExactness: false, raiseOnOverflow: false, raiseOnUnderflow: false, raiseOnDivideByZero: false)
        return quantityInt.rounding(accordingToBehavior: roundBehavior)
    }
    
    static func calcBalance(amount: Decimal, decimals: Int, price: Decimal) -> NSDecimalNumber {
        let amountDecimal = NSDecimalNumber(decimal: amount).dividing(by: NSDecimalNumber(mantissa: 1, exponent: Int16(decimals), isNegative: false))
        let priceDecimal = NSDecimalNumber(decimal: price)
        let balance = amountDecimal.multiplying(by: priceDecimal)
        let roundBehavior = NSDecimalNumberHandler(roundingMode: .plain, scale: 2, raiseOnExactness: false, raiseOnOverflow: false, raiseOnUnderflow: false, raiseOnDivideByZero: false)
        return balance.rounding(accordingToBehavior: roundBehavior)
    }
    
    static func getGasFeeFiat(gwei: String, gasLimit: String, price: Double) -> String {
        guard let gweiBigUInt = Web3.Utils.parseToBigUInt(gwei, units: .Gwei) else { return "" }
        guard let gasLimitBigUInt = BigUInt(gasLimit) else { return "" }
        let priceBigUInt = BigUInt(price)
        let gasFee = (gweiBigUInt * gasLimitBigUInt) * priceBigUInt
        guard let balString = Web3.Utils.formatToEthereumUnits(gasFee, toUnits: .eth, decimals: 2) else { return "" }
        return balString
    }
    
    static func getGasFeeToken(gwei: String, gasLimit: String) -> String {
        guard let gweiBigUInt = Web3.Utils.parseToBigUInt(gwei, units: .Gwei) else { return "" }
        guard let gasLimitBigUInt = BigUInt(gasLimit) else { return "" }
        let gasFee = (gweiBigUInt * gasLimitBigUInt) 
        guard let balString = Web3.Utils.formatToEthereumUnits(gasFee, toUnits: .eth, decimals: 6) else { return "" }
        return balString
    }
    
    static func getGasFee(gwei: BigUInt, gasLimit: BigUInt, price: Double) -> String {
        let priceBigUInt = BigUInt(price)
        let gwei = gwei
        let gasFee = ( gwei * gasLimit) * priceBigUInt
        guard let balString = Web3.Utils.formatToEthereumUnits(gasFee, toUnits: .eth, decimals: 2) else { return "" }
        return balString
    }
    
    static func calculateTokenPrice(amount: String, tokenName: String? = nil) -> String {
        var token: Token?
        // only show eth now
        token = WalletAssetManager.shared.getDefaultMainToken()
        let amountDecimal = NSDecimalNumber(string: amount)
        let balance = amountDecimal.multiplying(by: token?.price ?? NSDecimalNumber.zero)
        let roundBehavior = NSDecimalNumberHandler(roundingMode: .plain, scale: 2, raiseOnExactness: false, raiseOnOverflow: false, raiseOnUnderflow: false, raiseOnDivideByZero: false)
        return balance.rounding(accordingToBehavior: roundBehavior).stringValue
    }
}
