//
//  CryptoTests.swift
//  MaskbookTests
//
//  Created by Hugo L on 2021/8/26.
//  Copyright © 2021 dimension. All rights reserved.
//

import Combine
@testable import Maskbook
import XCTest

class CryptoTests: XCTestCase {
    var disposeBag: Set<AnyCancellable>!

    override func setUpWithError() throws {
        // Put setup code here. This method is called before the invocation of each test method in the class.
        disposeBag = []
    }

    override func tearDownWithError() throws {
        // Put teardown code here. This method is called after the invocation of each test method in the class.
    }

    func testEncryptAndDecryptBackup() throws {
        do {
            let returnResult = try Crypto.encryptBackup(password: "1", account: "2", content: ["3": "4"])
            print("\(returnResult.bytes.toBase64())")
            let decrypt = try Crypto.decryptBackup(password: "1", account: "2", content: returnResult) as? [String: String]
            let correct = ["3": "4"]
            XCTAssertTrue(correct == decrypt, "decrypted data is: \(String(describing: decrypt)), the correct data is \(correct)")
        } catch {
            XCTAssert(false, "Encrypt failed \(error)")
        }
    }

    func testEncryptAndDecryptBackupCaseInsensitive() throws {
        do {
            let returnResult = try Crypto.encryptBackup(password: "1", account: "aaaa", content: ["3": "4"])
            print("\(returnResult.bytes.toBase64())")
            let decrypt = try Crypto.decryptBackup(password: "1", account: "aAAa", content: returnResult) as? [String: String]
            let correct = ["3": "4"]
            XCTAssertTrue(correct == decrypt, "decrypted data is: \(String(describing: decrypt)), the correct data is \(correct)")
        } catch {
            XCTAssert(false, "Encrypt failed \(error)")
        }
    }

    func testDecryptBackup() throws {
        do {
            let rawBase64 = "TUFTSy1CQUNLVVAtVjAwMJPEEPaYWp0YQ+Y/Fi/pr9b4oRfEEEVuCJbM8x/DZ7QjPmBpdjXEFQBu0S3F0jj2RCN1exy/KMGaojA68WfqWBf8G9IVATmadiX3ZJwOSoSLVoOTOAXQxB8GhnZT"
            let data = Data(base64Encoded: rawBase64)!
            _ = try Crypto.decryptBackup(password: "1", account: "2", content: data)
        } catch {
            XCTAssert(false, "Decrypt failed")
        }
    }

    func testFileServiceDecryption() {
        let ex = expectation(description: "testFileServiceDecryption")
        Task.detached {
            let content = "sample".data(using: .utf8)!
            for encryption in [true, false] {
                let attachment = AttachmentOptions(
                    encrypted: encryption,
                    type: "text/html",
                    block: content,
                    name: "sample.text"
                )
                let data = try attachment.encryptedData()
                let decryptData = try await FileService.decryptAttachment(data, key: attachment.key)
                assert(decryptData == content)
            }

            ex.fulfill()
        }

        wait(for: [ex], timeout: 60)
    }

    func testPluginParsing() {
        let json = """
            {
            "com.maskbook.fileservice": [
              {
                "key": "4KKWe0tFirEzhtey",
                "createdAt": "2022-07-11T07:19:10.787Z",
                "size": 955425,
                "name": "IMG_97D0332CFB39-1.jpeg",
                "provider": "arweave",
                "id": "khWB2VuSgoc8=0122bC5EtwlWiFvvwcrW1L85nBfOKc13q0U=",
                "type": "file",
                "landingTxID": "vZFZc133==pNiPBNhku0MPFwHvUnNVMCYKpZmVvpPAZvrQIs",
                "payloadTxID": "XoWgoR1DJmj--1BXGxowMrmlEEMpDRmW5W9N9rPlGGK2-U"
              },
              {
                "payloadTxID": "_qo-FJcrgf38OlVdadadadgMTQ9vMHjefhWShW8VwmhExyzt6g",
                "createdAt": "2022-07-07T03:16:06.123Z",
                "size": 951082,
                "name": "IMG_0470EDD5286E-1.jpeg",
                "provider": "arweave",
                "id": "6s6O\\/YwthWZdddaadNH6e+pYaUDLOsYShvVrfGRLUXJnjXJks=",
                "type": "file",
                "landingTxID": "9TnBr-13131fuPYNW4PozKXBz96_KSrexkC0aIeVefOZrQx1M",
                "key": "EAEnXu8Txn8t8MhF-0-111"
              },
              {
               "type": "file",
               "createdAt": "2022-07-13T08:48:16.275Z",
               "payloadTxID": "4TaVBJrH0n--====-ZcUsYeB8yj4BFUy55Pw8",
               "landingTxID": "Mcb=---siJDAOg7OfBYAlupdoSkP02k5VJ-Sf6EOqPrE3xY",
               "size": 713374,
               "id": "o0CSxPve7lMO3ftt6W2WOwo---99hZM2gQDv5v\\/LMkzShza0=",
               "provider": "arweave",
               "name": "IMG_44BDEFC6AFCC-1.jpeg"
              }
            ]
          }
        """.data(using: .utf8)!

        let jsonResult = Result<[String: Any]?, Error> {
            let dictinary = try JSONSerialization.jsonObject(with: json)
            return dictinary as? [String: Any]
        }
        .map {
            RestoreFile.Plugin(from: $0 ?? [:])
        }

        let jsonPlugin = try? jsonResult.get()
        XCTAssert(jsonPlugin.isSome)
        XCTAssert(jsonPlugin?.fileService?.isEmpty == false)

        let decodedResult = Result {
            try JSONDecoder().decode(RestoreFile.Plugin.self, from: json)
        }

        let decodedPlugin = try? decodedResult.get()
        XCTAssert(decodedPlugin.isSome)
        XCTAssert(decodedPlugin?.fileService?.isEmpty == false)

        XCTAssert(decodedPlugin?.fileService?.first?.key == "4KKWe0tFirEzhtey")
        XCTAssert(decodedPlugin?.fileService?.first?.createdAt == "2022-07-11T07:19:10.787Z")
        XCTAssert(decodedPlugin?.fileService?.first?.size == 955425)
        XCTAssert(decodedPlugin?.fileService?.first?.provider == "arweave")
        XCTAssert(decodedPlugin?.fileService?.first?.id == "khWB2VuSgoc8=0122bC5EtwlWiFvvwcrW1L85nBfOKc13q0U=")
        XCTAssert(decodedPlugin?.fileService?.first?.type == "file")
        XCTAssert(decodedPlugin?.fileService?.first?.landingTxID == "vZFZc133==pNiPBNhku0MPFwHvUnNVMCYKpZmVvpPAZvrQIs")
        XCTAssert(decodedPlugin?.fileService?.first?.payloadTxID == "XoWgoR1DJmj--1BXGxowMrmlEEMpDRmW5W9N9rPlGGK2-U")
    }
}
