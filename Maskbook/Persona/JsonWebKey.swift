//
//  JsonWebKey.swift
//  Maskbook
//
//  Created by Brad Gao on 2022/1/30.
//  Copyright © 2022 dimension. All rights reserved.
//

import Foundation

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
    let ext: Bool?
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
