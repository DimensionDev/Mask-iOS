//
//  Data+Hash.swift
//  Maskbook
//
//  Created by xiaojian sun on 2022/6/20.
//  Copyright © 2022 dimension. All rights reserved.
//

import Foundation
import CryptoKit

extension Data {
    func hashData() -> Data {
        return Data(SHA256.hash(data: self))
    }
}
