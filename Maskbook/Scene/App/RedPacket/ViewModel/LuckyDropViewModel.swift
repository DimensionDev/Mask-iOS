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
    private var settings
    private var nextButtonTypes: [ConfirmButtonType] = []
    
    var tokenStr: String {
        token?.name ?? ""
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
    
    var totalQuantity: String {
        if mode == .average {
            guard let quantity = Double(quantityStr) else { return "0.00" }
            guard let amountPerShare = Double(amountPerShareStr) else { return "0.00" }
            return String(format: "%.02f", quantity * amountPerShare)
        } else {
            guard let amountTotalShare = Double(amountTotalShareStr) else { return "0.00" }
            return String(format: "%.02f", amountTotalShare)
        }
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
        buttonType.title
    }
    
    var tokenURL: URL? {
        URL(string: token?.logoUrl ?? "")
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
        settings.$passwordExpiredDate.sink { [weak self] _ in
            guard let self = self else { return }
            if self.settings.isPasswordExpried() && !self.nextButtonTypes.contains(.unlock) {
                self.nextButtonTypes.insert(.unlock, at: 0)
            } else if !self.settings.isPasswordExpried() && self.nextButtonTypes.contains(.unlock) {
                self.nextButtonTypes.removeAll { type in
                    type == .unlock
                }
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
        // 2. confirm risk warnning
        if settings.hasLuckyDropRiskConfirmed {
            insertButtonType(type: .riskWarning, afterType: .unlock)
        }
        
        // 3. unlock tokens
        processAproveButton()
        
        // 4. send
        insertButtonType(type: .send, afterType: .unlockToken)
    }
    
    private func processNextButton() {
        guard let type = nextButtonTypes.first else {
            return
        }
        buttonType = type
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
        let erc20 = ERC20(web3: web3, provider: web3.provider, address: contractAddress)
        
        Task {
            guard let allowance = try? erc20.getAllowance(originalOwner: originalOwner, delegate: luckyDropAddress) else {
                return
            }
            guard allowance > 0 else {
                return
            }
            
            await MainActor.run {
                insertButtonType(type: .unlockToken, afterType: .riskWarning)
            }
        }
    }
    
    func removeButtonType(type: ConfirmButtonType) {
        guard type != .send else { return }
        nextButtonTypes.removeAll(where: { $0 == type })
        processNextButton()
    }
    
    private func insertButtonType(type: ConfirmButtonType, afterType: ConfirmButtonType?) {
        guard let afterType = afterType else {
            nextButtonTypes.append(type)
            return
        }
        
        guard let index = nextButtonTypes.firstIndex(where: { $0 == afterType }) else {
            nextButtonTypes.append(type)
            return
        }
        
        nextButtonTypes.insert(type, at: index + 1)
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
    enum ConfirmButtonType {
        case unlock
        case riskWarning
        case unlockToken
        case send
        
        var title: String {
            switch self {
            case .unlock: return L10n.Scene.WalletUnlock.title
            case .riskWarning: return L10n.Plugins.Luckydrop.Buttons.riskWarning
            case .unlockToken: return L10n.Scene.WalletUnlock.button
            case .send: return L10n.Scene.WalletBalance.btnSend
            }
        }
    }
}
