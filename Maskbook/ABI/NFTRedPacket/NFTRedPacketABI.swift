//
//  NFTRedPacketABI.swift
//  Maskbook
//
//  Created by caiyu on 2022/7/21.
//  Copyright © 2022 dimension. All rights reserved.
//

import UIKit
import web3swift
import BigInt

struct NFTRedPacketABI: ABIContract {
    @InjectedProvider(\.userDefaultSettings)
    var userSetting
    
    @InjectedProvider(\.mainCoordinator)
    var mainCoordinator
    
    private(set) var ethcontract: EthereumContract?
    
    init() {
        self.ethcontract = EthereumContract(abiString, at: contractAddress)
    }
    
    var contractAddress: EthereumAddress {
        guard let addressStr = userSetting.network.nftRedPacketAddress,
              let address = EthereumAddress(addressStr)
        else {
            assertionFailure("It needs an address for NFTRedPacket Contract.")
            return EthereumAddress("")!
        }
        return address
    }
    
    var abiString: String {
        guard let contractFilePath = Bundle.main.path(forResource: "NFTRedPacket", ofType: "json"),
              let content = try? String(contentsOfFile: contractFilePath)
        else {
            assertionFailure("It needs an ABI file of NFTRedPacket Contract.")
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
        gasFeeViewModel: GasFeeViewModel,
        redPacketInput: CreateNFTRedPacketInput,
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
                        let scene: Coordinator.Scene = .nftLuckyDropConfirm(
                            gasFeeViewModel: gasFeeViewModel,
                            redPacketInput: redPacketInput,
                            transaction: transaction,
                            options: tx.transactionOptions
                        ) { tx, error in
                            if let error = error {
                                continuation.resume(with: .failure(error))
                            } else {
                                continuation.resume(with: .success(tx))
                            }
                            self.mainCoordinator.dismissTopViewController()
                        }
                        self.mainCoordinator.present(
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
    
    func checkAvailability(redPacketId: String) async -> CheckAvailabilityResult? {
        let contractMethod = Functions.checkAvailability.rawValue
        let parameters: [AnyObject] = [Data(hex: redPacketId)] as [AnyObject]
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
    
    func checkOwnership(erc721TokenIDs: [String], tokenAddr: EthereumAddress) async -> Bool? {
        let contractMethod = Functions.checkOwnership.rawValue
        let parameters: [AnyObject] = [erc721TokenIDs, tokenAddr] as [AnyObject]
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
            
            if let isYourToken = txResult["is_your_token"] as? Bool {
                return isYourToken
            }
            return nil
        }.value
    }
    
    func checkERC721RemainIDs(redPacketId: String) async -> CheckERC721RemainIDsResult? {
        let contractMethod = Functions.checkERC721RemainIDs.rawValue
        let parameters: [AnyObject] = [Data(hex: redPacketId)] as [AnyObject]
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
            
            let result = CheckERC721RemainIDsResult(txResult)
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
        gasFeeViewModel: GasFeeViewModel,
        param: CreateNFTRedPacketInput,
        password: String
    ) async -> String? {
        let contractMethod = Functions.createRedPacket.rawValue
        let parameters = param.asArray
        let options = TransactionOptions.defaultOptions
        return try? await write(
            contractMethod,
            gasFeeViewModel: gasFeeViewModel,
            redPacketInput: param,
            password: password,
            param: parameters,
            options: options
        )
    }
}

extension NFTRedPacketABI {
    enum Functions: String, CaseIterable, RawRepresentable {
        // https://polygonscan.com/readContract?m=normal&a=0xf6dc042717ef4c097348be00f4bae688dcadd4ea&v=0xf55816a1d7835a3bacd6e403bf34280a56667065
        // readable fuctions
        case checkAvailability = "check_availability"
        case checkClaimedID = "check_claimed_id"
        case checkERC721RemainIDs = "check_erc721_remain_ids"
        case checkOwnership = "check_ownership"
        // https://polygonscan.com/address/0xf6dc042717ef4c097348be00f4bae688dcadd4ea#writeProxyContract
        // writable fuctions
        
        case claim
        case createRedPacket = "create_red_packet"
    }
    
    enum Events: String, CaseIterable, RawRepresentable {
        case claimSuccess = "ClaimSuccess"
        case creationSuccess = "CreationSuccess"
        case refundSuccess = "RefundSuccess"
    }
    
    struct SuccessEvent {
        let id: String
        let creation_time: BigUInt

        init?(json: [String: Any]) {
            guard let data = json["id"] as? Data,
                  let time = json["creation_time"] as? BigUInt else {
                return nil
            }
            self.id = data.toHexString().addHexPrefix()
            self.creation_time = time
        }
    }
    
    struct CheckAvailabilityResult: Codable {
        let address: EthereumAddress?
        let balance: BigUInt?
        let totalPackets: BigUInt?
        let expired: Bool?
        let claimedID: BigUInt?
        let bitStatus: BigUInt?
        
        enum CodingKeys: String, CodingKey {
            case address = "token_address"
            case balance
            case totalPackets = "total_pkts"
            case claimedID = "claimed_id"
            case expired
            case bitStatus = "bit_status"
        }
        
        init(_ data: [String: Any]) {
            address = data[CodingKeys.address.rawValue] as? EthereumAddress
            balance = data[CodingKeys.balance.rawValue] as? BigUInt
            totalPackets = data[CodingKeys.totalPackets.rawValue] as? BigUInt
            claimedID = data[CodingKeys.claimedID.rawValue] as? BigUInt
            expired = data[CodingKeys.expired.rawValue] as? Bool
            bitStatus = data[CodingKeys.bitStatus.rawValue] as? BigUInt
        }
    }
    
    struct CheckERC721RemainIDsResult: Codable {
        let bitStatus: BigUInt?
        let erc721TokenIDs: [BigUInt]?
        
        enum CodingKeys: String, CodingKey {
            case bitStatus = "bit_status"
            case erc721TokenIDs = "erc721_token_ids"
        }
        
        init(_ data: [String: Any]) {
            bitStatus = data[CodingKeys.bitStatus.rawValue] as? BigUInt
            erc721TokenIDs = data[CodingKeys.erc721TokenIDs.rawValue] as? [BigUInt]
        }
    }
    
    struct ClaimInput: Codable {
        let id: [UInt8]
        let signedMsg: [UInt8]
        let recipient: EthereumAddress
    }
    
    struct CreateNFTRedPacketInput: Codable {
        let publicKey: EthereumAddress
        let duration: BigUInt
        let seed: [UInt8]
        let message: String
        let name: String
        let tokenAddr: EthereumAddress
        let erc721TokenIDs: [BigUInt]
        
        enum CodingKeys: String, CodingKey {
            case publicKey = "_public_key"
            case duration = "_duration"
            case seed = "_seed"
            case message = "_message"
            case name = "_name"
            case tokenAddr = "_token_addr"
            case erc721TokenIDs = "_erc721_token_ids"
        }
        
        var asArray: [AnyObject] {
            [
                publicKey as AnyObject,
                duration as AnyObject,
                seed as AnyObject,
                message as AnyObject,
                name as AnyObject,
                tokenAddr as AnyObject,
                erc721TokenIDs as AnyObject
            ]
        }
    }
}
