//
//  MaskWebMessage.swift
//  Maskbook
//
//  Created by BradGao on 2021/8/3.
//  Copyright © 2021 dimension. All rights reserved.
//

import Foundation
import SwiftyJSON
import WebExtension_Shim_Swift

enum MaskMessageTarget: RawRepresentable, Codable {
    case background
    case content(id: MaskbookTab.TabID)
    
    var rawValue: Int {
        switch self {
        case .background:
            return -1
        
        case .content(let id):
            return id
        }
    }

    init?(rawValue: Int) {
        switch rawValue {
        case -1:
            self = .background
            
        default:
            self = .content(id: rawValue)
        }
    }
}

/// MaskWebExtensionMessage
protocol MWEMessage: WebExtension.ClientRequest {
    associatedtype Payload: Codable
    var payload: Payload? { get }
    var target: MaskMessageTarget { get }

    init(payload: Payload?)
}

extension MWEMessage {
    var extensionID: String { "-1" }
    
    var target: MaskMessageTarget {
        .background
    }

    func encode(to encoder: Encoder) throws {
        var container = encoder.unkeyedContainer()
        if let payload = payload {
            try container.encode(payload)
        }
    }

    /// Method to refine code when declaring MWEMessage type
    static func withPayload(_ payload: @escaping () -> Payload?) -> Self {
        Self(payload: payload())
    }
}

extension MWEMessage where Payload == String {
    var payload: String? { nil }
}

extension WebExtension {
    enum App {}
    enum Setting {}
    enum Persona {}
    enum Profile {}
    enum SNSAdaptor { }
    enum Wallet { }
}

struct MaskWebMessageResult: Codable {
    struct ErrorPayload: Codable {
        struct ErrorData: Codable {
            let type: String?
        }
        let code: Int
        let message: String?
        let data: ErrorData?
    }
    
    let jsonrpc: String
    let id: String
    let result: JSON?
    let error: ErrorPayload?
    
    var isFailure: Bool {
        error != nil
    }
    
    var isSuccess: Bool {
        error == nil
    }
}

extension MaskWebMessageResult {
    private var decoder: JSONDecoder {
        let decoder = JSONDecoder()
        decoder.dateDecodingStrategy = .millisecondsSince1970
        return decoder
    }
    
    func decode<C: Decodable>(to type: C.Type) throws -> C? {
        guard let result = result else { return nil }
        return try decoder.decode(C.self, from: try result.rawData())
    }
}

extension MaskWebMessageResult {
    static var empty: MaskWebMessageResult {
        MaskWebMessageResult(jsonrpc: "", id: "", result: nil, error: nil)
    }

    var isEmpty: Bool {
        result == nil && error == nil && id.isEmpty && jsonrpc.isEmpty
    }
}
