//
//  RestoreDataPreviewController.swift
//  Maskbook
//
//  Created by yzj on 2021/8/18.
//  Copyright © 2021 dimension. All rights reserved.
//

import Combine
import SwiftUI
import UIKit
import UStack

final class RestoreDataPreviewController: BaseViewController {
    typealias Spacer = UStack.Spacer
    typealias State = RestoreFilePreviewViewModel.State

    enum Destination {
        // dismiss to social web view controller
        case root
        // pop to setting view
        case setting
        case remoteRestoreAndLogin(strategy: RestoreCompletionStrategy)
    }

    private var cancelableStorage: Set<AnyCancellable> = []
    private let destination: Destination

    private lazy var loadingController: LoadingIndicatorController = {
        let vc = LoadingIndicatorController()
        vc.dissmissOnTap = false
        return vc
    }()
    private var viewModel: RestoreFilePreviewViewModel

    @InjectedProvider(\.mainCoordinator)
    private var coordinator

    @InjectedProvider(\.personaManager)
    private var personaStore

    @InjectedProvider(\.vault)
    private var vault

    init(_ fileURL: URL, destination: Destination, decryptSeed: String? = nil) {
        self.destination = destination

        self.viewModel = RestoreFilePreviewViewModel(
            RestorePreviewResult(),
            restoreFileSource: .localFileURL(fileURL, decryptSeed: decryptSeed)
        )

        super.init(nibName: nil, bundle: nil)
    }

    init(_ data: Data, destination: Destination) {
        self.destination = destination

        self.viewModel = RestoreFilePreviewViewModel(
            RestorePreviewResult(),
            restoreFileSource: .data(data)
        )

        super.init(nibName: nil, bundle: nil)
    }

    @available(*, unavailable)
    required init?(coder: NSCoder) {
        fatalError("unavailable")
    }

    override func buildContent() {
        title = L10n.Scene.Restore.Titles.restoreBuckup
        navigationController?.navigationBar.prefersLargeTitles = true

        RestoreDataDiffView(viewModel: viewModel).asContent(in: self)

        addChild(loadingController)
        view.addSubview(loadingController.view)
        loadingController.view.snp.makeConstraints {
            $0.edges.equalToSuperview()
        }
    }

    override func buildEvent() {
        viewModel
            .stateSignal
            .receive(on: DispatchQueue.main)
            .sink(receiveCompletion: { _ in
            }) { [weak self] state in
                self?.handleState(state)
            }
            .store(in: &cancelableStorage)
        viewModel.walletPipeline
            .sheetPipeline
            .receive(on: DispatchQueue.main)
            .sink { [weak self] pipeline in
                guard let self = self else { return }
                self.hideLoading()

                switch pipeline {
                case let .showWalletsInfo(decryptedData, restorefile, walletItems):
                    self.showWalletsInfo(decryptedData, restorefile, walletItems)

                case let .setupPaymentPassword(data, restorefile):
                    self.setPaymentPassword(with: data, restorefile)

                case let .verifyPaymentPassword(data, restorefile):
                    self.verifyPaymentPassword(with: data, restorefile)

                case .failedToParseRestoreFile:
                    self.handleState(.failedLoadingData)
                    
                case .noWalletSecureFoundInRestoreFile:
                    // For some legacy format backup file without wallet secure information, just ignore the wallets in it.
                    self.handleState(.restoreSucceed)

                case .restoreSucceed:
                    self.coordinator.present(scene: .balance, transition: .replaceWalletTab())
                    self.handleState(.restoreSucceed)
                }
            }
            .store(in: &cancelableStorage)
        viewModel.startPreparingData()
    }

    private func handleState(_ state: State) {
        switch state {
        case .fileDecoded:
            hideLoading()

        case .unsupportedFile:
            hideLoading()
            showAlertWhenFileParsingFailed()
            
        case .restoreSucceed:
            hideLoading()
            restoreComplete()
            
        case .failedLoadingData:
            hideLoading()
            showRetryAlert()
            
        case .restoreFailed:
            hideLoading()
            showRestoreFailedAlert()

        case .startRestoring:
            startLoading()
        }
    }

    private func hideLoading() {
        loadingController.stopAnimation()
    }

    private func startLoading() {
        loadingController.startAnimation()
    }

    private func login() {
        self.coordinator.present(
            scene: .persona,
            transition: .replaceCurrentNavigation(tab: .personas)
        )
    }

    private func syncPasswordAndLogin() {
        guard case let .remoteRestoreAndLogin(strategy) = self.destination,
              case let .suggestSyncing(remotePassword) = strategy else { return }
        vault.publisherWhenUpdating(remotePassword, forKey: .backupPassword)
            .receive(on: DispatchQueue.global())
            .retry(3)
            .replaceError(with: ())
            .fireAndIgnore()
            .store(in: &cancelableStorage)
        login()
    }

