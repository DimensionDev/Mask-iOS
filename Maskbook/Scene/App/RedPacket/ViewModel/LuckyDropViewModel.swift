//
//  LuckyDropViewModel.swift
//  Maskbook
//
//  Created by Hugo L on 2022/3/29.
//  Copyright © 2022 dimension. All rights reserved.
//

import BigInt
import Combine
import CoreDataStack
import Foundation
import SwiftUI
import SwiftyJSON
import web3swift
import PromiseKit
import CombineExt

typealias FungibleToken = RedPacket.FungibleToken

@MainActor
final class LuckyDropViewModel: ObservableObject {
    // MARK: - Public property
    @Published var quantityStr = ""
    @Published var amountStr = ""
    @Published var message = L10n.Plugins.Luckydrop.Buttons.bestWishes
    @Published var mode = RedPacket.RedPacketType.average {
        didSet {
            quantityStr = ""
            amountStr = ""
        }
    }
    @Published var token: Token? {
        didSet {
            amountStr = ""
        }
    }
    @Published var gasFeeItem: GasFeeCellItem?
    @Published var buttonType: ConfirmButtonType = .send
    @Published var allowances = [String: BigUInt]()
    @Published var selection = LuckDropKind.token
    
    let walletBottomViewModel: WalletBottomWidgetViewModel
    
    private var timer: Timer?
    var gasFeeViewModel = GasFeeViewModel()
    
    var tokenStr: String {
        token?.symbol ?? ""
    }
    
    var maxButtonEnable: Bool {
        guard mode == .average else {
            return true
        }
        
        guard let quantity = Int(quantityStr), let amount = token?.quantity?.doubleValue else {
            return false
        }
        return quantity > 0 && amount > 0
    }
    
    var gasFeeInfo: String {
        guard let gasFeeItem = gasFeeItem else {
            return ""
        }
        
        guard let gasLimt = gasFeeViewModel.localGasFeeModel?.gasLimit else {
            return ""
        }
        
        guard let tokenPrice = token?.price as? Double else {
            return ""
        }
        
        let symbol = settings.currency.symbol
        let gwei = gasFeeItem.gWei
        let gasPriceDoubleValue = Double(EthUtil.getGasFeeFiat(gwei: gwei, gasLimit: gasLimt, price: tokenPrice)) ?? 0
        var gasPrice: String
        if gasPriceDoubleValue < 0.01 {
            gasPrice = "< \(symbol)0.01"
        } else {
            gasPrice = "~\(symbol)\(EthUtil.getGasFeeFiat(gwei: gwei, gasLimit: gasLimt, price: tokenPrice))"
        }
        let time = gasFeeItem.shortCostTime
        
        return "\(gasPrice) (\(time))"
    }
    
    var gasLimit: BigUInt {
        gasFeeViewModel.gasLimitPublisher.value
    }
    
    var gasPrice: BigUInt? {
        guard let gasFeeModel = gasFeeViewModel.gasFeePublisher.value else {
            return nil
        }
        guard let gwei = BigUInt(gasFeeModel.gWei) else {
            return nil
        }
        return gwei * (BigUInt(10).power(9))
    }
    
    var totalQuantity: NSDecimalNumber {
        var result: NSDecimalNumber
        if mode == .average {
            let quantity = NSDecimalNumber(string: quantityStr)
            let amountPerShare = NSDecimalNumber(string: amountStr)
            guard quantity != .notANumber && amountPerShare != .notANumber else {
                return .zero
            }
            guard let decimal = token?.decimal else {
                return .zero
            }
            result = quantity.multiplying(by: amountPerShare)
            let roundBehavior = NSDecimalNumberHandler(
                roundingMode: .down,
                scale: decimal,
                raiseOnExactness: false,
                raiseOnOverflow: false,
                raiseOnUnderflow: false,
                raiseOnDivideByZero: false)
            result = result.rounding(accordingToBehavior: roundBehavior)
        } else {
            result = NSDecimalNumber(string: amountStr)
        }
        return result != .notANumber ? result : .zero
    }
    
    var totalQuantityStr: String {
        totalQuantity.displayBalance
    }
    
    var totalQuantityColor: Color {
        totalQuantity == .zero
        ? Asset.Colors.Text.normal.asColor()
        : Asset.Colors.Text.dark.asColor()
    }
    
    var luckyDropAddressStr: String? {
        return settings.network.redPacketAddressV4
    }
    
