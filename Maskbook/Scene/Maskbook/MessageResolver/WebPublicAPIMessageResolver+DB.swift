//
//  WebPublicAPIMessageResolver+DB.swift
//  Maskbook
//
//  Created by Brad Gao on 2022/1/19.
//  Copyright © 2022 dimension. All rights reserved.
//

import CoreData
import CoreDataStack
import Foundation
import SwiftyJSON
import Kingfisher

extension Persona {
    init?(fromRecord personaRecord: PersonaRecord) {
        guard let recordIdentifier = personaRecord.identifier else {
            return nil
        }
        let decoder = JSONDecoder()
        identifier = recordIdentifier
        nickname = personaRecord.nickname
        if let privateKeyData = personaRecord.privateKey?.data(using: .utf8) {
            privateKey = try? decoder.decode(JsonWebKey.self, from: privateKeyData)
        } else {
            privateKey = nil
        }
        
        if let publicKeyData = personaRecord.publicKey?.data(using: .utf8) {
            publicKey = try? decoder.decode(JsonWebKey.self, from: publicKeyData)
        } else {
            publicKey = nil
        }
        
        if let localKeyData = personaRecord.localKey?.data(using: .utf8) {
            localKey = try? decoder.decode(JsonWebKey.self, from: localKeyData)
        } else {
            localKey = nil
        }

        if let mnemonicWords = personaRecord.mnemonic,
           let path = personaRecord.path {
            mnemonic = Mnemonic(words: mnemonicWords,
                                parameter: Mnemonic.Parameter(path: path,
                                                              withPassword: personaRecord.withPassword))
        } else {
            mnemonic = nil
        }
        hasLogout = personaRecord.hasLogout
        uninitialized = !personaRecord.initialized
        createdAt = personaRecord.createdAt?.timeIntervalSince1970 ?? Date().timeIntervalSince1970
        updatedAt = personaRecord.updatedAt?.timeIntervalSince1970 ?? Date().timeIntervalSince1970
        var linkedProfilesMap = [String: LinkedProfileDetails]()
        personaRecord.linkedProfiles?.forEach {
            if let profile = $0 as? ProfileRecord,
               let identifier = profile.identifier {
                linkedProfilesMap[identifier] = LinkedProfileDetails(connectionConfirmState: .confirmed)
            }
        }
        self.linkedProfiles = linkedProfilesMap
    }
}

extension Profile {
    init?(fromRecord profileRecord: ProfileRecord) {
        guard let recordIdentifier = profileRecord.identifier else {
            return nil
        }
        identifier = recordIdentifier
        nickname = profileRecord.nickname
        network = profileRecord.network ?? ProfileSocialPlatform.twitter.url
        linkedPersona = profileRecord.linkedPersona?.identifier
        createdAt = profileRecord.createdAt?.timeIntervalSince1970 ?? Date().timeIntervalSince1970
        updatedAt = profileRecord.updatedAt?.timeIntervalSince1970 ?? Date().timeIntervalSince1970
    }
}

extension Relation {
    init?(from relationRecord: RelationRecord) {
        guard let recordPersonaIdentifier = relationRecord.personaIdentifier,
              let recordProfileIdentifier = relationRecord.profileIdentifier else {
                  return nil
              }
        personaIdentifier = recordPersonaIdentifier
        profileIdentifier = recordProfileIdentifier
        network = Profile.getSocialPlatformFromIdentifier(recordProfileIdentifier)?.url ??
        ProfileSocialPlatform.twitter.url
        favor = relationRecord.favor ? .collected : .uncollected
    }
}

// MARK: - Persona methods handler
extension WebPublicApiMessageResolver {
    @discardableResult
    func createPersona(messageData: Data) -> Bool {
        guard let request = try? decoder.decode(WebPublicApiMessageRequest<CreatePersonaParam>.self, from: messageData),
              let newPersona = request.params?.persona else {
                  return false
              }
        PersonaRepository.createPersona(persona: newPersona,
                                        context: PersonaRepository.viewContext)
        sendResponseToWebView(response: newPersona, id: request.id)
        return true
    }
    
