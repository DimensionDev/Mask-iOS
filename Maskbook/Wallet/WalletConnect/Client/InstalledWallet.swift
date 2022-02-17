//
//  InstalledWallet.swift
//  Maskbook
//
//  Created by xiaojian sun on 2021/9/22.
//  Copyright © 2021 dimension. All rights reserved.
//

import Foundation
import UIKit

struct WalletEntry: Codable {
    struct App: Codable {
        let ios: String?
    }

    struct Mobile: Codable {
        let native: String
        let universal: String
    }
    
    struct Metadata: Codable {
        let shortName: String
    }

    let id: String
    let name: String
    let chains: [String]
    let app: App
    let mobile: Mobile
    let metadata: Metadata?
}

extension WalletEntry {
    var imageURL: String {
        return WalletConnectClient.iconURLForWallet(id: id)
    }
}

struct InstalledWallet: Codable {
    let name: String
    let shortName: String
    let imageURL: String
    let scheme: String
    let universalLink: String
    let networkIDs: [UInt64]

    init?(walletEntry: WalletEntry) {
        let scheme = walletEntry.mobile.native
        var universalLink = walletEntry.mobile.universal
        if universalLink.last == "/" {
            universalLink = String(universalLink.dropLast())
        }

        guard let schemeUrl = URL(string: scheme), UIApplication.shared.canOpenURL(schemeUrl) else { return nil }

        self.name = walletEntry.name
        self.shortName = walletEntry.metadata?.shortName ?? ""
        self.imageURL = walletEntry.imageURL
        self.scheme = scheme
        self.universalLink = universalLink
        self.networkIDs = walletEntry.chains.compactMap { chainString in
            if let chainsuffix = chainString.components(separatedBy: ":").last, let networkID = UInt64(chainsuffix) {
                return networkID
            } else {
                return nil
            }
        }
    }
}
