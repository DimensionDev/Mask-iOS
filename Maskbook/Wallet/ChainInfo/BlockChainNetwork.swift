//
//  BlockChainNetwork.swift
//  Maskbook
//
//  Created by yzj on 2021/8/2.
//  Copyright © 2021 dimension. All rights reserved.
//

import Foundation
import MaskWalletCore
import SwiftUI

struct BlockChainNetwork: Codable {
    let networkId: UInt64
    var chain: ChainType

    init(chain: ChainType, networkId: UInt64) {
        self.networkId = networkId
        self.chain = chain
    }

    init?(chainId: Int, networkId: UInt64) {
        guard let chain = ChainType(rawValue: chainId) else {
            return nil
        }
        self.init(chain: chain, networkId: networkId)
    }

    static func `default`() -> Self { .eth }

    static func ~= (lhs: BlockChainNetwork, rhs: BlockChainNetwork?) -> Bool {
        guard let rhs = rhs else { return false }
        return lhs == rhs
    }
}

extension String {
    static var eth: String {
        "60_1"
    }

    static var bsc: String {
        "60_56"
    }

    static var rinkeby: String {
        "60_33"
    }

    static var polygon: String {
        "60_137"
    }

    static var arbitrum: String {
        "60_42161"
    }

    static var xdai: String {
        "60_100"
    }

    static var optimism: String {
        "60_10"
    }

    static var polkd: String {
        "354_1"
    }
}

extension BlockChainNetwork: BlockChainNetworkRepresentable {
    var shortName: String {
        switch self {
        case .eth: return L10n.Chain.ShortName.eth
        case .rinkeby: return L10n.Chain.ShortName.eth
        case .bsc: return L10n.Chain.ShortName.bsc
        case .polygon: return L10n.Chain.ShortName.polygon
        case .polka: return L10n.Chain.ShortName.dot
        case .arbitrum: return L10n.Chain.ShortName.arbitrum
        case .xdai: return L10n.Chain.ShortName.xdai
        case .optimism: return L10n.Chain.ShortName.optimism

        default:
            return ""
        }
    }

    var name: String {
        switch self {
        case .eth: return L10n.Chain.Name.eth
        case .rinkeby: return L10n.Chain.Name.eth + " Testnet Rinkeby"
        case .bsc: return L10n.Chain.Name.bsc
        case .polygon: return L10n.Chain.Name.polygon
        case .polka: return L10n.Chain.Name.dot
        case .arbitrum: return L10n.Chain.Name.arbitrum
        case .xdai: return L10n.Chain.ShortName.xdai
        case .optimism: return L10n.Chain.ShortName.optimism

        default:
            return ""
        }
    }

    var selectedIcon: UIImage? {
        switch self {
        case .eth: return Asset.Images.Scene.WalletList.Coins.ethSelected.image
        case .rinkeby: return Asset.Images.Scene.WalletList.Coins.ethSelected.image
        case .bsc: return Asset.Images.Scene.WalletList.Coins.bscSelected.image
        case .polygon: return Asset.Images.Scene.WalletList.Coins.polygonSelected.image
        case .polka: return nil
        case .arbitrum: return Asset.Images.Scene.WalletList.Coins.arbitrumSelected.image
        case .xdai: return Asset.Images.Scene.WalletList.Coins.xdaiSelected.image
        case .optimism: return Asset.Images.Scene.WalletList.Coins.optimismSelected.image

        default:
            return nil
        }
    }

    var selectedIconAsImage: SwiftUI.Image? {
        switch self {
        case .eth: return Asset.Images.Scene.WalletList.Coins.ethSelected.asImage()
        case .rinkeby: return Asset.Images.Scene.WalletList.Coins.ethSelected.asImage()
        case .bsc: return Asset.Images.Scene.WalletList.Coins.bscSelected.asImage()
        case .polygon: return Asset.Images.Scene.WalletList.Coins.polygonSelected.asImage()
        case .polka: return nil
        case .arbitrum: return Asset.Images.Scene.WalletList.Coins.arbitrumSelected.asImage()
        case .xdai: return Asset.Images.Scene.WalletList.Coins.xdaiSelected.asImage()
        case .optimism: return Asset.Images.Scene.WalletList.Coins.optimismSelected.asImage()

        default:
            return nil
        }
    }

