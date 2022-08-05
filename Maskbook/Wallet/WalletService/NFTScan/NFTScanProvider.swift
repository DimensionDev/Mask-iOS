//
//  NFTScanProvider.swift
//  Maskbook
//
//  Created by caiyu on 2022/8/3.
//  Copyright © 2022 dimension. All rights reserved.
//

import Combine
import CoreData
import CoreDataStack
import Foundation

class NFTScanProvider {
    @InjectedProvider(\.userDefaultSettings)
    private var userSettings

    var refreshCompletionBlock: ((Error?) -> Void)?

    private let callbackProcessQueue = DispatchQueue(label: "io.mask.nftscan")
    private let baseURL: URL = .init(string: "https://restapi.nftscan.com/api/v2/")!
    private var disposeBag = Set<AnyCancellable>()
    private var connecting = false
    private var timer = Timer.publish(every: 60, on: .main, in: .default)
    private var cancellable: AnyCancellable?

    private let session: URLSession = {
        let session = URLSession(configuration: .default)
        return session
    }()

    let subject = CurrentValueSubject<[NFTScanAssetModel], Error>([])
    private var cursor = CurrentValueSubject<String?, Never>(nil)
    private var assets = [NFTScanAssetModel]()
    private var assetsCancellable: AnyCancellable?
    var supportNetworkIDs: [BlockChainNetwork] {
        [.eth]
    }

    weak var delegate: WalletAssetProviderDelegate?

    init() {
        subscribeAssetCursor()
        subscribeNetwork()
    }

    private func isSupported(network: BlockChainNetwork) -> Bool {
        supportNetworkIDs.contains(network)
    }

    private func subscribeAssetCursor() {
        let network = UserDefaultSettings.shared
            .networkPubisher
            .removeDuplicates()
            .filter(isSupported)
            .eraseToAnyPublisher()
        Publishers.CombineLatest(cursor, network)
            .filter { [weak self] _, network in
                self?.isSupported(network: network) == true
            }
            .receive(on: callbackProcessQueue)
            .sink { [weak self] cursor, network in
                guard let self = self else {
                    return
                }
                guard let cursor = cursor else {
                    return
                }

                if cursor.isEmpty {
                    self.assets.removeAll()
                }

                self.assetsCancellable = self.retrieveAssetsByAddress(cursor: cursor, limit: 100)?
                    .receive(on: self.callbackProcessQueue).sink(receiveCompletion: { completion in
                        switch completion {
                        case let .failure(error):
                            self.subject.send(completion: .failure(error))

                        default:
                            break
                        }
                    }) { dataModel in
                        self.assets.append(contentsOf: dataModel.content)

                        if dataModel.next == nil {
                            let allNFTAssets = self.assets
                            self.resolveResponse(assets: allNFTAssets, network: network)
                            self.subject.send(allNFTAssets)
                        } else {
                            self.callbackProcessQueue.asyncAfter(deadline: .now() + 0.1) {
                                self.cursor.value = dataModel.next
                            }
                        }
                    }
            }
            .store(in: &disposeBag)
    }

    private func subscribeNetwork() {
        UserDefaultSettings.shared
            .networkPubisher
            .removeDuplicates()
            .filter(isSupported)
            .sink { [weak self] network in
                self?.assetsCancellable = nil
                self?.cursor.accept(nil)
                print("[opensea] network updated: \(network.networkID)")
            }
            .store(in: &disposeBag)
    }

    private func retrieveAssetsByAddress(
        cursor: String,
        limit: Int
    ) -> AnyPublisher<NFTScanAssetDataModel, Error>? {
        guard let address = maskUserDefaults.defaultAccountAddress else {
            return nil
        }

        let decoder = JSONDecoder()
        var fetchTokenURLComponents = URLComponents(
            url: baseURL.appendingPathComponent("account/own/\(address)"),
            resolvingAgainstBaseURL: false
        )

        fetchTokenURLComponents?.queryItems = [
            URLQueryItem(name: "erc_type", value: "erc721"),
            URLQueryItem(name: "limit", value: "\(limit)"),
            URLQueryItem(name: "cursor", value: "\(cursor)"),
        ]

        guard let requestURL = fetchTokenURLComponents?.url else {
            return nil
        }

        var fetchTokenRequest = URLRequest(url: requestURL)
        fetchTokenRequest.setValue(APIKey.NFTSCAN, forHTTPHeaderField: "x-api-key")
        let tokenPublisher =
            session.dataTaskPublisher(for: fetchTokenRequest)
                .tryMap { element -> Data in
                    guard let httpResponse = element.response as? HTTPURLResponse,
                          httpResponse.statusCode == 200 else {
                        throw URLError(.badServerResponse)
                    }
                    let json = try JSONSerialization.jsonObject(
                        with: element.data,
                        options: []
                    ) as? [String: Any]
                    if let assets = json?["data"] {
                        return try JSONSerialization.data(withJSONObject: assets, options: [])
                    }
                    return element.data
                }
                .decode(type: NFTScanAssetDataModel.self, decoder: decoder)
                .map {
                    $0
                }
                .eraseToAnyPublisher()

        return tokenPublisher
    }

