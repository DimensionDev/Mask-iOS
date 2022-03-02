//
//  MoveBackupDataViewController.swift
//  Maskbook
//
//  Created by xiaojian sun on 2022/3/2.
//  Copyright © 2022 dimension. All rights reserved.
//

import Foundation
import UIKit
import PanModal

class MoveBackupDataViewController: UIViewController {
    private lazy var viewModel = MoveBackupDataViewModel()
    override func viewDidLoad() {
        viewModel.detectBackupFiles()
    }
}

extension MoveBackupDataViewController: PanModalPresentable {
    var panScrollable: UIScrollView? {
        nil
    }

    var longFormHeight: PanModalHeight {
        .intrinsicHeight
    }
}
