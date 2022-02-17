//
//  MaskSocialViewModel.swift
//  Maskbook
//
//  Created by Hugo L on 2021/10/21.
//  Copyright © 2021 dimension. All rights reserved.
//

import Combine
import Foundation
import OSLog

final class MaskSocialViewModel {
    @InjectedProvider(\.userDefaultSettings)
    var userSetting
    
    let backupReminder = PassthroughSubject<Void, Never>()
    
    func checkIfNeedBackup() {
        os_log("[backup reminder] start `checkIfNeedBackup`", type: .debug)
        // 0、Backup reminder, remind once every 3 days when backup time exceeds one week.
        // 1、Remind once a day when it is used for more than 2 weeks.
        guard let secondsAfterBackup = userSetting.backupDate?.timeIntervalSinceNow else {
            return
        }
        progressBackupReminder(backupDuration: secondsAfterBackup * -1, rules: [
            (backDuration: timeInterval(days: 7), alertDuration: timeInterval(days: 3)),
            (backDuration: timeInterval(days: 14), alertDuration: timeInterval(days: 1))
        ])
    }
    
    private func timeInterval(days: Int) -> TimeInterval {
        TimeInterval(days) * 24 * 60 * 60
    }
    
    private func progressBackupReminder(
        backupDuration: TimeInterval,
        rules: [(backDuration: TimeInterval, alertDuration: TimeInterval)]
    ) {
        let alertDuration = userSetting.backupAlertDate?.timeIntervalSinceNow
        let rule = rules.first { param in
            if backupDuration > param.0 {
                guard let alertDuration = alertDuration else {
                    return true
                }
                if (alertDuration * -1) > param.1 {
                    return true
                }
            }
            
            return false
        }
        if rule != nil {
            backupReminder.send()
            userSetting.backupAlertDate = Date()
        }
    }
}
