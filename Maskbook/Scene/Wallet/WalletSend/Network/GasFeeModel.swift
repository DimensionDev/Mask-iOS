//
//  GasFeeModel.swift
//  Maskbook
//
//  Created by caiyu on 2021/8/25.
//  Copyright © 2021 dimension. All rights reserved.
//

import Foundation
// swiftlint:disable type_body_length file_length force_cast
struct GasFeeModel: Codable, Hashable {
    let low: GasFeeDetail
    let medium: GasFeeDetail
    let high: GasFeeDetail
    let estimatedBaseFee: String

    enum CodingKeys: String, CodingKey {
        case estimatedBaseFee, low, medium, high
    }
    
    init(maticModel: GasFeeMaticModel) {
        low = GasFeeDetail(suggestedMaxPriorityFeePerGas: String(maticModel.safeLow), suggestedMaxFeePerGas: "0", minWaitTimeEstimate: 0, maxWaitTimeEstimate: 0)
        medium = GasFeeDetail(suggestedMaxPriorityFeePerGas: String(maticModel.standard), suggestedMaxFeePerGas: "0", minWaitTimeEstimate: 0, maxWaitTimeEstimate: 0)
        high = GasFeeDetail(suggestedMaxPriorityFeePerGas: String(maticModel.fast), suggestedMaxFeePerGas: "0", minWaitTimeEstimate: 0, maxWaitTimeEstimate: 0)
        estimatedBaseFee = "0"
    }
    
    init(baseGasFee: String) {
        low = GasFeeDetail(suggestedMaxPriorityFeePerGas: String(Float(baseGasFee)! - 0.1), suggestedMaxFeePerGas: "0", minWaitTimeEstimate: 0, maxWaitTimeEstimate: 0)
        medium = GasFeeDetail(suggestedMaxPriorityFeePerGas: baseGasFee, suggestedMaxFeePerGas: "0", minWaitTimeEstimate: 0, maxWaitTimeEstimate: 0)
        high = GasFeeDetail(suggestedMaxPriorityFeePerGas: String(Float(baseGasFee)! + 0.1), suggestedMaxFeePerGas: "0", minWaitTimeEstimate: 0, maxWaitTimeEstimate: 0)
        estimatedBaseFee = "0"
    }
}

struct GasFeeMaticModel: Codable, Hashable {
    let safeLow: Float
    let standard: Float
    let fast: Float
    let fastest: Float

    enum CodingKeys: String, CodingKey {
        case safeLow, standard, fast, fastest
    }
}

struct GasFeeDetail: Codable, Hashable {
    let suggestedMaxPriorityFeePerGas: String
    let suggestedMaxFeePerGas: String
    let minWaitTimeEstimate: Int
    let maxWaitTimeEstimate: Int
    
    enum CodingKeys: String, CodingKey {
        case suggestedMaxPriorityFeePerGas, suggestedMaxFeePerGas, minWaitTimeEstimate, maxWaitTimeEstimate
    }
}

struct GasFeeCellItem: Hashable {
    enum ItemType: String {
        case low
        case medium
        case high
        case custom
    }
    
    var suggestedMaxPriorityFeePerGas: String {
        didSet {
            if NSDecimalNumber(string: suggestedMaxPriorityFeePerGas) != NSDecimalNumber.notANumber {
                let gwei = NSDecimalNumber(string: estimatedBaseFee).adding(NSDecimalNumber(string: suggestedMaxPriorityFeePerGas))
                let roundBehavior = NSDecimalNumberHandler(roundingMode: .plain, scale: 0, raiseOnExactness: false, raiseOnOverflow: false, raiseOnUnderflow: false, raiseOnDivideByZero: false)
                self.gWei = gwei.rounding(accordingToBehavior: roundBehavior).stringValue
            }
        }
    }
    var suggestedMaxFeePerGas: String {
        didSet {
            if NSDecimalNumber(string: suggestedMaxPriorityFeePerGas) != NSDecimalNumber.notANumber {
                let gwei = NSDecimalNumber(string: estimatedBaseFee).adding(NSDecimalNumber(string: suggestedMaxPriorityFeePerGas))
                let roundBehavior = NSDecimalNumberHandler(roundingMode: .plain, scale: 0, raiseOnExactness: false, raiseOnOverflow: false, raiseOnUnderflow: false, raiseOnDivideByZero: false)
                self.gWei = gwei.rounding(accordingToBehavior: roundBehavior).stringValue
            }
        }
    }
    var estimatedBaseFee: String
    var type: ItemType
    var gWei: String
    var gasLimit: String
    var costTime: String
    
    init(gasFeeModel: GasFeeModel,
         type: ItemType) {
        switch type {
        case .low:
                self.suggestedMaxFeePerGas = gasFeeModel.low.suggestedMaxFeePerGas
                self.suggestedMaxPriorityFeePerGas = gasFeeModel.low.suggestedMaxPriorityFeePerGas
                self.costTime = L10n.Scene.Sendtransaction.Sendconfirmpop.gasfeelow

        case .medium:
                self.suggestedMaxFeePerGas = gasFeeModel.medium.suggestedMaxFeePerGas
                self.suggestedMaxPriorityFeePerGas = gasFeeModel.medium.suggestedMaxPriorityFeePerGas
                self.costTime = L10n.Scene.Sendtransaction.Sendconfirmpop.gasfeemedium

        case .high:
                self.suggestedMaxFeePerGas = gasFeeModel.high.suggestedMaxFeePerGas
                self.suggestedMaxPriorityFeePerGas = gasFeeModel.high.suggestedMaxPriorityFeePerGas
                self.costTime = L10n.Scene.Sendtransaction.Sendconfirmpop.gasfeehigh

        default:
                self.suggestedMaxFeePerGas = gasFeeModel.medium.suggestedMaxFeePerGas
                self.suggestedMaxPriorityFeePerGas = gasFeeModel.medium.suggestedMaxPriorityFeePerGas
                self.costTime = L10n.Scene.Sendtransaction.Sendconfirmpop.gasfeemedium
        }
        self.estimatedBaseFee = gasFeeModel.estimatedBaseFee
        let gwei = NSDecimalNumber(string: estimatedBaseFee).adding(NSDecimalNumber(string: suggestedMaxPriorityFeePerGas))
        let roundBehavior = NSDecimalNumberHandler(roundingMode: .plain, scale: 0, raiseOnExactness: false, raiseOnOverflow: false, raiseOnUnderflow: false, raiseOnDivideByZero: false)
        self.gWei = gwei.rounding(accordingToBehavior: roundBehavior).stringValue
        self.gasLimit = "21000"
        self.type = type
    }
}
