//
//  BackupFolderCheckService.swift
//  Maskbook
//
//  Created by xiaojian sun on 2022/3/3.
//  Copyright © 2022 dimension. All rights reserved.
//

import Foundation

class BackupFolderCheckService {
    static func checkAndAlert(_ url: URL) -> Bool {
        let documentPath = URL.documents.relativePath
        if url.absoluteString.contains(documentPath) {
            url.stopAccessingSecurityScopedResource()
            showWrongFolderAlert()
            return false
        }
        return true
    }
    
    static func showWrongFolderAlert() {
        @InjectedProvider(\.mainCoordinator)
        var coordinator
        
        let alertController = AlertController(title: L10n.Common.Alert.WrongFolder.title,
                                              message: L10n.Common.Alert.WrongFolder.title,
                                              confirmButtonText: L10n.Common.Controls.done,
                                              imageType: .error)
        alertController.setAttributeMessage(attrMessage: attributeString())
        coordinator.present(scene: .alertController(alertController: alertController),
                            transition: .alertController(completion: nil))
    }
    
    static func attributeString() -> NSAttributedString {
        let attributeString = NSMutableAttributedString()
        let attribute = NSAttributedString(string: L10n.Common.Alert.WrongFolder.description1,
                                           attributes: [.foregroundColor: Asset.Colors.Text.dark.color,
                                                        .font: FontStyles.MH5])
        let attribute2 = NSAttributedString(string: L10n.Common.Alert.WrongFolder.description1,
                                            attributes: [.foregroundColor: Asset.Colors.Text.normal.color,
                                                         .font: FontStyles.RH5])
        attributeString.append(attribute)
        attributeString.append(attribute2)
        return attributeString
    }
}
