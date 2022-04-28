//
//  JSONRPC.swift
//  HoloflowsKit
//
//  Created by Cirno MainasuK on 2019-6-21.
//

import Foundation

public protocol RPC {
    var jsonrpc: String { get }

    typealias Version = RPCVersion
    typealias Request = RPCRequest
    typealias Response = RPCResponse
    typealias ErrorResponse = RPCErrorResponse
    typealias ErrorType = RPCErrorType
    typealias Error = RPCError
}

public enum RPCVersion {
    public static let `default`: String = "2.0"
}

public protocol RPCRequest: RPC, Decodable {
    associatedtype ID: Codable, Hashable
    associatedtype Params: Decodable

    var method: String { get }
    var params: Params { get }
    var id: ID { get }
}

public protocol RPCResponse: RPC, Encodable {
    associatedtype ID: Codable, Hashable
    associatedtype Result: Encodable

    var result: Result { get }
    var id: ID { get }
}

public protocol RPCErrorResponse: RPC, Encodable {
    associatedtype ID: Codable, Hashable
    associatedtype SpecificError: RPC.ErrorType

    var error: SpecificError { get }
    var id: ID { get }
}

public protocol RPCErrorType: Codable, Swift.Error {
    var code: Int { get }
    var message: String { get }
}

public struct RPCError: RPC.ErrorType, Equatable {
    public var code: Int
    public var message: String
}

extension RPCError {
    public var localizedDescription: String {
        return message
    }
}

extension RPCError {
    public static let parseError: RPC.Error = PreservedError.parseError.rpcError
    public static let invalidRequest: RPC.Error = PreservedError.invalidRequest.rpcError
    public static let methodNotFound: RPC.Error = PreservedError.methodNotFound.rpcError
    public static let invalidParams: RPC.Error = PreservedError.invalidParams.rpcError
    public static let internalError: RPC.Error = PreservedError.internalError.rpcError
    public static let serverError: RPC.Error = PreservedError.serverError.rpcError
}

private enum PreservedError {
    case parseError
    case invalidRequest
    case methodNotFound
    case invalidParams
    case internalError
    case serverError

    public var code: Int {
        switch self {
        case .parseError:     return -32700
        case .invalidRequest: return -32600
        case .methodNotFound: return -32601
        case .invalidParams:  return -32602
        case .internalError:  return -32603
        case .serverError:    return -32000
        }
    }

    public var message: String {
        switch self {
        case .parseError:     return "parse error. not well formed"
        case .invalidRequest: return "server error. invalid xml-rpc. not conforming to spec"
        case .methodNotFound: return "server error. requested method not found"
        case .invalidParams:  return "server error. invalid method parameters"
        case .internalError:  return "server error. internal xml-rpc error"
        case .serverError:    return "system error."
        }
    }

    public var rpcError: RPCError {
        switch self {
        case .parseError:     return(RPCError(code: code, message: message))
        case .invalidRequest: return(RPCError(code: code, message: message))
        case .methodNotFound: return(RPCError(code: code, message: message))
        case .invalidParams:  return(RPCError(code: code, message: message))
        case .internalError:  return(RPCError(code: code, message: message))
        case .serverError:    return(RPCError(code: code, message: message))
        }
    }

}

