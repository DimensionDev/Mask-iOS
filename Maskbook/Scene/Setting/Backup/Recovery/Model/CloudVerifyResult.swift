//
//  CloudVerifyResult.swift
//  Maskbook
//
//  Created by yzj on 2021/8/24.
//  Copyright © 2021 dimension. All rights reserved.
//

import Foundation

struct CloudVerifyResult {
    enum Verify {
        case email
        case mobileNumber
    }

    let verify: Verify
    let verifyCode: String
    let accountContent: String
    let accountForCypt: String
}
