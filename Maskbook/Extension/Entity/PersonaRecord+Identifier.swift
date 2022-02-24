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
}
