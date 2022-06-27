//
//  RemoteSigning.swift
//  Maskbook
//
//  Created by xiaojian sun on 2022/6/15.
//  Copyright © 2022 dimension. All rights reserved.
//

import Foundation
import SwiftyJSON

class RemoteSigning {
    static let signURL = "https://service.r2d2.to/arweave-remote-signing"
    
    static func remoteSignatureRequest(body: Data) async throws -> Data {
        var request = URLRequest(url: URL(string: Self.signURL)!)
        request.httpMethod = "POST"
        request.httpBody = body
        let (data, response) = try await URLSession.shared.data(for: request)
        let httpResponse = response as? HTTPURLResponse
        let statusCode = httpResponse?.statusCode ?? 0

        if statusCode != 200 {
            if let error = String(data: data, encoding: .utf8) {
                print(error)
            }
            throw "Bad response code \(statusCode)"
        }
        return data
    }
    
    static func signing(transaction: inout ArweaveTransaction) async throws {
        let signatureBody = try await transaction.remoteSignatureBody()
        let responseData = try await Self.remoteSignatureRequest(body: signatureBody)
        let responseJson = JSON(responseData)
        transaction.setRemoteSignature(response: responseJson)
    }
}
