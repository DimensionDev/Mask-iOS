//
//  WalletConnectSendResponseDelegate.swift
//  Maskbook
//
//  Created by sxiaojian on 2021/12/13.
//  Copyright © 2021 dimension. All rights reserved.
//

import Foundation
import WalletConnectSwift

extension WalletConnectServerController {
    enum WalletConnectTransactionResponse {
        case sendTransaction(_ txHash: String)
        case fail(errorMessage: String, code: Int)
    }
}

protocol WalletConnectSendResponseDelegate: AnyObject {
    func walletConnectTransactionResponse(response: Response)
}
