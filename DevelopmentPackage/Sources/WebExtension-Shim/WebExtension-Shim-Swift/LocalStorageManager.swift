//
//  LocalStorageManager.swift
//  HoloflowsKit
//
//  Created by Cirno MainasuK on 2019-7-22.
//

import Foundation

public class LocalStorageManager {

    public weak var delegate: CoreDataStackBridgeDelegate?

    public var entensionID: String
    
    public init(delegate: CoreDataStackBridgeDelegate, extensionID: String) {
        self.delegate = delegate
        self.entensionID = extensionID
    }

}

extension LocalStorageManager {


    /// Get values on keys. Return all values when keys is empty
    public func get(keys: [String]) -> [KeyValuePair] {
        guard let delegate = delegate else { return [KeyValuePair]() }
        return delegate.get(keys: keys, extensionID: entensionID)
    }

    public func set(localStorages: [KeyValuePair]) throws {
        try delegate?.set(localStorages: localStorages, extensionID: entensionID)
    }

    public func remove(keys: [String]) throws -> [KeyValuePair] {
        guard let delegate = delegate else { return [KeyValuePair]() }
        return try! delegate.remove(keys: keys, extensionID: entensionID)
    }

    public func clear() throws {
        try delegate?.clear(extensionID: entensionID)
    }

}
