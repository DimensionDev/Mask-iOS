//
//  TokenRepository.swift
//  Maskbook
//
//  Created by Hugo L on 2022/7/13.
//  Copyright © 2022 dimension. All rights reserved.
//

import CoreData
import CoreDataStack
import Foundation

final class TokenRepository {
    @InjectedProvider(\.userDefaultSettings)
    private var userSettings
    
    // If you connect to the wallet from imToken, metaMask separately, it may result in duplicate tokens, so let's clean up all the tokens first.
    func cleanTokens() {
        guard !userSettings.hasCleanTokensForBugfix else {
            return
        }
        
        let fetchRequest: NSFetchRequest<NSFetchRequestResult> = NSFetchRequest(entityName: "Token")
        let deleteRequest = NSBatchDeleteRequest(
            fetchRequest: fetchRequest
        )
        deleteRequest.resultType = .resultTypeObjectIDs
        
        let context = AppContext.shared.coreDataStack.persistentContainer.viewContext
        let batchDelete = try? context.execute(deleteRequest)
            as? NSBatchDeleteResult

        guard let deleteResult = batchDelete?.result
            as? [NSManagedObjectID]
            else { return }
        
        userSettings.hasCleanTokensForBugfix = true

        let deletedObjects: [AnyHashable: Any] = [
            NSDeletedObjectsKey: deleteResult
        ]

        // Merge the delete changes into the managed
        // object context
        NSManagedObjectContext.mergeChanges(
            fromRemoteContextSave: deletedObjects,
            into: [context]
        )
        log.debug("delete \(deleteResult.count) tokens", source: "clean tokens")
    }
}

enum TokenRepositoryKey: InjectValueKey {
    static var defaultInjectValue = TokenRepository()
}

extension InjectValues {
    var tokenRepository: TokenRepository {
        Self[TokenRepositoryKey.self]
    }
}
