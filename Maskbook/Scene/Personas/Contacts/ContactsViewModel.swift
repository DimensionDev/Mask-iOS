//
//  ContactsViewViewModel.swift
//  Maskbook
//
//  Created by sxiaojian on 2021/8/19.
//  Copyright © 2021 dimension. All rights reserved.
//

import Combine
import CoreData
import CoreDataStack
import Foundation
import UIKit

class ContactsViewModel {
    private var disposeBag = Set<AnyCancellable>()

    @InjectedProvider(\.personaManager)
    private var personaManager

    var profileRecordsSubject = CurrentValueSubject<[ProfileRecord], Never>([])

    private var profileRecordPublisher: FetchedResultsPublisher<ProfileRecord>?
    private static func profileRecordPublisher(identifiers: [String]) -> FetchedResultsPublisher<ProfileRecord> {
        let fetchResultController: NSFetchedResultsController<ProfileRecord> = {
            let controller = NSFetchedResultsController<ProfileRecord>(
                fetchRequest: ProfileRepository.queryProfilesFetchRequest(identifiers: identifiers),
                managedObjectContext: AppContext.shared.coreDataStack.persistentContainer.viewContext,
                sectionNameKeyPath: nil,
                cacheName: nil
            )
            return controller
        }()
        return FetchedResultsPublisher(fetchResultController: fetchResultController)
    }
    
    var dataSource = CurrentValueSubject<[ProfileRecord], Never>([])
    var searchString = CurrentValueSubject<String, Never>("")
    var isSearching = CurrentValueSubject<Bool, Never>(false)

    init() {
        personaManager
            .currentPersona
            .receive(on: DispatchQueue.main)
            .flatMap { [weak self] personaRecord -> FetchedResultsPublisher<ProfileRecord> in
                var profileIdentifiers = [String]()
                if let personaIdentifier = personaRecord?.identifier {
                    let relations = RelationRepository.queryRelations(personaIdentifier: personaIdentifier)
                    profileIdentifiers = relations.compactMap(\.profileIdentifier)
                }
                let publisher = ContactsViewModel.profileRecordPublisher(identifiers: profileIdentifiers)
                self?.profileRecordPublisher = publisher
                return publisher
            }
            .assign(to: \.value, on: profileRecordsSubject)
            .store(in: &disposeBag)
        
        Publishers.CombineLatest(searchString, profileRecordsSubject)
            .sink { [weak self] _ in
                guard let self = self else { return }
                self.dataSource.value = self.profileRecordsSubject.value
                    .filter { [weak self] profile in
                        guard let text = self?.searchString.value else { return true }
                        if text.isEmpty {
                            return true
                        }
                        let isIdContains = profile.socialID.containsIgnoreCase(string: text)
                        if let nickname = profile.nickname {
                            return nickname.containsIgnoreCase(string: text) || isIdContains
                        }
                        return isIdContains
                    }
            }
            .store(in: &disposeBag)
        self.searchString.value = ""
    }
}
