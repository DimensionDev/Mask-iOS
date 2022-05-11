//
//  PersonaRecord+Identifier.swift
//  Maskbook
//
//  Created by xiaojian sun on 2022/2/8.
//  Copyright © 2022 dimension. All rights reserved.
//

import CoreDataStack
import Foundation
import SwiftyJSON

extension PersonaRecord {
    var nonOptionalIdentifier: String {
        guard let identifier = identifier else {
            log.debug("PersonaRecord's identifier is nil", source: "persona")
            fatalError()
        }
        return identifier
    }

    var privateKeyBase64String: String {
        Persona(fromRecord: self)?
            .privateKey?
            .privateKeyBase64String
            ?? ""
    }

    var qrCodeString: String {
        var qrCodeString: String = {
            if let mnemonicBase64 = mnemonic?
                .data(using: .utf8)?
                .base64EncodedString()
                .base64URLEscaped()
            {
                return Self.qrCodeMnemonic(mnemonicBase64: mnemonicBase64)
            } else {
                return Self.qrCodePrivateKey(privateKeyBase64: privateKeyBase64String)
            }
        }()
        if let name = nickname, !name.isEmpty {
            qrCodeString.append("?\(SchemeService.nikenameKey)=\(name)")
        }
        return qrCodeString
    }

    var dKeyInPrivateKey: String {
        privateKey?
            .data(using: .utf8)
            .flatMap {
                try? JSON(data: $0)["d"].string
            }
            ?? ""
    }

    static func qrCodeMnemonic(mnemonicBase64: String) -> String {
        SchemeService.personaMenmonicPrefix + "/" + mnemonicBase64
    }

    static func qrCodePrivateKey(privateKeyBase64: String) -> String {
        SchemeService.personaPrivateKeyPrefix + "/" + privateKeyBase64
    }
}
