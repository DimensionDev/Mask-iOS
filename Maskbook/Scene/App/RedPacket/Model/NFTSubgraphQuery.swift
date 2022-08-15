//
//  NFTSubgraphQuery.swift
//  Maskbook
//
//  Created by xiaojian sun on 2022/8/4.
//  Copyright © 2022 dimension. All rights reserved.
//

import Foundation
final class NFTSubgraphQuery {
    private struct NFTSubgraphResponse: Codable {
        let data: NFTSubgraphResponseBody
    }
    
    private struct NFTSubgraphResponseBody: Codable {
        let nftredPackets: [NftRedPacketSubgraph]
    }
    
    
    private static let TOKEN_FIELDS =
        """
            address
            name
            symbol
            chain_id
        """
    private static let USER_FIELDS =
        """
            address
            name
        """

    private static let RED_PACKET_FIELDS =
        """
            rpid
            txid
            contract_address
            contract_version
            password
            shares
            message
            name
            total
            creation_time
            duration
            chain_id
            token: token_contract  {
                \(NFTSubgraphQuery.TOKEN_FIELDS)
            }
            token_contract {
                \(NFTSubgraphQuery.TOKEN_FIELDS)
            }
            token_ids
            creator {
                \(NFTSubgraphQuery.USER_FIELDS)
            }
            claimers {
                \(NFTSubgraphQuery.USER_FIELDS)
            }
        """
    
    private static func fetchFromNFTRedPacketSubgraph(network: BlockChainNetwork,
                                               query: String) async throws -> Data?
    {
        guard let url = network.subgraphURL else {
            return nil
        }
        
        var urlRequest = try URLRequest(url: url, method: .post)
        let body = ["query": query].asString()
        urlRequest.httpBody = body.data(using: .utf8)
        let (data, response) = try await URLSession.shared.data(for: urlRequest)
        
        let httpResponse = response as? HTTPURLResponse
        let statusCode = httpResponse?.statusCode ?? 0
        
        if statusCode != 200 {
            if let error = String(data: data, encoding: .utf8) {
                print(error)
            }
            throw "Bad response code \(statusCode)"
        }
        return data
    }
    
    private static func queryForRpid(_ rpid: String) -> String {
        """
            {
                nftredPackets (where: { rpid: "\(rpid.lowercased())" }) {
                    \(Self.RED_PACKET_FIELDS)
                }
            }
        """
    }
    
    private static func queryForAddress(_ address: String) -> String {
        """
        {
            nftredPackets (
              where: { creator: "\(address.lowercased())" },
              orderBy: creation_time,
              orderDirection: desc,
              first: 100,
              skip: 0
            ) {
                \(Self.RED_PACKET_FIELDS)
            }
        }
        """
    }

    static func  getNftRedPacket(network: BlockChainNetwork,
                         rpid: String)
    async throws -> NftRedPacketSubgraph? {
        let query = queryForRpid(rpid)
        guard let data = try await fetchFromNFTRedPacketSubgraph(
            network: network,
            query: query)
        else {
            return nil
        }
        let decoder = JSONDecoder()
        let result = try decoder.decode(NFTSubgraphResponse.self, from: data)
        return result.data.nftredPackets.first
    }
    
    static func getNftRedPacketHistory(network: BlockChainNetwork,
                                address: String)
    async throws -> [NftRedPacketSubgraph] {
        let query = queryForAddress(address)
        guard let data = try await fetchFromNFTRedPacketSubgraph(
            network: network,
            query: query)
        else {
            return []
        }
        let decoder = JSONDecoder()
        let result = try decoder.decode(NFTSubgraphResponse.self, from: data)
        return result.data.nftredPackets
    }
}
