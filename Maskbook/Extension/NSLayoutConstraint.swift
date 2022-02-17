//
//  NSLayoutConstraint.swift
//  Maskbook
//
//  Created by xiaojian sun on 2021/5/24.
//  Copyright © 2021 dimension. All rights reserved.
//

import UIKit

extension NSLayoutConstraint {
    func priority(_ priority: UILayoutPriority) -> Self {
        self.priority = priority
        return self
    }
    
    func identifier(_ identifier: String?) -> Self {
        self.identifier = identifier
        return self
    }
}
