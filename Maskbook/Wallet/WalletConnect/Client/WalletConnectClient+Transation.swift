//
//  WalletConnectClient+Transation.swift
//  Maskbook
//
//  Created by sxiaojian on 2021/10/18.
//  Copyright © 2021 dimension. All rights reserved.
//

import BigInt
import Combine
import CoreDataStack
import Foundation
import WalletConnectSwift
import web3swift

// swiftlint:disable function_parameter_count line_length function_body_length cyclomatic_complexity
extension WalletConnectClient {
    func signTransaction(
        transaction: EthereumTransaction,
        transactionOptions: TransactionOptions,
        nonce: BigUInt? = nil,
        _ completion: @escaping (Result<(String, BigUInt), Error>) -> Void) {
        guard let wcUrl = session?.url else {
            return
        }
        guard let provider = Web3ProviderFactory.provider else { completion(.failure(WalletSendError.unsupportedChainType))
            return
        }
        guard let fromAddress = transactionOptions.from?.address else {
            completion(.failure(WalletSendError.addressError))
            return
        }
        guard let fromAddressEthFormat = transactionOptions.from else {
            completion(.failure(WalletSendError.addressError))
            return
        }
        DispatchQueue.global().async { [weak self] in
            do {
                var nonceTemp: BigUInt
                if let nonce = nonce {
                    nonceTemp = nonce
                } else {
                    nonceTemp = try provider.eth.getTransactionCount(address: fromAddressEthFormat)
                }
                let nonceHex = nonceTemp.serialize().toHexStringWithPrefix()
                var gasLimitStr: String?
                switch transactionOptions.gasLimit {
                case .manual(let limit):
                    gasLimitStr = limit.serialize().toHexStringWithPrefix()
                        
                default:
                    gasLimitStr = transaction.parameters.gasLimit?.serialize().toHexStringWithPrefix()
                }
                
                var gasPriceStr: String?
                switch transactionOptions.gasPrice {
                case .manual(let gasPrice):
                    gasPriceStr = gasPrice.serialize().toHexStringWithPrefix()
                default:
                    gasPriceStr = transaction.parameters.gasPrice?.serialize().toHexStringWithPrefix()
                }
                
                var maxPriorityFeePerGas: String?
                switch transactionOptions.maxPriorityFeePerGas {
                case .manual(let maxPriorityFee):
                    maxPriorityFeePerGas = maxPriorityFee.serialize().toHexStringWithPrefix()
                default:
                    maxPriorityFeePerGas = transaction.parameters.maxPriorityFeePerGas?.serialize().toHexStringWithPrefix()
                }
                
                var maxFeePerGas: String?
                switch transactionOptions.maxFeePerGas {
                case .manual(let fee):
                    maxFeePerGas = fee.serialize().toHexStringWithPrefix()
                default:
                    maxFeePerGas = transaction.parameters.maxFeePerGas?.serialize().toHexStringWithPrefix()
                }
                
                var chainId: String?
                if let networkId = self?.userSetting.network.networkId {
                    chainId = "\(networkId)"
                }
                let wcTransaction =
                    Client.Transaction(from: fromAddress,
                                       to: transaction.to.address,
                                       data: transaction.data.toHexString().addHexPrefix(),
                                       gas: gasLimitStr,
                                       gasPrice: gasPriceStr,
                                       value: transaction.value.serialize().toHexStringWithPrefix(),
                                       nonce: nonceHex,
                                       type: transactionOptions.type?.description,
                                       accessList: nil,
                                       chainId: chainId,
                                       maxPriorityFeePerGas: maxPriorityFeePerGas,
                                       maxFeePerGas: maxFeePerGas)
                guard let client = self?.client else {
                    DispatchQueue.main.async {
                        completion(.failure(WalletSendError.walletConnectError()))
                    }
                    return
                }
                try client.eth_sendTransaction(url: wcUrl, transaction: wcTransaction) { response in
                    DispatchQueue.main.async {
                        if let hashString = try? response.result(as: String.self) {
                            completion(.success((hashString, nonceTemp)))
                        } else if let error = response.error {
                            completion(.failure(WalletSendError.walletConnectError(error)))
                        } else {
                            completion(.failure(WalletSendError.walletConnectError()))
                        }
                    }
                }
                WalletConnectClient.openInstalledWallet(with: fromAddress)
            } catch {
                DispatchQueue.main.async {
                    completion(.failure(WalletSendError.ethereumError(error)))
                }
                return
            }
        }
    }
    
