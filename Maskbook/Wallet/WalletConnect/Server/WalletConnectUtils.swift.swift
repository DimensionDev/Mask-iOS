//
//  WalletConnectUtils.swift.swift
//  Maskbook
//
//  Created by sxiaojian on 2021/12/13.
//  Copyright © 2021 dimension. All rights reserved.
//

import BigInt
import Foundation

typealias UInt256 = BigUInt
typealias Int256 = BigInt

extension UInt256 {
    var data32: Data {
        Data(ethHex: String(self, radix: 16)).leftPadded(to: 32).suffix(32)
    }
}

extension Data {
    func leftPadded(to count: Int, with value: UInt8 = 0) -> Data {
        if self.count >= count { return self }
        return Data(repeating: value, count: count - self.count) + self
    }

    init(ethHex: String) {
        var value = ethHex
        while value.hasPrefix("0x") || value.hasPrefix("0X") { value = String(value.dropFirst(2)) }
        // if ethHex is not full byte, Data(hex:) adds nibble at the end, but we need it in the beginning
        let paddingToByte = value.count % 2 == 1 ? "0" : ""
        value = paddingToByte + value
        self.init(hex: value)
    }

    func toHexStringWithPrefix() -> String {
        toHexString().addHexPrefix()
    }
}

struct UInt256String: Hashable, Codable {
    let value: UInt256

    var data32: Data {
        value.data32
    }

    init<T>(_ value: T) where T: BinaryInteger {
        self.value = UInt256(value)
    }

    init(_ value: UInt256) {
        self.value = value
    }

    init(from decoder: Decoder) throws {
        let container = try decoder.singleValueContainer()
        if let string = try? container.decode(String.self) {
            if string.hasPrefix("0x") {
                let data = Data(ethHex: string)
                value = UInt256(data)
            } else if let uint256 = UInt256(string) {
                value = uint256
            } else {
                let context = DecodingError.Context(
                    codingPath: decoder.codingPath,
                    debugDescription: "Could not convert String \(string) to UInt256")
                throw DecodingError.valueNotFound(UInt256.self, context)
            }
        } else if let uint = try? container.decode(UInt.self) {
            value = UInt256(uint)
        } else if let int = try? container.decode(Int.self), int >= 0 {
            value = UInt256(int)
        } else {
            let context = DecodingError.Context(
                codingPath: decoder.codingPath,
                debugDescription: "Could not convert value to UInt256")
            throw DecodingError.valueNotFound(UInt256.self, context)
        }
    }

    func encode(to encoder: Encoder) throws {
        var container = encoder.singleValueContainer()
        try container.encode(value.description)
    }
}

extension UInt256String: ExpressibleByStringLiteral {
    init(stringLiteral value: StringLiteralType) {
        if let uint256Value = UInt256(value) {
            self = UInt256String(uint256Value)
        } else {
            preconditionFailure("Invalid literal UInt256 value: \(value)")
        }
    }
}

extension UInt256String: CustomStringConvertible {
    var description: String {
        String(value)
    }
}

struct DataString: Hashable, Codable {
    let data: Data

    init(_ data: Data) {
        self.data = data
    }

    init(hex: String) {
        data = Data(hex: hex)
    }

    init(from decoder: Decoder) throws {
        let container = try decoder.singleValueContainer()
        let string = try container.decode(String.self)
        data = Data(hex: string)
    }

    func encode(to encoder: Encoder) throws {
        var container = encoder.singleValueContainer()
        try container.encode(data.toHexStringWithPrefix())
    }
}

extension DataString: ExpressibleByStringLiteral {
    init(stringLiteral value: StringLiteralType) {
        self.init(Data(ethHex: value))
    }
}

extension DataString: CustomStringConvertible {
    var description: String {
        data.toHexStringWithPrefix()
    }
}
