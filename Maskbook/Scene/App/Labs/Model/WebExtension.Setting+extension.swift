//
//  File.swift
//  Maskbook
//
//  Created by yzj on 2021/8/14.
//  Copyright © 2021 dimension. All rights reserved.
//

import Foundation
import WebExtension_Shim

protocol PluginSelecteableItem {
    var icon: String { get }
    var title: String { get }
}

extension WebExtension.Setting.TradeProvider: PluginSelecteableItem {
    var icon: String {
        switch self {
        case .uniswap: return Asset.Plugins.uniswap.name
        case .sushiswap: return Asset.Plugins.sushiSwap.name
        case .zrx: return Asset.Plugins.zrx.name
        case .quickswap: return Asset.Plugins.quickSwap.name
        case .pancakeswap: return Asset.Plugins.pancakeSwap.name
        default: return ""
        }
    }

    var title: String {
        switch self {
        case .uniswap: return "UniSwap"
        case .sushiswap: return "SushiSwap"
        case .zrx: return "0x"
        case .quickswap: return "QuickSwap"
        case .pancakeswap: return "PancakeSwap"
        default: return ""
        }
    }
}

extension WebExtension.Setting.DataProvider: PluginSelecteableItem {
    var icon: String {
        switch self {
        case .coinMarketCap: return Asset.Plugins.coidMarketCap.name
        case .coinGecko: return Asset.Plugins.coinGecko.name
        case .uniswapInfo: return Asset.Plugins.uniswap.name
        }
    }

    var title: String {
        switch self {
        case .coinMarketCap: return "CoinMarketCap"
        case .coinGecko: return "CoinGecko"
        case .uniswapInfo: return "Uniswap Info"
        }
    }
}
