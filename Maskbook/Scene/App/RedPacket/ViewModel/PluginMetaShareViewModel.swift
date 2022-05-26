//
//  PluginMetaShareViewModel.swift
//  Maskbook
//
//  Created by xiaojian sun on 2022/5/26.
//  Copyright © 2022 dimension. All rights reserved.
//

import Foundation

class PluginMetaShareViewModel {
    @InjectedProvider(\.mainCoordinator)
    private var coordinator

    @InjectedProvider(\.personaManager)
    private var personaManager

    @MainActor
    func shareRedPacket(transcation: PendTransactionModel) {
        guard hasPersonaOrProfileToShare() else { return }

        // open composer directly
        guard let chainId = transcation.transactionInfo?.token.chainId,
              let networkId = transcation.transactionInfo?.token.networkId,
              let network = BlockChainNetwork(chainId: Int(chainId), networkId: UInt64(networkId)),
              let payload = PluginStorageRepository.queryRecord(
                  chain: network,
                  tx: transcation.txHash)
        else {
            return
        }
        let meta = PluginMeta.redPacket(payload)
        coordinator.present(scene: .messageCompose(meta), transition: .modal(animated: true))
    }
    
    @MainActor
    func shareRedPacket(payload: RedPacketPayload) {
        guard hasPersonaOrProfileToShare() else { return }
        
        let meta = PluginMeta.redPacket(payload)
        coordinator.present(scene: .messageCompose(meta), transition: .modal(animated: true))
    }

    private func hasPersonaOrProfileToShare() -> Bool {
        if personaManager.currentPersona.value == nil {
            // create a persona, then share manually
            coordinator.present(scene: .luckyDropCreatePersona(callback: nil), transition: .modal())
            return false
        }
        if personaManager.currentProfile.value?.linkedPersona == nil {
            // create a profile, then share manually
            coordinator.present(scene: .luckyDropCreateProfile, transition: .modal())
            return false
        }
        return true
    }
}
