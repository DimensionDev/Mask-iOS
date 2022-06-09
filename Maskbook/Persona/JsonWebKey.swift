//
//  JsonWebKey.swift
//  Maskbook
//
//  Created by Brad Gao on 2022/1/30.
//  Copyright © 2022 dimension. All rights reserved.
//

import Foundation
import SwiftMsgPack
import web3swift

struct JsonWebKey: Codable {
    struct RsaOtherPrimesInfo: Codable {
        let d: String?
        let r: String?
        let t: String?
    }

    let alg: String?
    let crv: String?
    let d: String?
    let dp: String?
    let dq: String?
    let e: String?
    // `ext` from JavaScript could be `Bool` or `Int` type, since we do not care the value of `ext`, we could simply ignore it here
//    let ext: Bool?
    let k: String?
    let key_ops: [String]?
    let kty: String?
    let n: String?
    let oth: [RsaOtherPrimesInfo]?
    let p: String?
    let q: String?
    let qi: String?
    let use: String?
    let x: String?
    let y: String?
}

extension JsonWebKey {
    var rawString: String? {
        let encoder = JSONEncoder()
        if let data = try? encoder.encode(self) {
            return String(data: data, encoding: .utf8)
        } else {
            return nil
        }
    }
}

extension JsonWebKey {
    var privateKeyPackedData: Data? {
        guard let key_ops = key_ops else { return nil }
        var data = Data()
        do {
            let type = MsgPackType.dict(items: 7)
            var type_value = try type.value()
            data.append(UnsafeBufferPointer(start: &type_value, count: 1))
            _ = try data.pack("y")
            _ = try data.pack(y ?? "")
            _ = try data.pack("x")
            _ = try data.pack(x ?? "")
            _ = try data.pack("key_ops")
            _ = try data.pack(key_ops)
            _ = try data.pack("kty")
            _ = try data.pack(kty ?? "")
            _ = try data.pack("ext")
            _ = try data.pack(true)
            _ = try data.pack("crv")
            _ = try data.pack(crv ?? "")
            _ = try data.pack("d")
            _ = try data.pack(d ?? "")
        } catch {
            print(error)
        }
        return data
    }

    var privateKeyBase64String: String? {
        privateKeyPackedData?.base64EncodedString()
    }
}

extension JsonWebKey {
    func getRawData() -> Data? {
        guard let x = x, let y = y else {
            return nil
        }
        guard let xData = Data(base64URLEncoded: x),
              let yData = Data(base64URLEncoded: y) else {
            return nil
        }
        var publicKeyData = Data()
        publicKeyData.append(0x04)
        publicKeyData.append(contentsOf: xData)
        publicKeyData.append(contentsOf: yData)
        return SECP256K1.combineSerializedPublicKeys(keys: [publicKeyData], outputCompressed: true)
    }
}
