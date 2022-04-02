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
import SwiftyJSON

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
    
    static func getRelationshipCount() async -> Int {
        await withCheckedContinuation { continuation in
            let fetchRequest = RelationRecord.sortedFetchRequest
            
            var count = 0
            backgroundContext.performAndWait {
                count = (try? backgroundContext.count(for: fetchRequest)) ?? 0
            }
            continuation.resume(returning: count)
        }
    }
    
    static func getRelationBackup() async -> [JSON] {
        await withCheckedContinuation { continuation in
            var relations: [JSON] = []
            let fetchRequest = RelationRecord.sortedFetchRequest
            
            backgroundContext.performAndWait {
                if let relationRecords = try? backgroundContext.fetch(fetchRequest) {
                    relations = relationRecords.compactMap { $0.getBackupJson() }
                }
            }
            continuation.resume(returning: relations)
        }
    }
    
    static func restoreFromJson(_ json: JSON) throws {
        var restoreError: Error?
        backgroundContext.performAndWait {
            for relation in json.arrayValue {
                let relationRecord = RelationRecord(context: backgroundContext)
                relationRecord.personaIdentifier = relation["persona"].string
                relationRecord.profileIdentifier = relation[Relation.CodingKeys.profileIdentifier.rawValue].string
                relationRecord.favor = relation[Relation.CodingKeys.favor.rawValue].boolValue
                relationRecord.createdAt = Date()
                relationRecord.updatedAt = Date()
                
                do {
                    try backgroundContext.saveOrRollback()
                } catch {
                    restoreError = error
                }
            }
        }
        if let restoreError = restoreError {
            throw restoreError
        }
    }
}

extension RelationRecord {
    func getBackupJson() -> JSON? {
        var backupDict = [String: Any]()
        backupDict["favor"] = favor ? 1 : 0
        backupDict["persona"] = personaIdentifier
        backupDict["profile"] = profileIdentifier
        return JSON(backupDict)
    }
}
