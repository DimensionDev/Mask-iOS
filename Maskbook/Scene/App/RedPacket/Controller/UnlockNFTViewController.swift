//
//  UnlockNFTViewController.swift
//  Maskbook
//
//  Created by caiyu on 2022/8/14.
//  Copyright © 2022 dimension. All rights reserved.
//

import Combine
import CoreDataStack
import SwiftUI
import UIKit
import web3swift

final class UnlockNFTViewController: SheetViewController {
    private(set) var disposeBag: Set<AnyCancellable> = []

    @InjectedProvider(\.mainCoordinator)
    private var mainCoordinator

    private var viewModel: UnlockNFTViewModel

    init(
        gasFeeViewModel: GasFeeViewModel,
        gasFeeItem: GasFeeCellItem,
        groupInfo: CollectiableGroup,
        completion: ((String?, Error?) -> Void)?
    ) {
        viewModel = UnlockNFTViewModel(gasFeeViewModel: gasFeeViewModel, gasFeeItem: gasFeeItem, collectibleGroup: groupInfo, completion: completion)

        super.init(presenter: SheetPresenter(
            presentStyle: .translucent,
            transition: KeyboardSheetTransition()
        )
        )
        dismissAction = { [weak self] in
            self?.viewModel.completion?(nil, UnlockNFTError.cancel)
        }
    }

    override func buildContent() {
        super.buildContent()

        UnlockNFTView(viewModel: viewModel).asSheetContent(in: self)
    }

    override func buildEvent() {
        super.buildEvent()

        viewModel
            .$buttonState
            .map { state in
                state != .sending
            }
            .assign(to: \.dissmissOnTap, on: self)
            .store(in: &disposeBag)
    }
}

extension UnlockNFTViewController {
    enum UnlockNFTError: Error {
        case cancel
    }
}
