//
//  HoloflowsRPC+Request.swift
//  HoloflowsKit
//
//  Created by Cirno MainasuK on 2019-6-22.
//

import Foundation
import SwiftyJSON

extension HoloflowsRPC {

    public struct Request<T: WebExtension.ClientRequest>: RPC.Request & Encodable {
        public var jsonrpc: String = RPC.Version.default
        public var method: String
        public var params: T
        public var id: String

        public init(params: T, id: String) {
            self.method = type(of: params).method
            self.params = params
            self.id = id
        }
    }

    // Request from server to client (App to extension)
    public struct ServerRequest<T: WebExtension.ServerRequest>: RPC.Request & Encodable {
        public var jsonrpc: String = RPC.Version.default
        public var method: String
        public var params: T
        public var id: String

        public init(params: T, id: String) {
            self.method = type(of: params).method
            self.params = params
            self.id = id
        }
    }

}
