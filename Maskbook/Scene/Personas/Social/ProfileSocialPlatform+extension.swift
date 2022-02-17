//
//  ConnectSocialViewModel.swift
//  Maskbook
//
//  Created by sxiaojian on 2021/8/23.
//  Copyright © 2021 dimension. All rights reserved.
//

import Foundation

extension ProfileSocialPlatform {
    var iconName: String {
        switch self {
        case .twitter:
            return Asset.Images.Scene.Personas.twitter.name
            
        case .facebook:
            return Asset.Images.Scene.Personas.facebook.name
        
        case .instagram:
            return Asset.Images.Scene.Personas.instagram.name
            
        case .minds:
            return Asset.Images.Scene.Personas.minds.name
        }
    }
    
    var title: String {
        switch self {
        case .twitter:
            return L10n.Scene.PersonaSocial.twitter
            
        case .facebook:
            return L10n.Scene.PersonaSocial.facebook
            
        case .instagram:
            return L10n.Scene.PersonaSocial.instagram
        
        case .minds:
            return L10n.Scene.PersonaSocial.minds
        }
    }
}
