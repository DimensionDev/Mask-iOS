//
//  WalletConnectClient+Supported.swift
//  Maskbook
//
//  Created by xiaojian sun on 2021/9/22.
//  Copyright © 2021 dimension. All rights reserved.
//

import Combine
import Foundation
import WalletConnectSwift

extension WalletConnectClient {
    private static func walletEntries() -> [WalletEntry] {
        Bundle.main.url(forResource: "wallets", withExtension: "json")
            .flatMap { try? Data(contentsOf: $0) }
            .flatMap { try? JSONSerialization.jsonObject(with: $0, options: []) as? [String: Any] }
            .flatMap { Array($0.values) }
            .flatMap { try? JSONSerialization.data(withJSONObject: $0, options: []) }
            .flatMap { try? JSONDecoder().decode([WalletEntry].self, from: $0) } ?? []
    }

    static func supportedWallets() -> [InstalledWallet] {
        let walletEntries = WalletConnectClient.walletEntries()
        return walletEntries.compactMap { InstalledWallet(walletEntry: $0) }
    }

    static func walletEntryWithName(name: String) -> WalletEntry? {
        let walletEntry = WalletConnectClient.walletEntries()
            .first(where: {
                $0.name == name || $0.metadata?.shortName == name || name.hasSuffix($0.name)
            })
        return walletEntry
    }

    static func openWalletIfInstalled(installedWallet: InstalledWallet) {
        if installedWallet.name == "Rainbow" {
            UIApplication.shared.open(URL(string: installedWallet.scheme)!)
            return
        }
        if !installedWallet.universalLink.isEmpty {
            // MetaMask shows error alert if nothing is provided to the link
            // https://github.com/MetaMask/metamask-mobile/blob/194a1858b96b1f88762f8679380b09dda3c8b29e/app/core/DeeplinkManager.js#L89
            UIApplication.shared.open(URL(string: installedWallet.universalLink.appending("/focus"))!)
        } else {
            UIApplication.shared.open(URL(string: installedWallet.scheme)!)
        }
    }

    static func openInstalledWallet(from session: Session?) {
        let name = session?.walletInfo?.peerMeta.name
        guard let name = name else { return }
        guard let walletEntry = WalletConnectClient.walletEntryWithName(name: name) else { return }
        let wallet = InstalledWallet(walletEntry: walletEntry)
        wallet.flatMap {
            Self.openWalletIfInstalled(installedWallet: $0)
        }
    }

    static func openInstalledWallet(with address: String) {
        DispatchQueue.main.async {
            let account = WalletCoreService.shared.getAccount(address: address)
            guard let session = account?.session else {
                return
            }
            WalletConnectClient.openInstalledWallet(from: session)
        }
    }

    static func chainListPublisher() -> AnyPublisher<[WalletConnectClient.ChainInfo], Error> {
        let session = URLSession(configuration: .default)
        let decoder = JSONDecoder()
        let request = URLRequest(url: chainListURL)
        let walletPublisher =
            session.dataTaskPublisher(for: request)
                .tryMap { element -> Data in
                    guard let httpResponse = element.response as? HTTPURLResponse,
                          httpResponse.statusCode == 200
                    else {
                        throw URLError(.badServerResponse)
                    }
                    return element.data
                }
                .decode(type: [WalletConnectClient.ChainInfo].self, decoder: decoder)
                .eraseToAnyPublisher()
        return walletPublisher
    }
}
