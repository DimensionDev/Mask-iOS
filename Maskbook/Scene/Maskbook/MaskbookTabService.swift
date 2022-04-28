//
//  MaskbookTabService.swift
//  Maskbook
//
//  Created by MainasuK Cirno on 2020/3/5.
//  Copyright © 2020 dimension. All rights reserved.


import Foundation
import os
import WebExtension_Shim_Swift

final class MaskbookTabService {
    @InjectedProvider(\.userDefaultSettings)
    private var userSettings
    
    var tabs: [MaskbookTab.TabID: MaskbookTab] = [:]
    
////    let containerView = UIView()
//
    private var backgroundTabID = -1
//    
//    // MARK: - Singleton
    static let shared = MaskbookTabService()
//    
    private init() { }
}

extension MaskbookTabService {
    
    func cache(for tab: Tab) -> MaskbookTab? {
        return tabs[tab.id]
    }

    func register(for tab: Tab) -> MaskbookTab {
        guard let maskbookTab = tabs[tab.id] else {
            let maskbookTab = MaskbookTab(tab: tab)
            tabs[maskbookTab.tabID] = maskbookTab
//            maskbookTab.containerView.translatesAutoresizingMaskIntoConstraints = false
//            maskbookTab.containerView.preservesSuperviewLayoutMargins = true
//            containerView.addSubview(maskbookTab.containerView)
//            NSLayoutConstraint.activate([
//                maskbookTab.containerView.topAnchor.constraint(equalTo: containerView.topAnchor),
//                maskbookTab.containerView.leadingAnchor.constraint(equalTo: containerView.leadingAnchor),
//                maskbookTab.containerView.trailingAnchor.constraint(equalTo: containerView.trailingAnchor),
//                maskbookTab.containerView.bottomAnchor.constraint(equalTo: containerView.bottomAnchor)
//            ])
            return maskbookTab
        }
        
        return maskbookTab
    }
    
    func resign(for tab: Tab) {
        tabs[tab.id] = nil
    }
    
//    func active(tab: Tab) {
//        let maskbookTab = register(for: tab)
//        containerView.bringSubviewToFront(maskbookTab.containerView)
//    }

//    func topmostTab() -> MaskbookTab? {
//        guard !tabs.isEmpty else { return nil }
//        guard let topmostTabView = containerView.subviews.last else { return nil }
//        return tabs[topmostTabView.tag]
//    }
}

// MARK: - InjectProvider support
enum TabServiceInjectValueKey: InjectValueKey {
    static var defaultInjectValue = MaskbookTabService.shared
}

extension InjectValues {
    var tabService: MaskbookTabService {
        Self[TabServiceInjectValueKey.self]
    }
}

extension MaskbookTabService: RedPacketShareDelegate {
    func share(_ payload: RedPacketInteractivePayload) {
        let platform = userSettings.currentProfileSocialPlatform
        guard let shareLink = ShareLinkGenerator.generateShareLink(platform: platform,
                                                                   payload: payload)
        else { return }
        let request = URLRequest(url: shareLink)
        tabs.first { $0.key != backgroundTabID }?.value.tab?.webView.load(request)
    }
}
