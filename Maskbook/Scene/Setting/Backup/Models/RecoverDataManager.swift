//
//  RecoverDataManager.swift
//  Maskbook
//
//  Created by Brad Gao on 2022/4/1.
//  Copyright © 2022 dimension. All rights reserved.
//

import Combine
import Foundation
import SwiftyJSON

struct RecoverDataManager {
    /// On Mask mobile apps, most data is stored on the mobile app's native database, while recovering data from backup files:
    ///  1. We restore most (personas, profiles, relations, wallets, posts) data to mobile app's native database, then
    ///  2. We `trim` all the `restored` info, then send rest data to JS.
    static func trimNativeInfo(_ originJson: JSON) -> String? {
        var json = originJson
        json["personas"] = []
        json["accounts"] = []
        json["contacts"] = []
        json["wallets"] = []
        json["posts"] = []
        json["relations"] = []
        return json.rawString()
    }
    
    static func performRestoreBackup(_ data: Data) -> AnyPublisher<Void, Error> {
        guard let json = data.asCompatibleBackupJSON() else {
            return Fail(error: RemoteRestoreInfoViewModel.Failure.failedParsingRestoreData)
                .eraseToAnyPublisher()
        }

        guard let trimmedString = trimNativeInfo(json) else {
            return Fail(error: RemoteRestoreInfoViewModel.Failure.failedParsingRestoreData)
                .eraseToAnyPublisher()
        }
        return RestoreBackupMWEMessage.withPayload({
            .init(backupInfo: trimmedString)
        })
        .eraseToAnyPublisher()
        .tryMap { restoreResult -> Void in
            guard restoreResult.isSuccess else {
                throw RemoteRestoreInfoViewModel.Failure.failedParsingRestoreData
            }
            do {
                try PersonaRepository.restoreFromJson(json["personas"])
                try ProfileRepository.restoreFromJson(json["profiles"])
                try PostRepository.restoreFromJson(json["posts"])
                try RelationRepository.restoreFromJson(json["relations"])
                try FileServiceRepository.restoreFromJson(json["plugin"])
            } catch {
                throw error
            }
        }
        .eraseToAnyPublisher()
    }
}
