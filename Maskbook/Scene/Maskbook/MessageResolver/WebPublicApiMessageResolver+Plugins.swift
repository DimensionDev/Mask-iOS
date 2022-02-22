//
//  WebPublicApiMessageResolver+Plugins.swift
//  Maskbook
//
//  Created by Brad Gao on 2022/1/26.
//  Copyright © 2022 dimension. All rights reserved.
//

import Foundation
import UIKit

// MARK: - Persona methods handler
typealias RedPacketInteractiveRequest = WebPublicApiMessageRequest<RedPacketInteractivePayload>

extension WebPublicApiMessageResolver {
    @discardableResult
    func notifyRedpacket(messageData: Data) -> WebPublicApiResponse<Bool> {
        guard let request = try? decoder.decode(RedPacketInteractiveRequest.self, from: messageData),
              let payload = request.params else {
                  return WebPublicApiResponse(response: false)
        }
        guard let address = WalletCoreService.shared.getCurrentAccount()?.address else {
            return WebPublicApiResponse(response: false)
        }
        let network = WalletCoreStorage.getCurrentNetwork()
        let status = payload.parseStatus(accountAddress: address, network: network)
        if (status.canClaim || status.canRefund),
           !status.isExpired,
           !status.isEmpty {
            if let fromController = UIApplication.getTopViewController(),
               fromController.isKind(of: OpenRedPackageViewController.self) {
                return WebPublicApiResponse(response: false)
            }
            coordinator.present(scene: .openRedPackage(payload: payload,
                                                       delegate: self,
                                                       requestId: request.id),
                                transition: .panModel(animated: true))
        }
        return WebPublicApiResponse(response: true)
    }
    
    @discardableResult
    func claimOrRefundRedpacket(messageData: Data) -> WebPublicApiResponse<Bool> {
        guard let request = try? decoder.decode(RedPacketInteractiveRequest.self, from: messageData),
              let payload = request.params else {
                  return WebPublicApiResponse(response: false)
              }
        coordinator.present(scene: .openRedPackage(payload: payload,
                                                   delegate: self,
                                                   requestId: request.id),
                            transition: .panModel(animated: true))
        
        return WebPublicApiResponse(response: true)
    }
}

extension WebPublicApiMessageResolver: OpenRedPackageViewControllerDelegate {
    func openRedPackageViewController(didFinishClaim viewController: OpenRedPackageViewController, requestId: String) {
        sendResponseToWebView(response: true, id: requestId)
    }
}
