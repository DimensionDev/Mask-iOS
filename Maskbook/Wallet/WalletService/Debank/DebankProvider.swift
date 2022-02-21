//
//  DebankProvider.swift
//  Maskbook
//
//  Created by BradGao on 2021/6/28.
//  Copyright © 2021 dimension. All rights reserved.
//

import Alamofire
import Combine
import CoreData
import CoreDataStack

// swiftlint:disable file_length

public class DebankProvider: WalletAssetProvider {
    private lazy var timer = Timer.publish(every: 12, on: .main, in: .default)
        .autoconnect()
        .share()
        
    private var disposeBag = Set<AnyCancellable>()
    
    private var connecting = false
    
    public var refreshCompletionBlock: ((Error?) -> Void)?
    
    private let session: URLSession = {
        let session = URLSession(configuration: .default)
        return session
    }()
    
    public var type: WalletAssetProviderType {
        return .debank
    }
    
    public var isConnected: Bool {
        return connecting
    }
    
    public weak var delegate: WalletAssetProviderDelegate?
    
    public func connect() {
        guard maskUserDefaults.defaultAccountAddress != nil else {
            return
        }
        guard maskUserDefaults.network.debankName != nil else {
            return
        }
        connecting = true
        
        timer
            .prepend(Date())
            .flatMap { _ -> AnyPublisher<([DebankAPIModel.DebankToken], DebankAPIModel.Portfolio?), Never> in
                return self.createURLPublisher() ?? Just(([], nil)).eraseToAnyPublisher()
            }
            .sink(receiveCompletion: { error in
                switch error {
                case .failure(let error):
                    self.delegate?.didReceived(type: self.type, error: error)
                    
                case .finished:
                    break
                }
            }, receiveValue: { result in
                self.parseDebankResponse(tokens: result.0, portfolio: result.1)
            })
            .store(in: &disposeBag)
        
        DispatchQueue.main.asyncAfter(deadline: .now() + 0.1) {
            self.timer
                .prepend(Date())
                .flatMap { _ in
                    return self.createHistoryListURLPublisher() ?? Just(nil).eraseToAnyPublisher()
                }
                .sink(receiveCompletion: { error in
                    switch error {
                    case .failure(let error):
                        self.delegate?.didReceived(type: self.type, error: error)
                        
                    case .finished:
                        break
                    }
                }, receiveValue: { result in
                    self.parseDebankTransactionResponse(transactionResponse: result)
                })
                .store(in: &self.disposeBag)
        }
    }
    
    public func disconnect() {
        connecting = false
        disposeBag.removeAll()
        refreshCompletionBlock?(nil)
        refreshCompletionBlock = nil
    }
    
    public func refresh(_ completion: ((Error?) -> Void)?) {
        guard connecting else {
            completion?(nil)
            return
        }
        refreshCompletionBlock = completion
        
        createURLPublisher()?
            .sink(receiveCompletion: { error in
                switch error {
                case .failure(let error):
                    self.delegate?.didReceived(type: self.type, error: error)
                    
                case .finished:
                    break
                }
            }, receiveValue: { result in
                self.parseDebankResponse(tokens: result.0, portfolio: result.1)
            })
            .store(in: &disposeBag)
        
        createHistoryListURLPublisher()?
            .sink(receiveCompletion: { error in
                switch error {
                case .failure(let error):
                    self.delegate?.didReceived(type: self.type, error: error)
                    
                case .finished:
                    break
                }
            }, receiveValue: { result in
                self.parseDebankTransactionResponse(transactionResponse: result)
            })
            .store(in: &disposeBag)
    }
    
