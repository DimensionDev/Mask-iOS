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
    }
}

// red package
extension PluginStorageRepository {
    struct RedPacketRecord: Codable {
        var id: String
        var contractVersion = "4"
        var post: String?
        var password: String
        var txHash: String?
        var type: String
    }
    
    static func save(
        address: String,
        chain: BlockChainNetwork,
        txHash: String,
        record: RedPacketRecord
    ) {
        let key = "\(address)-\(chain.chain.rawValue)-\(chain.networkId)-\(txHash)"
        let context = viewContext
        context.performAndWait {
            let data = try? JSONEncoder().encode(record)
            var json: String?
            if let data = data {
                json = String(data: data, encoding: .utf8)
            }
            
            let storage = PluginStorage(context: context)
            storage.pluginID = PluginID.redPackage.rawValue
            storage.key = key
            storage.value = json
            storage.type = PluginType.redPackage.rawValue
            try? context.saveOrRollback()
        }
    }
    
    static func queryRecord(
        address: String,
        chain: BlockChainNetwork,
        txHash: String
    ) -> RedPacketRecord? {
        do {
            let key = "\(address)-\(chain.chain.rawValue)-\(chain.networkId)-\(txHash)"
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
            return try? JSONDecoder().decode(RedPacketRecord.self, from: data)
        } catch {
            return nil
        }
    }


    /// Resturn RedPacketRecord
    /// - Parameters:
    ///   - address: wallet address
    ///   - chain: chain and netword
    ///   - tx: redpacket txid (hash on block)
    /// - Returns: RedPacketRecord
    static func queryRecord(
        address: String,
        chain: BlockChainNetwork,
        tx: String
    ) -> RedPacketRecord? {
        do {
            let key = "\(address)-\(chain.rawValue)-\(tx)"
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

            return try JSONDecoder().decode(RedPacketRecord.self, from: data)
        } catch {
            return nil
        }
    }
    
    static func update(address: String, chain: BlockChainNetwork, txHash: String, post: String) {
        guard var record = queryRecord(address: address, chain: chain, txHash: txHash) else {
            return
        }
        record.post = post
        save(address: address, chain: chain, txHash: txHash, record: record)
    }
    
    static func queryPassword(address: String, chain: BlockChainNetwork, txHash: String) -> String? {
        if let record = queryRecord(address: address, chain: chain, txHash: txHash) {
            return record.password
        }
        return nil
    }
}