    @discardableResult
    func queryPersona(messageData: Data) -> Bool {
        guard let request = try? decoder.decode(WebPublicApiMessageRequest<QueryPersonaParam>.self, from: messageData) else {
            return false
        }
        let persona: Persona? = {
            if let identifier = request.params?.identifier,
               let foundPersonaRecord = PersonaRepository.queryPersona(identifier: identifier,
                                                                       hasPrivateKey: request.params?.hasPrivateKey,
                                                                       hasLogout: request.params?.includeLogout,
                                                                       nameContains: request.params?.nameContains,
                                                                       pageOption: request.params?.pageOptions) {
                return Persona(fromRecord: foundPersonaRecord)
            }
            return nil
        }()
        sendResponseToWebView(response: persona, id: request.id)
        return true
    }
    
    @discardableResult
    func queryPersonas(messageData: Data) -> Bool {
        guard let request = try? decoder.decode(WebPublicApiMessageRequest<QueryPersonasParam>.self,
                                                from: messageData)
        else {
            return false
        }
        let personaRecords = PersonaRepository.queryPersonas(identifiers: request.params?.identifiers,
                                                             hasPrivateKey: request.params?.hasPrivateKey,
                                                             hasLogout: request.params?.includeLogout,
                                                             nameContains: request.params?.nameContains,
                                                             initialized: request.params?.initialized,
                                                             pageOption: request.params?.pageOptions)
        let personas = personaRecords.compactMap {
            Persona(fromRecord: $0)
        }
        sendResponseToWebView(response: personas, id: request.id)
        return true
    }
    
    @discardableResult
    func queryPersonaByProfile(messageData: Data) -> Bool {
        guard let request = try? decoder.decode(WebPublicApiMessageRequest<QueryPersonaByProfileParam>.self,
                                                from: messageData)
        else {
            return false
        }
        var identifiers = [String]()
        if let identifier = request.params?.options?.profileIdentifier {
            identifiers.append(identifier)
        }
        let profiles = ProfileRepository.queryProfiles(identifiers: identifiers,
                                                      network: nil,
                                                      nameContains: request.params?.options?.nameContains,
                                                      pageOption: request.params?.options?.pageOptions)
        let persona: Persona? = {
            if let profile = profiles.first, let personaRecord = profile.linkedPersona {
                return Persona(fromRecord: personaRecord)
            } else {
                return nil
            }
        }()
        sendResponseToWebView(response: persona, id: request.id)
        return true
    }
    
    @discardableResult
    func updatePersona(messageData: Data) -> Bool {
        guard let request = try? decoder.decode(WebPublicApiMessageRequest<UpdatePersonaParam>.self,
                                                from: messageData)
        else {
            return false
        }
        guard let newPersona = request.params?.persona else {
            return false
        }
        let mergePolicy = request.params?.options?.linkedProfileMergePolicy ?? .replace
        let deleteUndefinedFields = request.params?.options?.deleteUndefinedFields ?? false
        let protectPk = request.params?.options?.protectPrivateKey ?? false
        let createWhenNotExist = request.params?.options?.createWhenNotExist ?? false
        PersonaRepository.updatePersona(persona: newPersona,
                                        linkedProfileMergePolicy: mergePolicy,
                                        deleteUndefinedFields: deleteUndefinedFields,
                                        protectPrivateKey: protectPk,
                                        createWhenNotExist: createWhenNotExist)
        sendResponseToWebView(response: true, id: request.id)
        return true
    }
    
    @discardableResult
    func deletePersona(messageData: Data) -> Bool {
        guard let request = try? decoder.decode(WebPublicApiMessageRequest<DeletePersonaParam>.self,
                                                from: messageData)
        else {
            return false
        }
        guard let toDeleteIdentifier = request.params?.identifier else {
            return false
        }
        PersonaRepository.deletePersona(identifier: toDeleteIdentifier,
                                        safeDelete: request.params?.options?.safeDelete)
        sendResponseToWebView(response: true, id: request.id)
        return true
    }
}

