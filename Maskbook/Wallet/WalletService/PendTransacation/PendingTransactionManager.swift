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

final class PendingTransactionManager {
    public static let shared = PendingTransactionManager()

    private let hasPendingTranscation = CurrentValueSubject<Bool, Never>(false)
    private var cancelables = Set<AnyCancellable>()

    private let transactionReceiptSignal = PassthroughSubject<(TransactionReceipt, String), Never>()

    private let pendingTxEvents = PassthroughSubject<(transcation: PendingTransaction, status: TransactionHistory.TransactionStatus), Never>()
    private var txStatusCancelables = Set<AnyCancellable>()

    var pendingTxFinishEvents: AnyPublisher<(transcation: PendingTransaction, status: TransactionHistory.TransactionStatus), Never> {
        pendingTxEvents
            .share()
            .eraseToAnyPublisher()
    }

    public let pendingTransactions = CurrentValueSubject<[PendingTransaction], Never>([])

    private var scheduleQueue: DispatchQueue {
        // this should always have value
        Web3ProviderFactory.provider?.requestDispatcher.queue ?? DispatchQueue.global()
    }

    init() {
        transactionReceiptSignal
            .receive(on: scheduleQueue)
            .sink { [weak self] (txReceipt, txHash) in
                guard let self = self else { return }
                let txList = self.pendingTransactions.value

                for tx in txList where tx.txHash == txHash {
                    var tx = tx
                    tx.transactionReceipt = txReceipt
                    self.pendingTxEvents.send((tx, txReceipt.status.transactionStatus))
                }

                if txReceipt.status.succeedOrFailed {
                    let pendingTransactions = self.pendingTransactions.value.filter { $0.txHash != txHash }
                    self.pendingTransactions.accept(pendingTransactions)
                }
            }
            .store(in: &txStatusCancelables)
    }

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
            .receive(on: scheduleQueue)
            .sink { [weak self] _ in
                guard let self = self else { return }
                guard let web3Provier = Web3ProviderFactory.provider?.eth else {
                    return
                }

                let pendList = self.pendingTransactions.value.map(\.txHash)
                if pendList.isEmpty { self.stop() }

                for txHash in pendList {
                    _ = web3Provier
                        .getTransactionReceiptPromise(txHash)
                        .done { [weak self] transactionReceipt in
                            self?.transactionReceiptSignal.send((transactionReceipt, txHash))
                        }
                }
            }
            .store(in: &cancelables)
    }
    
    private final func stop() {
        cancelables = []
        // Note: release cancelable before change `hasPendingTranscation`
        hasPendingTranscation.accept(false)
    }

    // Note: normally this function will be called on main queue
    
    /// addPendingTrancation
    /// - Parameters:
    ///   - txHash: txHash
    ///   - history: history ,NFT don't need history
    ///   - transcationInfo: transcationInfo
    ///   - nonce: nonce
    public final func addPendingTrancation(
        txHash: String,
        history: TransactionHistory?,
        transcationInfo: PendingTransaction.TranscationInfo,
        nonce: BigUInt
    ) {
        guard let address = maskUserDefaults.defaultAccountAddress else { return }

        var pendList = self.pendingTransactions.value

        if pendList.contains(where: { $0.txHash == txHash }) { return }
        pendList.append(
            .init(
                address: address,
                network: maskUserDefaults.network,
                txHash: txHash,
                history: history,
                transactionInfo: transcationInfo,
                nonce: nonce
            )
        )
        self.pendingTransactions.send(pendList)
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

    var succeedOrFailed: Bool {
        switch self {
        case .notYetProcessed: return false
        case .ok, .failed: return true
        }
    }
}
