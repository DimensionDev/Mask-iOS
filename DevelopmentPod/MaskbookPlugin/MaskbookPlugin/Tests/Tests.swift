import XCTest
import MaskbookPlugin
import SwiftyJSON

class Tests: XCTestCase {
    
    func testExample() {
        let resources = MaskbookPluginResources()

        XCTAssertEqual(resources.id, "eofkdgkhfoebecmamljfaepckoecjhib")
        XCTAssertNotEqual(resources.manifest, JSON.null)
        XCTAssertEqual(resources.resources.dictionaryValue.count, 9)
    }
    
}
