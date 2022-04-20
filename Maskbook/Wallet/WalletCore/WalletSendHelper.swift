//
//  WalletSendHelper.swift
//  Maskbook
//
//  Created by caiyu on 2021/7/7.
//  Copyright © 2021 dimension. All rights reserved.
//

import BigInt
import CoreData
import CoreDataStack
import Foundation
import MaskWalletCore
import web3swift

// swiftlint:disable cyclomatic_complexity line_length function_parameter_count

class WalletSendHelper {
    class func sendErc721Token(
        password: String,
        gasLimit: BigUInt,
        gasPrice: BigUInt?,
        maxFeePerGas: BigUInt?,
        maxInclusionFeePerGas: BigUInt?,
        token: Collectible,
        contractAddress: String,
        fromAddress: String,
        toAddress: String,
        network: BlockChainNetwork,
        _ completion: @escaping (Result<EthereumTransaction?, Error>) -> Void) {
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
            
            guard  let tokenId = BigInt(token.tokenId ?? "")  else {
                completion(.failure(WalletSendError.addressError))
                return
            }
            
            guard let storedKeyData = WalletCoreStorage.getAccount(address: fromAddress)?.ownedByStoredKey?.data,
                  let derivationPath = WalletCoreStorage.getAccount(address: fromAddress)?.derivationPath else {
                      completion(.failure(WalletSendError.addressError))
                      return
                  }
            
            let erc721 = ERC721(web3: provider, provider: provider.provider, address: contractAddressEthFormat)
            
            let preTransacation = try? erc721.safeTransferFrom(from: fromAddressEthFormat, to: toAddressEthFormat, originalOwner: fromAddressEthFormat, tokenId: BigUInt(tokenId), data: [])
            
            guard let transacation = preTransacation else {
                completion(.failure(WalletSendError.passwordError))
                return
            }
            
            do {
                let transacationResult = try transacation.assemble()
                do {
                    let nonce = try provider.eth.getTransactionCount(address: fromAddressEthFormat)
                    var gasPriceHex: String = "0x0"
                    var maxInclusionFeePerGasHex: String = "0x0"
                    var maxFeePerGasHex: String = "0x0"
                    if maxFeePerGas == nil || maxInclusionFeePerGas == nil {
                          gasPriceHex = gasPrice!.serialize().toHexString().addHexPrefix()
                    } else {
                         maxInclusionFeePerGasHex = maxInclusionFeePerGas!.serialize().toHexString().addHexPrefix()
                         maxFeePerGasHex = maxFeePerGas!.serialize().toHexString().addHexPrefix()
                    }
                    let signInput =
                    WalletCoreHelper.SignInput.eth(
                        chainId: Int64(network.networkId),
                        nonce: nonce.serialize().toHexString().addHexPrefix(),
                        gasPrice: gasPriceHex,
                        maxInclusionFeePerGas: maxInclusionFeePerGasHex,
                        maxFeePerGas: maxFeePerGasHex,
                        gasLimit: gasLimit.serialize().toHexString().addHexPrefix(),
                        amount: "0x0",
                        toAddress: contractAddress,
                        payload: transacationResult.data)
                    let result =
                    WalletCoreHelper.signTransaction(password: password, storedKeyData: storedKeyData, derivationPath: derivationPath, input: signInput, chainType: network.chain)
                    switch result {
                    case .success(let signOutput):
                        switch signOutput {
                        case let .eth(transacationEncodeData, v, r, s, _):
                            let rawTransaction = EthereumTransaction(nonce: nonce, gasPrice: gasPrice ?? BigUInt(0), gasLimit: gasLimit, to: contractAddressEthFormat, value: BigUInt(0), data: transacationResult.data, v: BigUInt(v), r: BigUInt(r), s: BigUInt(s))
                            do {
                                let sendResult = try provider.eth.sendRawTransaction(rawTransaction, transacationEncodeData)
                                completion(.success(sendResult.transaction))
                                return
                            } catch {
                                completion(.failure(WalletSendError.ethereumError(error)))
                                return
                            }
                        }
                        
                    case .failure(let error):
                        completion(.failure(WalletSendError.ethereumError(error)))
                        return
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
    
    class func sendTransaction(
        password: String,
        token: Token,
        gasLimit: BigUInt,
        gasPrice: BigUInt?,
        maxFeePerGas: BigUInt?,
        maxInclusionFeePerGas: BigUInt?,
        amount: String,
        toAddress: String,
        fromAddress: String,
        nonce: BigUInt,
        network: BlockChainNetwork,
        _ completion: @escaping (Result<String?, Error>) -> Void) {
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
            
            guard let storedKeyData = WalletCoreStorage.getAccount(address: fromAddress)?.ownedByStoredKey?.data,
                  let derivationPath = WalletCoreStorage.getAccount(address: fromAddress)?.derivationPath else {
                      completion(.failure(WalletSendError.addressError))
                      return
                  }
            
            if token.isMainToken {
                DispatchQueue.global().async {
                    var transacation = EthereumTransaction(to: toAddressEthFormat, data: Data(), options: TransactionOptions.defaultOptions)
                        var gasPriceHex: String = "0x0"
                        var maxInclusionFeePerGasHex: String = "0x0"
                        var maxFeePerGasHex: String = "0x0"
                        if maxFeePerGas == nil || maxInclusionFeePerGas == nil {
                              gasPriceHex = gasPrice!.serialize().toHexString().addHexPrefix()
                        } else {
                             maxInclusionFeePerGasHex = maxInclusionFeePerGas!.serialize().toHexString().addHexPrefix()
                             maxFeePerGasHex = maxFeePerGas!.serialize().toHexString().addHexPrefix()
                        }
                        let signInput =
                        WalletCoreHelper.SignInput.eth(
                            chainId: Int64(maskUserDefaults.network.networkId),
                            nonce: nonce.serialize().toHexString().addHexPrefix(),
                            gasPrice: gasPriceHex,
                            maxInclusionFeePerGas: maxInclusionFeePerGasHex,
                            maxFeePerGas: maxFeePerGasHex,
                            gasLimit: gasLimit.serialize().toHexString().addHexPrefix(),
                            amount: Web3.Utils.parseToBigUInt(amount, units: .eth)?.serialize().toHexString().addHexPrefix() ?? "",
                            toAddress: toAddress,
                            payload: Data())
                        let result = WalletCoreHelper.signTransaction(password: password, storedKeyData: storedKeyData, derivationPath: derivationPath, input: signInput, chainType: maskUserDefaults.network.chain)
                        switch result {
                        case .success(let signOutput):
                            switch signOutput {
                            case let .eth(transacationEncodeData, v, r, s, data):
                                transacation = EthereumTransaction(nonce: nonce, gasPrice: gasPrice ?? BigUInt(0), gasLimit: gasLimit, to: toAddressEthFormat, value: Web3.Utils.parseToBigUInt(amount, units: .eth)!, data: data, v: BigUInt(v), r: BigUInt(r), s: BigUInt(s))
                                do {
                                    let sendResult = try provider.eth.sendRawTransaction(transacation, transacationEncodeData)
                                    completion(.success(sendResult.hash))
                                    return
                                } catch {
                                    completion(.failure(WalletSendError.ethereumError(error)))
                                    return
                                }
                            }
                            
                        case .failure(let error):
                            completion(.failure(WalletSendError.ethereumError(error)))
                            return
                        }
                }
            } else {
                guard let symbol = token.symbol else {
                    completion(.failure(WalletSendError.contractError))
                    return
                }
                
                guard let tokenAddress = token.contractAddress else {
                    completion(.failure(WalletSendError.contractError))
                    return
                }
                
                guard let contractAddressEthFormat = EthereumAddress(tokenAddress) else {
                    completion(.failure(WalletSendError.contractError))
                    return
                }
                
                guard let value = Web3.Utils.parseToBigUInt(amount, decimals: Int(token.decimal)) else {
                    completion(.failure(WalletSendError.amountError))
                    return
                }
                DispatchQueue.global().async {
                    let preTransacation = provider.eth.sendERC20tokensWithKnownDecimals(tokenAddress: contractAddressEthFormat, from: fromAddressEthFormat, to: toAddressEthFormat, amount: value, transactionOptions: TransactionOptions.defaultOptions)
                    guard let transacation = preTransacation else {
                        completion(.failure(WalletSendError.contractError))
                        return
                    }
                    
                    do {
                        let transacationResult = try transacation.assemble()
                            var gasPriceHex: String = "0x0"
                            var maxInclusionFeePerGasHex: String = "0x0"
                            var maxFeePerGasHex: String = "0x0"
                            if maxFeePerGas == nil || maxInclusionFeePerGas == nil {
                                  gasPriceHex = gasPrice!.serialize().toHexString().addHexPrefix()
                            } else {
                                 maxInclusionFeePerGasHex = maxInclusionFeePerGas!.serialize().toHexString().addHexPrefix()
                                 maxFeePerGasHex = maxFeePerGas!.serialize().toHexString().addHexPrefix()
                            }
                            let signInput =
                            WalletCoreHelper.SignInput.eth(
                                chainId: Int64(maskUserDefaults.network.networkId),
                                nonce: nonce.serialize().toHexString().addHexPrefix(),
                                gasPrice: gasPriceHex,
                                maxInclusionFeePerGas: maxInclusionFeePerGasHex,
                                maxFeePerGas: maxFeePerGasHex,
                                gasLimit: gasLimit.serialize().toHexString().addHexPrefix(),
                                amount: "0x0",
                                toAddress: tokenAddress,
                                payload: transacationResult.data)
                            let result =
                            WalletCoreHelper.signTransaction(password: password, storedKeyData: storedKeyData, derivationPath: derivationPath, input: signInput, chainType: maskUserDefaults.network.chain)
                            switch result {
                            case .success(let signOutput):
                                switch signOutput {
                                case let .eth(transacationEncodeData, v, r, s, _):
                                    let rawTransaction = EthereumTransaction(nonce: nonce, gasPrice: gasPrice ?? BigUInt(0), gasLimit: gasLimit, to: contractAddressEthFormat, value: BigUInt(0), data: transacationResult.data, v: BigUInt(v), r: BigUInt(r), s: BigUInt(s))
                                    do {
                                        let sendResult = try provider.eth.sendRawTransaction(rawTransaction, transacationEncodeData)
                                        completion(.success(sendResult.hash))
                                        return
                                    } catch {
                                        completion(.failure(WalletSendError.ethereumError(error)))
                                        return
                                    }
                                }
                                
                            case .failure(let error):
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
    
    class func sendTransactionWithWeb3(
        password: String,
        transaction: EthereumTransaction,
        transactionOptions: TransactionOptions,
        maxFeePerGas: BigUInt?,
        maxInclusionFeePerGas: BigUInt?,
        network: BlockChainNetwork,
        nonce: BigUInt? = nil,
        _ completion: @escaping (Result<(String, BigUInt), Error>) -> Void) {
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

            guard let storedKeyData = WalletCoreStorage.getAccount(address: fromAddress)?.ownedByStoredKey?.data,
                  let derivationPath = WalletCoreStorage.getAccount(address: fromAddress)?.derivationPath else {
                      completion(.failure(WalletSendError.addressError))
                      return
                  }

            DispatchQueue.global().async {
                do {
                    var nonceTemp: BigUInt
                    if let nonce = nonce {
                        nonceTemp = nonce
                    } else {
                        nonceTemp = try provider.eth.getTransactionCount(address: fromAddressEthFormat)
                    }
                    
                    var gasLimit: BigUInt
                    switch transactionOptions.gasLimit {
                    case .limited(let gas):
                        gasLimit = gas

                    default:
                        gasLimit = transaction.gasLimit
                    }
                    var gasPriceHex: String = "0x0"
                    var maxInclusionFeePerGasHex: String = "0x0"
                    var maxFeePerGasHex: String = "0x0"
                    if maxFeePerGas == nil || maxInclusionFeePerGas == nil {
                          gasPriceHex = transaction.gasPrice.serialize().toHexString().addHexPrefix()
                    } else {
                         maxInclusionFeePerGasHex = maxInclusionFeePerGas!.serialize().toHexString().addHexPrefix()
                         maxFeePerGasHex = maxFeePerGas!.serialize().toHexString().addHexPrefix()
                    }
                    let signInput =
                    WalletCoreHelper.SignInput.eth(
                        chainId: Int64(maskUserDefaults.network.networkId),
                        nonce: nonceTemp.serialize().toHexString().addHexPrefix(),
                        gasPrice: gasPriceHex,
                        maxInclusionFeePerGas: maxInclusionFeePerGasHex,
                        maxFeePerGas: maxFeePerGasHex,
                        gasLimit: gasLimit.serialize().toHexString().addHexPrefix(),
                        amount: transaction.value?.serialize().toHexString().addHexPrefix() ?? "0x0",
                        toAddress: transaction.to.address,
                        payload: transaction.data)
                    let result =
                    WalletCoreHelper.signTransaction(password: password, storedKeyData: storedKeyData, derivationPath: derivationPath, input: signInput, chainType: maskUserDefaults.network.chain)
                    switch result {
                    case .success(let signOutput):
                        switch signOutput {
                        case let .eth(transacationEncodeData, v, r, s, _):
                            let rawTransaction = EthereumTransaction(
                                nonce: nonceTemp,
                                gasPrice: transaction.gasPrice,
                                gasLimit: gasLimit,
                                to: transaction.to,
                                value: transaction.value ?? BigUInt(0),
                                data: transaction.data,
                                v: BigUInt(v),
                                r: BigUInt(r),
                                s: BigUInt(s)
                            )
                            do {
                                let sendResult = try provider.eth.sendRawTransaction(rawTransaction, transacationEncodeData)
                                DispatchQueue.main.async {
                                    completion(.success((sendResult.hash, nonceTemp)))
                                }
                                return
                            } catch {
                                DispatchQueue.main.async {
                                    completion(.failure(WalletSendError.ethereumError(error)))
                                }
                                return
                            }
                        }
                    case .failure(let error):
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
