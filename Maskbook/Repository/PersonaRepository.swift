//
//  PersonaRepository.swift
//  Maskbook
//
//  Created by Brad Gao on 2022/1/14.
//  Copyright © 2022 dimension. All rights reserved.
//

import CoreData
import CoreDataStack
import Foundation

enum LinkedProfileMergePolicy: Int, Codable {
    case replace = 0
    case merge
}

enum PersonaRepository {
    static let viewContext = AppContext.shared.coreDataStack.persistentContainer.viewContext
    static let backgroundContext = AppContext.shared.backgroundContext
    
    static func createPersona(persona: Persona,
                              context: NSManagedObjectContext) {
        context.performAndWait {
            let newPersonaRecord = PersonaRecord(context: context)
            newPersonaRecord.identifier = persona.identifier
            newPersonaRecord.nickname = persona.nickname
            newPersonaRecord.mnemonic = persona.mnemonic?.words
            newPersonaRecord.path = persona.mnemonic?.parameter.path
            newPersonaRecord.withPassword = persona.mnemonic?.parameter.withPassword ?? false
            newPersonaRecord.privateKey = persona.privateKey?.rawString
            newPersonaRecord.publicKey = persona.publicKey?.rawString
            newPersonaRecord.localKey = persona.localKey?.rawString
            newPersonaRecord.hasLogout = persona.hasLogout ?? false
            newPersonaRecord.initialized = !(persona.uninitialized ?? false)
            if persona.privateKey != nil {
                print("persona uninitialized is \(persona.uninitialized)")
                print("Persona initialized is \(!(persona.uninitialized ?? true))")
            }
            let profileIdentifiers = persona.linkedProfiles.map { $0.key }
            let profileRecords = ProfileRepository.queryProfiles(identifiers: profileIdentifiers,
                                                                 context: context)
            newPersonaRecord.addToLinkedProfiles(NSSet(array: profileRecords))
            newPersonaRecord.createdAt = Date(timeIntervalSince1970: persona.createdAt)
            newPersonaRecord.updatedAt = Date(timeIntervalSince1970: persona.updatedAt)
            try? context.saveOrRollback()
        }
    }
    
    static func queryPersona(identifier: String,
                             hasPrivateKey: Bool? = nil,
                             hasLogout: Bool? = nil,
                             nameContains: String? = nil,
                             initialized: Bool? = nil,
                             pageOption: PageOption? = nil,
                             context: NSManagedObjectContext? = viewContext) -> PersonaRecord? {
        do {
            let queryContext = context ?? viewContext
            let fetchRequest = PersonaRecord.sortedFetchRequest
            fetchRequest.predicate = PersonaRecord.predicate(
                identifier: identifier,
                hasPrivateKey: hasPrivateKey,
                hasLogout: hasLogout,
                nameContains: nameContains,
                initialized: initialized)
            if let pageOption = pageOption {
                fetchRequest.fetchLimit = pageOption.pageSize
                fetchRequest.fetchOffset = pageOption.pageOffset
            }
            
            return try queryContext.fetch(fetchRequest).first
        } catch {
            return nil
        }
    }
    
    static func queryPersonas(identifiers: [String]?,
                              hasPrivateKey: Bool? = nil,
                              hasLogout: Bool? = nil,
                              nameContains: String? = nil,
                              initialized: Bool? = nil,
                              pageOption: PageOption? = nil,
                              context: NSManagedObjectContext? = viewContext) -> [PersonaRecord] {
        do {
            let queryContext = context ?? viewContext
            let fetchRequest = PersonaRepository.queryPersonasFetchRequest(identifiers: identifiers,
                                                                           hasPrivateKey: hasPrivateKey,
                                                                           hasLogout: hasLogout,
                                                                           nameContains: nameContains,
                                                                           initialized: initialized,
                                                                           pageOption: pageOption)
            return try queryContext.fetch(fetchRequest)
        } catch {
            return []
        }
    }
    
    static func queryPersonasFetchRequest(identifiers: [String]?,
                                          hasPrivateKey: Bool? = nil,
                                          hasLogout: Bool? = nil,
                                          nameContains: String? = nil,
                                          initialized: Bool? = nil,
                                          pageOption: PageOption? = nil) -> NSFetchRequest<PersonaRecord> {
        let fetchRequest = PersonaRecord.sortedFetchRequest
        fetchRequest.predicate = PersonaRecord.predicate(
            identifiers: identifiers,
            hasPrivateKey: hasPrivateKey,
            hasLogout: hasLogout,
            nameContains: nameContains,
            initialized: initialized)
        if let pageOption = pageOption {
            fetchRequest.fetchLimit = pageOption.pageSize
            fetchRequest.fetchOffset = pageOption.pageOffset
        }
        return fetchRequest
    }
    
