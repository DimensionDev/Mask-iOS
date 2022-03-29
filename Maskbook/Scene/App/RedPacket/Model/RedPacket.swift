import Foundation

typealias RedPacketPayload = RedPacket.RedPacketPayload
typealias NftRedPacketPayload = RedPacket.NftRedPacketPayload

enum RedPacket {}

extension RedPacket {
    struct Claimer: Codable {
        let address: String
        let name: String
    }

    struct Sender: Codable {
        let address: String
        let name: String
        let message: String
    }
}

extension RedPacket {
    struct Basic: Codable {
        let contractAddress: String
        let rpid: String?
        let txid: String
        let password: String
        let shares: Int
        let isRandom: Bool
        let total: String
        let creationTime: TimeInterval
        let duration: TimeInterval
        let blockNumber: Int?

        enum CodingKeys: String, CodingKey {
            case contractAddress = "contract_address"
            case rpid
            case txid
            case password
            case shares
            case isRandom = "is_random"
            case total
            case creationTime = "creation_time"
            case duration
            case blockNumber = "block_number"
        }
    }
}

extension RedPacket {
    struct RedPacketPayload: Codable {
        let basic: Basic?
        let payload: Payload?

        init(from decoder: Decoder) throws {
            let container = try decoder.singleValueContainer()
            // use try? to avoid decoding error 
            basic = try? container.decode(Basic.self)
            payload = try? container.decode(Payload.self)
        }

        struct Payload: Codable {
            let sender: Sender
            let contractVersion: Double
            let network: String
            let tokenType: EthereumToken?
            let token: FungibleToken?
            let tokenAddress: String?
            let claimers: [Claimer]?
            let totalRemaining: String?

            enum CodingKeys: String, CodingKey {
                case sender
                case contractVersion = "contract_version"
                case network
                case tokenType = "token_type"
                case token
                case tokenAddress = "token_address"
                case claimers
                case totalRemaining = "total_remaining"
            }
        }
    }
}

extension RedPacket {
    enum RedPacketType {
        case average
        case random
        
        var title: String {
            switch self {
            case .average: return L10n.Plugins.Luckydrop.Buttons.average
            case .random: return L10n.Plugins.Luckydrop.Buttons.random
            }
        }
    }
}
