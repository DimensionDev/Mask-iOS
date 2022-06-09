//
//  SelectContactViewModel.swift
//  Maskbook
//
//  Created by caiyu on 2022/5/23.
//  Copyright © 2022 dimension. All rights reserved.
//

import UIKit

extension SelectContactViewModel {
    enum cellType {
        case normal
        case clickable
    }
}

class SelectContactViewModel: NSObject {
    //l10n
    var titles: [String] = ["Everyone","Only me","Specific Contacts"]
    var content: [String] = ["Every twitter user can see.","Only I can see it.",""]
    var cellTypes: [cellType] = [.normal,.normal,.clickable]
    var contactTypes: [MessageComposeViewModel.Recipient] = [.everyone,.onlyMe,.specialContacts]
    var selectedIndex: Int = 0
    
    func select(index: Int) {
         selectedIndex = index 
    }
}
