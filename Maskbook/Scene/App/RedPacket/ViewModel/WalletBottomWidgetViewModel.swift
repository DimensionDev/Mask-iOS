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
import web3swift
import SwiftUI

class WalletBottomWidgetViewModel: ObservableObject {
    @Published var token: Token? = nil
    @Published var isLocked: Bool = true
    @Published var txList = [String: TransactionStatus]()
    
    var state: TransactionState {
        guard let status = txList[address]?.status else {
            return .normal
        }
        switch status {
        case .confirmed: return .success
        case .failed: return .failed
        case .pending: return .pending
        }
    }
    
    var displayBalance: String {
        guard let token = token else { return "" }
        let symbol = token.symbol ?? ""
        
        let displayQuantity = token.quantityNumber
        let displayBalance = displayQuantity.displayBalance
        return "\(displayBalance) \(symbol)"
    }
    
    var transactionURL: URL? {
        guard let txHash = self.txHash else { return nil }
        guard let url = maskUserDefaults.network.getScanUrl(hash: txHash) else {
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
    
    var currentChainNetwork: Image? {
        guard let token = token else {
            return nil
        }

        guard let tokenBlockChain = BlockChainNetwork(
            chainId: Int(token.chainId),
            networkId: UInt64(token.networkId)) else {
            return nil
        }
        
        return tokenBlockChain.selectedIconAsImage
    }
    
    @InjectedProvider(\.userDefaultSettings)
    private var settings
    
    @InjectedProvider(\.walletAssetManager)
    private var walletAssetManager: WalletAssetManager
    
    @InjectedProvider(\.mainCoordinator)
    var coordinator
    
    @InjectedProvider(\.personaManager)
    var personaManager
    
    private var disposeBag = Set<AnyCancellable>()
    
    private var txHash: String? {
        txList[address]?.txHash
    }
    
    private var address: String = ""
    
    let source: LuckyDropViewModel.Source
    let callback: (@MainActor (RedPacketPayload) -> Void)?
    
    init(source: LuckyDropViewModel.Source, callback: (@MainActor (RedPacketPayload) -> Void)?) {
        self.source = source
        self.callback = callback
        
        Publishers.CombineLatest3(
            settings.defaultAccountAddressPublisher.removeDuplicates(),
            settings.networkPubisher.removeDuplicates(),
            walletAssetManager.activateProvider.nativeTokenSubject.prepend(())
        ).asDriver().sink { [weak self] address, network, _ in
            guard let self = self else { return }
            self.address = address ?? ""
            let token = self.walletAssetManager.getMainToken(
                network: network,
                chainId: network.chain.rawValue,
                networkId: Int(network.networkId),
                context: AppContext.shared.coreDataStack.persistentContainer.viewContext)
            self.token = token
        }
        .store(in: &disposeBag)
        
        settings.$passwordExpiredDate.asDriver().map { [weak self] date in
            self?.settings.isPasswordExpried(date) != false
        }
        .assign(to: \.isLocked, on: self)
        .store(in: &disposeBag)
        
        PendTransactionManager.shared.pendingTxFinishEvents.asDriver().sink { _ in
        } receiveValue: { [weak self] transcation, status in
            guard let self = self else { return }
            guard self.address == transcation.address, transcation.txHash == self.txList[self.address]?.txHash,
                  var state = self.txList[self.address] else {
                // If the transaction is not in the list of listeners, the local data needs to be updated as well.
                Task {
                    if case .confirmed = status {
                        await self.updateRedPacketRecord(transcation: transcation)
                    }
                }
                return
            }
            
            withAnimation {
                state.status = status
                self.txList[self.address] = state
                switch status {
                case .failed, .confirmed:
                    DispatchQueue.main.asyncAfter(deadline: .now() + 5) {
                        self.txList.removeValue(forKey: transcation.address)
                    }
                    
                default: break
                }
            }
            
            if case .confirmed = status {
                if case .lab = source {
                    self.coordinator.present(
                        scene: .luckyDropSuccessfully(callback: { [weak self] in
                            self?.shareRedPacket(transcation: transcation)
                        }),
                        transition: .modal()
                    )
                }
                
                Task {
                    await self.updateRedPacketRecord(transcation: transcation)
                    
                    guard let chainId = transcation.transactionInfo?.token.chainId,
                          let networkId = transcation.transactionInfo?.token.networkId,
                          let network = BlockChainNetwork(chainId: Int(chainId), networkId: UInt64(networkId)),
                          let payload = PluginStorageRepository.queryRecord(
                            chain: network,
                            tx: transcation.txHash) else {
                        return
                    }
                    await callback?(payload)
                }
            }
        }
        .store(in: &disposeBag)
    }
    
    @MainActor
    func shareRedPacket(transcation: PendTransactionModel) {
        if personaManager.currentProfile.value != nil {
            // open composer directly
            guard let chainId = transcation.transactionInfo?.token.chainId,
                  let networkId = transcation.transactionInfo?.token.networkId,
                  let network = BlockChainNetwork(chainId: Int(chainId), networkId: UInt64(networkId)),
                  let payload = PluginStorageRepository.queryRecord(
                    chain: network,
                    tx: transcation.txHash) else {
                return
            }
            let meta = PluginMeta.redPacket(payload)
            coordinator.present(scene: .messageCompose(meta), transition: .modal(animated: true))
        } else if personaManager.currentPersona.value == nil {
            // create a persona, then share manually
            coordinator.present(scene: .luckyDropCreatePersona(callback: nil), transition: .modal())
        } else if personaManager.currentProfile.value == nil {
            // create a profile, then share manually
            coordinator.present(scene: .luckyDropCreateProfile, transition: .modal())
        }
    }
    
    @MainActor
    func updateRedPacketRecord(transcation: PendTransactionModel) async {
        // update record
        guard let transactionResult = transcation.transactionReceipt,
            let log = transactionResult.logs.first(where: { $0.address == ABI.happyRedPacketV4.contractAddress }) else {
            return
        }
        let json = ABI.happyRedPacketV4.parse(eventlog: log)
        guard let eventParam = HappyRedPacketV4.SuccessEvent(json: json),
            let chainId = transcation.transactionInfo?.token.chainId,
            let networkId = transcation.transactionInfo?.token.networkId,
            let network = BlockChainNetwork(chainId: Int(chainId), networkId: UInt64(networkId)) else {
            return
        }
        
        guard var payload = PluginStorageRepository.queryRecord(
            chain: network,
            tx: transcation.txHash) else {
            return
        }
        payload.basic?.rpid = eventParam.id
        payload.basic?.creationTime = eventParam.creation_time.asDouble() ?? 0
        
        let checkAvailability = await ABI.happyRedPacketV4.checkAvailability(redPackageId: eventParam.id)
        payload.payload?.totalRemaining = checkAvailability?.balance.flatMap { String($0, radix: 10) }
        
        PluginStorageRepository.save(
            chain: network,
            txHash: transcation.txHash,
            payload: payload
        )
    }
    
    func observeTransaction(txHash: String) {
        txList[address] = TransactionStatus(txHash: txHash, status: .pending)
        log.debug("observe txHash: \(txHash)", source: "lucky drop")
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
    
    struct TransactionStatus: Codable {
        let txHash: String
        var status: TransactionHistory.TransactionStatus
    }
}
