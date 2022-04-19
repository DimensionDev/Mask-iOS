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
        nonce: String,
        record: RedPacketRecord
    ) {
        let key = "\(address)-\(chain.chain.rawValue)-\(chain.networkId)-\(nonce)"
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
        nonce: String
    ) -> RedPacketRecord? {
        do {
            let key = "\(address)-\(chain.chain.rawValue)-\(chain.networkId)-\(nonce)"
            let context = viewContext
            let fetchRequest = PluginStorage.fetchRequest()
            fetchRequest.predicate = PluginStorage.predicate(keys: [key], pluginID: PluginID.redPackage.rawValue)
            fetchRequest.fetchLimit = 1
            guard let json = try context.fetch(fetchRequest).first?.value else {
                return nil
            }
            if let data = json.data(using: .utf8) {
                return try? JSONDecoder().decode(RedPacketRecord.self, from: data)
            }
            return nil
        } catch {
            return nil
        }
    }
    
    static func update(address: String, chain: BlockChainNetwork, nonce: String, post: String) {
        guard var record = queryRecord(address: address, chain: chain, nonce: nonce) else {
            return
        }
        record.post = post
        save(address: address, chain: chain, nonce: nonce, record: record)
    }
    
    static func update(address: String, chain: BlockChainNetwork, nonce: String, txHash: String) {
        guard var record = queryRecord(address: address, chain: chain, nonce: nonce) else {
            return
        }
        record.txHash = txHash
        save(address: address, chain: chain, nonce: nonce, record: record)
    }
    
    static func queryPassword(address: String, chain: BlockChainNetwork, nonce: String) -> String? {
        if let record = queryRecord(address: address, chain: chain, nonce: nonce) {
            return record.password
        }
        return nil
    }
}
