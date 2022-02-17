//
//  RemoteBackupUploadRequest.swift
//  Maskbook
//
//  Created by Hugo L on 2021/10/17.
//  Copyright © 2021 dimension. All rights reserved.
//

import Foundation

struct RemoteBackupUploadRequest: MaskServiceRequest {
    typealias ResponseType = RemoteBackupUploadResponse
    var baseURL: String { .remoteBackupBaseURL }
    var endPoint: String { "/api/v1/backup/upload" }

    let accountType: AccountType
    let account: String
    let code: String
    let abstract: String

    private enum CodingKeys: String, CodingKey {
        case accountType = "account_type"
        case account
        case code
        case abstract
    }
}

extension RemoteBackupUploadRequest {
    enum AccountType: String, Codable {
        case email
        case phone
    }
}

struct RemoteBackupUploadResponse: ResponseBaseType {
    let uploadUrl: URL
    let message: String?

    private enum CodingKeys: String, CodingKey {
        case uploadUrl = "upload_url"
        case message
    }
}
