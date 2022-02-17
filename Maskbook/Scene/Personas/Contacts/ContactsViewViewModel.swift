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

class ContactsViewViewModel {
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
                let publisher = ContactsViewViewModel.profileRecordPublisher(identifiers: profileIdentifiers)
                self?.profileRecordPublisher = publisher
                return publisher
            }
            .assign(to: \.value, on: profileRecordsSubject)
            .store(in: &disposeBag)
    }
}
