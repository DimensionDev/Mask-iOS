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
import SwiftUI

class AttachmentDecrypt {
    static func downloadOriginFileContent(payloadID: String, provider: String, key: String?) async throws -> Data? {
        typealias Service = FileServiceUploadOption.Service
        let urlPrefixs: [Service: String] = [
            .arweave: Arweave.baseUrl.absoluteString,
            .ipfs: "https://infura-ipfs.io/ipfs"
        ]
        guard
            let service = Service(rawValue: provider),
            let baseurl = urlPrefixs[service]
        else {
            return nil
        }
        let url = "\(baseurl)/\(payloadID)"
        var request = URLRequest(url: URL(string: url)!)
        request.httpMethod = "GET"
        let (_, response) = try await URLSession.shared.data(for: request)
        if let downloadUrl = response.url, downloadUrl.absoluteString != url {
            var downloadRequest = URLRequest(url: downloadUrl)
            downloadRequest.httpMethod = "GET"
            let (data, response) = try await URLSession.shared.data(for: downloadRequest)
            let httpResponse = response as? HTTPURLResponse
            let statusCode = httpResponse?.statusCode ?? 0
            if statusCode == 200 {
                let originalData = try Self.restoreOriginalData(downloadedData: data, key: key)
                return originalData
            }
        }
        return nil
    }

    private static func restoreOriginalData(downloadedData: Data, key: String?) throws -> Data {
        let trimedBytes = downloadedData.bytes[AttachmentOptions.headerPayload.count ..< downloadedData.count]
        let trimData = Data(trimedBytes)
        guard let unpackedData = try trimData.unpack() as? [String: Any] else {
            throw "unpack no result"
        }
        guard let block = unpackedData["block"] as? Data else {
            throw "no data in block key"
        }
        if let passphrase = key {
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
            return try Self.decryptData(encryptedData: block,
                                        key: passphrase,
                                        tagLength: Int(tagLength),
                                        iv: iv.bytes,
                                        salt: salt.bytes)
        } else {
            return block
        }
    }

    static func decryptData(encryptedData: Data,
                            key: String,
                            tagLength: Int,
                            iv: [UInt8],
                            salt: [UInt8]) throws -> Data
    {
        guard let generatedKey = try Crypto.generateKeyWith(key.uint8Array, salt: salt) else {
            throw "generate key error"
        }
        let count = encryptedData.count
        let tagLengthDevided = tagLength / 8
        let tag = Array(encryptedData.bytes[count - tagLengthDevided ... count - 1])
        let gcm = GCM(iv: iv, authenticationTag: tag, mode: .combined)
        let aes = try AES(key: generatedKey, blockMode: gcm, padding: .noPadding)
        let decrypted = try aes.decrypt(encryptedData.bytes)
        return Data(decrypted)
    }
}
