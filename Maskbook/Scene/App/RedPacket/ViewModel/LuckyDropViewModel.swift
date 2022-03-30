//
//  LuckyDropViewModel.swift
//  Maskbook
//
//  Created by Hugo L on 2022/3/29.
//  Copyright © 2022 dimension. All rights reserved.
//

import Foundation
import CoreDataStack
import SwiftUI
import Combine
import BigInt

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
    
    var gasFeeViewModel = GasFeeViewModel()
    
    private var disposeBag = Set<AnyCancellable>()
    @InjectedProvider(\.walletAssetManager)
    private var walletAssetManager: WalletAssetManager
    @InjectedProvider(\.userDefaultSettings)
    private var settings
    
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
}

extension LuckyDropViewModel: GasFeeBackDelegate {
    func getGasFeeAction(gasFeeModel: GasFeeCellItem) {
        gasFeeItem = gasFeeModel
    }
}
