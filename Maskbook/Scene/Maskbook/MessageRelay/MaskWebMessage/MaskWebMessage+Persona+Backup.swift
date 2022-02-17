//
//  MaskWebMessage+Persona+Backup.swift
//  Maskbook
//
//  Created by sxiaojian on 2021/8/17.
//  Copyright © 2021 dimension. All rights reserved.
//

import Foundation
import WebExtension_Shim

extension WebExtension.Persona {
    struct BackupPersonaMnemonic: MWEMessage {
        static let method: String = "persona_backupMnemonic"

        var payload: IdentifierPayload?
    }
}

extension WebExtension.Persona {
    struct BackupPersonaBase64: MWEMessage {
        static let method: String = "persona_backupBase64"

        var payload: IdentifierPayload?
    }
}

extension WebExtension.Persona {
    struct BackupPersonaJson: MWEMessage {
        static let method: String = "persona_backupJson"

        var payload: IdentifierPayload?
    }
}

extension WebExtension.Persona {
    struct BackupPersonaPrivateKey: MWEMessage {
        static let method: String = "persona_backupPrivateKey"

        var payload: IdentifierPayload?
    }
}
