//
//  WalletBackupViewModel.swift
//  Maskbook
//
//  Created by Hugo L on 2021/6/23.
//  Copyright © 2021 dimension. All rights reserved.
//

import Foundation

class WalletBackupViewModel {
    var supportExport: [StoredKeyExportType] {
        guard let account = WalletCoreService.shared.getCurrentAccount() else { return [] }
        guard let chain = ChainType(rawValue: Int(account.chainId)) else { return [] }
        let result = WalletCoreService.shared.getExportSupportType(chainType: chain)
        switch result {
        case .success(let exportTypes):
            return exportTypes

        default:
            return []
        }
    }
}
