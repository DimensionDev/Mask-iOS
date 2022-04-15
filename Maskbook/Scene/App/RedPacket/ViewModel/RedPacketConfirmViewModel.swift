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

class RedPacketConfirmViewModel: NSObject, ObservableObject {
    @Published var gasFeeItem: GasFeeCellItem?
    @Published var inputParam: HappyRedPacketV4.CreateRedPacketInput?
    @Published var token: Token?
    @Published var buttonState: ConfirmButtonState = .normal
    
    var gasFeeViewModel: GasFeeViewModel?
    var transaction: EthereumTransaction?
    var completion: ((String?, Error?) -> Void)?
    var options: TransactionOptions?
    
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
    
    var totalAmount: String {
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
        
        let symbol = maskUserDefaults.currency.symbol
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
        guard let gasLimitStr = gasFeeViewModel?.gasFeePublisher.value?.gasLimit else {
            return BigUInt(21_000)
        }
        return BigUInt(gasLimitStr) ?? BigUInt(21_000)
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
    
    init(
        token: Token?,
        gasFeeViewModel: GasFeeViewModel?,
        inputParam: HappyRedPacketV4.CreateRedPacketInput?,
        transaction: EthereumTransaction?,
        options: TransactionOptions?,
        completion: ((String?, Error?) -> Void)?
    ) {
        self.token = token
        self.gasFeeViewModel = gasFeeViewModel
        self.inputParam = inputParam
        self.options = options
        self.transaction = transaction
        self.completion = completion
        
        super.init()
        
        gasFeeViewModel?.confirmedGasFeePublisher
            .removeDuplicates()
            .filter({ $0 != nil })
            .assign(to: \.gasFeeItem, on: self)
            .store(in: &disposeBag)
    }
    
    func onConfirm() {
        buttonState = .sending
        vault.getWalletPassword()
            .sink(receiveCompletion: { _ in }) { [weak self] password in
                self?.sendTransaction(password: password) { [weak self] result in
                    DispatchQueue.main.async {
                        switch result {
                        case .success(let txHash): self?.completion?(txHash, nil)
                            
                        case .failure(let error):
                            log.error("send failed: \(error)", source: "lucky drop")
                            self?.completion?(nil, error)
                        }
                        self?.buttonState = .normal
                    }
                }
            }
            .store(in: &disposeBag)
    }
    
    private func sendTransaction(
        password: String,
        _ completion: @escaping (Swift.Result<String, Error>) -> Void)
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
        
        if fromAccount.fromWalletConnect {
            walletConnectClient.signTransaction(transaction: transaction,
                                                transactionOptions: transactionOptions,
                                                completion)
        } else {
            let maxFeePerGas = Web3.Utils.parseToBigUInt(gasFeeItem.suggestedMaxFeePerGas, units: .Gwei)
            let maxInclusionFeePerGas = Web3.Utils.parseToBigUInt(
                gasFeeItem.suggestedMaxPriorityFeePerGas,
                units: .Gwei
            )
            WalletSendHelper.sendTransactionWithWeb3(
                password: password,
                transaction: transaction,
                transactionOptions: transactionOptions,
                maxFeePerGas: maxFeePerGas == 0 ? nil : maxFeePerGas,
                maxInclusionFeePerGas: maxInclusionFeePerGas == 0 ? nil : maxInclusionFeePerGas,
                network: maskUserDefaults.network,
                completion)
        }
    }
}

extension RedPacketConfirmViewModel {
    enum ConfirmButtonState {
        case normal
        case sending
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
    
    override var totalAmount: String {
        "2,000.0000 DAI"
    }
    
    override var tokenIconURL: URL? {
         URL(string: "https://s2.coinmarketcap.com/static/img/coins/64x64/4943.png")
    }
    
    init() {
        super.init(
            token: nil,
            gasFeeViewModel: nil,
            inputParam: nil,
            transaction: nil,
            options: nil,
            completion: nil)
    }
}
