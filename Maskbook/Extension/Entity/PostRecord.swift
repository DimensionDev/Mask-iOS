//
//  PostRecord.swift
//  Maskbook
//
//  Created by xiaojian sun on 2022/2/17.
//  Copyright © 2022 dimension. All rights reserved.
//

import Foundation
import CoreDataStack

extension PostRecord {
    var postCryptoKey: JsonWebKey? {
        postCryptoKeyRaw.flatMap {
            try? JSONDecoder().decode(JsonWebKey.self, from: $0)
        }
    }
}
