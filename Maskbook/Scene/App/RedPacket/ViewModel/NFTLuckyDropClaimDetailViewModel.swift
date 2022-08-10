//
//  NFTLuckyDropClaimDetailViewModel.swift
//  Maskbook
//
//  Created by xiaojian sun on 2022/8/5.
//  Copyright © 2022 dimension. All rights reserved.
//

import Foundation
import BigInt

final class NFTLuckyDropClaimDetailViewModel: ObservableObject {
    let nftRedPacketABI = NFTRedPacketABI()
    let nftRedPacketSubgraph: NftRedPacketSubgraph

    @Published
    var claimState: [BigUInt: Bool] = [:]

    @Published
    var remainResult: NFTRedPacketABI.CheckERC721RemainIDsResult?
    init(
        nftRedPacketSubgraph: NftRedPacketSubgraph)
    {
        self.nftRedPacketSubgraph = nftRedPacketSubgraph
        nftRedPacketSubgraph.tokenIdstoBigUInt.forEach {
            claimState[$0] = false
        }
        checkRemainIds()
    }

    func checkRemainIds() {
        Task { @MainActor in
            self.remainResult = await nftRedPacketABI.checkERC721RemainIDs(redPacketId: nftRedPacketSubgraph.rpid)
            var claimState = self.claimState
            self.remainResult?.claimedErc721TokenIDs?.forEach {
                claimState[$0] = true
            }
            self.claimState = claimState
        }
    }
}
