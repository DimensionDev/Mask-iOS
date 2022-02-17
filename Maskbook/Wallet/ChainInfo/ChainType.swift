//
//  ChainType.swift
//  Maskbook
//
//  Created by BradGao on 2021/5/26.
//  Copyright © 2021 dimension. All rights reserved.
//

import Foundation

enum ChainType: Int, Codable {
    case ethereum = 60
    case polkadot = 354

    var onEth: Bool {
        self == .ethereum
    }
}

extension ChainType {
    func getDerivationPath(index: UInt32) -> DerivationPath? {
        switch self {
        case .ethereum:
            return DerivationPath(purpose: 44, coin: 60, account: 0, change: 0, address: index)

        case .polkadot:
            return nil
        }
    }
}
