//
//  ChainInfo.swift
//  Maskbook
//
//  Created by sxiaojian on 2021/11/11.
//  Copyright © 2021 dimension. All rights reserved.
//

import Foundation
extension WalletConnectClient {
    struct ChainInfo: Codable {
        let networkId: UInt64
        let name: String
        let chain: String
    }
}