    func sendTransaction(
        token: Token,
        gasLimit: BigUInt,
        gasPrice: BigUInt,
        amount: String,
        toAddress: String,
        fromAddress: String,
        network: BlockChainNetwork,
        _ completion: @escaping (Result<String?, Error>) -> Void) {
        guard let wcUrl = session?.url else {
            completion(.failure(WalletSendError.walletConnectError()))
            return
        }
            
        guard let provider = Web3ProviderFactory.provider else { completion(.failure(WalletSendError.unsupportedChainType))
            return
        }
            
        guard let toAddressEthFormat = EthereumAddress(toAddress) else {
            completion(.failure(WalletSendError.addressError))
            return
        }
            
        guard let fromAddressEthFormat = EthereumAddress(fromAddress) else {
            completion(.failure(WalletSendError.addressError))
            return
        }
        if token.isMainToken {
            DispatchQueue.global().async { [weak self] in
                do {
                    let nonce = try provider.eth.getTransactionCount(address: fromAddressEthFormat)
                    let wcTransaction =
                        Client.Transaction(from: fromAddress,
                                           to: toAddress,
                                           data: Data().toHexString().addHexPrefix(),
                                           gas: gasLimit.serialize().toHexStringWithPrefix(),
                                           gasPrice: gasPrice.serialize().toHexStringWithPrefix(),
                                           value: Web3.Utils.parseToBigUInt(amount, units: .eth)?.serialize().toHexStringWithPrefix() ?? "0x0",
                                           nonce: nonce.serialize().toHexStringWithPrefix(),
                                           type: nil,
                                           accessList: nil,
                                           chainId: "\(network.networkId)",
                                           maxPriorityFeePerGas: nil,
                                           maxFeePerGas: nil)
                    guard let client = self?.client else {
                        completion(.failure(WalletSendError.walletConnectError()))
                        return
                    }
                    WalletConnectClient.openInstalledWallet(with: fromAddress)
                    try client.eth_sendTransaction(url: wcUrl, transaction: wcTransaction) { response in
                        if let _ = try? response.result(as: String.self) {
                            completion(.success(nil))
                        } else if let error = response.error {
                            completion(.failure(WalletSendError.walletConnectError(error)))
                        } else {
                            completion(.failure(WalletSendError.walletConnectError()))
                        }
                    }
                } catch {
                    completion(.failure(WalletSendError.ethereumError(error)))
                    return
                }
            }
        } else {
            guard let tokenAddress = token.contractAddress else {
                completion(.failure(WalletSendError.contractError))
                return
            }

            guard let contractAddress = EthereumAddress(tokenAddress) else {
                completion(.failure(WalletSendError.contractError))
                return
            }
                
            guard let value = Web3.Utils.parseToBigUInt(amount, decimals: Int(token.decimal)) else {
                completion(.failure(WalletSendError.amountError))
                return
            }
            DispatchQueue.global().async { [weak self] in
                let preTransacation =
                    provider.eth.sendERC20tokensWithKnownDecimals(
                        tokenAddress: contractAddress,
                        from: fromAddressEthFormat,
                        to: toAddressEthFormat,
                        amount: value,
                        transactionOptions: TransactionOptions.defaultOptions)
                guard let transacation = preTransacation else {
                    completion(.failure(WalletSendError.contractError))
                    return
                }
                    
                do {
                    let transacationResult = try transacation.assemble()
                    do {
                        let nonce = try provider.eth.getTransactionCount(address: fromAddressEthFormat)
                        let wcTransaction =
                            Client.Transaction(from: fromAddress,
                                               to: tokenAddress,
                                               data: transacationResult.data.toHexString().addHexPrefix(),
                                               gas: gasLimit.serialize().toHexStringWithPrefix(),
                                               gasPrice: gasPrice.serialize().toHexStringWithPrefix(),
                                               value: "0x0",
                                               nonce: nonce.serialize().toHexStringWithPrefix(),
                                               type: nil,
                                               accessList: nil,
                                               chainId: nil,
                                               maxPriorityFeePerGas: nil,
                                               maxFeePerGas: nil)
                        guard let client = self?.client else {
                            completion(.failure(WalletSendError.walletConnectError()))
                            return
                        }
                        WalletConnectClient.openInstalledWallet(with: fromAddress)
                        try client.eth_sendTransaction(url: wcUrl, transaction: wcTransaction) { response in
                            if let _ = try? response.result(as: String.self) {
                                completion(.success(nil))
                            } else if let error = response.error {
                                completion(.failure(WalletSendError.walletConnectError(error)))
                            } else {
                                completion(.failure(WalletSendError.contractError))
                            }
                        }
                    } catch {
                        completion(.failure(WalletSendError.ethereumError(error)))
                        return
                    }
                } catch {
                    completion(.failure(WalletSendError.ethereumError(error)))
                    return
                }
            }
        }
    }
    
