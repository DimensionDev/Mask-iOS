//
//  CryptionHelper.swift
//  Maskbook
//
//  Created by Hugo L on 2021/8/26.
//  Copyright © 2021 dimension. All rights reserved.
//

import Combine
import CryptoKit
import CryptoSwift
import Foundation
import SwiftMsgPack
import SwiftyJSON

enum SupportedVersions {
    case version0

    var data: Data {
        switch self {
        case .version0:
            return "MASK-BACKUP-V000".data(using: .utf8) ?? Data()
        }
    }
}

enum Crypto {
    enum CryptoError: Error {
        case invalidKey
        case decryptFailed
        case failToGenerateIV
        case unknownFormat
        case wrongCheckSum
    }

    // generate PBKDF2 key
    static func generateKeyWith(_ password: String) throws -> ([UInt8]?, [UInt8]) {
        // commend line below to make Unit tests finish fast.
        // return Data(base64Encoded: "3pOq7RIEa0ovLyEtPFrKCLlHJ12E8vhnPA51nNWZxPQ=")?.bytes ?? []
        var computedPassword = Data()
        try computedPassword.pack(password)
        let iv = try randomIV()
        guard let key = try? PKCS5.PBKDF2(
            password: computedPassword.bytes,
            salt: iv,
            iterations: 10_000,
            keyLength: 32,
            variant: .sha256).calculate() else {
            return (nil, iv)
        }
        return (key, iv)
    }

    static func generateKeyWith(_ password: String, iv: [UInt8]) throws -> [UInt8]? {
        // commend line below to make Unit tests finish fast.
        // return Data(base64Encoded: "3pOq7RIEa0ovLyEtPFrKCLlHJ12E8vhnPA51nNWZxPQ=")?.bytes ?? []
        var computedPassword = Data()
        try computedPassword.pack(password)
        guard let key = try? PKCS5.PBKDF2(
            password: computedPassword.bytes,
            salt: iv,
            iterations: 10_000,
            keyLength: 32,
            variant: .sha256).calculate() else {
            return nil
        }
        return key
    }

    // encrypt content
    static func encryptBackup(password: String, account: String, content: [String: Any]) throws -> Data {
        let account = account.lowercased()
        let computedPassword = account + password
        let (generateKey, pbkdf2IV) = try generateKeyWith(computedPassword)
        guard let key = generateKey else { throw CryptoError.invalidKey }
        let paramIV = try randomIV()
        let gcm = GCM(iv: paramIV, mode: .combined)
        let aes = try AES(key: key, blockMode: gcm, padding: .noPadding)

        var fileData = Data()
        try fileData.pack(content)
        let encrypted = try aes.encrypt(fileData.bytes)

        var mergedData = Data()
        try mergedData.pack([Data(pbkdf2IV), Data(paramIV), Data(encrypted)])

        let container = box(version: .version0, data: mergedData)
        return container
    }

    // decrypt content
    static func decryptBackup(password: String, account: String, content: Data) throws -> Data {
        let account = account.lowercased()
        let mergedData = try unbox(version: .version0, data: content)

        guard let encryptedArray = try mergedData.unpack() as? [Any],
              encryptedArray.count == 3,
              let pbkdf2IV: Data = encryptedArray[0] as? Data,
              let paramIV: Data = encryptedArray[1] as? Data,
              let encrypted: Data = encryptedArray[2] as? Data else {
            throw CryptoError.unknownFormat
        }

        let computedPassword = account + password
        guard let generateKey = try generateKeyWith(computedPassword, iv: pbkdf2IV.bytes) else {
            throw CryptoError.invalidKey
        }
        let gcm = GCM(iv: paramIV.bytes, mode: .combined)
        let aes = try AES(key: generateKey, blockMode: gcm, padding: .noPadding)
        let packedFileBytes = try aes.decrypt(encrypted.bytes)
        return Data(packedFileBytes)
    }

    static func box(version: SupportedVersions, data: Data) -> Data {
        var rtnData = Data()
        let versionData = version.data
        let checksum = data.sha256()

        rtnData.append(versionData)
        rtnData.append(data)
        rtnData.append(checksum)
        return rtnData
    }

    static func unbox(version: SupportedVersions, data: Data) throws -> Data {
        guard data.starts(with: version.data) else {
            throw CryptoError.unknownFormat
        }

        let checkSumLength = 32
        guard let range = Range(NSRange(
            location: version.data.count,
            length: data.count - checkSumLength - version.data.count)) else {
            throw CryptoError.unknownFormat
        }
        let encrypted = data.subdata(in: range)
        let checksum = encrypted.sha256()
        let checksumEncode = data.suffix(checkSumLength)

        if checksum != checksumEncode {
            throw CryptoError.wrongCheckSum
        }
        return encrypted
    }

    static func randomIV() throws -> [UInt8] {
        return try randomData(length: 16)
    }

    static func randomData(length: Int) throws -> [UInt8] {
        var paramIV = [UInt8](repeating: 0, count: length)
        let status = SecRandomCopyBytes(kSecRandomDefault, paramIV.count, &paramIV)
        if status != errSecSuccess { // Always test the status.
            throw CryptoError.failToGenerateIV
        }
        return paramIV
    }
}

// MARK: Crypto methods for UserDefaults
extension Crypto {
    static func encrypt(inputText: String) throws -> Data {
        do {
            let aes = try AES(key: Secret.SECRET_USERDEFAULT_KEY, iv: Secret.SECRET_USERDEFAULT_IV)
            let ciphertext = try aes.encrypt(Array(inputText.utf8))
            return Data(fromArray: ciphertext)
        } catch {
            throw error
        }
    }

    static func decrypt(input: Data) throws -> String? {
        do {
            let aes = try AES(key: Secret.SECRET_USERDEFAULT_KEY, iv: Secret.SECRET_USERDEFAULT_IV)
            let decrypted = try aes.decrypt(Array(input))
            return String(data: Data(fromArray: decrypted), encoding: .utf8)
        } catch {
            throw error
        }
    }
}

extension Crypto: CombineCompatible {
    static func encryptBackupPublisher(password: String, account: String, content: [String: Any])
    -> AnyPublisher<Data, Error> {
        LazyFuture { promise in
            do {
                let result = try self.encryptBackup(password: password, account: account, content: content)
                promise(.success(result))
            } catch {
                promise(.failure(error))
            }
        }
        .subscribe(on: DispatchQueue.global())
        .receive(on: RunLoop.main)
        .eraseToAnyPublisher()
    }

    static func decryptBackupToDataPublisher(password: String, account: String, content: Data)
    -> AnyPublisher<Data, Error> {
        LazyFuture { promise in
            do {
                // this is a msgpack format data
                let result = try self.decryptBackup(password: password, account: account, content: content)
                promise(.success(result))
            } catch {
                print(error)
                promise(.failure(error))
            }
        }
        .subscribe(on: DispatchQueue.global())
        .receive(on: RunLoop.main)
        .eraseToAnyPublisher()
    }

    static func compatiableConvert(_ data: Data) -> JSON? {
        data.asCompatibleBackupJSON()
    }
}

extension Data {
    func asCompatibleBackupJSON() -> JSON? {
        // to be compatiable with both json format and msgpack format
        // we have to do this
        if JSONSerialization.isValidJSONObject(self) {
            return try? JSON(data: self)
        } else {
            // data will be a msgpack format
            guard let jsonObject = try? self.unpack() as? [String: Any] else {
                return nil
            }

            return JSON(jsonObject)
        }
    }
}
