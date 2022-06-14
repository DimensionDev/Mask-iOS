//
//  ArweaveUploader.swift
//  Maskbook
//
//  Created by xiaojian sun on 2022/6/10.
//  Copyright © 2022 dimension. All rights reserved.
//

import Foundation
import WebExtension_Shim
import SwiftUI

class ArweaveUploader {
    static let signURL = "https://service.r2d2.to/arweave-remote-signing"
    
    static func remoteSignatureRequest(body: Data) async throws -> Data {
        var request = URLRequest(url: URL(string: Self.signURL)!)
        request.httpMethod = "POST"
        request.httpBody = body
        let (data, response) = try await URLSession.shared.data(for: request)
        let httpResponse = response as? HTTPURLResponse
        let statusCode = httpResponse?.statusCode ?? 0

        if statusCode != 200 {
            let error = String(data: data, encoding: .utf8)
            print(error)
            throw "Bad response code \(statusCode)"
        }
        return data
    }
    
    func upload(fileItem: FileServiceUploadFileItem) async throws -> Data {
        let attachment = AttachmentOptions(encrypted: false,
                                           type: fileItem.fileExt,
                                           block: fileItem.data.bytes,
                                           name: fileItem.fileNameWithoutExt)
        
        var transaction = try attachment.toTransaction()
        let signatureBody = try await transaction.getSignatureBody()
        let responseData = try await Self.remoteSignatureRequest(body: signatureBody)
        let signatureJson = try JSONSerialization.jsonObject(with: responseData, options: []) as! String
        transaction.signature = signatureJson
        let data = try await transaction.commit()
        return data
    }
}
