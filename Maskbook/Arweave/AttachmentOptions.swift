//
//  AttachmentOptions.swift
//  Maskbook
//
//  Created by xiaojian sun on 2022/6/10.
//  Copyright © 2022 dimension. All rights reserved.
//

import CryptoKit
import CryptoSwift
import Foundation
import SwiftMsgPack

struct AttachmentOptions {
    init(encrypted: Bool, type: String?, block: Data, name: String) {
        self.key = encrypted ? AttachmentOptions.generateRandomKey() : nil
        self.type = type
        self.block = block
        self.name = name
    }

    let key: String?
    let type: String?
    let block: Data
    let name: String

    static let keyTable = "ABDEFGHJKMNPQRTWXYadefhijkmnprstuvwxyz03478"

    
    static let magic_header_data = "MASKBOOK-ATTACHMENT".data(using: .utf8)!

    static let defaultType = "application/octet-stream"
}

extension AttachmentOptions {
    var mime: String {
        self.type ?? Self.defaultType
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

    func encryptedData() throws -> Data {
        if let passphrase = key {
            let salt = try Crypto.randomData(length: 8)
            let iv = try Crypto.randomData(length: 12)

            let generatedKey = try Crypto.generateKeyWith(passphrase.uint8Array, salt: salt)
            let tagLength = 128
            guard let generatedKey = generatedKey else { return Data() }
            let gcm = GCM(iv: iv, tagLength: tagLength, mode: .combined)
            let aes = try AES(key: generatedKey, blockMode: gcm, padding: .noPadding)
            let encrypted = try aes.encrypt(self.block.bytes)
            let encryptedData = Data(encrypted)
            let algorithm = [
                "name": "AES-GCM",
                "iv": Data(iv),
                "tagLength": tagLength
            ] as [String: Any]
            let payload = [
                "version": 0,
                "mime": mime,
                "metadata": nil,
                "algorithm": algorithm,
                "salt": Data(salt),
                "keyHash": hash(data: Data(passphrase.uint8Array)),
                "block": encryptedData,
                "blockHash": hash(data: encryptedData)
            ] as [String: Any?]
            var packData = Data()
            try packData.pack(payload)
            return [Self.magic_header_data,
                    packData]
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
            return [Self.magic_header_data,
                    packData]
                .combined
        }
    }
    
}
