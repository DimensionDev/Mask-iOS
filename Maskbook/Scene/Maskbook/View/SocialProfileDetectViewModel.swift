//
//  SocialProfileDetectViewModel.swift
//  Maskbook
//
//  Created by BradGao on 2021/8/19.
//  Copyright © 2021 dimension. All rights reserved.
//

import Combine
import CoreDataStack
import Foundation

class SocialProfileDetectViewModel {
    // MARK: - Input

    // MARK: - Output

    lazy var menuItemsPublisher: AnyPublisher<[ProfileItem], Never> = Future { [weak self] promise in
        guard let self = self else { return promise(.success([])) }
        let items = self.generateMenuItems()
        promise(.success(items))
    }
    .eraseToAnyPublisher()

    let profiles: [SocialProfile]
    let personaIdentifier: String
    let persona: PersonaRecord?

    init(profiles: [SocialProfile], personaIdentifier: String) {
        self.profiles = profiles
        self.personaIdentifier = personaIdentifier
        self.persona = PersonaManager.personaRecordFor(identifier: personaIdentifier)
    }

    private func generateMenuItems() -> [ProfileItem] {
        let items = profiles.map {
            ProfileItem.item(profile: $0)
        }
        return items
    }
}

extension SocialProfileDetectViewModel {
    enum Section {
        case main
    }

    enum ProfileItem: Hashable {
        case item(profile: SocialProfile)
    }
}
