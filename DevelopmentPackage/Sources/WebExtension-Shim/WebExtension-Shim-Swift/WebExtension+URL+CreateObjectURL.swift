//
//  WebExtension+URL+CreateObjectURL.swift
//  HoloflowsKit
//
//  Created by Cirno MainasuK on 2019-6-22.
//

import Foundation

extension WebExtension.URL {

    public struct CreateObjectURL: WebExtension.ClientRequest {
        public static let method: String = "URL.createObjectURL"

        public let extensionID: String
        public let uuid: String
        // must be type .blob
        public let data: WebExtension.StringOrBlob

        public init(extensionID: String, uuid: String, data: WebExtension.StringOrBlob) {
            self.extensionID = extensionID
            self.uuid = uuid
            self.data = data
        }
    }
    
}

extension WebExtension.URL.CreateObjectURL {

    public init(from decoder: Decoder) throws {
        var container = try decoder.unkeyedContainer()

        extensionID = try container.decode(String.self)
        uuid = try container.decode(String.self)
        data = try container.decode(WebExtension.StringOrBlob.self)
    }

    public func encode(to encoder: Encoder) throws {
        var container = encoder.unkeyedContainer()

        try container.encode(extensionID)
        try container.encode(uuid)
        try container.encode(data)
    }

}

extension WebExtension.URL.CreateObjectURL {

    public var blobData: Data? {
        return Data(base64Encoded: data.content)
    }

    public var isDataValid: Bool {
        if blobData != nil, data.mimeType != nil {
            return true
        } else {
            return false
        }
    }
    
    public var url: String {
        "holoflows-blob://" + extensionID + "/" + uuid
    }
}
