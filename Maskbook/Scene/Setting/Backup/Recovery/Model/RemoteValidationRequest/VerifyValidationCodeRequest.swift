//
//  VerifyValidationCodeRequest.swift
//  Maskbook
//
//  Created by yzj on 2021/8/25.
//  Copyright © 2021 dimension. All rights reserved.
//

import Foundation

struct VerifyValidationCodeRequest: MaskServiceRequest {
    var baseURL: String { .remoteBackupBaseURL }
    var endPoint: String { "/api/v1/backup/validate_code" }

    typealias ResponseType = RemoteValidationRequestResponse

    let accountType: ValidationCodeParameters.AccountType
    let account: String
    let code: String

    private enum CodingKeys: String, CodingKey {
        case accountType = "account_type"
        case account
        case code
    }
}
