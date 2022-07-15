//
//  PluginMetaShareViewModel.swift
//  Maskbook
//
//  Created by xiaojian sun on 2022/5/26.
//  Copyright © 2022 dimension. All rights reserved.
//

import Foundation
import UIKit

final class PluginMetaShareViewModel: NSObject {
    @InjectedProvider(\.mainCoordinator)
    private var coordinator

    @InjectedProvider(\.personaManager)
    private var personaManager
    
    var shareMeta: PluginMeta?
    
    let delegate = FullScreenPresantationAdaptor()

    @MainActor
    func shareRedPacket(transcation: PendingTransaction) {
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
        self.shareMeta = meta
        guard showGuideWhenNoPersonaOrProfile() else { return }
        guard let rpid = payload.basic?.rpid, rpid.isNotEmpty else { return }

        MessageComposeCoodinator.showMessageComposeVC(shareMeta: meta)
    }
    
    @MainActor
    func shareRedPacket(payload: RedPacketPayload) {
        let meta = PluginMeta.redPacket(payload)
        self.shareMeta = meta
        guard showGuideWhenNoPersonaOrProfile() else { return }
        MessageComposeCoodinator.showMessageComposeVC(shareMeta: meta)
    }
    
    @MainActor
    func postFileService(fileServiceResult: FileServiceUploadResult) {
        let meta = PluginMeta.fileService(fileServiceResult)
        self.shareMeta = meta
        guard showGuideWhenNoPersonaOrProfile() else { return }
        MessageComposeCoodinator.showMessageComposeVC(shareMeta: meta)
    }
    
    private func reShare() {
        if let shareMeta = shareMeta {
            coordinator.topViewController?.dismiss(animated: true, completion: {
                MessageComposeCoodinator.showMessageComposeVC(shareMeta: shareMeta)
            })
        }
    }

    private func showGuideWhenNoPersonaOrProfile() -> Bool {
        guard let persona = personaManager.currentPersona.value else {
            // create a persona, then share manually
            coordinator.present(scene: .luckyDropCreatePersona(callback: nil), transition: .modal())
            return false
        }
        
        let currentTwitterProfiles = personaManager.currentTwitterProfiles
        if currentTwitterProfiles.isEmpty {
            // create a profile, then share manually
            coordinator.present(
                scene: .maskConnectingSocial(
                    socialPlatform: .twitter,
                    personaIdentifier: persona.nonOptionalIdentifier
                ),
                transition: .modal(wapperNav: true,
                                   animated: true,
                                   adaptiveDelegate: delegate)
            )
            return false
        } else if currentTwitterProfiles.count == 1 {
            // to share to twitter ,force select the only twitter profile
            personaManager.setProfileSelected(profile: currentTwitterProfiles[0])
            return true
        } else {
            coordinator.present(scene: .luckDropSelectProfile(callback: {[weak self] in
                self?.reShare()
            }), transition: .modal())
            return false
        }
    }
}
