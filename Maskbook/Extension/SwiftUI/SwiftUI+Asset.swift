//
//  SwiftUI+Color.swift
//  Maskbook
//
//  Created by yzj on 2021/7/27.
//  Copyright © 2021 dimension. All rights reserved.
//

import SwiftUI

extension ImageAsset {
    func asImage() -> SwiftUI.Image {
        SwiftUI.Image(self.name)
    }
}

extension SwiftUI.Image {
    init(_ asset: ImageAsset) {
        self.init(asset.name)
    }
}

extension UIImage {
    func asImage() -> SwiftUI.Image {
        SwiftUI.Image(uiImage: self)
    }
}
