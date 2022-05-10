//
//  NSDecimalNumber+BalancePrecision.swift
//  Maskbook
//
//  Created by Hugo L on 2022/5/10.
//  Copyright © 2022 dimension. All rights reserved.
//

import Foundation

extension NSDecimalNumber {
    var displayBalance: String {
        guard self != .notANumber && self != .zero else {
            return "0.00"
        }
        guard doubleValue >= 0.001 else {
            return "< 0.001"
        }
        let roundBehavior = NSDecimalNumberHandler(
            roundingMode: .down,
            scale: 3,
            raiseOnExactness: false,
            raiseOnOverflow: false,
            raiseOnUnderflow: false,
            raiseOnDivideByZero: false
        )
        let result = rounding(accordingToBehavior: roundBehavior)
        let threeDecimalPlaces = String(format: "%.03f", result.doubleValue)
        if threeDecimalPlaces.hasSuffix("0") && (threeDecimalPlaces.count - 1) > 0 {
            return threeDecimalPlaces[0..<threeDecimalPlaces.count - 1];
        }
        return threeDecimalPlaces
    }
}
