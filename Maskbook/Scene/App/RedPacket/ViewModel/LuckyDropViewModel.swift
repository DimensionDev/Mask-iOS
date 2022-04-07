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

class LuckyDropViewModel: NSObject, ObservableObject {
    // MARK: - Public property
    @Published var quantityStr = ""
    @Published var amountStr = ""
    @Published var message = ""
    @Published var mode = RedPacket.RedPacketType.average
    @Published var token: Token? {
        didSet {
            allowance = nil
            guard token?.isMainToken != true else { return }
            Task {
                self.allowance = await self.getAllowance()
            }
        }
    }
    @Published var gasFeeItem: GasFeeCellItem?
    @Published var buttonType: ConfirmButtonType = .send
    @Published var allowance: BigUInt? = nil {
        didSet {
            // ERC20 Token should request allowance
            nextButtonTypes[.requestAllowance] = token?.isMainToken != true && allowance == nil
            // 4. check allowance of tokens in cases:
            // - *change token
            // - update total token
            processAproveButton()
            processNextButton()
        }
    }
    
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
        
        let symbol = maskUserDefaults.currency.symbol
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
        guard let gasLimitStr = gasFeeViewModel.gasFeePublisher.value?.gasLimit else {
            return BigUInt(21_000)
        }
        return BigUInt(gasLimitStr) ?? BigUInt(21_000)
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
            result = quantity.multiplying(by: amountPerShare)
        } else {
            result = NSDecimalNumber(string: amountStr)
        }
        return result != .notANumber ? result : .zero
    }
    
    var totalQuantityStr: String {
        let roundBehavior = NSDecimalNumberHandler(roundingMode: .plain, scale: 2, raiseOnExactness: false, raiseOnOverflow: false, raiseOnUnderflow: false, raiseOnDivideByZero: false)
        let result = totalQuantity.rounding(accordingToBehavior: roundBehavior)
        guard result != .notANumber else {
            return "0.00"
        }
        let doubleValue = totalQuantity.doubleValue
        if doubleValue < 0.01, doubleValue > 0 {
            return "< 0.01"
        }
        return String(format: "%.2f", result.doubleValue)
    }
    
    var totalQuantityColor: Color {
        totalQuantity == .zero ?
            Asset.Colors.Text.normal.asColor() :
            Asset.Colors.Text.dark.asColor()
    }
    
    var contractInfo: JSON? {
        if let redPacketConstantURL = Bundle.main.url(forResource: "red-packet", withExtension: "json"),
           let data = try? Data(contentsOf: redPacketConstantURL) {
            return try? JSON(data: data)
        } else {
            return nil
        }
    }
    
    var luckyDropAddressStr: String? {
        let chainKey = maskUserDefaults.network.redPacketConstantKey
        return contractInfo?["HAPPY_RED_PACKET_ADDRESS_V4"][chainKey].string
    }
    
    var confirmTitle: String {
        buttonType.title(token: token)
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
    private var nextButtonTypes: [ConfirmButtonType: Bool] = [:]
    lazy var totalQuantityPublisher: AnyPublisher<NSDecimalNumber, Never> = {
        let quantityPublisher = $quantityStr.compactMap {
            NSDecimalNumber(string: $0)
        }.filter { number in
            number != .notANumber
        }
        let amountPerSharePublisher = $amountStr.compactMap {
            NSDecimalNumber(string: $0)
        }.filter { number in
            number != .notANumber
        }
        let averageTotal = Publishers.CombineLatest(quantityPublisher, amountPerSharePublisher)
        .compactMap {
            NSDecimalNumber(value: $0.doubleValue * $1.doubleValue)
        }
        
        return averageTotal.eraseToAnyPublisher()
    }()
    
    // MARK: - Public method
    override init() {
        super.init()
        let token = walletAssetManager.getMainToken(
            network: settings.network,
            chainId: settings.network.chain.rawValue,
            networkId: Int(settings.network.networkId),
            context: AppContext.shared.coreDataStack.persistentContainer.viewContext)
        self.token = token
        
        gasFeeViewModel.refresh()
        
        // It will only change after the user selects gasfee and is only used here to initialize the data.
        gasFeeViewModel.gasFeePublisher.filter({ $0 != nil }).print("[confirmButton]====>").prefix(1).assign(to: \.gasFeeItem, on: self).store(in: &disposeBag)
        
        setupObserversForConfirmButton()
        processConfirmButtonTypes()
        processNextButton()
    }
    
    func maxAmount() {
        guard let amount = token?.quantityNumber else { return }
        
        switch mode {
        case .average:
            let quantity = NSDecimalNumber(string: quantityStr)
            guard quantity != .notANumber else {
                amountStr = ""
                return
            }
            let result = amount.dividing(by: quantity)
            guard result != .notANumber else {
                amountStr = ""
                return
            }
            amountStr = result.stringValue
            
        case .random:
            guard amount != .notANumber else {
                amountStr = ""
                return
            }
            amountStr = amount.stringValue
        }
    }
    
    func removeButtonType(type: ConfirmButtonType) {
        guard type != .send else { return }
        nextButtonTypes[type] = false
        processNextButton()
    }
    
    func approveToken() {
        vault.getWalletPassword()
            .sink(receiveCompletion: { _ in }) { [weak self] password in
                guard let self = self else { return }
                self.approveToken(password: password, network: self.settings.network)
            }
            .store(in: &disposeBag)
        
        nextButtonTypes[.unlockToken] = false
        nextButtonTypes[.unlockingToken] = true
        processNextButton()
    }
    
    func send() {
        nextButtonTypes[.send] = false
        nextButtonTypes[.sending] = true
        processNextButton()
        
        /*
         // seconds of 1 day
         const duration = 60 * 60 * 24
         
         const seed = Math.random().toString(
         seed: Web3Utils.sha3(seed)!
         
         // 不能小于1份
         const isDivisible = !totalAmount.dividedBy(shares).isLessThan(1)
         */
//        let param = HappyRedPacketV4.CreateRedPacketInput(
//            publicKey: <#T##EthereumAddress#>,
//            number: <#T##BigUInt#>,
//            ifrandom: <#T##Bool#>,
//            duration: <#T##BigUInt#>,
//            seed: <#T##[UInt8]#>,
//            message: <#T##String#>,
//            tokenType: <#T##BigUInt#>,
//            tokenAddr: <#T##EthereumAddress#>,
//            totalTokens: <#T##BigUInt#>
//        )
//        ABI.happyRedPacketV4.createRedPacket(param: HappyRedPacketV4.CreateRedPacketInput)
        
       // 默认message
    }
    
    func processAmountInput(value: String) {
        // make sure only one '.' in `value`
        if value.hasSuffix("0") { return }
        if value.hasSuffix("."),
           let firstIndex = value.firstIndex(of: "."),
           let lastIndex = value.lastIndex(of: "."),
           firstIndex == lastIndex {
            return
        }
        let num = NSDecimalNumber(string: value)
        let roundBehavior = NSDecimalNumberHandler(
            roundingMode: .down,
            scale: 18,
            raiseOnExactness: false,
            raiseOnOverflow: false,
            raiseOnUnderflow: false,
            raiseOnDivideByZero: false
        )
        let roundedNum = num.rounding(accordingToBehavior: roundBehavior)
        let processed = roundedNum == .notANumber ? "" : roundedNum.stringValue
        guard processed != value else { return }
        amountStr = processed
    }
    
    // MARK: - Private method
    private func processConfirmButtonTypes() {
        // cleanup `nextButtonTypes`
        ConfirmButtonType.allCases.filter({ $0 != .unlock }).forEach { [weak self] type in
            self?.nextButtonTypes[type] = false
        }
        
        // 2. confirm risk warnning
        if !settings.hasRiskConfirmed {
            nextButtonTypes[.riskWarning] = true
        }
        
        // 7. send
        nextButtonTypes[.send] = true
    }
    
    private func processNextButton() {
        for type in ConfirmButtonType.allCases {
            guard nextButtonTypes[type] == true else {
                continue
            }
            buttonType = type
            break
        }
    }
    
    private func processAproveButton() {
        guard let allowance = allowance else {
            updateUnlockTokenButton(false)
            return
        }
        guard let token = token else {
            updateUnlockTokenButton(false)
            return
        }
        let decimal = token.decimal
        guard let sendAmount = Web3.Utils.parseToBigUInt("\(totalQuantity)", decimals: Int(decimal)) else {
            updateUnlockTokenButton(false)
            return
        }
        guard allowance < sendAmount else {
            updateUnlockTokenButton(false)
            return
        }
        updateUnlockTokenButton(true)
    }
    
    @MainActor
    private func getAllowance() async -> BigUInt? {
        guard let fromAddress = maskUserDefaults.defaultAccountAddress,
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
        
        return await withCheckedContinuation { continuation in
            Task.detached {
                guard let allowance = try? erc20.getAllowance(originalOwner: originalOwner, delegate: luckyDropAddress) else {
                    continuation.resume(returning: nil)
                    return
                }
                continuation.resume(returning: allowance)
            }
        }
    }
    
    // 3. insufficient gas amount
    private func processInsufficientGasButton(gasFeeItem: GasFeeCellItem) {
        let gasFee = gasFeeItem.gasFee
        let gasFeeNumber = NSDecimalNumber(string: gasFee)
        guard gasFeeNumber != .notANumber  else { return }
        guard let amount = token?.quantityNumber else { return }
        nextButtonTypes[.insufficientGas] = gasFeeNumber.doubleValue > amount.doubleValue
    }
    
    // 5. insufficient balance
    private func processInsufficientBalanceButton(gasFeeItem: GasFeeCellItem) {
        let gasFee = gasFeeItem.gasFee
        let gasFeeNumber = NSDecimalNumber(string: gasFee)
        let totalAmount = totalQuantity
        guard gasFeeNumber != .notANumber, totalAmount != .notANumber else { return }
        guard let amount = token?.quantityNumber else { return }
        
        if token?.isMainToken == true {
            nextButtonTypes[.insufficientBalance] = (gasFeeNumber.doubleValue + totalAmount.doubleValue) >
            amount.doubleValue
        } else {
            nextButtonTypes[.insufficientBalance] = totalAmount.doubleValue >
            amount.doubleValue
        }
    }
    
    private func updateUnlockTokenButton(_ value: Bool) {
        nextButtonTypes[.unlockToken] = value
        processNextButton()
    }
    
    private func approveToken(password: String, network: BlockChainNetwork) {
        guard let fromAddress = maskUserDefaults.defaultAccountAddress,
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
        Task {
            let erc20 = ERC20(web3: web3, provider: web3.provider, address: tokenAddressETHFormat)
            do {
                let transacation = try erc20.approve(
                    from: fromAddressEthFormat,
                    spender: toAddressEthFormat,
                    amount: "\(totalQuantity)"
                )
                let transacationResult = try transacation.assemble()
                let (promise, resolver) = Promise<String>.pending()
                await MainActor.run {
                    mainCoordinator.present(
                        scene: .maskSendResolverTransactionPopView(
                            resolver: resolver,
                            transaction: transacationResult,
                            transactionOptions: transacation.transactionOptions
                        ),
                        transition: .panModel(animated: true)
                    )
                }
                let hash = try promise.wait()
                log.debug("approve/revoke hash \(hash)", source: "lucky drop")
                
                await MainActor.run {
                    removeButtonType(type: .unlockingToken)
                    processNextButton()
                }
            } catch {
                log.error("approve/revoke token", source: "lucky drop")
            }
        }
    }
    
    private func setupObserversForConfirmButton() {
        // 1. unlock
        settings.$passwordExpiredDate.sink { [weak self] expiredDate in
            guard let self = self else { return }
            
            if self.settings.isPasswordExpried(expiredDate) && self.nextButtonTypes[.unlock] != true {
                self.nextButtonTypes[.unlock] = true
            } else if !self.settings.isPasswordExpried(expiredDate) && self.nextButtonTypes[.unlock] == true {
                self.nextButtonTypes[.unlock] = false
            }
        }
        .store(in: &disposeBag)
        
        // 4. check allowance of tokens in cases:
        // - change token
        // - *update total token
        totalQuantityPublisher.asDriver().sink { [weak self] totalSend in
            self?.processAproveButton()
            self?.processNextButton()
        }
        .store(in: &disposeBag)
        
        Publishers.CombineLatest(
            $gasFeeItem.compactMap({ $0 }),
            totalQuantityPublisher
        ).sink { [weak self] gasFeeItem, totalQuantity in
            self?.processInsufficientBalanceButton(gasFeeItem: gasFeeItem)
            self?.processNextButton()
        }
        .store(in: &disposeBag)
        
        // 6. enter quantity (MAX: 255)
        $quantityStr.sink { [weak self] quantity in
            let quantity = NSDecimalNumber(string: quantity)
            guard quantity != .notANumber else { return }
            self?.nextButtonTypes[.exceedMaxQuantity] = self?.showQuantityError == true
            self?.processNextButton()
        }
        .store(in: &disposeBag)
    }
}

