//
//  HoloflowsRPC+ErrorResponse.swift
//  HoloflowsKit
//
//  Created by Cirno MainasuK on 2019-6-22.
//

import Foundation

extension HoloflowsRPC {

    public struct ErrorResponse<E: RPC.ErrorType>: RPC.ErrorResponse {
        public let jsonrpc: String = RPC.Version.default
        public let error: E
        public let id: String

        public init(error: E, id: String) {
            self.error = error
            self.id = id
        }
    }

}
