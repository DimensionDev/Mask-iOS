//
//  HappyRedPacketV4.swift
//  Maskbook
//
//  Created by Hugo L on 2022/1/26.
//  Copyright © 2022 dimension. All rights reserved.
//

import BigInt
import Foundation
import PromiseKit
import SwiftyJSON
import web3swift

struct HappyRedPacketV4 {
    @InjectedProvider(\.mainCoordinator)
    private var mainCoordinator
    
    @InjectedProvider(\.userDefaultSettings)
    private var userSetting
    
    let contractInfo: JSON?
    let contractABI: String?
    var contractAddressString: String? {
        let chainKey = maskUserDefaults.network.redPacketConstantKey
        return contractInfo?["HAPPY_RED_PACKET_ADDRESS_V4"][chainKey].string
    }
    var web3: web3? { Web3ProviderFactory.provider }
    var walletAddress: String? { userSetting.defaultAccountAddress }
    
    struct CheckAvailabilityResult: Codable {
        let address: EthereumAddress?
        let balance: BigUInt?
        let total: BigUInt?
        let claimed: BigUInt?
        let expired: Bool?
        let claimedAmount: BigUInt?
        
        enum CodingKeys: String, CodingKey {
            case address = "token_address"
            case balance
            case total
            case claimed
            case expired
            case claimedAmount = "claimed_amount"
        }
        
        init(_ data: [String: Any]) {
            address = data[CodingKeys.address.rawValue] as? EthereumAddress
            balance = data[CodingKeys.balance.rawValue] as? BigUInt
            total = data[CodingKeys.total.rawValue] as? BigUInt
            claimed = data[CodingKeys.claimed.rawValue] as? BigUInt
            expired = data[CodingKeys.expired.rawValue] as? Bool
            claimedAmount = data[CodingKeys.claimedAmount.rawValue] as? BigUInt
        }
    }
    
    struct ClaimInput: Codable {
        let id: [UInt8]
        let signedMsg: [UInt8]
        let recipient: EthereumAddress
    }
    
    init() {
        if let contractFilePath = Bundle.main.path(forResource: "HappyRedPacketV4", ofType: "json") {
            contractABI = try? String(contentsOfFile: contractFilePath)
        } else {
            contractABI = nil
        }
        
        if let redPacketConstantURL = Bundle.main.url(forResource: "red-packet", withExtension: "json"),
           let data = try? Data(contentsOf: redPacketConstantURL) {
            contractInfo = try? JSON(data: data)
        } else {
            contractInfo = nil
        }
    }
    
    func checkAvailability(redPackageId: String) async -> CheckAvailabilityResult? {
        guard let web3 = web3 else { return nil }
        guard let walletAddressStr = walletAddress else { return nil }
        guard let walletAddress = EthereumAddress(walletAddressStr) else { return nil }
        let contractMethod = "check_availability"
        guard let contractABI = contractABI else { return nil }
        guard let contractAddressString = contractAddressString else { return nil }
        guard let contractAddress = EthereumAddress(contractAddressString) else { return nil }
        let abiVersion = 2
        let parameters: [AnyObject] = [redPackageId] as [AnyObject]
        let extraData = Data()
        guard let contract = web3.contract(contractABI, at: contractAddress, abiVersion: abiVersion) else {
            return nil
        }
        var options = TransactionOptions.defaultOptions
        options.from = walletAddress
        options.gasPrice = .automatic
        options.gasLimit = .automatic
        guard let tx = contract.read(
            contractMethod,
            parameters: parameters,
            extraData: extraData,
            transactionOptions: options) else {
                return nil
            }
        
        return await Task.detached(priority: .userInitiated) {
            guard let txResult = try? tx.call() else {
                return nil
            }
            
            let result = CheckAvailabilityResult(txResult)
            return result
        }.value
    }
    
    @MainActor
    func claim(rid: String, password: String) async -> String? {
        guard let ridBytes = Web3.Utils.hexToData(rid)?.bytes else {
            return nil
        }
        guard let web3 = web3 else { return nil }
        guard let walletAddressStr = walletAddress else { return nil }
        guard let walletAddress = EthereumAddress(walletAddressStr) else { return nil }
        guard let signedMsg = try? signRedPackage(message: walletAddressStr, password: password).get(),
              let signedMsgBytes = Web3.Utils.hexToData(signedMsg) else {
                  return nil
              }
        let contractMethod = "claim"
        guard let contractABI = contractABI else { return nil }
        guard let contractAddressString = contractAddressString else { return nil }
        guard let contractAddress = EthereumAddress(contractAddressString) else { return nil }
        let abiVersion = 2
        let parameters: [AnyObject] = [ridBytes, signedMsgBytes, walletAddress] as [AnyObject]
        let extraData = Data()
        guard let contract = web3.contract(contractABI, at: contractAddress, abiVersion: abiVersion) else {
            return nil
        }
        var options = TransactionOptions.defaultOptions
        options.from = walletAddress
        options.gasPrice = .automatic
        options.gasLimit = .automatic
        let (promise, resolver) = Promise<String>.pending()
        guard let tx = contract.write(
            contractMethod,
            parameters: parameters,
            extraData: extraData,
            transactionOptions: options) else {
                return nil
            }
        mainCoordinator.present(
            scene: .maskSendResolverTransactionPopView(
                resolver: resolver,
                transaction: tx.transaction,
                transactionOptions: options
            ),
            transition: .panModel(animated: true)
        )
        return await Task.detached(priority: .userInitiated) {
            return try? promise.wait()
        }.value
    }
    
