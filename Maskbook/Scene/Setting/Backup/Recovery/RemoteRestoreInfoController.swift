//
//  RemoteRestoreInfoController.swift
//  Maskbook
//
//  Created by yzj on 2021/8/25.
//  Copyright © 2021 dimension. All rights reserved.
//

import Combine
import SwiftUI
import UIKit

final class RemoteRestoreInfoController: BaseViewController {
    typealias Failure = RemoteRestoreInfoViewModel.Failure

    @InjectedProvider(\.mainCoordinator)
    private var coordinator

    @InjectedProvider(\.vault)
    private var vault
    
    @InjectedProvider(\.personaManager)
    private var personaStore
    
    private(set) var cancelableStorage: Set<AnyCancellable> = []

    private var viewModel: RemoteRestoreInfoViewModel

    private lazy var loadingController: LoadingIndicatorController = {
        let vc = LoadingIndicatorController()
        vc.dissmissOnTap = false
        return vc
    }()

    init(verifyData: CloudVerifyResult) {
        self.viewModel = RemoteRestoreInfoViewModel(verifyData: verifyData)
        super.init(nibName: nil, bundle: nil)
    }

    @available(*, unavailable)
    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }

    override func viewDidLoad() {
        super.viewDidLoad()
        viewModel.loadRemoteData()
    }

    override func buildContent() {
        super.buildContent()
        title = L10n.Scene.Restore.Titles.restoreRemoteBackup
        navigationController?.navigationBar.prefersLargeTitles = true

        RemoteRestoreInfoView(viewModel: viewModel).asContent(in: self)

        addChild(loadingController)
        view.addSubview(loadingController.view)
        loadingController.view.snp.makeConstraints {
            $0.edges.equalToSuperview()
        }
    }

    override func buildEvent() {
        super.buildEvent()
        viewModel.loadingState
            .receive(on: DispatchQueue.main)
            .sink { [weak self] state in
                self?.handleLoadingState(state)
            }
            .store(in: &cancelableStorage)

        self.buildWalletRestoreEvent(signalStorage: &cancelableStorage)
    }

    private func handleLoadingState(_ state: RemoteRestoreInfoViewModel.LoadingState) {
        self.view.endEditing(true)
        
        switch state {
        case .loading, .restoring:
            self.loadingController.startAnimation()

        case .loaded:
            self.loadingController.stopAnimation()

        case .restoreFailed:
            self.loadingController.stopAnimation()

        case .reloadRemoteData:
            self.loadingController.stopAnimation()
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
                        action: { [weak self] in self?.viewModel.loadRemoteData() }
                    )
                )
            }
            .show()

        case .reloadRestorefile:
            self.loadingController.stopAnimation()
            Alert {
                ImageItem(.error)
                ContentTextItem(
                    NSAttributedString(
                        string: L10n.Scene.Restore.Tip.dataFailedToFetch,
                        attributes: [
                            .font: FontStyles.BH4,
                            .foregroundColor: Asset.Colors.Text.dark.color
                        ]
                    )
                )
                DoneActionItem(
                    .init(
                        title: L10n.Common.Controls.tryAgain,
                        action: { [weak self] in
                            self?.viewModel.reloadRestoreData()
                        }
                    )
                )
            }
            .show()
        }
    }
}

extension RemoteRestoreInfoController: RestorePipelineExcutor {
    var restoreCompletionStrategy: RestoreCompletionStrategy { viewModel.restoreSucceedStrategy }
    var walletRestorePipline: WalletRestorePipeline { viewModel.walletPipeline }

    func stoploading() {
        self.loadingController.stopAnimation()
    }

    func failedParsingRestorefile() {
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

    func restoreSucceed(selectMaintab: MainTabBarController.Tab) {
        let login = { [weak self] in
            switch selectMaintab {
            case .wallet:
                self?.coordinator.present(scene: .balance, transition: .replaceCurrentNavigation(tab: selectMaintab, selected: true), completion: {
                    self?.coordinator.present(scene: .persona, transition: .replaceCurrentNavigation(tab: .personas))
                })

            case .personas:
                self?.coordinator.present(scene: .persona, transition: .replaceCurrentNavigation(tab: selectMaintab, selected: true))

            default: break
            }

            self?.navigationController?.popToRootViewController(animated: true)
        }
        switch restoreCompletionStrategy {
        case .suggestSyncing:
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
                    cancel: .init(title: L10n.Common.Controls.cancel, action: { login() }),
                    confirm: .init(title: L10n.Common.Controls.confirm, action: { [weak self] in
                        guard let self = self else { return }
                        self.vault.publisherWhenUpdating(self.viewModel.remotePassword, forKey: .backupPassword)
                            .receive(on: DispatchQueue.global())
                            .replaceError(with: ())
                            .fireAndIgnore()
                            .store(in: &self.cancelableStorage)
                        login()
                    })
                )
            }
            .show()

        case .ignoreAndLogin:
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
                        action: { login() }
                    )
                )
            }
            .show()
        }
    }
}
