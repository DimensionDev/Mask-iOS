//
//  String+Contains.swift
//  Maskbook
//
//  Created by xiaojian sun on 2022/3/30.
//  Copyright © 2022 dimension. All rights reserved.
//

import Foundation

extension String {
    func containsIgnoreCase(string: String) -> Bool {
        lowercased().contains(string.lowercased())
    }
}
