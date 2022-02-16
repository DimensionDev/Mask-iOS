//
//  ProfileRecord.swift
//  Maskbook
//
//  Created by xiaojian sun on 2022/2/16.
//  Copyright © 2022 dimension. All rights reserved.
//

import Foundation
import CoreDataStack

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
        for profileSocialPlatform in ProfileSocialPlatform.allCases.enumerated() {
            if self.nonOptionalIdentifier.contains(profileSocialPlatform.element.url) {
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
