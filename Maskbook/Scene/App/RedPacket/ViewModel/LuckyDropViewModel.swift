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
    @Published var quantityStr = ""
    // to be used in avaerage mode
    @Published var amountPerShareStr = ""
    // to be used in random mode
    @Published var amountTotalShareStr = ""
    @Published var message = ""
    @Published var totalAmountStr = ""
    @Published var mode = RedPacket.RedPacketType.average
    @Published var token: Token?
    @Published var gasFeeItem: GasFeeCellItem?
    @Published var buttonType: ConfirmButtonType = .send
    
    var gasFeeViewModel = GasFeeViewModel()
    
    private var disposeBag = Set<AnyCancellable>()
    @InjectedProvider(\.walletAssetManager)
    private var walletAssetManager: WalletAssetManager
    @InjectedProvider(\.userDefaultSettings)
    var settings
    @InjectedProvider(\.vault)
    var vault
    @InjectedProvider(\.mainCoordinator)
    private var mainCoordinator
    
    private var nextButtonTypes: [ConfirmButtonType: Bool] = [:]
    private var lastTotalQuantity: Double?
    
    var tokenStr: String {
        token?.symbol ?? ""
    }
    
    var maxButtonEnable: Bool {
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
        let gasPrice = "~\(symbol)\(EthUtil.getGasFeeFiat(gwei: gwei, gasLimit: gasLimt, price: tokenPrice))"
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
    
    var totalQuantityDoubleValue: Double {
        var result: Double
        if mode == .average {
            guard let quantity = Double(quantityStr) else { return 0 }
            guard let amountPerShare = Double(amountPerShareStr) else { return 0 }
            result = quantity * amountPerShare
        } else {
            guard let amountTotalShare = Double(amountTotalShareStr) else { return 0 }
            result = amountTotalShare
        }
        if lastTotalQuantity != result {
            processAproveButton()
        }
        lastTotalQuantity = result
        return result
    }
    
    var totalQuantity: String {
        return String(format: "%.02f", totalQuantityDoubleValue)
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
    
    var tokenURL: URL? {
        URL(string: token?.logoUrl ?? "")
    }
    
    var buttonAnimating: Bool {
        buttonType == .unlockingToken
    }
    
    override init() {
        super.init()
        let token = walletAssetManager.getMainToken(
            network: settings.network,
            chainId: settings.network.chain.rawValue,
            networkId: Int(settings.network.networkId),
            context: AppContext.shared.coreDataStack.persistentContainer.viewContext)
        self.token = token
        
        gasFeeViewModel.refresh()
        gasFeeViewModel.gasFeePublisher
            .filter({ $0 != nil })
            .prefix(1).sink { [weak self] gasFeeItem in
                self?.gasFeeItem = gasFeeItem
            }
            .store(in: &disposeBag)
        
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
        processConfirmButtonTypes()
        processNextButton()
    }
    
    func maxAmount() {
        guard let totalQuantity = token?.displayQuantity.doubleValue else { return }
        
        switch mode {
        case .average:
            guard let quantity = Int(quantityStr) else { return }
            amountPerShareStr = String.init(format: "%.6f", totalQuantity / Double(quantity))
            
        case .random:
            amountTotalShareStr = String.init(format: "%.6f", totalQuantity)
        }
    }
    
    private func processConfirmButtonTypes() {
        // cleanup `nextButtonTypes`
        ConfirmButtonType.allCases.filter({ $0 != .unlock }).forEach { [weak self] type in
            self?.nextButtonTypes[type] = false
        }
        
        // 2. confirm risk warnning
        if settings.hasLuckyDropRiskConfirmed {
            nextButtonTypes[.riskWarning] = true
        }
        
        // 3. unlock tokens
        processAproveButton()
        
        // 4. send
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
        guard let fromAddress = maskUserDefaults.defaultAccountAddress,
              let originalOwner = EthereumAddress(fromAddress) else {
                  return
              }
        guard let web3 = Web3ProviderFactory.provider else { return }
        guard let contractAddressStr = token?.contractAddress,
              let contractAddress = EthereumAddress(contractAddressStr) else {
                  return
              }
        guard let luckyDropAddressStr = luckyDropAddressStr,
              let luckyDropAddress = EthereumAddress(luckyDropAddressStr) else {
                  return
              }
        guard let token = token else {
            return
        }
        let decimal = token.decimal
        let erc20 = ERC20(web3: web3, provider: web3.provider, address: contractAddress)
        
        Task {
            guard let sendAmount = Web3.Utils.parseToBigUInt("\(totalQuantityDoubleValue)", decimals: Int(decimal)) else {
                await updateUnlockTokenButton(false)
                return
            }
            
            guard let allowance = try? erc20.getAllowance(originalOwner: originalOwner, delegate: luckyDropAddress) else {
                return
            }
            log.debug("allowance \(Int(allowance)) send: \(totalQuantityDoubleValue) decimals: \(decimal)", source: "lucky drop")
            
            guard allowance < sendAmount else {
                await updateUnlockTokenButton(false)
                return
            }
            
            await updateUnlockTokenButton(true)
        }
    }
    
    @MainActor
    private func updateUnlockTokenButton(_ value: Bool) {
        nextButtonTypes[.unlockToken] = value
        processNextButton()
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
                    amount: "\(totalQuantityDoubleValue)"
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
}

extension LuckyDropViewModel: GasFeeBackDelegate {
    func getGasFeeAction(gasFeeModel: GasFeeCellItem) {
        gasFeeItem = gasFeeModel
    }
}

extension LuckyDropViewModel: ChooseTokenBackDelegate {
    func chooseTokenAction(token: Token) {
        self.token = token
        processConfirmButtonTypes()
        processNextButton()
    }
    
    func chooseNFTTokenAction(token: Collectible) {
        
    }
}

extension LuckyDropViewModel {
    enum ConfirmButtonType: CaseIterable, Codable {
        case unlock
        case riskWarning
        case unlockToken
        case unlockingToken
        case send
        
        func title(token: Token?) -> String {
            switch self {
            case .unlock: return L10n.Scene.WalletUnlock.title
            case .riskWarning: return L10n.Plugins.Luckydrop.Buttons.riskWarning
            case .unlockToken: return L10n.Plugins.Luckydrop.Buttons.unlockToken(token?.symbol ?? "")
            case .unlockingToken: return L10n.Plugins.Luckydrop.Buttons.unlockingToken
            case .send: return L10n.Scene.WalletBalance.btnSend
            }
        }
    }
}
