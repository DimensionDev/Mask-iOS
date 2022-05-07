//
//  HttpCookie.swift
//  Maskbook
//
//  Created by xiaojian sun on 2022/5/5.
//  Copyright © 2022 dimension. All rights reserved.
//

import Foundation

extension Array where Element == HTTPCookie {
    func cookiesToData() -> Data? {
        let cookie = map({Cookie(cookie: $0)})
        return try? JSONEncoder().encode(cookie)
    }
}

extension Data {
    func toCookies() -> [HTTPCookie]? {
        let cookies = (try? JSONDecoder().decode([Cookie].self, from: self)) ?? []
        return cookies.compactMap({$0.toHTTPCookie()})
    }
}