extension LuckyDropViewModel: GasFeeBackDelegate {
    func getGasFeeAction(gasFeeModel: GasFeeCellItem) {
        gasFeeItem = gasFeeModel
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
    enum ConfirmButtonType: CaseIterable, Codable {
        case unlock
        case riskWarning
        case insufficientGas
        case requestAllowance
        case unlockToken
        case unlockingToken
        case insufficientBalance
        case exceedMaxQuantity
        // TODO: send text
        case send
        case sending
        
        func title(token: Token?) -> String {
            switch self {
            case .unlock: return L10n.Scene.WalletUnlock.title
            case .riskWarning: return L10n.Plugins.Luckydrop.Buttons.riskWarning
            case .insufficientGas: return L10n.Plugins.Luckydrop.Buttons.insufficientGas
            case .requestAllowance: return ""
            case .unlockToken: return L10n.Plugins.Luckydrop.Buttons.unlockToken(token?.symbol ?? "")
            case .unlockingToken: return L10n.Plugins.Luckydrop.Buttons.unlockingToken
            case .insufficientBalance: return L10n.Plugins.Luckydrop.Buttons.insufficientBalance
            case .exceedMaxQuantity: return L10n.Plugins.Luckydrop.Buttons.exceedMaxQuantity
            case .send: return L10n.Scene.WalletBalance.btnSend
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
