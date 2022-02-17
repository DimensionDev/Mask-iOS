//
//  Currency.swift
//  Maskbook
//
//  Created by BradGao on 2021/6/4.
//  Copyright © 2021 dimension. All rights reserved.
//

import Foundation

enum Currency: String {
    case eth, btc, usd, eur, krw, rub, gbp, aud, cad, inr, jpy, nzd, `try`, zar, cny, chf
    
    var symbol: String {
        switch self {
        case .eth:
            return "ETH"
        case .btc:
            return "BTC"
        case .usd:
            return "$"
        case .eur:
            return ""
        default:
            return self.rawValue
        }
    }
}
