//
//  NFTRedPacketABI.swift
//  Maskbook
//
//  Created by caiyu on 2022/7/21.
//  Copyright © 2022 dimension. All rights reserved.
//

import UIKit
import web3swift


class NFTRedPacketABI: ABIContract {
    
    @InjectedProvider(\.userDefaultSettings)
    var userSetting
    
    @InjectedProvider(\.mainCoordinator)
    var mainCoordinator
    
    private(set) var ethcontract: EthereumContract?
    
    init() {
        self.ethcontract = EthereumContract(abiString, at: contractAddress)
    }
    
    var contractAddress: EthereumAddress {
        guard let addressStr = userSetting.network.redPacketAddressV4,
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
}

extension NFTRedPacketABI {
    enum Functions: String, CaseIterable, RawRepresentable {
        // readable fuctions
        case checkAvailability = "check_availability"
        // writable fuctions
        case claim
        case createRedPacket = "create_red_packet"
    }
    
    enum Events: String, CaseIterable, RawRepresentable {
        case claimSuccess = "ClaimSuccess"
        case creationSuccess = "CreationSuccess"
        case refundSuccess = "RefundSuccess"
    }
    
}
