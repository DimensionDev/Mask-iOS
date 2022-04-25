//
//  MaskSchemeTest.swift
//  MaskbookTests
//
//  Created by xiaojian sun on 2022/4/24.
//  Copyright © 2022 dimension. All rights reserved.
//

import Foundation
import XCTest

@testable import Maskbook
class MaskSchemeTest: XCTestCase {
    @InjectedProvider(\.schemeService)
    private var schemeService
    
    private var personaImportHandler = PersonaImportHandler(scene: .userScan)
    
    override func setUpWithError() throws {
        // Put setup code here. This method is called before the invocation of each test method in the class.
    }

    override func tearDownWithError() throws {
        // Put teardown code here. This method is called after the invocation of each test method in the class.
    }
    
    func testAllScheme() throws {
        try testScheme1()
        try testScheme2()
        try testScheme3()
        try testScheme4()
    }

    func testScheme1() throws {
        handlePrivateKeyScheme(scheme: "mask://persona/privatekey/h6NjcnalSy0yNTajZXh0w6F42StZMTRKSTF3VThsWGp3WVJCNEpYSktkajlCTHVVSmFfT1AtdWxjMjdza05joXnZKzVRTWVaVTY2c1lWU19qeFlsSHNweWNWcjcwUTdxcVlQTjVnQjF0Q3loRkGna2V5X29wc5KpZGVyaXZlS2V5qmRlcml2ZUJpdHOja3R5okVDoWTZKzhMU1FoLUl5YU5vU3p6eEhGVXN6SlNCRDNueG50ZTE3X2VnYzk2OWF6Y0U=")
    }

    func testScheme2() throws {
        handlePrivateKeyScheme(scheme: "mask://persona/privatekey/h6NjcnalSy0yNTajZXh0w6F42StZMTRKSTF3VThsWGp3WVJCNEpYSktkajlCTHVVSmFfT1AtdWxjMjdza05joXnZKzVRTWVaVTY2c1lWU19qeFlsSHNweWNWcjcwUTdxcVlQTjVnQjF0Q3loRkGna2V5X29wc5KpZGVyaXZlS2V5qmRlcml2ZUJpdHOja3R5okVDoWTZKzhMU1FoLUl5YU5vU3p6eEhGVXN6SlNCRDNueG50ZTE3X2VnYzk2OWF6Y0U=?nickname=new persona")
    }

    func testScheme3() throws {
        handleScheme(scheme: "mask://persona/mnemonic/bHVja3kgZ2F0aGVyIGRhbmdlciByZXZlYWwgc29saWQgc3RhYmxlIGdpcmwgY3VwYm9hcmQgb3JkZXIgaW5kb29yIG1pbWljIHBpY3R1cmU=")
    }

    func testScheme4() throws {
        handleScheme(scheme: "mask://persona/mnemonic/bHVja3kgZ2F0aGVyIGRhbmdlciByZXZlYWwgc29saWQgc3RhYmxlIGdpcmwgY3VwYm9hcmQgb3JkZXIgaW5kb29yIG1pbWljIHBpY3R1cmU=?nickname=new persona")
    }
    
    func handleScheme(scheme: String) {
        let item = schemeService.personaImportItem(forPersonaScheme: scheme)
        XCTAssertNotNil(item)
        let expect = expectation(description: "testImportPersona")
        personaImportHandler.restore(from: item!) {
            XCTAssertTrue($0)
            expect.fulfill()
        }
        waitForExpectations(timeout: 5, handler: nil)
    }
    
    func handlePrivateKeyScheme(scheme: String) {
        let item = schemeService.personaImportItem(forPersonaScheme: scheme)
        XCTAssertNotNil(item)
        let expect = expectation(description: "testImportPersona")
        DispatchQueue.main.asyncAfter(deadline: .now() + .milliseconds(1_000)) {
            self.personaImportHandler.restore(from: item!) {
                XCTAssertTrue($0)
                expect.fulfill()
            }
        }
        waitForExpectations(timeout: 5, handler: nil)
    }
}
