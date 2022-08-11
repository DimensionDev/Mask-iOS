//
//  SearchSingleNFTViewModel.swift
//  Maskbook
//
//  Created by caiyu on 2022/8/1.
//  Copyright © 2022 dimension. All rights reserved.
//

import Combine
import CoreData
import CoreDataStack
import Foundation
import UIKit
class SearchSingleNFTViewModel {
    private var disposeBag = Set<AnyCancellable>()

    @InjectedProvider(\.userDefaults)
    private var userDefaults

    var collectiblesSubject = CurrentValueSubject<[Collectible], Never>([])

    private var collectiblesPublisher: FetchedResultsPublisher<Collectible>?
    private static func collectiblesPublisher(contractAdress: String) -> FetchedResultsPublisher<Collectible> {
        let fetchResultController: NSFetchedResultsController<Collectible> = {
            let fetchRequest = Collectible.sortedFetchRequest
            if let address = maskUserDefaults.defaultAccountAddress {
                let predicate = Collectible.predicate(address: address, networkId: maskUserDefaults.network.networkId, contractAddress: contractAdress, enabled: true)
                fetchRequest.predicate = predicate
            }
            fetchRequest.returnsObjectsAsFaults = false
            let controller = NSFetchedResultsController<Collectible>(
                fetchRequest: fetchRequest,
                managedObjectContext: AppContext.shared.coreDataStack.persistentContainer.viewContext,
                sectionNameKeyPath: nil,
                cacheName: nil
            )

            return controller
        }()
        return FetchedResultsPublisher(fetchResultController: fetchResultController)
    }

    var dataSource = CurrentValueSubject<[Collectible], Never>([])
    var selectedCollectibles = CurrentValueSubject<[Collectible], Never>([])
    var searchString = CurrentValueSubject<String, Never>("")

    init(contractAddress: String) {
        collectiblesPublisher = SearchSingleNFTViewModel.collectiblesPublisher(contractAdress: contractAddress)

        collectiblesPublisher?
            .receive(on: DispatchQueue.main)
            .sink(receiveValue: { [weak self] collectibles in
                self?.collectiblesSubject.value = collectibles
            })
            .store(in: &disposeBag)

        Publishers.CombineLatest(searchString, collectiblesSubject)
            .sink { [weak self] _ in
                guard let self = self else {
                    return
                }
                self.dataSource.value = self.collectiblesSubject.value
                    .filter { [weak self] collectible in
                        guard let text = self?.searchString.value else {
                            return true
                        }
                        if text.isEmpty {
                            return true
                        }

                        guard let name = collectible.name, let tokenID = collectible.tokenId else {
                            return false
                        }
                        let isNameContains = name.containsIgnoreCase(string: text)
                        let isTokenIDContains = tokenID.containsIgnoreCase(string: text)
                        return isNameContains || isTokenIDContains
                    }
            }
            .store(in: &disposeBag)
        searchString.value = ""
    }
}
