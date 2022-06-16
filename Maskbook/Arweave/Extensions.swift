//
//  Extensions.swift
//  Maskbook
//
//  Created by xiaojian sun on 2022/6/15.
//  Copyright © 2022 dimension. All rights reserved.
//

import CryptoKit
import Foundation

extension Digest {
    var bytes: [UInt8] { Array(makeIterator()) }
    var data: Data { Data(bytes) }
}

extension String {
    var base64URLEncoded: String {
        Data(utf8).base64URLEncodedString()
    }
}

extension Array where Element == Data {
    var combined: Data {
       reduce(.init(), +)
    }
}

extension StringProtocol {
    subscript(offset: Int) -> Character {
        self[index(startIndex, offsetBy: offset)]
    }
}

extension String {
    var uint8Array: [UInt8] {
        Array(utf8)
    }
    
    var base64URLData: Data {
        Data(base64URLEncoded: base64URLEncoded)!
    }
}

