//
//  URL.swift
//  Maskbook
//
//  Created by xiaojian sun on 2022/3/2.
//  Copyright © 2022 dimension. All rights reserved.
//

import Foundation
extension URL {

    static var documents: URL {
        return FileManager
            .default
            .urls(for: .documentDirectory, in: .userDomainMask)[0]
    }
}
