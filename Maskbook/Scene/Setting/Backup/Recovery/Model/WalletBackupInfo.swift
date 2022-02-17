import Foundation
import SocketIO
import SwiftyJSON

// MARK: - WalletBackupInfo
struct WalletBackupInfo: Codable {
    let name: String
    let address: String
    let createdAt: TimeInterval
    let updatedAt: TimeInterval
    let passphrase: String
    let mnemonic: Mnemonic?
    let privateKey: PrivateKey?

    init(
        name: String = "",
        address: String = "",
        createdAt: TimeInterval = 0,
        updateAt: TimeInterval = 0,
        passphrase: String = "",
        mnemonic: Mnemonic? = nil,
        privateKey: PrivateKey? = nil
    ) {
        self.name = name
        self.address = address
        self.createdAt = createdAt
        self.updatedAt = updateAt
        self.passphrase = passphrase
        self.mnemonic = mnemonic
        self.privateKey = privateKey
    }
}

// MARK: - Mnemonic
extension WalletBackupInfo {
    struct Mnemonic: Codable {
        let words: String
        let parameter: Parameter
    }

    // MARK: - Parameter
    struct Parameter: Codable {
        let path: String
    }

    // MARK: - PrivateKey
    struct PrivateKey: Codable {
        let crv: String
        let x, y: String
        let keyOps: [String]
        let kty, d: String

        enum CodingKeys: String, CodingKey {
            case crv, x, y
            case keyOps = "key_ops"
            case kty, d
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
