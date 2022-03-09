//
//  MergeToLocalViewController.swift
//  Maskbook
//
//  Created by Hugo L on 2021/10/18.
//  Copyright © 2021 dimension. All rights reserved.
//

import Combine
import SwiftUI
import UIKit

final class MergeToLocalViewController: SheetViewController {
    private(set) var disposeBag: Set<AnyCancellable> = []
    private let viewModel: MergeToLocalViewModel
    
    @InjectedProvider(\.mainCoordinator)
    private var mainCoordinator
    
    private lazy var loadingController: LoadingIndicatorController = {
        let vc = LoadingIndicatorController()
        vc.dissmissOnTap = false
        return vc
    }()
    
    init(viewModel: MergeToLocalViewModel) {
        self.viewModel = viewModel
        super.init(presenter: SheetPresenter(
            presentStyle: .translucent,
            transition: KeyboardSheetTransition())
        )
    }
    
    override func buildContent() {
        super.buildContent()
        
        MergeToLocalView(viewModel: viewModel)
            .asSheetContent(in: self)
        
        addChild(loadingController)
        view.addSubview(loadingController.view)
        loadingController.view.snp.makeConstraints {
            $0.edges.equalToSuperview()
        }
    }

    override func buildEvent() {
        super.buildEvent()
        
        viewModel.$loadingState.sink { [weak self] state in
            switch state {
            case .idle:
                self?.loadingController.view.isHidden = true
                
            case .loading:
                self?.loadingController.view.isHidden = false
                self?.view.endEditing(true)
                
            case .success:
                self?.loadingController.view.isHidden = true
                self?.dismiss(animated: true) {
                    self?.mainCoordinator.present(
                        scene: .localBackup(
                            type: .remote,
                            cloudVerifyResult: self?.viewModel.actionsViewModel.cloudVerifyResult
                        ),
                        transition: .detail())
                }
                
            case .failure:
                self?.loadingController.view.isHidden = true
                self?.showError(L10n.Scene.Backup.MergeToLocal.mergeFailedMessage)
            }
        }
        .store(in: &disposeBag)
    }
    
    func showError(_ errorMessage: String) {
        Alert {
            ImageItem(.error)
            WithTipItem(
                title: "",
                detail: NSAttributedString(
                    string: errorMessage,
                    attributes: [
                        .font: FontStyles.BH4,
                        .foregroundColor: Asset.Colors.Text.dark.color
                    ]
                )
            )
            DoneActionItem(
                .init(
                    title: L10n.Common.Controls.confirm,
                    action: { }
                )
            )
        }
        .show()
    }
}
