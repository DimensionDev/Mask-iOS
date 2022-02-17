//
//  NSDiffableSourceTests.swift
//  MaskbookTests
//
//  Created by yzj on 2021/7/12.
//  Copyright © 2021 dimension. All rights reserved.
//

@testable import Maskbook
import XCTest

class NSDiffableSourceTests: XCTestCase {
    func testDiffableSoureSnapshot() {
        typealias SectionItem = SectionPack<String, String>
        let condition = Bool.random()

        let firstSection = ["name"]
        let firstItems = ["kei", "buz"]

        let secondSection = ["toys"]
        let secondItems = ["babi", "vondor"]

        let builderShot = NSDiffableDataSourceSnapshot {
            SectionItem.single(.init(section: firstSection.first ?? "", items: ["kei", "buz"]))
            if condition {
                SectionItem.single(.init(section: secondSection.first ?? "", items: secondItems))
            }
        }

        var impleShot = NSDiffableDataSourceSnapshot<String, String>()
        impleShot.appendSections(firstSection)
        impleShot.appendItems(firstItems, toSection: firstSection.first)
        if condition {
            impleShot.appendSections(secondSection)
            impleShot.appendItems(secondItems, toSection: secondSection.first ?? "")
        }

        XCTAssert(impleShot.sectionIdentifiers == builderShot.sectionIdentifiers)
        XCTAssert(
            impleShot.itemIdentifiers(inSection: firstSection.first ?? "")
                ==
            builderShot.itemIdentifiers(inSection: firstSection.first ?? "")
        )
    }
}

extension XCTestCase {
    func compare<O, N, V: Equatable>(
        old oldImplement: O,
        new newImplement: N,
        on oldImpKeyPath: KeyPath<O, V>,
        and newImpKeyPath: KeyPath<N, V>
    ) {
        XCTAssert(oldImplement[keyPath: oldImpKeyPath] == newImplement[keyPath: newImpKeyPath])
    }

    func compare<O, N, V: Equatable>(
        old oldImplement: O,
        new newImplement: N,
        on oldImpKeyPath: KeyPath<O, V>,
        and newImpKeyPath: KeyPath<N, V?>
    ) {
        XCTAssert(oldImplement[keyPath: oldImpKeyPath] == newImplement[keyPath: newImpKeyPath])
    }

    func assertTransformEqual<O, N, T: Equatable>(
        old: O,
        new: N,
        oldTransform: @escaping (O) -> T,
        newTransform: @escaping (N) -> T
    ) {
        let oldValue = oldTransform(old)
        let newValue = newTransform(new)
        XCTAssert(oldValue == newValue)
    }
}
