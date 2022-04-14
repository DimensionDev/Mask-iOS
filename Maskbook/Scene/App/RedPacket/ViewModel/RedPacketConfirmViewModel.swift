//
//  RedPacketConfirmViewModel.swift
//  Maskbook
//
//  Created by Hugo L on 2022/4/14.
//  Copyright © 2022 dimension. All rights reserved.
//

import CoreDataStack
import Foundation
import web3swift
import BigInt

class RedPacketConfirmViewModel: NSObject, ObservableObject {
    @Published var address: String = ""
    @Published var gasFee: String
    @Published var inputParam: HappyRedPacketV4.CreateRedPacketInput?
    @Published var token: Token?
    
    var transaction: EthereumTransaction?
    var completion: ((String?, Error?) -> Void)?
    
    var tokenIconURL: URL? {
        guard let url = token?.logoUrl else { return nil }
        return URL(string: url)
    }
    
    var message: String {
        inputParam?.message ?? ""
    }
    
    var mode: RedPacket.RedPacketType {
        guard let input = inputParam else {
            return .average
        }
        
        if input.ifrandom {
            return .random
        } else {
            return .average
        }
    }
    
    var share: String {
        guard let input = inputParam else {
            return ""
        }
        
        return String(input.number)
    }
    
    var amountPerShare: String {
        guard let input = inputParam else {
            return ""
        }
        guard mode == .average else {
            return ""
        }
        guard let decimals = token?.decimal else {
            return ""
        }
        let quantityValue = NSDecimalNumber(string: String(input.totalTokens / input.number))
        guard quantityValue != .notANumber else {
            return ""
        }
        let quantityInt = quantityValue.dividing(by: NSDecimalNumber(mantissa: 1, exponent: decimals, isNegative: false))
        if quantityInt.doubleValue < 0.0001 {
            return "< 0.0001"
        }
        let roundBehavior = NSDecimalNumberHandler(roundingMode: .plain, scale: 4, raiseOnExactness: false, raiseOnOverflow: false, raiseOnUnderflow: false, raiseOnDivideByZero: false)
        return quantityInt.rounding(accordingToBehavior: roundBehavior).stringValue
    }
    
    var totalAmount: String {
        guard let input = inputParam else {
            return ""
        }
        guard let decimals = token?.decimal else {
            return ""
        }
        let quantityValue = NSDecimalNumber(string: String(input.totalTokens))
        guard quantityValue != .notANumber else {
            return ""
        }
        let quantityInt = quantityValue.dividing(by: NSDecimalNumber(mantissa: 1, exponent: decimals, isNegative: false))
        if quantityInt.doubleValue < 0.0001 {
            return "< 0.0001"
        }
        let roundBehavior = NSDecimalNumberHandler(roundingMode: .plain, scale: 4, raiseOnExactness: false, raiseOnOverflow: false, raiseOnUnderflow: false, raiseOnDivideByZero: false)
        return quantityInt.rounding(accordingToBehavior: roundBehavior).stringValue
    }
    
    @InjectedProvider(\.userDefaultSettings)
    private var settings
    private let viewContext = AppContext.shared.coreDataStack.persistentContainer.viewContext
    
    init(
        inputParam: HappyRedPacketV4.CreateRedPacketInput?,
        transaction: EthereumTransaction?,
        completion: ((String?, Error?) -> Void)?
    ) {
        //TODO: gas fee
        self.gasFee = ""
        self.inputParam = inputParam
        self.transaction = transaction
        self.completion = completion
        
        super.init()
        
        self.address = settings.defaultAccountAddress ?? ""
        
        // for fetching a logoURL in token with address
        let fetchRequest = Token.sortedFetchRequest
        fetchRequest.predicate = Token.predicate(address: address)
        fetchRequest.fetchLimit = 1
        token = try? viewContext.fetch(fetchRequest).first
    }
}

class RedPacketConfirmViewModelMock: RedPacketConfirmViewModel {
    override var message: String {
        "Happy New Year"
    }
    
    override var mode: RedPacket.RedPacketType {
        .average
    }
    
    override var share: String {
        "40"
    }
    
    override var amountPerShare: String {
        "2.0000"
    }
    
    override var totalAmount: String {
        "2,000.0000 DAI"
    }
    
    override var tokenIconURL: URL? {
         URL(string: "https://s2.coinmarketcap.com/static/img/coins/64x64/4943.png")
    }
    
    init() {
        super.init(
            inputParam: nil,
            transaction: nil,
            completion: nil)
    }
}
