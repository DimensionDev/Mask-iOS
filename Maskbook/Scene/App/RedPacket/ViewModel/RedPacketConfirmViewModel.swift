//
//  RedPacketConfirmViewModel.swift
//  Maskbook
//
//  Created by Hugo L on 2022/4/14.
//  Copyright © 2022 dimension. All rights reserved.
//

import BigInt
import Combine
import CoreDataStack
import Foundation
import web3swift

class RedPacketConfirmViewModel: ObservableObject {
    @Published var gasFeeItem: GasFeeCellItem?
    @Published var inputParam: HappyRedPacketV4.CreateRedPacketInput?
    @Published var token: Token?
    @Published var buttonState: ConfirmButtonState = .normal
    
    var gasFeeViewModel: GasFeeViewModel?
    var transaction: EthereumTransaction?
    var options: TransactionOptions?
    var completion: ((String?, Error?) -> Void)?
    
    var tokenIconURL: URL? {
        guard let url = token?.logoUrl else { return nil }
        return URL(string: url)
    }
    
    var message: String {
        inputParam?.message ?? ""
    }
    
    var mode: RedPacket.RedPacketType {
        guard let input = inputParam else {
            return .average
        }
        
        if input.ifrandom {
            return .random
        } else {
            return .average
        }
    }
    
    var share: String {
        guard let input = inputParam else {
            return ""
        }
        
        return String(input.number)
    }
    
    var amountPerShare: String {
        guard let input = inputParam else {
            return ""
        }
        guard mode == .average else {
            return ""
        }
        guard let decimals = token?.decimal else {
            return ""
        }
        let quantityValue = NSDecimalNumber(string: String(input.totalTokens / input.number))
        guard quantityValue != .notANumber else {
            return ""
        }
        let quantityInt = quantityValue.dividing(by: NSDecimalNumber(mantissa: 1, exponent: decimals, isNegative: false))
        if quantityInt.doubleValue < 0.0001 {
            return "< 0.0001"
        }
        let roundBehavior = NSDecimalNumberHandler(roundingMode: .plain, scale: 4, raiseOnExactness: false, raiseOnOverflow: false, raiseOnUnderflow: false, raiseOnDivideByZero: false)
        return quantityInt.rounding(accordingToBehavior: roundBehavior).stringValue
    }
    
    var totalAmountDisplay: String {
        guard let input = inputParam else {
            return ""
        }
        guard let decimals = token?.decimal else {
            return ""
        }
        let quantityValue = NSDecimalNumber(string: String(input.totalTokens))
        guard quantityValue != .notANumber else {
            return ""
        }
        let quantityInt = quantityValue.dividing(by: NSDecimalNumber(mantissa: 1, exponent: decimals, isNegative: false))
        if quantityInt.doubleValue < 0.0001 {
            return "< 0.0001"
        }
        let roundBehavior = NSDecimalNumberHandler(roundingMode: .plain, scale: 4, raiseOnExactness: false, raiseOnOverflow: false, raiseOnUnderflow: false, raiseOnDivideByZero: false)
        return quantityInt.rounding(accordingToBehavior: roundBehavior).stringValue
    }
    
    var totalAmount: NSDecimalNumber {
        guard let input = inputParam else {
            return .zero
        }
        guard let decimals = token?.decimal else {
            return .zero
        }
        let quantityValue = NSDecimalNumber(string: String(input.totalTokens))
        guard quantityValue != .notANumber else {
            return .zero
        }
        let quantityInt = quantityValue.dividing(by: NSDecimalNumber(mantissa: 1, exponent: decimals, isNegative: false))
        let roundBehavior = NSDecimalNumberHandler(roundingMode: .plain, scale: 4, raiseOnExactness: false, raiseOnOverflow: false, raiseOnUnderflow: false, raiseOnDivideByZero: false)
        return quantityInt.rounding(accordingToBehavior: roundBehavior)
    }
    
    var gasFeeInfo: String {
        guard let gasFeeItem = gasFeeItem else {
            return ""
        }
        
        guard let gasLimt = gasFeeViewModel?.localGasFeeModel?.gasLimit else {
            return ""
        }
        
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
        self.token = param?.token
        self.gasFeeViewModel = param?.gasFeeViewModel
        self.inputParam = param?.inputParam
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
        
        let completionWrapper: (Swift.Result<(String, BigUInt), Error>) -> Void = { [weak self] result in
            switch result {
            case .success((let txhash, let nonce)):
                guard let self = self else { return }
                guard let gasFeeItem = self.gasFeeItem,
                      let gwei = BigUInt(gasFeeItem.gWei),
                      let gasLimit = BigUInt(gasFeeItem.gasLimit),
                      let token = self.token
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
                    token: token
                )
                let history = TransactionHistory(
                    txHash: txhash,
                    asset: token,
                    toAddress: to,
                    amount: amount)
                PendingTransactionManager.shared.addPendingTrancation(
                    txHash: txhash,
                    history: history,
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

extension RedPacketConfirmViewModel {
    enum ConfirmButtonState {
        case normal
        case sending
    }
    
    struct InitInput {
        let token: Token
        let gasFeeViewModel: GasFeeViewModel
        let inputParam: HappyRedPacketV4.CreateRedPacketInput
        let transaction: EthereumTransaction
        let options: TransactionOptions
    }
}

class RedPacketConfirmViewModelMock: RedPacketConfirmViewModel {
    override var message: String {
        "Happy New Year"
    }
    
    override var mode: RedPacket.RedPacketType {
        .average
    }
    
    override var share: String {
        "40"
    }
    
    override var amountPerShare: String {
        "2.0000"
    }
    
    override var totalAmountDisplay: String {
        "2,000.0000 DAI"
    }
    
    override var tokenIconURL: URL? {
         URL(string: "https://s2.coinmarketcap.com/static/img/coins/64x64/4943.png")
    }
    
    init() {
        super.init(param: nil, completion: nil)
    }
}
