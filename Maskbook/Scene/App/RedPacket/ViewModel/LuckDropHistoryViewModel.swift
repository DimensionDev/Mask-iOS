import Combine
import Foundation

import BigInt
import web3swift

@MainActor
final class LuckyDropHistoryViewModel {
    private var exploreAddress: String?
    private var startBlock: Int?
    private var apiKey: String?

    init() {
        self.startBlock = usersettings.network.startBlock
        self.exploreAddress = usersettings.network.explorAddress
        self.apiKey = usersettings.network.apiKey
    }

    @InjectedProvider(\.userDefaultSettings)
    private var usersettings

    private var page = 1
    private var offset = 20

    func fetch() async throws {

        // first get explore url, if return nil
        // display empty state
        guard let urlString = self.exploreAddress,
              let baseURL = URL(string: urlString) else {
            return
        }

        let provider  = usersettings.network.w3Provider

        // get endBlock
        let blockNumber = Task.detached { () -> Result<BigUInt?, Error> in
            try Task.checkCancellation()
            let number = try provider?.eth.getBlockNumber()
            guard !Task.isCancelled else {
                return .success(nil)
            }
            return .success(number)
        }
        let block = try await blockNumber.value.get()


        // build request
        guard let urlComponents = buildURLComponents(baseURL, page: self.page, offset: self.offset, endBlock: block),
              let url = urlComponents.url else {
            return
        }

        let urlRequest = try URLRequest(url: url, method: .get)
        try Task.checkCancellation()
        let result = try await provider?.provider.session.data(for: urlRequest)

        guard !Task.isCancelled else {
            return
        }

        guard let (data, _) = result else {
            return
        }

        let payload = try JSONDecoder().decode(AnyscanListOf<RedPacketHistoryInfo>, from: data)

        // TODO: combine RedPacketHistoryInfo and CreateRedPacketInput
    }

    func buildURLComponents(_ baseURL: URL, page: Int, offset: Int, endBlock: BigUInt?) -> URLComponents? {
        guard var url = URLComponents(url: baseURL, resolvingAgainstBaseURL: false) else {
            return nil
        }

        url.queryItems = [
            .init(name: "apikey", value: apiKey),
            .init(name: "action", value: "txlist"),
            .init(name: "module", value: "account"),
            .init(name: "sort", value: "desc"),
            .init(name: "address", value: usersettings.network.redPacketAddressV4),
            .init(name: "startblock", value: startBlock.flatMap { "\($0)" }),
            .init(name: "endblock", value: endBlock.flatMap { String.init($0) }),
            .init(name: "page", value: "\(page)"),
            .init(name: "offset", value: "\(offset)")
        ]

        return url
    }
}

struct HistoryPack: Codable {
    
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