// MARK: - Profile methods handler
extension WebPublicApiMessageResolver {
    @discardableResult
    func createProfile(messageData: Data) -> Bool {
        guard let request = try? decoder.decode(WebPublicApiMessageRequest<CreateProfileParam>.self, from: messageData),
              let newProfile = request.params?.profile else {
                  return false
              }
        ProfileRepository.createProfile(profile: newProfile,
                                        context: ProfileRepository.viewContext)
        sendResponseToWebView(response: true, id: request.id)
        return true
    }
    
    @discardableResult
    func queryProfile(messageData: Data) -> Bool {
        guard let request = try? decoder.decode(WebPublicApiMessageRequest<QueryProfileParam>.self, from: messageData) else {
            return false
        }
        var identifiers = [String]()
        if let identifier = request.params?.options?.identifier {
            identifiers.append(identifier)
        }
        let profileRecords = ProfileRepository.queryProfiles(identifiers: identifiers,
                                                            network: request.params?.options?.network,
                                                            nameContains: request.params?.options?.nameContains,
                                                            pageOption: request.params?.options?.pageOptions)
        let profile: Profile? = {
            if let profileRecord = profileRecords.first {
                return Profile(fromRecord: profileRecord)
            } else {
                return nil
            }
        }()
        sendResponseToWebView(response: profile, id: request.id)
        return true
    }
    
    @discardableResult
    func queryProfiles(messageData: Data) -> Bool {
        guard let request = try? decoder.decode(WebPublicApiMessageRequest<QueryProfilesParam>.self,
                                                from: messageData) else {
            return false
        }
        let profileRecords = ProfileRepository.queryProfiles(identifiers: request.params?.identifiers,
                                                             network: request.params?.network,
                                                             nameContains: request.params?.nameContains,
                                                             pageOption: request.params?.pageOptions)
        let profiles = profileRecords.compactMap {
            Profile(fromRecord: $0)
        }
        sendResponseToWebView(response: profiles, id: request.id)
        return true
    }
    
    @discardableResult
    func deleteProfile(messageData: Data) -> Bool {
        guard let request = try? decoder.decode(WebPublicApiMessageRequest<DeleteProfileParam>.self,
                                                from: messageData) else {
            return false
        }
        guard let identifier = request.params?.identifier else {
            return false
        }
        ProfileRepository.removeProfile(identifier: identifier)
        sendResponseToWebView(response: true, id: request.id)
        return true
    }
    
    @discardableResult
    func updateProfile(messageData: Data) -> Bool {
        guard let request = try? decoder.decode(WebPublicApiMessageRequest<UpdateProfileParam>.self,
                                                from: messageData) else {
            return false
        }
        guard let newProfile = request.params?.profile else {
            return false
        }
        ProfileRepository.updateProfile(newProfile: newProfile,
                                        createWhenNotExist: request.params?.options?.createWhenNotExist)
        sendResponseToWebView(response: true, id: request.id)
        return true
    }
    
    @discardableResult
    func attachProfile(messageData: Data) -> Bool {
        guard let request = try? decoder.decode(WebPublicApiMessageRequest<AttachProfileParam>.self,
                                                from: messageData) else {
            return false
        }
        guard let profileIdentifier = request.params?.profileIdentifier,
              let personaIdentifier = request.params?.personaIdentifier else {
                  return false
              }
        PersonaManager.attachProfile(personaIdentifier: personaIdentifier,
                                     profileIdentifier: profileIdentifier)
        sendResponseToWebView(response: true, id: request.id)
        return true
    }
    
    @discardableResult
    func detachProfile(messageData: Data) -> Bool {
        guard let request = try? decoder.decode(WebPublicApiMessageRequest<DetachProfileParam>.self,
                                                from: messageData) else {
            return false
        }
        guard let profileIdentifier = request.params?.identifier else {
            return false
        }
        PersonaManager.detachProfile(identifier: profileIdentifier)
        sendResponseToWebView(response: true, id: request.id)
        return true
    }
}

// MARK: - Relation methods handler
extension WebPublicApiMessageResolver {
    @discardableResult
    func createRelation(messageData: Data) -> Bool {
        guard let request = try? decoder.decode(WebPublicApiMessageRequest<CreateRelationParam>.self,
                                                from: messageData) else {
            return false
        }
        guard let newRelation = request.params?.relation else {
            return false
        }
        RelationRepository.createRelation(relation: newRelation, context: RelationRepository.viewContext)
        sendResponseToWebView(response: newRelation, id: request.id)
        return true
    }
    
