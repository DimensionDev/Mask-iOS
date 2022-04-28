//
//  MaskWebMessage+App.swift
//  Maskbook
//
//  Created by BradGao on 2021/8/2.
//  Copyright © 2021 dimension. All rights reserved.
//

import Foundation
import WebExtension_Shim_Swift

typealias GetPluginStatusMWEMessage = WebExtension.App.GetIsPluginEnabled
typealias SetPluginStatusMWEMessage = WebExtension.App.SetPluginStatus
extension WebExtension.App {
    struct GetIsPluginEnabled: MWEMessage {
        static let method: String = "app_isPluginEnabled"
        
        struct PluginID: Codable {
            let pluginID: String
        }
        var payload: PluginID?
    }
    
    struct SetPluginStatus: MWEMessage {
        static let method: String = "app_setPluginStatus"
        
        struct PluginStatus: Codable {
            let pluginID: String
            let enabled: Bool
        }
        var payload: PluginStatus?
    }
}