    var confirmTitle: String {
        buttonType.title(token: token, mode: mode, amount: "\(totalQuantityStr) \(token?.symbol ?? "")")
    }
    
    var confirmEnable: Bool {
        buttonType.isEnable
    }
    
    var tokenURL: URL? {
        URL(string: token?.logoUrl ?? "")
    }
    
    var buttonAnimating: Bool {
        buttonType.animating
    }
    
    var showQuantityError: Bool {
        let quantity = NSDecimalNumber(string: quantityStr)
        guard quantity != .notANumber else {
            return false
        }
        return quantity.doubleValue > 255
    }
    
    var amountPlaceholder: String {
        if mode == .average {
            return L10n.Plugins.Luckydrop.amountPerShare
        } else {
            return L10n.Plugins.Luckydrop.totalAmount
        }
    }
    
    // MARK: - Private property
    private var disposeBag = Set<AnyCancellable>()
    @InjectedProvider(\.walletAssetManager)
    private var walletAssetManager: WalletAssetManager
    @InjectedProvider(\.userDefaultSettings)
    private var settings
    @InjectedProvider(\.vault)
    private var vault
    @InjectedProvider(\.mainCoordinator)
    private var mainCoordinator
    @InjectedProvider(\.personaManager)
    private var personaManager
    
    let source: Source
    let callback: (@MainActor (RedPacketPayload) -> Void)?
    
    // MARK: - Public method
    init(source: Source, callback: (@MainActor (RedPacketPayload) -> Void)?) {
        self.source = source
        self.callback = callback
        walletBottomViewModel = WalletBottomWidgetViewModel(source: source, callback: callback)
        
        Publishers.CombineLatest3(
            settings.defaultAccountAddressPublisher.removeDuplicates(),
            settings.networkPubisher.removeDuplicates(),
            walletAssetManager.activateProvider.nativeTokenSubject.prepend(())
        ).asDriver().sink { [weak self] _, network, _ in
            guard let self = self else { return }
            let token = self.walletAssetManager.getMainToken(
                network: network,
                chainId: network.chain.rawValue,
                networkId: Int(network.networkId),
                context: AppContext.shared.coreDataStack.persistentContainer.viewContext)
            self.token = token
        }
        .store(in: &disposeBag)
        
        gasFeeViewModel.refresh()
        
        // It will only change after the user selects gasfee and is only used here to initialize the data.
        gasFeeViewModel.confirmedGasFeePublisher
            .removeDuplicates()
            .filter({ $0 != nil })
            .assign(to: \.gasFeeItem, on: self)
            .store(in: &disposeBag)
        
        setupObserversForConfirmButton()
    }
    
    func maxAmount() {
        guard let token = token else { return }
        var amount = token.quantityNumber
        if token.isMainToken == true, let gasFee = self.gasFeeItem?.gasFee {
            let gasFeeNumber = NSDecimalNumber(string: gasFee)
            if gasFeeNumber != .notANumber {
                amount = amount.subtracting(gasFeeNumber)
            }
        }
        // prevent negative value due to too high gas fee
        if amount.doubleValue < 0 {
            amount = .zero
        }
        
        switch mode {
        case .average:
            let quantity = NSDecimalNumber(string: quantityStr)
            guard quantity != .notANumber else {
                amountStr = ""
                return
            }
            let result = amount.dividing(by: quantity)
            let decimal = token.decimal
            guard result != .notANumber else {
                amountStr = ""
                return
            }
            let roundBehavior = NSDecimalNumberHandler(
                roundingMode: .down,
                scale: decimal,
                raiseOnExactness: false,
                raiseOnOverflow: false,
                raiseOnUnderflow: false,
                raiseOnDivideByZero: false)
            amountStr = result.rounding(accordingToBehavior: roundBehavior).stringValue
            
        case .random:
            guard amount != .notANumber else {
                amountStr = ""
                return
            }
            amountStr = amount.stringValue
        }
    }
    
    func approveToken() {
        vault.getWalletPassword()
            .sink(receiveCompletion: { _ in }) { [weak self] password in
                guard let self = self else { return }
                self.approveToken(password: password, network: self.settings.network)
            }
            .store(in: &disposeBag)
        
        buttonType = .unlockingToken
    }
    
    func send() {
        buttonType = .sending
        
        createRedPacket()
    }
    
