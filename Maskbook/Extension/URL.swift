//
//  URL.swift
//  Maskbook
//
//  Created by xiaojian sun on 2022/3/2.
//  Copyright © 2022 dimension. All rights reserved.
//

import Foundation
import MobileCoreServices

extension URL {

    static var documents: URL {
        return FileManager
            .default
            .urls(for: .documentDirectory, in: .userDomainMask)[0]
    }
}

extension URL {
    public var queryParameters: [String: String]? {
        guard
            let components = URLComponents(url: self, resolvingAgainstBaseURL: true),
            let queryItems = components.queryItems else { return nil }
        return queryItems.reduce(into: [:]) { (result, item) in
            result[item.name] = item.value
        }
    }
}

extension URL {
    var containsImage: Bool {
        let mimeType = self.mimeType()
        guard let uti = UTTypeCreatePreferredIdentifierForTag(kUTTagClassMIMEType, mimeType as CFString, nil)?.takeRetainedValue() else {
            return false
        }
        return UTTypeConformsTo(uti, kUTTypeImage)
    }
    
    func mimeType() -> String {
        let pathExtension = self.pathExtension
        if let uti = UTTypeCreatePreferredIdentifierForTag(kUTTagClassFilenameExtension, pathExtension as NSString, nil)?.takeRetainedValue() {
            if let mimetype = UTTypeCopyPreferredTagWithClass(uti, kUTTagClassMIMEType)?.takeRetainedValue() {
                return mimetype as String
            }
        }
        return "application/octet-stream"
    }
}
