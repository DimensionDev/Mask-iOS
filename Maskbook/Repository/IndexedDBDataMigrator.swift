//
//  IndexedDBDataMigrator.swift
//  Maskbook
//
//  Created by Brad Gao on 2022/1/22.
//  Copyright © 2022 dimension. All rights reserved.
//

import CoreDataStack
import Foundation

enum IndexedDBDataMigrator {
    static func migrateToCoreData(_ record: IndexedDBAllRecord) {
        let context = AppContext.shared.backgroundContext
        for persona in record.personas {
            PersonaRepository.createPersona(persona: persona, context: context)
        }
        for profile in record.profiles {
            ProfileRepository.createProfile(profile: profile, context: context)
        }
        for relation in record.relations {
            RelationRepository.createRelation(relation: relation, context: context)
        }
    }
}