    private func checkIfNeedSyncingPassword() {
        let finalTip = NSMutableAttributedString()
        let restoeSucceedTip = NSAttributedString(
            string: L10n.Scene.Restore.Tip.remoteRestoreSucceed,
            attributes: [
                .font: FontStyles.MH5,
                .foregroundColor: Asset.Colors.Text.normal.color
            ]
        )
        let syncPasswordTip = NSAttributedString(
            string: L10n.Scene.Restore.Tip.remoteRestoreSyncingPassword,
            attributes: [
                .font: FontStyles.MH5,
                .foregroundColor: Asset.Colors.Public.blue.color
            ]
        )
        finalTip.append(restoeSucceedTip)
        finalTip.append(syncPasswordTip)

        Alert {
            ImageItem(.success)
            ContentTextItem(
                finalTip,
                alignment: .left
            )
            CancelAndConfirmItem(
                cancel: .init(title: L10n.Common.Controls.cancel, action: { [weak self] in self?.login() }),
                confirm: .init(title: L10n.Common.Controls.confirm, action: { [weak self] in self?.syncPasswordAndLogin() })
            )
        }
        .show()
    }

    private func restoreComplete() {
        switch destination {
        case let .remoteRestoreAndLogin(strategy):
            switch strategy {
            case .ignoreAndLogin:
                login()

            case .suggestSyncing:
                checkIfNeedSyncingPassword()
            }

        case .root, .setting:
            Alert {
                ImageItem(.success)
                WithTipItem(
                    title: L10n.Scene.Restore.completion,
                    detail: NSAttributedString(
                        string: L10n.Scene.Restore.succeedDetail,
                        attributes: [
                            .font: FontStyles.BH5,
                            .foregroundColor: Asset.Colors.Text.normal.color
                        ]
                    )
                )
                DoneActionItem(
                    .init(
                        title: L10n.Common.Controls.done,
                        action: { [weak self] in
                            guard let self = self else { return }
                            switch self.destination {
                            case .root: self.login()
                            case .setting: self.navigationController?.popViewController(animated: true)
                            default: break
                            }
                        }
                    )
                )
            }
            .show()
        }
    }
}

// MARK: Alerts

extension RestoreDataPreviewController {
    private func showRetryAlert() {
        Alert {
            ImageItem(.error)
            WithTipItem(
                title: L10n.Scene.Restore.Titles.loadingFailed,
                detail: NSAttributedString(
                    string: L10n.Scene.Restore.Tip.dataFailedToFetch,
                    attributes: [
                        .font: FontStyles.BH4,
                        .foregroundColor: Asset.Colors.Text.dark.color
                    ]
                )
            )
            CancelAndConfirmItem(
                cancel: .init(title: L10n.Common.Controls.cancel),
                confirm: .init(
                    title: L10n.Common.Controls.tryAgain,
                    action: { [weak self] in
                        self?.viewModel.startPreparingData()
                        self?.loadingController.startAnimation()
                    }
                )
            )
        }
        .show()
    }

    private func showRestoreFailedAlert() {
        Alert {
            ImageItem(.error)
            PlainTextItem(
                title: L10n.Scene.Restore.Titles.restoreFailed,
                detail: ""
            )
            DoneActionItem(.init(
                title: L10n.Common.Controls.ok,
                action: {
                }
            ))
        }
        .show()
    }

    private func showAlertWhenFileParsingFailed() {
        Alert {
            ImageItem(.warning)
            WithTipItem(
                title: L10n.Scene.Restore.Titles.unsupportRestoreData,
                detail: NSAttributedString(
                    string: L10n.Scene.Restore.checkUnsupportData,
                    attributes: [
                        .font: FontStyles.BH5,
                        .foregroundColor: Asset.Colors.Text.normal.color
                    ]
                )
            )
            DoneActionItem(
                .init(
                    title: L10n.Common.Controls.ok,
                    action: { [weak self] in
                        self?.navigationController?.popViewController(animated: true)
                    }
                )
            )
        }
        .show()
    }
}

// MARK: wallet restore pipeline

extension RestoreDataPreviewController {
    private func showWalletsInfo(_ decryptedData: Data, _ restorefile: RestoreFile?, _ walletItems: [RestoreWalletItem]) {
        let vc = RestoreWalletInfoController(items: walletItems) { [weak self] in
            self?.viewModel.walletPipeline.setOrCheckPaymentPassword(for: decryptedData, restorefile: restorefile)
        }
        present(vc, animated: true, completion: nil)
    }

    private func setPaymentPassword(with decryptedData: Data, _ restorefile: RestoreFile?) {
        let vc = RestoreWalletPasswordConfigController { [weak self] in
            self?.viewModel.walletPipeline.sendRestoreMessage(data: decryptedData, restorefile: restorefile)
        }
        present(vc, animated: true, completion: nil)
    }

    private func verifyPaymentPassword(with decryptedData: Data, _ restorefile: RestoreFile?) {
        let vc = RestoreWalletPasswordVerifyController { [weak self] in
            self?.viewModel.walletPipeline.sendRestoreMessage(data: decryptedData, restorefile: restorefile)
        }
        present(vc, animated: true, completion: nil)
    }
}
