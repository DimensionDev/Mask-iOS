//
//  SendTransactionConfirmViewModel.swift
//  Maskbook
//
//  Created by caiyu on 2021/9/29.
//  Copyright © 2021 dimension. All rights reserved.
//

import BigInt
import Combine
import CoreDataStack
import Foundation
import web3swift

// swiftlint:disable line_length
class SendTransactionConfirmViewModel {
    let isShowBioIDPage = CurrentValueSubject<Bool, Never>(maskUserDefaults.enableBiometryID)
    let gasLimitPublisher = CurrentValueSubject<BigUInt, Never>(BigUInt(21_000))
    let gasPricePublisher = CurrentValueSubject<BigUInt?, Never>(nil)
    let maxFeePerGasPublisher = CurrentValueSubject<BigUInt?, Never>(nil)
    let maxInclusionFeePerGasPublisher = CurrentValueSubject<BigUInt?, Never>(nil)
    let selectedTokenPublisher = CurrentValueSubject<Token?, Never>(nil)
    let gasFeeNetModelTokenPublisher = CurrentValueSubject<GasFeeCellItem?, Never>(nil)

    @InjectedProvider(\.walletConnectClient)
    private var walletConnectClient
    
    init(selectedToken: Token?, gasPrice: BigUInt?, gasLimit: BigUInt, gasFeeNetModel: GasFeeCellItem?) {
        self.gasLimitPublisher.value = gasLimit
        self.gasPricePublisher.value = gasPrice
        self.selectedTokenPublisher.value = selectedToken
        self.gasFeeNetModelTokenPublisher.value = gasFeeNetModel
    }
    
    func sendTransaction(
        password: String,
        amount: String,
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
            
            if maskUserDefaults.network == .eth && maxFeePerGasPublisher.value == nil {
                maxFeePerGasPublisher.value = Web3.Utils.parseToBigUInt(gasFeeNetModelTokenPublisher.value?.suggestedMaxFeePerGas ?? "200", units: .Gwei)
                maxInclusionFeePerGasPublisher.value = Web3.Utils.parseToBigUInt(gasFeeNetModelTokenPublisher.value?.suggestedMaxPriorityFeePerGas ?? "2", units: .Gwei)
            }
            
            if let currentAccount = WalletCoreService.shared.getCurrentAccount(),
                currentAccount.fromWalletConnect {
                walletConnectClient.sendTransaction(token: token,
                                              gasLimit: gasLimitPublisher.value,
                                              gasPrice: gasPrice,
                                              amount: amount,
                                              toAddress: toAddress,
                                              fromAddress: fromAddress,
                                              network: maskUserDefaults.network,
                                              completion)
            } else {
                WalletSendHelper.sendTransaction(
                    password: password,
                    token: token,
                    gasLimit: gasLimitPublisher.value,
                    gasPrice: gasPricePublisher.value,
                    maxFeePerGas: maxFeePerGasPublisher.value,
                    maxInclusionFeePerGas: maxInclusionFeePerGasPublisher.value,
                    amount: amount,
                    toAddress: toAddress,
                    fromAddress: fromAddress,
                    network: maskUserDefaults.network,
                    completion
                )
            }
        }
}
