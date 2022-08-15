//
//  PluginStorageRepository.swift
//  Maskbook
//
//  Created by Hugo L on 2022/4/18.
//  Copyright © 2022 dimension. All rights reserved.
//

import CoreData
import CoreDataStack
import Foundation
import SwiftyJSON
import web3swift

enum PluginStorageRepository {
    static let viewContext = AppContext.shared.coreDataStack.persistentContainer.viewContext
    static let backgroundContext = AppContext.shared.backgroundContext
    
    enum PluginID: String {
        case redPackage = "com.maskbook.red_packet"
    }
    enum PluginType: String {
        case redPackage = "red-packet"
        case nftRedPackage = "nft-red-packet"
    }
}

// red package
extension PluginStorageRepository {
    static func save(
        chain: BlockChainNetwork,
        txHash: String,
        payload: RedPacketPayload?
    ) {
        guard let payload = payload else {
            return
        }

        let key = generateKey(chain: chain, txHash: txHash)
        let context = viewContext
        context.performAndWait {
            let data = try? JSONEncoder().encode(payload)
            var json: String?
            if let data = data {
                json = String(data: data, encoding: .utf8)
            }
            
            let storage = PluginStorage(context: context)
            storage.pluginID = PluginID.redPackage.rawValue
            storage.key = key
            storage.value = json
            storage.type = PluginType.redPackage.rawValue
            log.debug("save record with key: \(key) json: \(json)", source: "share")
            try? context.saveOrRollback()
        }
    }

    /// Resturn RedPacketRecord
    /// - Parameters:
    ///   - address: wallet address
    ///   - chain: chain and netword
    ///   - tx: redpacket txid (hash on block)
    /// - Returns: RedPacketRecord
    static func queryRecord(
        chain: BlockChainNetwork,
        tx: String
    ) -> RedPacketPayload? {
        do {
            let key = generateKey(chain: chain, txHash: tx)
            let context = viewContext
            let fetchRequest = PluginStorage.fetchRequest()
            fetchRequest.predicate = NSCompoundPredicate(andPredicateWithSubpredicates: [
                \PluginStorage.pluginID == PluginID.redPackage.rawValue,
                \PluginStorage.key == key
            ])
            fetchRequest.fetchLimit = 1
            guard let json = try context.fetch(fetchRequest).first?.value,
                  let data = json.data(using: .utf8) else {
                return nil
            }

            log.debug("query record with key: \(key) json: \(json)", source: "share")
            return try JSONDecoder().decode(RedPacketPayload.self, from: data)
        } catch {
            return nil
        }
    }
    
    private static func generateKey(chain: BlockChainNetwork, txHash: String) -> String {
        "\(chain.rawValue)-\(txHash)"
    }
}

// nft red package
extension PluginStorageRepository {
    static func save(
        chain: BlockChainNetwork,
        txHash: String,
        nftPayload: NftRedPacketPayload
    ) {

        let key = generateKey(chain: chain, txHash: txHash)
        let context = viewContext
        context.performAndWait {
            let data = try? JSONEncoder().encode(nftPayload)
            var json: String?
            if let data = data {
                json = String(data: data, encoding: .utf8)
            }
            
            let storage = PluginStorage(context: context)
            storage.pluginID = PluginID.redPackage.rawValue
            storage.key = key
            storage.value = json
            storage.type = PluginType.nftRedPackage.rawValue
            log.debug("save record with key: \(key) json: \(json)", source: "share")
            try? context.saveOrRollback()
        }
    }

    /// Resturn NftRedPacketPayload
    /// - Parameters:
    ///   - chain: chain and netword
    ///   - tx: redpacket txid (hash on block)
    /// - Returns: RedPacketRecord
    static func queryNFTRedPacketRecord(
        chain: BlockChainNetwork,
        tx: String
    ) -> NftRedPacketPayload? {
        do {
            let key = generateKey(chain: chain, txHash: tx)
            let context = viewContext
            let fetchRequest = PluginStorage.fetchRequest()
            fetchRequest.predicate = NSCompoundPredicate(andPredicateWithSubpredicates: [
                \PluginStorage.pluginID == PluginID.redPackage.rawValue,
                 \PluginStorage.type == PluginType.nftRedPackage.rawValue,
                \PluginStorage.key == key
            ])
            fetchRequest.fetchLimit = 1
            guard let json = try context.fetch(fetchRequest).first?.value,
                  let data = json.data(using: .utf8) else {
                return nil
            }

            log.debug("query record with key: \(key) json: \(json)", source: "share")
            return try JSONDecoder().decode(NftRedPacketPayload.self, from: data)
        } catch {
            return nil
        }
    }
}
