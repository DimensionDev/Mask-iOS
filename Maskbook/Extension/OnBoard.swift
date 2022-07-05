//
//  File.swift
//  Maskbook
//
//  Created by yzj on 2022/7/4.
//  Copyright © 2022 dimension. All rights reserved.
//

import Foundation

enum OnboardFeature: Int, CaseIterable {
    case fileService

    static var allFeatures: String {
        allCases.reduce(into: "", { $0 = "\($0),\($1.rawValue)" })
    }
}
