//
//  UserDefaultSettings.swift
//  MaskbookTests
//
//  Created by Hugo L on 2022/4/1.
//  Copyright © 2022 dimension. All rights reserved.
//

import XCTest

@testable import Maskbook
class UserDefaultSettings: XCTestCase {
    @InjectedProvider(\.userDefaultSettings)
    private var userDefaultSettings

    override func setUpWithError() throws {
        // Put setup code here. This method is called before the invocation of each test method in the class.
        userDefaultSettings.defaultAccountAddress = "0x"
    }

    override func tearDownWithError() throws {
        // Put teardown code here. This method is called after the invocation of each test method in the class.
    }

    func testHasRiskConfirmed() throws {
        userDefaultSettings.hasRiskConfirmed = true
        XCTAssert(userDefaultSettings.hasRiskConfirmed)
        userDefaultSettings.hasRiskConfirmed = false
        XCTAssert(!userDefaultSettings.hasRiskConfirmed)
        XCTAssert(!userDefaultSettings.hasRiskConfirmed)
    }

}
