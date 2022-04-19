//
//  MaskWebMessage+Setting.swift
//  Maskbook
//
//  Created by BradGao on 2021/8/3.
//  Copyright © 2021 dimension. All rights reserved.
//

import Foundation
import WebExtension_Shim

extension WebExtension.Setting {
    enum NetworkType: String, Codable {
        case ethereum = "Ethereum"
        case binance = "Binance"
        case polygon = "Polygon"
        case arbitrum = "Arbitrum"
    }
    
    enum TradeProvider: Int, Codable {
        case uniswap = 0
        case zrx
        case sushiswap
        case sashimiswap
        case balancer
        case quickswap
        case pancakeswap
        case dodo

        enum CodingKeys: String, CodingKey {
            case uniswap = "UNISWAP"
            case zrx = "ZRX"
            case sushiswap = "SUSHISWAP"
            case sashimiswap = "SASHIMISWAP"
            case balancer = "BALANCER"
            case quickswap = "QUICKSWAP"
            case pancakeswap = "PANCAKESWAP"
            case dodo = "DODO"
        }
    }
    
    enum DataProvider: Int, Codable {
        case coinGecko = 0
        case coinMarketCap
        case uniswapInfo

        enum CodingKeys: String, CodingKey {
            case coinGecko = "COIN_GECKO"
            case coinMarketCap = "COIN_MARKET_CAP"
            case uniswapInfo = "UNISWAP_INFO"
        }
    }
    
    enum Appearance: String, Codable {
        case `default`
        case light
        case dark
    }
    
    enum Language: String, Codable {
        case auto
        case enUS = "en-US"
        case zhCN = "zh-CN"
        case zhTW = "zh-TW"
        case koKR = "ko-KR"
        case jaJP = "ja-JP"
        case esES = "es-ES"
        case faIR = "fa-IR"
        case itIT = "it-IT"
        case ruRU = "ru-RU"
        case frFR = "fr-FR"
    }
    
    struct GetNetworkTraderProvider: MWEMessage {
        static let method: String = "setting_getNetworkTraderProvider"
        
        struct GetNetworkType: Codable {
            let network: NetworkType
        }
        var payload: GetNetworkType?
    }
    
    struct SetNetworkTraderProvider: MWEMessage {
        static let method: String = "setting_setNetworkTraderProvider"
        
        struct SetNetworkType: Codable {
            let network: NetworkType
            let provider: TradeProvider
        }
        var payload: SetNetworkType?
    }
    
    struct GetTrendingDataSource: MWEMessage {
        static let method: String = "settings_getTrendingDataSource"
        typealias Payload = String
        init(payload: String? = nil) {}
    }
    
    struct SetTrendingDataSource: MWEMessage {
        static let method: String = "settings_setTrendingDataSource"
        
        struct SetDataSource: Codable {
            let provider: DataProvider
        }
        var payload: SetDataSource?
    }
    
    struct GetTheme: MWEMessage {
        static let method: String = "settings_getTheme"
        typealias Payload = String
        init(payload: String? = nil) {}
    }
    
    struct SetTheme: MWEMessage {
        static let method: String = "settings_setTheme"
        
        struct SetThemePayload: Codable {
            let theme: Appearance
        }
        var payload: SetThemePayload?
    }
    
    struct GetLanguage: MWEMessage {
        static let method: String = "settings_getLanguage"
        typealias Payload = String
        init(payload: String? = nil) {}
    }
    
    struct SetLanguage: MWEMessage {
        static let method: String = "settings_setLanguage"
        
        struct SetLanguagePayload: Codable {
            let language: Language
        }
        var payload: SetLanguagePayload?
    }
    
    struct SettingsCreateBackup: MWEMessage {
        static let method = "settings_createBackupJson"
        
        struct BackupOptions: Codable {
            let noPosts: Bool
            let noWallets: Bool
            let noPersonas: Bool
            let noProfiles: Bool
            let noRelations: Bool
            let hasPrivateKeyOnly: Bool
        }
        
        var payload: BackupOptions?
    }
    
    struct GetBackupPreviewInfo: MWEMessage {
        static let method = "settings_getBackupPreviewInfo"
        struct BackupInfo: Codable {
            let backupInfo: String?
        }
        var payload: BackupInfo?
    }
}

extension WebExtension.Setting.SettingsCreateBackup.BackupOptions {
    static var `default`: Self {
        .init(
            noPosts: true,
            noWallets: true,
            noPersonas: true,
            noProfiles: true,
            noRelations: true,
            hasPrivateKeyOnly: false
        )
    }
}

typealias GetTrendingDataSourceMWEMessage = WebExtension.Setting.GetTrendingDataSource
typealias SetTrendingDataSourceMWEMessage = WebExtension.Setting.SetTrendingDataSource
typealias GetNetworkTraderProviderMWEMessage = WebExtension.Setting.GetNetworkTraderProvider
typealias SetNetworkTraderProviderMWEMessage = WebExtension.Setting.SetNetworkTraderProvider

typealias RestoreBackupMWEMessage = WebExtension.Setting.RestoreBackup
extension WebExtension.Setting {
    struct RestoreBackup: MWEMessage {
        static let method: String = "settings_restoreBackup"

        struct BackupInfo: Codable {
            let backupInfo: String?
        }
        var payload: BackupInfo?
    }
}
