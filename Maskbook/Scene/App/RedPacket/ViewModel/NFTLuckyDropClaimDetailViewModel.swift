//
//  NFTLuckyDropClaimDetailViewModel.swift
//  Maskbook
//
//  Created by xiaojian sun on 2022/8/5.
//  Copyright © 2022 dimension. All rights reserved.
//

import BigInt
import CoreDataStack
import Foundation
import SwiftUI

struct CollectibleClaimState: Identifiable {
    let tokenId: String
    var isClaimed: Bool = false
    var collectible: Collectible?
    
    var id: String {
        tokenId
    }
}

final class NFTLuckyDropClaimDetailViewModel: ObservableObject {
    let nftRedPacketABI = NFTRedPacketABI()
    let nftRedPacketSubgraph: NftRedPacketSubgraph

    @Published
    var claimStates: [CollectibleClaimState] = []

    @Published
    var remainResult: NFTRedPacketABI.CheckERC721RemainIDsResult?
    
    @InjectedProvider(\.userDefaultSettings)
    private var userSettings
    
    init(
        nftRedPacketSubgraph: NftRedPacketSubgraph)
    {
        self.nftRedPacketSubgraph = nftRedPacketSubgraph
        claimStates = nftRedPacketSubgraph.tokenIds.map { tokenId in
            CollectibleClaimState(tokenId: tokenId)
        }
        checkRemainIds()
        queryCollectible()
    }

    func checkRemainIds() {
        Task { @MainActor in
            self.remainResult = await nftRedPacketABI.checkERC721RemainIDs(redPacketId: nftRedPacketSubgraph.rpid)
            self.remainResult?.claimedErc721TokenIDs?.forEach {
                let tokenId = $0.description
                var claimsState = claimStates.first {
                    $0.tokenId == tokenId
                }
                claimsState?.isClaimed = true
            }
            self.objectWillChange.send()
        }
    }
    
    func queryCollectible() {
        let newStates = claimStates.map { state -> CollectibleClaimState in
            let collectible = CollectibleRepository.queryCollectible(
                contractAddress: nftRedPacketSubgraph.contractAddress,
                network: userSettings.network,
                tokenId: state.tokenId
            )
            return CollectibleClaimState(tokenId: state.tokenId, isClaimed: state.isClaimed, collectible: collectible)
        }
        
        self.claimStates = newStates
    }
}
