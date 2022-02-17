//
//  WalletListViewController+WalletListWalletTableViewCellDelegate.swift
//  Maskbook
//
//  Created by Hugo L on 2021/6/7.
//  Copyright © 2021 dimension. All rights reserved.
//

import CoreDataStack
import UIKit
import WalletConnectSwift

extension WalletListViewController: WalletListWalletTableViewCellDelegate {
    func walletTableViewCell(cell: WalletListWalletTableViewCell, moreBtnClicked: UIButton) {
        guard let indexPath = tableView.indexPath(for: cell) else { return }
        guard let item = dataSource.itemIdentifier(for: indexPath) else { return }

        guard case Item.account(let data) = item  else { return }
        
        Coordinator.main.present(
            scene: .walletEdit(account: data.account, sourceView: moreBtnClicked),
            transition: .panModel(animated: true))
    }
}
