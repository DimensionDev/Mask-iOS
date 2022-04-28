//
//  WebExtensionCoreDataStackBridge.swift
//  Maskbook
//
//  Created by sxiaojian on 2021/10/19.
//  Copyright © 2021 dimension. All rights reserved.

import CoreData
import CoreDataStack
import Foundation
import WebExtension_Shim_Swift

typealias KeyValuePair = (key: String, value: Data)

class WebExtensionCoreDataStackBridge {
    init(context: NSManagedObjectContext) {
        self.context = context
    }

    let context: NSManagedObjectContext
}

extension WebExtensionCoreDataStackBridge: CoreDataStackBridgeDelegate {
    public func data(from url: URL) -> (Data, URLResponse)? {
        let uuid = url.deletingPathExtension().lastPathComponent
        let fetchRequest = BlobStorage.sortedFetchRequest
        fetchRequest.predicate = BlobStorage.predicate(uuid: uuid)
        fetchRequest.fetchLimit = 1
        if let result = try? context.fetch(fetchRequest).first, let data = result.blob {
            let response = URLResponse(url: url,
                                       mimeType: result.type,
                                       expectedContentLength: data.count,
                                       textEncodingName: nil)
            return (data, response)
        } else {
            return nil
        }
    }

    public func saveBlobToDB(uuid: String, blob: Data, type: String, url: String) {
        AppContext.shared.backgroundContext
            .perform {
                _ = BlobStorage(uuid: uuid, blob: blob, type: type, url: url, context: AppContext.shared.backgroundContext)
                try? AppContext.shared.backgroundContext.saveOrRollback()
            }
    }

    public func get(keys: [String], extensionID: String) -> [KeyValuePair] {
        let fetchRequest = LocalStorage.sortedFetchRequest
        fetchRequest.predicate = LocalStorage.predicate(extensionID: extensionID)
        let results = try? context.fetch(fetchRequest)
        guard let results = results else { return [] }
        if keys.isEmpty {
            return results.map { ($0.key!, $0.value!) }
        } else {
            let filterd = results.filter { keys.contains($0.key!) }
            return filterd.map { ($0.key!, $0.value!) }
        }
    }

    public func set(localStorages: [KeyValuePair], extensionID: String) throws {
        _ = localStorages.map { LocalStorage(keyValuePair: $0, extensionID: extensionID, context: context) }
        try context.saveOrRollback()
    }
    // swiftlint: disable force_unwrapping
    public func remove(keys: [String], extensionID: String) throws -> [KeyValuePair] {
        let fetchRequest = LocalStorage.sortedFetchRequest
        fetchRequest.predicate = LocalStorage.predicate(keys: keys, extensionID: extensionID)
        let results = try? context.fetch(fetchRequest)
        guard let results = results else { return [] }
        results.forEach {
            context.delete($0)
        }
        try context.saveOrRollback()
        let copy = results.map { ($0.key!, $0.value!) }
        return copy
    }

    public func clear(extensionID: String) throws {
        let fetchRequest = LocalStorage.sortedFetchRequest
        fetchRequest.predicate = LocalStorage.predicate(extensionID: extensionID)
        let results = try? context.fetch(fetchRequest)
        results?.forEach {
            context.delete($0)
        }
        try context.saveOrRollback()
    }
}
