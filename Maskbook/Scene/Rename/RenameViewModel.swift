//
//  RenamePersonaViewModel.swift
//  Maskbook
//
//  Created by xiaojian sun on 2021/6/17.
//  Copyright © 2021 dimension. All rights reserved.
//

import Combine
import CoreDataStack
import Foundation

class RenameViewModel {
    init(originalName: String, title: String, confirmAction: @escaping (String) -> Void) {
        self.confirmAction = confirmAction
        self.originalName = originalName
        self.title = title
    }

    var title: String
    let originalName: String
    let confirmAction: (String) -> Void
}
