//
//  IndexedDBAllRecord.swift
//  Maskbook
//
//  Created by Brad Gao on 2022/1/21.
//  Copyright © 2022 dimension. All rights reserved.
//

import Foundation

struct IndexedDBAllRecord: Decodable {
    let personas: [Persona]
    let profiles: [Profile]
    let relations: [Relation]
}
