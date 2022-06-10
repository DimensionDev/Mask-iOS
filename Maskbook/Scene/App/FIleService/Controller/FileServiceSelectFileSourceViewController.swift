//
//  FileServiceSelectFileTypeViewController.swift
//  Maskbook
//
//  Created by xiaojian sun on 2022/6/8.
//  Copyright © 2022 dimension. All rights reserved.
//

import Foundation
import PanModal
import SwiftUI

final class FileServiceSelectFileSourceViewController: BaseViewController {
    init(selectFileHandler: FileServiceSelectFileHandler) {
        self.selectFileHandler = selectFileHandler
        super.init(nibName: nil, bundle: nil)
    }

    @available(*, unavailable)
    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }

    let selectFileHandler: FileServiceSelectFileHandler

    override func viewDidLoad() {
        super.viewDidLoad()

        FileServiceSelectFileSourceView(viewModel: FileServiceSelectFileSourceViewModel(selectFileHandler: selectFileHandler))
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
