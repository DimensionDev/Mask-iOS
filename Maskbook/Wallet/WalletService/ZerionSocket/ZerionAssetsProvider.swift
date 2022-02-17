//
//  ZerionAssetsProvider.swift
//  Maskbook
//
//  Created by BradGao on 2021/3/24.
//  Copyright © 2021 dimension. All rights reserved.
//

import Combine
import CoreData
import CoreDataStack
import SocketIO

public class ZerionAssetsProvider: WalletAssetProvider {
    public var refreshCompletionBlock: ((Error?) -> Void)?
    
    private let url: URL
    private let addressSocket: SocketIOClient
    private let assetsSocket: SocketIOClient
    private let manager: SocketManager
    
    private let apiKey = "Mask.yEUEfDnoxgLBwNEcYPVussxxjdrGwapj"
    private let origin = "http://localhost:3000"
    private let zerionUrl = "wss://api-v4.zerion.io"
    private let agentZerionUrl = "https://zerion-api-v4-agent.r2d2.to/socket.io/"
    
    private let callbackProcessQueue = DispatchQueue(label: "io.mask.zerioSocket")
    
    /// It's a helper only be used for retrieving portfolio with specified addresses.
    private let balanceSubject = PassthroughSubject<(address: String, balance: NSDecimalNumber), Error>()
    /// To store the address used to retrieve the portfolio temporally. Remove this address after getting a response.
    /// - SeeAlso:
    /// `func createPortfolioPublisher(addresses: [GetBalanceRecord])`
    private var getBalanceRecord: [String] = []
    
    public var isConnected: Bool {
        return manager.status == .connected
    }
    
    public var type: WalletAssetProviderType {
        return .zerion
    }
    
    public weak var delegate: WalletAssetProviderDelegate?
    
    public init() {
        self.url = URL(string: zerionUrl)!
        var configs: SocketIOClientConfiguration = [
            .connectParams(["api_token": apiKey, "EIO": "3"]),
            .compress,
            .extraHeaders(["Origin": origin]),
            .secure(true),
            .forceWebsockets(true),
            .handleQueue(callbackProcessQueue)
        ]
        #if DEBUG
        configs.insert(.log(true))
        #endif
        self.manager = SocketManager(socketURL: self.url, config: configs)
        self.addressSocket = self.manager.socket(forNamespace: "/address")
        self.assetsSocket = self.manager.socket(forNamespace: "/assets")
    }
    
    public func connect() {
        connectAddressSocket(socket: self.addressSocket)
        connectAssetsSocket(socket: self.assetsSocket)
    }
    
    private func connectAddressSocket(socket: SocketIOClient) {
        /* Begin of Socket.io built-in events hanlding **/
        socket.on(clientEvent: .connect, callback: { _, _ in
            self.delegate?.didConnected(type: self.type)
            self.sendAddressMessage(action: .subscribe)
        })
        socket.on(clientEvent: .error) { data, _ in
            self.delegate?.didReceived(type: self.type, error: data[0] as? Error)
        }
        socket.on(clientEvent: .disconnect) { _, _ in
            self.delegate?.didDisconnected(type: self.type)
        }
        socket.on(clientEvent: .statusChange) { _, _ in
            // If we need to observe `connecting` event we should add it here
        }
        /* End of Socket.io built-in events hanlding **/
        
        /* Begin of Zerion response message handlers **/
        // Portfolio
        socket.on(ZerionAPIModel.ResponseType.Address.Portfolio.received.rawValue) { data, _ in
            self.parsePortfolioResponse(data: data, action: .received)
        }
        // Transactions
        socket.on(ZerionAPIModel.ResponseType.Address.Transactions.received.rawValue) { data, _ in
            self.parseTransactionResponse(data: data, action: .received)
        }
        socket.on(ZerionAPIModel.ResponseType.Address.Transactions.appended.rawValue) { _, _ in
            print("")
        }
        socket.on(ZerionAPIModel.ResponseType.Address.Transactions.changed.rawValue) { _, _ in
            print("")
        }
        socket.on(ZerionAPIModel.ResponseType.Address.Transactions.removed.rawValue) { _, _ in
            print("")
        }
        
        // Assets
        socket.on(ZerionAPIModel.ResponseType.Address.Assets.received.rawValue) { data, _ in
            self.parseAddressAssetsResponse(data: data, action: .received)
        }
        socket.on(ZerionAPIModel.ResponseType.Address.Assets.appended.rawValue) { data, _ in
            self.parseAddressAssetsResponse(data: data, action: .appended)
        }
        socket.on(ZerionAPIModel.ResponseType.Address.Assets.changed.rawValue) { data, _ in
            self.parseAddressAssetsResponse(data: data, action: .changed)
        }
        socket.on(ZerionAPIModel.ResponseType.Address.Assets.removed.rawValue) { data, _ in
            self.parseAddressAssetsResponse(data: data, action: .removed)
        }
        
        /* End of Zerion response message handlers **/
        
        socket.connect()
    }
    
