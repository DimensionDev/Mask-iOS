//
//  MaskToken.swift
//  Maskbook
//
//  Created by sxiaojian on 2021/7/13.
//  Copyright © 2021 dimension. All rights reserved.
//

import Foundation

struct MaskToken: Codable {
    let coinId: Int64
    let chainId: Int64
    let decimals: Int
    let name: String
    let symbol: String
    let logoURI: URL?
    let address: String
}

extension MaskToken {
    var isMainToken: Bool {
        BlockChainNetwork(chain: .ethereum, networkId: UInt64(chainId)).mainToken?.symbol == symbol
    }

    func symbol(match symbol: String) -> Bool {
        self.symbol.order(match: symbol)
    }
}

extension MaskToken: Equatable {
    static func == (lhs: MaskToken, rhs: MaskToken) -> Bool {
        lhs.chainId == rhs.chainId &&
        lhs.decimals == rhs.decimals &&
        lhs.name == rhs.name &&
        lhs.symbol == rhs.symbol &&
        lhs.logoURI == rhs.logoURI &&
        lhs.address == rhs.address
    }
}

extension StringProtocol {
    func order<T: StringProtocol>(match aString: T) -> Bool {
        self.caseInsensitiveCompare(aString) == .orderedSame
    }

    func orderAscending<T: StringProtocol>(to aString: T) -> Bool {
        self.caseInsensitiveCompare(aString) == .orderedAscending
    }

    func orderDescending<T: StringProtocol>(to aString: T) -> Bool {
        self.caseInsensitiveCompare(aString) == .orderedDescending
    }
}
