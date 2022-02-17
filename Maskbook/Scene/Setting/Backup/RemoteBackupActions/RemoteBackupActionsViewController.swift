//
//  RemoteBackupActionsViewController.swift
//  Maskbook
//
//  Created by Hugo L on 2021/10/18.
//  Copyright © 2021 dimension. All rights reserved.
//

import Combine
import SwiftUI
import UIKit

final class RemoteBackupActionsViewController: SheetViewController {
    private(set) var disposeBag: Set<AnyCancellable> = []
    private let viewModel: RemoteBackupActionsViewModel
    
    @InjectedProvider(\.mainCoordinator)
    private var mainCoordinator
    
    init(viewModel: RemoteBackupActionsViewModel) {
        self.viewModel = viewModel
        super.init(presenter: SheetPresenter(
            presentStyle: .translucent,
            transition: KeyboardSheetTransition())
        )
    }
    
    override func buildContent() {
        super.buildContent()
        
        RemoteBackupActionsView(viewModel: viewModel)
            .asSheetContent(in: self)
    }

    override func buildEvent() {
        super.buildEvent()
        
        viewModel.$performAction.sink { [weak self] action in
            guard let action = action else { return }
            guard let self = self else { return }
            
            switch action {
            case .mergeToLocal:
                self.dismiss(animated: true) {
                    self.mainCoordinator.present(
                        scene: .mergeToLocal(viewModel: self.viewModel),
                        transition: .popup)
                }
                
            case .backup:
                self.dismiss(animated: true) {
                    self.mainCoordinator.present(
                        scene: .localBackup(
                            type: .remote,
                            cloudVerifyResult: self.viewModel.cloudVerifyResult
                        ),
                        transition: .detail())
                }
            }
        }
        .store(in: &disposeBag)
    }
}
