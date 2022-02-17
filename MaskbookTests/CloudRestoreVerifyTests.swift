//
//  CloudRestoreVerifyTests.swift
//  MaskbookTests
//
//  Created by yzj on 2021/8/24.
//  Copyright © 2021 dimension. All rights reserved.
//

@testable import Maskbook
import XCTest

class CloudRestoreVerifyTests: XCTestCase {
    func testEmailValidation() {
        let viewModel = RemoteRestoreVerifyViewModel()
        viewModel.email = "12312313"
        assert(viewModel.enabled == false)
    }

    func testPerformanceExample() throws {
        // This is an example of a performance test case.
        self.measure {
            // Put the code you want to measure the time of here.
        }
    }

}