    private func createRedPacket() {
        guard let token = token else { return }
        // key pair
        guard let privateKey = SECP256K1.generatePrivateKey() else { return }
        guard let publicKey = Web3.Utils.privateToPublic(privateKey) else { return }
        guard let publicKeyETH = Web3.Utils.publicToAddress(publicKey) else { return }
        
        // number
        guard let number = BigUInt(quantityStr) else { return }
        
        // ifrandom
        let isRandom = mode == .random
        
        // duration
        let duration = BigUInt(60 * 60 * 24)
        
        // seed
        let randomStr = "\(Float.random(in: 0..<1))"
        guard let seed = randomStr.data(using: .utf8)?.sha3(.keccak256) else { return }
        
        // message
        let defaultMessage = ""
        let message = self.message.isEmpty ? defaultMessage : self.message
        
        // tokenType
        let tokenType = token.isMainToken == true ? BigUInt(0) : BigUInt(1)
        // tokenAddr
        var tokenAddr: String = ""
        if token.isMainToken == true {
            tokenAddr = settings.network.nativeTokenAddress
        } else if let address = token.contractAddress {
            tokenAddr = address
        }
        guard let tokenAddressETH = EthereumAddress(tokenAddr) else { return }
        
        // totalTokens
        guard let total = Web3.Utils.parseToBigUInt(
            self.totalQuantity.stringValue,
            decimals: Int(token.decimal)
        ) else {
            return
        }
        
        let senderName = personaManager.currentProfile.value?.nickname
            ?? personaManager.currentPersona.value?.identifier
            ?? "Unknown User"
        
        let param = HappyRedPacketV4.CreateRedPacketInput(
            publicKey: publicKeyETH,
            number: number,
            ifrandom: isRandom,
            duration: duration,
            seed: seed.bytes,
            message: message,
            name: senderName,
            tokenType: tokenType,
            tokenAddr: tokenAddressETH,
            totalTokens: total)
        
        let fungibleTokenBuilder = FungibleTokenBuilder()
        let fungibleToken = fungibleTokenBuilder.buildToken(with: token)
        Task {
            let password = privateKey.toHexString().addHexPrefix()
            let tx = await ABI.happyRedPacketV4.createRedPacket(
                token: token,
                gasFeeViewModel: gasFeeViewModel,
                param: param,
                password: privateKey.toHexString().addHexPrefix()
            )

            // Show the loading animation and reset the `ComfirmButton`'s state.
            buttonType = .requestAllowance
            checkParam()
            if let tx = tx {
                walletBottomViewModel.observeTransaction(txHash: tx)
                saveRedPacket(txHash: tx, password: password, token: fungibleToken)
            }
        }
    }
    
    // MARK: - Private method
    private func saveRedPacket(txHash: String, password: String, token: FungibleToken?) {
        do {
            guard let w3Provider = settings.network.w3Provider,
                    let address = settings.defaultAccountAddress,
                    let token = token,
                    let contractAddress = settings.network.redPacketAddressV4,
                    let networkName = settings.network.fullEvmName else {
                return
            }
            let transaction = try w3Provider.eth.getTransactionDetails(txHash)
            let data = transaction.transaction.data.toHexString()
            let kvpair = ABI.happyRedPacketV4.parse(input: data, for: .createRedPacket)
            let redpacketInfo = RedPacketHistoryInfo.CreateRedpacketParam(json: kvpair)
            
            guard let info = redpacketInfo else { return }

            let basic = RedPacket.Basic(
                contractAddress: contractAddress,
                rpid: "",
                txid: txHash,
                password: password,
                shares: info.number.asInt() ?? 0,
                isRandom: info.ifrandom,
                total: info.total_tokens.description,
                creationTime: 0,
                duration: info.duration.asDouble() ?? 0,
                blockNumber: Int(transaction.blockNumber ?? 0)
            )

            let packetPayload = RedPacket.RedPacketPayload.Payload.init(
                sender: .init(address: address, name: info.name, message: info.message),
                contractVersion: 4,
                network: networkName,
                tokenType: info.token_type.asInt().flatMap { .init(rawValue: $0) },
                token: token,
                tokenAddress: info.token_addr,
                claimers: [],
                totalRemaining: nil
            )
            let payload = RedPacketPayload.init(basic: basic, payload: packetPayload)
            PluginStorageRepository.save(
                address: address,
                chain: settings.network,
                txHash: txHash,
                payload: payload
            )
        } catch {
            log.error("\(error)")
        }
    }
    
