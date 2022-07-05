//
//  WCRequestsHandler.swift
//  Maskbook
//
//  Created by sxiaojian on 2021/12/6.
//  Copyright © 2021 dimension. All rights reserved.
//

import Foundation
import SwiftyJSON
import UIKit
import WalletConnectSwift
import web3swift

// swiftlint:disable implicitly_unwrapped_optional
class WCRequestsHandler: RequestHandler {
    private weak var server: Server!
    
    init(server: Server) {
        self.server = server
    }

    let supportedWalletConnectRequests = [
        "eth_sendTransaction"
    ]

    func canHandle(request: Request) -> Bool {
        supportedWalletConnectRequests.contains(request.method)
    }

    func handle(request: Request) {
        guard let walletConnectTransaction = try? request.parameter(of: WalletConnectEthereumTransaction.self,
                                                                    at: 0) else { return }
        var options = TransactionOptions.defaultOptions
        options.from = walletConnectTransaction.from
        options.to = walletConnectTransaction.to
        options.value = walletConnectTransaction.value?.value ?? 0
        var transaction = EthereumTransaction(to: walletConnectTransaction.to, data: walletConnectTransaction.data.data)
        transaction.applyOptions(options)
        Coordinator.main.present(scene: .maskSendWalletConnectTransactionPopView(delegate: self,
                                                                                 transaction: transaction,
                                                                                 transactionOptions: options,
                                                                                 request: request),
                                 transition: .panModel(animated: true))
    }
}

extension WCRequestsHandler: WalletConnectSendResponseDelegate {
    func walletConnectTransactionResponse(response: Response) {
        server.send(response)
    }
}
