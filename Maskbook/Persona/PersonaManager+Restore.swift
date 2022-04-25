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

    static func restoreFromPrivateKey(privateKey: String,
                                      nickname: String?) -> AnyPublisher<MaskWebMessageResult, Error> {
        let name = nickname ?? "persona\(PersonaManager.shared.personaRecordsSubject.value.count + 1)"
        let request = WebExtension.Persona.RestorePersonaPrivateKey.withPayload {
            .init(privateKey: privateKey.base64URLUnescaped(), nickname: name)
        }
        return request
            .eraseToAnyPublisher()
    }
}
