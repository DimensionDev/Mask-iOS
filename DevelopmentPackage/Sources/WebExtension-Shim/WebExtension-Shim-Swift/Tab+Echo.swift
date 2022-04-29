//
//  Tab+Echo.swift
//  HoloflowsKit
//
//  Created by Cirno MainasuK on 2019-6-22.
//

import Foundation
import SwiftyJSON


extension Tab {

    open func echo(id: String, messageBody: String) {
        let result: Result<WebExtension._Echo, RPC.Error> = HoloflowsRPC.parseRPC(messageBody: messageBody)
        switch result {
        case let .success(echo):
            consolePrint(echo.params)
            let response = HoloflowsRPC.Response(result: echo, id: id)
            HoloflowsRPC.dispatchResponse(webView: webView, id: id, result: .success(response), completionHandler: completionHandler())

        case let .failure(error):
            let result: Result<HoloflowsRPC.Response<WebExtension._Echo>, RPC.Error> = .failure(error)
            HoloflowsRPC.dispatchResponse(webView: webView, id: id, result: result, completionHandler: completionHandler())
        }
    }

}

extension WebExtension {
    public struct _Echo: WebExtension.ClientRequest {
        public static let method: String = "_echo"

        public let extensionID: String
        public let params: JSON

        public init(extensionID: String = "HoloflowsKit", params: JSON) {
            self.extensionID = extensionID
            self.params = params
        }
    }
    
    
}

extension WebExtension._Echo {
    
    public init(from decoder: Decoder) throws {
        var container = try decoder.unkeyedContainer()
        
        extensionID = try container.decode(String.self)
        params = try container.decode(JSON.self)
    }
    
    public func encode(to encoder: Encoder) throws {
        var container = encoder.unkeyedContainer()
        
        try container.encode(extensionID)
        try container.encode(params)
    }
    
}
