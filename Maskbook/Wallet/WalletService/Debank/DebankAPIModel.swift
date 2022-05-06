//
//  DebankAPIModel.swift
//  Maskbook
//
//  Created by BradGao on 2021/6/30.
//  Copyright © 2021 dimension. All rights reserved.
//

import Foundation

public struct DebankAPIModel {
    public struct Portfolio: Decodable {
        let totalUsdValue: Decimal
        let chainList: [ChainPortfolio]
        
        enum CodingKeys: String, CodingKey {
            case totalUsdValue = "total_usd_value"
            case chainList = "chain_list"
        }
        
        public struct ChainPortfolio: Decodable {
            let id: String
            let communityId: Int?
            let name: String
            let nativeTokenId: String?
            let logoUrl: String?
            let wrappedTokenId: String?
            let usdValue: Decimal
            
            enum CodingKeys: String, CodingKey {
                case id
                case communityId = "community_id"
                case name
                case nativeTokenId = "native_token_id"
                case logoUrl = "logo_url"
                case wrappedTokenId = "wrapped_token_id"
                case usdValue = "usd_value"
            }
        }
    }
    
    public struct DebankToken: Decodable {
        let id: String
        let chain: String
        let name: String?
        let symbol: String
        let displaySymbol: String?
        let optimizedSymbol: String?
        let decimals: Int
        let logoUrl: URL?
        let price: Decimal?
        let isVerified: Bool?
        let isCore: Bool?
        let isWallet: Bool
        let timeAt: TimeInterval?
        let amount: Decimal?
        
        enum CodingKeys: String, CodingKey {
            case id
            case chain
            case name
            case symbol
            case displaySymbol = "display_symbol"
            case optimizedSymbol = "optimized_symbol"
            case decimals
            case logoUrl = "logo_url"
            case price
            case isVerified = "is_verified"
            case isCore = "is_core"
            case isWallet = "is_wallet"
            case timeAt = "time_at"
            case amount
        }
    }
    
    public struct TransactionResponse: Decodable {
        let data: RespDict
        let error_code: Int
        
        public struct RespDict: Decodable {
            let history_list: [History]
            let token_dict: [String: TransactionAsset]
            let cate_dict: CateDict
            let project_dict: [String: ProjectItem]
        }
        
        public struct CateDict: Decodable {
            let approve: CateDictItem?
            let receive: CateDictItem?
            let send: CateDictItem?
            let spot_trade: CateDictItem?
        }
        
        public struct CateDictItem: Decodable {
            let id: String
            let name: String
        }
        
        public struct ProjectItem: Decodable {
            let id: String
            let log_url: String?
            let name: String
        }
        
        public struct TransactionAsset: Decodable {
            let id: String
            let chain: String
            let name: String?
            let symbol: String
            let displaySymbol: String?
            let optimizedSymbol: String?
            let decimals: Int?
            let logoUrl: URL?
            let price: Decimal?
            let isVerified: Bool?
            let isCore: Bool?
            let isWallet: Bool?
            let timeAt: TimeInterval?
            let amount: Decimal?
            
            enum CodingKeys: String, CodingKey {
                case id
                case chain
                case name
                case symbol
                case displaySymbol = "display_symbol"
                case optimizedSymbol = "optimized_symbol"
                case decimals
                case logoUrl = "logo_url"
                case price
                case isVerified = "is_verified"
                case isCore = "is_core"
                case isWallet = "is_wallet"
                case timeAt = "time_at"
                case amount
            }
        }
        
        public struct History: Decodable {
            public enum Cate: String, Decodable {
                case send, approve, receive, cancel
            }
            
            public struct Receive: Decodable {
                let amount: Decimal
                let from_addr: String
                let token_id: String
            }
            
            public struct Send: Decodable {
                let amount: Decimal
                let to_addr: String
                let token_id: String
            }
            
            public struct Approve: Decodable {
                let spender: String
                let value: Decimal
                let token_id: String
                
                public init(from decoder: Decoder) throws {
                    let container = try decoder.container(keyedBy: CodingKeys.self)
                    spender = try container.decode(String.self, forKey: .spender)
                    
                    if #available(iOS 15, *) {
                        value = try container.decode(Decimal.self, forKey: .value)
                    } else {
                        // FIXME: crash in ios 14.1 when decode `Approve`
                        // https://github.com/apple/swift-corelibs-foundation/issues/3965
                        let doubleValue = try container.decode(Double.self, forKey: .value)
                        let maxMantissa = Double(UInt64.max).nextDown
                        if doubleValue <= maxMantissa {
                            value = Decimal(doubleValue)
                        } else {
                            value = Decimal(maxMantissa)
                        }
                    }
                    
                    token_id = try container.decode(String.self, forKey: .token_id)
                }
                
                enum CodingKeys: String, CodingKey {
                    case spender, value, token_id
                }
            }
            
            public struct SpotTrade: Decodable {
                let dex_id: String?
                let pay_token_amount: Decimal
                let pay_token_id: String
                let receive_token_amount: Decimal
                let receive_token_id: String
            }
            
            public struct Tx: Decodable {
                let eth_gas_fee: Decimal?
                let from_addr: String?
                let name: String?
//                let params: [String]?
                let status: Int?
                let to_addr: String?
                let usd_gas_fee: Decimal?
                let value: Decimal?
            }
            
            let cate_id: String?
            let debt_liquidated: Int?
            let id: String
            let other_addr: String?
            let project_id: String?
            let receives: [Receive]?
            let sends: [Send]?
            let time_at: TimeInterval?
            let token_approve: Approve?
            let sport_trade: SpotTrade?
            let tx: Tx?
            
            var tokenId: String? {
                if let send = sends?.first {
                    return send.token_id
                }
                if let receive = receives?.first {
                    return receive.token_id
                }
                if let approve = token_approve {
                    return approve.token_id
                }
                return nil
            }
        }
    }
}

extension BlockChainNetwork {
    init?(fromDebankChainName debankName: String) {
        for blockChain in BlockChainNetwork.allCases {
            if blockChain.debankName?.caseInsensitiveCompare(debankName) == .orderedSame {
                self.chain = blockChain.chain
                self.networkId = blockChain.networkId
                return
            }
        }
        return nil
    }
}
