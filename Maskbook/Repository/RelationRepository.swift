//
//  RelationRepository.swift
//  Maskbook
//
//  Created by Brad Gao on 2022/1/22.
//  Copyright © 2022 dimension. All rights reserved.
//

import CoreData
import CoreDataStack
import Foundation

enum RelationRepository {
    static let viewContext = AppContext.shared.coreDataStack.persistentContainer.viewContext
    static let backgroundContext = AppContext.shared.backgroundContext
    
    static func createRelation(relation: Relation,
                               context: NSManagedObjectContext) {
        context.performAndWait {
            let relationRecord = RelationRecord(context: context)
            relationRecord.personaIdentifier = relation.personaIdentifier
            relationRecord.profileIdentifier = relation.profileIdentifier
            relationRecord.favor = relation.favor == .collected
            relationRecord.createdAt = Date()
            relationRecord.updatedAt = Date()
            try? context.saveOrRollback()
        }
    }
    
    static func queryRelation(personaIdentifier: String,
                              profileIdentifier: String) -> RelationRecord? {
        do {
            let fetchRequest = RelationRecord.sortedFetchRequest
            fetchRequest.predicate = RelationRecord.predicate(profileIdentifier: personaIdentifier,
                                                              personaIdentifier: personaIdentifier,
                                                              favor: nil)
            fetchRequest.fetchLimit = 1
            return try viewContext.fetch(fetchRequest).first
        } catch {
            return nil
        }
    }
    
    static func queryRelations(personaIdentifier: String? = nil,
                               network: String? = nil,
                               nameContains: String? = nil,
                               favor: Relation.Favor? = nil,
                               pageOption: PageOption? = nil,
                               context: NSManagedObjectContext? = viewContext) -> [RelationRecord] {
        do {
            let queryContext = context ?? viewContext
            let fetchRequest = RelationRecord.sortedFetchRequest
            var favored: Bool?
            if let favor = favor {
                favored = favor == .collected
            }
            fetchRequest.predicate = RelationRecord.predicate(profileIdentifier: nil,
                                                              personaIdentifier: personaIdentifier,
                                                              favor: favored)
            if let pageOption = pageOption {
                fetchRequest.fetchLimit = pageOption.pageSize
                fetchRequest.fetchOffset = pageOption.pageOffset
            }
            
            let records = try queryContext.fetch(fetchRequest)
            let filteredRecords = records.filter { record in
                guard let profile = ProfileRepository.queryProfile(identifier: record.profileIdentifier) else {
                    return false
                }
                if let network = network {
                    if profile.network != network {
                        return false
                    }
                }
                if let nameContains = nameContains {
                    guard let nickname = profile.nickname else {
                        return false
                    }
                    return nickname.lowercased().contains(nameContains.lowercased())
                }
                return true
            }
            return filteredRecords
        } catch {
            return []
        }
    }
    
    static func updateRelation(newRelation: Relation) {
        guard let toUpdateRelation = Self.queryRelation(personaIdentifier: newRelation.personaIdentifier,
                                                        profileIdentifier: newRelation.profileIdentifier)
        else {
            return
        }
        toUpdateRelation.favor = newRelation.favor == Relation.Favor.collected
        try? viewContext.saveOrRollback()
    }
    
    static func deleteRelation(personaIdentifier: String,
                               profileIdentifier: String) {
        if let relation = Self.queryRelation(personaIdentifier: personaIdentifier,
                                             profileIdentifier: profileIdentifier) {
            viewContext.delete(relation)
            try? viewContext.saveOrRollback()
        }
    }
    
}
