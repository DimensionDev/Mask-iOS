import Combine
import Foundation

import BigInt
import PullRefresh
import web3swift
import struct PullRefresh.InterActionState

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
    @Published var pullState = InterActionState(state: .idle, progress: 0)

    private var cancelableStorage: Set<AnyCancellable> = []

    private var dataFetchedSet = Set<LuckDropKind>()
    private var tokenHistoryTask: Task<[TokenPayload], Error>?
    private var nftHistoryTask: Task<[NftRedPacketPayload], Error>?

    init() {
        self.startBlock = usersettings.network.startBlock
        self.exploreAddress = usersettings.network.explorAddress
        self.apiKey = usersettings.network.apiKey

        $pullState
            .filter(\.isCanceled)
            .removeDuplicates(by: { $0.state == $1.state && $0.isCanceled == $1.isCanceled })
            .map(\.isCanceled)
            .receive(on: DispatchQueue.main)
            .sink { [weak self] _ in
                guard let self = self else { return }
                switch self.selection {
                case .token: self.tokenHistoryTask?.cancel()
                case .nft: self.nftHistoryTask?.cancel()
                }
            }
            .store(in: &cancelableStorage)
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
            !dataFetchedSet.contains(selection)
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
        self.tokenHistoryTask?.cancel()
        self.tokenHistoryTask = Task {
            try await fetchTokenRedPacketHistory()
        }

        do {
            let history = try await tokenHistoryTask?.value ?? []
            self.tokenPayloads = history
            dataFetchedSet.insert(.token)
            guard self.selection == .token else { return }
            self.state = history.isEmpty ? .empty : .idle
        } catch is CancellationError {
            if tokenPayloads.isEmpty {
                self.state = .empty
            }
        } catch {
            dataFetchedSet.insert(.token)
            if tokenPayloads.isEmpty {
                self.state = .empty
            }
        }
    }

    private func loadNFTHistory() async {
        try? await Task.sleep(nanoseconds: 2 * 1_000_000_000)
        self.state = .empty
    }
}
