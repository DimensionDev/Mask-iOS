//
//  Relation.swift
//  Maskbook
//
//  Created by Brad Gao on 2022/1/22.
//  Copyright © 2022 dimension. All rights reserved.
//

import Foundation

struct Relation {
    enum CodingKeys: String, CodingKey {
        case personaIdentifier = "linked"
        case profileIdentifier = "profile"
        case network
        case favor
    }
    
    enum Favor: Int, Codable {
        case collected = -1
        case uncollected = 1
    }
    
    let personaIdentifier: String
    let profileIdentifier: String
    let network: String?
    let favor: Favor
}

extension Relation: Codable {
    init(from decoder: Decoder) throws {
        let container = try decoder.container(keyedBy: Relation.CodingKeys.self)
        personaIdentifier = try container.decode(String.self, forKey: .personaIdentifier)
        profileIdentifier = try container.decode(String.self, forKey: .profileIdentifier)
        network = try container.decodeIfPresent(String.self, forKey: .network)
        favor = try container.decode(Favor.self, forKey: .favor)
    }
}
