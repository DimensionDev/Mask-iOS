//
//  FileServiceSelectFileTypeViewController.swift
//  Maskbook
//
//  Created by xiaojian sun on 2022/6/8.
//  Copyright © 2022 dimension. All rights reserved.
//

import Foundation
import SwiftUI
import PanModal

final class FileServiceSelectFileSourceViewController: BaseViewController {
    override func viewDidLoad() {
        super.viewDidLoad()
        
        FileServiceSelectFileSourceView(viewModel: FileServiceSelectFileSourceViewModel())
        .asContent(in: self)
    }
}

extension FileServiceSelectFileSourceViewController: PanModalPresentable {
    var panScrollable: UIScrollView? {
        nil
    }

    var longFormHeight: PanModalHeight {
        .intrinsicHeight
    }
}