    private func connectAssetsSocket(socket: SocketIOClient) {
        /* Begin of Socket.io built-in events hanlding **/
        socket.on(clientEvent: .connect, callback: { _, _ in
            self.delegate?.didConnected(type: self.type)
            self.sendAssetsRequests(action: .subscribe)
        })
        socket.on(clientEvent: .error) { data, _ in
            self.delegate?.didReceived(type: self.type, error: data[0] as? Error)
        }
        socket.on(clientEvent: .disconnect) { _, _ in
            self.delegate?.didDisconnected(type: self.type)
        }
        socket.on(clientEvent: .statusChange) { _, _ in
            // If we need to observe `connecting` event we should add it here
        }
        /* End of Socket.io built-in events hanlding **/
        
        // Assets
        socket.on(ZerionAPIModel.ResponseType.Assets.Info.received.rawValue) { data, _ in
            self.parseAddressAssetsResponse(data: data, action: .received)
        }
        socket.on(ZerionAPIModel.ResponseType.Assets.received.rawValue) { data, _ in
            self.parseAddressAssetsResponse(data: data, action: .appended)
        }
        socket.on(ZerionAPIModel.ResponseType.Assets.changed.rawValue) { data, _ in
            self.parseAddressAssetsResponse(data: data, action: .changed)
        }
    }
    
    public func disconnect() {
        self.sendAddressMessage(action: .unsubscribe)
        self.sendAssetsRequests(action: .unsubscribe)
        manager.disconnect()
    }
    
    public func refresh(_ completion: ((Error?) -> Void)?) {
        guard isConnected else {
            completion?(nil)
            return
        }
        refreshCompletionBlock = completion
        disconnect()
        connect()
    }
    
    public func createBalancePublisher(addresses: [String])
        -> AnyPublisher<(address: String, balance: NSDecimalNumber), Error>? {
        let addresses = addresses.filter { !getBalanceRecord.contains($0.uppercased()) }
        guard !addresses.isEmpty else { return Empty().eraseToAnyPublisher() }
        let offset = getBalanceRecord.count
        getBalanceRecord.append(contentsOf: addresses.map({ $0.uppercased() }))
        addresses.enumerated().forEach { index, address in
            // only can get one response, if emit all actions at same time.
            DispatchQueue.main.asyncAfter(deadline: .now() + Double(index + offset) * 5) {
                let (action, data) = ZerionMessageFactory.generateAddressRequest(
                    action: .get,
                    network: maskUserDefaults.network,
                    payload: ZerionAPIModel.SubscribeAddressPayload(address: address, currency: maskUserDefaults.currency)
                )
                self.addressSocket.emit(action.rawValue, data)
            }
        }
        
        return balanceSubject.eraseToAnyPublisher()
    }
}

// MARK: - Message Send Methods
extension ZerionAssetsProvider {
    private func sendAddressMessage(action: ZerionAPIModel.Action) {
        // TODO: Use real address & currency
        guard let address = maskUserDefaults.defaultAccountAddress else {
            return
        }
        let (action, data) = ZerionMessageFactory.generateAddressRequest(
            action: action,
            network: maskUserDefaults.network,
            payload: ZerionAPIModel.SubscribeAddressPayload(address: address, currency: maskUserDefaults.currency)
        )
        self.addressSocket.emit(action.rawValue, data)
        
        let (portfolioAction, portfolioData) = ZerionMessageFactory.generatePortfolioRequest(
            action: .subscribe,
            payload: ZerionAPIModel.SubscribePortfolioPayload(address: address, currency: maskUserDefaults.currency)
        )
        self.addressSocket.emit(portfolioAction.rawValue, portfolioData)
    }
    
    private func sendAssetsRequests(action: ZerionAPIModel.Action) {
        let (action, data) = ZerionMessageFactory.generateAssetsRequest(action: action, payload: ZerionAPIModel.SubscribeAssetsPayload(asset_codes: [""], currency: maskUserDefaults.currency))
        self.addressSocket.emit(action.rawValue, data)
        
        let (action2, data2) = ZerionMessageFactory.generateAssetsRequest(action: .subscribe, payload: ZerionAPIModel.SubscribeAssetsPayload(asset_codes: ["eth"], currency: .usd))
        self.addressSocket.emit(action2.rawValue, data2)
    }
}

