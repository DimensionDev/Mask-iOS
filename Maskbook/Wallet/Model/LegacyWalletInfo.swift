//
//  LegacyWalletInfo.swift
//  Maskbook
//
//  Created by BradGao on 2021/11/12.
//  Copyright © 2021 dimension. All rights reserved.
//

import Foundation
import SwiftyJSON

struct LegacyWalletInfo {
    let address: String
    let name: String?
    let path: String?
    let mnemonic: [String]
    let passphrase: String
    let private_key: String?
    
    init?(fromJson json: JSON?) {
        guard let json = json else { return nil }
        if json.isEmpty {
            return nil
        }
        
        address = json["address"].stringValue
        name = json["name"].string
        path = json["path"].string
        mnemonic = json["mnemonic"].arrayValue.map { $0.stringValue }
        passphrase = json["passphrase"].stringValue
        private_key = json["private_key"].string
    }
    
    static func legacyWallets(fromJson json: JSON) -> [LegacyWalletInfo] {
        if !json.arrayValue.isEmpty {
            return json.arrayValue.compactMap { LegacyWalletInfo(fromJson: $0) }
        } else {
            return []
        }
    }
}
