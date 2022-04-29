//
//  WebExtension+Fetch.swift
//  HoloflowsKit
//
//  Created by Cirno MainasuK on 2019-7-9.
//

import Foundation

extension WebExtension {

    public struct Fetch: WebExtension.ClientRequest {
        public static var method: String = "fetch"

        public let extensionID: String
        public let request: Request

        public init(extensionID: String, request: Request) {
            self.extensionID = extensionID
            self.request = request
        }

        public struct Request: Codable {

            public enum ContentType: String, Codable {
                case arrayBuffer = "array buffer"
                case raw
            }

            public struct Body: Codable {
                public let type: ContentType
                public let content: String

                var data: Data? {
                    if type == .arrayBuffer {
                        return Data(base64Encoded: content)
                    }
                    return content.data(using: .utf8)
                }
            }

            public let method: String
            public let url: String
            public let body: Body?
            public let headers: [String: String]

            public init(method: String,
                        url: String,
                        headers: [String: String] = [:],
                        body: Body? = nil) {
                self.method = method
                self.url = url
                self.body = body
                self.headers = headers
            }
        }

        // response for fetch request from client
        public struct Response: Codable {
            public let status: Int
            public let statusText: String
            public let data: WebExtension.StringOrBlob

            public init(status: Int, statusText: String, data: WebExtension.StringOrBlob) {
                self.status = status
                self.statusText = statusText
                self.data = data
            }

            public enum `Type`: String, Codable {
                case text
                case binary
            }
        }
    }

}

extension WebExtension.Fetch {

    public init(from decoder: Decoder) throws {
        var container = try decoder.unkeyedContainer()

        extensionID = try container.decode(String.self)
        request = try container.decode(WebExtension.Fetch.Request.self)
    }

    public func encode(to encoder: Encoder) throws {
        var container = encoder.unkeyedContainer()

        try container.encode(extensionID)
        try container.encode(request)
    }

}
