//
//  Api_JWKResp.swift
//  Maskbook
//
//  Created by xiaojian sun on 2022/4/24.
//  Copyright © 2022 dimension. All rights reserved.
//

import Foundation
import MaskWalletCore
import SwiftyJSON

extension Api_JWK {
    var jsonString: String? {
        var json = JSON()
        json["crv"] = JSON(rawValue: crv) ?? []
        json["x"] = JSON(rawValue: x) ?? []
        json["y"] = JSON(rawValue: y) ?? []
        json["key_ops"] = JSON(rawValue: keyOps) ?? []
        json["kty"] = JSON(rawValue: kty) ?? []
        json["d"] = JSON(rawValue: d) ?? []
        return json.rawString()
    }
}

extension Api_AesJWK {
    var jsonString: String? {
        var json = JSON()
        json["alg"] = JSON(rawValue: alg) ?? []
        json["k"] = JSON(rawValue: k) ?? []
        json["key_ops"] = JSON(rawValue: keyOps) ?? []
        json["kty"] = JSON(rawValue: kty) ?? []
        return json.rawString()
    }
}
