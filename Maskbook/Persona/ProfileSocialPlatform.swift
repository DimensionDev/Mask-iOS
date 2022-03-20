//
//  ProfileSocialURL.swift
//  Maskbook
//
//  Created by sxiaojian on 2021/8/23.
//  Copyright © 2021 dimension. All rights reserved.
//

import Foundation
import UIKit
import SwiftUI

enum ProfileSocialPlatform: Int, CaseIterable {
    case twitter
    case facebook
    case instagram
    case minds

    var url: String {
        switch self {
        case .twitter:
            return "twitter.com"
        case .facebook:
            return "facebook.com"
        case .instagram:
            return "instagram.com"
        case .minds:
            return "minds.com"
        }
    }
    
    var homeUrl: URL {
        switch self {
        case .twitter:
            return URL(string: "https://mobile.twitter.com")!

        case .facebook:
            return URL(string: "https://m.facebook.com")!

        case .instagram:
            return URL(string: "https://www.instagram.com")!
            
        case .minds:
            return URL(string: "https://www.minds.com")!
        }
    }
    
    var shortName: String {
        switch self {
        case .twitter: return L10n.Scene.PersonaSocial.twitter
        case .facebook: return L10n.Scene.PersonaSocial.facebook
        case .instagram: return L10n.Scene.PersonaSocial.instagram
        case .minds: return L10n.Scene.PersonaSocial.minds
        }
    }
    
    var icon: UIImage? {
        switch self {
        case .twitter: return Asset.Images.Scene.Personas.twitter.image
        case .facebook: return Asset.Images.Scene.Personas.facebook.image
        case .instagram: return Asset.Images.Scene.Personas.instagram.image
        case .minds: return Asset.Images.Scene.Personas.minds.image
        }
    }
    
    var iconImage: Image {
        switch self {
        case .twitter: return Asset.Images.Scene.Personas.twitter.asImage()
        case .facebook: return Asset.Images.Scene.Personas.facebook.asImage()
        case .instagram: return Asset.Images.Scene.Personas.instagram.asImage()
        case .minds: return Asset.Images.Scene.Personas.minds.asImage()
        }
    }
    
    var maskAccountName: String? {
        switch self {
        case .twitter:
            return "realMaskNetwork"
        case .facebook:
            return "masknetwork"
        case .instagram:
            return nil
        case .minds:
            return nil
        }
    }
}
