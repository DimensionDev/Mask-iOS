import Foundation

import BigInt

extension BigUInt {
    func asInt() -> Int? {
        let stringValue = String(self, radix: 10)
        return Int(stringValue)
    }
}

extension BigInt {
    func asInt() -> Int? {
        let stringValue = String(self, radix: 10)
        return Int(stringValue)
    }
}

extension BigInt {
    func asDouble() -> Double? {
        let stringValue = String(self, radix: 10)
        return Double(stringValue)
    }
}

extension BigUInt {
    func asDouble() -> Double? {
        let stringValue = String(self, radix: 10)
        return Double(stringValue)
    }
}
