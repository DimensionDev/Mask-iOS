//
//  MaskWebMessage+Encryption.swift
//  Maskbook
//
//  Created by Brad Gao on 2022/6/10.
//  Copyright © 2022 dimension. All rights reserved.
//

import Foundation
import WebExtension_Shim

extension WebExtension.Encryption {
    struct PublishE2EResultMessage: MWEMessage {
        static let method: String = "publish_e2eResult_to_gun"
        
        struct Payload: Codable {
            struct EncryptionResultE2E: Codable {
                let target: String
                let encryptedPostKey: String
                /** This is used in v38. */
                let ivToBePublished: String
            }
            
            let postIV: String
            let networkHint: String
            let e2eResult: [EncryptionResultE2E]
        }
        var payload: Payload?
    }
}
