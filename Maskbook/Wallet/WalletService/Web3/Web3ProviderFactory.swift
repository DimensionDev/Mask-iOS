//
//  Web3ProviderFactory.swift
//  Maskbook
//
//  Created by BradGao on 2021/9/10.
//  Copyright © 2021 dimension. All rights reserved.
//

import BigInt
import Foundation
import web3swift

enum Web3ProviderFactory {
    fileprivate static let rpcUrlDict: [BlockChainNetwork: String] = [
        .bsc: "https://bsc-dataseed.binance.org/",
        .polygon: "https://polygon-rpc.com/",
        .arbitrum: "https://arb1.arbitrum.io/rpc",
        .xdai: "https://rpc.xdaichain.com"
    ]
    
    static var provider: web3? { maskUserDefaults.network.w3Provider }
}

extension BlockChainNetwork {
    var w3Provider: web3? {
        switch self {
        case .eth: return Web3.InfuraMainnetWeb3()

        default:
            guard let rpcUrlString = Web3ProviderFactory.rpcUrlDict[self],
                  let rpcUrl = URL(string: rpcUrlString),
                  let provider = Web3HttpProvider(
                    rpcUrl,
                    network: .Custom(networkID: BigUInt(networkId))
                  )
            else {
                return nil
            }
            return web3(provider: provider)
        }
    }
}
