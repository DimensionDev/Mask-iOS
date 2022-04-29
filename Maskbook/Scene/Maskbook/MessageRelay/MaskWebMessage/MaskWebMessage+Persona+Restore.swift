//
//  MaskWebMessage+Persona+Restore.swift
//  Maskbook
//
//  Created by sxiaojian on 2021/8/17.
//  Copyright © 2021 dimension. All rights reserved.
//

import Foundation
import WebExtension_Shim

extension WebExtension.Persona {
    struct RestorePersonaPrivateKey: MWEMessage {
        static let method: String = "persona_restoreFromPrivateKey"
        struct Payload: Codable {
            let privateKey: String
            let nickname: String
        }
        var payload: Payload?
    }
}
