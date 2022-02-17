import Foundation

enum DappScriptMethod: Codable {
    case getRPCurl
    case ethCoinbase
    case ethGetAccounts
    case ethAccounts
    case ethSignTransaction
    case ethSign
    case custom(String)

    init(from decoder: Decoder) throws {
        let container = try decoder.singleValueContainer()
        let value = try container.decode(String.self)
        switch value {
        case "getRPCurl": self = .getRPCurl
        case "eth_coinbase": self = .ethCoinbase
        case "eth_getAccounts": self = .ethGetAccounts
        case "eth_accounts": self = .ethAccounts
        case "eth_signTransaction": self = .ethSignTransaction
        case "eth_sign": self = .ethSign
        default: self = .custom(value)
        }
    }

    init(rawValue: String) {
        switch rawValue {
        case "getRPCurl": self = .getRPCurl
        case "eth_coinbase": self = .ethCoinbase
        case "eth_getAccounts": self = .ethGetAccounts
        case "eth_accounts": self = .ethAccounts
        case "eth_signTransaction": self = .ethSignTransaction
        case "eth_sign": self = .ethSign
        default: self = .custom(rawValue)
        }
    }

    var rawValue: String {
        switch self {
        case .getRPCurl: return "getRPCurl"
        case .ethCoinbase: return "eth_coinbase"
        case .ethGetAccounts: return "eth_getAccounts"
        case .ethAccounts: return "eth_accounts"
        case .ethSignTransaction: return "eth_signTransaction"
        case .ethSign: return "eth_sign"
        case let .custom(value): return value
        }
    }

    func encode(to encoder: Encoder) throws {
        var container = encoder.singleValueContainer()
        try container.encode(self.rawValue)
    }
}
