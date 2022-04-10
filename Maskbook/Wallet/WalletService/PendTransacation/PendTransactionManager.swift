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

    private var pendList:[PendTransactionModel] = []
    private var timer: Timer?
    var subscriptions: Set<AnyCancellable> = []
    public static let shared = PendTransactionManager()
    
    public var pendTransactions: CurrentValueSubject<[PendTransactionModel], Never> = CurrentValueSubject([])

    private func start() {
            timer = Timer.scheduledTimer(withTimeInterval: 5, repeats: true) { _ in
                DispatchQueue.global().async {
                    guard let web3Provier = Web3ProviderFactory.provider?.eth else {
                        self.timer?.invalidate()
                        return
                    }
                    
                    if self.pendList.isEmpty {
                        self.timer?.invalidate()
                    }
                    
                    for (index, pendingTranscation) in self.pendList.enumerated() {
                        web3Provier.getTransactionReceiptPromise(pendingTranscation.txHash).done { transactionReceipt in
                            if transactionReceipt.status != .notYetProcessed {
                                self.pendList.remove(at: index)
                            }
                            self.pendTransactions.send(self.pendList)
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
        
        if pendList.contains(where: { $0.txHash == txHash }) { return }
        pendList.append(PendTransactionModel(address: address, networkId: Int64(maskUserDefaults.network.networkId), txHash: txHash, history: history, transactionInfo: transcationInfo, nonce: nonce))
        self.pendTransactions.send(pendList)
        start()
    }
        
}
