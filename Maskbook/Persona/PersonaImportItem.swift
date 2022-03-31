//
//  PersonaImportItem.swift
//  Maskbook
//
//  Created by xiaojian sun on 2022/3/31.
//  Copyright © 2022 dimension. All rights reserved.
//

import Foundation
struct PersonaImportItem {
    init(type: PersonaImportType, name: String? = nil) {
        self.type = type
        self.name = name
    }
    
    var type: PersonaImportType
    var name: String?
}

enum PersonaImportType {
    case privateKey(privateKey: String)
    case mnemonic(mnemonic: String)
}
