//
//  SplashItem.swift
//  Maskbook
//
//  Created by yzj on 2022/3/3.
//  Copyright © 2022 dimension. All rights reserved.
//

import SwiftUI
import Compression

protocol SplashItem: CaseIterable, Hashable, Identifiable where
    AllCases: RandomAccessCollection,
    AllCases.Index == Int {
    var pageControl: SwiftUI.Image { get }
    var guideImage: SwiftUI.Image { get }
    var title: String { get }

    var isFirst: Bool { get }

    var index: Int { get }
}

protocol SplashItemView {
    associatedtype Item: SplashItem
    init(item: Item)
}
