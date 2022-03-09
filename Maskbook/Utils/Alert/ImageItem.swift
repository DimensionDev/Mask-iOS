//
//  File.swift
//  Maskbook
//
//  Created by yzj on 2022/3/9.
//  Copyright © 2022 dimension. All rights reserved.
//

import UIKit
import UStack

struct ImageItem {
    typealias Image = AlertItem.Image

    let image: Image 
    init(_ image: Image) {
        self.image = image
    }
}

extension ImageItem: AlertItemRepresentable {
    var itemPack: [AlertItemRepresentable] { [self] }

    func makeView(for alert: Alert) -> UIView {
        HStackView(distribution: .equalCentering) {
            UIView.spacer()
            UIImageView(image: image.imageAsset.image)
                .cv.apply {
                    $0.snp.makeConstraints { $0.size.equalTo(60) }
                }
            UIView.spacer()
        }
    }
}
