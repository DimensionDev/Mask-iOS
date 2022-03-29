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

class LuckyDropViewModel: ObservableObject {
    @InjectedProvider(\.walletAssetManager)
    private var walletAssetManager: WalletAssetManager
    
    @InjectedProvider(\.userDefaultSettings)
    private var settings
    
    @Published var quantityStr = ""
    // to be used in avaerage mode
    @Published var amountPerShareStr = ""
    // to be used in random mode
    @Published var amountTotalShareStr = ""
    @Published var message = ""
    @Published var transactionInfoStr = "$18.8 (~32s)"
    @Published var totalAmountStr = ""
    @Published var mode = RedPacket.RedPacketType.average
    @Published var token: Token?
    
    var tokenStr: String {
        token?.name ?? ""
    }
    
    var maxButtonEnable: Bool {
        guard let quantity = Int(quantityStr), let amount = token?.quantity?.doubleValue else {
            return false
        }
        return quantity > 0 && amount > 0
    }
    
    init() {
        let token = walletAssetManager.getMainToken(
            network: settings.network,
            chainId: settings.network.chain.rawValue,
            networkId: Int(settings.network.networkId),
            context: AppContext.shared.coreDataStack.persistentContainer.viewContext)
        self.token = token
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
