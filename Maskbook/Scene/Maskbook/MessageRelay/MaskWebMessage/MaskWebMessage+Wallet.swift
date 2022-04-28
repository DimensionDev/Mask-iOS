//
//  MaskWebMessage+Wallet.swift
//  Maskbook
//
//  Created by BradGao on 2021/8/23.
//  Copyright © 2021 dimension. All rights reserved.
//

import Foundation
import WebExtension_Shim_Swift

extension WebExtension.Wallet {
    struct UpdateEthereumAccount: MWEMessage {
        static let method: String = "wallet_updateEthereumAccount"
        struct Payload: Codable {
            let account: String?
        }
        var payload: Payload?
    }
    
    struct UpdateEthereumChainId: MWEMessage {
        static let method: String = "wallet_updateEthereumChainId"
        struct Payload: Codable {
            let chainId: UInt64?
        }
        var payload: Payload?
    }
    
    struct GetLegacyWallets: MWEMessage {
        static let method: String = "wallet_getLegacyWalletInfo"
        typealias Payload = String
        init(payload: String? = nil) {}
    }
}
