//
//  NFTNFTRedPacketConfirmViewModel.swift
//  Maskbook
//
//  Created by xiaojian sun on 2022/7/25.
//  Copyright © 2022 dimension. All rights reserved.
//

import BigInt
import Combine
import CoreDataStack
import Foundation
import web3swift

class NFTRedPacketConfirmViewModel: ObservableObject {
    @Published var gasFeeItem: GasFeeCellItem?
    @Published var inputParam: NFTRedPacketABI.CreateNFTRedPacketInput?
    @Published var buttonState: ConfirmButtonState = .normal
    
    var gasFeeViewModel: GasFeeViewModel?
    var transaction: EthereumTransaction?
    var options: TransactionOptions?
    var completion: ((String?, Error?) -> Void)?
    
    var tokenIconURL: URL? {
        //TODO collection url
        nil
    }
    
    var message: String {
        inputParam?.message ?? ""
    }
    
    var totalAmount: NSDecimalNumber {
        return NSDecimalNumber(integerLiteral: inputParam?.erc721TokenIDs.count ?? 0)
    }
    
    var gasFeeInfo: String {
        guard let gasFeeItem = gasFeeItem else {
            return ""
        }
        
        guard let gasLimt = gasFeeViewModel?.localGasFeeModel?.gasLimit else {
            return ""
        }
        
        let token = WalletAssetManager.shared.getDefaultMainToken()
        guard let tokenPrice = token?.price as? Double else {
            return ""
        }
        
        let symbol = settings.currency.symbol
        let gwei = gasFeeItem.gWei
        let gasPriceDoubleValue = Double(EthUtil.getGasFeeFiat(gwei: gwei, gasLimit: gasLimt, price: tokenPrice)) ?? 0
        var gasPrice: String
        if gasPriceDoubleValue < 0.01 {
            gasPrice = "< \(symbol)0.01"
        } else {
            gasPrice = "~\(symbol)\(EthUtil.getGasFeeFiat(gwei: gwei, gasLimit: gasLimt, price: tokenPrice))"
        }
        let time = gasFeeItem.shortCostTime
        
        return "\(gasPrice) (\(time))"
    }
    
    var gasLimit: BigUInt {
        gasFeeViewModel?.gasLimitPublisher.value ?? BigUInt(21_000)
    }
    
    var address: String {
        options?.from?.address ?? ""
    }
    
    var isSending: Bool {
        buttonState == .sending
    }
    
    @InjectedProvider(\.userDefaultSettings)
    private var settings
    @InjectedProvider(\.walletConnectClient)
    private var walletConnectClient
    @InjectedProvider(\.vault)
    var vault
    private let viewContext = AppContext.shared.coreDataStack.persistentContainer.viewContext
    private var disposeBag = Set<AnyCancellable>()
    
    init(param: InitInput?, completion: ((String?, Error?) -> Void)?) {
        self.gasFeeViewModel = param?.gasFeeViewModel
        self.inputParam = param?.createRedPacketInput
        self.options = param?.options
        self.transaction = param?.transaction
        self.completion = completion
        
        gasFeeViewModel?.confirmedGasFeePublisher
            .removeDuplicates()
            .filter({ $0 != nil })
            .assign(to: \.gasFeeItem, on: self)
            .store(in: &disposeBag)
        
        requestEstimateGasLimit()
    }
    
    @MainActor
    func onConfirm() {
        buttonState = .sending
        sendTransaction() { [weak self] result in
            DispatchQueue.main.async {
                switch result {
                case .success(let txHash):
                    self?.completion?(txHash, nil)
                    self?.completion = nil
                    
                case .failure(let error):
                    log.error("send failed: \(error)", source: "lucky drop")
                    self?.completion?(nil, error)
                    self?.completion = nil
                }
                self?.buttonState = .normal
            }
        }
    }
    
