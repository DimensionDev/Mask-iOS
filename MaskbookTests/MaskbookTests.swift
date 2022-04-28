//
//  MaskbookTests.swift
//  MaskbookTests
//
//  Created by Cirno MainasuK on 2019-6-26.
//  Copyright © 2019 dimension. All rights reserved.
//

@testable import Maskbook
import MaskbookPlugin
import WebExtension_Shim_Swift
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
}
