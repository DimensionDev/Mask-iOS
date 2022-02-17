//
//  MaskWalletTests.swift
//  MaskWalletTests
//
//  Created by BradGao on 2021/3/24.
//  Copyright © 2021 dimension. All rights reserved.
//

@testable import Maskbook
import XCTest

class MaskWalletTests: XCTestCase {
//    private var keyStore: MaskWalletStore?
    
    private static let testWalletDirectoryName = "test"
    
    private let testWalletDirectory: URL = {
        let directoryURLs = FileManager.default.urls(for: .documentDirectory, in: .userDomainMask)
        let testWalletDirectory = directoryURLs[0].appendingPathComponent(testWalletDirectoryName)
        try? FileManager.default.createDirectory(at: testWalletDirectory, withIntermediateDirectories: true, attributes: nil)
        return testWalletDirectory
    }()

    override func setUpWithError() throws {
//        keyStore = try MaskWalletStore(keyDirectory: testWalletDirectory)
    }

    override func tearDownWithError() throws {
//        try keyStore?.removeAllWallets()
    }

    func testCreateWallet() throws {
//        let walletName1 = "wallet1"
//        let password1 = "mask.io"
//        let testWallet1 = try keyStore?.createWallet(name: walletName1, password: password1)
//        XCTAssertEqual(testWallet1?.name, walletName1)
    }
    
    func testRemoveAllWallets() throws {
//        try testCreateWallet()
//        try testCreateWallet()
//        XCTAssertEqual(keyStore?.wallets.count, 2)
//        try keyStore?.removeAllWallets()
//        XCTAssertEqual(keyStore?.wallets.count, 0)
    }
    
    func testExportAndImportMnemonic() throws {
//        let walletName1 = "wallet1"
//        let password1 = "mask.io"
//        let wrongPassword1 = "mask.com"
//
//        let walletName2 = "wallet2"
//        let password2 = "mask.io2"
//
//        let testWallet1 = try keyStore?.createWallet(name: walletName1, password: password1)
//        do {
//            _ = try keyStore?.exportMnemonic(wallet: testWallet1!, password: wrongPassword1)
//        } catch {
//            XCTAssertEqual(error.localizedDescription, MaskWalletError.invalidPassword.localizedDescription)
//        }
//        let mnemonic = try keyStore?.exportMnemonic(wallet: testWallet1!, password: password1)
//        XCTAssertNotNil(mnemonic)
//
//        let importedWallet = try keyStore?.importWallet(mnemonic: mnemonic!, name: walletName2, password: password2)
//        XCTAssertEqual(keyStore?.wallets.count, 2)
//        let exportedMnemoic = try keyStore?.exportMnemonic(wallet: importedWallet!, password: password2)
//
//        XCTAssertEqual(mnemonic, exportedMnemoic)
    }

    func testPerformanceExample() throws {
        // This is an example of a performance test case.
        measure {
            for _ in 0..<10 {
                try? testCreateWallet()
            }
        }
    }
}
