import Combine
import Foundation

import BigInt
import PullRefresh
import web3swift
import struct PullRefresh.InterActionState
import UIKit
import SwiftUI

@globalActor
struct MaskGroupActor {
  actor ActorType {}
  static let shared: ActorType = ActorType()
}

@MainActor
@dynamicMemberLookup
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
    
    var pullState = InterActionState(state: .idle, progress: 0) {
        didSet {
            guard oldValue.isCanceled != pullState.isCanceled,
                  oldValue.state != pullState.state else {
                return
            }
            checkPullState(pullState)
        }
    }
    
    subscript<Value>(dynamicMember keyPath: ReferenceWritableKeyPath<LuckyDropHistoryViewModel, Value>) -> Binding<Value> {
        Binding(
            get: {
                self[keyPath: keyPath]
            },
            set: { value, _ in
                self[keyPath: keyPath] = value
            }
        )
    }

    private var cancelableStorage: Set<AnyCancellable> = []

    private var dataFetchedSet = Set<LuckDropKind>()
    private var tokenHistoryTask: Task<[TokenPayload], Error>?
    private var nftHistoryTask: Task<[NftRedPacketPayload], Error>?

    init() {
        self.startBlock = usersettings.network.startBlock
        self.exploreAddress = usersettings.network.explorAddress
        self.apiKey = usersettings.network.apiKey
    }
    
    deinit {
        self.nftHistoryTask?.cancel()
        self.tokenHistoryTask?.cancel()
    }
    
    func checkPullState(_ pullState: InterActionState) {
        if pullState.isCanceled {
            switch self.selection {
            case .token: self.tokenHistoryTask?.cancel()
            case .nft: self.nftHistoryTask?.cancel()
            }
            
            if payloadIsEmpty(for: selection) {
                state = .empty
            } else {
                state = .idle
            }
        }
    }

    @InjectedProvider(\.userDefaultSettings)
    var usersettings

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
    
    func payloadIsEmpty(for selection: LuckDropKind) -> Bool {
        switch selection {
        case .token: return tokenPayloads.isEmpty
        case .nft: return nftPayloads.isEmpty
        }
    }

    func displayData() {
        let didRequest: Bool = dataFetchedSet.contains(selection)

        if !didRequest {
            state = .loading
            Task {
                await loadData()
            }
        } else {
            if payloadIsEmpty(for: selection) {
                state = .empty
            } else {
                state = .idle
            }
        }
    }

    func loadData() async {
        switch self.selection {
        case .token: await loadTokenHistory()
        case .nft: await loadNFTHistory()
        }
    }

    private func loadTokenHistory() async {
        dataFetchedSet.insert(.token)
        tokenHistoryTask?.cancel()
        tokenHistoryTask = Task {
            try await fetchTokenRedPacketHistory()
        }

        do {
            let history = try await tokenHistoryTask?.value ?? []
            
            if tokenPayloads.isEmpty {
                tokenPayloads = history
            } else {
                if !history.isEmpty {
                    tokenPayloads = history
                }
            }
            
            self.tokenHistoryTask = nil
            
            guard selection == .token else { return }
            state = tokenPayloads.isEmpty ? .empty : .idle
        } catch  {
            guard selection == .token else {
                return
            }
            errorhandling(error, for: .token)
        }
    }
    
    private func errorhandling(_ error: Error, for selection: LuckDropKind) {
        // all handle with empty and idle state
        if payloadIsEmpty(for: selection) {
            state = .empty
        } else {
            state = .idle
        }
    }

    private func loadNFTHistory() async {
        try? await Task.sleep(nanoseconds: 2 * 1_000_000_000)
        dataFetchedSet.insert(.nft)
        state = .empty
    }
}
