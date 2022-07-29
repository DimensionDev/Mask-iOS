//
//  AttachmentOptions.swift
//  Maskbook
//
//  Created by xiaojian sun on 2022/6/10.
//  Copyright © 2022 dimension. All rights reserved.
//

import CryptoSwift
import Foundation
import SwiftMsgPack

struct AttachmentOptions {
    init(encrypted: Bool, block: Data, name: String) {
        self.key = encrypted ? AttachmentOptions.generateRandomKey() : nil
        self.block = block
        self.name = name
    }

    let key: String?
    let block: Data
    let name: String

    static let keyTable = "ABDEFGHJKMNPQRTWXYadefhijkmnprstuvwxyz03478"
    static let headerPayload = "MASKBOOK-ATTACHMENT".data(using: .utf8)!
    static let defaultType = "application/octet-stream"
}

extension AttachmentOptions {
    var mime: String {
        name.mimeType()
    }
}

extension AttachmentOptions {
    static func generateRandomKey() -> String {
        var key = ""
        let table = AttachmentOptions.keyTable
        let length = table.count
        for _ in 0 ... (length - 1) {
            let random = Int.random(in: 0 ..< length)
            key += String(table[random])
        }
        return key
    }

    private func encrtypedData(for passphrase: String, tagLength: Int, salt: [UInt8], iv: [UInt8]) throws -> Data {
        let generatedKey = try Crypto.generateKeyWith(passphrase.uint8Array, salt: salt)
        guard let generatedKey = generatedKey else { return Data() }
        let gcm = GCM(iv: iv, tagLength: tagLength, mode: .combined)
        let aes = try AES(key: generatedKey, blockMode: gcm, padding: .noPadding)
        let encrypted = try aes.encrypt(self.block.bytes)
        let encryptedData = Data(encrypted)
        return encryptedData
    }

    func encryptedData() throws -> Data {
        if let passphrase = key {
            let tagLength = 128
            let salt = try Crypto.randomData(length: 8)
            let iv = try Crypto.randomData(length: 12)
            let encryptedData = try encrtypedData(for: passphrase, tagLength: tagLength, salt: salt, iv: iv)

            let algorithm: [String: Any] = [
                "name": "AES-GCM",
                "iv": Data(iv),
                "tagLength": tagLength
            ]
            let payload: [String: Any?] = [
                "version": 0,
                "mime": mime,
                "metadata": nil,
                "algorithm": algorithm,
                "salt": Data(salt),
                "keyHash": Data(passphrase.uint8Array).hashData(),
                "block": encryptedData,
                "blockHash": encryptedData.hashData()
            ]
            var packData = Data()
            try packData.pack(payload)
            return [
                Self.headerPayload,
                packData
            ]
            .combined
        } else {
            let payload = [
                "version": 0,
                "mime": mime,
                "block": block,
                "blockHash": block.sha256()
            ] as [String: Any]
            var packData = Data()
            try packData.pack(payload)
            return [
                Self.headerPayload,
                packData
            ]
            .combined
        }
    }
    
}