// MARK: - Response Parser Methods
extension ZerionAssetsProvider {
    private func checkMeta<P: ZerionResponsePayload>(_ meta: ZerionAPIModel.Response<P>.Meta) -> Bool {
        guard meta.status == ZerionAPIModel.Response<P>.Meta.Status.ok.rawValue else { return false }
        guard let currentAddress = maskUserDefaults.defaultAccountAddress else { return false }
        guard meta.address.caseInsensitiveCompare(currentAddress) == .orderedSame,
              meta.currency.caseInsensitiveCompare(maskUserDefaults.currency.rawValue) == .orderedSame
        else { return false }
        return true
    }
    
    /// Only check if request balance temporarily
    private func checkIfGetBalance<P: ZerionResponsePayload>(_ meta: ZerionAPIModel.Response<P>.Meta) -> Bool {
        guard meta.status == ZerionAPIModel.Response<P>.Meta.Status.ok.rawValue else { return false }
        let currentAddress = meta.address.uppercased()
        guard getBalanceRecord.contains(currentAddress),
              meta.currency.order(match: maskUserDefaults.currency.rawValue)
        else { return false }
        return true
    }
    
    private func saveTokensForGettingBalance(_ response: ZerionAPIModel.Response<ZerionAPIModel.AddressAssetsPayload>) {
        // retrieve balance with address temporarily
        getBalanceRecord.removeAll { item in
            item.uppercased() == response.meta.address.uppercased()
        }
        let tempContext = NSManagedObjectContext(concurrencyType: .privateQueueConcurrencyType)
        tempContext.parent = AppContext.shared.coreDataStack.persistentContainer.viewContext
        var displayBalance: NSDecimalNumber = .zero
        tempContext.performAndWait {
            var needToSave = false
            response.payload.assets.forEach { tokenAddress, asset in
                let account = WalletCoreStorage.getAccount(address: response.meta.address, context: tempContext)
                guard asset.asset.isValid else { return }
                guard let token = Token(
                    address: tokenAddress,
                    account: account?.address,
                    asset: asset,
                    source: type,
                    context: tempContext) else {
                    return
                }
                if token.isMainToken {
                    displayBalance = token.displayBalance
                }
                if let account = account {
                    token.account = account
                    needToSave = true
                }
            }
            
            if needToSave {
                try? tempContext.saveOrRollback()
            }
        }
        try? WalletCoreStorage.saveChanges()
        
        balanceSubject.send((address: response.meta.address, balance: displayBalance))
    }
    
    private func parseAddressAssetsResponse(data: [Any], action: ZerionAPIModel.ResponseAction) {
        guard !data.isEmpty else { return }
        do {
            let response = try ZerionAPIModel.Response<ZerionAPIModel.AddressAssetsPayload>(from: data[0])
            guard !checkIfGetBalance(response.meta) else {
                saveTokensForGettingBalance(response)
                return
            }
            guard checkMeta(response.meta) else { return }
            let tempContext = NSManagedObjectContext(concurrencyType: .privateQueueConcurrencyType)
            tempContext.parent = AppContext.shared.backgroundContext
            var tokenIDs = [String]()
            tempContext.performAndWait {
                response.payload.assets.forEach { tokenAddress, asset in
                    guard let accountAddress = maskUserDefaults.defaultAccountAddress else { return }
                    guard asset.asset.isValid else { return }
                    if let token = Token(address: tokenAddress, account: accountAddress, asset: asset, source: type, context: tempContext) {
                        if let account = WalletCoreStorage.getAccount(address: accountAddress, context: tempContext) {
                            token.account = account
                        }
                        if let tokenIdentifier = token.identifier {
                            tokenIDs.append(tokenIdentifier)
                        } else {
                            fatalError("No valid token identifier")
                        }
                    }
                }
            }
            
            delegate?.didReceived(type: type, tokenIDs: tokenIDs, action: AssetActionType.fromZerionActionType(action), newObjectContext: tempContext)
        } catch {
            print("fail to decode, error: \(error.localizedDescription)")
        }
    }
    
    private func parsePortfolioResponse(data: [Any], action: ZerionAPIModel.ResponseAction) {
        guard !data.isEmpty else { return }
        do {
            let response = try ZerionAPIModel.Response<ZerionAPIModel.PortfolioPayload>(from: data[0])
            guard checkMeta(response.meta) else { return }
            AppContext.shared.coreDataStack.persistentContainer.viewContext.perform {
                guard let accountAddress = maskUserDefaults.defaultAccountAddress, let account = WalletCoreStorage.getAccount(address: accountAddress) else { return }
                account.addOrUpdatePortfolio(with: response.payload.portfolio)
                try? AppContext.shared.coreDataStack.persistentContainer.viewContext.saveOrRollback()
            }
        } catch {
            print("fail to decode, error: \(error.localizedDescription)")
        }
    }
    
