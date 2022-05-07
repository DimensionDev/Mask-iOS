//
//  MaskbookTests.swift
//  MaskbookTests
//
//  Created by Cirno MainasuK on 2019-6-26.
//  Copyright © 2019 dimension. All rights reserved.
//

@testable import Maskbook
import MaskbookPlugin
import WebExtension_Shim
import XCTest

class MaskbookTests: XCTestCase {
    override func setUp() {
        // Put setup code here. This method is called before the invocation of each test method in the class.
    }

    override func tearDown() {
        // Put teardown code here. This method is called after the invocation of each test method in the class.
    }

    func testExample() {
        // This is an example of a functional test case.
        // Use XCTAssert and related functions to verify your tests produce the correct results.
    }

    func testPerformanceExample() {
        // This is an example of a performance test case.
        self.measure {
            // Put the code you want to measure the time of here.
        }
    }

    func testContentScript() {
        let bundle = Bundle(for: Tab.self)
        let plugin = MaskbookPluginResources()

        if let bundleURL = bundle.resourceURL?.appendingPathComponent("WebExtensionShimScripts.bundle"),
            let scriptsBundle = Bundle(url: bundleURL),
            let scriptPath = scriptsBundle.path(forResource: "webextension-shim", ofType: "js"),
            var script = try? String(contentsOfFile: scriptPath) {
            let pattern = """
            const env = location.href.startsWith('holoflows-extension://') && location.href.endsWith('_generated_background_page.html');
            """
            if let patternIndex = script.range(of: pattern)?.upperBound {
                let registerWebExtension: String = """


                registerWebExtension(
                '\(MaskbookPluginResources.id)',
                \(plugin.manifest.rawString() ?? ""),
                \(plugin.resources.rawString() ?? "")
                )
                """
                script.insert(contentsOf: registerWebExtension, at: patternIndex)
            }

            let tempDir = FileManager.default.temporaryDirectory
            let path = tempDir.appendingPathComponent("contentScript.js")
            try? FileManager.default.createDirectory(at: tempDir, withIntermediateDirectories: true, attributes: nil)
            try? script.write(to: path, atomically: true, encoding: .utf8)

            print(path.absoluteString)
        } else {
            assertionFailure()
        }
    }


    func testDebankAPIModle() {
        guard #available(iOS 14, *) else {
            return
        }
        // related issue [se-13837]
        // https://github.com/apple/swift-corelibs-foundation/pull/2926/files
        typealias Approve =  DebankAPIModel.TransactionResponse.History.Approve
        let doubleValues: [Double] = [
            0.199_854,
            1.157920892373162e+59,
            1.157920892373162e+71
        ]

        func getDecimalModels() -> [Decimal] {
            if let data = try? JSONEncoder().encode(doubleValues) {
                let decimalModels = try? JSONDecoder().decode([Decimal].self, from: data)
                return decimalModels ?? []
            }

            return []
        }

        let decimalModels = getDecimalModels()

        let models = doubleValues.map {
            Approve(spender: "", value: .or("\($0)"), tokenId: "")
        }

        let decimals: [NSDecimalNumber] = doubleValues.map {
            let decimal = Decimal($0)
            return NSDecimalNumber(decimal: decimal)
        }

        // assert string valueDecimalNumber equal
        XCTAssert(models.map(\.value.decimalNumber.doubleValue) == decimals.map { $0.doubleValue } )
        // the first doubleValue will not match, as the rest values equal
        XCTAssert(models.map(\.value.decimalNumber.doubleValue) != doubleValues)
        // assert deicmal eqaual
        XCTAssert(decimalModels.map { NSDecimalNumber(decimal: $0).doubleValue } == decimals.map(\.doubleValue))

        let crashDoubles = [
            1.8446744073709550e+19,
            1.8446744073709551e+19,
            1.8446744073709552e+19,
            1.8446744073709553e+19
        ]

        let crahsModels = crashDoubles.map {
            Approve(spender: "", value: .or("\($0)"), tokenId: "").value.decimalNumber.doubleValue
        }

        XCTAssert(crashDoubles != crahsModels)

        let crashDecimals = crashDoubles.map {
            Approve(spender: "", value: .or("\($0)"), tokenId: "").value.decimalNumber.decimalValue
        }

        XCTAssert(crashDecimals.map { NSDecimalNumber(decimal: $0).doubleValue } == crahsModels)
    }

    func testDecimalConvert() {
        struct TestModel: Decodable {
            @DecimalConverted
            var name: EitherOr<Decimal, String>
            let title: String

            @DecimalConverted
            var age: EitherOr<Decimal, String>
        }

        let json = """
        { "title": "Six", "age": 1.8446744073709553e+19 }
        """.data(using: .utf8)!

        guard let result = try? JSONDecoder().decode(TestModel.self, from: json) else {
            XCTAssert(false)
            return
        }

        XCTAssert(result.name.decimalNumber.decimalValue == Decimal.zero)

        if #available(iOS 15, *) {
            XCTAssert(result.age.decimalNumber.doubleValue == 1.8446744073709553e+19)
        }

        if #available(iOS 14, *) {
            XCTAssert(result.age.decimalNumber.doubleValue == 1.8446744073709552e+19)
        }
    }
}
