//
//  MaskbookTests.swift
//  MaskbookTests
//
//  Created by Cirno MainasuK on 2019-6-26.
//  Copyright © 2019 dimension. All rights reserved.
//

@testable import Maskbook
import MaskbookPlugin
import WebExtension_Shim
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

    func testStringClip() {
        let userId = "twitter.com/ttqeeqqeeq"
        let testString = "person:twitter.com/ttqeeqqeeq"
        let result = testString.clip(first: "person:".count)
        XCTAssertEqual(userId, result)

        XCTAssertFalse(userId == testString.clip(first: (testString + "1").count))

        let empty = ""
        let emptyTestString = "person:"
        let emptyResult = emptyTestString.clip(first: "person:".count)
        XCTAssertEqual(empty, emptyResult)
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


    func testDebankAPIModle() {
        guard #available(iOS 14, *) else {
            return
        }
        // related issue [se-13837]
        // https://github.com/apple/swift-corelibs-foundation/pull/2926/files
        typealias Approve =  DebankAPIModel.TransactionResponse.History.Approve
        let doubleValues: [Double] = [
            0.199_854,
            1.157920892373162e+59,
            1.157920892373162e+71
        ]

        func getDecimalModels() -> [Decimal] {
            if let data = try? JSONEncoder().encode(doubleValues) {
                let decimalModels = try? JSONDecoder().decode([Decimal].self, from: data)
                return decimalModels ?? []
            }

            return []
        }

        let decimalModels = getDecimalModels()

        let models = doubleValues.map {
            Approve(spender: "", value: .or("\($0)"), tokenId: "")
        }

        let decimals: [NSDecimalNumber] = doubleValues.map {
            let decimal = Decimal($0)
            return NSDecimalNumber(decimal: decimal)
        }

        // assert string valueDecimalNumber equal
        XCTAssert(models.map(\.value.decimalNumber.doubleValue) == decimals.map { $0.doubleValue } )
        // the first doubleValue will not match, as the rest values equal
        XCTAssert(models.map(\.value.decimalNumber.doubleValue) != doubleValues)
        // assert deicmal eqaual
        XCTAssert(decimalModels.map { NSDecimalNumber(decimal: $0).doubleValue } == decimals.map(\.doubleValue))

        let crashDoubles = [
            1.8446744073709550e+19,
            1.8446744073709551e+19,
            1.8446744073709552e+19,
            1.8446744073709553e+19
        ]

        let crahsModels = crashDoubles.map {
            Approve(spender: "", value: .or("\($0)"), tokenId: "").value.decimalNumber.doubleValue
        }

        XCTAssert(crashDoubles != crahsModels)

        let crashDecimals = crashDoubles.map {
            Approve(spender: "", value: .or("\($0)"), tokenId: "").value.decimalNumber.decimalValue
        }

        XCTAssert(crashDecimals.map { NSDecimalNumber(decimal: $0).doubleValue } == crahsModels)
    }

    func testDecimalConvert() {
        struct TestModel: Decodable {
            @DecimalConverted
            var name: EitherOr<Decimal, String>
            let title: String

            @DecimalConverted
            var age: EitherOr<Decimal, String>
        }

        let json = """
        { "title": "Six", "age": 1.8446744073709553e+19 }
        """.data(using: .utf8)!

        guard let result = try? JSONDecoder().decode(TestModel.self, from: json) else {
            XCTAssert(false)
            return
        }

        XCTAssert(result.name.decimalNumber.decimalValue == Decimal.zero)

        if #available(iOS 15, *) {
            XCTAssert(result.age.decimalNumber.doubleValue == 1.8446744073709553e+19)
        }

        if #available(iOS 14, *) {
            XCTAssert(result.age.decimalNumber.doubleValue == 1.8446744073709552e+19)
        }
    }

    func testFlattenWrapper() {
        let string = """
        {
          "_meta_": {
            "createdAt": 1625651275294,
            "maskbookVersion": "1.33.2",
            "version": 2,
            "type": "maskbook-backup"
          },
          "grantedHostPermissions": [
            "https://facebook.com/*",
            "https://m.facebook.com/*",
            "https://mobile.twitter.com/*",
            "https://twitter.com/*",
            "https://www.facebook.com/*"
          ],
          "personas": [
              {
                    "createdAt": 0,
                    "updatedAt": 1623406364925,
                    "identifier": "ec_key:secp256k1/--1345TblKN40|JUXl4B1HsISVoJc5gSVBYCXiolhxa8D5Q",
                    "publicKey": {
                      "crv": "K-256",
                      "ext": true,
                      "x": "1133aaAdeXgHUewhJWglzmBJUFgJeKiWHFrwPlA",
                      "y": "aXcaQ8Rq5_iFEEE9d9LY-O4GtzeYXqejg6l6EOgidMI",
                      "key_ops": ["deriveKey", "deriveBits"],
                      "kty": "EC"
                    },
                    "privateKey": {
                      "crv": "K-256",
                      "ext": true,
                      "x": "eXgHUewhJWglzmBJUFgJeKiWHFrwPlA",
                      "y": "LY-O4GtzeYXqejg6l6EOgidMI",
                      "key_ops": ["deriveKey", "deriveBits"],
                      "kty": "EC",
                      "d": "ovqkNeNmo900i8wEVJ6ncbSbaBHU"
                    },
                    "nickname": "Suji Yan",
                    "localKey": {
                      "alg": "A256GCM",
                      "ext": true,
                      "k": "8RmFU-a7K_Rm7nwNi_lpM5AvPlc",
                      "key_ops": ["encrypt", "decrypt"],
                      "kty": "oct"
                    },
                    "linkedProfiles": [
                      [
                        "person:facebook.com/xxx.t.me",
                        { "connectionConfirmState": "confirmed" }
                      ],
                      [
                        "person:twitter.com/11-011",
                        { "connectionConfirmState": "confirmed" }
                      ]
                    ]
            }
           ],
           "posts": [
              {
                    "postCryptoKey": {
                      "alg": "A256GCM",
                      "ext": true,
                      "k": "3tGTrX1Y8c-_4lSZo_qa12P-ck2h1EkrKavb_vKr8HA",
                      "key_ops": ["encrypt", "decrypt"],
                      "kty": "oct"
                    },
                    "foundAt": 1580188535514,
                    "identifier": "post_iv:facebook.com/1EDbWCKmLRWAbPgw+x0Wug==",
                    "postBy": "person:facebook.com/suji.yan.me",
                    "recipientGroups": [
                      "group:facebook.com/suji.yan.me/_default_friends_group_"
                    ],
                    "recipients": [
                           [
                             "person:facebook.com/hedley.pritchard",
                             {
                               "reason": [
                                 {
                                   "at": 1601218773818,
                                   "group": "group:facebook.com/suji.yan.me/_default_friends_group_",
                                   "type": "group"
                                 }
                               ]
                             }
                           ]
                   ]
              }
           ],
           "userGroups": [
               {
                 "groupName": "_default_friends_group_",
                 "identifier": "group:facebook.com/qingjin.wang/_default_friends_group_",
                 "members": []
               }
            ],
            "profiles": [
                {
                  "createdAt": 1613964355238,
                  "updatedAt": 1613964355238,
                  "identifier": "person:twitter.com/zhu07950194",
                  "nickname": "zhu",
                  "linkedPersona": "ec_key:secp256k1/A---myqiEmBoIwTjSvxmTdCXqNRhnd9DjElmTd0S"
                },
                {
                  "createdAt": 1614041590933,
                  "updatedAt": 1614041590933,
                  "identifier": "person:twitter.com/zihudei1",
                  "nickname": "zihudei1",
                  "linkedPersona": "ec_key:secp256k1/A13FDd5u55+4OrlF1XXw|+Fd1sMjC"
                }
              ],
              "wallets": [
                 {
                       "createdAt": 1653994935265,
                       "address": "0x790116d0685eB197B886DAcAD9C247f785987A4a",
                       "updatedAt": 1653994935265,
                       "privateKey": {
                         "ext": true,
                         "kty": "EC",
                         "d": "F2kgyi804SCSafJhk86ykUMVo2o",
                         "y": "M3GpDEEScB0Bu4mCvVOltjpZk",
                         "key_ops": ["deriveKey", "deriveBits"],
                         "x": "jr3ZH8o_IzX2SATg3uBfJk",
                         "crv": "K-256"
                       },
                       "name": "Test",
                     },
                     {
                       "address": "0xB1336B558870b30145c8577b76ed630",
                       "createdAt": 1653994842714,
                       "updatedAt": 1653994842714,
                       "mnemonic": {
                         "words": "journey eye public leopard cost glass sword wet",
                         "parameter": {
                           "withPassword": false,
                           "path": "m\\/44'\\/60'\\/0'\\/0\\/0"
                         }
                       },
                       "name": "MetaMask0",
                     }
              ]
        }
        """

        guard let data = string.data(using: .utf8) else {
            return
        }

        do {
            let model = try JSONDecoder().decode(RestoreFile.self, from: data)
            print(model)
            XCTAssert(model.wallets.isSome)
        } catch {
            print(error)
            XCTFail(error.localizedDescription)
        }
    }

    func testCustomDictionaryDecoding() {
        let json = """
        ["person:facebook.com\\/hedley.pritchard",{"reason":[{"at":1601218773818,"group":"group:facebook.com\\/suji.yan.me\\/_default_friends_group_","type":"group"}]}]
        """

        do {
            let data = try JSONDecoder().decode([RestoreFile.StringKey: RestoreFile.Recipient].self, from: json.data(using: .utf8)!)
            print(data)
            XCTAssert(data.isEmpty == false)

            let rawData = try JSONEncoder().encode(data)
            let rawString = String(data: rawData, encoding: .utf8)

            XCTAssert(json == rawString)
        } catch {
            XCTFail("Recipient decode failed")
        }


        let profileData = """
        ["person:facebook.com\\/xxx.t.me",{"connectionConfirmState":"confirmed"}]
        """

        do {
            let data = try JSONDecoder().decode([RestoreFile.StringKey: RestoreFile.LinkedProfile].self, from: profileData.data(using: .utf8)!)
            print(data)
            XCTAssert(data.isEmpty == false)

            let json = try JSONEncoder().encode(data)
            let rawString = String(data: json, encoding: .utf8)

            XCTAssert(profileData == rawString)
        } catch {
            XCTFail("LinkedProfile decode failed")
        }
    }
}
