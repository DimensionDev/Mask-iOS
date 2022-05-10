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
import Kingfisher
import SwiftyJSON
import MaskWalletCore

enum LinkedProfileMergePolicy: Int, Codable {
    case replace = 0
    case merge
}

enum PersonaRepository {
    static let viewContext = AppContext.shared.coreDataStack.persistentContainer.viewContext
    static let backgroundContext = AppContext.shared.backgroundContext
    
    static func createPersona(persona: Persona,
                              context: NSManagedObjectContext)
    {
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
            let profileIdentifiers = persona.linkedProfiles.map(\.key)
            let profileRecords = ProfileRepository.queryProfiles(identifiers: profileIdentifiers,
                                                                 context: context)
            newPersonaRecord.addToLinkedProfiles(NSSet(array: profileRecords))
            newPersonaRecord.createdAt = Date(milliseconds: persona.createdAt)
            newPersonaRecord.updatedAt = Date(milliseconds: persona.updatedAt)
            try? context.saveOrRollback()
        }
    }
    
    static func createPersona(persona: Api_PersonaGenerationResp,
                              nickname: String,
                              mnemonic: String,
                              path: String,
                              context: NSManagedObjectContext) -> String {
        context.performAndWait {
            let newPersonaRecord = PersonaRecord(context: context)
            newPersonaRecord.identifier = persona.identifier
            newPersonaRecord.nickname = nickname
            newPersonaRecord.mnemonic = mnemonic
            newPersonaRecord.path = path
            newPersonaRecord.withPassword = false
            newPersonaRecord.privateKey = persona.privateKey.jsonString
            newPersonaRecord.publicKey = persona.publicKey.jsonString
            newPersonaRecord.localKey = persona.localKey.jsonString
            newPersonaRecord.hasLogout = false
            newPersonaRecord.initialized = true
            newPersonaRecord.createdAt = Date()
            newPersonaRecord.updatedAt = Date()
            try? context.saveOrRollback()
        }
        return persona.identifier
    }
    
    static func queryPersona(identifier: String,
                             hasPrivateKey: Bool? = nil,
                             hasLogout: Bool? = nil,
                             nameContains: String? = nil,
                             initialized: Bool? = nil,
                             pageOption: PageOption? = nil,
                             context: NSManagedObjectContext? = viewContext) -> PersonaRecord?
    {
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
                              context: NSManagedObjectContext? = viewContext) -> [PersonaRecord]
    {
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
                                          pageOption: PageOption? = nil) -> NSFetchRequest<PersonaRecord>
    {
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
                                      nickname: String?)
    {
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
                              createWhenNotExist: Bool)
    {
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
            let profileIdentifiers = persona.linkedProfiles.map(\.key)
            let profiles = ProfileRepository.queryProfiles(identifiers: profileIdentifiers)
            if let exisitingLinkedProfiles = toUpdatePersona?.linkedProfiles {
                toUpdatePersona?.removeFromLinkedProfiles(exisitingLinkedProfiles)
            }
            toUpdatePersona?.addToLinkedProfiles(NSSet(array: profiles))
            
        case .merge:
            let profileIdentifiers = persona.linkedProfiles.map(\.key)
            let profiles = ProfileRepository.queryProfiles(identifiers: profileIdentifiers)
            toUpdatePersona?.addToLinkedProfiles(NSSet(array: profiles))
        }
        try? viewContext.saveOrRollback()
    }

    // swiftlint:enable cyclomatic_complexity
    
    static func logoutPersona(identifier: String,
                              logout: Bool)
    {
        guard let toUpdatePersona = Self.queryPersona(identifier: identifier) else {
            return
        }
        toUpdatePersona.hasLogout = logout
        try? viewContext.saveOrRollback()
    }
    
    static func deletePersona(identifier: String,
                              safeDelete: Bool? = false)
    {
        do {
            guard let toDeletePersona = Self.queryPersona(identifier: identifier) else {
                return
            }
            if safeDelete == true,
               let privateKey = toDeletePersona.privateKey,
               !privateKey.isEmpty
            {
                // When `safeDelete` is true, and the persona DO have the private key, do not delete
                return
            }
            if let linkedProfiles = toDeletePersona.linkedProfiles {
                for profile in linkedProfiles {
                    if let profileRecord = profile as? ProfileRecord,
                       let toDeleteProfileIdentifier = profileRecord.identifier
                    {
                        ProfileRepository.detachProfile(identifier: toDeleteProfileIdentifier)
                    }
                }
            }
            viewContext.delete(toDeletePersona)
            try viewContext.saveOrRollback()
        } catch {}
    }
    
    static func updatePersonaAvatar(identifier: String, avatar: String) {
        if let personaRecord = Self.queryPersona(identifier: identifier) {
            personaRecord.avatar = avatar
            try? viewContext.saveOrRollback()
            // cache image for later usage
            KingfisherManager.shared.retrieveImage(with: URL(string: avatar)!,
                                                   completionHandler: nil)
        }
    }
    
    static func updatePersonaAvatarData(identifier: String,
                                        avatarData: Data?)
    {
        if let persona = Self.queryPersona(identifier: identifier) {
            persona.avatarData = avatarData
            try? viewContext.saveOrRollback()
        }
    }
 
    static func getPersonaCount() async -> Int {
        await withCheckedContinuation { continuation in
            let fetchRequest = PersonaRecord.sortedFetchRequest
            fetchRequest.predicate = PersonaRecord.predicate(initialized: true)
            
            var count = 0
            backgroundContext.performAndWait {
                count = (try? backgroundContext.count(for: fetchRequest)) ?? 0
            }
            continuation.resume(returning: count)
        }
    }
    
    static func getAssociatedAccountsCount() async -> Int {
        await withCheckedContinuation { continuation in
            let fetchRequest = PersonaRecord.sortedFetchRequest
            fetchRequest.predicate = PersonaRecord.hasLinkedProfiles()
            fetchRequest.relationshipKeyPathsForPrefetching = ["linkedProfiles"]
            
            var count = 0
            backgroundContext.performAndWait {
                if let personasWithLinkedProfiels = try? backgroundContext.fetch(fetchRequest) {
                    count = personasWithLinkedProfiels.reduce(0) { partialResult, record in
                        partialResult + (record.linkedProfiles?.count ?? 0)
                    }
                }
            }
            continuation.resume(returning: count)
        }
    }
    
    static func getPersonasForBackup() async -> [JSON] {
        await withCheckedContinuation { continuation in
            var personas: [JSON] = []
            let fetchRequest = PersonaRecord.sortedFetchRequest
            fetchRequest.predicate = PersonaRecord.predicate(
                identifier: nil,
                hasPrivateKey: nil,
                hasLogout: nil,
                nameContains: nil,
                initialized: true)
            
            backgroundContext.performAndWait {
                if let personaRecords = try? backgroundContext.fetch(fetchRequest) {
                    personas = personaRecords.compactMap { $0.getBackupJson() }
                }
            }
            continuation.resume(returning: personas)
        }
    }
    
    static func restoreFromJson(_ json: JSON) throws {
        var restoreError: Error?
        @InjectedProvider(\.personaManager)
        var personaManager
        
        var usedNames = personaManager.personaRecordsSubject.value.compactMap(\.nickname)
        
        backgroundContext.performAndWait {
            for persona in json.arrayValue {
                let newPersonaRecord = PersonaRecord(context: backgroundContext)
                
                newPersonaRecord.identifier = persona[Persona.CodingKeys.identifier.rawValue].string
                
                let name = persona[Persona.CodingKeys.nickname.rawValue].string
                let newUsedName = PersonaManager.nonrepeatingName(name: name, withNames: usedNames)
                usedNames.append(newUsedName)
                newPersonaRecord.nickname = newUsedName
                
                let mnemonicJson = persona[Persona.CodingKeys.mnemonic.rawValue]
                newPersonaRecord.mnemonic = mnemonicJson[Persona.Mnemonic.CodingKeys.words.rawValue].string
                let mnemonicParameterJson = mnemonicJson[Persona.Mnemonic.CodingKeys.parameter.rawValue]
                newPersonaRecord.path = mnemonicParameterJson[Persona.Mnemonic.Parameter.CodingKeys.path.rawValue].string
                newPersonaRecord.withPassword = mnemonicParameterJson[Persona.Mnemonic.Parameter.CodingKeys.withPassword.rawValue].boolValue
                
                if persona[Persona.CodingKeys.privateKey.rawValue].dictionary != nil {
                    newPersonaRecord.privateKey = persona[Persona.CodingKeys.privateKey.rawValue].rawString()
                }
                if persona[Persona.CodingKeys.publicKey.rawValue].dictionary != nil {
                    newPersonaRecord.publicKey = persona[Persona.CodingKeys.publicKey.rawValue].rawString()
                }
                if persona[Persona.CodingKeys.localKey.rawValue].dictionary != nil {
                    newPersonaRecord.localKey = persona[Persona.CodingKeys.localKey.rawValue].rawString()
                }
                
                newPersonaRecord.hasLogout = false
                newPersonaRecord.initialized = true
                
                if let createdAt = persona[Persona.CodingKeys.createdAt.rawValue].double {
                    newPersonaRecord.createdAt = Date(milliseconds: createdAt)
                } else {
                    newPersonaRecord.createdAt = Date()
                }
                if let updatedAt = persona[Persona.CodingKeys.updatedAt.rawValue].double {
                    newPersonaRecord.updatedAt = Date(milliseconds: updatedAt)
                } else {
                    newPersonaRecord.updatedAt = Date()
                }
                
                for linkedProfile in persona[Persona.CodingKeys.linkedProfiles.rawValue].arrayValue {
                    if let linkedProfileIdentifier = linkedProfile.arrayValue.first?.string as? String {
                        if let profileRecord = ProfileRepository.queryProfile(
                            identifier: linkedProfileIdentifier,
                            context: backgroundContext)
                        {
                            newPersonaRecord.addToLinkedProfiles(profileRecord)
                        }
                    }
                }
                
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

extension PersonaRecord {
    func getBackupJson() -> JSON? {
        guard identifier != nil else {
            return nil
        }
        var backupDict = [String: Any]()
        backupDict[Persona.CodingKeys.identifier.rawValue] = identifier
        backupDict[Persona.CodingKeys.nickname.rawValue] = nickname
        if let privateKey = privateKey {
            backupDict[Persona.CodingKeys.privateKey.rawValue] = JSON(parseJSON: privateKey)
        }
        if let publicKey = publicKey {
            backupDict[Persona.CodingKeys.publicKey.rawValue] = JSON(parseJSON: publicKey)
        }
        if let localKey = localKey {
            backupDict[Persona.CodingKeys.localKey.rawValue] = JSON(parseJSON: localKey)
        }
        if let mnemonic = mnemonic {
            backupDict[Persona.CodingKeys.mnemonic.rawValue] = JSON(parseJSON: mnemonic)
        }
        
        backupDict[Persona.CodingKeys.createdAt.rawValue] = createdAt?.millisecondsSince1970
        backupDict[Persona.CodingKeys.updatedAt.rawValue] = updatedAt?.millisecondsSince1970
        
        var linkedProfilesArray = [[Any]]()
        linkedProfiles?.forEach {
            if let profile = $0 as? ProfileRecord,
               let identifier = profile.identifier
            {
                linkedProfilesArray.append([identifier, ["connectionConfirmState": "confirmed"]])
            }
        }
        backupDict[Persona.CodingKeys.linkedProfiles.rawValue] = linkedProfilesArray
        
        return JSON(backupDict)
    }
}
