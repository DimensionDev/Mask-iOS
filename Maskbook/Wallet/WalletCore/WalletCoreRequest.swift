//
//  WalletCoreRequest.swift
//  Maskbook
//
//  Created by yzj on 2021/7/12.
//  Copyright © 2021 dimension. All rights reserved.
//

import Combine
import CoreData
import CoreDataStack
import Foundation
import MaskWalletCore

protocol WalletCoreRequest {
    associatedtype ParsedResult
    func asWalletRequest() -> Api_MWRequest
    func parse(_ response: Api_MWResponse) throws -> ParsedResult
}

struct PasswordCall: WalletCoreRequest {
    let password: String
    let context: NSManagedObjectContext

    func parse(_ response: Api_MWResponse) throws -> (StoredKey, String) {
        (
            StoredKey(storedKeyInfo: response.respCreateStoredKey.storedKey, context: context),
            response.respCreateStoredKey.mnemonic
        )
    }

    func asWalletRequest() -> Api_MWRequest {
        var param = Api_CreateStoredKeyParam()
        param.password = password
        var req = Api_MWRequest()
        req.paramCreateStoredKey = param

        return req
    }
}

extension WalletCoreService {
    func createWallet(byPassword password: String, context: NSManagedObjectContext) -> AnyPublisher<(StoredKey, String), Error> {
        caller.call(PasswordCall(password: password, context: context))
    }
}
