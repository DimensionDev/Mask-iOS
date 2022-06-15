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
    internal init(encrypted: Bool, type: String?, block: Data, name: String) {
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

    static let magic_header = "MASKBOOK-ATTACHMENT"

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
            guard let generatedKey = generatedKey else { return Data() }
            let gcm = GCM(iv: iv, tagLength: 128, mode: .combined)
            let aes = try AES(key: generatedKey, blockMode: gcm, padding: .noPadding)
            let fileData = try aes.encrypt(self.block.bytes)
            let algorithm = [
                "name": "AES-GCM",
                "iv": iv,
                "tagLength": 128
            ] as [String: Any]
            let payload = [
                "version": 0,
                "mime": mime,
                "algorithm": algorithm,
                "salt": salt,
                "keyHash": passphrase.uint8Array.sha256(),
                "block": Data(fileData),
                "blockHash": fileData.sha256()
            ] as [String: Any]
            var packData = Data()
            try packData.pack(payload)
            return [Self.magic_header.data(using: .utf8)!,
                    packData]
                .compactMap { $0 }
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
            return [Self.magic_header.data(using: .utf8)!,
                    packData]
                .compactMap { $0 }
                .combined
        }
    }

    func toTransaction() throws -> ArweaveTransaction {
        let encryptData = try encryptedData()
        var transaction = ArweaveTransaction(data: encryptData)
        let tag = ArweaveTransaction.Tag(name: "Content-Type", value: Self.defaultType)
        transaction.tags.append(tag)
        return transaction
    }
}
