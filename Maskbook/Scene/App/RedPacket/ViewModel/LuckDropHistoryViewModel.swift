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
final class LuckyDropHistoryViewModel: ObservableObject {
    private var exploreAddress: String?
    private var startBlock: Int?
    private var apiKey: String?

    private let contract = HappyRedPacketV4()

    @Published var selection = LuckDropKind.token

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

    func loadData() async {
        guard let history = try? await fetchHistory() else {

            return
        }

        if history.isEmpty {

        } else {

        }
    }
}
