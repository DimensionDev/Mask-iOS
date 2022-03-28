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
        buildWalletRestoreEvent(signalStorage: &cancelableStorage)
        viewModel.startPreparingData()
    }

    private func handleState(_ state: State) {
        switch state {
        case .fileDecoded:
            hideLoading()

        case .unsupportedFile:
            hideLoading()
            showAlertWhenFileParsingFailed()
            
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

extension RestoreDataPreviewController: RestorePipelineExcutor {
    var walletRestorePipline: WalletRestorePipeline { viewModel.walletPipeline }
    var restoreCompletionStrategy: RestoreCompletionStrategy { .ignoreAndLogin }

    func stoploading() {
        hideLoading()
    }

    func failedParsingRestorefile() {
        self.handleState(.failedLoadingData)
    }

    func restoreSucceed(selectMaintab: MainTabBarController.Tab) {
        let login = { [weak self] in
            switch selectMaintab {
            case .wallet:
                self?.coordinator.present(scene: .persona, transition: .replaceCurrentNavigation(tab: .personas))
                self?.coordinator.present(scene: .balance, transition: .replaceCurrentNavigation(tab: selectMaintab, selected: true))

            case .personas:
                self?.coordinator.present(scene: .persona, transition: .replaceCurrentNavigation(tab: selectMaintab, selected: true))

            default: break
            }

            self?.navigationController?.popToRootViewController(animated: true)
        }

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
