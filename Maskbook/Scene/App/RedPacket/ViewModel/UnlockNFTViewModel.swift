//
//  UnlockNFTViewModel.swift
//  Maskbook
//
//  Created by caiyu on 2022/7/23.
//  Copyright © 2022 dimension. All rights reserved.
//

import BigInt
import Combine
import CoreDataStack
import Foundation
import web3swift

class UnlockNFTViewModel: ObservableObject {
    @Published var gasFeeItem: GasFeeCellItem?
    @Published var groupInfo: CollectiableGroup?
    @Published var buttonState: ConfirmButtonState = .normal
    var completion: ((String?, Error?) -> Void)?

    var gasFeeViewModel: GasFeeViewModel?

    @InjectedProvider(\.userDefaultSettings)
    var userSetting

    @InjectedProvider(\.walletAssetManager)
    private var walletAssetManager: WalletAssetManager

    @InjectedProvider(\.vault)
    var vault

    @InjectedProvider(\.userDefaultSettings)
    private var settings
    @InjectedProvider(\.walletConnectClient)
    private var walletConnectClient

    private var disposeBag = Set<AnyCancellable>()

    var isSending: Bool {
        buttonState == .sending
    }

    var tokenName: String {
        guard let name = groupInfo?.name else {
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
        guard let contract = groupInfo?.address else {
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
        gasFeeViewModel?.gasLimitPublisher.value ?? BigUInt(10000)
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
            gasPrice = "~\(symbol)\(EthUtil.getGasFeeFiat(gwei: gasFeeItem.gWei, gasLimit: gasLimit.description, price: tokenPrice))"
        }

        return "\(gasPrice) \(symbol)"
    }

    init(
        gasFeeViewModel: GasFeeViewModel,
        gasFeeItem: GasFeeCellItem,
        collectibleGroup: CollectiableGroup,
        completion: ((String?, Error?) -> Void)?
    ) {
        self.gasFeeViewModel = gasFeeViewModel
        self.gasFeeItem = gasFeeItem
        groupInfo = collectibleGroup
        self.completion = completion
        requestEstimateGasLimit()
    }

    @MainActor
    func onConfirm() {
        buttonState = .sending
        unlockNFT() { [weak self] result in
            DispatchQueue.main.async {
                switch result {
                case .success(let txHash):
                    self?.completion?(txHash, nil)
                    self?.completion = nil
                    
                case .failure(let error):
                    log.error("send failed: \(error)", source: "lucky drop")
                    self?.completion?(nil, error)
                    self?.completion = nil
                }
                self?.buttonState = .normal
            }
        }
    }

    @MainActor
    private func unlockNFT(_ completion: @escaping (Swift.Result<String, Error>) -> Void)
    {
        guard let fromAddress = userSetting.defaultAccountAddress else {
            completion(.failure(WalletSendError.addressError))
            return
        }

        guard let fromAccount = WalletCoreService.shared.getAccount(address: fromAddress) else {
            completion(.failure(WalletSendError.addressError))
            return
        }

        guard let contractAddress = groupInfo?.address else {
            return
        }

        guard let gasFeeItem = gasFeeItem else {
            return
        }

        guard let gasFeeViewModel = gasFeeViewModel else {
            return
        }

        guard let gasPrice = Web3.Utils.parseToBigUInt(gasFeeItem.gWei, units: .Gwei) else {
            return
        }

        guard let priorityFee = Web3.Utils.parseToBigUInt(gasFeeItem.suggestedMaxPriorityFeePerGas, units: .Gwei) else {
            return
        }

        guard let maxFee = Web3.Utils.parseToBigUInt(gasFeeItem.suggestedMaxFeePerGas, units: .Gwei) else {
            return
        }

        let completionWrapper: (Swift.Result<String, Error>) -> Void = { [weak self] result in
            switch result {
            case let .success(hash):
                completion(.success(hash))

            case let .failure(error):
                DispatchQueue.main.async {
                    self?.buttonState = .normal
                    let alertController = AlertController(
                        title: "",
                        message: error.errorDescription,
                        confirmButtonText: L10n.Common.Controls.done,
                        imageType: .error,
                        confirmButtonClicked: { _ in
                            completion(.failure(error))
                        }
                    )
                    Coordinator.main.present(
                        scene: .alertController(alertController: alertController),
                        transition: .alertController(completion: nil)
                    )
                }
            }
        }

        let maxFeePerGas = Web3.Utils.parseToBigUInt(gasFeeItem.suggestedMaxFeePerGas, units: .Gwei)
        let maxInclusionFeePerGas = Web3.Utils.parseToBigUInt(
            gasFeeItem.suggestedMaxPriorityFeePerGas,
            units: .Gwei
        )

        vault.getWalletPassword()
            .sink(receiveCompletion: { _ in }) { [weak self] password in
                // should run in main thread!
                guard let self = self else {
                    return
                }

                WalletSendHelper.setApproveAll(password: password, gasLimit: gasFeeViewModel.gasLimitPublisher.value, gasPrice: gasPrice, maxFeePerGas: maxFeePerGas == 0 ? nil : maxFeePerGas, maxInclusionFeePerGas: maxInclusionFeePerGas == 0 ? nil : maxInclusionFeePerGas, contractAddress: contractAddress, fromAddress: fromAddress, network: self.settings.network, completionWrapper)
            }
            .store(in: &disposeBag)
    }

    private func requestEstimateGasLimit() {
        guard let provider = Web3ProviderFactory.provider else {
            return
        }

        guard let web3Provier = Web3ProviderFactory.provider?.eth else {
            return
        }

        guard let contractAddressEthFormat = EthereumAddress(contractAddress) else {
            return
        }

        guard let fromAddressEthFormat = EthereumAddress(address) else {
            return
        }

        DispatchQueue.global().async {
            let erc721 = ERC721(web3: provider, provider: provider.provider, address: contractAddressEthFormat)

            let preTransacation = try? erc721.setApprovalForAll(from: fromAddressEthFormat, operator: contractAddressEthFormat, approved: true)

            guard let preTransacation = preTransacation else {
                return
            }

            let transacationResult = try? preTransacation.assemble()

            guard let transacationResult = transacationResult else {
                return
            }

            _ = web3Provier.estimateGasPromise(transacationResult, transactionOptions: TransactionOptions.defaultOptions)
                .done { [weak self] gaslimit in

                    DispatchQueue.main.async {
                        self?.gasFeeViewModel?.gasLimitPublisher.accept(gaslimit)
                    }
                }
                .catch { _ in
                }
        }
    }
}

extension UnlockNFTViewModel {
    enum ConfirmButtonState {
        case normal
        case sending
    }
}
