//
//  CollectibleRepository.swift
//  Maskbook
//
//  Created by xiaojian sun on 2022/8/11.
//  Copyright © 2022 dimension. All rights reserved.
//

import CoreData
import CoreDataStack
import Foundation

enum CollectibleRepository {
    static let viewContext = AppContext.shared.coreDataStack.persistentContainer.viewContext

    static func queryCollection(
        address: String,
        network: BlockChainNetwork,
        tokenId: String
    ) -> Collectible? {
        do {
            let queryContext = viewContext
            let fetchRequest = Collectible.sortedFetchRequest
            fetchRequest.predicate = Collectible.predicate(address: address, networkId: network.networkId, tokenId: tokenId)
            fetchRequest.fetchLimit = 1
            return try queryContext.fetch(fetchRequest).first
        } catch {
            return nil
        }
    }
}
