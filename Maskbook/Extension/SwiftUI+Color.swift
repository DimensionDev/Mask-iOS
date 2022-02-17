//
//  SwiftUI+Color.swift
//  Maskbook
//
//  Created by yzj on 2021/7/27.
//  Copyright © 2021 dimension. All rights reserved.
//

import SwiftUI

extension ColorAsset {
    func asColor() -> SwiftUI.Color {
        SwiftUI.Color(self.name)
    }
}

extension SwiftUI.Color {
    init(_ assets: ColorAsset) {
        self.init(assets.name)
    }
}
