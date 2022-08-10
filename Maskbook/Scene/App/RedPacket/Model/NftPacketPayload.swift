import Foundation

extension RedPacket {
    struct NftRedPacketPayload: Codable {
        init(
            id: String,
            txid: String,
            duration: Double,
            message: String,
            senderName: String,
            contractName: String,
            contractAddress: String,
            contractVersion: Double,
            contractTokenURI: String,
            privateKey: String,
            chainId: RedPacket.ChainId,
            createTime: Double? = nil
        ) {
            self.id = id
            self.txid = txid
            self.duration = duration
            self.message = message
            self.senderName = senderName
            self.contractName = contractName
            self.contractAddress = contractAddress
            self.contractVersion = contractVersion
            self.contractTokenURI = contractTokenURI
            self.privateKey = privateKey
            self.chainId = chainId
            self.createTime = createTime
        }

        var id: String?
        let txid: String
        let duration: Double
        let message: String
        let senderName: String
        let contractName: String
        let contractAddress: String
        let contractVersion: Double
        let contractTokenURI: String
        let privateKey: String
        let chainId: ChainId
        var createTime: Double?

        enum CodingKeys: String, CodingKey {
            case id
            case txid
            case duration
            case message
            case senderName
            case contractName
            case contractAddress
            case contractVersion
            case contractTokenURI
            case privateKey
            case chainId
            case createTime
        }
    }

    struct NtfRedPacketJSONPayload: Codable {
        let basic: Basic?
        let payload: Payload?

        init(from decoder: Decoder) throws {
            let container = try decoder.singleValueContainer()
            // use try? to avoid decoding error 
            basic = try? container.decode(Basic.self)
            payload = try? container.decode(Payload.self)
        }

        enum CodingKyes: String, CodingKey {
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

            case sender
            case contractVersion = "contract_version"
            case network
            case tokenType = "token_type"
            case token
        }

        func encode(to encoder: Encoder) throws {
            var container = encoder.container(keyedBy: CodingKyes.self)

            try container.encodeIfPresent(basic?.contractAddress, forKey: .contractAddress)
            try container.encodeIfPresent(basic?.rpid, forKey: .rpid)
            try container.encodeIfPresent(basic?.password, forKey: .password)
            try container.encodeIfPresent(basic?.shares, forKey: .shares)
            try container.encodeIfPresent(basic?.isRandom, forKey: .isRandom)
            try container.encodeIfPresent(basic?.total, forKey: .total)
            try container.encodeIfPresent(basic?.creationTime, forKey: .creationTime)
            try container.encodeIfPresent(basic?.duration, forKey: .duration)
            try container.encodeIfPresent(basic?.blockNumber, forKey: .blockNumber)

            try container.encodeIfPresent(payload?.sender, forKey: .sender)
            try container.encodeIfPresent(payload?.contractVersion, forKey: .contractVersion)
            try container.encodeIfPresent(payload?.network, forKey: .network)
            try container.encodeIfPresent(payload?.tokenType, forKey: .tokenType)
            try container.encodeIfPresent(payload?.token, forKey: .token)
        }

        struct Payload: Codable {
            let sender: Sender
            let contractVersion: Double
            let network: String?
            let tokenType: EthereumToken?
            let token: ERC20TokenRecord?

            enum CodingKeys: String, CodingKey {
                case sender
                case contractVersion = "contract_version"
                case network
                case tokenType = "token_type"
                case token
            }
        }

        struct ERC20TokenRecord: Codable {
            /** contract address */
            let address: String
            /** eth chain id */
//            let chainId: ChainId
            /** token name */
            let name: String
            /** token decimal */
            let decimals: Int
            /** token symbol */
            let symbol: String
        }
    }
}
