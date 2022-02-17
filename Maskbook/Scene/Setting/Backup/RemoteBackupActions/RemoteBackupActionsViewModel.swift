//
//  RemoteBackupActionsViewModel.swift
//  Maskbook
//
//  Created by Hugo L on 2021/10/18.
//  Copyright © 2021 dimension. All rights reserved.
//

import Combine
import Foundation

final class RemoteBackupActionsViewModel: ObservableObject {
    @Published
    private(set) var remoteBackupPreview: RemoteBackupPreview
    
    @Published
    var performAction: PerformAction?
    
    let cloudVerifyResult: CloudVerifyResult
    
    var uploadedTime: String {
        let date = Date(timeIntervalSince1970: remoteBackupPreview.uploadedTime ?? 0)
        let formatter = DateFormatter()
        formatter.dateFormat = "yyyy-MM-dd hh:mm"
        return formatter.string(from: date)
    }
    
    var fileSize: String {
        let fileSize = remoteBackupPreview.size ?? 0
        let kb = fileSize / 1_024
        guard kb > 1_024 else {
            return String(format: "%.2f KB", kb)
        }

        let mb = kb / 1_024
        guard mb > 1_024 else {
            return String(format: "%.2f MB", mb)
        }

        let gb = mb / 1_024
        return String(format: "%.2f GB", gb)
    }
    
    init(remoteBackupPreview: RemoteBackupPreview, cloudVerifyResult: CloudVerifyResult) {
        self.remoteBackupPreview = remoteBackupPreview
        self.cloudVerifyResult = cloudVerifyResult
    }
}

extension RemoteBackupActionsViewModel {
    enum PerformAction {
        case mergeToLocal
        case backup
    }
}
