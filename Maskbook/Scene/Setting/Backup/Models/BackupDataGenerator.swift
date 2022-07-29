//
//  BackupDataGenerator.swift
//  Maskbook
//
//  Created by Brad Gao on 2022/3/30.
//  Copyright © 2022 dimension. All rights reserved.
//

import CoreDataStack
import SwiftyJSON

struct BackupDataGenerator {
    static func generate() async -> JSON {
        var backupJSON = JSON()
        await backupJSON["personas"] = JSON(PersonaRepository.getPersonasForBackup())
        await backupJSON["profiles"] = JSON(ProfileRepository.getProfilesForBackup())
        await backupJSON["posts"] = JSON(PostRepository.getPostsForBackup())
        await backupJSON["relations"] = JSON(RelationRepository.getRelationBackup())
        await backupJSON["plugin"] = JSON(FileServiceRepository.getFileserviceBackup())
        
        return backupJSON
    }
}
