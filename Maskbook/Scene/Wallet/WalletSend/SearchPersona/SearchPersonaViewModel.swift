//
//  SearchPersonaViewModel.swift
//  Maskbook
//
//  Created by caiyu on 2022/5/24.
//  Copyright © 2022 dimension. All rights reserved.
//

import Combine
import CoreData
import CoreDataStack
import Foundation
import UIKit

class SearchPersonaViewModel{

    private var disposeBag = Set<AnyCancellable>()

    @InjectedProvider(\.personaManager)
    private var personaManager

    var profileRecordsSubject = CurrentValueSubject<[PersonaRecord], Never>([])

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
    var dataSource = CurrentValueSubject<[PersonaRecord], Never>([])
    var selectedProfile = CurrentValueSubject<[PersonaRecord], Never>([])
    var searchString = CurrentValueSubject<String, Never>("")
    
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
                let publisher = SearchPersonaViewModel.profileRecordPublisher(identifiers: profileIdentifiers)
                self?.profileRecordPublisher = publisher
                return publisher
            }
            .sink(receiveValue: {[weak self] profiles in
                self?.profileRecordsSubject.value = profiles.compactMap{ $0.linkedPersona}
            })
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
                        let isIdContains = profile.identifier?.containsIgnoreCase(string: text)
                        if let nickname = profile.nickname {
                            return nickname.containsIgnoreCase(string: text) || (isIdContains != nil)
                        }
                        return isIdContains ?? false
                    }
            }
            .store(in: &disposeBag)
             self.searchString.value = ""
    }
}
