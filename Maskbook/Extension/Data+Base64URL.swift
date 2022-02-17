//
//  Data+Base64URL.swift
//  Maskbook
//
//  Created by BradGao on 2021/10/29.
//  Copyright © 2021 dimension. All rights reserved.
//

import Foundation

extension Data {
    /// Decodes a base64-url encoded string to data.
    ///
    /// https://tools.ietf.org/html/rfc4648#page-7
    public init?(base64URLEncoded: String, options: Data.Base64DecodingOptions = []) {
        self.init(base64Encoded: base64URLEncoded.base64URLUnescaped(), options: options)
    }

    /// Encodes data to a base64-url encoded string.
    ///
    /// https://tools.ietf.org/html/rfc4648#page-7
    ///
    /// - parameter options: The options to use for the encoding. Default value is `[]`.
    /// - returns: The base64-url encoded string.
    public func base64URLEncodedString(options: Data.Base64EncodingOptions = []) -> String {
        return base64EncodedString(options: options).base64URLEscaped()
    }
}

/// MARK: String Escape
extension String {
    /// Converts a base64-url encoded string to a base64 encoded string.
    ///
    /// https://tools.ietf.org/html/rfc4648#page-7
    public func base64URLUnescaped() -> String {
        let replaced = replacingOccurrences(of: "-", with: "+")
            .replacingOccurrences(of: "_", with: "/")
        /// https://stackoverflow.com/questions/43499651/decode-base64url-to-base64-swift
        let padding = replaced.count % 4
        if padding > 0 {
            return replaced + String(repeating: "=", count: 4 - padding)
        } else {
            return replaced
        }
    }

    /// Converts a base64 encoded string to a base64-url encoded string.
    ///
    /// https://tools.ietf.org/html/rfc4648#page-7
    public func base64URLEscaped() -> String {
        return replacingOccurrences(of: "+", with: "-")
            .replacingOccurrences(of: "/", with: "_")
            .replacingOccurrences(of: "=", with: "")
    }

    /// Converts a base64-url encoded string to a base64 encoded string.
    ///
    /// https://tools.ietf.org/html/rfc4648#page-7
    public mutating func base64URLUnescape() {
        self = base64URLUnescaped()
    }

    /// Converts a base64 encoded string to a base64-url encoded string.
    ///
    /// https://tools.ietf.org/html/rfc4648#page-7
    public mutating func base64URLEscape() {
        self = base64URLEscaped()
    }
}
