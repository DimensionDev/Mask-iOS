//
//  MaskWebMessage+SNSAdaptor.swift
//  Maskbook
//
//  Created by BradGao on 2021/8/22.
//  Copyright © 2021 dimension. All rights reserved.
//

import Foundation
import WebExtension_Shim

struct SocialProfile: Hashable {
    let network: String
    let userId: String
    
    var connected = false
    
    private static let prefix = "person:"
    
    init?(profileIdentifier: String) {
        /// Identifier format: person:twitter.com/falling_asleep_
        let nomalized = profileIdentifier.replacingOccurrences(of: Self.prefix, with: "")
        let components = nomalized.split(separator: "/")
        guard components.count == 2 else {
            return nil
        }
        let network = String(components[0])
        guard network != "localhost" else { return nil }
        self.network = String(components[0])
        self.userId = String(components[1])
    }
    
    var identifier: String {
        "\(Self.prefix)\(network)/\(userId)"
    }
    
    static func == (lhs: Self, rhs: Self) -> Bool {
        return lhs.network == rhs.network && lhs.userId == rhs.userId
    }
    
    func hash(into hasher: inout Hasher) {
        hasher.combine(identifier)
    }
}

extension WebExtension.SNSAdaptor {
    struct GetCurrentDetectedProfile: MWEMessage {
        static let method: String = "SNSAdaptor_getCurrentDetectedProfile"
        typealias Payload = String
        var target: MaskMessageTarget
        init(payload: String? = nil) {
            self.target = .background
        }
        init(target: MaskMessageTarget) {
            self.init(payload: nil)
            self.target = target
        }
    }
}
