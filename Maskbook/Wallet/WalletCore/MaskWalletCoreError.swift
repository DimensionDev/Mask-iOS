//
//  MaskWalletCoreError.swift
//  Maskbook
//
//  Created by BradGao on 2021/8/4.
//  Copyright © 2021 dimension. All rights reserved.
//

import Foundation

private var maskWalletCoreErrorCodeMap: [String: MaskWalletCoreError] = {
    return [
        "-1001": .jsonSerializationError,
        "-1002": .indexOutOfBounds,
        "-1003": .notSupportedOnPrivateKeyTypeStoredKey,
        "-2001": .notSupportedCoin,
        "-2002": .invalidSignInput,
        "-2003": .invalidSignPrivateKey,
        "-3001": .kdfParamsInvalid,
        "-3002": .passwordIncorrect,
        "-3003": .invalidKeyIvLength,
        "-3004": .invalidCiphertext,
        "-3005": .invalidPrivateKey,
        "-3006": .invalidPublicKey,
        "-3007": .invalidMnemonic,
        "-3008": .invalidSeed,
        "-3009": .invalidDerivationpath,
        "-3010": .invalidKeyStoreJson,
        "-3011": .notSupportedPublicKeyType,
        "-3012": .notSupportedCurve,
        "-3013": .notSupportedCipher
    ]
}()

enum MaskWalletCoreError: Error, RawRepresentable {
    // Common error
    case jsonSerializationError
    case indexOutOfBounds
    case notSupportedOnPrivateKeyTypeStoredKey
    // Crypto error
    case kdfParamsInvalid
    case passwordIncorrect
    case invalidKeyIvLength
    case invalidCiphertext
    case invalidPrivateKey
    case invalidPublicKey
    case invalidMnemonic
    case invalidSeed
    case invalidDerivationpath
    case invalidKeyStoreJson
    case notSupportedPublicKeyType
    case notSupportedCurve
    case notSupportedCipher
    case notSupportedCoin
    case invalidSignInput
    case invalidSignPrivateKey
    
    case unknown(errorCode: String, errorMessage: String)
    
    var rawValue: String {
        return maskWalletCoreErrorCodeMap.first { _, value in
            value == self
        }?.key ?? ""
    }
    
    init?(rawValue: String) {
        self.init(errorCode: rawValue, errorMessage: "")
    }
    
    init(errorCode: String, errorMessage: String) {
        if let error = maskWalletCoreErrorCodeMap[errorCode] {
            self = error
        } else {
            self = .unknown(errorCode: errorCode, errorMessage: errorMessage)
        }
    }
}

// TODO: i18n
extension MaskWalletCoreError: LocalizedError {
    public var errorDescription: String? {
        var message: String
        switch self {
        case .jsonSerializationError:
            message = "Fail to serialize the input json"
        case .indexOutOfBounds:
            message = "Requested index is out of bounds"
        case .notSupportedOnPrivateKeyTypeStoredKey:
            message = "Request is not supported on a private key type StoredKey"
        case .kdfParamsInvalid:
            message = "Invalid kdf parameter"
        case .passwordIncorrect:
            message = "Password incorrect"
        case .invalidKeyIvLength:
            message = "Invalid iv length"
        case .invalidCiphertext:
            message = "Invalid cipher text"
        case .invalidPrivateKey:
            message = "Invalid private key"
        case .invalidPublicKey:
            message = "Invalid public key"
        case .invalidMnemonic:
            message = "Invalid mnemonic"
        case .invalidSeed:
            message = "Invalid seed"
        case .invalidDerivationpath:
            message = "Invalid derivation path"
        case .invalidKeyStoreJson:
            message = "Invalid key store json"
        case .notSupportedPublicKeyType:
            message = "Not supported public key type"
        case .notSupportedCurve:
            message = "Not supported curve"
        case .notSupportedCipher:
            message = "Not supported cipher type"
        case .notSupportedCoin:
            message = "Not supported coin"
        case .invalidSignInput:
            message = "Invalid sign input"
        case .invalidSignPrivateKey:
            message = "Invalid sign private key"
        case .unknown:
            message = "Unknown MaskWalletCore error"
        }
        return "Wallet Error: \(message)"
    }
}
