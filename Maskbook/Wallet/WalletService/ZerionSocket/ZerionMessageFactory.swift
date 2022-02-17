//
//  ZerionMessageFactory.swift
//  Maskbook
//
//  Created by BradGao on 2021/3/25.
//  Copyright © 2021 dimension. All rights reserved.
//

import Foundation
import SocketIO

public class ZerionMessageFactory {
    private static let decoder = JSONDecoder()
    
    class func generateAddressRequest(action: ZerionAPIModel.Action, network: BlockChainNetwork, payload: ZerionAPIModel.SubscribeAddressPayload) -> (ZerionAPIModel.Action, SocketData) {
        var scope: [ZerionAPIModel.Scope] = [.transactions]
        switch network {
        case .eth,
             .rinkeby:
            scope.append(.assets)

        case .bsc:
            scope.append(.bscAssets)

        default:
            break
        }
        
        let request = ZerionAPIModel.generateRequest(action: action, scope: [.assets, .transactions], payloadType: payload)
        return (action, request.body)
    }
    
    public class func generatePortfolioRequest(action: ZerionAPIModel.Action, payload: ZerionAPIModel.SubscribePortfolioPayload) -> (ZerionAPIModel.Action, SocketData) {
        let request = ZerionAPIModel.generateRequest(action: action, scope: [.portfolio], payloadType: payload)
        return (action, request.body)
    }
    
    public class func generateAssetsRequest(action: ZerionAPIModel.Action, payload: ZerionAPIModel.SubscribeAssetsPayload) -> (ZerionAPIModel.Action, SocketData) {
    let request = ZerionAPIModel.generateRequest(action: action, scope: [.prices], payloadType: payload)
    return (action, request.body)
}
}
