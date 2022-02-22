//
//  MaskError.swift
//  Maskbook
//
//  Created by BradGao on 2021/6/29.
//  Copyright © 2021 dimension. All rights reserved.
//

import Foundation
import web3swift

enum MaskError: Error {
    case invalidPassword
}

extension MaskError: LocalizedError {
    public var errorDescription: String? {
        switch self {
        case .invalidPassword:
            return "Invalid password"
        }
    }
}

enum WalletCoreError: Error {
    case lowLevelLibError(Error)
    case walletCoreError(MaskWalletCoreError)
    case unsupportedChainType
    case coreDataError
    case storedKeyAlreadyExisting
    case accountNotFound(address: String)
    case requestParamError
    case defaultStoreKeyNotFound
}

enum WalletSendError: Error {
    case unsupportedChainType
    case passwordError
    case addressError
    case ethereumError(Error)
    case walletConnectError
    case contractError
    case amountError
    case cancelled
}

// swiftlint:disable force_cast
extension WalletSendError: LocalizedError {
    public var errorDescription: String? {
        // TODO: i18n
        switch self {
        case .unsupportedChainType:
            return "Unsupported chain type"
            
        case .passwordError:
            return L10n.Scene.Sendtransaction.Send.passwordError
            
        case .addressError:
            return "Invalid address"
            
        case .ethereumError(let error):
            let web3error = error as! Web3Error
            return web3error.errorDescription
            
        case .walletConnectError:
            return "Fail to connect with WalletConnect"

        case .contractError:
            return "Unsupported coin type"
            
        case .amountError:
            return L10n.Scene.Sendtransaction.Send.amountError
            
        case .cancelled:
            return "Cancelled"
        }
    }
}
// swiftlint:enable force_cast
