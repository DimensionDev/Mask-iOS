//
//  ArweaveUploader.swift
//  Maskbook
//
//  Created by xiaojian sun on 2022/6/16.
//  Copyright © 2022 dimension. All rights reserved.
//

import CryptoSwift
import Foundation

class ArweaveUploader: NSObject {
    init(item: FileServiceUploadingItem,
         option: FileServiceUploadOption,
         tx: FileServiceTranscation = FileServiceTranscation.progress(0),
         continuation: AsyncThrowingStream<FileServiceTranscation, Error>.Continuation)
    {
        self.item = item
        self.option = option
        self.tx = tx
        self.continuation = continuation
    }
    
    let item: FileServiceUploadingItem
    let option: FileServiceUploadOption
    var tx = FileServiceTranscation.progress(0)
    var progress = FileServiceUploadProgress()
    
    let continuation: AsyncThrowingStream<FileServiceTranscation, Error>.Continuation
    
    func startUpload() async throws {
        tx.id = Self.encodeArrayBuffer(data: item.content.hashData())
        
        continuation.yield(tx)
        let attachment = AttachmentOptions(encrypted: option.encrypted,
                                           type: item.mime,
                                           block: item.content,
                                           name: item.fileName)
        tx.key = attachment.key
        let payloadID = try await makeAttachment(attachment: attachment)
        tx.payloadTxID = payloadID
        tx.progress = progress.progressForCurrentStage(stage: .htmlDownloading)
        continuation.yield(tx)
        let landingTxID = try await uploadLandingPage()
        tx.landingTxID = landingTxID
        tx.progress = progress.progressForCurrentStage(stage: .uploadFinish)
        continuation.yield(tx)
        continuation.finish()
    }
    
    func makeAttachment(attachment: AttachmentOptions) async throws -> String {
        let data = try attachment.encryptedData()
        return try await makePayload(data: data, type: "application/octet-stream", delegate: self)
    }
    
    func makePayload(data: Data, type: String, delegate: URLSessionTaskDelegate? = nil) async throws -> String {
        var transaction = ArweaveTransaction(data: data)
        let tag = ArweaveTransaction.Tag(name: "Content-Type", value: type)
        transaction.tags.append(tag)
        try await RemoteSigning.signing(transaction: &transaction)
        _ = try await transaction.commit(delegate: delegate)
        return transaction.id
    }
    
    func uploadLandingPage() async throws -> String {
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
            "signed": try? Self.makeFileKeySigned(fileKey: tx.key),
            "createdAt": Date().toISOString()
        ] as [String: Any?]
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
        tx.progress = progress.progressForCurrentStage(stage: .htmlUploading)
        let txid = try await makePayload(data: replacedData, type: "text/html")
        print("upload succeed")
        if let key = tx.key {
            print(Arweave.baseUrl.absoluteString + "/" + txid + "#" + key)
        } else {
            print(Arweave.baseUrl.absoluteString + "/" + txid)
        }
        return txid
    }
    
    static func makeFileKeySigned(fileKey: String?) throws -> [String] {
        guard let encodedKey = fileKey?.data(using: .utf8) else {
            throw "key not exist"
        }
        let generatedKey: [UInt8] = try Crypto.randomData(length: 64)
        let hmac = HMAC(key: generatedKey, variant: HMAC.Variant.sha2(SHA2.Variant.sha256))
        let signed = try hmac.authenticate(encodedKey.bytes)
        let signedB64 = encodeArrayBuffer(data: Data(signed))
        let generatedKeyB64 = encodeArrayBuffer(data: Data(generatedKey))
        return [signedB64, generatedKeyB64]
    }
    
    static func encodeArrayBuffer(data: Data) -> String {
        data.base64EncodedString()
    }
}

extension ArweaveUploader: URLSessionTaskDelegate {
    func urlSession(_ session: URLSession,
                    task: URLSessionTask,
                    didSendBodyData bytesSent: Int64,
                    totalBytesSent: Int64,
                    totalBytesExpectedToSend: Int64) {
        tx.progress = progress.progressForCurrentStage(stage: .filePayloadUploading(totalBytesSent: Double(totalBytesSent), totalBytesExpectedToSend: Double(totalBytesExpectedToSend)))
        continuation.yield(tx)
    }
}