//
//  PendTransactionManager.swift
//  Maskbook
//
//  Created by caiyu on 2022/4/7.
//  Copyright © 2022 dimension. All rights reserved.
//

import Foundation
import web3swift
import Combine
import BigInt

class PendTransactionManager {

//    private var pendList:[PendTransactionModel] = []
    private var timer: Timer?
    public static let shared = PendTransactionManager()
    var pendingTxFinishEvents = PassthroughSubject<(transcation: PendTransactionModel, status: TransactionHistory.TransactionStatus), Error>()
    
    public var pendTransactions: CurrentValueSubject<[PendTransactionModel], Never> = CurrentValueSubject([])

    private func start() {
        guard timer?.isValid != true else {
            return
        }
        timer = Timer.scheduledTimer(withTimeInterval: 5, repeats: true) { [weak self] _ in
            guard let self = self else { return }
            DispatchQueue.global().async { [weak self] in
                guard let self = self else { return }
                var pendList = self.pendTransactions.value
                guard let web3Provier = Web3ProviderFactory.provider?.eth else {
                    self.stop()
                    return
                }
                
                if pendList.isEmpty {
                    self.stop()
                }
                
                var removed: [PendTransactionModel] = []
                for pendingTransaction in pendList {
                    web3Provier.getTransactionReceiptPromise(pendingTransaction.txHash).done { transactionReceipt in
                        var transaction = pendingTransaction
                        transaction.transactionReceipt = transactionReceipt
                        switch transactionReceipt.status {
                        case .ok:
                            self.pendingTxFinishEvents.send((transcation: transaction, status: .confirmed))
                        case .notYetProcessed:
                            self.pendingTxFinishEvents.send((transcation: transaction, status: .pending))
                        case .failed:
                            self.pendingTxFinishEvents.send((transcation: transaction, status: .failed))
                        }
                        
                        if transactionReceipt.status != .notYetProcessed {
                            removed.append(pendingTransaction)
                        }
                    }
                }
                // FIXED: Never delete elements during iteration.
                pendList.removeAll { pendTransaction in
                    removed.contains { removedTransaction in
                        removedTransaction.txHash == pendTransaction.txHash
                    }
                }
                self.pendTransactions.send(pendList)
            }
        }
    }
    
    private func stop() {
        timer?.invalidate()
        timer = nil
    }
    
    public func addPendTrancation(txHash: String, history: TransactionHistory, transcationInfo: PendTransactionModel.TranscationInfo, nonce: BigUInt) {
        guard let address = maskUserDefaults.defaultAccountAddress else { return }
        
        var pendList = self.pendTransactions.value

        if pendList.contains(where: { $0.txHash == txHash }) { return }
        pendList.append(PendTransactionModel(address: address, networkId: Int64(maskUserDefaults.network.networkId), txHash: txHash, history: history, transactionInfo: transcationInfo, nonce: nonce))
        self.pendTransactions.send(pendList)
        start()
    }
        
}