    var unselectedIcon: UIImage? {
        switch self {
        case .eth: return Asset.Images.Scene.WalletList.Coins.ethUnselected.image
        case .rinkeby: return Asset.Images.Scene.WalletList.Coins.ethUnselected.image
        case .bsc: return Asset.Images.Scene.WalletList.Coins.bscUnselected.image
        case .polygon: return Asset.Images.Scene.WalletList.Coins.polygonUnselected.image
        case .polka: return nil
        case .arbitrum: return Asset.Images.Scene.WalletList.Coins.arbitrumUnselected.image
        case .xdai: return Asset.Images.Scene.WalletList.Coins.xdaiUnselected.image
        case .optimism: return Asset.Images.Scene.WalletList.Coins.optimismUnselected.image

        default:
            return nil
        }
    }

    var smallIcon: UIImage? {
        switch self {
        case .eth: return Asset.Images.Scene.Balance.SmallChain.eth.image
        case .bsc: return Asset.Images.Scene.Balance.SmallChain.bsc.image
        case .polygon: return Asset.Images.Scene.Balance.SmallChain.matic.image
        case .polka: return nil
        case .arbitrum: return Asset.Images.Scene.Balance.SmallChain.arbitrum.image
        case .xdai: return Asset.Images.Scene.Balance.SmallChain.xdai.image
        case .optimism: return nil

        default:
            return nil
        }
    }

    var tokenCardBgColor: UIColor? {
        switch self {
        case .eth:
            return Asset.Colors.TokenDetail.Chains.eth.color

        case .bsc:
            return Asset.Colors.TokenDetail.Chains.bsc.color

        case .polygon:
            return Asset.Colors.TokenDetail.Chains.matic.color

        case .arbitrum:
            return Asset.Colors.TokenDetail.Chains.arbitrum.color

        case .xdai:
            return Asset.Colors.TokenDetail.Chains.xdai.color

        case .optimism:
            return Asset.Colors.TokenDetail.Chains.optimism.color

        case .polka:
            return nil

        default:
            return nil
        }
    }

    var mainToken: MaskToken? {
        let coinId = Int64(chain.rawValue)
        let id = networkId

        switch self {
        case .eth, .rinkeby:
            return MaskToken(coinId: coinId,
                             chainId: Int64(id),
                             decimals: 18,
                             name: "Ethereum",
                             symbol: "ETH",
                             logoURI: nil,
                             address: "")

        case .bsc:
            return MaskToken(coinId: coinId,
                             chainId: Int64(id),
                             decimals: 18,
                             name: "Binance Coin",
                             symbol: "BNB",
                             logoURI: nil,
                             address: "")

        case .polygon:
            return MaskToken(coinId: coinId,
                             chainId: Int64(id),
                             decimals: 18,
                             name: "Matic Network Token",
                             symbol: "MATIC",
                             logoURI: nil,
                             address: "")

        case .arbitrum:
            return MaskToken(coinId: coinId,
                             chainId: Int64(id),
                             decimals: 18,
                             name: "ETH",
                             symbol: "ETH",
                             logoURI: nil,
                             address: "")

        case .xdai:
            return MaskToken(coinId: coinId,
                             chainId: Int64(id),
                             decimals: 18,
                             name: "xDai",
                             symbol: "xDai",
                             logoURI: nil,
                             address: "")

        case .polka: return nil
        default: return nil
        }
    }

    var debankName: String? {
        switch rawValue {
        case .eth: return "eth"
        case .bsc: return "bsc"
        case .polygon: return "matic"
        case .arbitrum: return "arb"
        case .xdai: return "xdai"
        case .optimism: return "op"
        default: return nil
        }
    }

    var fullEvmName: String? {
        switch rawValue {
        case .eth: return "Ethereum Mainnet"
        case .bsc: return "BNB Chain Mainnet"
        case .polygon: return "Matic Mainnet"
        case .arbitrum: return "Arbitrum One"
        case .xdai: return "Gnosis Chain"
        case .optimism: return "Optimistic Ethereum"
        case .rinkeby: return "Ethereum Testnet Rinkeby"
        default: return nil
        }
    }

