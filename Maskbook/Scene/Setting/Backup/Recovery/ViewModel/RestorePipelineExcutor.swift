//
//  File.swift
//  Maskbook
//
//  Created by yzj on 2022/3/28.
//  Copyright © 2022 dimension. All rights reserved.
//

import Combine
import UIKit

/// general restore steps, including wallet restore
protocol RestorePipelineExcutor: AnyObject {
    /// need to sync remote backup passwrod with local backup password
    /// suggestSyncing -> sync password
    /// ignoreAndLogin -> continue restore step
    var restoreCompletionStrategy: RestoreCompletionStrategy { get }
    var walletRestorePipline: WalletRestorePipeline { get }

    func buildWalletRestoreEvent(signalStorage: inout Set<AnyCancellable>)
    func showWalletsInfo(_ decryptedData: Data, _ restorefile: RestoreFile?, _ walletItems: [RestoreWalletItem])
    func setPaymentPassword(with decryptedData: Data, _ restorefile: RestoreFile?)
    func verifyPaymentPassword(with decryptedData: Data, _ restorefile: RestoreFile?)

    func stoploading()
    func failedParsingRestorefile()
    func restoreSucceed(selectMaintab: MainTabBarController.Tab)
}

extension RestorePipelineExcutor where Self: UIViewController {
    func showWalletsInfo(_ decryptedData: Data, _ restorefile: RestoreFile?, _ walletItems: [RestoreWalletItem]) {
        let vc = RestoreWalletInfoController(items: walletItems) { [weak self] in
            self?.walletRestorePipline.setOrCheckPaymentPassword(for: decryptedData, restorefile: restorefile)
        }
        present(vc, animated: true, completion: nil)
    }

     func setPaymentPassword(with decryptedData: Data, _ restorefile: RestoreFile?) {
        let vc = RestoreWalletPasswordConfigController { [weak self] in
            self?.walletRestorePipline.sendRestoreMessage(data: decryptedData, restorefile: restorefile)
        }
        present(vc, animated: true, completion: nil)
    }

    func verifyPaymentPassword(with decryptedData: Data, _ restorefile: RestoreFile?) {
        let vc = RestoreWalletPasswordVerifyController { [weak self] in
            self?.walletRestorePipline.sendRestoreMessage(data: decryptedData, restorefile: restorefile)
        }
        present(vc, animated: true, completion: nil)
    }

    func buildWalletRestoreEvent(signalStorage: inout Set<AnyCancellable>) {
        walletRestorePipline
            .sheetPipeline
            .receive(on: DispatchQueue.main)
            .sink { [weak self] pipeline in
                guard let self = self else { return }

                self.stoploading()

                switch pipeline {
                case let .showWalletsInfo(decryptedData, restorefile, walletItems):
                    self.showWalletsInfo(decryptedData, restorefile, walletItems)

                case let .setupPaymentPassword(data, restorefile):
                    self.setPaymentPassword(with: data, restorefile)

                case let .verifyPaymentPassword(data, restorefile):
                    self.verifyPaymentPassword(with: data, restorefile)

                case .failedToParseRestoreFile:
                    self.failedParsingRestorefile()

                // legacy back up info with out wallet may go through this case
                // just ignore and restore
                case .noWalletSecureFoundInRestoreFile:
                    self.restoreSucceed(selectMaintab: .personas)

                case let .restoreSucceed(withWallets):
                    self.restoreSucceed(selectMaintab: withWallets ? .wallet : .personas)
                }
            }
            .store(in: &signalStorage)
    }
}
