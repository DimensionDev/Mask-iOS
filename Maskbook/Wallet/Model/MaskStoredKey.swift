//
//  MaskStoredKey.swift
//  Maskbook
//
//  Created by BradGao on 2021/5/26.
//  Copyright © 2021 dimension. All rights reserved.
//

import CoreDataStack
import Foundation

enum StoredKeyType: Int, Codable {
    case privateKey
    case mnemonic
}

extension StoredKey {
    var keyType: StoredKeyType {
        return StoredKeyType(rawValue: Int(type))!
    }
}
