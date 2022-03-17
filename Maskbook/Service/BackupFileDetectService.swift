//
//  BackupFileDetectService.swift
//  Maskbook
//
//  Created by xiaojian sun on 2022/3/3.
//  Copyright © 2022 dimension. All rights reserved.
//

import Foundation

class BackupFileDetectService {
    internal static let shared = BackupFileDetectService()

    @InjectedProvider(\.userDefaultSettings)
    var userSetting

    @InjectedProvider(\.mainCoordinator)
    var coordinator

    func detectBackupFiles() {
        if let date = userSetting.backupFileDetectDate {
            if !date.isInSameDay(as: Date()) {
                startDetectBackupFiles()
                userSetting.backupFileDetectDate = Date()
            }
        } else {
            startDetectBackupFiles()
            userSetting.backupFileDetectDate = Date()
        }
    }

    func startDetectBackupFiles() {
        let files = try? MoveBackupDataViewModel.detectBackupFiles()
        if let files = files,
           !files.isEmpty
        {
            coordinator.present(scene: .moveBackupData, transition: .panModel(animated: true))
        }
    }
}

enum BackupFileDetectServiceInjectKey: InjectValueKey {
    static var defaultInjectValue = BackupFileDetectService.shared
}

extension InjectValues {
    var backupFileDetectService: BackupFileDetectService {
        Self[BackupFileDetectServiceInjectKey.self]
    }
}
