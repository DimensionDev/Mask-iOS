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

        Publishers.CombineLatest(
            viewModel.restoreSucceedStrategy,
            viewModel.remoteContent.compactMap { $0 }
        )
        .receive(on: DispatchQueue.main)
        .sink { [weak self] strategy, restoreFile in
            let sence = Coordinator.Scene.remoteRestore(restoreFile, strategy: strategy)
            self?.coordinator.present(scene: sence, transition: .detail())
        }
        .store(in: &cancelableStorage)
    }

    private func handleLoadingState(_ state: RemoteRestoreInfoViewModel.LoadingState) {
        self.view.endEditing(true)
        
        switch state {
        case .loading, .restoring:
            self.loadingController.startAnimation()

        case .loaded:
            self.loadingController.stopAnimation()
            
        case let .restored(data):
            self.loadingController.stopAnimation()
            coordinator.present(scene: .localRestoreEncryptBackup(data, destination: .setting), transition: .detail(), completion: nil)
//            Alert {
//                ImageItem(.success)
//                ContentTextItem(
//                    NSAttributedString(
//                        string: L10n.Scene.IdentityRestoreSigninSuccess.title,
//                        attributes: [
//                            .font: FontStyles.BH4,
//                            .foregroundColor: Asset.Colors.Text.dark.color
//                        ]
//                    )
//                )
//                DoneActionItem(
//                    .init(
//                        title: L10n.Common.Controls.done,
//                        action: { [weak self] in
//                            self?.login()
//                        }
//                    )
//                )
//            }
//            .show()
            
        case .restoreFailure:
            self.loadingController.stopAnimation()
            
        case .syncCloudPassword:
            synchronizePassword()

        case .retryLoadRestoreInfo:
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

        case .retryLoadRestoreFile:
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
    
    private func synchronizePassword() {
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
    
    private func login() {
        dismiss(animated: true, completion: nil)
    }

    private func syncPasswordAndLogin() {
        vault.publisherWhenUpdating(viewModel.remotePassword, forKey: .backupPassword)
            .receive(on: DispatchQueue.global())
            .replaceError(with: ())
            .fireAndIgnore()
            .store(in: &cancelableStorage)
        login()
    }
}
