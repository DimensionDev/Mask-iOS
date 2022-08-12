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


    static func queryCollectible(
        contractAddress: String,
        network: BlockChainNetwork,
        tokenId: String
    ) -> Collectible? {
        do {
            let queryContext = viewContext
            let fetchRequest = Collectible.sortedFetchRequest
            fetchRequest.predicate = Collectible.predicate(
                contractAddress: contractAddress,
                networkId: network.networkId,
                tokenId: tokenId,
                enabled: true
            )
            fetchRequest.fetchLimit = 1
            return try queryContext.fetch(fetchRequest).first
        } catch {
            return nil
        }
    }
}
