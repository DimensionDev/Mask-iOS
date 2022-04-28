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
import WebExtension_Shim_Swift

extension PersonaManager {
    static func backupPrivateKey(identifier: String) -> String? {
        guard let persona = PersonaRepository.queryPersona(identifier: identifier) else {
            return nil
        }
        return persona.privateKeyBase64String
    }
}
