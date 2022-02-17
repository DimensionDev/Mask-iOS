//
//  ZerionAPIModel.swift
//  Maskbook
//
//  Created by BradGao on 2021/3/25.
//  Copyright © 2021 dimension. All rights reserved.
//

import BigInt
import Foundation
import SocketIO

public protocol ZerionRequestPayload: SocketData {}
public protocol ZerionResponsePayload: Decodable {}
// swiftlint:disable identifier_name
// MARK: - Request Models
public struct ZerionAPIModel {
    public enum Action: String {
        case get, subscribe, unsubscribe
    }
    
    public enum Scope: String, Encodable {
        // /address
        case info
        case assets
        case portfolio
        case transactions
        case charts
        case lockedAssets = "locked-assets"
        case stakedAssets = "staked-assets"
        case bscAssets = "bsc-assets"
        case polygonAssets = "polygon-assets"
        // /assets
        case prices
        case fullInfo = "full-info"
        case exploreSections = "explore-sections"
        case tags
        case actions
        case stats
        case list
        case tokenlists
        case categories
        // /block_lag
        case blockLag = "block-lag"
        // /dydx & /compound
        case deposits
        case loans
        // /gas
        case price
        // /maker
        case cdp
        case vault
        case cdpActions = "cdp-actions"
        case vaultActions = "vault-actions"
    }

    // swiftlint:disable force_try
    public struct Request<P: ZerionRequestPayload> {
        let action: ZerionAPIModel.Action
        let body: RequestBody
        
        public struct RequestBody: SocketData {
            let scope: [Scope]
            let payload: P
            
            public func socketRepresentation() throws -> SocketData {
                return ["scope": scope.map { $0.rawValue },
                        "payload": try! payload.socketRepresentation()]
            }
        }
    }
    // swiftlint:enable force_try
    
    public static func generateRequest<P: ZerionRequestPayload>(action: Action, scope: [Scope], payloadType: P) -> Request<P> {
        return Request(action: action, body: Request.RequestBody(scope: scope, payload: payloadType))
    }
}

// MARK: - Request Payload Models
extension ZerionAPIModel {
    public struct SubscribeAddressPayload: ZerionRequestPayload {
        private static let DEFAULT_TRANSPORT_LIMIT = 1_000
        let address: String
        let currency: Currency
        let transactionsLimit: Int = DEFAULT_TRANSPORT_LIMIT
        
        enum CodingKeys: String, CodingKey {
            case address
            case currency
            case transactionsLimit = "transactions_limit"
        }
        
        public func socketRepresentation() throws -> SocketData {
            return ["address": address, "currency": currency.rawValue, "transactions_limit": transactionsLimit]
        }
    }
    
    public struct SubscribePortfolioPayload: ZerionRequestPayload {
        private static let DEFAULT_TRANSPORT_LIMIT = 1_000
        let address: String
        let currency: Currency
        let portfolioFields: String = "all"
        
        enum CodingKeys: String, CodingKey {
            case address
            case currency
            case portfolioFields = "portfolio_fields"
        }
        
        public func socketRepresentation() throws -> SocketData {
            return ["address": address, "currency": currency.rawValue, "portfolio_fields": portfolioFields]
        }
    }
    
    public struct SubscribeAssetsPayload: ZerionRequestPayload {
        let asset_codes: [String]
        let currency: Currency
        
        public func socketRepresentation() throws -> SocketData {
            return ["asset_codes": asset_codes, "currency": currency.rawValue]
        }
    }
}

extension Decodable {
  init(from any: Any) throws {
    do {
        let data = try JSONSerialization.data(withJSONObject: any)
        self = try JSONDecoder().decode(Self.self, from: data)
    } catch {
        print(error)
        throw error
    }
  }
}

// MARK: - Response Models
extension ZerionAPIModel {
    public enum ResponseAction: String {
        case appended, changed, received, removed
    }
    public enum ResponseType {
        public enum Address {
            public enum Portfolio: String {
                case received = "received address portfolio"
            }
            
            public enum Assets: String {
                case appended = "appended address assets"
                case changed = "changed address assets"
                case received = "received address assets"
                case removed = "removed address assets"
            }
            
