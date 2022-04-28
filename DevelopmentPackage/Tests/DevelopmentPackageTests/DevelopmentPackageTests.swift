import XCTest
@testable import DevelopmentPackage

import MaskLog
import WebExtension_Shim_Swift
import PanModal
import MaskWalletCore
import MaskWalletCoreMobile

import MaskbookPlugin
import SwiftyJSON

final class DevelopmentPackageTests: XCTestCase {
    func testExample() throws {
        // This is an example of a functional test case.
        // Use XCTAssert and related functions to verify your tests produce the correct
        // results.
//        XCTAssertEqual(DevelopmentPackage().text, "Hello, World!")
        
        let coin = Api_Coin.polkadot

        let slice = RustByteSlice.init()
        rust_free(slice)
    }

    func testPlugin() throws {
        let resources = MaskbookPluginResources()

        XCTAssertEqual(MaskbookPluginResources.id, "eofkdgkhfoebecmamljfaepckoecjhib")
        XCTAssertNotEqual(resources.manifest, JSON.null)
        XCTAssert(resources.resources.dictionaryValue.isEmpty == false)
    }
}

extension WebExtension {}