    public func createBalancePublisher(addresses: [String])
    -> AnyPublisher<(address: String, balance: NSDecimalNumber), Error>? {
        var publishers: [AnyPublisher<(address: String, balance: NSDecimalNumber), Error>] = []
        
        addresses.forEach { address in
            guard let debankUrl = URL(string: "https://openapi.debank.com/v1") else {
                return
            }
            guard let networkName = maskUserDefaults.network.debankName else { return }
            guard var fetchTokenUrlComponents = URLComponents(
                    url: debankUrl.appendingPathComponent("user/token_list"),
                    resolvingAgainstBaseURL: false) else {
                return
            }
            
            fetchTokenUrlComponents.queryItems = [
                URLQueryItem(name: "id", value: address),
                URLQueryItem(name: "chain_id", value: networkName),
                URLQueryItem(name: "is_all", value: "false")]
            guard let url = fetchTokenUrlComponents.url else {
                return
            }
            
            let decoder = JSONDecoder()
            let fetchTokenRequest = URLRequest(url: url)
            let tokenPublisher =
                session.dataTaskPublisher(for: fetchTokenRequest)
                .tryMap { element -> Data in
                    guard let httpResponse = element.response as? HTTPURLResponse,
                          httpResponse.statusCode == 200 else {
                        throw URLError(.badServerResponse)
                    }
                    return element.data
                }
                .decode(type: [DebankAPIModel.DebankToken]?.self, decoder: decoder)
                .map { [weak self] tokens -> (address: String, balance: NSDecimalNumber) in
                    guard let self = self else { return (address: address, balance: .zero) }
                    guard let tokens = tokens else { return (address: address, balance: .zero) }
                    return self.saveTokensForGettingBalance(address: address, tokens: tokens)
                }
                .eraseToAnyPublisher()
            publishers.append(tokenPublisher)
        }
        
        return Publishers.MergeMany(publishers).eraseToAnyPublisher()
    }
}

extension DebankProvider {
    private func createURLPublisher() -> AnyPublisher<([DebankAPIModel.DebankToken], DebankAPIModel.Portfolio?), Never>? {
        guard let address = maskUserDefaults.defaultAccountAddress else {
            return nil
        }
        guard let debankUrl = URL(string: "https://openapi.debank.com/v1") else {
            return nil
        }
        
        let decoder = JSONDecoder()
        
        guard var fetchTokenUrlComponents = URLComponents(
            url: debankUrl.appendingPathComponent("user/token_list"),
            resolvingAgainstBaseURL: false) else {
            return nil
        }
        
        fetchTokenUrlComponents.queryItems = [URLQueryItem(name: "id", value: address),
                                              URLQueryItem(name: "is_all", value: "true"),
                                              URLQueryItem(name: "has_balance", value: "true")]
        guard let url = fetchTokenUrlComponents.url else {
            return nil
        }
        let fetchTokenRequest = URLRequest(url: url)
        let tokenPublisher =
            session.dataTaskPublisher(for: fetchTokenRequest)
            .tryMap { element -> Data in
                guard let httpResponse = element.response as? HTTPURLResponse,
                      httpResponse.statusCode == 200 else {
                    throw URLError(.badServerResponse)
                }
                return element.data
            }
            .decode(type: [DebankAPIModel.DebankToken].self, decoder: decoder)
        
        guard var fetchPortfolioUrlComponents = URLComponents(
            url: debankUrl.appendingPathComponent("user/total_balance"),
            resolvingAgainstBaseURL: false) else {
            return nil
        }
        fetchPortfolioUrlComponents.queryItems = [URLQueryItem(name: "id", value: address)]
        guard let portfolioURL = fetchPortfolioUrlComponents.url else { return nil }
        let fetchPortfolioRequest = URLRequest(url: portfolioURL)
        let portfolioPublisher =
            session.dataTaskPublisher(for: fetchPortfolioRequest)
            .tryMap { element -> Data in
                guard let httpResponse = element.response as? HTTPURLResponse,
                      httpResponse.statusCode == 200 else {
                    throw URLError(.badServerResponse)
                }
                return element.data
            }
            .decode(type: Optional<DebankAPIModel.Portfolio>.self, decoder: decoder)
        
        return Publishers
            .Zip(tokenPublisher, portfolioPublisher)
            .catch { [weak self] error -> Just<([DebankAPIModel.DebankToken], DebankAPIModel.Portfolio?)> in
                self?.delegate?.didReceived(type: .debank, error: error)
                return Just(([], nil))
            }
            .eraseToAnyPublisher()
    }
    
