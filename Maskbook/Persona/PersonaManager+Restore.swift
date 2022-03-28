//
//  PersonaManager+Restore.swift
//  Maskbook
//
//  Created by sxiaojian on 2021/8/18.
//  Copyright © 2021 dimension. All rights reserved.
//

import Combine
import Foundation
import SwiftyJSON
import WebExtension_Shim

extension PersonaManager {
    static func restoreFromMnemonic(mnemonic: String,
                                    nickname: String = "persona1") -> AnyPublisher<MaskWebMessageResult, Error> {
        let request = WebExtension.Persona.RestorePersonaMnemonic.withPayload {
            WebExtension.Persona.RestorePersonaMnemonic.Payload(password: "", nickname: nickname, mnemonic: mnemonic)
        }
        return request
            .eraseToAnyPublisher()
    }

    static func restoreFromPrivateKey(privateKey: String,
                                      nickname: String = "persona1") -> AnyPublisher<MaskWebMessageResult, Error> {
        let request = WebExtension.Persona.RestorePersonaPrivateKey.withPayload {
            .init(privateKey: privateKey.base64URLUnescaped(), nickname: nickname)
        }
        return request
            .eraseToAnyPublisher()
    }
    
    static func restoreFromJson(jsonString: String) -> AnyPublisher<MaskWebMessageResult, Error> {
        let request = WebExtension.Persona.RestorePersonaJson.withPayload {
            WebExtension.Persona.BackUpPayload(backup: jsonString)
        }
        return request
            .eraseToAnyPublisher()
    }
    
    static func restoreFromBase64(base64String: String) -> AnyPublisher<MaskWebMessageResult, Error> {
        let request = WebExtension.Persona.RestorePersonaBase64.withPayload {
            WebExtension.Persona.BackUpPayload(backup: base64String)
        }
        return request
            .eraseToAnyPublisher()
    }
}
