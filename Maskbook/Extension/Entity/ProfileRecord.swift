//
//  ProfileRecord.swift
//  Maskbook
//
//  Created by xiaojian sun on 2022/2/16.
//  Copyright © 2022 dimension. All rights reserved.
//

import CoreDataStack
import Foundation

extension ProfileRecord {
    var nonOptionalIdentifier: String {
        guard let identifier = identifier else {
            log.debug("PersonaRecord's identifier is nil", source: "persona")
            fatalError()
        }
        return identifier
    }
    
    var socialID: String {
        let id = nonOptionalIdentifier.components(separatedBy: "/").last
        if let id = id {
            return "@\(id)"
        } else {
            return nonOptionalIdentifier
        }
    }
    
    var socialPlatform: ProfileSocialPlatform {
        return Self.getSocialPlatformFromIdentifier(nonOptionalIdentifier) ?? .twitter
    }
    
    static func getSocialPlatformFromIdentifier(_ identifier: String) -> ProfileSocialPlatform? {
        guard let platformString = identifier.components(separatedBy: "/").first else {
            return nil
        }
        for profileSocialPlatform in ProfileSocialPlatform.allCases {
            if platformString.contains(profileSocialPlatform.url) {
                return profileSocialPlatform.self
            }
        }
        return nil
    }
}
