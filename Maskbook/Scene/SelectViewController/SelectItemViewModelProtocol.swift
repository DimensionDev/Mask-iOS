//
//  SelectItemViewModelProtocol.swift
//  Maskbook
//
//  Created by xiaojian sun on 2021/6/4.
//  Copyright © 2021 dimension. All rights reserved.
//

import Foundation

protocol SelectItemViewModelProtocol {
    func titles() -> [String]
    
    func selectedIndex() -> Int?
    
    func select(index: Int)
}
