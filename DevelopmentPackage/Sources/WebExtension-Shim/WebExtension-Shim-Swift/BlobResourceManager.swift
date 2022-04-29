//
//  BlobResourceManager.swift
//  HoloflowsKit
//
//  Created by Cirno MainasuK on 2019-6-18.
//

import CoreData
import Foundation
import WebKit

public func consolePrint<T>(
    _ message: @autoclosure () -> T,
    file: String   = #file,
    method: String = #function,
    line: Int      = #line) {
    #if DEBUG
        #if ConsolePrint
        let msg = message()
        print("^ \((file as NSString).lastPathComponent)[\(line)], \(method): \(msg)", terminator: "\n")
        #endif
    #endif
}

public class BlobResourceManager: NSObject, PluginResourceProvider {
    public weak var delegate: CoreDataStackBridgeDelegate?

    public init(delegate: CoreDataStackBridgeDelegate) {
        self.delegate = delegate
    }

    public enum Error: Swift.Error {
        case urlNotFound
        case notValidURL
        case blobNotFound
    }
}

public extension BlobResourceManager {
    func data(from url: URL, handler: @escaping (Result<(Data, URLResponse), Swift.Error>) -> Void) {
        guard let data = delegate?.data(from: url) else {
            handler(.failure(Error.blobNotFound))
            return
        }
        let result = Result<(Data, URLResponse), Swift.Error>.success(data)
        handler(result)
    }

    func save(createObjectURL: WebExtension.URL.CreateObjectURL) throws {
        guard let blobData = createObjectURL.blobData,
              let mimeType = createObjectURL.data.mimeType
        else {
            return
        }

        let uuid = createObjectURL.uuid
        let url = "holoflows-blob://" + createObjectURL.extensionID + "/" + createObjectURL.uuid
        try delegate?.saveBlobToDB(uuid: uuid, blob: blobData, type: mimeType, url: url)
    }
}
