//
//  CoreDataStackBridgeDelegate.swift
//  WebExtension-Shim
//
//  Created by sxiaojian on 2021/10/19.
//

import Foundation

public typealias KeyValuePair = (key: String, value: Data)

public protocol CoreDataStackBridgeDelegate: AnyObject {
    func data(from url: URL) -> (Data, URLResponse)?

    func saveBlobToDB(uuid: String, blob: Data, type: String, url: String) throws

    func get(keys: [String], extensionID: String) -> [KeyValuePair]

    func set(localStorages: [KeyValuePair], extensionID: String) throws

    func remove(keys: [String], extensionID: String) throws -> [KeyValuePair]

    func clear(extensionID: String) throws
}