    private func createHistoryListURLPublisher() -> AnyPublisher<DebankAPIModel.TransactionResponse?, Never>? {
        guard let address = maskUserDefaults.defaultAccountAddress else {
            return nil
        }
        guard let networkName = maskUserDefaults.network.debankName else {
            return nil
        }
        let debankUrl = URL(string: "https://api.debank.com")!
        
        let decoder = JSONDecoder()
        var fetchHistoryUrlComponents = URLComponents(url: debankUrl.appendingPathComponent("history/list"), resolvingAgainstBaseURL: false)!
        
        fetchHistoryUrlComponents.queryItems = [URLQueryItem(name: "chain", value: networkName),
                                                URLQueryItem(name: "user_addr", value: address.lowercased())]
        
        let fetchTokenRequest = URLRequest(url: fetchHistoryUrlComponents.url!)
        return session.dataTaskPublisher(for: fetchTokenRequest)
            .tryMap { element -> Data in
                guard let httpResponse = element.response as? HTTPURLResponse,
                      httpResponse.statusCode == 200 else {
                    throw URLError(.badServerResponse)
                }
                return element.data
            }
            .decode(type: Optional<DebankAPIModel.TransactionResponse>.self, decoder: decoder)
            .catch { _ in
                return Just(nil)
            }
            .eraseToAnyPublisher()
    }
    
    private func parseDebankResponse(tokens: [DebankAPIModel.DebankToken], portfolio: DebankAPIModel.Portfolio?) {
        guard let portfolio = portfolio else { return }
        DispatchQueue.global().async {
            let tempContext = NSManagedObjectContext(concurrencyType: .privateQueueConcurrencyType)
            tempContext.parent = AppContext.shared.backgroundContext
            tempContext.mergePolicy = NSMergePolicy.mergeByPropertyObjectTrump
            var tokenIDs = [String]()
            tempContext.performAndWait {
                tokens.forEach { debankToken in
                    guard let accountAddress = maskUserDefaults.defaultAccountAddress else { return }
                    guard debankToken.isVerified ?? false else { return }
                    if let token = Token(debankToken: debankToken,
                                         account: accountAddress,
                                         source: self.type,
                                         context: tempContext) {
                        if let account = WalletCoreStorage.getAccount(address: accountAddress, context: tempContext) {
                            token.account = account
                        }
                        if let tokenIdentifier = token.identifier {
                            tokenIDs.append(tokenIdentifier)
                        }
                    }
                }
                do {
                    try tempContext.saveOrRollback()
                } catch {}
            }
            
            self.delegate?.didReceived(type: self.type,
                                       tokenIDs: tokenIDs,
                                       action: AssetActionType.received,
                                       newObjectContext: tempContext)
            
            AppContext.shared.coreDataStack.persistentContainer.viewContext.perform {
                guard let accountAddress = maskUserDefaults.defaultAccountAddress,
                        let account = WalletCoreStorage.getAccount(address: accountAddress)
                else { return }
                account.addOrUpdatePortfolio(with: portfolio)
                try? AppContext.shared.coreDataStack.persistentContainer.viewContext.saveOrRollback()
            }
        }
    }
    
    private func parseDebankTransactionResponse(transactionResponse: DebankAPIModel.TransactionResponse?) {
        guard let transactionResponse = transactionResponse else { return }
        DispatchQueue.global().async {
            var transactionHistoryList = [TransactionHistory]()
            for transaction in transactionResponse.data.history_list {
                var asset: DebankAPIModel.TransactionResponse.TransactionAsset?
                if let tokenId = transaction.tokenId {
                    asset = transactionResponse.data.token_dict[tokenId]
                }
                let transaction = TransactionHistory(transaction: transaction, asset: asset)
                transactionHistoryList.append(transaction)
            }
            self.delegate?.didReceived(type: self.type, transactions: transactionHistoryList, action: .received)
        }
    }
    
    private func saveTokensForGettingBalance(address: String, tokens: [DebankAPIModel.DebankToken])
        -> (address: String, balance: NSDecimalNumber) {
        let tempContext = NSManagedObjectContext(concurrencyType: .privateQueueConcurrencyType)
        tempContext.parent = AppContext.shared.coreDataStack.persistentContainer.viewContext
        var displayQuantity: NSDecimalNumber = .zero
        let account = WalletCoreStorage.getAccount(address: address, context: tempContext)
        tempContext.performAndWait { [weak self] in
            tokens.forEach { [weak self] debankToken in
                guard let self = self else { return }
                guard debankToken.isVerified ?? false else { return }
                guard let token = Token(
                    debankToken: debankToken,
                    account: address,
                    source: self.type,
                    context: tempContext) else {
                    return
                }
                if token.isMainToken {
                    displayQuantity = token.displayQuantity
                }
                if let account = account {
                    token.account = account
                }
            }
            
            if account != nil {
                try? tempContext.saveOrRollback()
            }
        }
        try? WalletCoreStorage.saveChanges()
        return (address: address, balance: displayQuantity)
    }
    
