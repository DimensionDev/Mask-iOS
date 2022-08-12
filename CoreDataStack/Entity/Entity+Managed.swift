//
//  Entity+Managed.swift
//  CoreDataStack
//
//  Created by BradGao on 2021/6/2.
//  Copyright © 2021 dimension. All rights reserved.
//

import CoreData
import Foundation

extension StoredKey: Managed {
    public static var defaultSortDescriptors: [NSSortDescriptor] {
        return [NSSortDescriptor(keyPath: \StoredKey.lastModifiedDate, ascending: false)]
    }
    
    public static func predicate(hash: String) -> NSPredicate {
        return NSPredicate(format: "%K == %@", #keyPath(StoredKey.hashString), hash)
    }
    
    public static func predicate(type: Int16) -> NSPredicate {
        return NSPredicate(format: "%K == %d", #keyPath(StoredKey.type), type)
    }
    
    public static func predicate(isDefault: Bool) -> NSPredicate {
        return NSPredicate(format: "%K == %@", #keyPath(StoredKey.isDefault), NSNumber(value: isDefault))
    }
    
    override public func awakeFromInsert() {
        super.awakeFromInsert()
        
        setPrimitiveValue(Date(), forKey: #keyPath(StoredKey.createdAt))
        setPrimitiveValue(Date(), forKey: #keyPath(StoredKey.lastModifiedDate))
    }
    
    override public func willSave() {
        super.willSave()
        
        setPrimitiveValue(Date(), forKey: #keyPath(StoredKey.lastModifiedDate))
    }
}

extension Account: Managed {
    public static var defaultSortDescriptors: [NSSortDescriptor] {
        // DebankAPI will change lastModifiedDate, So defaultSortDescriptors have a uncertain order, change to createdAt
        return [NSSortDescriptor(keyPath: \Account.createdAt, ascending: false)]
    }
    
    public static func predicate(address: String) -> NSPredicate {
        return NSPredicate(format: "%K =[c] %@", #keyPath(Account.address), address)
    }
    
    public static func predicate(chainId: Int64) -> NSPredicate {
        return NSPredicate(format: "%K == %d", #keyPath(Account.chainId), chainId)
    }
    
    override public func awakeFromInsert() {
        super.awakeFromInsert()
        
        setPrimitiveValue(Date(), forKey: #keyPath(Account.createdAt))
        setPrimitiveValue(Date(), forKey: #keyPath(Account.lastModifiedDate))
    }
    
    override public func willSave() {
        super.willSave()
        
        setPrimitiveValue(Date(), forKey: #keyPath(Account.lastModifiedDate))
    }
}

extension Token: Managed {
    public enum TokenType: String {
        case native
        case erc20
    }
    
    public var tokenType: TokenType {
        get {
            if let typeString = type, let type = TokenType(rawValue: typeString) {
                return type
            }
            return .erc20
        }
        set {
            type = newValue.rawValue
        }
    }
    
    public static var defaultSortDescriptors: [NSSortDescriptor] {
        return [NSSortDescriptor(keyPath: \Token.lastModifiedDate, ascending: false)]
    }
    
    static func predicate(name: String) -> NSPredicate {
        return NSPredicate(format: "%K == %@", #keyPath(Token.name), name)
    }
    
    static func predicate(symbol: String) -> NSPredicate {
        return NSPredicate(format: "%K == %@", #keyPath(Token.symbol), symbol)
    }
    
    static func predicate(networkId: Int64) -> NSPredicate {
        return NSPredicate(format: "%K == %d", #keyPath(Token.networkId), networkId)
    }
    
    static func predicate(chainId: Int64) -> NSPredicate {
        return NSPredicate(format: "%K == %d", #keyPath(Token.chainId), chainId)
    }
    
    public static func predicate(address: String) -> NSPredicate {
        return NSPredicate(format: "%K =[c] %@", #keyPath(Token.account.address), address)
    }
    
    public static func predicate(ofTypes types: [String]) -> NSPredicate {
        return NSPredicate(format: "%K IN %@", #keyPath(Token.type), types)
    }
    
    public static func predicate(notOfTypes types: [String]) -> NSPredicate {
        return NSPredicate(format: "NOT (%K IN %@) OR (%K == nil)", #keyPath(Token.type), types, #keyPath(Token.type))
    }
    
    public static func predicate(identifier: String) -> NSPredicate {
        return NSPredicate(format: "%K == %@", #keyPath(Token.identifier), identifier)
    }
    
    public static func predicate(ofIdentifiers identifiers: [String]) -> NSPredicate {
        return NSPredicate(format: "%K IN %@", #keyPath(Token.identifier), identifiers)
    }
    
    public static func predicate(notInIdentifiers identifiers: [String]) -> NSPredicate {
        return NSPredicate(format: "NOT (%K IN %@)", #keyPath(Token.identifier), identifiers)
    }
    
    public static func predicate(quantityNotZero: Bool) -> NSPredicate {
        let predicateString = quantityNotZero ? "%K > 0" : "%K >= 0"
        return NSPredicate(format: predicateString, #keyPath(Token.quantity))
    }
    
    public static func predicate(address: String, identifier: String) -> NSPredicate {
        let predicates = [
            predicate(address: address),
            predicate(identifier: identifier)
        ]
        return NSCompoundPredicate(andPredicateWithSubpredicates: predicates)
    }
    
    public static func predicate(address: String, ofIdentifiers identifiers: [String]) -> NSPredicate {
        let predicates = [
            predicate(address: address),
            predicate(ofIdentifiers: identifiers)
        ]
        return NSCompoundPredicate(andPredicateWithSubpredicates: predicates)
    }
    
    public static func predicate(address: String, notInIdentifiers identifiers: [String]) -> NSPredicate {
        let predicates = [
            predicate(address: address),
            predicate(notInIdentifiers: identifiers)
        ]
        return NSCompoundPredicate(andPredicateWithSubpredicates: predicates)
    }
    
    public static func predicate(address: String, networkId: Int, chainId: Int, types: [String]) -> NSPredicate {
        let predicates = [
            predicate(address: address),
            predicate(chainId: Int64(chainId)),
            predicate(networkId: Int64(networkId)),
            predicate(ofTypes: types)
        ]
        return NSCompoundPredicate(andPredicateWithSubpredicates: predicates)
    }
    
    public static func predicate(address: String, notInTypes: [String], quantityNotZero: Bool) -> NSPredicate {
        let predicates = [
            predicate(address: address),
            predicate(notOfTypes: notInTypes),
            predicate(quantityNotZero: quantityNotZero)
        ]
        return NSCompoundPredicate(andPredicateWithSubpredicates: predicates)
    }
    
    public static func predicate(address: String, networkId: Int, chainId: Int, notInTypes: [String], quantityNotZero: Bool) -> NSPredicate {
        let predicates = [
            predicate(address: address),
            predicate(chainId: Int64(chainId)),
            predicate(networkId: Int64(networkId)),
            predicate(notOfTypes: notInTypes),
            predicate(quantityNotZero: quantityNotZero)
        ]
        return NSCompoundPredicate(andPredicateWithSubpredicates: predicates)
    }
    
    public static func predicate(address: String, networkId: Int, chainId: Int) -> NSPredicate {
        let predicates = [
            predicate(address: address),
            predicate(chainId: Int64(chainId)),
            predicate(networkId: Int64(networkId))
        ]
        return NSCompoundPredicate(andPredicateWithSubpredicates: predicates)
    }
    
    public static func predicate(name: String, networkId: Int, chainId: Int) -> NSPredicate {
        let predicates = [
            predicate(name: name),
            predicate(chainId: Int64(chainId)),
            predicate(networkId: Int64(networkId))
        ]
        return NSCompoundPredicate(andPredicateWithSubpredicates: predicates)
    }
    
    public static func predicate(address: String, name: String, networkId: Int, chainId: Int) -> NSPredicate {
        let predicates = [
            predicate(address: address),
            predicate(name: name),
            predicate(chainId: Int64(chainId)),
            predicate(networkId: Int64(networkId))
        ]
        return NSCompoundPredicate(andPredicateWithSubpredicates: predicates)
    }
    
    public static func predicate(address: String, symbol: String, networkId: Int, chainId: Int) -> NSPredicate {
        let predicates = [
            predicate(address: address),
            predicate(symbol: symbol),
            predicate(chainId: Int64(chainId)),
            predicate(networkId: Int64(networkId))
        ]
        return NSCompoundPredicate(andPredicateWithSubpredicates: predicates)
    }
    
    override public func awakeFromInsert() {
        super.awakeFromInsert()
        
        setPrimitiveValue(Date(), forKey: #keyPath(Token.createdAt))
        setPrimitiveValue(Date(), forKey: #keyPath(Token.lastModifiedDate))
    }
    
    override public func willSave() {
        super.willSave()
        setPrimitiveValue(Date(), forKey: #keyPath(Token.lastModifiedDate))
    }
    
    public class func createIdentifier(
        chainId: Int64,
        networkId: Int64,
        symbol: String,
        account: String?) -> String {
            "\(chainId)-\(networkId)-\(symbol)-\(account ?? "")"
        }
}

extension Collectible: Managed {
    public static var defaultSortDescriptors: [NSSortDescriptor] {
        return [NSSortDescriptor(keyPath: \Collectible.id, ascending: false)]
    }
    
    override public func awakeFromInsert() {
        super.awakeFromInsert()
        
        setPrimitiveValue(Date(), forKey: #keyPath(Collectible.createdAt))
        setPrimitiveValue(Date(), forKey: #keyPath(Collectible.lastModifiedDate))
    }
    
    override public func willSave() {
        super.willSave()
        setPrimitiveValue(Date(), forKey: #keyPath(Collectible.lastModifiedDate))
    }
    
    public class func createIdentifier(
        chainId: Int64,
        networkId: Int64,
        id: String) -> String {
        return "\(chainId)-\(networkId)-\(id)"
    }

    public static func predicate(notInIdentifiers identifiers: [String]) -> NSPredicate {
        return NSPredicate(format: "NOT (%K IN %@)", #keyPath(Token.identifier), identifiers)
    }
    
    public class func predicate(address: String) -> NSPredicate {
        return NSPredicate(format: "%K =[c] %@", #keyPath(Collectible.account.address), address)
    }
    
    public class func predicate(address: String, enabled: Bool) -> NSPredicate {
        return NSPredicate(
            format: "%K =[c] %@ AND %K == %@",
            #keyPath(Collectible.account.address),
            address,
            #keyPath(Collectible.enabled),
            NSNumber(value: enabled)
        )
    }
    
    public class func predicate(address: String, networkId: UInt64, enabled: Bool) -> NSPredicate {
        return NSPredicate(
            format: "%K =[c] %@ AND %K == %@ AND %K == %@",
            #keyPath(Collectible.account.address),
            address,
            #keyPath(Collectible.enabled),
            NSNumber(value: enabled),
            #keyPath(Collectible.networkId),
            NSNumber(value: networkId)
        )
    }
    
    public class func predicate(accountAddress: String, networkId: UInt64, contractAddress: String, enabled: Bool) -> NSPredicate {
        return NSPredicate(
            format: "%K =[c] %@ AND %K == %@ AND %K == %@ AND %K == %@",
            #keyPath(Collectible.account.address),
            address,
            #keyPath(Collectible.enabled),
            NSNumber(value: enabled),
            #keyPath(Collectible.networkId),
            NSNumber(value: networkId),
            #keyPath(Collectible.address),
            contractAddress
        )
    }
    
    public static func predicate(address: String, notInIdentifiers identifiers: [String]) -> NSPredicate {
        let predicates = [
            predicate(address: address),
            predicate(notInIdentifiers: identifiers)
        ]
        return NSCompoundPredicate(andPredicateWithSubpredicates: predicates)
    }
}

extension Portfolio: Managed {
    public static var defaultSortDescriptors: [NSSortDescriptor] {
        return [NSSortDescriptor(keyPath: \Portfolio.lastModifiedDate, ascending: false)]
    }
    
    override public func awakeFromInsert() {
        super.awakeFromInsert()
        
        setPrimitiveValue(Date(), forKey: #keyPath(Token.createdAt))
        setPrimitiveValue(Date(), forKey: #keyPath(Token.lastModifiedDate))
    }
    
    override public func willSave() {
        super.willSave()
        setPrimitiveValue(Date(), forKey: #keyPath(Token.lastModifiedDate))
    }
    
    public static func predicate(ofChainIDs chainIDs: [Int64]) -> NSPredicate {
        return NSPredicate(format: "%K IN %@", #keyPath(Portfolio.chainId), chainIDs)
    }
    
    public static func predicate(ofNetworkIDs networkIDs: [Int64]) -> NSPredicate {
        return NSPredicate(format: "%K IN %@", #keyPath(Portfolio.networkId), networkIDs)
    }
    
    public static func predicate(chainIDs: [Int64], networkIDs: [Int64]) -> NSPredicate {
        let predicates = [
            predicate(ofChainIDs: chainIDs),
            predicate(ofNetworkIDs: networkIDs)
        ]
        return NSCompoundPredicate(andPredicateWithSubpredicates: predicates)
    }
}

extension Contact: Managed {
    public static var defaultSortDescriptors: [NSSortDescriptor] {
        return [NSSortDescriptor(keyPath: \Contact.lastModifedDate, ascending: false)]
    }
    
    static func predicate(address: String) -> NSPredicate {
        return NSPredicate(format: "%K == %@", #keyPath(Contact.address), address)
    }
    
    static func predicate(chainId: Int64) -> NSPredicate {
        return NSPredicate(format: "%K == %d", #keyPath(Contact.chainId), chainId)
    }
    
    static func predicate(networkId: Int64) -> NSPredicate {
        return NSPredicate(format: "%K == %d", #keyPath(Contact.networkId), networkId)
    }
    
    static func predicate(containsName contains: String) -> NSPredicate {
        return NSPredicate(format: "%K CONTAINS %@", #keyPath(Contact.name), contains)
    }
    
    static func predicate(containsEnsName contains: String) -> NSPredicate {
        return NSPredicate(format: "%K CONTAINS %@", #keyPath(Contact.ensName), contains)
    }
    
    static func predicate(name: String) -> NSPredicate {
        return NSPredicate(format: "%K == %@", #keyPath(Contact.name), name)
    }
    
    static func predicate(ensName: String) -> NSPredicate {
        return NSPredicate(format: "%K == %@", #keyPath(Contact.ensName), ensName)
    }
    
    // Search any contact which name/ensName **contains** query string
    public static func predicate(address: String?, chainId: Int64, networkId: Int64, containsName: String?, containsEnsName: String?) -> NSPredicate {
        var predicates = [predicate(chainId: Int64(chainId)), predicate(networkId: networkId)]
        if let toSearchAddress = address {
            predicates.append(predicate(address: toSearchAddress))
        }
        let predicate1 = NSCompoundPredicate(andPredicateWithSubpredicates: predicates)
        
        var predicates2 = [NSPredicate]()
        if let toSearchName = containsName {
            predicates2.append(predicate(containsName: toSearchName))
        }
        if let toSearchEnsName = containsEnsName {
            predicates2.append(predicate(containsEnsName: toSearchEnsName))
        }
        if predicates2.isEmpty {
            return predicate1
        } else {
            let predicate2 = NSCompoundPredicate(andPredicateWithSubpredicates: predicates2)
            return NSCompoundPredicate(andPredicateWithSubpredicates: [predicate1, predicate2])
        }
    }
    
    // Search any contact which name/ensName **exactly match** query string
    public static func predicate(address: String?, chainId: Int64, networkId: Int64, name: String?, ensName: String?) -> NSPredicate {
        var predicates = [predicate(chainId: Int64(chainId)), predicate(networkId: networkId)]
        if let toSearchAddress = address {
            predicates.append(predicate(address: toSearchAddress))
        }
        let predicate1 = NSCompoundPredicate(andPredicateWithSubpredicates: predicates)
        
        var predicates2 = [NSPredicate]()
        if let toSearchName = name {
            predicates2.append(predicate(name: toSearchName))
        }
        if let toSearchEnsName = ensName {
            predicates2.append(predicate(ensName: toSearchEnsName))
        }
        if predicates2.isEmpty {
            return predicate1
        } else {
            let predicate2 = NSCompoundPredicate(andPredicateWithSubpredicates: predicates2)
            return NSCompoundPredicate(orPredicateWithSubpredicates: [predicate1, predicate2])
        }
    }
    
    public static func predicate(chainId: Int64, networkId: Int64) -> NSPredicate {
        return NSCompoundPredicate(andPredicateWithSubpredicates: [predicate(chainId: Int64(chainId)), predicate(networkId: networkId)])
    }
    
    override public func awakeFromInsert() {
        super.awakeFromInsert()
        
        setPrimitiveValue(Date(), forKey: #keyPath(Contact.createdAt))
        setPrimitiveValue(Date(), forKey: #keyPath(Contact.lastModifedDate))
    }
    
    override public func willSave() {
        super.willSave()
        
        setPrimitiveValue(Date(), forKey: #keyPath(Contact.lastModifedDate))
    }
}

extension BlobStorage: Managed {
    public static var defaultSortDescriptors: [NSSortDescriptor] {
        return [NSSortDescriptor(keyPath: \BlobStorage.lastModifiedDate, ascending: false)]
    }
    
    public static func predicate(uuid: String) -> NSPredicate {
        return NSPredicate(format: "%K == %@", #keyPath(BlobStorage.uuid), uuid)
    }

    override public func awakeFromInsert() {
        super.awakeFromInsert()
        
        setPrimitiveValue(Date(), forKey: #keyPath(BlobStorage.createdAt))
        setPrimitiveValue(Date(), forKey: #keyPath(BlobStorage.lastModifiedDate))
    }
    
    override public func willSave() {
        super.willSave()
        
        setPrimitiveValue(Date(), forKey: #keyPath(BlobStorage.lastModifiedDate))
    }
}

extension LocalStorage: Managed {
    public static var defaultSortDescriptors: [NSSortDescriptor] {
        return [NSSortDescriptor(keyPath: \LocalStorage.lastModifiedDate, ascending: false)]
    }
    
    static func predicate(keys: [String]) -> NSPredicate {
        return NSPredicate(format: "%K IN %@", #keyPath(LocalStorage.key), keys)
    }
    
    public static func predicate(extensionID: String) -> NSPredicate {
        return NSPredicate(format: "%K == %@", #keyPath(LocalStorage.extensionID), extensionID)
    }
    
    public static func predicate(keys: [String], extensionID: String) -> NSPredicate {
        let predicates = [
            predicate(keys: keys),
            predicate(extensionID: extensionID)
        ]
        return NSCompoundPredicate(andPredicateWithSubpredicates: predicates)
    }

    override public func awakeFromInsert() {
        super.awakeFromInsert()
        
        setPrimitiveValue(Date(), forKey: #keyPath(LocalStorage.createdAt))
        setPrimitiveValue(Date(), forKey: #keyPath(LocalStorage.lastModifiedDate))
    }
    
    override public func willSave() {
        super.willSave()
        
        setPrimitiveValue(Date(), forKey: #keyPath(LocalStorage.lastModifiedDate))
    }
}

extension WalletConnectSession: Managed {
    public static var defaultSortDescriptors: [NSSortDescriptor] {
        return [NSSortDescriptor(keyPath: \Account.lastModifiedDate, ascending: false)]
    }
    
    public static func predicate(topic: String) -> NSPredicate {
        return NSPredicate(format: "%K == %@", #keyPath(WalletConnectSession.topic), topic)
    }
    
    override public func awakeFromInsert() {
        super.awakeFromInsert()
        
        setPrimitiveValue(Date(), forKey: #keyPath(WalletConnectSession.createdAt))
        setPrimitiveValue(Date(), forKey: #keyPath(WalletConnectSession.lastModifiedDate))
    }
    
    override public func willSave() {
        super.willSave()
        
        setPrimitiveValue(Date(), forKey: #keyPath(WalletConnectSession.lastModifiedDate))
    }
}


extension PluginStorage: Managed {
    public static var defaultSortDescriptors: [NSSortDescriptor] {
        return [NSSortDescriptor(keyPath: \PluginStorage.lastModifiedDate, ascending: false)]
    }
    
    static func predicate(keys: [String]) -> NSPredicate {
        \PluginStorage.key --> Set(keys)
    }
    
    public static func predicate(pluginID: String) -> NSPredicate {
        \PluginStorage.pluginID == pluginID
    }

    public static func predicate(keys: [String], pluginID: String) -> NSPredicate {
        NSCompoundPredicate(andPredicateWithSubpredicates: [
            \PluginStorage.key --> Set(keys),
            \PluginStorage.pluginID == pluginID
        ])
    }

    override public func awakeFromInsert() {
        super.awakeFromInsert()
        
        setPrimitiveValue(Date(), forKey: #keyPath(PluginStorage.createdAt))
        setPrimitiveValue(Date(), forKey: #keyPath(PluginStorage.lastModifiedDate))
    }
    
    override public func willSave() {
        super.willSave()
        
        setPrimitiveValue(Date(), forKey: #keyPath(PluginStorage.lastModifiedDate))
    }
}

extension UploadFile: Managed {
    public static var defaultSortDescriptors: [NSSortDescriptor] {
        [NSSortDescriptor(keyPath: \UploadFile.createdAt, ascending: false)]
    }
}
