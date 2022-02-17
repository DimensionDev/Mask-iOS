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
//    lazy var cellItemPublisher: AnyPublisher<[CellItem], Never> = {
//        return Future { [weak self] promise in
//            guard let self = self else { return promise(.success([])) }
//            let items = self.generateCellItem()
//            promise(.success(items))
//        }
//        .eraseToAnyPublisher()
//    }()
    
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
//            guard
//                let item = ContactManager.getAssignContact(chainId: currentChainId,
//                                                           xnetworkId: currentNetworkId, address: recentlyAddress.address).first else {
//                items.append(CellItem.address(address: recentlyAddress.address))
//                return
//            }
//            let displayName = (item.ensName ?? item.name) ?? ""
//            items.append(CellItem.contact(name: displayName, address: recentlyAddress.address))
        }
        return items
    }
}

extension RecentlyAddressViewModel {
    enum Section: CaseIterable {
        case main
    }
    
    enum CellItem: Hashable {
        case contact(name: String, ensName: String?, address: String?)
        case address(address: String)
    }
}
