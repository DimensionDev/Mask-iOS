//
//  MaskSchemeTest.swift
//  MaskbookTests
//
//  Created by xiaojian sun on 2022/4/24.
//  Copyright © 2022 dimension. All rights reserved.
//

import Combine
import Foundation
import WebExtension_Shim
import XCTest

@testable import Maskbook
class MaskSchemeTest: XCTestCase {
    private var disposeBag = Set<AnyCancellable>()

    @InjectedProvider(\.schemeService)
    private var schemeService

    private var personaImportHandler = PersonaImportHandler(scene: .userScan)

    @InjectedProvider(\.personaManager)
    private var personaManager

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
        handleMnemonicScheme(scheme: "mask://persona/mnemonic/bHVja3kgZ2F0aGVyIGRhbmdlciByZXZlYWwgc29saWQgc3RhYmxlIGdpcmwgY3VwYm9hcmQgb3JkZXIgaW5kb29yIG1pbWljIHBpY3R1cmU=")
    }

    func testScheme4() throws {
        handleMnemonicScheme(scheme: "mask://persona/mnemonic/bHVja3kgZ2F0aGVyIGRhbmdlciByZXZlYWwgc29saWQgc3RhYmxlIGdpcmwgY3VwYm9hcmQgb3JkZXIgaW5kb29yIG1pbWljIHBpY3R1cmU=?nickname=new persona")
    }

    func handleMnemonicScheme(scheme: String) {
        let item = schemeService.personaImportItem(forPersonaScheme: scheme)
        guard let item = item else {
            XCTAssert(false, "item parse failed")
            return
        }
        let expect = expectation(description: "testImportPersona")
        guard case let .mnemonic(mnemonic) = item.type else {
            return
        }
        let result = PersonaManager.createPersona(nickname: item.name ?? "nickname", mnemonic: mnemonic)
        guard case let .success(personaIdentifier) = result else {
            XCTAssert(false, "persona create failed")
            return
        }
        let persona1 = PersonaRepository.queryPersona(identifier: personaIdentifier)
            .flatMap {
                Persona(fromRecord: $0)
            }
        var persona2: Persona?
        DispatchQueue.main.asyncAfter(deadline: .now() + .milliseconds(3_000)) {
            let request = WebExtension.Persona.CreatePersonaByMnemonic.withPayload {
                WebExtension.Persona.CreatePersonaByMnemonic.Payload(mnemonic: mnemonic, nickname: item.name ?? "nickname", password: "")
            }
            request
                .eraseToAnyPublisher()
                .sink { completion in
                    print(completion)
                } receiveValue: { result in
                    if result.isSuccess {
                        let identifier = result.result?.dictionaryValue["identifier"]?.stringValue
                        persona2 = identifier
                            .flatMap {
                                PersonaRepository.queryPersona(identifier: $0)
                            }
                            .flatMap {
                                Persona(fromRecord: $0)
                            }
                    } else {
                        XCTAssert(false, "item parse failed")
                    }
                    expect.fulfill()
                }
                .store(in: &self.disposeBag)
        }
        waitForExpectations(timeout: 8, handler: nil)
        guard let persona1 = persona1, let persona2 = persona2 else {
            XCTAssert(false, "persona create failed")
            return
        }
        compare(persona1: persona1, persona2: persona2)
    }

    func compare(persona1: Persona, persona2: Persona) {
        XCTAssert(persona1.identifier == persona2.identifier, "identifier not equal")
        XCTAssert(persona1.privateKey?.rawString == persona2.privateKey?.rawString, "privateKey not equal")
        XCTAssert(persona1.publicKey?.x == persona2.publicKey?.x, "publicKey.x not equal")
        XCTAssert(persona1.publicKey?.y == persona2.publicKey?.y, "publicKey.y not equal")
        // public key has little different of d key
//        XCTAssert(persona1.publicKey?.rawString == persona2.publicKey?.rawString, "publicKey not equal")
        XCTAssert(persona1.localKey?.k == persona2.localKey?.k, "localKey not equal")
        XCTAssert(persona1.mnemonic?.words == persona2.mnemonic?.words, "mnemonic not equal")
    }

    func handlePrivateKeyScheme(scheme: String) {
        let item = schemeService.personaImportItem(forPersonaScheme: scheme)
        guard let item = item else {
            XCTAssert(false, "item parse failed")
            return
        }
        let expect = expectation(description: "testImportPersona")
        guard case let .privateKey(privateKey) = item.type else {
            return
        }
        // need wait app prepare js environment
        DispatchQueue.main.asyncAfter(deadline: .now() + .milliseconds(3_000)) {
            self.personaImportHandler.restoreFromPrivateKey(privateKey: privateKey, nickname: item.name) {
                XCTAssert($0 != nil)
                expect.fulfill()
            }
        }
        waitForExpectations(timeout: 5, handler: nil)
    }
}
