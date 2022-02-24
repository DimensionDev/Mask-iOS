//
//  OpenSeaProvider.swift
//  Maskbook
//
//  Created by Hugo L on 2021/7/14.
//  Copyright © 2021 dimension. All rights reserved.
//

import Combine
import CoreData
import CoreDataStack
import Foundation
import OSLog

class OpenSeaProvider {
    @InjectedProvider(\.userDefaultSettings)
    private var userSettings
    
    var refreshCompletionBlock: ((Error?) -> Void)?
    
    private let callbackProcessQueue = DispatchQueue(label: "io.mask.opensea")
    private let baseURL: URL = URL(string: "https://api.opensea.io/api/v1/")!
    private var disposeBag = Set<AnyCancellable>()
    private var connecting = false
    private var timer = Timer.publish(every: 60, on: .main, in: .default)
    private var cancellable: AnyCancellable?
    
    private let session: URLSession = {
        let session = URLSession(configuration: .default)
        return session
    }()
    
    // get all assets with pagenation API
    let subject = CurrentValueSubject<[NFTAssetsModel], Error>([])
    private var offset = CurrentValueSubject<Int?, Never>(nil)
    private var assets = [NFTAssetsModel]()
    private var assetsCancellable: AnyCancellable?
    var supportNetworkIds: [BlockChainNetwork] {
        [.eth]
    }
    
    weak var delegate: WalletAssetProviderDelegate?
    
    init() {
        subscribeOffset()
        subscribeNetwork()
    }
    
    private func isSupported(network: BlockChainNetwork) -> Bool {
        supportNetworkIds.contains(network)
    }
    
