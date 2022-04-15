import Combine
import Foundation

import BigInt
import PullRefresh
import web3swift

@globalActor
struct MaskGroupActor {
  actor ActorType {}
  static let shared: ActorType = ActorType()
}

@MainActor
final class LuckyDropHistoryViewModel: ObservableObject {
    enum LoadingState {
        case empty
        case loading
        case idle
    }

    private(set) var exploreAddress: String?
    private(set) var startBlock: Int?
    private(set) var apiKey: String?

    let contract = HappyRedPacketV4()

    @Published var selection = LuckDropKind.token

    @Published var tokenPayloads: [TokenPayload] = []
    @Published var nftPayloads: [NftRedPacketPayload] = []
    @Published var state = LoadingState.empty

    private var cancelableStorage: Set<AnyCancellable> = []

    init() {
        self.startBlock = usersettings.network.startBlock
        self.exploreAddress = usersettings.network.explorAddress
        self.apiKey = usersettings.network.apiKey
    }

    @InjectedProvider(\.userDefaultSettings)
    private var usersettings

    private var page = 1
    private var offset = 20

    func getFetchParams() async -> (exploreAddress: String, contractAddress: String, provider: web3, address: String, netWorkName: String?)? {
        guard let urlString = self.exploreAddress,
              let contractAddress = self.usersettings.network.redPacketAddressV4,
              let provider  = self.usersettings.network.w3Provider,
              let address = self.usersettings.defaultAccountAddress else {
            return nil
        }
        let networkName = self.usersettings.network.fullEvmName
        return (urlString, contractAddress, provider, address, networkName)
    }

    func displayData() {
        let listEmpty: Bool = {
            switch selection {
            case .token: return tokenPayloads.isEmpty
            case .nft: return nftPayloads.isEmpty
            }
        }()

        if listEmpty {
            state = .loading
            Task {
                await loadData()
            }
        } else {
            state = .idle
        }
    }

    func loadData() async {
        switch self.selection {
        case .token: await loadTokenHistory()
        case .nft: await loadNFTHistory()
        }
    }

    private func loadTokenHistory() async {
        guard let history = try? await fetchTokenRedPacketHistory() else {
            return
        }
        self.tokenPayloads = history
        guard self.selection == .token else { return }
        self.state = history.isEmpty ? .empty : .idle
    }

    private func loadNFTHistory() async {
        try? await Task.sleep(nanoseconds: 2 * 1_000_000_000)
        self.state = .empty
    }
}
