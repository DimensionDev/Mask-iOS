//
//  AddressCheckViewModel.swift
//  Maskbook
//
//  Created by caiyu on 2021/6/28.
//  Copyright © 2021 dimension. All rights reserved.
//

import Combine
import Foundation
import web3swift

class AddressCheckViewModel {
    let addressValidate = CurrentValueSubject<Bool, Never>(false)
    let ensAddressValidate = CurrentValueSubject<Bool, Never>(false)
    
    static func isAddressValid(address: String?) -> Bool {
        guard let address = address else { return false }

        return WalletCoreHelper.validateAddress(address: address, chainType: maskUserDefaults.network.chain)
    }
    
    static func formatAddress(address: String?) -> String? {
        let web = web3(provider: InfuraProvider(Networks.Mainnet)!)
        let ens = ENS(web3: web)!

        guard let address = address else { return nil }
        guard let ethAddress = EthereumAddress(address) else {
            do {
                let ensAddress = try ens.getAddress(forNode: address)
                return ensAddress.address
            } catch {
                return nil
            }
        }
        switch maskUserDefaults.network.chain {
        case .ethereum:
            return ethAddress.address

        case .polkadot:
            return nil
        }
    }
    
    func checkAddressLegal(address: String?) -> AnyPublisher<String, Never> {
        return Future<String, Never> { promise in
            guard let address = address,
                  let provider = InfuraProvider(Networks.Mainnet),
                  let ens = ENS(web3: web3(provider: provider)) else {
                return promise(.success(""))
            }

            DispatchQueue.global().async {
                do {
                    let ensAddress = try ens.getAddress(forNode: address)
                    guard ensAddress.isValid else { return promise(.success("")) }
                    promise(.success(ensAddress.address))
                } catch {
                    promise(.success(""))
                }
            }
        }
        .eraseToAnyPublisher()
    }
}
