//
//  VersionNumber.swift
//  Maskbook
//
//  Created by sxiaojian on 2021/7/14.
//  Copyright © 2021 dimension. All rights reserved.
//

struct VersionNumber {
    let version: String

    init(version: String) {
        self.version = version
    }
}

extension VersionNumber: Comparable {
    static func > (lhs: VersionNumber, rhs: VersionNumber) -> Bool {
        return compare(lhs, rhs) == 1
    }

    static func < (lhs: VersionNumber, rhs: VersionNumber) -> Bool {
        return compare(lhs, rhs) == -1
    }
    static func == (lhs: VersionNumber, rhs: VersionNumber) -> Bool {
        return compare(lhs, rhs) == 0
    }
}

// Returns 1 if lhs > rhs, -1 if lhs < rhs and 0 if lhs = rhs
private func compare(_ lhs: VersionNumber, _ rhs: VersionNumber) -> Int {
    let lhsVersionComponents = lhs.version.components(separatedBy: ".").map { Int($0) ?? 0 }
    let rhsVersionComponents = rhs.version.components(separatedBy: ".").map { Int($0) ?? 0 }

    for i in 0..<max(lhsVersionComponents.count, rhsVersionComponents.count) {
        let l = i >= lhsVersionComponents.count ? 0 : lhsVersionComponents[i]
        let r = i >= rhsVersionComponents.count ? 0 : rhsVersionComponents[i]
        let comparison = l - r
        if comparison > 0 {
            return 1
        } else if comparison < 0 {
            return -1
        } // (else test next component)
    }

    return 0 // version numbers are equal
}
