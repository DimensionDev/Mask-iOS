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
        guard let json = try? JSON(data: data) else {
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
                try PersonaRepository.restoreFromJson(json["personas"] )
                try ProfileRepository.restoreFromJson(json["profiles"] )
                try PostRepository.restoreFromJson(json["posts"] )
                try RelationRepository.restoreFromJson(json["relations"] )
            } catch {
                throw error
            }
        }
        .eraseToAnyPublisher()
    }
}
