//
//  SendConfirmViewModel.swift
//  Maskbook
//
//  Created by caiyu on 2021/7/8.
//  Copyright © 2021 dimension. All rights reserved.
//

import BigInt
import Combine
import CoreDataStack
import Foundation
import web3swift

// swiftlint:disable line_length
class SendConfirmViewModel {
    let isShowBioIDPage = CurrentValueSubject<Bool, Never>(maskUserDefaults.enableBiometryID)
    let gasLimitPublisher = CurrentValueSubject<BigUInt, Never>(BigUInt(21_000))
    let gasPricePublisher = CurrentValueSubject<BigUInt?, Never>(nil)
    let selectedTokenPublisher = CurrentValueSubject<Token?, Never>(nil)
    let gasFeeTokenTokenPublisher = CurrentValueSubject<Token?, Never>(nil)
    let gasFeeNetModelTokenPublisher = CurrentValueSubject<GasFeeCellItem?, Never>(nil)
    
    lazy var isWalletConnectAccount: Bool = {
        if let account = WalletCoreService.shared.getCurrentAccount() {
            return account.fromWalletConnect
        }
        return false
    }()
    init() {
        let token = WalletAssetManager.shared.getMainToken(network: maskUserDefaults.network, chainId: maskUserDefaults.network.chain.rawValue, networkId: Int(maskUserDefaults.network.networkId), context: AppContext.shared.coreDataStack.persistentContainer.viewContext)
        
        self.gasLimitPublisher.value = BigUInt(21_000)
        self.gasPricePublisher.value = BigUInt(5)
        self.selectedTokenPublisher.value = token
        self.gasFeeTokenTokenPublisher.value = token
    }
}
