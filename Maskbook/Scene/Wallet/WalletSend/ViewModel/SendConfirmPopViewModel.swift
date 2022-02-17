//
//  SendConfirmPopViewModel.swift
//  Maskbook
//
//  Created by caiyu on 2021/8/30.
//  Copyright © 2021 dimension. All rights reserved.
//

import BigInt
import Combine
import Foundation
import PromiseKit
import web3swift

class SendConfirmPopViewModel {
    let transactionPublisher = CurrentValueSubject<EthereumTransaction?, Never>(nil)
    let transactionOptionsPublisher = CurrentValueSubject<TransactionOptions?, Never>(nil)
    let isShowBioIDPage = CurrentValueSubject<Bool, Never>(maskUserDefaults.enableBiometryID)
    
    let gasLimitPublisher = CurrentValueSubject<BigUInt?, Never>(nil)
    let gasPricePublisher = CurrentValueSubject<BigUInt?, Never>(nil)
    let maxFeePerGasPublisher = CurrentValueSubject<BigUInt?, Never>(nil)
    let maxInclusionFeePerGasPublisher = CurrentValueSubject<BigUInt?, Never>(nil)
    var disposeBag = Set<AnyCancellable>()

    private var timer: Timer?
    
    @InjectedProvider(\.walletConnectClient)
    private var walletConnectClient

    init(transaction: EthereumTransaction, transactionOptions: TransactionOptions) {
        transactionPublisher.value = transaction
        transactionOptionsPublisher.value = transactionOptions
        guard let options = transactionOptionsPublisher.value else { return }
        switch options.gasLimit {
        case .limited(let gasLimit):
            transactionPublisher.value?.gasLimit = gasLimit
        default: break
        }
        
        fetchGasPrice()
    }
    
    init(transaction: EthereumTransaction, transactionOptions: TransactionOptions, resolver: Resolver<String>?) {
        transactionPublisher.value = transaction
        transactionOptionsPublisher.value = transactionOptions
        guard let options = transactionOptionsPublisher.value else { return }
        switch options.gasLimit {
        case .limited(let gasLimit):
            transactionPublisher.value?.gasLimit = gasLimit
        default: break
        }
        
        guard let web3Provier = Web3ProviderFactory.provider?.eth else { return }
        web3Provier.estimateGasPromise(transaction, transactionOptions: transactionOptions)
            .done { [weak self] gaslimit in
                self?.transactionPublisher.value?.gasLimit = gaslimit
            }
            .catch { [weak self]  _ in
                self?.transactionPublisher.value?.gasLimit = BigUInt(90_000)
            }
        fetchGasPrice()
    }
    
    func fetchGasPrice() {
        if maskUserDefaults.network == .eth {
            Timer.publish(every: 5, on: .main, in: .default)
                .autoconnect()
                .setFailureType(to: NetworkError.self)
                .flatMap { _ -> AnyPublisher<GasFeeModel, NetworkError> in
                    GasFeeApi.getGasFee()
                }
                .sink { completion in
                    switch completion {
                    case .finished: break

                    case .failure(let error):
                        print("Error: \(error)")
                    }
                } receiveValue: { [weak self] gasFeeModel in
                    let cellItem = GasFeeCellItem(gasFeeModel: gasFeeModel, type: .medium)
                    self?.maxFeePerGasPublisher.value = Web3.Utils.parseToBigUInt(cellItem.suggestedMaxFeePerGas, units: .Gwei)
                    self?.maxInclusionFeePerGasPublisher.value = Web3.Utils.parseToBigUInt(cellItem.suggestedMaxPriorityFeePerGas, units: .Gwei)
                }.store(in: &disposeBag)
        }
        timer = Timer.scheduledTimer(withTimeInterval: 5, repeats: true) { [weak self] _ in
            DispatchQueue.global().async {
                guard let web3Provier = Web3ProviderFactory.provider?.eth else { return }
                web3Provier.getGasPricePromise()
                    .done { [weak self] gasPrice in
                        self?.gasPricePublisher.value = gasPrice
                    }
                    .catch { error in
                        print(error)
                    }
            }
        }
    }
    
    func sendTransaction(
        password: String,
        _ completion: @escaping (Swift.Result<String, Error>) -> Void)
    {
        guard let transaction = transactionPublisher.value else {
            completion(.failure(WalletSendError.contractError))
            return
        }
        
        guard let transactionOptions = transactionOptionsPublisher.value else {
            completion(.failure(WalletSendError.contractError))
            return
        }
        
        guard let fromAddress = transactionOptions.from?.address else {
            completion(.failure(WalletSendError.addressError))
            return
        }
        
        guard let fromAccount = WalletCoreService.shared.getAccount(address: fromAddress) else {
            completion(.failure(WalletSendError.addressError))
            return
        }
            
        if fromAccount.fromWalletConnect {
            walletConnectClient.signTransaction(transaction: transaction,
                                                transactionOptions: transactionOptions,
                                                completion)
        } else {
            WalletSendHelper.sendTransactionWithWeb3(password: password,
                                                     transaction: transaction,
                                                     transactionOptions: transactionOptions,
                                                     maxFeePerGas: maxFeePerGasPublisher.value,
                                                     maxInclusionFeePerGas: maxInclusionFeePerGasPublisher.value,
                                                     network: maskUserDefaults.network,
                                                     completion)
        }
    }
    
    deinit {
        timer?.invalidate()
        timer = nil
    }
}
