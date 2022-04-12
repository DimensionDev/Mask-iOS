import Combine
import Foundation

import BigInt
import web3swift

@globalActor
struct MaskGroupActor {
  actor ActorType { }
  static let shared: ActorType = ActorType()
}

@MainActor
final class LuckyDropHistoryViewModel {
    private var exploreAddress: String?
    private var startBlock: Int?
    private var apiKey: String?

    private let contract = HappyRedPacketV4()

    init() {
        self.startBlock = usersettings.network.startBlock
        self.exploreAddress = usersettings.network.explorAddress
        self.apiKey = usersettings.network.apiKey
    }

    @InjectedProvider(\.userDefaultSettings)
    private var usersettings

    private var page = 1

    private var offset = 20

    func getFetchParams() async -> (exploreAddress: String, contractAddress: String, provider: web3, address: String, netWorkName: String)? {
        guard let urlString = self.exploreAddress,
              let contractAddress = self.usersettings.network.redPacketAddressV4,
              let provider  = self.usersettings.network.w3Provider,
              let address = self.usersettings.defaultAccountAddress else {
            return nil
        }
        let networkName = self.usersettings.network.name
        return (urlString, contractAddress, provider, address, networkName)
    }

    @MaskGroupActor
    func fetch() async throws -> [RedPacketPayload] {
        // first get explore url, if return nil
        // display empty state
        guard let params = await self.getFetchParams() else {
            return []
        }
        let (urlString, contractAddress, provider, address, networkName) = params

        guard let baseURL = URL(string: urlString) else {
            return []
        }

        // get endBlock
        let block = try await provider.blockNumber()
        let startBlock = await self.startBlock
        let apiKey = await self.apiKey

        // build request
        guard let urlComponents = baseURL.buildURLComponents(apiKey: apiKey, address: address, startBlock: startBlock, endBlock: block),
              let url = urlComponents.url else {
            return []
        }

        let urlRequest = try URLRequest(url: url, method: .get)
        try Task.checkCancellation()
        let (data, _)  = try await provider.provider.session.data(for: urlRequest)
        guard !Task.isCancelled else {
            return []
        }

        let decoder = JSONDecoder()

        let payloads = try data.parseRedpacketPayload(
            contract: contract,
            decoding: decoder,
            address: address,
            networkName: networkName
        )

        let ethAddress = EthereumAddress(contractAddress)

        struct SuccessEvent {
            let id: String
            let creation_time: BigUInt

            init?(json: [String: Any]) {
                guard let data = json["id"] as? Data,
                      let time = json["creation_time"] as? BigUInt else {
                    return nil
                }

                self.id = data.toHexString()
                self.creation_time = time
            }
        }

        return await withTaskGroup(
            of: RedPacketPayload?.self,
            returning: [RedPacketPayload].self
        ) { taskGroup in

            for payload in payloads[0..<3] {
                taskGroup.addTask {
                    // here txid is a garantee value
                    var payload = payload
                    let txid = payload.basic?.txid ?? ""
                    let logFetchTask = Task { () -> EventLog? in
                        guard let transactionResult = try? provider.eth.getTransactionReceipt(txid),
                              let log = transactionResult.logs.first(where: { $0.address == ethAddress }) else {
                            return nil
                        }
                        return log
                    }

                    guard let log = await logFetchTask.value else {
                        return nil
                    }

                    let json = self.contract.parse(eventlog: log, filter: .creationSuccess)
                    guard let eventParam = SuccessEvent(json: json) else {
                        return nil
                    }

                    payload.basic?.rpid = eventParam.id
                    payload.basic?.creationTime = eventParam.creation_time.asDouble()
                        .flatMap { $0 * 1000 } ?? 0

                    let checkAvailability = await self.contract.checkAvailability(redPackageId: eventParam.id)
                    payload.payload?.claimers = checkAvailability?.claimed
                        .flatMap { $0.asInt() }
                        .map {
                            (0..<$0).map { _ in
                                RedPacket.Claimer.init(address: "", name: "")
                            }
                        }
                    payload.payload?.totalRemaining = checkAvailability?.balance.flatMap { String($0, radix: 10) }

                    return payload
                }
            }

            var results: [RedPacketPayload] = []
            for await result in taskGroup {
                if let value = result {
                    results.append(value)
                }
            }

            return results
        }
    }
}

