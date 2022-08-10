//
//  WalletAssetObserver.swift
//  Maskbook
//
//  Created by BradGao on 2021/3/24.
//  Copyright © 2021 dimension. All rights reserved.
//

import Combine
import CoreData
import CoreDataStack
import Foundation

public enum AssetActionType {
    case received, appended, changed, removed
    
    static func fromZerionActionType(_ action: ZerionAPIModel.ResponseAction) -> AssetActionType {
        switch action {
        case .appended:
            return .appended

        case .changed:
            return .changed

        case .received:
            return .received

        case .removed:
            return .removed
        }
    }
}

public protocol WalletAssetProviderDelegate: AnyObject {
    func didConnected(type: WalletAssetProviderType)
    func didDisconnected(type: WalletAssetProviderType)
    func didReceived(type: WalletAssetProviderType, tokenIDs: [String], action: AssetActionType, newObjectContext: NSManagedObjectContext)
    func didReceived(type: WalletAssetProviderType, transactions: [TransactionHistory], action: AssetActionType)
    func didReceived(type: WalletAssetProviderType, error: Error?)
}

public protocol WalletAssetProvider {
    var type: WalletAssetProviderType { get }
    var isConnected: Bool { get }
    var delegate: WalletAssetProviderDelegate? { get set }
    var refreshCompletionBlock: ((Error?) -> Void)? { get set }
    func connect()
    func disconnect()
    func refresh(_ completion: ((Error?) -> Void)?)
    
    /// Use this method to retrieve portfolio for the specified address
    func createBalancePublisher(addresses: [String]) -> AnyPublisher<(address: String, balance: NSDecimalNumber), Error>?
}

public enum WalletAssetProviderType: String {
    case zerion
    case debank
    case opensea
    case nftscan
}
