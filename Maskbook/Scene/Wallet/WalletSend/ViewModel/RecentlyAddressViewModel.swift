//
//  RecentlyAddressViewModel.swift
//  Maskbook
//
//  Created by caiyu on 2021/7/6.
//  Copyright © 2021 dimension. All rights reserved.
//

import Combine
import CoreData
import CoreDataStack
import UIKit

class RecentlyAddressViewModel: NSObject {
    
    lazy var pasteStringPublisher: AnyPublisher<String, Never> = {
        return Future { [weak self] promise in
            guard let self = self else { return promise(.success("")) }
            promise(.success(UIPasteboard.general.string ?? ""))
        }
        .eraseToAnyPublisher()
    }()
    
    func generateCellItem(toSearch text: String?) -> [CellItem] {
        let currentChainId = Int64(maskUserDefaults.network.chain.rawValue)
        let currentNetworkId = Int64(maskUserDefaults.network.networkId)
        let rencentlyAddress = maskUserDefaults.recentlyAddresses.filter {
            $0.chainId == Int64(maskUserDefaults.network.networkId)
        }
        
        var items = [CellItem]()
        let contacts = ContactManager.getAssignContact(chainId: currentChainId,
                                                       networkId: currentNetworkId,
                                                       address: nil,
                                                       containsName: text,
                                                       containsEnsName: text)
            .prefix(5)
        items.append(contentsOf: contacts.map {
            let displayName = $0.name ?? ""
            return CellItem.contact(name: displayName, ensName: $0.ensName, address: $0.address)
        })
        rencentlyAddress.forEach { recentlyAddress in
            guard !contacts.contains(where: { contact in
                contact.address == recentlyAddress.address
            }) else {
                return
            }
            items.append(CellItem.address(address: recentlyAddress.address))
        }
        return items
    }
    
    func generateRecentAddressCellItem() -> [CellItem] {
        let currentChainId = Int64(maskUserDefaults.network.chain.rawValue)
        let currentNetworkId = Int64(maskUserDefaults.network.networkId)
        let rencentlyAddress = maskUserDefaults.recentlyAddresses.filter {
            $0.chainId == Int64(maskUserDefaults.network.networkId)
        }
        
        var items = [CellItem]()
        let contacts = ContactManager.getAssignContact(chainId: currentChainId,
                                                       networkId: currentNetworkId)
        rencentlyAddress.forEach { recentlyAddress in
            guard !contacts.contains(where: { contact in
                contact.address == recentlyAddress.address
            }) else {
                return
            }
            items.append(CellItem.address(address: recentlyAddress.address))
        }
        
        return items
    }
    
    func generateContactCellItem() -> [CellItem] {
        let currentChainId = Int64(maskUserDefaults.network.chain.rawValue)
        let currentNetworkId = Int64(maskUserDefaults.network.networkId)
        var items = [CellItem]()
        let contacts = ContactManager.getAssignContact(chainId: currentChainId,
                                                       networkId: currentNetworkId)
            .prefix(5)
        items.append(contentsOf: contacts.map {
            let displayName = $0.name ?? ""
            return CellItem.contact(name: displayName, ensName: $0.ensName, address: $0.address)
        })
        return items
    }
        
    func pasteCellItem(pasteText: String, ensName: String?) -> [CellItem] {
        var items = [CellItem]()
        items.append(.paste(address: pasteText, ensName: ensName))
        return items
    }
}

extension RecentlyAddressViewModel {
    enum Section: CaseIterable {
        case paste
        case contact
        case address
        case search
    }
    
    enum CellItem: Hashable {
        case contact(name: String, ensName: String?, address: String?)
        case address(address: String)
        case paste(address: String, ensName: String?)
    }
}