    private func subscribeOffset() {
        let network = UserDefaultSettings.shared
            .networkPubisher
            .removeDuplicates()
            .filter(isSupported)
            .eraseToAnyPublisher()
        let offset = self.offset.filter({ $0 != nil })
        Publishers.CombineLatest(offset, network)
            .filter({ [weak self] _, network in
                self?.isSupported(network: network) == true
            })
            .receive(on: callbackProcessQueue)
            .sink { [weak self] offset, network in
                guard let self = self else { return }
                guard let offset = offset else { return }
                if offset == 0 {
                    self.assets.removeAll()
                }
                
                os_log(
                    "%{public}s[%{public}ld], %{public}s [opensea] start request offset %d network: %d",
                    ((#file as NSString).lastPathComponent),
                    #line,
                    #function,
                    offset,
                    network.networkId
                )
                self.assetsCancellable = self.retrieveAssetsPagenation(offset: offset, limit: 50)?
                    .receive(on: self.callbackProcessQueue).sink(receiveCompletion: { completion in
                        switch completion {
                        case .failure(let error):
                            self.subject.send(completion: .failure(error))
                            
                        default:
                            break
                        }
                    }) { assets, hasMore in
                        self.assets.append(contentsOf: assets)
                        os_log(
                            "%{public}s[%{public}ld], %{public}s: [opensea] receive %d items, %d all items",
                            ((#file as NSString).lastPathComponent),
                            #line,
                            #function,
                            assets.count,
                            self.assets.count
                        )
                        
                        if !hasMore {
                            let allNFTAssets = self.assets
                            self.resolveResponse(assets: allNFTAssets, network: network)
                            self.subject.send(allNFTAssets)
                        } else {
                                // Avoiding to request fail, it sends a request slowly.
                            self.callbackProcessQueue.asyncAfter(deadline: .now() + 0.1) {
                                self.offset.value = self.assets.count
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
                self?.offset.accept(0)
                print("[opensea] network updated: \(network.networkId)")
            }
            .store(in: &disposeBag)
    }
    
    private func retrieveAssetsPagenation(
        offset: Int,
        limit: Int
    ) -> AnyPublisher<([NFTAssetsModel], Bool), Error>? {
        guard let address = maskUserDefaults.defaultAccountAddress else {
            return nil
        }
        
        let decoder = JSONDecoder()
        var fetchTokenUrlComponents = URLComponents(
            url: baseURL.appendingPathComponent("assets"),
            resolvingAgainstBaseURL: false)
        
        fetchTokenUrlComponents?.queryItems = [
            URLQueryItem(name: "owner", value: address),
            URLQueryItem(name: "order_direction", value: "desc"),
            URLQueryItem(name: "offset", value: "\(offset)"),
            URLQueryItem(name: "limit", value: "\(limit)")]
        
        guard let requestUrl = fetchTokenUrlComponents?.url else {
            return nil
        }
        
        var fetchTokenRequest = URLRequest(url: requestUrl)
        fetchTokenRequest.setValue(APIKey.OPENSEA, forHTTPHeaderField: "x-api-key")
        let tokenPublisher =
            session.dataTaskPublisher(for: fetchTokenRequest)
            .tryMap { element -> Data in
                guard let httpResponse = element.response as? HTTPURLResponse,
                      httpResponse.statusCode == 200 else {
                    throw URLError(.badServerResponse)
                }
                let json = try JSONSerialization.jsonObject(with: element.data,
                                                            options: []) as? [String: Any]
                if let assets = json?["assets"] {
                    return try JSONSerialization.data(withJSONObject: assets, options: [])
                }
                return element.data
            }
            .decode(type: [NFTAssetsModel].self, decoder: decoder)
            .map({ assets in
                return (assets, assets.count >= limit)
            })
            .eraseToAnyPublisher()
        
        return tokenPublisher
    }
        
    private func resolveResponse(assets: [NFTAssetsModel], network: BlockChainNetwork) {
        guard let accountAddress = maskUserDefaults.defaultAccountAddress else { return }
        
        // Only resolve ENS now.
        // Then save them into coredata.
        let tempContext = AppContext.shared.backgroundContext
        
        tempContext.performAndWait {
            var excluedIdentifiers: [String] = []
            assets.forEach { nft in
                let collectible = Collectible(nftModel: nft, network: network, context: tempContext)
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
        
        os_log(
            "%{public}s[%{public}ld], %{public}s: [nft] store finished, networkId: %ld}",
            ((#file as NSString).lastPathComponent),
            #line,
            #function,
            network.networkId
        )
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
    
    func retrieveNFTAssets() -> AnyPublisher<[NFTAssetsModel], Error> {
        offset.value = 0
        return subject.eraseToAnyPublisher()
    }
    
    func retrieveAssetsEvents(
        assetModel: Collectible
    ) -> AnyPublisher<[NFTAssetEventsModel], Error> {
        let decoder = JSONDecoder()
        var fetchTokenUrlComponents = URLComponents(url: URL(string: "https://api.etherscan.io/api?")!,
                                                    resolvingAgainstBaseURL: false)!
        
        fetchTokenUrlComponents.queryItems = [URLQueryItem(name: "contractaddress", value: assetModel.address),
                                              URLQueryItem(name: "address", value: maskUserDefaults.defaultAccountAddress),
                                              URLQueryItem(name: "module", value: "account"),
                                              URLQueryItem(name: "action", value: "tokennfttx"),
                                              URLQueryItem(name: "apikey", value: APIKey.ETHERSCAN) ]
    
        let fetchTokenRequest = URLRequest(url: fetchTokenUrlComponents.url!)
        let tokenPublisher =
            session.dataTaskPublisher(for: fetchTokenRequest)
            .tryMap { element -> Data in
                guard let httpResponse = element.response as? HTTPURLResponse,
                      httpResponse.statusCode == 200 else {
                    throw URLError(.badServerResponse)
                }
                let json = try JSONSerialization.jsonObject(with: element.data,
                                                            options: []) as? [String: Any]
                if let assets = json?["result"] {
                    return try JSONSerialization.data(withJSONObject: assets, options: [])
                }
                return element.data
            }
            .decode(type: [NFTAssetEventsModel].self, decoder: decoder)
            .map({
                return $0
            })
            .eraseToAnyPublisher()
        
        return tokenPublisher
    }
    
    func retrieveAssetsPrice(
        assetModel: Collectible
    ) -> AnyPublisher<NFTAssetPriceModel, Error> {
        let decoder = JSONDecoder()
        let fetchTokenUrlComponents = URLComponents(url: baseURL.appendingPathComponent("asset/\(assetModel.address ?? "")/\(assetModel.tokenId ?? "")"),
                                                    resolvingAgainstBaseURL: false)!
        
        var fetchTokenRequest = URLRequest(url: fetchTokenUrlComponents.url!)
        fetchTokenRequest.setValue(APIKey.OPENSEA, forHTTPHeaderField: "x-api-key")
        let tokenPublisher =
            session.dataTaskPublisher(for: fetchTokenRequest)
            .tryMap { element -> Data in
                guard let httpResponse = element.response as? HTTPURLResponse,
                      httpResponse.statusCode == 200 else {
                    throw URLError(.badServerResponse)
                }
                return element.data
            }
            .decode(type: NFTAssetPriceModel.self, decoder: decoder)
            .map({
                return $0
            })
            .eraseToAnyPublisher()
        
        return tokenPublisher
    }
    
    func retrieveCollectionStatus(
        assetModel: Collectible
    ) -> AnyPublisher<NFTCollectionStatusModel, Error> {
        let decoder = JSONDecoder()
            
        let fetchTokenUrlComponents = URLComponents(url: baseURL.appendingPathComponent("collection/\(assetModel.collectionSlug ?? "")/stats"),
                                                    resolvingAgainstBaseURL: false)!
        
        var fetchTokenRequest = URLRequest(url: fetchTokenUrlComponents.url!)
        fetchTokenRequest.setValue(APIKey.OPENSEA, forHTTPHeaderField: "x-api-key")
        let tokenPublisher =
            session.dataTaskPublisher(for: fetchTokenRequest)
            .tryMap { element -> Data in
                guard let httpResponse = element.response as? HTTPURLResponse,
                      httpResponse.statusCode == 200 else {
                    throw URLError(.badServerResponse)
                }
                return element.data
            }
            .decode(type: NFTCollectionStatusModel.self, decoder: decoder)
            .map({
                return $0
            })
            .eraseToAnyPublisher()
        
        return tokenPublisher
    }
}

extension OpenSeaProvider: WalletAssetProvider {
    var type: WalletAssetProviderType {
        return .opensea
    }
    
    var isConnected: Bool {
        return connecting
    }
    
    func connect() {
        connecting = true
        cancellable =
            timer.autoconnect().share().prepend([Date()])
            .setFailureType(to: Error.self)
            .flatMap { _ -> AnyPublisher<[NFTAssetsModel], Error> in
                return self.retrieveNFTAssets().eraseToAnyPublisher()
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
    
    func createBalancePublisher(addresses: [String]) -> AnyPublisher<(address: String, balance: NSDecimalNumber), Error>? {
        // Can't to retrieve portfolio with opensea api.
        return nil
    }
}

extension NFTTransactionHistory {
    init(_ nftAssetEventsModel: NFTAssetEventsModel) {
        self.minedDate = Date(timeIntervalSince1970: TimeInterval(nftAssetEventsModel.timeStamp) ?? Date().timeIntervalSince1970)
        if nftAssetEventsModel.from.lowercased() == "0x0000000000000000000000000000000000000000" {
            self.type = .mint
        } else if nftAssetEventsModel.from.lowercased() == maskUserDefaults.defaultAccountAddress?.lowercased() {
            self.type = .send
        } else if nftAssetEventsModel.to.lowercased() == maskUserDefaults.defaultAccountAddress?.lowercased() {
            self.type = .receive
        } else {
            self.type = .approve
        }
        self.txHash = nftAssetEventsModel.hash
    }
}
