//
//  File.swift
//  Maskbook
//
//  Created by yzj on 2021/8/19.
//  Copyright © 2021 dimension. All rights reserved.
//

import Foundation

struct PreviewItem {
    let title: String
    let detail: String
}

protocol RestoreItemProvider {
    var previewItems: [PreviewItem] { get }
    var supportRestore: Bool { get }
}
