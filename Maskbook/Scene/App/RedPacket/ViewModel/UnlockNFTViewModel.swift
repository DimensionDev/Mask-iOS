//
//  UnlockNFTViewModel.swift
//  Maskbook
//
//  Created by caiyu on 2022/7/23.
//  Copyright © 2022 dimension. All rights reserved.
//

import Foundation
import Combine
import CoreDataStack
import web3swift
import BigInt

class UnlockNFTViewModel: ObservableObject {
    @Published var gasFeeItem: GasFeeCellItem?
    @Published var token: Collectible?
    @Published var buttonState: ConfirmButtonState = .normal
    var completion: ((String?, Error?) -> Void)?


    var gasFeeViewModel: GasFeeViewModel?
    var transaction: EthereumTransaction?
    var options: TransactionOptions?

    @InjectedProvider(\.userDefaultSettings)
    var userSetting
    
    @InjectedProvider(\.walletAssetManager)
    private var walletAssetManager: WalletAssetManager
    
    var isSending: Bool {
        buttonState == .sending
    }
    
    var tokenName: String {
        guard let name = token?.tokenName else {
            return ""
        }
        return name
    }
    
    var ensName: String? {
        
        guard let address = userSetting.defaultAccountAddress else {
            return nil
        }
        
        guard let account = WalletCoreStorage.getAccount(address: address) else {
            return nil
        }
        
        guard let ensName = account.ensName else {
            return nil
        }
           return ensName
    }
    
    var address: String {
        
        guard let address = userSetting.defaultAccountAddress else {
            return ""
        }
        
        return address
    }
    
    
    
    var contractAddress: String {
        guard let contract = token?.address else {
            return ""
        }
        
        return contract
    }
    
    var operatorUrl: URL {
        
        guard let address = userSetting.network.nftRedPacketAddress else {
            return URL(string: "https://etherscan.io/address/0x8d285739523FC2Ac8eC9c9C229ee863C8C9bF8C8")!
        }
        
        guard let url = maskUserDefaults.network.getAddressUrl(address: address) else {
            return URL(string: "https://etherscan.io/address/0x8d285739523FC2Ac8eC9c9C229ee863C8C9bF8C8")!
        }
        return url
    }
    
    var gasLimit: BigUInt {
        gasFeeViewModel?.gasLimitPublisher.value ?? BigUInt(10_000)
    }
    
    var gasFeeInfo: String {
        guard let gasFeeItem = gasFeeItem else {
            return ""
        }
        
        guard let symbol = walletAssetManager.getDefaultMainToken()?.symbol else {
            return ""
        }
        
        let gasPrice = EthUtil.getGasFeeToken(gwei: gasFeeItem.gWei, gasLimit: gasLimit.description)
        
        return "\(gasPrice) \(symbol)"
        
    }
    
    var totalAmount: String {
        guard let gasFeeItem = gasFeeItem else {
            return ""
        }
        
        guard let tokenPrice = walletAssetManager.getDefaultMainToken()?.price as? Double else {
            return ""
        }
        let symbol = userSetting.currency.symbol

        let gasPriceDoubleValue = Double(EthUtil.getGasFeeFiat(gwei: gasFeeItem.gWei, gasLimit: gasLimit.description, price: tokenPrice)) ?? 0
        var gasPrice: String
        if gasPriceDoubleValue < 0.01 {
            gasPrice = "< \(symbol)0.01"
        } else {
            gasPrice = "~\(symbol)\(EthUtil.getGasFeeFiat(gwei:  gasFeeItem.gWei, gasLimit: gasLimit.description, price: tokenPrice))"
        }
        
        return "\(gasPrice) \(symbol)"
    }
    
    @MainActor
    func onConfirm() {
        buttonState = .sending

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

extension UnlockNFTViewModel {
    enum ConfirmButtonState {
        case normal
        case sending
    }
    
}