    private func parseTokensForGettingBalance(address: String, tokens: [DebankAPIModel.DebankToken])
        -> (address: String, balance: NSDecimalNumber) {
        let tempContext = NSManagedObjectContext(concurrencyType: .privateQueueConcurrencyType)
        var displayQuantity: NSDecimalNumber = .zero
        tempContext.performAndWait { [weak self] in
            tokens.forEach { [weak self] debankToken in
                guard let self = self else { return }
                guard debankToken.isVerified ?? false else { return }
                guard let token = Token(
                    debankToken: debankToken,
                    account: address,
                    source: self.type,
                    context: tempContext) else {
                        return
                }
                if token.isMainToken {
                    displayQuantity = token.displayQuantity
                    return
                }
            }
        }
        return (address: address, balance: displayQuantity)
    }
}

extension Token {
    convenience init?(debankToken: DebankAPIModel.DebankToken,
                      account: String?,
                      source: WalletAssetProviderType,
                      context: NSManagedObjectContext) {
        guard let blockchain = BlockChainNetwork(fromDebankChainName: debankToken.chain) else {
            return nil
        }
        self.init(context: context)
        self.contractAddress = debankToken.id
        self.price = NSDecimalNumber(decimal: debankToken.price ?? Decimal.zero)
        self.decimal = Int16(debankToken.decimals)
        self.chainId = Int64(blockchain.chain.rawValue)
        self.logoUrl = debankToken.logoUrl?.absoluteString
        self.name = debankToken.name
        self.symbol = debankToken.symbol
        self.networkId = Int64(blockchain.networkId)
        let decimalNumber = NSDecimalNumber(mantissa: 1, exponent: Int16(debankToken.decimals), isNegative: false)
        let amountNumber = NSDecimalNumber(decimal: debankToken.amount ?? .zero)
        let amountWithDecimal = amountNumber.multiplying(by: decimalNumber)
        self.quantity = amountWithDecimal
        self.identifier = Token.createIdentifier(
            chainId: Int64(blockchain.chain.rawValue),
            networkId: Int64(blockchain.networkId),
            symbol: debankToken.symbol,
            account: account)
        self.tokenType = .erc20
    }
    
    // Init for a mainToken. This method is used when no token info fetched from api providers,
    // we create a main token object with amount set to 0 for UI presentation
    convenience init?(network: BlockChainNetwork,
                      account: String?,
                      source: WalletAssetProviderType,
                      context: NSManagedObjectContext) {
        guard let mainToken = network.mainToken else { return nil }
        self.init(context: context)
        self.price = NSDecimalNumber(decimal: .zero)
        self.decimal = Int16(mainToken.decimals)
        self.chainId = Int64(network.chain.rawValue)
        self.logoUrl = mainToken.logoURI?.absoluteString
        self.name = mainToken.name
        self.symbol = mainToken.symbol
        self.networkId = Int64(network.networkId)
        self.quantity = NSDecimalNumber(decimal: .zero)
        self.identifier = Token.createIdentifier(
            chainId: Int64(network.chain.rawValue),
            networkId: Int64(network.networkId),
            symbol: mainToken.symbol,
            account: account)
        self.tokenType = .native
    }
}

// swiftlint:disable force_cast
extension Account {
    func addOrUpdatePortfolio(with debankPortfolio: DebankAPIModel.Portfolio) {
        let portfoliosOfSupportedChains = debankPortfolio.chainList.filter {
            BlockChainNetwork(fromDebankChainName: $0.id) != nil
        }
        for updatePortfolio in portfoliosOfSupportedChains {
            if let portfolio = self.portfolios?.first(where: { portfolio in
                if let chainOfNewPortfolio = BlockChainNetwork(fromDebankChainName: updatePortfolio.id) {
                    return (portfolio as! Portfolio).networkId == chainOfNewPortfolio.networkId
                }
                return false
            }) as? Portfolio {
                portfolio.update(with: updatePortfolio)
            } else {
                let newPortfolio = Portfolio(context: AppContext.shared.coreDataStack.persistentContainer.viewContext)
                newPortfolio.update(with: updatePortfolio)
                self.addToPortfolios(newPortfolio)
            }
        }
    }
}
// swiftlint:enable force_cast

