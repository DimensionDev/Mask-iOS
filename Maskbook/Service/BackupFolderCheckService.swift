//
//  BackupFolderCheckService.swift
//  Maskbook
//
//  Created by xiaojian sun on 2022/3/3.
//  Copyright © 2022 dimension. All rights reserved.
//

import Foundation

class BackupFolderCheckService {
    internal static let shared = BackupFolderCheckService()

    @InjectedProvider(\.mainCoordinator)
    var coordinator

    static func checkAndAlert(_ url: URL) -> Bool {
        let sandBoxPath = URL.documents.relativePath
        if url.absoluteString.contains(sandBoxPath) {
            url.stopAccessingSecurityScopedResource()
            Self.shared.showWrongFolderAlert()
            return false
        }
        return true
    }

    func showWrongFolderAlert() {
        let alertController = AlertController(title: L10n.Common.Alert.WrongFolder.title,
                                              message: L10n.Common.Alert.WrongFolder.description,
                                              confirmButtonText: L10n.Common.Controls.done,
                                              imageType: .error)
        coordinator.present(scene: .alertController(alertController: alertController),
                            transition: .alertController(completion: nil))
    }
}

enum BackupFolderCheckServiceInjectKey: InjectValueKey {
    static var defaultInjectValue = BackupFolderCheckService.shared
}

extension InjectValues {
    var backupFolderCheckService: BackupFolderCheckService {
        Self[BackupFolderCheckServiceInjectKey.self]
    }
}
