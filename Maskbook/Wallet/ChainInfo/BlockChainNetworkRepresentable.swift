//
//  BlockChainNetworkRepresentable.swift
//  Maskbook
//
//  Created by yzj on 2021/7/28.
//  Copyright © 2021 dimension. All rights reserved.
//

import Foundation
import MaskWalletCore

protocol BlockChainNetworkRepresentable: Hashable, RawRepresentable {
    var chain: ChainType { get }
    var networkId: UInt64 { get }
    var mainToken: MaskToken? { get }
    var shortName: String { get }
    var name: String { get }

    var debankName: String? { get }
    var coin: Api_Coin { get }

    init(chain: ChainType, networkId: UInt64)

    func getDerivationPath(index: UInt32) -> DerivationPath?
    func getScanUrl(hash: String) -> URL?
}

extension BlockChainNetworkRepresentable {
    var rawValue: String {
        "\(chain.rawValue)_\(networkId)"
    }

    init?(rawValue: String) {
        let networkParts = rawValue.components(separatedBy: "_")
        guard networkParts.count >= 2 else {
            return nil
        }

        guard let chaindId = Int(networkParts[0]),
              let chainType = ChainType(rawValue: chaindId),
              let networkId = UInt64(networkParts[1]) else {
            return nil
        }

        self.init(chain: chainType, networkId: networkId)
    }
}
