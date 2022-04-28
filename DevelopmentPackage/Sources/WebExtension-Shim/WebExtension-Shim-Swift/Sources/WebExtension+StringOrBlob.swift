//
//  WebExtension+StringOrBlob.swift
//  HoloflowsKit
//
//  Created by Cirno MainasuK on 2019-7-10.
//

import Foundation

extension WebExtension {

    public struct StringOrBlob: Codable {
        public let type: ContentType
        public let content: String
        public let mimeType: String?

        public init(type: ContentType, content: String, mimeType: String?) {
            self.type = type
            self.content = content
            self.mimeType = mimeType
        }

        public enum ContentType: String, Codable {
            case text = "text"
            case blob = "blob"
        }
    }

}
