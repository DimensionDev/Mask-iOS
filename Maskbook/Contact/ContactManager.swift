//
//  ContactManager.swift
//  Maskbook
//
//  Created by caiyu on 2021/7/6.
//  Copyright © 2021 dimension. All rights reserved.
//

import Combine
import CoreData
import CoreDataStack
import Foundation

enum ContactManager {
    private static let viewContext = AppContext.shared.coreDataStack.persistentContainer.viewContext
    private static let backgroundContext = AppContext.shared.backgroundContext
    
    static func getAssignContact(chainId: Int64,
                                 networkId: Int64,
                                 address: String?,
                                 containsName: String?,
                                 containsEnsName: String?) -> [Contact] {
        do {
            let fetchRequest = Contact.sortedFetchRequest
            fetchRequest.predicate = Contact.predicate(
                address: address,
                chainId: chainId,
                networkId: networkId,
                containsName: containsName,
                containsEnsName: containsEnsName)
            fetchRequest.returnsObjectsAsFaults = false
            let contacts = try viewContext.fetch(fetchRequest)
            return contacts
        } catch {
            return []
        }
    }
    
    static func getAssignContact(chainId: Int64,
                                 networkId: Int64,
                                 address: String?,
                                 name: String?,
                                 ensName: String?) -> [Contact] {
        do {
            let fetchRequest = Contact.sortedFetchRequest
            fetchRequest.predicate = Contact.predicate(
                address: address,
                chainId: chainId,
                networkId: networkId,
                name: name,
                ensName: ensName)
            fetchRequest.returnsObjectsAsFaults = false
            let contacts = try viewContext.fetch(fetchRequest)
            return contacts
        } catch {
            return []
        }
    }
    
    @discardableResult
    static func addContact(address: String?,
                           name: String?,
                           ensName: String?,
                           chainId: Int64,
                           networkId: Int64) -> Bool {
        do {
            guard ContactManager.getAssignContact(
                chainId: chainId,
                networkId: networkId,
                address: address,
                name: name,
                ensName: ensName).isEmpty else {
                return false
            }
            let contact = Contact(address: address,
                                  name: name,
                                  ensName: ensName,
                                  chainId: chainId,
                                  networkId: networkId,
                                  context: AppContext.shared.coreDataStack.persistentContainer.viewContext)
            viewContext.insert(contact)
            try viewContext.saveOrRollback()
            return true
        } catch {
            return false
        }
    }
    
    static func saveChanges() {
        do {
            try viewContext.saveOrRollback()
        } catch {
            print(error.localizedDescription)
        }
    }
}

extension Contact {
    convenience init(address: String?,
                     name: String?,
                     ensName: String?,
                     chainId: Int64,
                     networkId: Int64,
                     context: NSManagedObjectContext) {
        self.init(context: context)
        self.createdAt = Date()
        self.chainId = chainId
        self.networkId = networkId
        self.name = name
        self.address = address
        self.ensName = ensName
        self.id = UUID().uuidString
    }
}
