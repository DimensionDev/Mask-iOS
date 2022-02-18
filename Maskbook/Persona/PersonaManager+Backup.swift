//
//  PersonaManager+Backup.swift
//  Maskbook
//
//  Created by sxiaojian on 2021/8/17.
//  Copyright © 2021 dimension. All rights reserved.
//

import Combine
import Foundation
import SwiftyJSON
import WebExtension_Shim

extension PersonaManager {
    static func backupMnemonic(identifier: String) -> AnyPublisher<String, Error> {
        let request = WebExtension.Persona.BackupPersonaMnemonic.withPayload {
            WebExtension.Persona.IdentifierPayload(identifier: identifier)
        }
        return request
            .eraseToAnyPublisher()
            .compactMap(\.result?.string)
            .eraseToAnyPublisher()
    }

    static func backupPrivateKey(identifier: String) -> AnyPublisher<String, Error> {
        let request = WebExtension.Persona.BackupPersonaPrivateKey.withPayload {
            WebExtension.Persona.IdentifierPayload(identifier: identifier)
        }
        return request
            .eraseToAnyPublisher()
            .compactMap(\.result?.string)
            .eraseToAnyPublisher()
    }
    
    static func backupJson(identifier: String) -> AnyPublisher<JSON, Error> {
        let request = WebExtension.Persona.BackupPersonaJson.withPayload {
            WebExtension.Persona.IdentifierPayload(identifier: identifier)
        }
        return request
            .eraseToAnyPublisher()
            .compactMap(\.result)
            .eraseToAnyPublisher()
    }
    
    static func backupBase64(identifier: String) -> AnyPublisher<String, Error> {
        let request = WebExtension.Persona.BackupPersonaBase64.withPayload {
            WebExtension.Persona.IdentifierPayload(identifier: identifier)
        }
        return request
            .eraseToAnyPublisher()
            .compactMap(\.result?.string)
            .eraseToAnyPublisher()
    }
}
