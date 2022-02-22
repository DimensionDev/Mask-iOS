//
//  BalanceTokenRowViewModel.swift
//  Maskbook
//
//  Created by Hugo L on 2022/2/21.
//  Copyright © 2022 dimension. All rights reserved.
// swiftlint:disable array_init

import Combine
import CoreData
import CoreDataStack
import Kingfisher
import SwiftUI

class BalanceTokenRowViewModel: ObservableObject {
    @Published var token: Token
    @Published var currency: Currency?
    @Published var chain: BlockChainNetwork?
    private var disposeBag = Set<AnyCancellable>()
    
    var name: String {
        token.name ?? ""
    }
    
    var displayQuantity: String {
        "\(token.displayQuantity.stringValue.currency) \(token.symbol ?? "")"
    }
    
    var balance: String {
        "\(currency?.symbol ?? "")\(token.displayBalance.stringValue.currency)"
    }
    
    var logoUrl: String? {
        token.logoUrl
    }
    
    init(token: Token) {
        self.token = token
        
        UserDefaultPublishers.currency
            .map { $0 }
            .assign(to: \.currency, on: self)
            .store(in: &self.disposeBag)
        
        Publishers.CombineLatest3(
            token.publisher(for: \.chainId),
            token.publisher(for: \.networkId),
            UserDefaultSettings.shared.displayBlockChainPublisher)
            .receive(on: DispatchQueue.main)
            .sink { [weak self] chainId, networkId, displayBlockChain in
                guard let tokenBlockChain = BlockChainNetwork(chainId: Int(chainId),
                                                              networkId: UInt64(networkId)) else {
                    return
                }
                // Token BlockChain icon is only visible when displayBlockChain is **all**
                self?.chain = displayBlockChain == .all ? tokenBlockChain : nil
            }
            .store(in: &disposeBag)
    }
}
// swiftlint:enable array_init