    private func retrieveTransactionsByAddress(
        contractAddress: String,
        tokenID: String
    ) -> AnyPublisher<NFTScanTransactionDataModel, Error>? {
        let decoder = JSONDecoder()
        var fetchTokenURLComponents = URLComponents(
            url: baseURL.appendingPathComponent("transactions/\(contractAddress)/\(tokenID)"),
            resolvingAgainstBaseURL: false
        )

        fetchTokenURLComponents?.queryItems = [
            URLQueryItem(name: "limit", value: "100"),
        ]

        guard let requestURL = fetchTokenURLComponents?.url else {
            return nil
        }

        var fetchTokenRequest = URLRequest(url: requestURL)
        fetchTokenRequest.setValue(APIKey.NFTSCAN, forHTTPHeaderField: "x-api-key")
        let tokenPublisher =
            session.dataTaskPublisher(for: fetchTokenRequest)
                .tryMap { element -> Data in
                    guard let httpResponse = element.response as? HTTPURLResponse,
                          httpResponse.statusCode == 200 else {
                        throw URLError(.badServerResponse)
                    }
                    let json = try JSONSerialization.jsonObject(
                        with: element.data,
                        options: []
                    ) as? [String: Any]
                    if let assets = json?["data"] {
                        return try JSONSerialization.data(withJSONObject: assets, options: [])
                    }
                    return element.data
                }
                .decode(type: NFTScanTransactionDataModel.self, decoder: decoder)
                .map {
                    $0
                }
                .eraseToAnyPublisher()

        return tokenPublisher
    }

    private func retrieveCollectionByAddress(
        contractAddress: String
    ) -> AnyPublisher<NFTScanCollectionDataModel, Error>? {
        let decoder = JSONDecoder()
        var fetchTokenURLComponents = URLComponents(
            url: baseURL.appendingPathComponent("collections/\(contractAddress)"),
            resolvingAgainstBaseURL: false
        )

        guard let requestURL = fetchTokenURLComponents?.url else {
            return nil
        }

        var fetchTokenRequest = URLRequest(url: requestURL)
        fetchTokenRequest.setValue(APIKey.NFTSCAN, forHTTPHeaderField: "x-api-key")
        let tokenPublisher =
            session.dataTaskPublisher(for: fetchTokenRequest)
                .tryMap { element -> Data in
                    guard let httpResponse = element.response as? HTTPURLResponse,
                          httpResponse.statusCode == 200 else {
                        throw URLError(.badServerResponse)
                    }
                    let json = try JSONSerialization.jsonObject(
                        with: element.data,
                        options: []
                    ) as? [String: Any]
                    if let assets = json?["data"] {
                        return try JSONSerialization.data(withJSONObject: assets, options: [])
                    }
                    return element.data
                }
                .decode(type: NFTScanCollectionDataModel.self, decoder: decoder)
                .map {
                    $0
                }
                .eraseToAnyPublisher()

        return tokenPublisher
    }

    private func resolveResponse(assets: [NFTScanAssetModel], network: BlockChainNetwork) {
        guard let accountAddress = maskUserDefaults.defaultAccountAddress else {
            return
        }

        // Only resolve ENS now.
        // Then save them into coredata.
        let tempContext = AppContext.shared.backgroundContext

        tempContext.performAndWait {
            var excluedIdentifiers: [String] = []
            assets.forEach { nft in
                let collectible = Collectible(nftScanModel: nft, network: network, context: tempContext)
                if let account = WalletCoreStorage.getAccount(address: accountAddress, context: tempContext) {
                    collectible?.account = account
                }

                if let identifier = collectible?.identifier {
                    excluedIdentifiers.append(identifier)
                }
            }

            // Delete all Collectibles that are not in assets
            cleanupCollectibles(address: accountAddress, exclued: excluedIdentifiers)

            try? tempContext.saveOrRollback()
        }
    }

    private func cleanupCollectibles(address: String, exclued identifiers: [String]) {
        let context = AppContext.shared.backgroundContext
        context.performAndWait {
            let toDeleteFetchRequest = Collectible.sortedFetchRequest
            toDeleteFetchRequest.predicate = Collectible.predicate(address: address, notInIdentifiers: identifiers)
            let toDeleteTokens = try? context.fetch(toDeleteFetchRequest)
            toDeleteTokens?.forEach {
                $0.enabled = false
            }
            try? context.saveOrRollback()
        }
    }

    func retrieveNFTAssets() -> AnyPublisher<[NFTScanAssetModel], Error> {
        cursor.value = ""
        return subject.eraseToAnyPublisher()
    }
}

extension NFTScanProvider: WalletAssetProvider {
    var type: WalletAssetProviderType {
        .nftscan
    }

    var isConnected: Bool {
        connecting
    }

    func connect() {
        connecting = true
        cancellable =
            timer.autoconnect().share().prepend([Date()])
                .setFailureType(to: Error.self)
                .flatMap { _ -> AnyPublisher<[NFTScanAssetModel], Error> in
                    self.retrieveNFTAssets().eraseToAnyPublisher()
                }
                .sink(receiveCompletion: { _ in
                }, receiveValue: { _ in
                })
    }

    func disconnect() {
        connecting = false
        cancellable?.cancel()
    }

    func refresh(_ completion: ((Error?) -> Void)?) {
        guard connecting else {
            completion?(nil)
            return
        }
        refreshCompletionBlock = completion
        disconnect()
        connect()
    }

    func createBalancePublisher(addresses _: [String]) -> AnyPublisher<(address: String, balance: NSDecimalNumber), Error>? {
        // Can't to retrieve portfolio with opensea api.
        nil
    }
}
