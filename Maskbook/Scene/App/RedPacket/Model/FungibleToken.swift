import Foundation
import WebExtension_Shim

enum EitherOr<T, V>: Codable where T: Codable, V: Codable {
    case either(T)
    case or(V)

    init(from decoder: Decoder) throws {
        let container = try decoder.singleValueContainer()

        if let value = try? container.decode(T.self) {
            self = .either(value)
        } else if let value = try? container.decode(V.self) {
            self = .or(value)
        } else {
            throw DecodeError.unkownType
        }
    }

    func encode(to encoder: Encoder) throws {
        var container = encoder.singleValueContainer()
        switch self {
        case let .or(value): try container.encode(value)
        case let .either(value): try container.encode(value)
        }
    }
    
    var either: T? {
        switch self {
        case let .either(v): return v
        default: return nil
        }
    }
}

enum DecodeError: Error {
    case unkownType
}

extension RedPacket {
    enum EthereumToken: Int, Codable {
        case native = 0
        case erc20
        case erc721
        case erc1155
    }

    struct Token: Codable {
        let type: EthereumToken
        let address: String
        let chainId: ChainId

        let name: String?
        let symbol: String?
        let decimals: Int?
        let logoURI: EitherOr<String, [String]>?
    }

    enum ChainId: Int, Codable {
        case mainnet = 1
        case ropsten = 3
        case rinkeby = 4
        case gorli = 5
        case kovan = 42

        // BSC
        case bsc = 56
        case bsct = 97

        // Matic
        case matic = 137
        case mumbai = 80_001

        // Arbitrum
        case arbitrum = 42_161
        case arbitrumRinkeby = 421_611

        // xDai
        case xDai = 100

        // Celo
        case celo = 42_220

        // Fantom
        case fantom = 250

        // Avalanche
        case avalanche = 43_114

        // Aurora
        case aurora = 1_313_161_554
        case auroraTestnet = 1_313_161_555

        // Fuse
        case fuse = 122

        // Boba
        case boba = 288

        // Metis
        case metis = 1_088

        // Optimistic
        case optimistic = 10
    }

    enum FungibleToken: Codable {
        case erc20Token(Token)
        case nativeToken(Token)
        case unsupportType(Token)

        init(from decoder: Decoder) throws {
            let container = try decoder.singleValueContainer()
            let token = try container.decode(Token.self)

            switch token.type {
            case .erc20: self = .erc20Token(token)
            case .native: self = .nativeToken(token)
            default: self = .unsupportType(token)
            }
        }
        
        var token: Token {
            switch self {
            case .erc20Token(let token):
                return token
                
            case .nativeToken(let token):
                return token
                
            case .unsupportType(let token):
                return token
            }
        }
        
        
        var logoURL: String? {
            guard let uri = self.token.logoURI else {
                return nil
            }
            switch uri {
            case let .either(url): return url
            case let .or(uris): return uris.first
            }
        }
        
        var decimals: Int? { token.decimals }
    }
}

extension RedPacket.ChainId {
    var nativeTokenAddress: String? {
        switch self {
        case .mainnet, .bsc, .arbitrum, .xDai, .matic: return  "0x0000000000000000000000000000000000000000"
        case .celo: return "0x471ece3750da237f93b8e339c536989b8978a438"
        default: return nil
        }
    }
}

extension RedPacket.Token {
    static var eth: Self {
        .init(
            type: .native,
            address: RedPacket.ChainId.mainnet.nativeTokenAddress ?? "",
            chainId: .mainnet,
            name: "Ether",
            symbol: "ETH",
            decimals: 18,
            logoURI: nil
        )
    }

    static var bsc: Self {
        .init(
            type: .native,
            address: RedPacket.ChainId.mainnet.nativeTokenAddress ?? "",
            chainId: .mainnet,
            name: "Ether",
            symbol: "ETH",
            decimals: 18,
            logoURI: nil
        )
    }
}
