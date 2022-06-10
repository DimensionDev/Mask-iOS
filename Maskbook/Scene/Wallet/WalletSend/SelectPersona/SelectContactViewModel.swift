//
//  SelectContactViewModel.swift
//  Maskbook
//
//  Created by caiyu on 2022/5/23.
//  Copyright © 2022 dimension. All rights reserved.
//

import UIKit

extension SelectContactViewModel {
    enum CellType {
        case normal
        case clickable
    }
}

class SelectContactViewModel: NSObject {
    // l10n
    let titles: [String] = ["Everyone", "Only me", "Specific Contacts"]
    let content: [String] = ["Every twitter user can see.", "Only I can see it.", ""]
    let cellTypes: [CellType] = [.normal, .normal, .clickable]
    let contactTypes: [MessageComposeViewModel.Recipient] = [.everyone, .onlyMe, .specialContacts]
    var selectedContactType: MessageComposeViewModel.Recipient = .everyone

    func select(index: Int) {
        selectedContactType = contactTypes[index]
    }
}