    static func updatePersonaNickname(identifier: String,
                                      nickname: String?) {
        if let persona = Self.queryPersona(identifier: identifier) {
            persona.nickname = nickname
            try? viewContext.saveOrRollback()
        }
    }
    
    // swiftlint:disable cyclomatic_complexity
    static func updatePersona(persona: Persona,
                              linkedProfileMergePolicy: LinkedProfileMergePolicy,
                              deleteUndefinedFields: Bool,
                              protectPrivateKey: Bool,
                              createWhenNotExist: Bool) {
        let toUpdatePersona = Self.queryPersona(identifier: persona.identifier)
        if toUpdatePersona == nil {
            if createWhenNotExist {
                Self.createPersona(persona: persona, context: viewContext)
            }
            return
        }
        if persona.privateKey == nil, toUpdatePersona?.privateKey != nil, !protectPrivateKey {
            toUpdatePersona?.privateKey = nil
        } else {
            toUpdatePersona?.privateKey = persona.privateKey?.rawString
        }
        if let nickname = persona.nickname {
            toUpdatePersona?.nickname = nickname
        } else if deleteUndefinedFields {
            toUpdatePersona?.nickname = nil
        }
        if let publicKey = persona.publicKey {
            toUpdatePersona?.publicKey = publicKey.rawString
        } else if deleteUndefinedFields {
            toUpdatePersona?.publicKey = nil
        }
        if let localKey = persona.localKey {
            toUpdatePersona?.localKey = localKey.rawString
        } else if deleteUndefinedFields {
            toUpdatePersona?.localKey = nil
        }
        if let mnemonic = persona.mnemonic {
            toUpdatePersona?.mnemonic = mnemonic.words
            toUpdatePersona?.path = mnemonic.parameter.path
            toUpdatePersona?.withPassword = mnemonic.parameter.withPassword
        } else if deleteUndefinedFields {
            toUpdatePersona?.mnemonic = nil
        }
        if let hasLogout = persona.hasLogout {
            toUpdatePersona?.hasLogout = hasLogout
        }
        if let uninitialized = persona.uninitialized {
            toUpdatePersona?.initialized = !uninitialized
        }
        switch linkedProfileMergePolicy {
        case .replace:
            let profileIdentifiers = persona.linkedProfiles.map { $0.key }
            let profiles = ProfileRepository.queryProfiles(identifiers: profileIdentifiers)
            if let exisitingLinkedProfiles = toUpdatePersona?.linkedProfiles {
                toUpdatePersona?.removeFromLinkedProfiles(exisitingLinkedProfiles)
            }
            toUpdatePersona?.addToLinkedProfiles(NSSet(array: profiles))
            
        case .merge:
            let profileIdentifiers = persona.linkedProfiles.map { $0.key }
            let profiles = ProfileRepository.queryProfiles(identifiers: profileIdentifiers)
            toUpdatePersona?.addToLinkedProfiles(NSSet(array: profiles))
        }
        try? viewContext.saveOrRollback()
    }
    // swiftlint:enable cyclomatic_complexity
    
    static func logoutPersona(identifier: String,
                              logout: Bool) {
        guard let toUpdatePersona = Self.queryPersona(identifier: identifier) else {
            return
        }
        toUpdatePersona.hasLogout = logout
        try? viewContext.saveOrRollback()
    }
    
    static func deletePersona(identifier: String,
                              safeDelete: Bool? = false) {
        do {
            guard let toDeletePersona = Self.queryPersona(identifier: identifier) else {
                return
            }
            if safeDelete == true,
               let privateKey = toDeletePersona.privateKey,
               !privateKey.isEmpty {
                // When `safeDelete` is true, and the persona DO have the private key, do not delete
                return
            }
            if let linkedProfiles = toDeletePersona.linkedProfiles {
                for profile in linkedProfiles {
                    if let profileRecord = profile as? ProfileRecord,
                       let toDeleteProfileIdentifier = profileRecord.identifier {
                        ProfileRepository.detachProfile(identifier: toDeleteProfileIdentifier)
                    }
                }
            }
            viewContext.delete(toDeletePersona)
            try viewContext.saveOrRollback()
        } catch {
            
        }
    }
}
