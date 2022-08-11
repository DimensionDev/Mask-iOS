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
            .map { text, collectibles -> [Collectible] in
                guard !text.isEmpty else {
                    return collectibles
                }
                
                return collectibles.filter { collectible in
                    guard let name = collectible.name,
                          let tokenID = collectible.tokenId else {
                        return false
                    }

                    if let _ = [name, tokenID].first(where: { $0.containsIgnoreCase(string: text) }) {
                        return true
                    } else {
                        return false
                    }
                }
            }
            .throttle(for: .seconds(0.5), scheduler: DispatchQueue.main, latest: true)
            .bind(to: \.dataSource, on: self)
            .store(in: &disposeBag)
        searchString.value = ""
    }
}