    @MainActor
    func initialize() async -> String? {
        guard let web3 = web3 else { return nil }
        guard let walletAddressStr = walletAddress else { return nil }
        guard let walletAddress = EthereumAddress(walletAddressStr) else { return nil }
        let contractMethod = "initialize"
        guard let contractABI = contractABI else { return nil }
        guard let contractAddressString = contractAddressString else { return nil }
        guard let contractAddress = EthereumAddress(contractAddressString) else { return nil }
        let abiVersion = 2
        let parameters: [AnyObject] = [] as [AnyObject]
        let extraData = Data()
        guard let contract = web3.contract(contractABI, at: contractAddress, abiVersion: abiVersion) else {
            return nil
        }
        var options = TransactionOptions.defaultOptions
        options.from = walletAddress
        options.gasPrice = .automatic
        options.gasLimit = .automatic
        let (promise, resolver) = Promise<String>.pending()
        guard let tx = contract.write(
            contractMethod,
            parameters: parameters,
            extraData: extraData,
            transactionOptions: options) else {
                return nil
            }
        mainCoordinator.present(
            scene: .maskSendResolverTransactionPopView(
                resolver: resolver,
                transaction: tx.transaction,
                transactionOptions: options
            ),
            transition: .panModel(animated: true)
        )
        return await Task.detached(priority: .userInitiated) {
            return try? promise.wait()
        }.value
    }
    
    @MainActor
    func refund(rid: String) async -> String? {
        guard let ridBytes = Web3.Utils.hexToData(rid)?.bytes else {
            return nil
        }
        guard let web3 = web3 else { return nil }
        guard let walletAddressStr = walletAddress else { return nil }
        guard let walletAddress = EthereumAddress(walletAddressStr) else { return nil }
        let contractMethod = "refund"
        guard let contractABI = contractABI else { return nil }
        guard let contractAddressString = contractAddressString else { return nil }
        guard let contractAddress = EthereumAddress(contractAddressString) else { return nil }
        let abiVersion = 2
        let parameters: [AnyObject] = [ridBytes] as [AnyObject]
        let extraData = Data()
        guard let contract = web3.contract(contractABI, at: contractAddress, abiVersion: abiVersion) else {
            return nil
        }
        var options = TransactionOptions.defaultOptions
        options.from = walletAddress
        options.gasPrice = .automatic
        options.gasLimit = .automatic
        let (promise, resolver) = Promise<String>.pending()
        guard let tx = contract.write(
            contractMethod,
            parameters: parameters,
            extraData: extraData,
            transactionOptions: options) else {
                return nil
            }
        mainCoordinator.present(
            scene: .maskSendResolverTransactionPopView(
                resolver: resolver,
                transaction: tx.transaction,
                transactionOptions: options
            ),
            transition: .panModel(animated: true)
        )
        return await Task.detached(priority: .userInitiated) {
            return try? promise.wait()
        }.value
    }
    
    private func signRedPackage(
        message: String,
        password: String) -> Swift.Result<String, Error> {
            do {
                guard let messageData = Data.fromHex(message) else {
                    throw Web3Error.dataError
                }
                guard let hash = Web3.Utils.hashPersonalMessage(messageData) else {
                    throw Web3Error.dataError
                }
                
                guard let privateKeyData = Web3.Utils.hexToData(password) else {
                    throw MaskWalletCoreError.invalidPrivateKey
                }
                let (compressedSignature, _) = SECP256K1.signForRecovery(hash: hash, privateKey: privateKeyData)
                guard let signature = compressedSignature?.toHexString().addHexPrefix() else {
                    throw MaskWalletCoreError.invalidPrivateKey
                }
                return .success(signature)
            } catch {
                return .failure(error)
            }
        }
}

enum ABI {
    static let happyRedPacketV4 = HappyRedPacketV4()
}

extension BlockChainNetwork {
    var redPacketConstantKey: String {
        switch rawValue {
        case .eth: return "Mainnet"
        case .rinkeby: return ""
        case .bsc: return "BSC"
        case .polygon: return "Matic"
        case .polkd: return ""
        case .arbitrum: return "Arbitrum"
        case .xdai: return "xDai"
        case .optimism: return ""
            
        default:
            return ""
        }
    }
}