    private func getAllowance() async -> BigUInt? {
        guard let fromAddress = settings.defaultAccountAddress,
              let originalOwner = EthereumAddress(fromAddress) else {
                  return nil
              }
        guard let web3 = Web3ProviderFactory.provider else { return nil }
        guard let contractAddressStr = token?.contractAddress,
              let contractAddress = EthereumAddress(contractAddressStr) else {
                  return nil
              }
        guard let luckyDropAddressStr = luckyDropAddressStr,
              let luckyDropAddress = EthereumAddress(luckyDropAddressStr) else {
                  return nil
              }
        let erc20 = ERC20(web3: web3, provider: web3.provider, address: contractAddress)
        
        return await Task.detached {
            guard let allowance = try? erc20.getAllowance(originalOwner: originalOwner, delegate: luckyDropAddress) else {
                return nil
            }
            return allowance
        }.value
    }
    
    private func getAndUpdateAllowances() {
        guard let identifier = self.token?.identifier else {
            return
        }
        guard (self.allowances[identifier] ?? 0) == 0 else {
            return
        }
        Task {
            let allowance = await self.getAllowance()

            if let allowance = allowance {
                self.allowances[identifier] = allowance
                if allowance > 0 {
                    // set back `buttonType` to `.unlockToken`
                    self.buttonType = .unlockToken
                }
            } else {
                self.allowances.removeValue(forKey: identifier)
            }
        }
    }
    
    private func approveToken(password: String, network: BlockChainNetwork) {
        guard let fromAddress = settings.defaultAccountAddress,
              let fromAddressEthFormat = EthereumAddress(fromAddress) else {
            return
        }
        guard let web3 = Web3ProviderFactory.provider else { return }
        guard let tokenAddress = token?.contractAddress,
              let tokenAddressETHFormat = EthereumAddress(tokenAddress) else {
            return
        }
        guard let toAddress = luckyDropAddressStr,
              let toAddressEthFormat = EthereumAddress(toAddress) else {
                  return
              }
        Task.detached {
            let erc20 = ERC20(web3: web3, provider: web3.provider, address: tokenAddressETHFormat)
            do {
                // FIXME: set `0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff` to method `approve`.
                // block thread
                let transacation = try erc20.approve(
                    from: fromAddressEthFormat,
                    spender: toAddressEthFormat,
                    amount: "\(UInt.max)"
                )
                let transacationResult = try transacation.assemble()
                let hashTX = try await self.presentTransactionPopView(
                    transacationResult: transacationResult,
                    transactionOptions: transacation.transactionOptions
                )
                log.debug("approve/revoke hash \(hashTX)", source: "lucky drop")
                await self.checkApproveStatus(txHash: hashTX)
            } catch {
                await MainActor.run {
                    // This is just to make `checkParam` work properly.
                    self.buttonType = .requestAllowance
                    // continue to check param
                    self.checkParam()
                    log.error("error approve/revoke token", source: "lucky drop")
                }
            }
        }
    }
    
    private func presentTransactionPopView(
        transacationResult: EthereumTransaction,
        transactionOptions: TransactionOptions
    ) async throws -> String {
        try await withCheckedThrowingContinuation { [weak self] continuation in
            let comletion: ((Swift.Result<String, Error>) -> Void) = { result in
                switch result {
                case .success(let txHash): continuation.resume(returning: txHash)
                case .failure(let error): continuation.resume(throwing: error)
                }
            }
            
            self?.mainCoordinator.present(
                scene: .maskSendResolverTransactionPopView(
                    completion: comletion,
                    transaction: transacationResult,
                    transactionOptions: transactionOptions
                ),
                transition: .panModel(animated: true)
            )
        }
    }
    
    private func checkApproveStatus(txHash: String) {
        guard let web3Provier = Web3ProviderFactory.provider?.eth else {
            return
        }
        log.debug("checkApproveStatus hash \(txHash)", source: "lucky drop")
        timer = Timer.scheduledTimer(withTimeInterval: 5, repeats: true) { [weak self] _ in
            _ = web3Provier.getTransactionReceiptPromise(txHash).done {[weak self] transactionReceipt in
                log.debug("checkApproveStatus1 hash \(txHash) status: \(transactionReceipt.status)", source: "lucky drop")
                guard transactionReceipt.status != .notYetProcessed else {
                    return
                }
                self?.getAndUpdateAllowances()
                self?.timer?.invalidate()
                self?.timer = nil
            }
        }
    }
    
