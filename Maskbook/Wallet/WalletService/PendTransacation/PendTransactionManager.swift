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


class PendTransactionManager {

    private var pendList:[PendTransactionModel] = []
    private var timer: Timer?
    var subscriptions: Set<AnyCancellable> = []

    private func start() {
        if !self.pendList.isEmpty {
            timer = Timer.scheduledTimer(withTimeInterval: 5, repeats: true) { _ in
                DispatchQueue.global().async {
                    guard let web3Provier = Web3ProviderFactory.provider?.eth else {
                        self.timer?.invalidate()
                        return
                    }
                    var newList = [PendTransactionModel]()
                    self.pendList.forEach { pendTransactionModel in
                        _ = web3Provier.getTransactionReceiptPromise(pendTransactionModel.txHash).done({ transactionReceipt in
                            if transactionReceipt.status == .notYetProcessed {
                                let model = PendTransactionModel(address: pendTransactionModel.address, networkId: pendTransactionModel.networkId, transactionReceipt: transactionReceipt, txHash: pendTransactionModel.txHash)
                                newList.append(model)
                            }
                        })
                    }
                    self.pendList = newList
                    if self.pendList.isEmpty {
                        self.stop()
                    }
                }
            }
        }
    }
    
    private func stop() {
        timer?.invalidate()
    }
    
    init() {
        
    }
    
    public func addPendTrancation(txHash: String) {
        guard let address = maskUserDefaults.defaultAccountAddress else { return }
        
        if pendList.contains(where: { $0.txHash == txHash }) { return }
        pendList.append(PendTransactionModel(address: address, networkId: Int64(maskUserDefaults.network.networkId), txHash: txHash))
        start()
    }
        
}
