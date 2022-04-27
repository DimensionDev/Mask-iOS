import XCTest
import MaskbookPlugin
import SwiftyJSON

class MaskbookPluginTests: XCTestCase {

    func testExample() {
        let resources = MaskbookPluginResources()

        XCTAssertEqual(MaskbookPluginResources.id, "eofkdgkhfoebecmamljfaepckoecjhib")
        XCTAssertNotEqual(resources.manifest, JSON.null)
        XCTAssert(resources.resources.dictionaryValue.isEmpty == false)
    }

}
