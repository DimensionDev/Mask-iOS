//
//  ShareLinkGenerator.swift
//  Maskbook
//
//  Created by Brad Gao on 2022/1/29.
//  Copyright © 2022 dimension. All rights reserved.
//

import Foundation

enum ShareLinkGenerator {
    static func generateShareLink(platform: ProfileSocialPlatform,
                                  payload: RedPacketInteractivePayload) -> URL? {
        let sender: String? = {
            switch payload.redpacketPayload {
            case .either(let tokenPayload):
                return tokenPayload.payload?.sender.name
                
            case .or(let nftPayload):
                return nftPayload.senderName
            }
        }()
        
        let network = payload.blockchainNetwork?.name
        
        let postLink: String = {
            switch payload.postLink {
            case .either(let url):
                return url
                
            case .or(let url):
                return url.absoluteString
            }
        }()
        
        let officialAccountName = platform.maskAccountName
        
        var message: String = {
            if platform == .twitter || platform == .facebook {
                return L10n.Scene.OpenRedPackage.shareMessageOfficial(sender ?? "",
                                                                      network ?? "",
                                                                      officialAccountName ?? "",
                                                                      postLink)
            } else {
                return L10n.Scene.OpenRedPackage.shareMessageUnsupportPlatform(sender ?? "",
                                                                               network ?? "",
                                                                               postLink)
            }
        }()
        message = message.addingPercentEncoding(withAllowedCharacters: .urlQueryAllowed)!
        
        let shareLink: URL? = {
            switch platform {
            case .twitter:
                return URL(string: "https://twitter.com/intent/tweet?text=\(message)")!
            case .facebook:
                let url = URL(string: "https://www.facebook.com/sharer/sharer.php")!
                var urlComponent = URLComponents(
                    url: url,
                    resolvingAgainstBaseURL: false)!
                
                urlComponent.queryItems = [URLQueryItem(name: "quote", value: message),
                                           URLQueryItem(name: "u", value: "mask.io")]
                return urlComponent.url
            case .instagram:
                return nil
            case .minds:
                return URL(string: "https://www.minds.com/newsfeed/subscriptions?intentUrl=\(message)")
            }
        }()
        return shareLink
    }
}