    var coin: Api_Coin {
        if chain.onEth {
            return .ethereum
        }

        return .UNRECOGNIZED(-1)
    }

    var isSupport1559GasFee: Bool {
        switch self {
        case .eth, .polygon: return true
        default: return false
        }
    }

    func getScanUrl(hash: String) -> URL? {
        switch self {
        case .eth, .rinkeby: return URL(string: "https://etherscan.io/tx/\(hash)")
        case .bsc: return URL(string: "https://bscscan.com/tx/\(hash)")
        case .polygon: return URL(string: "https://polygonscan.com/tx/\(hash)")
        case .arbitrum: return URL(string: "https://arbiscan.io/tx/\(hash)")
        case .xdai: return URL(string: "https://blockscout.com/xdai/mainnet/tx/\(hash)")
        case .optimism: return URL(string: "https://optimistic.etherscan.io/tx/\(hash)")
        case .polka: return nil
        default: return nil
        }
    }

    func getNFTScanUrl() -> URL? {
        switch self {
        case .eth, .rinkeby: return URL(string: "https://restapi.nftscan.com/api/v2/")
        case .bsc: return URL(string: "https://bnbapi.nftscan.com/api/v2/")
        case .polygon: return URL(string: "https://polygonapi.nftscan.com/api/v2/")
        case .arbitrum: return URL(string: "https://arbitrumapi.nftscan.com/api/v2/")
        case .xdai: return URL(string: "https://restapi.nftscan.com/api/v2/")
        case .optimism: return URL(string: "https://optimismapi.nftscan.com/api/v2/")
        case .polka: return URL(string: "https://restapi.nftscan.com/api/v2/")
        default: return URL(string: "https://restapi.nftscan.com/api/v2/")
        }
    }

    func getAddressUrl(address: String) -> URL? {
        switch self {
        case .eth, .rinkeby: return URL(string: "https://etherscan.io/address/\(address)")
        case .bsc: return URL(string: "https://bscscan.com/address/\(address)")
        case .polygon: return URL(string: "https://polygonscan.com/address/\(address)")
        case .arbitrum: return URL(string: "https://arbiscan.io/address/\(address)")
        case .xdai: return URL(string: "https://blockscout.com/xdai/mainnet/address/\(address)")
        case .optimism: return URL(string: "https://optimistic.etherscan.io/address/\(address)")
        case .polka: return nil
        default: return nil
        }
    }

    func getDerivationPath(index: UInt32) -> DerivationPath? {
        switch chain {
        case .ethereum: return DerivationPath(purpose: 44, coin: 60, account: 0, change: 0, address: index)
        case .polkadot: return nil
        }
    }
}

extension BlockChainNetwork: CaseIterable {
    static var allCases: [BlockChainNetwork] {
        [.eth, .rinkeby, .bsc, .polygon, .arbitrum, .xdai, .polka]
    }

    static var supportedNetwork: [BlockChainNetwork] {
        [.eth, .bsc, .polygon, .arbitrum, .xdai]
    }

    static var eth: BlockChainNetwork {
        BlockChainNetwork(chain: .ethereum, networkId: 1)
    }

    static var rinkeby: BlockChainNetwork {
        BlockChainNetwork(chain: .ethereum, networkId: 33)
    }

    static var bsc: BlockChainNetwork {
        BlockChainNetwork(chain: .ethereum, networkId: 56)
    }

    static var polygon: BlockChainNetwork {
        BlockChainNetwork(chain: .ethereum, networkId: 137)
    }

    static var arbitrum: BlockChainNetwork {
        BlockChainNetwork(chain: .ethereum, networkId: 42_161)
    }

    static var xdai: BlockChainNetwork {
        BlockChainNetwork(chain: .ethereum, networkId: 100)
    }

    static var optimism: BlockChainNetwork {
        BlockChainNetwork(chain: .ethereum, networkId: 10)
    }

    static var polka: BlockChainNetwork {
        BlockChainNetwork(chain: .polkadot, networkId: 1)
    }
}
