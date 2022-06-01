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
    var titles: [String] = []
    var content: [String] = []
    var cellTypes: [cellType] = [.normal,.normal,.clickable]
    var selectedIndex: Int = 0
    
    func select(index: Int) {
         selectedIndex = index 
    }
}
