//
//  HappyRedPacketV4.swift
//  Maskbook
//
//  Created by Hugo L on 2022/3/21.
//  Copyright © 2022 dimension. All rights reserved.
//

import BigInt
import Compression
import CoreDataStack
import Foundation
import PromiseKit
import SwiftyJSON
import web3swift

struct HappyRedPacketV4: ABIContract {
    @InjectedProvider(\.userDefaultSettings)
    var userSetting
    
    @InjectedProvider(\.mainCoordinator)
    var mainCoordinator

    private(set) var ethcontract: EthereumContract?

    init() {
        self.ethcontract = EthereumContract(abiString, at: contractAddress)
    }
    
    private var contractInfo: JSON? {
        guard let redPacketConstantURL = Bundle.main.url(forResource: "red-packet", withExtension: "json"),
              let data = try? Data(contentsOf: redPacketConstantURL) else {
                  return nil
              }
        return try? JSON(data: data)
    }
    
    var contractAddress: EthereumAddress {
        let chainKey = userSetting.network.redPacketConstantKey
        guard let addressStr = contractInfo?["HAPPY_RED_PACKET_ADDRESS_V4"][chainKey].string,
              let address = EthereumAddress(addressStr) else {
                  assert(false, "It needs an address for HappyRedPacketV4 Contract.")
                  return EthereumAddress("")!
              }
        return address
    }
    
    var abiString: String {
        guard let contractFilePath = Bundle.main.path(forResource: "HappyRedPacketV4", ofType: "json"),
              let content = try? String(contentsOfFile: contractFilePath) else {
                  assert(false, "It needs an ABI file of HappyRedPacketV4 Contract.")
                  return ""
              }
        return content
    }

    var abiVersion: Int {
        2
    }
    
    @MainActor
    func write(
        _ methodName: String,
        token: Token,
        gasFeeViewModel: GasFeeViewModel,
        redPacketInput: CreateRedPacketInput,
        password: String,
        param: [AnyObject]? = nil,
        extraData: Data? = nil,
        options: TransactionOptions? = nil
    ) async throws -> String? {
        guard let contract = web3.contract(abiString, at: contractAddress, abiVersion: abiVersion) else {
            return nil
        }
        var defaultOptions = TransactionOptions.defaultOptions
        defaultOptions.from = walletAddress
        defaultOptions.gasPrice = options?.gasPrice
        defaultOptions.gasLimit = options?.gasLimit
        guard let tx = contract.write(
            methodName,
            parameters: param ?? [],
            extraData: extraData ?? Data(),
            transactionOptions: defaultOptions.merge(options)) else {
                return nil
            }
        
        return try await withCheckedThrowingContinuation { continuation in
            Task.detached {
                do {
                    let transaction = try tx.assemble(transactionOptions: tx.transactionOptions)
                    await MainActor.run {
                        let scene: Coordinator.Scene = .luckyDropConfirm(
                            token: token,
                            gasFeeViewModel: gasFeeViewModel,
                            redPacketInput: redPacketInput,
                            transaction: transaction,
                            options: tx.transactionOptions,
                            password: password
                        ) { tx, error in
                            if let error = error {
                                continuation.resume(with: .failure(error))
                            } else {
                                continuation.resume(with: .success(tx))
                                mainCoordinator.dismissTopViewController()
                            }
                        }
                        mainCoordinator.present(
                            scene: scene,
                            transition: .modal()
                        )
                    }
                } catch {
                    continuation.resume(with: .failure(error))
                }
            }
        }
    }
    
    func checkAvailability(redPackageId: String) async -> CheckAvailabilityResult? {
        let contractMethod = Functions.checkAvailability.rawValue
        let parameters: [AnyObject] = [Data(hex: redPackageId)] as [AnyObject]
        guard let tx = read(
            contractMethod,
            param: parameters
        ) else {
            return nil
        }
        
        return await Task.detached {
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
        guard let signedMsg = try? signRedPackage(
            message: walletAddress.address, password: password
        ).get(), let signedMsgBytes = Web3.Utils.hexToData(signedMsg) else {
            return nil
        }
        let contractMethod = Functions.claim.rawValue
        let parameters: [AnyObject] = [ridBytes, signedMsgBytes, walletAddress] as [AnyObject]
        return await write(
            contractMethod,
            param: parameters
        )
    }
    
    @MainActor
    func createRedPacket(
        token: Token,
        gasFeeViewModel: GasFeeViewModel,
        param: CreateRedPacketInput,
        password: String
    ) async -> String? {
        let contractMethod = Functions.createRedPacket.rawValue
        let parameters = param.asArray
        var options = TransactionOptions()
        options.value = param.tokenType == 0 ? param.totalTokens : BigUInt(0)
        return try? await write(
            contractMethod,
            token: token,
            gasFeeViewModel: gasFeeViewModel,
            redPacketInput: param,
            password: password,
            param: parameters,
            options: options
        )
    }
    
    @MainActor
    func refund(rid: String) async -> String? {
        guard let ridBytes = Web3.Utils.hexToData(rid)?.bytes else {
            return nil
        }
        let contractMethod = Functions.refund.rawValue
        let parameters: [AnyObject] = [ridBytes] as [AnyObject]
        return await write(
            contractMethod,
            param: parameters
        )
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

extension HappyRedPacketV4 {
    enum Functions: String, CaseIterable, RawRepresentable {
        // readable fuctions
        case checkAvailability = "check_availability"
        // writable fuctions
        case claim
        case createRedPacket = "create_red_packet"
        case refund
    }
    
    enum Events: String, CaseIterable, RawRepresentable {
        case claimSuccess = "ClaimSuccess"
        case creationSuccess = "CreationSuccess"
        case refundSuccess = "RefundSuccess"
    }
    
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
    
    struct CreateRedPacketInput: Codable {
        let publicKey: EthereumAddress
        let number: BigUInt
        let ifrandom: Bool
        let duration: BigUInt
        let seed: [UInt8]
        let message: String
        let name: String
        let tokenType: BigUInt
        let tokenAddr: EthereumAddress
        let totalTokens: BigUInt
        
        enum CodingKeys: String, CodingKey {
            case publicKey = "_public_key"
            case number = "_number"
            case ifrandom = "_ifrandom"
            case duration = "_duration"
            case seed = "_seed"
            case message = "_message"
            case name = "_name"
            case tokenType = "_token_type"
            case tokenAddr = "_token_addr"
            case totalTokens = "_total_tokens"
        }
        
        var asArray: [AnyObject] {
            [
                publicKey as AnyObject,
                number as AnyObject,
                ifrandom as AnyObject,
                duration as AnyObject,
                seed as AnyObject,
                message as AnyObject,
                name as AnyObject,
                tokenType as AnyObject,
                tokenAddr as AnyObject,
                totalTokens as AnyObject
            ]
        }
    }
}

extension BlockChainNetwork {
    var redPacketConstantKey: String {
        switch self {
        case .eth: return "Mainnet"
        case .rinkeby: return ""
        case .bsc: return "BSC"
        case .polygon: return "Matic"
        case .polka: return ""
        case .arbitrum: return "Arbitrum"
        case .xdai: return "xDai"
        case .optimism: return ""
            
        default:
            return ""
        }
    }
}
