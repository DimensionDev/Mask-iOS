import Combine
import SwiftyJSON

@testable import Maskbook
import XCTest

class BackupAndResotreTests: XCTestCase {
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

    func testJSONMerging() {
        let json1 = JSON(
            [
                "plugin": [
                    "file": [
                        [
                            "size": 21,
                            "name": "jad"
                        ],
                        [
                            "size": 23,
                            "name": "lus"
                        ]
                    ]
                ]
            ]
        )

        let json2 = JSON(
            [
                "plugin": [
                    "file": [
                        [
                            "size": 34,
                            "name": "twil"
                        ],
                        [
                            "size": 441,
                            "name": "juw"
                        ]
                    ]
                ]
            ]
        )

        let result = Result {
            try json1.merged(with: JSON(json2))
        }

        switch result {
        case let .success(json):
            XCTAssert(json["plugin"]["file"].arrayValue.count == 4)
        case .failure:
            XCTFail("json merge failed")
        }
    }

    func testCodableDecoding() {
        func boolDecoding() {
            struct Meta: Codable {
                @BooleanConverted
                var share: Bool?
                var neme: String?
            }

            let json1 = #"{"share":1}"#.data(using: .utf8)!

            let result = Result {
                try JSONDecoder().decode(Meta.self, from: json1)
            }

            switch result {
            case let .success(value):
                XCTAssert(value.share == true)
            case let .failure(error):
                XCTFail("\(error)")
            }
        }

        func dateDecoding() {
            struct Meta: Codable {
                @MaybeUInt64ToDate
                var date: Date?
            }

            let json1 = #"{"date":192813313000}"#.data(using: .utf8)!

            let result = Result {
                try JSONDecoder().decode(Meta.self, from: json1)
            }

            switch result {
            case let .success(value):
                XCTAssert(value.date?.timeIntervalSince1970 == 192813313)
                let encoding = try! JSONEncoder().encode(value)
                let string = String(data: encoding, encoding: .utf8)
                XCTAssert(string == #"{"date":192813313000}"#)

            case let .failure(error):
                XCTFail("\(error)")
            }
        }

        func timeIntervalDecoding() {
            struct Meta: Codable {
                @MaybeUInt64ToTimeInterval
                var time: TimeInterval?
            }

            let json1 = #"{"time":192813313000}"#.data(using: .utf8)!

            let result = Result {
                try JSONDecoder().decode(Meta.self, from: json1)
            }

            switch result {
            case let .success(value):
                XCTAssert(value.time == 192813313)

                let encoding = try! JSONEncoder().encode(value)
                let string = String(data: encoding, encoding: .utf8)
                XCTAssert(string == #"{"time":192813313000}"#)

            case let .failure(error):
                XCTFail("\(error)")
            }
        }

        boolDecoding()
        dateDecoding()
        timeIntervalDecoding()
    }
}