    @discardableResult
    func queryRelation(messageData: Data) -> Bool {
        guard let request = try? decoder.decode(WebPublicApiMessageRequest<QueryRelationParam>.self,
                                                from: messageData) else {
            return false
        }
        guard let param = request.params else { return false }
        let relations: [Relation] = {
            if let personaIdentifier = param.personaIdentifier,
               let profileIdentifier = param.profileIdentifier {
                if let relationRecord = RelationRepository.queryRelation(personaIdentifier: personaIdentifier,
                                                                         profileIdentifier: profileIdentifier),
                   let relation = Relation(from: relationRecord) {
                    return [relation]
                }
            } else {
                let relations = RelationRepository.queryRelations()
                return relations.compactMap { Relation(from: $0) }
            }
            return []
        }()
        sendResponseToWebView(response: relations, id: request.id)
        return true
    }
    
    @discardableResult
    func queryRelations(messageData: Data) -> Bool {
        guard let request = try? decoder.decode(WebPublicApiMessageRequest<QueryRelationsParam>.self,
                                                from: messageData) else {
            return false
        }
        // TODO: Favor from JS should not be String type
        let relationRecords = RelationRepository.queryRelations(personaIdentifier: request.params?.options?.personaIdentifier,
                                                                network: request.params?.options?.network,
                                                                nameContains: request.params?.options?.nameContains,
                                                                favor: nil,
                                                                pageOption: request.params?.options?.pageOption)
        let relations = relationRecords.compactMap {
            Relation(from: $0)
        }
        sendResponseToWebView(response: relations, id: request.id)
        return true
    }
    
    @discardableResult
    func updateRelation(messageData: Data) -> Bool {
        guard let request = try? decoder.decode(WebPublicApiMessageRequest<UpdateRelationParam>.self,
                                                from: messageData) else {
            return false
         }
        guard let newRelation = request.params?.relation else {
            return false
        }
        RelationRepository.updateRelation(newRelation: newRelation)
        sendResponseToWebView(response: true, id: request.id)
        return true
    }
    
    @discardableResult
    func queryAvatar(messageData: Data) -> Bool {
        guard let request = try? decoder.decode(WebPublicApiMessageRequest<QueryAvatarParam>.self,
                                                from: messageData)
        else {
            return false
        }
        guard let identifier = request.params?.identifier else { return false }
        if let profileRecord = ProfileRepository.queryProfile(identifier: identifier) {
            if let avatar = profileRecord.avatar {
                self.getImageFromKingfisher(url: avatar, requestId: request.id)
                return true
            }
        }
        if let personarecord = PersonaRepository.queryPersona(identifier: identifier) {
            if let avatar = personarecord.avatar {
                self.getImageFromKingfisher(url: avatar, requestId: request.id)
                return true
            }
        }
        return false
    }
    
    @discardableResult
    func storeAvatar(messageData: Data) -> Bool {
        guard let request = try? decoder.decode(WebPublicApiMessageRequest<StoreAvatarParam>.self,
                                                from: messageData)
        else {
            return false
        }
        guard let identifier = request.params?.identifier else { return false }
        guard let avatar = request.params?.avatar else { return false }
        if ProfileRepository.queryProfile(identifier: identifier) != nil {
            ProfileRepository.updateProfileAvatar(identifier: identifier, avatar: avatar)
            return true
        }
        if PersonaRepository.queryPersona(identifier: identifier) != nil {
            PersonaRepository.updatePersonaAvatar(identifier: identifier, avatar: avatar)
            return true
        }
        return false
    }
    
    func getImageFromKingfisher(url: String, requestId: String) {
        KingfisherManager.shared.retrieveImage(with: URL(string: url)!,
                                               options: nil,
                                               progressBlock: nil,
                                               downloadTaskUpdated: nil) { [weak self] result in
            switch result {
            case .success(let value):
                self?.sendResponseToWebView(response: value.image.convertImageToBase64String(), id: requestId)
                
            case .failure(let error):
                log.debug("\(error)")
            }
        }
    }
}