fileprivate extension Data {
    func parseRedpacketPayload(
        contract: HappyRedPacketV4,
        decoding decoder: JSONDecoder,
        address: String,
        networkName: String
    ) throws -> [RedPacketPayload] {
        do {
            let payload = try decoder.decode(AnyscanListOf<RedPacketHistoryInfo>.self, from: self)
            let lowcaseAddres = address.lowercased()

            return payload.result.compactMap { next in
                guard next.from.lowercased() == lowcaseAddres else {
                    return nil
                }

                guard !next.hash.isEmpty else {
                    return nil
                }

                let kvpair = contract.parse(input: next.input, for: .createRedPacket)
                let redpacketInfo = RedPacketHistoryInfo.CreateRedpacketParam(json: kvpair)

                guard let info = redpacketInfo else { return nil }

                let basic = RedPacket.Basic(
                    contractAddress: next.contractAddress,
                    rpid: "",
                    txid: next.hash,
                    password: "",
                    shares: info.number.asInt() ?? 0,
                    isRandom: info.ifrandom,
                    total: info.total_tokens.description,
                    creationTime: 0,
                    duration: info.duration.asDouble().flatMap { $0 * 1000 } ?? 0,
                    // better use bigint
                    blockNumber: Int(next.blockNumber)
                )

                let packetPayload = RedPacket.RedPacketPayload.Payload.init(
                    sender: .init(address: address, name: info.name, message: info.message),
                    contractVersion: 4,
                    network: networkName,
                    tokenType: info.token_type.asInt().flatMap { .init(rawValue: $0) },
                    token: nil,
                    tokenAddress: info.token_addr,
                    claimers: [],
                    totalRemaining: nil
                )

                return RedPacketPayload.init(basic: basic, payload: packetPayload)
            }

        } catch {
            throw error
        }
    }
}

fileprivate extension URL {
    func buildURLComponents(apiKey: String?, address: String, page: Int = 0, offset: Int = 0, startBlock: Int?, endBlock: BigUInt?) -> URLComponents? {
        guard var url = URLComponents(url: self, resolvingAgainstBaseURL: false) else {
            return nil
        }

        url.queryItems = [
            .init(name: "apikey", value: apiKey),
            .init(name: "action", value: "txlist"),
            .init(name: "module", value: "account"),
            .init(name: "sort", value: "desc"),
            .init(name: "address", value: address),
            .init(name: "startblock", value: startBlock.flatMap { "\($0)" }),
            .init(name: "endblock", value: endBlock.flatMap { String.init($0) }),
//            .init(name: "page", value: "\(page)"),
//            .init(name: "offset", value: "\(offset)")
        ]

        return url
    }
}

extension BlockChainNetwork {
    var startBlock: Int? {
        switch self {
        case .eth: return 12939427
        case .bsc: return 9657240
        case .polygon: return 17494774
        case .arbitrum: return 909051
        case .xdai: return 18101937
        default: return nil
        }
    }

    var explorAddress: String? {
        switch self {
        case .eth: return "https://api.etherscan.io/api"
        case .bsc: return "https://api.bscscan.com/api"
        case .polygon: return "https://api.polygonscan.com/api"
        case .arbitrum: return "https://api.arbiscan.io/api"
        case .xdai: return "https://blockscout.com/xdai/mainnet/api"
        default: return nil
        }
    }

    var redPacketAddressV4: String? {
        switch self {
        case .eth: return "0xaBBe1101FD8fa5847c452A6D70C8655532B03C33"
        case .bsc: return "0x0ca42C178e14c618c81B8438043F27d9D38145f6"
        case .polygon: return "0x93e0b87A0aD0C991dc1B5176ddCD850c9a78aabb"
        case .arbitrum: return "0x83D6b366f21e413f214EB077D5378478e71a5eD2"
        case .xdai: return "0x54a0A221C25Fc0a347EC929cFC5db0be17fA2a2B"
        default: return nil
        }
    }

    var apiKey: String? {
        APIKey.keys[self]
    }
}
