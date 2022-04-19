//
//  ABIContract.swift
//  Maskbook
//
//  Created by Hugo L on 2022/3/21.
//  Copyright © 2022 dimension. All rights reserved.
//

import Foundation
import PromiseKit
import web3swift

protocol ABIContract {
    associatedtype Functions: RawRepresentable
    associatedtype Events: RawRepresentable
    
    var mainCoordinator: Coordinator { get }
    var contractAddress: EthereumAddress { get }
    var abiString: String { get }
    var abiVersion: Int { get }
    var userSetting: UserDefaultSettings { get }

    var ethcontract: EthereumContract? { get }
}

extension ABIContract where Functions.RawValue == String {
    func parse(input: String, for method: Functions) -> [String: Any] {
        guard let contract = self.ethcontract else {
            return [:]
        }

        let data = Data(hex: input)
        return contract.decodeInputData(method.rawValue, data: data) ?? [:]
    }
}

extension ABIContract where Events.RawValue == String {
    func parse(eventlog: EventLog) -> [String: Any] {
        guard let contract = self.ethcontract else {
            return [:]
        }

        let result = contract.parseEvent(eventlog)
        return result.eventData ?? [:]
    }
}

extension ABIContract {
    var web3: web3 { Web3ProviderFactory.provider! }
    var walletAddress: EthereumAddress { EthereumAddress(userSetting.defaultAccountAddress!)! }
    
    func read(
        _ methodName: String,
        param: [AnyObject]? = nil,
        extraData: Data? = nil,
        options: TransactionOptions? = nil
    ) -> ReadTransaction? {
        guard let contract = web3.contract(abiString, at: contractAddress, abiVersion: abiVersion) else {
            return nil
        }
        var defaultOptions = TransactionOptions.defaultOptions
        defaultOptions.from = walletAddress
        defaultOptions.gasPrice = .automatic
        defaultOptions.gasLimit = .automatic
        guard let tx = contract.read(
            methodName,
            parameters: param ?? [],
            extraData: extraData ?? Data(),
            transactionOptions: options ?? defaultOptions) else {
                return nil
            }
        return tx
    }
    
    func write(
        _ methodName: String,
        param: [AnyObject]? = nil,
        extraData: Data? = nil,
        options: TransactionOptions? = nil
    ) async -> String? {
        guard let contract = web3.contract(abiString, at: contractAddress, abiVersion: abiVersion) else {
            return nil
        }
        var defaultOptions = TransactionOptions.defaultOptions
        defaultOptions.from = walletAddress
        defaultOptions.gasPrice = .automatic
        defaultOptions.gasLimit = .automatic
        guard let tx = contract.write(
            methodName,
            parameters: param ?? [],
            extraData: extraData ?? Data(),
            transactionOptions: defaultOptions.merge(options)) else {
                return nil
            }
        
        let (promise, resolver) = Promise<String>.pending()
        return await Task {
            guard let transaction = try? tx.assemble(transactionOptions: tx.transactionOptions) else {
                return nil
            }
            await MainActor.run {
                mainCoordinator.present(
                    scene: .maskSendResolverTransactionPopView(
                        resolver: resolver,
                        transaction: transaction,
                        transactionOptions: tx.transactionOptions
                    ),
                    transition: .panModel()
                )
            }
            return try? promise.wait()
        }.value
    }
}

enum ABI {
    static let happyRedPacketV4 = HappyRedPacketV4()
}

enum HappyRedPacketKey: InjectValueKey {
    static var defaultInjectValue = ABI.happyRedPacketV4
}

extension InjectValues {
    var happyRedPacket: HappyRedPacketV4 {
        Self[HappyRedPacketKey.self]
    }
}
