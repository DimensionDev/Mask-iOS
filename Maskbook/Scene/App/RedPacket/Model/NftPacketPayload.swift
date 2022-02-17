import Foundation

extension RedPacket {
    struct NftRedPacketPayload: Codable {
        let id: String
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
        let createTime: Double?

        enum CodingKeys: String, CodingKey {
            case id
            case txid
            case duration
            case message
            case senderName = "sender_name"
            case contractName = "contract_name"
            case contractAddress = "contract_address"
            case contractVersion = "contract_version"
            case contractTokenURI = "contract_tokenURI"
            case privateKey
            case chainId
            case createTime = "create_time"
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

        struct Payload: Codable {
            let sender: Sender
            let contractVersion: Double
            let network: String?
            let tokenType: EthereumToken
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
            let chainId: ChainId
            /** token name */
            let name: String
            /** token decimal */
            let decimals: Int
            /** token symbol */
            let symbol: String
        }
    }
}
