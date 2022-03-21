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
    init(originalName: String, title: String, dismissOnConfirm: Bool = false, confirmAction: @escaping (String, RenameViewModel) -> Void) {
        self.confirmAction = confirmAction
        self.originalName = originalName
        self.title = title
        self.dismissOnConfirm = dismissOnConfirm
    }

    var title: String
    let originalName: String
    let confirmAction: (String, RenameViewModel) -> Void
    let dismissOnConfirm: Bool
    var dismissSignal = PassthroughSubject<(() -> Void)?, Never>()
}


