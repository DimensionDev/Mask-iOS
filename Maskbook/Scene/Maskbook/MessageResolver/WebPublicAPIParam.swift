//
//  WebPublicAPIParam.swift
//  Maskbook
//
//  Created by Brad Gao on 2022/1/20.
//  Copyright © 2022 dimension. All rights reserved.
//

import Foundation

struct PageOption: Decodable {
    let pageSize: Int
    let pageOffset: Int
}

struct WebPublicApiMessageRequest<T: Decodable>: Decodable {
    let jsonrpc: String
    let id: String
    let params: T?
}

// MARK: - Personas
struct CreatePersonaParam: Decodable {
    let persona: Persona
}

struct QueryPersonaParam: Decodable {
    let identifier: String
    let hasPrivateKey: Bool?
    let includeLogout: Bool?
    let nameContains: String?
    let initialized: Bool?
    let pageOptions: PageOption?
}

struct QueryPersonasParam: Decodable {
    let identifiers: [String]?
    let hasPrivateKey: Bool?
    let includeLogout: Bool?
    let nameContains: String?
    let initialized: Bool?
    let pageOptions: PageOption?
}

struct QueryPersonaByProfileParam: Decodable {
    struct QueryPersonaByProfileParamOptions: Decodable {
        let profileIdentifier: String
        let hasPrivateKey: Bool?
        let includeLogout: Bool?
        let nameContains: String?
        let initialized: Bool?
        let pageOptions: PageOption?
    }
    let options: QueryPersonaByProfileParamOptions?
}

struct UpdatePersonaParam: Decodable {
    struct UpdatePersonaParamOptions: Decodable {
        let linkedProfileMergePolicy: LinkedProfileMergePolicy?
        let deleteUndefinedFields: Bool?
        let protectPrivateKey: Bool?
        let createWhenNotExist: Bool?
    }
    let persona: Persona
    let options: UpdatePersonaParamOptions?
}

struct DeletePersonaParam: Decodable {
    struct DeletePersonaParamOptions: Decodable {
        let safeDelete: Bool?
    }
    let identifier: String
    let options: DeletePersonaParamOptions?
}

// MARK: - Profiles
struct CreateProfileParam: Decodable {
    let profile: Profile
}

struct QueryProfileParam: Decodable {
    struct QueryProfileParamOptions: Decodable {
        let identifier: String
        let network: String?
        let nameContains: String?
        let pageOptions: PageOption?
    }
    let options: QueryProfileParamOptions?
}

struct QueryProfilesParam: Decodable {
    let identifiers: [String]?
    let network: String?
    let nameContains: String?
    let hasLinkedPersona: Bool?
    let pageOptions: PageOption?
}

struct DeleteProfileParam: Decodable {
    let identifier: String
}

struct UpdateProfileParam: Decodable {
    struct UpdateProfileParamOptions: Decodable {
        let createWhenNotExist: Bool?
    }
    let profile: Profile
    let options: UpdateProfileParamOptions?
}

struct AttachProfileParam: Decodable {
    struct LinkedProfileDetails: Decodable {
        let connectionConfirmState: Persona.LinkedProfileConfirmState
    }
    let profileIdentifier: String
    let personaIdentifier: String
    let state: LinkedProfileDetails
}

struct DetachProfileParam: Decodable {
    let identifier: String
}

// MARK: - Relation
struct CreateRelationParam: Decodable {
    let relation: Relation
}

struct QueryRelationParam: Decodable {
    let personaIdentifier: String?
    let profileIdentifier: String?
}

struct QueryRelationsParam: Decodable {
    struct QueryRelationsParamOptions: Decodable {
        let personaIdentifier: String?
        let network: String?
        let nameContains: String?
        let favor: String?
        let pageOption: PageOption?
    }
    let options: QueryRelationsParamOptions?
}

struct UpdateRelationParam: Decodable {
    let relation: Relation
}

struct DeleteRelationParam: Decodable {
    let personaIdentifier: String
    let profileIdentifier: String
}

struct QueryAvatarParam: Decodable {
    let identifier: String
}

struct StoreAvatarParam: Decodable {
    let identifier: String?
    let avatar: String?
}

struct CreatePostParam: Decodable {
    let post: Post
}

struct QueryPostParam: Decodable {
    let encryptBy: String?
    let userIds: [String]?
    let network: String?
    let pageOption: PageOption?
}

struct UpdatePostParam: Decodable {
    struct UpdatePostParamOptions: Decodable {
        let mode: PostRepository.Mode
    }
    let post: Post
    let options: UpdatePostParamOptions
}

// MARK: - Plugins
struct NotifyRedpacketParam: Decodable {
    let redpacketPayload: String
    let availability: String
    let postLink: String
}
