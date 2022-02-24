//
//  KFImage+Network.swift
//  Maskbook
//
//  Created by Hugo L on 2022/2/21.
//  Copyright © 2022 dimension. All rights reserved.
//

import Foundation
import Kingfisher
import SwiftUI

extension KFImage {
    static func url(_ url: String?, cornerRadius: CGFloat? = nil, fitSize: CGSize? = nil) -> KFImage {
        let url = URL(string: url ?? "")
        let defaultTokenImage = Asset.Images.Scene.Balance.tokenIconPlaceholder.asImage()
        let processor = GifRoundCornerImageProcessor(cornerRadius: cornerRadius, targetSize: fitSize)
        return self.url(url)
            .scaleFactor(UIScreen.main.scale)
            .setProcessor(processor)
            .serialize(by: FormatIndicatedCacheSerializer.gif)
            .placeholder({ defaultTokenImage })
            .resizable()
    }
}
