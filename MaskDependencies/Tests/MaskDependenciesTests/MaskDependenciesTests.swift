import XCTest
@testable import MaskDependencies

import MaskbookPlugin
import SwiftyJSON

final class MaskDependencyTests: XCTestCase {
    func testExample() throws {
        // This is an example of a functional test case.
        // Use XCTAssert and related functions to verify your tests produce the correct
        // results.
        XCTAssertEqual(MaskDependency().text, "Hello, World!")
    }

    func testPlugins() throws {
        let resources = MaskbookPluginResources()

        XCTAssertEqual(MaskbookPluginResources.id, "eofkdgkhfoebecmamljfaepckoecjhib")
        XCTAssertNotEqual(resources.manifest, JSON.null)
        XCTAssertEqual(resources.resources.dictionaryValue.isEmpty, false)
    }
}
