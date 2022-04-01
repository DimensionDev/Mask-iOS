//
//  PersonaRecord+Identifier.swift
//  Maskbook
//
//  Created by xiaojian sun on 2022/2/8.
//  Copyright © 2022 dimension. All rights reserved.
//

import CoreDataStack
import Foundation

extension PersonaRecord {
    var nonOptionalIdentifier: String {
        guard let identifier = identifier else {
            log.debug("PersonaRecord's identifier is nil", source: "persona")
            fatalError()
        }
        return identifier
    }
    
    var privateKeyBase64String: String {
        let originPersona = Persona(fromRecord: self)
        return originPersona?.privateKey?.privateKeyBase64String ?? ""
    }
    
    var qrCodeString: String {
        var qrCodeString = "mask://persona/privatekey/" + privateKeyBase64String
        if let nmemonic = mnemonic?
            .data(using: .utf8)?
            .base64EncodedString()
        {
            qrCodeString = "mask://persona/mnemonic/" + nmemonic
        }
        if let name = self.nickname, !name.isEmpty {
            qrCodeString.append("?nickname=\(name)")
        }
        return qrCodeString
    }
}
