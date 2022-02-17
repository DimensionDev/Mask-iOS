//
//  PasswordTests.swift
//  MaskbookTests
//
//  Created by Hugo L on 2021/10/14.
//  Copyright © 2021 dimension. All rights reserved.
//

import XCTest

@testable import Maskbook
class PasswordTests: XCTestCase {

    override func setUpWithError() throws {
        // Put setup code here. This method is called before the invocation of each test method in the class.
    }

    override func tearDownWithError() throws {
        // Put teardown code here. This method is called after the invocation of each test method in the class.
    }

    func testVerifyPaymentPassword() throws {
        // "123456"
        XCTAssertFalse("123456".isValidPasswordFormat)
        // "12345678"
        XCTAssertFalse("12345678".isValidPasswordFormat)
        // "1234567a"
        XCTAssertTrue("1234567a".isValidPasswordFormat)
        // "123456aA"
        XCTAssertTrue("123456aA".isValidPasswordFormat)
        // "123456aA!"
        XCTAssertTrue("123456aA!".isValidPasswordFormat)
        // “12345678901234567890aA!”
        XCTAssertFalse("12345678901234567890aA!".isValidPasswordFormat)
        XCTAssertTrue("123456a!".isValidPasswordFormat)
    }
    
    func testVerifyBackupPaymentPassword() throws {
        // "123456"
        XCTAssertFalse("123456".isValidBackupPasswordFormat)
        // "12345678"
        XCTAssertFalse("12345678".isValidBackupPasswordFormat)
        // "1234567a"
        XCTAssertFalse("1234567a".isValidBackupPasswordFormat)
        // "123456aA"
        XCTAssertFalse("123456aA".isValidBackupPasswordFormat)
        // “12345678901234567890aA!”
        XCTAssertFalse("12345678901234567890aA!".isValidBackupPasswordFormat)
        // "123456aA!"
        XCTAssertTrue("123456aA!".isValidBackupPasswordFormat)
        XCTAssertFalse("123456a!".isValidBackupPasswordFormat)
    }
}
