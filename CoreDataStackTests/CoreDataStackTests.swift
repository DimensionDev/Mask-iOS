//
//  CoreDataStackTests.swift
//  CoreDataStackTests
//
//  Created by BradGao on 2021/5/19.
//  Copyright © 2021 dimension. All rights reserved.
//

@testable import CoreDataStack
import XCTest

@objcMembers
final class Person: NSObject {
    let name: String?
    let date: Date
    let id: String

    let pet: Pet

    init(name: String?, date: Date, id: String) {
        self.name = name
        self.date = date
        self.id = id
        self.pet = .init(name: name)
    }

    @objcMembers
    final class Pet: NSObject {
        let name: String?

        init(name: String?) {
            self.name = name
        }
    }
}

class CoreDataStackTests: XCTestCase {
    override func setUpWithError() throws {
        try super.setUpWithError()
        // Put setup code here. This method is called before the invocation of each test method in the class.
    }

    override func tearDownWithError() throws {
        try super.tearDownWithError()
        // Put teardown code here. This method is called after the invocation of each test method in the class.
    }

    func testExample() throws {
        // This is an example of a functional test case.
        // Use XCTAssert and related functions to verify your tests produce the correct results.
    }

    func testPerformanceExample() throws {
        // This is an example of a performance test case.
        self.measure {
            // Put the code you want to measure the time of here.
        }
    }

    func testPredicates() {
        let persons = [
            Person(name: "mike", date: Date(timeIntervalSince1970: 8), id: "113"),
            .init(name: "tale", date: Date(), id: "daa"),
            .init(name: nil, date: Date(), id: "131")
        ]

        // note Int? is not supported by predicate
        let agePredicate = \Person.date > Date()

        let result = persons.filter { agePredicate.evaluate(with: $0) }
        XCTAssert(result.first?.name != "mike")
    }
}