            public enum Transactions: String {
                case appended = "appended address transactions"
                case changed = "changed address transactions"
                case received = "received address transactions"
                case removed = "removed address transactions"
            }
        }
        
        public enum Assets: String {
            case changed = "changed assets prices"
            case received = "received assets prices"
            
            public enum Charts: String {
                case appended = "appended chart points"
                case changed = "changed chart points"
                case received = "received assets charts"
            }
            
            public enum Info: String {
                case received = "received assets info"
            }
        }
    }
    
    public struct Response<P: ZerionResponsePayload>: Decodable {
        let meta: Meta
        let payload: P
        
        public struct Meta: Decodable {
            public enum Status: String, Decodable {
                case ok
                /// WARNING: Not sure what string returned from zerion when status is not ok, so this value is only for internal use
                case fail
            }
            
            /// DO NOT Change to enum `Status` because we do not know all the status' actual values
            let status: String
            let address: String
            let currency: String
        }
    }
}

// MARK: - Response Payload Models
extension ZerionAPIModel {
    public struct AssetWithQuantity: Decodable {
        let asset: Asset
        let quantity: String
    }
    public struct Asset: Decodable {
        let assetCode: String
        let decimals: Int
        let iconUrl: URL?
        let price: Price?
        let isDisplayable: Bool
        let isVerified: Bool
        let name: String
        let symbol: String
        let type: String?
        
        public struct Price: Decodable {
            let changedAt: Int
            let relativeChange24h: Double?
            let value: Double
            
            enum CodingKeys: String, CodingKey {
                case changedAt = "changed_at"
                case relativeChange24h = "relative_change_24h"
                case value
            }
        }
        
        enum CodingKeys: String, CodingKey {
            case assetCode = "asset_code"
            case decimals
            case iconUrl = "icon_url"
            case isDisplayable = "is_displayable"
            case isVerified = "is_verified"
            case name
            case symbol
            case type
            case price
        }
    }
    public struct AddressAssetsPayload: ZerionResponsePayload {
        let assets: [String: AssetWithQuantity]
    }
    
    public struct Portfolio: Decodable {
        let locked_value: Float
        let staked_value: Float
        let bsc_assets_value: Float
        let absolute_change_24h: Float
        let relative_change_24h: Float?
        let deposited_value: Float
        let polygon_assets_value: Float
        let total_value: Float
        let assets_value: Float
        let borrowed_value: Float
    }
    
    public struct PortfolioPayload: ZerionResponsePayload {
        let portfolio: Portfolio
    }
    
    public struct TransactionsPayload: ZerionResponsePayload {
        let transactions: [Transaction]
    }
    
    public struct Transaction: Decodable, Hashable {
        public static func == (lhs: ZerionAPIModel.Transaction, rhs: ZerionAPIModel.Transaction) -> Bool {
            return lhs.id == rhs.id
        }
        
        public func hash(into hasher: inout Hasher) {
            hasher.combine(id)
        }
        
        public enum TransactionType: String, Decodable {
            case send, receive, trade, authorize, execution, deployment, cancel,
                 deposit, withdraw, borrow, repay, stake, unstake, claim
        }
        
        public enum TransactionStatus: String, Decodable {
            case confirmed, failed, pending
        }
        
        public enum TransactionDirection: String, Decodable {
            case `in`, out, `self`
        }
        
        public struct TransactionChange: Decodable {
            let asset: Asset
            let value: Decimal
            let direction: TransactionDirection
            let address_from: String
            let address_to: String
            let price: Float?
        }
        
        public struct TransactionFee: Decodable {
            let value: Decimal
            let price: Float
        }
        
        public struct Meta: Decodable {
            let action: String?
            let amount: Decimal?
            let asset: Asset?
            let spender: String?
        }
        
        let id: String
        let type: TransactionType
        let `protocol`: String?
        let mined_at: Int
        let block_number: Int
        let status: TransactionStatus
        let hash: String
        let direction: TransactionDirection?
        let address_from: String?
        let address_to: String?
        let contract: String?
        let nonce: Int?
        let changes: [TransactionChange]?
        let fee: TransactionFee?
        let meta: Meta?
        
        var mined_date: Date {
            return Date(timeIntervalSince1970: TimeInterval(mined_at))
        }
    }
}
// swiftlint:enable identifier_name