    private func setupObserversForConfirmButton() {
        let publishers: [AnyPublisher<String, Never>] = [
            settings.$passwordExpiredDate.map({ "\(String(describing: $0))" }).eraseToAnyPublisher(),
            settings.$defaultAccountAddress.map({ $0 ?? "" }).eraseToAnyPublisher(),
            settings.$confirmedPluginRiskWarnings.map({ _ in "" }).eraseToAnyPublisher(),
            $quantityStr.eraseToAnyPublisher(),
            $amountStr.eraseToAnyPublisher(),
            $message.eraseToAnyPublisher(),
            $gasFeeItem.map({ _ in "" }).eraseToAnyPublisher(),
            $allowances.map({ _ in "" }).eraseToAnyPublisher(),
            $token.map({ _ in "" }).eraseToAnyPublisher(),
        ]
        
        publishers.combineLatest()
            .debounce(for: .seconds(0.1), scheduler: RunLoop.main)
            .sink { [weak self] _ in
                guard let self = self else {
                    return
                }
                self.checkParam()
            }
            .store(in: &disposeBag)
        
        settings.$defaultAccountAddress.removeDuplicates().asDriver().sink { [weak self] fromAddress in
            guard let self = self else { return }
            guard self.token?.account?.address != fromAddress else { return }
            let token = self.walletAssetManager.getMainToken(
                network: self.settings.network,
                chainId: self.settings.network.chain.rawValue,
                networkId: Int(self.settings.network.networkId),
                context: AppContext.shared.coreDataStack.persistentContainer.viewContext)
            self.token = token
        }
        .store(in: &disposeBag)
    }
    
    func checkParam() {
        guard self.buttonType != .sending, self.buttonType != .unlockingToken else {
            return
        }
        
        guard self.settings.defaultAccountAddress != nil else {
            self.updateButton(state: .noAccount)
            return
        }
        
        guard let token = self.token else {
            self.updateButton(state: .noToken)
            return
        }
        
        guard let date = self.settings.passwordExpiredDate, !self.settings.isPasswordExpried(date) else {
            self.updateButton(state: .unlock)
            return
        }
             
        guard self.settings.hasRiskConfirmed else {
            self.updateButton(state: .riskWarning)
            return
        }
        
        guard let gasFee = self.gasFeeItem?.gasFee else {
            return
        }
        let gasFeeNumber = NSDecimalNumber(string: gasFee)
        guard gasFeeNumber != .notANumber else {
            return
        }
        guard let nativeToken = self.walletAssetManager.getMainToken(
            network: self.settings.network,
            chainId: self.settings.network.chain.rawValue,
            networkId: Int(self.settings.network.networkId),
            context: AppContext.shared.coreDataStack.persistentContainer.viewContext) else {
            self.updateButton(state: .insufficientGas)
            return
        }
        let balanceOfNativeToken = nativeToken.quantityNumber
        if gasFeeNumber.doubleValue > balanceOfNativeToken.doubleValue {
            self.updateButton(state: .insufficientGas)
            return
        }
        
        let quantity = NSDecimalNumber(string: self.quantityStr)
        guard quantity != .notANumber else {
            self.updateButton(state: .noQuantity)
            return
        }
        guard quantity.doubleValue > 0 else {
            self.updateButton(state: .noQuantity)
            return
        }
        guard quantity.doubleValue < 255 else {
            self.updateButton(state: .exceedMaxQuantity)
            return
        }
        let amount = NSDecimalNumber(string: self.amountStr)
        guard amount != .notANumber else {
            self.updateButton(state: .noAmount)
            return
        }
        
        // insufficientBalance
        let tokenAmount = token.quantityNumber
        let totalAmount = self.totalQuantity
        guard tokenAmount != .notANumber, totalAmount != .notANumber else {
            return
        }
        
        if !token.isMainToken, let identifier = token.identifier {
            if self.allowances[identifier] == nil {
                self.updateButton(state: .requestAllowance)
                self.getAndUpdateAllowances()
                return
            }
            if let sendAmount = Web3.Utils.parseToBigUInt("\(self.totalQuantity)", decimals: Int(token.decimal)),
               let allowance = self.allowances[identifier],
               allowance < sendAmount {
                self.updateButton(state: .unlockToken)
                return
            }
        }
        
        if token.isMainToken {
            if case .orderedDescending = gasFeeNumber.adding(totalAmount).compare(tokenAmount) {
                self.updateButton(state: .insufficientBalance)
                return
            }
        } else {
            if case .orderedDescending = totalAmount.compare(tokenAmount) {
                self.updateButton(state: .insufficientBalance)
                return
            }
        }
        
        // no message
        guard !self.message.isEmpty else {
            self.updateButton(state: .noMessage)
            return
        }
        
        guard let division = token.quantity?.dividing(by: quantity), division.doubleValue > 1 else {
            self.updateButton(state: .indivisible)
            return
        }
        
        self.updateButton(state: .send)
    }
    