    @MainActor
    private func sendTransaction(_ completion: @escaping (Swift.Result<String, Error>) -> Void)
    {
        guard let transaction = transaction else {
            completion(.failure(WalletSendError.contractError))
            return
        }

        guard let fromAddress = options?.from?.address else {
            completion(.failure(WalletSendError.addressError))
            return
        }

        guard let fromAccount = WalletCoreService.shared.getAccount(address: fromAddress) else {
            completion(.failure(WalletSendError.addressError))
            return
        }

        guard let gasFeeItem = gasFeeItem else {
            return
        }
        
        guard var transactionOptions = options else {
            return
        }
        
        if let gasLimit = BigUInt(gasFeeItem.gasLimit) {
            transactionOptions.gasLimit = .manual(gasLimit)
        } else {
            transactionOptions.gasLimit = .automatic
        }
        
        if let gasPrice = Web3.Utils.parseToBigUInt(gasFeeItem.gWei, units: .Gwei) {
            transactionOptions.gasPrice = .manual(gasPrice)
        } else {
            transactionOptions.gasPrice = .automatic
        }
        
        transactionOptions.type = self.settings.network.isSupport1559GasFee ? .eip1559 : nil
        if let priorityFee = Web3.Utils.parseToBigUInt(gasFeeItem.suggestedMaxPriorityFeePerGas, units: .Gwei) {
            transactionOptions.maxPriorityFeePerGas = .manual(priorityFee)
        } else {
            transactionOptions.maxPriorityFeePerGas = .automatic
        }
        
        if let maxFee = Web3.Utils.parseToBigUInt(gasFeeItem.suggestedMaxFeePerGas, units: .Gwei) {
            transactionOptions.maxFeePerGas = .manual(maxFee)
        } else {
            transactionOptions.maxFeePerGas = .automatic
        }
        
        let completionWrapper: (Swift.Result<(String, BigUInt), Error>) -> Void = { [weak self] result in
            switch result {
            case .success((let txhash, let nonce)):
                guard let self = self else { return }
                guard let gasFeeItem = self.gasFeeItem,
                      let gwei = BigUInt(gasFeeItem.gWei),
                      let gasLimit = BigUInt(gasFeeItem.gasLimit)
                else {
                    return
                }
                let to = transaction.to.address
                let amount = self.totalAmount.stringValue
                
                let transactionInfo = PendingTransaction.TranscationInfo(
                    gaslimit: gasLimit,
                    gasPrice: gwei * (BigUInt(10).power(9)),
                    amount: amount,
                    toAddress: to,
                    gasNetModel: nil,
                    nftTokenAddr: self.inputParam?.tokenAddr,
                    erc721TokenIDs: self.inputParam?.erc721TokenIDs
                )
                PendingTransactionManager.shared.addPendingTrancation(
                    txHash: txhash,
                    history: nil,
                    transcationInfo:transactionInfo,
                    nonce: nonce)
                completion(.success(txhash))
                
            case .failure(let error):
                DispatchQueue.main.async {
                    self?.buttonState = .normal
                    let alertController = AlertController(
                        title: "",
                        message: error.errorDescription,
                        confirmButtonText: L10n.Common.Controls.done,
                        imageType: .error,
                        confirmButtonClicked: { _ in
                            completion(.failure(error))
                        })
                    Coordinator.main.present(
                        scene: .alertController(alertController: alertController),
                        transition: .alertController(completion: nil)
                    )
                }
            }
        }
        if fromAccount.fromWalletConnect {
            walletConnectClient.signTransaction(
                transaction: transaction,
                transactionOptions: transactionOptions,
                completionWrapper)
        } else {
            let maxFeePerGas = Web3.Utils.parseToBigUInt(gasFeeItem.suggestedMaxFeePerGas, units: .Gwei)
            let maxInclusionFeePerGas = Web3.Utils.parseToBigUInt(
                gasFeeItem.suggestedMaxPriorityFeePerGas,
                units: .Gwei
            )
            
            vault.getWalletPassword()
            .sink(receiveCompletion: { _ in }) { [weak self] password in
                // should run in main thread!
                guard let self = self else { return }
                
                WalletSendHelper.sendTransactionWithWeb3(
                    password: password,
                    transaction: transaction,
                    transactionOptions: transactionOptions,
                    maxFeePerGas: maxFeePerGas == 0 ? nil : maxFeePerGas,
                    maxInclusionFeePerGas: maxInclusionFeePerGas == 0 ? nil : maxInclusionFeePerGas,
                    network: self.settings.network,
                    completionWrapper)
            }
            .store(in: &disposeBag)
        }
    }
    
    private func requestEstimateGasLimit() {
        guard let web3Provier = Web3ProviderFactory.provider?.eth else { return }
        guard let transaction = transaction else { return }
        _ = web3Provier.estimateGasPromise(transaction, transactionOptions: options)
            .done { [weak self] gaslimit in
                self?.gasFeeViewModel?.gasLimitPublisher.accept(gaslimit)
            }
            .catch { _ in
            }
    }
}

extension NFTRedPacketConfirmViewModel {
    enum ConfirmButtonState {
        case normal
        case sending
    }
    
    struct InitInput {
        let gasFeeViewModel: GasFeeViewModel
        let createRedPacketInput: NFTRedPacketABI.CreateNFTRedPacketInput
        let transaction: EthereumTransaction
        let options: TransactionOptions
    }
}