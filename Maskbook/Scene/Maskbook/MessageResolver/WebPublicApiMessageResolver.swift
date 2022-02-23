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

protocol WebMessageResolverDelegate: AnyObject {
    func webPublicApiMessageResolver(resolver: WebPublicApiMessageResolver,
                                     profilesDetect profileIdentifiers: [String])
}

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
    
    weak var delegate: WebMessageResolverDelegate?
    
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
            let parseResponse = createPersona(messageData: messageData)
            sendResponseToWebView(response: parseResponse.response, id: requestId)
            
        case .query_persona:
            let parseResponse = queryPersona(messageData: messageData)
            sendResponseToWebView(response: parseResponse.response, id: requestId)
            
        case .query_personas:
            let parseResponse = queryPersonas(messageData: messageData)
            sendResponseToWebView(response: parseResponse.response, id: requestId)
            
        case .query_persona_by_profile:
            let parseResponse = queryPersonaByProfile(messageData: messageData)
            sendResponseToWebView(response: parseResponse.response, id: requestId)
            
        case .update_persona:
            let parseResponse = updatePersona(messageData: messageData)
            sendResponseToWebView(response: parseResponse.response, id: requestId)
            
        case .delete_persona:
            let parseResponse = deletePersona(messageData: messageData)
            sendResponseToWebView(response: parseResponse.response, id: requestId)
            
        case .create_profile:
            let parseResponse = createProfile(messageData: messageData)
            sendResponseToWebView(response: parseResponse.response, id: requestId)
            
        case .query_profile:
            let parseResponse = queryProfile(messageData: messageData)
            sendResponseToWebView(response: parseResponse.response, id: requestId)
            
        case .query_profiles:
            let parseResponse = queryProfiles(messageData: messageData)
            sendResponseToWebView(response: parseResponse.response, id: requestId)
            
        case .delete_profile:
            let parseResponse = deleteProfile(messageData: messageData)
            sendResponseToWebView(response: parseResponse.response, id: requestId)
            
        case .update_profile:
            let parseResponse = updateProfile(messageData: messageData)
            sendResponseToWebView(response: parseResponse.response, id: requestId)
            
        case .attach_profile:
            let parseResponse = attachProfile(messageData: messageData)
            sendResponseToWebView(response: parseResponse.response, id: requestId)
            
        case .detach_profile:
            let parseResponse = detachProfile(messageData: messageData)
            sendResponseToWebView(response: parseResponse.response, id: requestId)
            
        case .create_relation:
            let parseResponse = createRelation(messageData: messageData)
            sendResponseToWebView(response: parseResponse.response, id: requestId)
            
        case .query_relation:
            let parseResponse = queryRelation(messageData: messageData)
            sendResponseToWebView(response: parseResponse.response, id: requestId)
            
        case .query_relations:
            let parseResponse = queryRelations(messageData: messageData)
            sendResponseToWebView(response: parseResponse.response, id: requestId)
            
        case .update_relation:
            let parseResponse = updateRelation(messageData: messageData)
            sendResponseToWebView(response: parseResponse.response, id: requestId)
            
        case .notifyRedpacket:
            let parseResponse = notifyRedpacket(messageData: messageData)
            sendResponseToWebView(response: parseResponse.response, id: requestId)
            
        case .claimOrRefundRedpacket:
            let parseResponse = claimOrRefundRedpacket(messageData: messageData)
            sendResponseToWebView(response: parseResponse.response, id: requestId)
            
        case .notify_visible_detected_profile_changed:
            if let profileIdentifiers = profileDetected(messageData: messageData) {
                delegate?.webPublicApiMessageResolver(resolver: self,
                                                      profilesDetect: profileIdentifiers)
            }
        }
        
        return true
    }
    // swiftlint:enable cyclomatic_complexity
}
