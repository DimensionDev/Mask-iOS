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
                
            case .failure(error: let error):
                self?.loadingController.view.isHidden = true
                self?.showError(error)
            }
        }
        .store(in: &disposeBag)
    }
    
    func showError(_ error: Error) {
        Alert(items: {
            AlertItem.image(.error)
            AlertItem.tipWith(
                title: "",
                detail: NSAttributedString(
                    string: error.localizedDescription,
                    attributes: [
                        .font: FontStyles.BH4,
                        .foregroundColor: Asset.Colors.Text.dark.color
                    ]
                )
            )
            AlertItem.doneAction(
                .init(
                    title: L10n.Common.Controls.confirm,
                    action: { }
                )
            )
        })
        .show()
    }
}
