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

final class PendTransactionManager {
    public static let shared = PendTransactionManager()

    private let hasPendingTranscation = CurrentValueSubject<Bool, Never>(false)
    private var cancelables = Set<AnyCancellable>()

    private(set) var pendingTxFinishEvents = PassthroughSubject<(transcation: PendTransactionModel, status: TransactionHistory.TransactionStatus), Error>()
    public private(set) var pendTransactions: CurrentValueSubject<[PendTransactionModel], Never> = CurrentValueSubject([])

    private final func start() {
        if hasPendingTranscation.value {
            return
        }

        // As the addPendingTrancation(_:,_:,_:,_:) normally is called on main queue
        // so start() function is called on main queue but stop will be called on global queue
        // so the Bool value `hasPendingTranscation` is not thread safe, use CurrentValueSubject as a wrapper
        hasPendingTranscation.accept(true)
        Timer.publish(every: 5, on: .main, in: .common)
            .autoconnect()
            .receive(on: DispatchQueue.global())
            .sink { [weak self] _ in
                guard let self = self else { return }
                guard let web3Provier = Web3ProviderFactory.provider?.eth else {
                    self.stop()
                    return
                }

                var pendList = self.pendTransactions.value
                if pendList.isEmpty { self.stop() }

                var removed: [PendTransactionModel] = []
                for pendingTransaction in pendList {
                    _ = web3Provier
                        .getTransactionReceiptPromise(pendingTransaction.txHash)
                        .done { transactionReceipt in
                            var transaction = pendingTransaction
                            transaction.transactionReceipt = transactionReceipt

                            self.pendingTxFinishEvents.send((
                                transcation: transaction,
                                status: transactionReceipt.status.transactionStatus
                            ))

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
            .store(in: &cancelables)
    }
    
    private final func stop() {
        cancelables = []
        // Note: release cancelable before change `hasPendingTranscation`
        hasPendingTranscation.accept(false)
    }

    // Note: normally this function will be called on main queue
    public final func addPendingTrancation(
        txHash: String,
        history: TransactionHistory,
        transcationInfo: PendTransactionModel.TranscationInfo,
        nonce: BigUInt
    ) {
        guard let address = maskUserDefaults.defaultAccountAddress else { return }

        var pendList = self.pendTransactions.value

        if pendList.contains(where: { $0.txHash == txHash }) { return }
        pendList.append(PendTransactionModel(address: address, networkId: Int64(maskUserDefaults.network.networkId), txHash: txHash, history: history, transactionInfo: transcationInfo, nonce: nonce))
        self.pendTransactions.send(pendList)
        start()
    }
}

extension TransactionReceipt.TXStatus {
    fileprivate var transactionStatus: TransactionHistory.TransactionStatus {
        switch self {
        case .failed: return .failed
        case .ok: return .confirmed
        case .notYetProcessed: return .pending
        }
    }
}
