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
    
    enum CodingKeys: String, CodingKey
    {
        case identifier
        case encryptBy
        case postBy
        case postCryptoKey
        case url
        case recipients
        case interestedMeta
        case summary
        case foundAt
    }
    
    var identifier: String
    var encryptBy: String?
    var postBy: String?
    var postCryptoKey: JSON?
    var url: String?
    var summary: String?
    var foundAt: Double?
    var recipients: JSON?
    var interestedMeta: JSON?
}
