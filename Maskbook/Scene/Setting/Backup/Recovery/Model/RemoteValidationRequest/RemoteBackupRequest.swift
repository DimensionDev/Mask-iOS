//
//  RemoteBackupRequest.swift
//  Maskbook
//
//  Created by yzj on 2021/8/26.
//  Copyright © 2021 dimension. All rights reserved.
//

import Foundation

struct RemoteBackupRequest: MaskServiceRequest {
    typealias ResponseType = RemoteBackupPreview
    var baseURL: String { .remoteBackupBaseURL }
    var endPoint: String { "/api/v1/backup/download" }

    let accountType: ValidationCodeParameters.AccountType
    let account: String
    let code: String

    private enum CodingKeys: String, CodingKey {
        case accountType = "account_type"
        case account
        case code
    }
}

extension RemoteBackupRequest {
    init(from verifyResult: CloudVerifyResult) {
        self.init(
            accountType: verifyResult.verify == .email ? .email : .phone,
            account: verifyResult.accountContent,
            code: verifyResult.verifyCode
        )
    }
}

struct RemoteBackupPreview: ResponseBaseType, Equatable {
    let downloadUrl: URL?
    let size: Double?
    let uploadedTime: TimeInterval?
    let abstract: String?
    let message: String?

    private enum CodingKeys: String, CodingKey {
        case downloadUrl = "download_url"
        case size
        case uploadedTime = "uploaded_at"
        case abstract
        case message
    }
}
