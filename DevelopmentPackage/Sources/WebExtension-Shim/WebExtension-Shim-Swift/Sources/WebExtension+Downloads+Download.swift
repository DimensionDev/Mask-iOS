//
//  WebExtension+Downloads+Download.swift
//  HoloflowsKit
//
//  Created by Cirno MainasuK on 2019-6-22.
//

import Foundation

extension WebExtension.Browser.Downloads {

    public struct Download: WebExtension.ClientRequest {
        public static let method: String = "browser.downloads.download"

        public let extensionID: String
        public let options: Options

        public init(extensionID: String, options: Options) {
            self.extensionID = extensionID
            self.options = options
        }

        public struct Options: Codable {
            public let filename: String?
            public let url: String

            public init(filename: String?, url: String) {
                self.filename = filename
                self.url = url
            }
        }
    }

}

extension WebExtension.Browser.Downloads.Download {

    public init(from decoder: Decoder) throws {
        var container = try decoder.unkeyedContainer()

        extensionID = try container.decode(String.self)
        options = try container.decode(Options.self)
    }

    public func encode(to encoder: Encoder) throws {
        var container = encoder.unkeyedContainer()

        try container.encode(extensionID)
        try container.encode(options)
    }

}
