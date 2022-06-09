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

    var profileRecordsSubject = CurrentValueSubject<[ProfileRecord], Never>([])

    private var profileRecordPublisher: FetchedResultsPublisher<ProfileRecord>?    
    var dataSource = CurrentValueSubject<[ProfileRecord], Never>([])
    var selectedProfile = CurrentValueSubject<[ProfileRecord], Never>([])
    var searchString = CurrentValueSubject<String, Never>("")
    
    init() {
        profileRecordsSubject = personaManager.currentProfiles
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
