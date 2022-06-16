//
//  ArweaveUploader.swift
//  Maskbook
//
//  Created by xiaojian sun on 2022/6/16.
//  Copyright © 2022 dimension. All rights reserved.
//

import Foundation
import CryptoSwift

class ArweaveUploader {
    init(item: FileServiceUploadingItem,
         option: FileServiceUploadOption,
         tx: FileServiceTranscation = FileServiceTranscation.progress(0),
         continuation: AsyncThrowingStream<FileServiceTranscation, Error>.Continuation) {
        self.item = item
        self.option = option
        self.tx = tx
        self.continuation = continuation
    }
    
    let item: FileServiceUploadingItem
    let option: FileServiceUploadOption
    var tx = FileServiceTranscation.progress(0)
    let continuation: AsyncThrowingStream<FileServiceTranscation, Error>.Continuation
    
    func startUpload() async throws {
        tx.id = encodeArrayBuffer(data: hash(data: item.content))
        
        continuation.yield(tx)
        let attachment = AttachmentOptions(encrypted: false,
                                           type: item.mime,
                                           block: item.content,
                                           name: item.fileName)
        tx.key = attachment.key
        let payloadID = try await makeAttachment(attachment: attachment)
        tx.payloadTxID = payloadID
        tx.progress = 0.5
        continuation.yield(tx)
        let landingTxID = try await uploadLandingPage()
        tx.landingTxID = landingTxID
        tx.progress = 1.0
        continuation.yield(tx)
        continuation.finish()
    }
    
    func makeAttachment(attachment: AttachmentOptions) async throws -> String {
        let data = try attachment.encryptedData()
        return try await makePayload(data: data, type: "application/octet-stream")
    }
    
    func makePayload(data: Data, type: String) async throws -> String {
        var transaction = ArweaveTransaction(data: data)
        let tag = ArweaveTransaction.Tag(name: "Content-Type", value: type)
        transaction.tags.append(tag)
        try await RemoteSigning.signing(transaction: &transaction)
        _ = try await transaction.commit()
        return transaction.id
    }
    
    func uploadLandingPage() async throws -> String
    {
        let link: String = {
            if option.useMesonCDN {
                return Arweave.baseUrl.absoluteString + "/" + tx.payloadTxID
            } else {
                return Arweave.mesonCDNURL.absoluteString + "/" + tx.payloadTxID
            }
        }()
        let dic = [
            "name": item.fileName,
            "size": "\(item.content.count)",
            "provider": "arweave",
            "link": link,
            "signed": try? makeFileKeySigned(fileKey: tx.key),
            "createdAt": Date().toISOString()
        ]
        let jsonString = dic.asString()
        let request = URLRequest(url: Arweave.landingURL)
        let (data, response) = try await URLSession.shared.data(for: request)
        let httpResponse = response as? HTTPURLResponse
        let statusCode = httpResponse?.statusCode ?? 0
        if statusCode != 200 {
            throw "Bad response code \(statusCode)"
        }
        guard let htmlText = String(data: data, encoding: .utf8) else {
            throw "wrong html content"
        }
        guard let replacedData = htmlText
            .replacingOccurrences(of: "__METADATA__", with: jsonString)
            .data(using: .utf8)
        else {
            throw "encode html error"
        }
        return try await makePayload(data: replacedData, type: "text/html")
    }
    
    func makeFileKeySigned(fileKey: String?) throws -> String? {
        guard let fileKey = fileKey else {
            return nil
        }
        let keyData = fileKey.data(using: .utf8)
        guard let keyData = keyData else { return nil }
        let generateKey = try Crypto.randomIV()
        let hmac = HMAC(key: generateKey, variant: HMAC.Variant.sha2(SHA2.Variant.sha256))
        let signed = try hmac.authenticate(keyData.bytes)
        let data = [
            Data(generateKey),
            Data(signed)
        ]
        .combined
        
        return encodeArrayBuffer(data: data)
    }
    
    func encodeArrayBuffer(data: Data) -> String {
        var encoded = ""
        for code in data.bytes {
            encoded += String(UnicodeScalar(code))
        }
        return encoded
    }
}
