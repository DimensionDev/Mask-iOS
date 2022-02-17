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
}
