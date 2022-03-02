//
//  Persona.swift
//  Maskbook
//
//  Created by xiaojian sun on 2021/6/17.
//  Copyright © 2021 dimension. All rights reserved.
//

import Foundation
import SwiftyJSON

struct Persona {
    enum LinkedProfileConfirmState: String, Codable {
        case pending, confirmed, denied
    }
    
    struct LinkedProfileDetails: Codable {
        let connectionConfirmState: LinkedProfileConfirmState
    }
    
    struct Mnemonic: Codable {
        enum CodingKeys: String, CodingKey {
            case words
            case parameter
        }
        
        struct Parameter: Codable {
            enum CodingKeys: String, CodingKey {
                case path
                case withPassword
            }
            
            let path: String
            let withPassword: Bool
        }
        let words: String
        let parameter: Parameter
    }
    
    enum CodingKeys: String, CodingKey {
        case identifier
        case nickname
        case privateKey
        case publicKey
        case localKey
        case mnemonic
        case hasLogout
        case uninitialized
        case createdAt
        case updatedAt
        case linkedProfiles
    }
    
    var createdAt: TimeInterval
    var identifier: String
    var linkedProfiles: [String: LinkedProfileDetails]
    var nickname: String?
    var updatedAt: TimeInterval
    let privateKey: JsonWebKey?
    let publicKey: JsonWebKey?
    let localKey: JsonWebKey?
    let mnemonic: Mnemonic?
    let hasLogout: Bool?
    let uninitialized: Bool?
}

extension Persona: Equatable {
    public static func == (lhs: Persona, rhs: Persona) -> Bool {
        lhs.identifier == rhs.identifier
    }
}

extension Persona: Codable {
    init(from decoder: Decoder) throws {
        let container = try decoder.container(keyedBy: Persona.CodingKeys.self)
        
        identifier = try container.decode(String.self, forKey: .identifier)
        nickname = try container.decodeIfPresent(String.self, forKey: .nickname)
        privateKey = try container.decodeIfPresent(JsonWebKey.self, forKey: .privateKey)
        publicKey = try container.decodeIfPresent(JsonWebKey.self, forKey: .publicKey)
        localKey = try container.decodeIfPresent(JsonWebKey.self, forKey: .localKey)
        
        hasLogout = try container.decodeIfPresent(Bool.self, forKey: .hasLogout)
        uninitialized = try container.decodeIfPresent(Bool.self, forKey: .uninitialized)
        createdAt = try container.decode(Double.self, forKey: .createdAt)
        updatedAt = try container.decode(Double.self, forKey: .updatedAt)
        
        if let mnemonicContainer = try? container.nestedContainer(keyedBy: Persona.Mnemonic.CodingKeys.self, forKey: .mnemonic) {
            let mnemonicWords = try mnemonicContainer.decodeIfPresent(String.self, forKey: .words)
            let mnemonicParamContainer = try mnemonicContainer.nestedContainer(keyedBy: Persona.Mnemonic.Parameter.CodingKeys.self,
                                                                               forKey: .parameter)
            let mnemonicParamPath = try mnemonicParamContainer.decodeIfPresent(String.self, forKey: .path)
            let withPassword = try mnemonicParamContainer.decodeIfPresent(Bool.self, forKey: .withPassword)
            if let validWords = mnemonicWords,
               let validPath = mnemonicParamPath,
               let validWithPwd = withPassword {
                let mnemonicStruct = Mnemonic(words: validWords,
                                              parameter: Mnemonic.Parameter(path: validPath,
                                                                            withPassword: validWithPwd))
                mnemonic = mnemonicStruct
            } else {
                mnemonic = nil
            }
        } else {
            mnemonic = nil
        }
        linkedProfiles = try container.decodeIfPresent([String: LinkedProfileDetails].self, forKey: .linkedProfiles) ?? [:]
    }
}
