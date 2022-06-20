//
//  Plugins.swift
//  Maskbook
//
//  Created by yzj on 2021/7/22.
//  Copyright © 2021 dimension. All rights reserved.
//

import SwiftUI

enum PluginType: String {
    case fileService
    case ito
    case luckyDrop
    case swap
    case transaction

    case marketTrend
    case snapshot
    case collectibles
    case gitcoin
    case valuables
    case dhedge
    
    var isEnable: Bool {
        switch self {
        case .transaction, .luckyDrop, .fileService:
            return true
            
        default:
            return false
        }
    }

    /// plugin encrytption key
    var postEncryptionKey: String {
        let index: Int =  {
            switch self {
            case .ito: return 0
            case .luckyDrop: return 1
            case .fileService: return 2
            default: return -1
            }
        }()

        let prefix: String = {
            switch self {
            case .ito: return "ito"
            case .luckyDrop: return "red_packet"
            case .fileService: return "fileservice"
            default: return ""
            }
        }()

        return "com.maskbook.\(prefix):\(index)"
    }
}

extension PluginType: CaseIterable {}
extension PluginType: Identifiable {
    var id: String { rawValue }
}

extension PluginType {
    var name: String {
        switch self {
        case .fileService: return L10n.Scene.App.Plugins.fileService
        case .ito: return L10n.Scene.App.Plugins.ito
        case .luckyDrop: return L10n.Scene.App.Plugins.lucyDrop
        case .swap: return L10n.Scene.App.Plugins.swap
        case .transaction: return L10n.Scene.App.Plugins.transaction

        case .marketTrend: return L10n.Scene.App.Plugins.marketTrend
        case .snapshot: return L10n.Scene.App.Plugins.snapshot
        case .collectibles: return L10n.Scene.App.Plugins.collectibles
        case .gitcoin: return L10n.Scene.App.Plugins.gitcoin
        case .valuables: return L10n.Scene.App.Plugins.valuables
        case .dhedge: return L10n.Scene.App.Plugins.dhedge
        }
    }

    var introduction: String {
        switch self {
        case .transaction: return L10n.Scene.App.PluginIntroduction.transak
        case .ito: return L10n.Scene.App.PluginIntroduction.ito
        case .luckyDrop: return L10n.Scene.App.PluginIntroduction.luckydrop
        case .swap: return L10n.Scene.App.PluginIntroduction.swap
        case .fileService: return L10n.Scene.App.PluginIntroduction.fileService
        default: return ""
        }
    }
}

extension PluginType {
    var icon: String {
        switch self {
        case .fileService: return Asset.Plugins.fileservice.name
        case .ito: return Asset.Plugins.ito.name
        case .luckyDrop: return Asset.Plugins.luckyDrop.name
        case .swap: return Asset.Plugins.swap.name
        case .transaction: return Asset.Plugins.transak.name
        case .marketTrend: return Asset.Plugins.marketTrend.name
        case .snapshot: return Asset.Plugins.snapshot.name
        case .collectibles: return Asset.Plugins.nft.name
        case .gitcoin: return Asset.Plugins.gitcoin.name
        case .valuables: return Asset.Plugins.valuables.name
        case .dhedge: return Asset.Plugins.dhedge.name
        }
    }
}

extension PluginType {
    var jsPluginId: String {
        switch self {
        case .fileService: return "com.maskbook.fileservice"
        case .ito: return "com.maskbook.ito"
        case .luckyDrop: return "com.maskbook.red_packet"
        case .transaction: return "com.maskbook.transak"
        case .marketTrend: return "com.maskbook.trader"
        case .snapshot: return "org.snapshot"
        case .collectibles: return "com.maskbook.collectibles"
        case .gitcoin: return "co.gitcoin"
        case .valuables: return "com.maskbook.tweet"
        case .dhedge: return "co.dhedge"
        case .swap: return ""
        }
    }
}

extension PluginType {
    var explorable: Bool {
        // hide explore for now
        switch self {
        case .transaction: return true
        default: return false
        }
    }

    var configurable: Bool {
        switch self {
        case .swap,
             .marketTrend:
            return true

        default: return false
        }
    }
}
