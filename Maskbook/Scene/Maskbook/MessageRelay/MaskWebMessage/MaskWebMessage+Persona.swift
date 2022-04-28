//
//  MaskWebMessage+Persona.swift
//  Maskbook
//
//  Created by sxiaojian on 2021/8/12.
//  Copyright © 2021 dimension. All rights reserved.
//

import Foundation
import WebExtension_Shim_Swift

extension WebExtension.Persona {
    struct CreatePersonaByMnemonic: MWEMessage {
        static let method: String = "persona_createPersonaByMnemonic"
        
        struct Payload: Codable {
            let mnemonic: String
            let nickname: String
            let password: String
        }
        
        var payload: Payload?
    }
}

extension WebExtension.Persona {
    struct GetCurrentPersonaIdentifier: MWEMessage {
        static let method: String = "persona_getCurrentPersonaIdentifier"
        typealias Payload = String
        init(payload: String? = nil) {}
    }
    
    struct SetCurrentPersonaIdenfitier: MWEMessage {
        static let method: String = "persona_setCurrentPersonaIdentifier"
        var payload: IdentifierPayload?
    }
}

extension WebExtension.Persona {
    struct IdentifierPayload: Codable {
        let identifier: String
    }
    
    struct BackUpPayload: Codable {
        let backup: String
    }
}
