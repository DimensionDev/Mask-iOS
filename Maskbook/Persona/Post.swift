//
//  Post.swift
//  Maskbook
//
//  Created by xiaojian sun on 2022/2/18.
//  Copyright © 2022 dimension. All rights reserved.
//

import Foundation
import SwiftyJSON

struct Post: Codable {
    var identifier: String
    var encryptBy: String?
    var postBy: String
    var postCryptoKey: JSON?
    var url: String?
    var summary: String?
    var foundAt: Double
    var recipients: JSON
    var interestedMeta: JSON?
}
