//
//  JSDocumentResourceManager.swift
//  Maskbook
//
//  Created by sxiaojian on 2022/1/5.
//  Copyright © 2022 dimension. All rights reserved.
//

import CryptoSwift
import Foundation
import WebExtension_Shim_Swift

enum JSResourceType {
    case bundle
    case document(path: String)
}

class JSDocumentResourceManager {
    var documentSubPath: String?

    enum Error: Swift.Error {
        case fileNotFound
    }
}

extension JSDocumentResourceManager: PluginResourceProvider {
    public func data(from url: URL, handler: @escaping (Result<(Data, URLResponse), Swift.Error>) -> Void) {
        guard documentSubPath != nil else {
            fatalError("no documentSubPath")
        }
        let pathComponents: [String] = {
            var components = url.pathComponents
            if components.first == "/" {
                components.removeFirst()
            }
            return components
        }()
        let urlComponents = URLComponents(string: pathComponents.joined(separator: "/"))
        var scriptPath: String?
        if let filePath = urlComponents?.path {
            // Part of URLs from js is incorrect:
            // 1. including unexpected `.prebuilt-1-script` or ".prebuilt-2-script" in name
            // 2. including "js/" in name
            scriptPath = pathInDocumentDirectory(filePath: filePath)

            if scriptPath == nil {
                scriptPath = pathInDocumentDirectory(filePath: filePath.replacingOccurrences(of: ".prebuilt-1-script", with: ""))
            }

            if scriptPath == nil {
                scriptPath = pathInDocumentDirectory(filePath: filePath.replacingOccurrences(of: ".prebuilt-2-script", with: ""))
            }

            if scriptPath == nil {
                scriptPath = pathInDocumentDirectory(filePath: "js/" + filePath.replacingOccurrences(of: ".prebuilt-1-script", with: ""))
            }
            if scriptPath == nil {
                scriptPath = pathInDocumentDirectory(filePath: "js/" + filePath.replacingOccurrences(of: ".prebuilt-2-script", with: ""))
            }
        }
        guard let path = scriptPath else {
            handler(.failure(Error.fileNotFound))
            return
        }

        URLSession.shared.dataTask(with: URL(fileURLWithPath: path)) { data, response, error in
            if let error = error {
                handler(.failure(error))
                return
            }

            guard let data = data, let response = response else {
                handler(.failure(Error.fileNotFound))
                return
            }

            let schemeTaskResponse = URLResponse(url: url,
                                                 mimeType: response.mimeType ?? "",
                                                 expectedContentLength: data.count,
                                                 textEncodingName: nil)
            handler(.success((data, schemeTaskResponse)))
        }.resume()
    }

    func pathInDocumentDirectory(filePath: String) -> String? {
        guard let documentSubPath = documentSubPath else { return nil }
        let finalPath = documentSubPath + filePath
        let exist = FileManager.default.fileExists(atPath: finalPath)
        if exist {
            return finalPath
        } else {
            return nil
        }
    }
}
