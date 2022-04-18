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

enum PluginStorageRepository {
    static let viewContext = AppContext.shared.coreDataStack.persistentContainer.viewContext
    static let backgroundContext = AppContext.shared.backgroundContext
    
    enum PluginID: String {
        case redPackage
    }
}

// red package
extension PluginStorageRepository {
    static func save(address: String, chain: BlockChainNetwork, nonce: String, password: String) {
        let key = "\(address)-\(chain.chain.rawValue)-\(chain.networkId)-\(nonce)"
        let context = backgroundContext
        context.performAndWait {
            let storage = PluginStorage(context: context)
            storage.pluginID = PluginID.redPackage.rawValue
            storage.key = key
            storage.value = password.data(using: .utf8)
            try? context.saveOrRollback()
        }
    }
    
    static func queryPassword(address: String, chain: BlockChainNetwork, nonce: String) -> String? {
        do {
            let key = "\(address)-\(chain.chain.rawValue)-\(chain.networkId)-\(nonce)"
            let context = viewContext
            let fetchRequest = PluginStorage.fetchRequest()
            fetchRequest.predicate = PluginStorage.predicate(keys: [key], pluginID: PluginID.redPackage.rawValue)
            fetchRequest.fetchLimit = 1
            guard let data = try context.fetch(fetchRequest).first?.value else {
                return nil
            }
            return String(data: data, encoding: .utf8)
        } catch {
            return nil
        }
    }
}
