//
//  PostRecord.swift
//  Maskbook
//
//  Created by xiaojian sun on 2022/2/17.
//  Copyright © 2022 dimension. All rights reserved.
//

import CoreData
import CoreDataStack
import Foundation
import SwiftyJSON

extension PostRecord {
    var nonOptionalIdentifier: String {
        guard let identifier = identifier else {
            log.debug("PersonaRecord's identifier is nil", source: "persona")
            fatalError("PersonaRecord's identifier is nil")
        }
        return identifier
    }

    var postCryptoKey: JsonWebKey? {
        get {
            postCryptoKeyRaw.flatMap {
                try? JSONDecoder().decode(JsonWebKey.self, from: $0)
            }
        }
        set {
            guard let jsonWenKey = newValue else {
                postCryptoKeyRaw = nil
                return
            }
            let data = try? JSONEncoder().encode(jsonWenKey)
            postCryptoKeyRaw = data
        }
    }
}
