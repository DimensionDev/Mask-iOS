//
//  Cookie.swift
//  Maskbook
//
//  Created by xiaojian sun on 2022/5/5.
//  Copyright © 2022 dimension. All rights reserved.
//

import Foundation

struct Cookie: Codable {
    var domain: String
    var path: String
    var name: String
    var value: String
    var isSecure: Bool
    var expiresDate: Date?
    
    init(cookie: HTTPCookie) {
        self.domain = cookie.domain
        self.path = cookie.path
        self.name = cookie.name
        self.value = cookie.value
        self.isSecure = cookie.isSecure
        self.expiresDate = cookie.expiresDate
    }
    
    func toHTTPCookie() -> HTTPCookie? {
        var cookieProps: [HTTPCookiePropertyKey : Any] = [
            HTTPCookiePropertyKey.domain: domain,
            HTTPCookiePropertyKey.path: path,
            HTTPCookiePropertyKey.name: name,
            HTTPCookiePropertyKey.value: value,
            HTTPCookiePropertyKey.secure: isSecure
        ]
        if let expiresDate = expiresDate {
            cookieProps[HTTPCookiePropertyKey.expires] = expiresDate
        }
        return HTTPCookie(properties: cookieProps)
    }
}
