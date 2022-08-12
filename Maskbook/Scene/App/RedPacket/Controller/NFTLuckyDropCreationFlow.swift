//
//  NFTLuckyDropCreationFlow.swift
//  Maskbook
//
//  Created by yzj on 2022/8/11.
//  Copyright © 2022 dimension. All rights reserved.
//

import Foundation

import BigInt
import web3swift

enum NFTLuckyDropCreationFlow {
    @MainActor
    static func createNFTLuckyDrop(
        draft: NftRecpacketDraft,
        txObserver: WalletBottomWidgetViewModel,
        gasFeeViewModel: GasFeeViewModel
    ) {
        guard let privateKey = SECP256K1.generatePrivateKey(),
              let publicKey = Web3.Utils.privateToPublic(privateKey),
              let publicKeyETH = Web3.Utils.publicToAddress(publicKey) else {
            return
        }

        let password = privateKey.toHexString().addHexPrefix()
        let duration = BigUInt(60 * 60 * 24)
        let randomStr = "\(Float.random(in: 0 ..< 1))"
        guard let seed = randomStr.data(using: .utf8)?.sha3(.keccak256) else {
            return
        }
        @InjectedProvider(\.personaManager)
        var personaManager
        @InjectedProvider(\.userDefaultSettings)
        var settings

        let senderName = personaManager.currentProfile.value?.userName
            ?? personaManager.currentPersona.value?.nickname
            ?? "Unknown User"

        let nftAddress = draft.collectibleGroup.address
        let collectionName = draft.collectibleGroup.name
        guard let logoURL = draft.collectibleGroup.groupIconURL?.absoluteString,
              let tokenAddr = EthereumAddress(nftAddress) else {
            return
        }

        guard let redPacketChainID = RedPacket.ChainId(rawValue: Int(settings.network.networkId)) else {
            return
        }

        let erc721TokenIDs = draft.collectibles.compactMap {
            $0.tokenId.flatMap { BigUInt($0) }
        }
        let param = NFTRedPacketABI.CreateNFTRedPacketInput(
            publicKey: publicKeyETH,
            duration: duration,
            seed: seed.bytes,
            message: draft.message,
            name: senderName,
            tokenAddr: tokenAddr,
            erc721TokenIDs: erc721TokenIDs
        )
        Task { [walletBottomViewModel = txObserver, gasFeeViewModel] in
            let tx = await ABI.nftRedPacketABI.createRedPacket(
                gasFeeViewModel: gasFeeViewModel,
                param: param,
                password: password
            )
            guard let tx = tx else {
                return
            }
            walletBottomViewModel.observeTransaction(txHash: tx)
            let payload = NftRedPacketPayload(
                id: nil,
                txid: tx,
                duration: duration.asDouble() ?? 0,
                message: draft.message,
                senderName: senderName,
                contractName: collectionName,
                contractAddress: nftAddress,
                contractVersion: 1,
                contractTokenURI: logoURL,
                privateKey: password,
                chainId: redPacketChainID
            )

            PluginStorageRepository.save(
                chain: settings.network,
                txHash: tx,
                nftPayload: payload
            )
        }
    }
}
