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
            timer = Timer.scheduledTimer(withTimeInterval: 5, repeats: true) { _ in
                DispatchQueue.global().async {
                    var pendList = self.pendTransactions.value
                    guard let web3Provier = Web3ProviderFactory.provider?.eth else {
                        self.stop()
                        return
                    }
                    
                    if pendList.isEmpty {
                        self.stop()
                    }
                    
                    for (index, pendingTransaction) in pendList.enumerated() {
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
                                pendList.remove(at: index)
                            }
                            self.pendTransactions.send(pendList)
                        }
                    }
                }
            }
    }
    
    private func stop() {
        timer?.invalidate()
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
