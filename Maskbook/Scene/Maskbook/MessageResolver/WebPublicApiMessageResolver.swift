//
//  WebPublicApiMessageResolver.swift
//  Maskbook
//
//  Created by BradGao on 2021/9/18.
//  Copyright © 2021 dimension. All rights reserved.
//

import Foundation
import OSLog
import SwiftyJSON
import WebKit

class WebPublicApiMessageResolver: MaskMessageResolver {
    private enum ResolveMethodName: String, CaseIterable {
        case misc_openDashboardView
        case misc_openCreateWalletView
        case wallet_switchBlockChain
        
        case create_persona
        case query_persona
        case query_personas
        case query_persona_by_profile
        case update_persona
        case delete_persona
        
        case create_profile
        case query_profile
        case query_profiles
        case update_profile
        case delete_profile
        case attach_profile
        case detach_profile
        
        case create_relation
        case query_relation
        case query_relations
        case update_relation
        
        case notifyRedpacket
        case claimOrRefundRedpacket
        
        case notify_visible_detected_profile_changed
    }
    
    @InjectedProvider(\.mainCoordinator)
    var coordinator
    
    @InjectedProvider(\.userDefaultSettings)
    private var settings
    
    @InjectedProvider(\.personaManager)
    var personaManager
    
    weak var webView: WKWebView?
    
    let decoder = JSONDecoder()
    
    init(webView: WKWebView?) {
        self.webView = webView
    }
    
    class func canResolve(message: WKScriptMessage) -> Bool {
        guard message.name == MaskBrowser.maskbookJsonRPCScheme else { return false }
        guard let body = message.body as? [String: Any], let method = body["method"] as? String else { return false }
        return ResolveMethodName.allCases.map { $0.rawValue }.contains(method)
    }
    
    // swiftlint:disable cyclomatic_complexity
    @discardableResult
    func resolve(message: WKScriptMessage) -> Bool {
        guard Self.canResolve(message: message) else { return false }
        guard let messageBody = message.body as? [String: Any] else {
            return false
        }
        guard let method = messageBody["method"] as? String,
              let resolvedMethod = ResolveMethodName(rawValue: method) else {
            return false
        }
        guard let messageBodyString = JSON(rawValue: message.body)?.rawString() else {
            return false
        }
        guard let messageData = messageBodyString.data(using: .utf8) else {
            return false
        }
        var parseResponse: WebPublicApiResponse<>
        let requestId = messageBody["id"] as? String ?? ""
        switch resolvedMethod {
        case .misc_openDashboardView:
            openDashboard()
            return true
            
        case .misc_openCreateWalletView:
            openWalletView()
            return true
            
        case .wallet_switchBlockChain:
            guard let params = messageBody["params"] as? [String: Any] else {
                return false
            }
            var newChainId = settings.network.chain.rawValue
            var newNetworkId = settings.network.networkId
            if let coinId = params["coinId"] as? NSNumber {
                newChainId = coinId.intValue
            }
            if let networkId = params["networkId"] as? NSNumber {
                newNetworkId = networkId.uint64Value
            }
            
            guard let network = BlockChainNetwork(chainId: newChainId, networkId: newNetworkId) else {
                os_log("%{public}s[%{public}ld], %{public}s: unsupport blockchain network: %{public}",
                       ((#file as NSString).lastPathComponent),
                       #line,
                       #function,
                       params)
                return false
            }
            if let account = WalletCoreService.shared.getCurrentAccount(), account.fromWalletConnect {
                // If user is using a wallet connected using `WalletConnect`, switching blockchain is not supported
                if settings.network != network {
                    let alertController = AlertController(
                        title: L10n.Scene.WalletConnect.couldNotSwitchBlockchainNetworkTitle,
                        message: L10n.Scene.WalletConnect.couldNotSwitchBlockchainNetworkMessage,
                        confirmButtonText: L10n.Common.Controls.done,
                        imageType: .error)
                    Coordinator.main.present(scene: .alertController(alertController: alertController), transition: .alertController(completion: nil))
                    return false
                }
            }
            settings.network = network
            return true
            
        case .create_persona:
            parseResponse = createPersona(messageData: messageData)
            
        case .query_persona:
            parseResponse = queryPersona(messageData: messageData)
            
        case .query_personas:
            parseResponse = queryPersonas(messageData: messageData)
            
        case .query_persona_by_profile:
            parseResponse = queryPersonaByProfile(messageData: messageData)
            
        case .update_persona:
            parseResponse = updatePersona(messageData: messageData)
            
        case .delete_persona:
            parseResponse = deletePersona(messageData: messageData)
            
        case .create_profile:
            parseResponse = createProfile(messageData: messageData)
            
        case .query_profile:
            parseResponse = queryProfile(messageData: messageData)
            
        case .query_profiles:
            parseResponse = queryProfiles(messageData: messageData)
            
        case .delete_profile:
            parseResponse = deleteProfile(messageData: messageData)
            
        case .update_profile:
            parseResponse = updateProfile(messageData: messageData)
            
        case .attach_profile:
            parseResponse = attachProfile(messageData: messageData)
            
        case .detach_profile:
            parseResponse = detachProfile(messageData: messageData)
            
        case .create_relation:
            parseResponse = createRelation(messageData: messageData)
            
        case .query_relation:
            parseResponse = queryRelation(messageData: messageData)
            
        case .query_relations:
            parseResponse = queryRelations(messageData: messageData)
            
        case .update_relation:
            parseResponse = updateRelation(messageData: messageData)
            
        case .notifyRedpacket:
            parseResponse = notifyRedpacket(messageData: messageData)
            
        case .claimOrRefundRedpacket:
            parseResponse = claimOrRefundRedpacket(messageData: messageData)
            
        case .notify_visible_detected_profile_changed:
            profileDetected(messageData: messageData)
        }
        sendResponseToWebView(response: parseResponse.response, id: requestId)
        return true
    }
    // swiftlint:enable cyclomatic_complexity
}
