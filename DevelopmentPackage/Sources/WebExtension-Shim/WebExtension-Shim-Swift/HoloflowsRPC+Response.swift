//
//  HoloflowsRPC+Response.swift
//  HoloflowsKit
//
//  Created by Cirno MainasuK on 2019-6-22.
//

import Foundation

extension HoloflowsRPC {

    public struct Response<T: Encodable>: RPC.Response {
        public var jsonrpc: String = RPC.Version.default
        public var result: T
        public var id: String

        public init(result: T, id: String) {
            self.result = result
            self.id = id
        }
    }

}