extension Portfolio {
    func update(with debankChainPortfolio: DebankAPIModel.Portfolio.ChainPortfolio) {
        guard let blockchain = BlockChainNetwork(fromDebankChainName: debankChainPortfolio.id) else {
            return
        }
        self.currency = Currency.usd.rawValue
        self.chainId = Int64(blockchain.chain.rawValue)
        self.networkId = Int64(blockchain.networkId)
        self.assetsValue = NSDecimalNumber(decimal: debankChainPortfolio.usdValue).floatValue
    }
}

// swiftlint:disable line_length
extension TransactionHistory {
    init(transaction: DebankAPIModel.TransactionResponse.History,
         asset: DebankAPIModel.TransactionResponse.TransactionAsset?) {
        self.id = transaction.id
        if let cateString = transaction.cate_id {
            let cateType = DebankAPIModel.TransactionResponse.History.Cate(rawValue: cateString)
            switch cateType {
            case .send:
                self.type = .send
                
            case .receive:
                self.type = .receive
                
            case .approve:
                self.type = .approve
            
            case .cancel:
                self.type = .cancel
                
            case .none:
                if transaction.project_id != nil {
                    self.type = .contractInteraction
                } else {
                    self.type = .send
                }
            }
        } else {
            self.type = .unknown
        }
        
        switch transaction.tx?.status {
        case 1:
            self.status = .confirmed
            
        case 0:
            self.status = .failed
            
        default:
            self.status = .confirmed
        }
        
        self.name = transaction.tx?.name
        if let txType = TransactionType(rawValue: transaction.tx?.name ?? "") {
            self.type = txType
        }
        
        self.gasFee = NSDecimalNumber(decimal: transaction.tx?.eth_gas_fee ?? 0).multiplying(by: NSDecimalNumber(mantissa: 1, exponent: Int16(18), isNegative: false)).decimalValue
        
        let price: NSDecimalNumber = {
            if transaction.tx?.eth_gas_fee == .zero {
                return .zero
            }
            return NSDecimalNumber(decimal: transaction.tx?
                                            .usd_gas_fee ?? 0).dividing(by: NSDecimalNumber(decimal: transaction.tx?.eth_gas_fee ?? 1))
        }()
        self.gasPrice = price.decimalValue
        self.timeAt = TimeInterval(transaction.time_at ?? 0)
        let decimals = asset?.decimals ?? 1
        if let asset = asset {
            let historyAsset = TransactionHistory.Asset(assetCode: asset.id,
                                                        decimals: decimals,
                                                        iconUrl: asset.logoUrl,
                                                        price: asset.price ?? Decimal.zero,
                                                        isDisplayable: asset.isVerified ?? false,
                                                        isVerified: asset.isVerified ?? false,
                                                        name: asset.name,
                                                        symbol: asset.symbol,
                                                        type: nil)
            if let send = transaction.sends?.first {
                let sendAmount = NSDecimalNumber(decimal: send.amount).multiplying(by: NSDecimalNumber(mantissa: 1, exponent: Int16(asset.decimals ?? 1), isNegative: false)).decimalValue
                let change = TransactionHistory.TransactionChange(asset: historyAsset, value: sendAmount, address_from: transaction.tx?.from_addr ?? "", address_to: send.to_addr, price: historyAsset.price)
                self.change = change
            } else if let receive = transaction.receives?.first {
                let receiveAmount = NSDecimalNumber(decimal: receive.amount).multiplying(by: NSDecimalNumber(mantissa: 1, exponent: Int16(decimals), isNegative: false)).decimalValue
                let change = TransactionHistory.TransactionChange(asset: historyAsset, value: receiveAmount, address_from: receive.from_addr, address_to: transaction.tx?.from_addr ?? "", price: historyAsset.price)
                self.change = change
            } else if let approve = transaction.token_approve {
                let approveAmount = NSDecimalNumber(decimal: approve.value).multiplying(by: NSDecimalNumber(mantissa: 1, exponent: Int16(decimals), isNegative: false)).decimalValue
                let change = TransactionHistory.TransactionChange(asset: historyAsset, value: approveAmount, address_from: transaction.tx?.from_addr ?? "", address_to: approve.spender, price: historyAsset.price)
                self.change = change
            } else {
                self.change = nil
            }
        } else {
            self.change = nil
        }
    }
}
// swiftlint:enable line_length file_length
