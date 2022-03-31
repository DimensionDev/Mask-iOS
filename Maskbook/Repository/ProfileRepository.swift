//
//  ProfileRepository.swift
//  Maskbook
//
//  Created by Brad Gao on 2022/1/17.
//  Copyright © 2022 dimension. All rights reserved.
//

import CoreData
import CoreDataStack
import Foundation
import Kingfisher
import SwiftyJSON

enum ProfileRepository {
    static let viewContext = AppContext.shared.coreDataStack.persistentContainer.viewContext
    static let backgroundContext = AppContext.shared.backgroundContext
    
    static func createProfile(profile: Profile,
                              context: NSManagedObjectContext) {
        context.performAndWait {
            let newProfileRecord = ProfileRecord(context: context)
            newProfileRecord.identifier = profile.identifier
            newProfileRecord.nickname = profile.nickname
            newProfileRecord.network = profile.network
            newProfileRecord.createdAt = Date(timeIntervalSince1970: profile.createdAt)
            newProfileRecord.updatedAt = Date(timeIntervalSince1970: profile.updatedAt)
            if let linkedPersonaIdentifier = profile.linkedPersona {
                if let persona = PersonaRepository.queryPersona(identifier: linkedPersonaIdentifier,
                                                                context: context) {
                    newProfileRecord.linkedPersona = persona
                }                
            }
            try? context.saveOrRollback()
        }
    }
    
    static func queryProfile(identifier: String?,
                             network: String? = nil,
                             nameContains: String? = nil,
                             context: NSManagedObjectContext? = viewContext) -> ProfileRecord? {
        do {
            let queryContext = context ?? viewContext
            let fetchRequest = ProfileRecord.sortedFetchRequest
            fetchRequest.predicate = ProfileRecord.predicate(
                identifier: identifier,
                network: network,
                nameContains: nameContains)
                fetchRequest.fetchLimit = 1
            return try queryContext.fetch(fetchRequest).first
        } catch {
            return nil
        }
    }
    
    static func queryProfiles(identifiers: [String]?,
                              network: String? = nil,
                              nameContains: String? = nil,
                              pageOption: PageOption? = nil,
                              context: NSManagedObjectContext? = viewContext) -> [ProfileRecord] {
        do {
            let queryContext = context ?? viewContext
            let fetchRequest = queryProfilesFetchRequest(identifiers: identifiers,
                                                         network: network,
                                                         nameContains: nameContains,
                                                         pageOption: pageOption)
            return try queryContext.fetch(fetchRequest)
        } catch {
            return []
        }
    }
    
    static func queryProfilesFetchRequest(identifiers: [String]?,
                                          network: String? = nil,
                                          nameContains: String? = nil,
                                          pageOption: PageOption? = nil) -> NSFetchRequest<ProfileRecord> {
        let fetchRequest = ProfileRecord.sortedFetchRequest
        fetchRequest.predicate = ProfileRecord.predicate(
            identifiers: identifiers,
            network: network,
            nameContains: nameContains)
        if let pageOption = pageOption {
            fetchRequest.fetchLimit = pageOption.pageSize
            fetchRequest.fetchOffset = pageOption.pageOffset
        }
        return fetchRequest
    }
    
    static func updateProfile(newProfile: Profile,
                              createWhenNotExist: Bool? = nil) {
        let toUpdateProfile = Self.queryProfile(identifier: newProfile.identifier)
        if toUpdateProfile == nil {
            if createWhenNotExist.boolValue {
                Self.createProfile(profile: newProfile, context: viewContext)
            }
            return
        }
        toUpdateProfile?.nickname = newProfile.nickname
        toUpdateProfile?.updatedAt = Date()
    }
    
    static func removeProfile(identifier: String) {
        if let profile = Self.queryProfile(identifier: identifier) {
            viewContext.delete(profile)
            try? viewContext.saveOrRollback()
        }
    }
    
    // swiftlint:disable empty_count
    static func attachProfile(personaIdentifier: String,
                              profileIdentifier: String) {
        var profileRecord = ProfileRepository.queryProfile(identifier: profileIdentifier)
        
        // Create a new profile if not exist
        if profileRecord == nil {
            guard let newProfile = Profile(identifier: profileIdentifier) else {
                return
            }
            ProfileRepository.createProfile(profile: newProfile, context: ProfileRepository.viewContext)
            profileRecord = ProfileRepository.queryProfile(identifier: profileIdentifier)
        }
        guard let validProfileRecord = profileRecord else {
            return
        }
        guard let validPersonaRecord = PersonaRepository.queryPersona(identifier: personaIdentifier) else {
            return
        }
        // Deattach linked profiles if different persona is already attached
        if let linkedPersona = validProfileRecord.linkedPersona, linkedPersona.identifier != personaIdentifier {
            if let linkedProfiles = linkedPersona.linkedProfiles, linkedProfiles.count > 0 {
                linkedProfiles.forEach {
                    if let profile = $0 as? ProfileRecord, let identifier = profile.identifier {
                        self.detachProfile(identifier: identifier)
                    }
                }
            }
        }
        validProfileRecord.linkedPersona = validPersonaRecord
        validPersonaRecord.addToLinkedProfiles(validProfileRecord)
        try? viewContext.saveOrRollback()
    }
    // swiftlint:enable empty_count
    
    static func detachProfile(identifier: String) {
        guard let profile = Self.queryProfile(identifier: identifier) else {
            return
        }
        guard let persona = profile.linkedPersona else { return }
        persona.removeFromLinkedProfiles(profile)
        profile.linkedPersona = nil
        try? viewContext.saveOrRollback()
    }
    
    static func updateProfileAvatar(identifier: String, avatar: String) {
        if let profile = Self.queryProfile(identifier: identifier) {
            profile.avatar = avatar
            try? viewContext.saveOrRollback()
            // cache image for later usage
            KingfisherManager.shared.retrieveImage(with: URL(string: avatar)!,
                                                   completionHandler: nil)
        }
    }
    
    static func getProfilesCount() async -> Int {
        await withCheckedContinuation { continuation in
            let fetchRequest = ProfileRecord.sortedFetchRequest
            fetchRequest.predicate = ProfileRecord.hasLinkedPersona()
            
            var count = 0
            backgroundContext.performAndWait {
                count = (try? backgroundContext.count(for: fetchRequest)) ?? 0
            }
            continuation.resume(returning: count)
        }
    }
    
    static func getProfilesForBackup() async -> [JSON] {
        await withCheckedContinuation { continuation in
            var profiles: [JSON] = []
            let fetchRequest = ProfileRecord.sortedFetchRequest
            fetchRequest.predicate = ProfileRecord.hasLinkedPersona()
            
            backgroundContext.performAndWait {
                if let profileRecords = try? backgroundContext.fetch(fetchRequest) {
                    profiles = profileRecords.compactMap { $0.getBackupJson() }
                }
            }
            continuation.resume(returning: profiles)
        }
    }
}

extension ProfileRecord {
    func getBackupJson() -> JSON? {
        guard identifier != nil else {
            return nil
        }
        var backupDict = [String: Any]()
        backupDict[Profile.CodingKeys.identifier.rawValue] = identifier
        backupDict[Profile.CodingKeys.nickname.rawValue] = nickname
        backupDict[Profile.CodingKeys.linkedPersona.rawValue] = linkedPersona?.identifier
        backupDict[Profile.CodingKeys.createdAt.rawValue] = createdAt?.timeIntervalSince1970
        backupDict[Profile.CodingKeys.updatedAt.rawValue] = updatedAt?.timeIntervalSince1970
        
        return JSON(backupDict)
    }
}
