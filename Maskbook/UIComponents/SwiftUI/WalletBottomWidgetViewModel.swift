//
//  WalletBottomWidgetViewModel.swift
//  Maskbook
//
//  Created by Hugo L on 2022/4/12.
//  Copyright © 2022 dimension. All rights reserved.
//

import Combine
import CoreDataStack
import Foundation
import SwiftUI

class WalletBottomWidgetViewModel: ObservableObject {
    @Published var token: Token? = nil
    @Published var state: TransactionState = .normal
    @Published var isLocked: Bool = true
    
    var displayBalance: String {
        guard let token = token else { return "" }
        let symbol = token.symbol ?? ""
        
        let displayBalance = token.displayBalance
        guard displayBalance != .notANumber else {
            return "0.00 \(symbol)"
        }
        let doubleValue = displayBalance.doubleValue
        if doubleValue < 0.01, doubleValue > 0 {
            return "< 0.01 \(symbol)"
        }
        return "\(displayBalance.stringValue) \(symbol)"
    }
    
    var transactionURL: URL? {
        guard let transactionId = self.transactionId else { return nil }
        guard let url = maskUserDefaults.network.getScanUrl(hash: transactionId) else {
            return nil
        }
        return url
    }
    
    var stateDescription: String {
        state.state(address: address)
    }
    
    var detailType: DetailType {
        state.detail(balance: displayBalance, txURL: transactionURL)
    }
    
    @InjectedProvider(\.userDefaultSettings)
    private var settings
    
    @InjectedProvider(\.walletAssetManager)
    private var walletAssetManager: WalletAssetManager
    
    @InjectedProvider(\.mainCoordinator)
    var coordinator
    
    private var disposeBag = Set<AnyCancellable>()
    
    private var transactionId: String?
    
    private var address: String = ""
    
    init() {
        settings.defaultAccountAddressPublisher.removeDuplicates().sink { [weak self] address in
            guard let self = self else { return }
            self.address = address ?? ""
            let token = self.walletAssetManager.getMainToken(
                network: self.settings.network,
                chainId: self.settings.network.chain.rawValue,
                networkId: Int(self.settings.network.networkId),
                context: AppContext.shared.coreDataStack.persistentContainer.viewContext)
            self.token = token
        }
        .store(in: &disposeBag)
        
        settings.$passwordExpiredDate.map { [weak self] date in
            self?.settings.isPasswordExpried(date) != false
        }
        .assign(to: \.isLocked, on: self)
        .store(in: &disposeBag)
    }
    
    func observeTransaction(id: String) {
        state = .pending
        transactionId = id
        
        // TODO: request infomation of a transaction
    }
    
    func switchAccount() {
        guard !isLocked else {
            coordinator.present(
                scene: .walletUnlock(cancellable: true, completion: { error in }),
                transition: .modal(animated: true, adaptiveDelegate: nil)
            )
            return
        }
        
        coordinator.present(
            scene: .redPackageSelectAccount,
            transition: .panModel(animated: true)
        )
    }
    
    private func requestInfoOfTransaction() {
        
    }
}

extension WalletBottomWidgetViewModel {
    enum TransactionState {
        case normal
        case pending
        case failed
        case success
        
        func state(address: String) -> String {
            switch self {
            case .normal: return address
            case .pending: return L10n.Plugins.Luckydrop.State.pending
            case .failed: return L10n.Plugins.Luckydrop.State.failed
            case .success: return L10n.Plugins.Luckydrop.State.success
            }
        }
        
        var stateColor: Color {
            switch self {
            case .normal: return Asset.Colors.Text.normal.asColor()
            case .pending: return Asset.Colors.Public.warnings.asColor()
            case .failed: return Asset.Colors.Public.error.asColor()
            case .success: return Asset.Colors.Public.success.asColor()
            }
        }
        
        func detail(balance: String, txURL: URL?) -> DetailType {
            switch self {
            case .normal: return .balance(balance)
            case .pending, .failed, .success: return .transactionURL(txURL)
            }
        }
    }
    
    enum DetailType {
        case balance(String)
        case transactionURL(URL?)
    }
}
