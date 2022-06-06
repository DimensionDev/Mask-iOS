import Foundation
import SwiftyJSON

// MARK: - WalletBackupInfo
struct WalletBackupInfo: Codable {
    let name: String
    let address: String
    let createdAt: TimeInterval
    let updatedAt: TimeInterval
    let passphrase: String?
    let mnemonic: Mnemonic?
    let privateKey: PrivateKey?
    let publicKey: PrivateKey?

    init(
        name: String = "",
        address: String = "",
        createdAt: TimeInterval = 0,
        updateAt: TimeInterval = 0,
        passphrase: String? = nil,
        mnemonic: Mnemonic? = nil,
        privateKey: PrivateKey? = nil,
        publicKey: PrivateKey? = nil
    ) {
        self.name = name
        self.address = address
        self.createdAt = createdAt
        self.updatedAt = updateAt
        self.passphrase = passphrase
        self.mnemonic = mnemonic
        self.privateKey = privateKey
        self.publicKey = publicKey
    }

    init(from json: [String: Any]) {
        name = json[CodingKeys.name.stringValue] as? String ?? ""
        address = json[CodingKeys.address.stringValue] as? String ?? ""
        createdAt = json[CodingKeys.createdAt.stringValue]
            .flatMap(RestoreFile.converTimeInterval) ?? 0

        updatedAt = json[CodingKeys.updatedAt.stringValue]
            .flatMap(RestoreFile.converTimeInterval) ?? 0

        passphrase = json[CodingKeys.passphrase.stringValue] as? String
        mnemonic = json[CodingKeys.mnemonic.stringValue]
            .flatMap { $0 as? [String: Any] }
            .flatMap { Mnemonic(from: $0) }

        privateKey = json[CodingKeys.privateKey.stringValue]
            .flatMap { $0 as? [String: Any] }
            .flatMap { PrivateKey(from: $0) }

        publicKey = json[CodingKeys.publicKey.stringValue]
            .flatMap { $0 as? [String: Any] }
            .flatMap { PrivateKey(from: $0) }
    }
}

// MARK: - Mnemonic
extension WalletBackupInfo {
    struct Mnemonic: Codable {
        let words: String
        let parameter: Parameter

        init(from json: [String: Any]) {
            words = json[CodingKeys.words.stringValue] as? String ?? ""
            let param = json[CodingKeys.parameter.stringValue] as? [String: Any] ?? [:]
            parameter = Parameter(from: param)
        }

        init(words: String, parameter: Parameter) {
            self.words = words
            self.parameter = parameter
        }
    }

    // MARK: - Parameter
    struct Parameter: Codable {
        let path: String
        // must have value, to make the situation that mnenomic exist and private key is nil reasonable
        let withPassword: Bool?

        init(from json: [String: Any]) {
            path =  json[CodingKeys.path.stringValue] as? String ?? ""
            withPassword = json[CodingKeys.withPassword.stringValue] as? Bool ?? false
        }

        init(path: String, withPassword: Bool = false) {
            self.path = path
            self.withPassword = withPassword
        }
    }

    // MARK: - PrivateKey
    struct PrivateKey: Codable {
        init(crv: String, x: String, y: String, keyOps: [String], kty: String, d: String? = nil) {
            self.crv = crv
            self.x = x
            self.y = y
            self.keyOps = keyOps
            self.kty = kty
            self.d = d
            ext = true
        }

        let crv: String
        let x, y: String
        let keyOps: [String]
        let kty: String
        let d: String?
        let ext: Bool?

        enum CodingKeys: String, CodingKey {
            case crv, x, y
            case keyOps = "key_ops"
            case kty, d
            case ext
        }

        init(from json: [String: Any]) {
            d = json[CodingKeys.d.stringValue] as? String
            x = json[CodingKeys.x.stringValue] as? String ?? ""
            y = json[CodingKeys.y.stringValue] as? String ?? ""
            kty = json[CodingKeys.kty.stringValue] as? String ?? ""
            crv = json[CodingKeys.crv.stringValue] as? String ?? ""
            keyOps = json[CodingKeys.keyOps.stringValue] as? [String] ?? []
            ext = json[CodingKeys.ext.stringValue] as? Bool ?? true
        }
    }

    func asBackupJSON() -> [String: Any]? {
        { try? JSONEncoder().encode(self) }()
        .flatMap { try? JSONSerialization.jsonObject(with: $0, options: .mutableContainers) }
        .flatMap { $0 as? [String: Any] }
    }

    func merged(into json: [String: Any]) -> [String: Any] {
        var finalResult = json
        guard let flatJSON = asBackupJSON() else {
            return finalResult
        }

        finalResult["wallets"] = flatJSON

        return finalResult
    }
}

extension Dictionary where Key == String, Value == Any {
    mutating func mergeWallets(_ item: [WalletBackupInfo]) {
        self["wallets"] = item.asBackupJSON()
    }
}

extension Array where Element == WalletBackupInfo {
    func asBackupJSON() -> [[String: Any]] {
        compactMap { $0.asBackupJSON() }
    }

    func wrappedIntoJSON() -> JSON? {
        JSON(["wallets": asBackupJSON()])
    }
}
