//
//  MaskHostViewController.swift
//  Maskbook
//
//  Created by Hugo L on 2022/2/25.
//  Copyright © 2022 dimension. All rights reserved.
//

import Foundation
import SwiftUI
import UIKit

class MaskHostViewController<Content: View>: UIHostingController<Content> {
    var statusBarStyle: UIStatusBarStyle? = .lightContent
    
    override var preferredStatusBarStyle: UIStatusBarStyle {
        statusBarStyle ?? super.preferredStatusBarStyle
    }
    
    override func viewDidLayoutSubviews() {
        super.viewDidLayoutSubviews()
        self.view.invalidateIntrinsicContentSize()
    }
}