    func updateButton(state: ConfirmButtonType) {
        buttonType = state
    }
}

extension LuckyDropViewModel: ChooseTokenBackDelegate {
    func chooseTokenAction(token: Token) {
        self.token = token
    }
    
    func chooseNFTTokenAction(token: Collectible) {
        
    }
}

extension LuckyDropViewModel {
    enum Source {
        // 1. need to check if has a persona
        // 2. popup an alert to share
        case lab
        case composer
    }
    
    enum ConfirmButtonType: CaseIterable, Codable {
        case noAccount
        case noToken
        case unlock
        case riskWarning
        case insufficientGas
        case noQuantity
        case exceedMaxQuantity
        case noAmount
        
        case requestAllowance
        case unlockToken
        case unlockingToken
        
        case insufficientBalance
        case noMessage
        case indivisible
        
        case send
        case sending
        
        func title(token: Token?, mode: RedPacket.RedPacketType, amount: String?) -> String {
            switch self {
            case .unlock: return L10n.Scene.WalletUnlock.title
            case .riskWarning: return L10n.Plugins.Luckydrop.Buttons.riskWarning
            case .insufficientGas: return L10n.Plugins.Luckydrop.Buttons.insufficientGas
            case .requestAllowance: return ""
            case .unlockToken: return L10n.Plugins.Luckydrop.Buttons.unlockToken(token?.symbol ?? "")
            case .unlockingToken: return L10n.Plugins.Luckydrop.Buttons.unlockingToken
            case .insufficientBalance: return L10n.Plugins.Luckydrop.Buttons.insufficientBalance
            case .noToken: return L10n.Plugins.Luckydrop.Buttons.noToken
            case .noAccount: return L10n.Plugins.Luckydrop.Buttons.noAccount
            case .noQuantity: return L10n.Plugins.Luckydrop.Buttons.noShare
            case .exceedMaxQuantity: return L10n.Plugins.Luckydrop.Buttons.exceedMaxQuantity
            case .noAmount:
                switch mode {
                case .average: return L10n.Plugins.Luckydrop.Buttons.noAmountPerShare
                case .random: return L10n.Plugins.Luckydrop.Buttons.noTotalAmount
                }
            case .noMessage: return L10n.Plugins.Luckydrop.Buttons.noMessage
            case .indivisible:
                guard let token = token else { return "" }
                let minimum = NSDecimalNumber(value: 1).dividing(by: NSDecimalNumber(mantissa: 1, exponent: token.decimal, isNegative: false))
                return L10n.Plugins.Luckydrop.Buttons.minimumAmount(minimum.stringValue, token.symbol ?? "")
            case .send: return L10n.Plugins.Luckydrop.Buttons.send(amount ?? "")
            case .sending: return L10n.Scene.WalletBalance.btnSend
            }
        }
        
        var isEnable: Bool {
            switch self {
            case .unlock, .riskWarning, .unlockToken, .unlockingToken, .send, .sending:
                return true
                
            default:
                return false
            }
        }
        
        var animating: Bool {
            switch self {
            case .unlockingToken, .sending, .requestAllowance:
                return true
                
            default:
                return false
            }
        }
    }
}

extension FungibleTokenBuilder {
    func buildToken(with token: Token) -> FungibleToken? {
        var tokenType: RedPacket.EthereumToken? = nil
        switch token.tokenType {
        case .native: tokenType = .native
        case .erc20: tokenType = .erc20
        }
        guard let type = tokenType else {
            return nil
        }
        guard let redPacketChainId = RedPacket.ChainId(rawValue: Int(token.networkId)) else {
            return nil
        }
        let redPacketToken = RedPacket.Token(
            type: type,
            address: token.contractAddress ?? "",
            chainId: redPacketChainId,
            name: token.name ?? "",
            symbol: token.symbol ?? "",
            decimals: Int(token.decimal),
            logoURI: .either(token.logoUrl ?? ""))
        switch redPacketToken.type {
        case .erc20: return .erc20Token(redPacketToken)
        case .native: return .nativeToken(redPacketToken)
        default: return nil
        }
    }
}