    func sendErc721Token(
        gasLimit: BigUInt,
        gasPrice: BigUInt,
        token: Collectible,
        contractAddress: String,
        fromAddress: String,
        toAddress: String,
        network: BlockChainNetwork,
        _ completion: @escaping (Result<EthereumTransaction?, Error>) -> Void) {
        guard let wcUrl = session?.url else {
            completion(.failure(WalletSendError.walletConnectError()))
            return
        }
            
        guard let provider = Web3ProviderFactory.provider else { completion(.failure(WalletSendError.unsupportedChainType))
            return
        }
            
        guard let contractAddressEthFormat = EthereumAddress(contractAddress) else {
            completion(.failure(WalletSendError.addressError))
            return
        }
            
        guard let toAddressEthFormat = EthereumAddress(toAddress) else {
            completion(.failure(WalletSendError.addressError))
            return
        }
            
        guard let fromAddressEthFormat = EthereumAddress(fromAddress) else {
            completion(.failure(WalletSendError.addressError))
            return
        }
            
        guard let tokenId = BigInt(token.tokenId ?? "") else {
            completion(.failure(WalletSendError.addressError))
            return
        }
            
        DispatchQueue.global().async { [weak self] in
            let erc721 = ERC721(web3: provider, provider: provider.provider, address: contractAddressEthFormat)
                
            let preTransacation = try? erc721.safeTransferFrom(from: fromAddressEthFormat,
                                                               to: toAddressEthFormat,
                                                               originalOwner: fromAddressEthFormat,
                                                               tokenId: BigUInt(tokenId),
                                                               data: [])
                
            guard let transacation = preTransacation else {
                completion(.failure(WalletSendError.passwordError))
                return
            }
                
            do {
                let transacationResult = try transacation.assemble()
                do {
                    let nonce = try provider.eth.getTransactionCount(address: fromAddressEthFormat)
                    let wcTransaction =
                        Client.Transaction(from: fromAddress,
                                           to: contractAddress,
                                           data: transacationResult.data.toHexString().addHexPrefix(),
                                           gas: gasLimit.serialize().toHexStringWithPrefix(),
                                           gasPrice: gasPrice.serialize().toHexStringWithPrefix(),
                                           value: "0x0",
                                           nonce: nonce.serialize().toHexStringWithPrefix(),
                                           type: nil,
                                           accessList: nil,
                                           chainId: "\(network.networkId)",
                                           maxPriorityFeePerGas: nil,
                                           maxFeePerGas: nil)
                    guard let client = self?.client else {
                        completion(.failure(WalletSendError.walletConnectError()))
                        return
                    }
                    WalletConnectClient.openInstalledWallet(with: fromAddress)
                    try client.eth_sendTransaction(url: wcUrl, transaction: wcTransaction) { response in
                        if let _ = try? response.result(as: String.self) {
                            completion(.success(nil))
                        } else if let error = response.error {
                            completion(.failure(WalletSendError.walletConnectError(error)))
                        } else {
                            completion(.failure(WalletSendError.contractError))
                        }
                    }
                } catch {
                    completion(.failure(WalletSendError.ethereumError(error)))
                    return
                }
            } catch {
                completion(.failure(WalletSendError.ethereumError(error)))
                return
            }
        }
        }
    
    func signMessage(
        message: String,
        fromAddress: String,
        _ completion: @escaping (Result<String, Error>) -> Void) {
            guard let wcUrl = session?.url else {
                completion(.failure(WalletSendError.walletConnectError()))
                return
            }
            do {
                guard let client = self.client else {
                    completion(.failure(WalletSendError.walletConnectError()))
                    return
                }
                WalletConnectClient.openInstalledWallet(with: fromAddress)
                try client.personal_sign(url: wcUrl, message: message, account: fromAddress, completion: { response in
                    if let signature = try? response.result(as: String.self) {
                        completion(.success(signature))
                    } else if let error = response.error {
                        completion(.failure(WalletSendError.walletConnectError(error)))
                    } else {
                        completion(.failure(WalletSendError.contractError))
                    }
                })
            } catch {
                completion(.failure(WalletSendError.ethereumError(error)))
                return
            }
        }
}
