//
//  WalletConnectEthereumTransaction.swift
//  Maskbook
//
//  Created by sxiaojian on 2021/12/13.
//  Copyright © 2021 dimension. All rights reserved.
//

import BigInt
import Foundation
import web3swift

struct WalletConnectEthereumTransaction: Codable {
    var nonce: UInt256String?
    var gas: UInt256String?
    var to: EthereumAddress
    var from: EthereumAddress
    var value: UInt256String?
    var data: DataString
}
