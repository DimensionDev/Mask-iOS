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

struct WebPublicApiResponse<R: Encodable> {
    let response: R
}

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
    func createPersona(messageData: Data) -> WebPublicApiResponse<Persona?> {
        guard let request = try? decoder.decode(WebPublicApiMessageRequest<CreatePersonaParam>.self, from: messageData),
              let newPersona = request.params?.persona else {
                  return WebPublicApiResponse(response: nil)
              }
        PersonaRepository.createPersona(persona: newPersona,
                                        context: PersonaRepository.viewContext)
        return WebPublicApiResponse(response: newPersona)
    }
    
    func queryPersona(messageData: Data) -> WebPublicApiResponse<Persona?> {
        guard let request = try? decoder.decode(WebPublicApiMessageRequest<QueryPersonaParam>.self, from: messageData) else {
            return WebPublicApiResponse(response: nil)
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
        return WebPublicApiResponse(response: persona)
    }
    
    func queryPersonas(messageData: Data) -> WebPublicApiResponse<[Persona]> {
        guard let request = try? decoder.decode(WebPublicApiMessageRequest<QueryPersonasParam>.self,
                                                from: messageData)
        else {
            return WebPublicApiResponse(response: [])
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
        return WebPublicApiResponse(response: personas)
    }
    
    @discardableResult
    func queryPersonaByProfile(messageData: Data) -> WebPublicApiResponse<Persona?> {
        guard let request = try? decoder.decode(WebPublicApiMessageRequest<QueryPersonaByProfileParam>.self,
                                                from: messageData)
        else {
            return WebPublicApiResponse(response: nil)
        }
        let profiles = ProfileRepository.queryProfile(identifier: request.params?.options?.profileIdentifier,
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
        return WebPublicApiResponse(response: persona)
    }
    
    func updatePersona(messageData: Data) -> WebPublicApiResponse<Bool> {
        guard let request = try? decoder.decode(WebPublicApiMessageRequest<UpdatePersonaParam>.self,
                                                from: messageData)
        else {
            return WebPublicApiResponse(response: false)
        }
        guard let newPersona = request.params?.persona else {
            return WebPublicApiResponse(response: false)
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
        return WebPublicApiResponse(response: true)
    }
    
    func deletePersona(messageData: Data) -> WebPublicApiResponse<Bool> {
        guard let request = try? decoder.decode(WebPublicApiMessageRequest<DeletePersonaParam>.self,
                                                from: messageData)
        else {
            return WebPublicApiResponse(response: false)
        }
        guard let toDeleteIdentifier = request.params?.identifier else {
            return WebPublicApiResponse(response: false)
        }
        PersonaRepository.deletePersona(identifier: toDeleteIdentifier,
                                        safeDelete: request.params?.options?.safeDelete)
        return WebPublicApiResponse(response: true)
    }
}

// MARK: - Profile methods handler
extension WebPublicApiMessageResolver {
    func createProfile(messageData: Data) -> WebPublicApiResponse<Profile?> {
        guard let request = try? decoder.decode(WebPublicApiMessageRequest<CreateProfileParam>.self, from: messageData),
              let newProfile = request.params?.profile else {
                  return WebPublicApiResponse(response: nil)
              }
        ProfileRepository.createProfile(profile: newProfile,
                                        context: ProfileRepository.viewContext)
        return WebPublicApiResponse(response: newProfile)
    }
    
    func queryProfile(messageData: Data) -> WebPublicApiResponse<Profile?> {
        guard let request = try? decoder.decode(WebPublicApiMessageRequest<QueryProfileParam>.self, from: messageData) else {
            return WebPublicApiResponse(response: nil)
        }
        let profileRecords = ProfileRepository.queryProfile(identifier: request.params?.options?.identifier,
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
        return WebPublicApiResponse(response: profile)
    }
    
    func queryProfiles(messageData: Data) -> WebPublicApiResponse<[Profile]> {
        guard let request = try? decoder.decode(WebPublicApiMessageRequest<QueryProfilesParam>.self,
                                                from: messageData) else {
            return WebPublicApiResponse(response: [])
        }
        let profileRecords = ProfileRepository.queryProfiles(identifiers: request.params?.identifiers,
                                                             network: request.params?.network,
                                                             nameContains: request.params?.nameContains,
                                                             pageOption: request.params?.pageOptions)
        let profiles = profileRecords.compactMap {
            Profile(fromRecord: $0)
        }
        return WebPublicApiResponse(response: profiles)
    }
    
    func deleteProfile(messageData: Data) -> WebPublicApiResponse<Bool> {
        guard let request = try? decoder.decode(WebPublicApiMessageRequest<DeleteProfileParam>.self,
                                                from: messageData) else {
            return WebPublicApiResponse(response: false)
        }
        guard let identifier = request.params?.identifier else {
            return WebPublicApiResponse(response: false)
        }
        ProfileRepository.removeProfile(identifier: identifier)
        return WebPublicApiResponse(response: true)
    }
    
    func updateProfile(messageData: Data) -> WebPublicApiResponse<Bool> {
        guard let request = try? decoder.decode(WebPublicApiMessageRequest<UpdateProfileParam>.self,
                                                from: messageData) else {
            return WebPublicApiResponse(response: false)
        }
        guard let newProfile = request.params?.profile else {
            return WebPublicApiResponse(response: false)
        }
        ProfileRepository.updateProfile(newProfile: newProfile,
                                        createWhenNotExist: request.params?.options?.createWhenNotExist)
        return WebPublicApiResponse(response: true)
    }
    
    func attachProfile(messageData: Data) -> WebPublicApiResponse<Bool> {
        guard let request = try? decoder.decode(WebPublicApiMessageRequest<AttachProfileParam>.self,
                                                from: messageData) else {
            return WebPublicApiResponse(response: false)
        }
        guard let profileIdentifier = request.params?.profileIdentifier,
              let personaIdentifier = request.params?.personaIdentifier else {
                  return WebPublicApiResponse(response: false)
              }
        PersonaManager.attachProfile(personaIdentifier: personaIdentifier,
                                     profileIdentifier: profileIdentifier)
        return WebPublicApiResponse(response: true)
    }
    
    func detachProfile(messageData: Data) -> WebPublicApiResponse<Bool> {
        guard let request = try? decoder.decode(WebPublicApiMessageRequest<DetachProfileParam>.self,
                                                from: messageData) else {
            return WebPublicApiResponse(response: false)
        }
        guard let profileIdentifier = request.params?.identifier else {
            return WebPublicApiResponse(response: false)
        }
        PersonaManager.detachProfile(identifier: profileIdentifier)
        return WebPublicApiResponse(response: true)
    }
}

// MARK: - Relation methods handler
extension WebPublicApiMessageResolver {
    func createRelation(messageData: Data) -> WebPublicApiResponse<Relation?> {
        guard let request = try? decoder.decode(WebPublicApiMessageRequest<CreateRelationParam>.self,
                                                from: messageData) else {
            return WebPublicApiResponse(response: nil)
        }
        guard let newRelation = request.params?.relation else {
            return WebPublicApiResponse(response: nil)
        }
        RelationRepository.createRelation(relation: newRelation, context: RelationRepository.viewContext)
        return WebPublicApiResponse(response: newRelation)
    }
    
    func queryRelation(messageData: Data) -> WebPublicApiResponse<[Relation]> {
        guard let request = try? decoder.decode(WebPublicApiMessageRequest<QueryRelationParam>.self,
                                                from: messageData) else {
            return WebPublicApiResponse(response: [])
        }
        guard let param = request.params else { return WebPublicApiResponse(response: []) }
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
        return WebPublicApiResponse(response: relations)
    }
    
    func queryRelations(messageData: Data) -> WebPublicApiResponse<[Relation]> {
        guard let request = try? decoder.decode(WebPublicApiMessageRequest<QueryRelationsParam>.self,
                                                from: messageData) else {
            return WebPublicApiResponse(response: [])
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
        return WebPublicApiResponse(response: relations)
    }
    
    func updateRelation(messageData: Data) -> WebPublicApiResponse<Bool> {
        guard let request = try? decoder.decode(WebPublicApiMessageRequest<UpdateRelationParam>.self,
                                                from: messageData) else {
            return WebPublicApiResponse(response: false)
        }
        guard let newRelation = request.params?.relation else {
            return WebPublicApiResponse(response: false)
        }
        RelationRepository.updateRelation(newRelation: newRelation)
        return WebPublicApiResponse(response: true)
    }
    
    func profileDetected(messageData: Data) -> Bool {
        struct WebPublicAPIMessage<T: Decodable>: Decodable {
            let jsonrpc: String
            let method: String
            let params: T
        }
        guard let request = try? decoder.decode(WebPublicAPIMessage<String>.self, from: messageData) else {
            return false
        }
        return true
    }
}
