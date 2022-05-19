//
//  UIApplication+extension.swift
//  Maskbook
//
//  Created by yzj on 2021/7/14.
//  Copyright © 2021 dimension. All rights reserved.
//

import UIKit

extension UIApplication {
    var isRunningUnitTest: Bool {
        NSClassFromString("XCTestCase") != nil
    }

    var isRunningPreivew: Bool {
        ProcessInfo.processInfo.environment["XCODE_RUNNING_FOR_PREVIEWS"] == "1"
    }
}
