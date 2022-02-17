//
//  SendNftTokenViewModel.swift
//  Maskbook
//
//  Created by caiyu on 2021/7/20.
//  Copyright © 2021 dimension. All rights reserved.
//

import BigInt
import Combine
import CoreDataStack
import Foundation
import web3swift

extension SendNFTTokenViewController {
    enum ButtonStatus {
        case approve
        case password
        case faceId
    }
}

// swiftlint:disable line_length
class SendNftTokenViewModel {
    let isShowBioIDPage = CurrentValueSubject<Bool, Never>(maskUserDefaults.enableBiometryID)
    let gasLimitPublisher = CurrentValueSubject<BigUInt, Never>(BigUInt(21_000))
    let gasPricePublisher = CurrentValueSubject<BigUInt?, Never>(nil)
    let maxFeePerGasPublisher = CurrentValueSubject<BigUInt?, Never>(nil)
    let maxInclusionFeePerGasPublisher = CurrentValueSubject<BigUInt?, Never>(nil)
    let selectedTokenPublisher = CurrentValueSubject<Collectible?, Never>(nil)
    let gasFeeTokenTokenPublisher = CurrentValueSubject<Token?, Never>(nil)
    let gasFeeNetModelTokenPublisher = CurrentValueSubject<GasFeeCellItem?, Never>(nil)
    
    @InjectedProvider(\.walletConnectClient)
    private var walletConnectClient
    
    init(token: Collectible) {
        let gasFeeToken = WalletAssetManager.shared.getDefaultMainToken()
        
        self.gasLimitPublisher.value = BigUInt(21_000)
        self.gasPricePublisher.value = BigUInt(5)
        self.selectedTokenPublisher.value = token
        self.gasFeeTokenTokenPublisher.value = gasFeeToken
    }
    
    func sendTransaction(
        password: String,
        toAddress: String,
        fromAddress: String,
        _ completion: @escaping (Result<EthereumTransaction?, Error>) -> Void) {
            guard let token = selectedTokenPublisher.value else {
                completion(.failure(WalletSendError.contractError))
                return
            }
            
            guard let gasPrice = gasPricePublisher.value else {
                completion(.failure(WalletSendError.amountError))
                return
            }
            
            guard let contractAddress = token.address else {
                completion(.failure(WalletSendError.contractError))
                return
            }
            
            if maskUserDefaults.network == .eth && maxFeePerGasPublisher.value == nil {
                maxFeePerGasPublisher.value = Web3.Utils.parseToBigUInt(gasFeeNetModelTokenPublisher.value?.suggestedMaxFeePerGas ?? "200", units: .Gwei)
                maxInclusionFeePerGasPublisher.value = Web3.Utils.parseToBigUInt(gasFeeNetModelTokenPublisher.value?.suggestedMaxPriorityFeePerGas ?? "2", units: .Gwei)
            }
                        
            if let currentAccount = WalletCoreService.shared.getCurrentAccount(),
               currentAccount.fromWalletConnect {
                walletConnectClient.sendErc721Token(gasLimit: gasLimitPublisher.value,
                                              gasPrice: gasPrice,
                                              token: token,
                                              contractAddress: contractAddress,
                                              fromAddress: fromAddress,
                                              toAddress: toAddress,
                                              network: maskUserDefaults.network,
                                              completion)
            } else {
                WalletSendHelper.sendErc721Token(
                    password: password,
                    gasLimit: gasLimitPublisher.value,
                    gasPrice: gasPricePublisher.value,
                    maxFeePerGas: maxFeePerGasPublisher.value,
                    maxInclusionFeePerGas: maxInclusionFeePerGasPublisher.value,
                    token: token,
                    contractAddress: contractAddress,
                    fromAddress: fromAddress,
                    toAddress: toAddress,
                    network: maskUserDefaults.network,
                    completion
                )
            }
        }
}
