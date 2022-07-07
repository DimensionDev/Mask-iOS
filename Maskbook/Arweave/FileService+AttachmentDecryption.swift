//
//  AttachmentDecrypt.swift
//  Maskbook
//
//  Created by xiaojian sun on 2022/6/28.
//  Copyright © 2022 dimension. All rights reserved.
//

import CryptoSwift
import Foundation
import SwiftMsgPack

enum FileService {}

extension FileService {
    static func getAttachment(payloadID: String, provider: String, key: String?) async throws -> Data {
        let attachment = try await requestAttachment(payloadID: payloadID, provider: provider)
        return try await decryptAttachment(attachment, key: key)
    }

    static func requestAttachment(payloadID: String, provider: String) async throws -> Data {
        typealias Service = FileServiceUploadOption.Service
        let urlPrefixs: [Service: String] = [
            .arweave: Arweave.baseURL.absoluteString,
            .ipfs: "https://infura-ipfs.io/ipfs"
        ]

        guard
            let service = Service(rawValue: provider),
            let baseurl = urlPrefixs[service]
        else {
            throw "invalid payloadID: \(payloadID), provider: \(provider)"
        }

        let url = "\(baseurl)/\(payloadID)"
        var request = URLRequest(url: URL(string: url)!)
        request.httpMethod = "GET"
        let (_, response) = try await URLSession.shared.data(for: request)

        guard
            let downloadURL = response.url,
            downloadURL.absoluteString != url
        else {
            throw "reduntent or none file payload url: \(response.url?.absoluteString ?? "")"
        }

        var downloadRequest = URLRequest(url: downloadURL)
        downloadRequest.httpMethod = "GET"
        let (data, downloadResponse) = try await URLSession.shared.data(for: downloadRequest)
        let httpResponse = downloadResponse as? HTTPURLResponse
        let statusCode = httpResponse?.statusCode ?? 0
        guard statusCode == 200 else {
            throw "redirect request failed"
        }

        return data
    }

    static func decryptAttachment(_ attachment: Data, key: String?) async throws -> Data {
        let attachmentBytesCount = attachment.count
        let headerPayloadBytesCount = AttachmentOptions.headerPayload.count
        guard attachmentBytesCount > headerPayloadBytesCount else {
            throw "expect attachmentBytesCount greater than \(headerPayloadBytesCount), get \(attachmentBytesCount)"
        }

        let trimedBytes = attachment.bytes[headerPayloadBytesCount ..< attachmentBytesCount]
        let trimData = Data(trimedBytes)
        guard let unpackedData = try trimData.unpack() as? [String: Any] else {
            throw "unpack no result"
        }
        guard let block = unpackedData["block"] as? Data else {
            throw "no data in block key"
        }

        guard let passphrase = key, !passphrase.isEmpty else {
            return block
        }

        guard let algorithm = unpackedData["algorithm"] as? [AnyHashable: Any] else {
            throw "no algorithm in algorithm key"
        }
        guard let iv = algorithm["iv"] as? Data else {
            throw "no iv in algorithm iv key"
        }
        guard let salt = unpackedData["salt"] as? Data else {
            throw "no salt in salt key"
        }
        guard let tagLength = algorithm["tagLength"] as? UInt8 else {
            throw "no tagLength in algorithm tagLength key"
        }
        return try decrypt(
            block,
            key: passphrase,
            tagLength: Int(tagLength),
            iv: iv.bytes,
            salt: salt.bytes
        )
    }

    static func decrypt(
        _ encryptedData: Data,
        key: String,
        tagLength: Int,
        iv: [UInt8],
        salt: [UInt8]
    ) throws -> Data {
        guard let generatedKey = try Crypto.generateKeyWith(key.uint8Array, salt: salt) else {
            throw "generate key error"
        }
        let count = encryptedData.count
        let tagLengthDevided = tagLength / 8

        if encryptedData.isEmpty {
            throw "empty encryptedData"
        }

        guard tagLengthDevided > 1 else {
            throw "invalid encryptedData structure"
        }

        let tag = Array(encryptedData.bytes[count - tagLengthDevided ... count - 1])
        let gcm = GCM(iv: iv, authenticationTag: tag, mode: .combined)
        let aes = try AES(key: generatedKey, blockMode: gcm, padding: .noPadding)
        let decrypted = try aes.decrypt(encryptedData.bytes)
        return Data(decrypted)
    }
}
