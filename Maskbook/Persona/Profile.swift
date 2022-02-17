//
//  Profile.swift
//  Maskbook
//
//  Created by sxiaojian on 2021/8/20.
//  Copyright © 2021 dimension. All rights reserved.
//

import Foundation
import SwiftyJSON

struct Profile: Equatable {
    var updatedAt: TimeInterval
    var nickname: String?
    var linkedPersona: String?
    var createdAt: TimeInterval
    var identifier: String
    var network: String
    
    enum CodingKeys: String, CodingKey
    {
        case identifier
        case nickname
        case linkedPersona
        case createdAt
        case updatedAt
    }
    
    init?(identifier: String) {
        guard let socialPlatform = Profile.getSocialPlatformFromIdentifier(identifier) else {
            return nil
        }
        self.identifier = identifier
        network = socialPlatform.url
        nickname = nil
        linkedPersona = nil
        createdAt = Date().timeIntervalSince1970
        updatedAt = Date().timeIntervalSince1970
    }
    
    static func == (lhs: Self, rhs: Self) -> Bool {
        return lhs.identifier == rhs.identifier
    }
}

extension Profile {
    var socialID: String {
        let id = identifier.components(separatedBy: "/").last
        if let id = id {
            return "@\(id)"
        } else {
            return identifier
        }
    }
    
    var socialPlatform: ProfileSocialPlatform {
        for profileSocialPlatform in ProfileSocialPlatform.allCases.enumerated() {
            if self.identifier.contains(profileSocialPlatform.element.url) {
                return profileSocialPlatform.element.self
            }
        }
        return .twitter
    }
    
    static func getSocialPlatformFromIdentifier(_ identifier: String) -> ProfileSocialPlatform? {
        for profileSocialPlatform in ProfileSocialPlatform.allCases.enumerated() {
            if identifier.contains(profileSocialPlatform.element.url) {
                return profileSocialPlatform.element.self
            }
        }
        return nil
    }
}

extension Profile: Codable {
    init(from decoder: Decoder) throws {
        let container = try decoder.container(keyedBy: Profile.CodingKeys.self)
        identifier = try container.decode(String.self, forKey: .identifier)
        nickname = try container.decodeIfPresent(String.self, forKey: .nickname)
        linkedPersona = try container.decodeIfPresent(String.self, forKey: .linkedPersona)
        createdAt = try container.decode(Double.self, forKey: .createdAt)
        updatedAt = try container.decode(Double.self, forKey: .updatedAt)
        
        var networkString = ProfileSocialPlatform.twitter.url
        for profileSocialPlatform in ProfileSocialPlatform.allCases.enumerated() {
            if identifier.contains(profileSocialPlatform.element.url) {
                networkString = profileSocialPlatform.element.url
            }
        }
        network = networkString
    }
}
