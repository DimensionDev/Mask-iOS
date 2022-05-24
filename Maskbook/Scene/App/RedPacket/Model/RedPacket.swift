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
        init(
            contractAddress: String,
            rpid: String? = nil,
            txid: String,
            password: String,
            shares: Int,
            isRandom: Bool,
            total: String,
            creationTime: TimeInterval,
            duration: TimeInterval,
            blockNumber: Int?
        ) {
            self.contractAddress = contractAddress
            self.rpid = rpid
            self.txid = txid
            self.password = password
            self.shares = shares
            self.isRandom = isRandom
            self.total = total
            self.creationTime = creationTime
            self.duration = duration
            self.blockNumber = blockNumber
        }

        let contractAddress: String
        var rpid: String?
        let txid: String
        var password: String
        let shares: Int
        let isRandom: Bool
        let total: String
        var creationTime: TimeInterval
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

        init(basic: RedPacket.Basic?, payload: RedPacket.RedPacketPayload.Payload?) {
            self.basic = basic
            self.payload = payload
        }

        var basic: Basic?
        var payload: Payload?

        init(from decoder: Decoder) throws {
            let container = try decoder.container(keyedBy: RedPacketPayload.CodingKeys.self)
            // use try? to avoid decoding error
            basic = try? container.decode(Basic.self, forKey: .basic)
            payload = try? container.decode(Payload.self, forKey: .payload)
        }

        struct Payload: Codable {
            init(
                sender: RedPacket.Sender,
                contractVersion: Double,
                network: String,
                tokenType: RedPacket.EthereumToken?,
                token: RedPacket.FungibleToken?,
                tokenAddress: String?,
                claimers: [RedPacket.Claimer]? = nil,
                totalRemaining: String? = nil
            ) {
                self.sender = sender
                self.contractVersion = contractVersion
                self.network = network
                self.tokenType = tokenType
                self.token = token
                self.tokenAddress = tokenAddress
                self.claimers = claimers
                self.totalRemaining = totalRemaining
            }
            
            init(from decoder: Decoder) throws {
                let container = try decoder.container(keyedBy: Payload.CodingKeys.self)
                // use try? to avoid decoding error
                sender = try container.decode(Sender.self, forKey: .sender)
                contractVersion = try container.decode(Double.self, forKey: .contractVersion)
                network = try container.decode(String.self, forKey: .network)
                tokenType = try? container.decode(EthereumToken.self, forKey: .tokenType)
                token = try? container.decode(FungibleToken.self, forKey: .token)
                tokenAddress = try? container.decode(String.self, forKey: .tokenAddress)
                claimers = try? container.decode([Claimer].self, forKey: .claimers)
                totalRemaining = try? container.decode(String.self, forKey: .totalRemaining)
            }

            let sender: Sender
            let contractVersion: Double
            let network: String
            let tokenType: EthereumToken?
            var token: FungibleToken?
            let tokenAddress: String?
            var claimers: [Claimer]?
            var totalRemaining: String?

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