    private func parseTransactionResponse(data: [Any], action: ZerionAPIModel.ResponseAction) {
        guard !data.isEmpty else { return }
        do {
            let response = try ZerionAPIModel.Response<ZerionAPIModel.TransactionsPayload>(from: data[0])
            guard checkMeta(response.meta) else { return }
            let transactionHistoryList = response.payload.transactions.map {
                TransactionHistory(transaction: $0)
            }
            self.delegate?.didReceived(type: type, transactions: transactionHistoryList, action: AssetActionType.fromZerionActionType(action))
        } catch {
            print("fail to decode, error: \(error.localizedDescription)")
        }
    }
}

// MARK: - Asset filter
extension ZerionAPIModel.Asset {
    var isValid: Bool {
        guard type != TokenType.trash.rawValue else { return false }
        return true
    }
}

extension Token {
    convenience init?(address: String,
                      account: String?,
                      asset: ZerionAPIModel.AssetWithQuantity,
                      source: WalletAssetProviderType,
                      context: NSManagedObjectContext) {
        self.init(context: context)
        self.contractAddress = asset.asset.assetCode
        self.price = NSDecimalNumber(floatLiteral: asset.asset.price?.value ?? 0)
        self.decimal = Int16(asset.asset.decimals)
        self.chainId = Int64(maskUserDefaults.network.chain.rawValue)
        self.logoUrl = asset.asset.iconUrl?.absoluteString
        self.name = asset.asset.name
        self.networkId = Int64(maskUserDefaults.network.networkId)
        self.symbol = asset.asset.symbol
        self.quantity = NSDecimalNumber(string: asset.quantity)
        self.identifier = Token.createIdentifier(
            chainId: Int64(maskUserDefaults.network.chain.rawValue),
            networkId: Int64(maskUserDefaults.network.networkId),
            symbol: asset.asset.symbol,
            account: account)
    }
}

// swiftlint:disable force_cast
extension Account {
    func addOrUpdatePortfolio(with zerioPortfolio: ZerionAPIModel.Portfolio) {
        if let portfolio = self.portfolios?.first(where: { portfolio in
            (portfolio as! Portfolio).networkId == maskUserDefaults.network.networkId
        }) as? Portfolio {
            portfolio.update(with: zerioPortfolio)
        } else {
            let newPortfolio = Portfolio(context: AppContext.shared.coreDataStack.persistentContainer.viewContext)
            newPortfolio.update(with: zerioPortfolio)
            self.addToPortfolios(newPortfolio)
        }
    }
}
// swiftlint:enable force_cast

extension Portfolio {
    func update(with zerioPortfolio: ZerionAPIModel.Portfolio) {
        self.absoluteChange24h = zerioPortfolio.absolute_change_24h
        self.assetsValue = zerioPortfolio.assets_value
        self.borrowedValue = zerioPortfolio.borrowed_value
//        self.bscAssetsValue = zerioPortfolio.bsc_assets_value
        self.currency = maskUserDefaults.currency.rawValue
        self.depositedValue = zerioPortfolio.deposited_value
        self.lockedValue = zerioPortfolio.locked_value
//        self.polygonAssetValue = zerioPortfolio.polygon_assets_value
        self.relativeChange24h = zerioPortfolio.relative_change_24h ?? 0
        self.stakedValue = zerioPortfolio.staked_value
        self.totalValue = zerioPortfolio.total_value
    }
}

// swiftlint:disable line_length
extension TransactionHistory {
    init(transaction: ZerionAPIModel.Transaction) {
        self.id = transaction.id
        self.type = TransactionHistory.TransactionType(rawValue: transaction.type.rawValue) ?? .unknown
        self.status = TransactionHistory.TransactionStatus(rawValue: transaction.status.rawValue) ?? .failed
        self.gasFee = transaction.fee?.value
        self.name = nil
        
        if let price = transaction.fee?.price {
            self.gasPrice = Decimal(floatLiteral: Double(price))
        } else {
            self.gasPrice = nil
        }
        self.timeAt = TimeInterval(transaction.mined_at)
        if let change = transaction.changes?.first {
            let priceDouble = change.asset.price?.value ?? 0
            let price = Decimal(floatLiteral: priceDouble)
            let changePriceDouble = change.price ?? 0
            let changePrice = Decimal(floatLiteral: Double(changePriceDouble))
            let asset = TransactionHistory.Asset(assetCode: change.asset.assetCode, decimals: change.asset.decimals, iconUrl: change.asset.iconUrl, price: price, isDisplayable: change.asset.isDisplayable, isVerified: change.asset.isVerified, name: change.asset.name, symbol: change.asset.symbol, type: change.asset.type)
            let change = TransactionHistory.TransactionChange(asset: asset, value: change.value, address_from: change.address_from, address_to: change.address_to, price: changePrice)
            self.change = change
        } else {
            self.change = nil
        }
    }
}
// swiftlint:enable line_length
