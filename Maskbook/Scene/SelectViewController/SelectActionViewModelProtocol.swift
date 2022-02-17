//
//  SelectActionViewModelProtocol.swift
//  Maskbook
//
//  Created by xiaojian sun on 2021/6/15.
//  Copyright © 2021 dimension. All rights reserved.
//

import Combine
import Foundation
import UIKit

protocol SelectActionViewModelProtocol {
    var dismissSignal: PassthroughSubject<(() -> Void)?, Never> { get set }

    var title: String? { get }
    
    var actionTitles: [String] { get }
    
    var actionIcons: [UIImage] { get }
    
    func select(index: Int)
}
