//
//  BundleResourceManager.swift
//  HoloflowsKit
//
//  Created by Cirno MainasuK on 2019-6-17.
//

import Foundation
import WebKit

public class BundleResourceManager: NSObject, PluginResourceProvider {

    public let bundle: Bundle

    public init(bundle: Bundle) {
        self.bundle = bundle
    }

    public enum Error: Swift.Error {
        case fileNotFound
    }

}

extension BundleResourceManager {

    public func data(from url: URL, handler: @escaping (Result<(Data, URLResponse), Swift.Error>) -> Void) {
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
            scriptPath = bundle.url(forResource: filePath, withExtension: nil)?.path
            
            if scriptPath == nil {
                scriptPath = bundle.url(forResource: filePath.replacingOccurrences(of: ".prebuilt-1-script", with: ""), withExtension: nil)?.path
            }
            
            if scriptPath == nil {
                scriptPath = bundle.url(forResource: filePath.replacingOccurrences(of: ".prebuilt-2-script", with: ""), withExtension: nil)?.path
            }

            if scriptPath == nil {
                scriptPath = bundle.url(forResource: filePath.replacingOccurrences(of: ".prebuilt-1-script", with: ""), withExtension: nil, subdirectory: "js")?.path
            }
            if scriptPath == nil {
                scriptPath = bundle.url(forResource: filePath.replacingOccurrences(of: ".prebuilt-2-script", with: ""), withExtension: nil, subdirectory: "js")?.path
            }
        }
        guard let path = scriptPath else {
            handler(.failure(Error.fileNotFound))
            return
        }

        consolePrint(path)

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

}
