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
            if let nmemonic = mnemonic?
                .data(using: .utf8)?
                .base64EncodedString()
            {
                return "mask://persona/mnemonic/" + nmemonic
            } else {
                return "mask://persona/privatekey/" + privateKeyBase64String
            }
        }()
        if let name = nickname, !name.isEmpty {
            qrCodeString.append("?nickname=\(name)")
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
}
