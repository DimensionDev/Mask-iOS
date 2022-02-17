//
//  Managed+extension.swift
//  Maskbook
//
//  Created by sxiaojian on 2021/12/15.
//  Copyright © 2021 dimension. All rights reserved.
//

import CoreData
import CoreDataStack
import Foundation

extension Managed {
    static func withRequest(_ configuration: @escaping (NSFetchRequest<Self>) -> Void) -> NSFetchRequest<Self> {
        let request = sortedFetchRequest
        configuration(request)
        return request
    }
}
