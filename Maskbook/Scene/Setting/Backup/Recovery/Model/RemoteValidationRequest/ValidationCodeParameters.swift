//
//  ValidationCodeRequest.swift
//  Maskbook
//
//  Created by yzj on 2021/8/25.
//  Copyright © 2021 dimension. All rights reserved.
//

import Foundation

struct ValidationCodeParameters: MaskServiceRequest {
    var baseURL: String { .remoteBackupBaseURL }
    var endPoint: String { "/api/v1/backup/send_code" }

    typealias ResponseType = RemoteValidationRequestResponse

    let accountType: AccountType
    let account: String
    let scenario: Scenario
    let locale: String

    private enum CodingKeys: String, CodingKey {
        case accountType = "account_type"
        case account
        case scenario
        case locale
    }
}

extension ValidationCodeParameters {
    enum AccountType: String, Codable {
        case phone
        case email
    }

    enum Scenario: String, Codable {
        case backup
        case createBinding = "create_binding"
//        case changeBinding = "change_binding"
    }
}
