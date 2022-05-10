//
//  Date+Milliseconds.swift
//  Maskbook
//
//  Created by Brad Gao on 2022/5/10.
//  Copyright © 2022 dimension. All rights reserved.
//

import Foundation

extension Date {
    var millisecondsSince1970: TimeInterval {
        timeIntervalSince1970 * 1000.0
    }
    
    init(milliseconds: TimeInterval) {
        self = Date(timeIntervalSince1970: TimeInterval(milliseconds) / 1000)
    }
}
