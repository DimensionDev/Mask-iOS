//
//  DispalyBalancePrecisionTests.swift
//  MaskbookTests
//
//  Created by Hugo L on 2022/5/10.
//  Copyright © 2022 dimension. All rights reserved.
//

import XCTest

@testable import Maskbook
class DispalyBalancePrecisionTests: XCTestCase {

    override func setUpWithError() throws {
        // Put setup code here. This method is called before the invocation of each test method in the class.
    }

    override func tearDownWithError() throws {
        // Put teardown code here. This method is called after the invocation of each test method in the class.
    }

    func testPrecision() throws {
        // 1.1119 -> 1.111
        // 0.0019 -> 0.001
        // 0.001  -> 0.001
        // 1.400  -> 1.40
        // 4.000  -> 4.00
        // 0.000  -> 0.00
        // 0.0005 -> < 0.001
        let d1 = NSDecimalNumber(string: "1.1119")
        let d2 = NSDecimalNumber(string: "0.0019")
        let d3 = NSDecimalNumber(string: "0.001")
        let d4 = NSDecimalNumber(string: "1.400")
        let d5 = NSDecimalNumber(string: "4.000")
        let d6 = NSDecimalNumber(string: "0.000")
        let d7 = NSDecimalNumber(string: "0.0005")
        
        XCTAssert(d1.displayBalance == "1.111")
        XCTAssert(d2.displayBalance == "0.001")
        XCTAssert(d3.displayBalance == "0.001")
        XCTAssert(d4.displayBalance == "1.40")
        XCTAssert(d5.displayBalance == "4.00")
        XCTAssert(d6.displayBalance == "0.00")
        XCTAssert(d7.displayBalance == "< 0.001")
    }
}
