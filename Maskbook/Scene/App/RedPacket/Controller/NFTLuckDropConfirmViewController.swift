//
//  NFTLuckDropConfirmViewController.swift
//  Maskbook
//
//  Created by xiaojian sun on 2022/7/25.
//  Copyright © 2022 dimension. All rights reserved.
//

import Combine
import SwiftUI
import UIKit
import CoreDataStack
import web3swift

final class NFTLuckDropConfirmViewController: SheetViewController {
    private(set) var disposeBag: Set<AnyCancellable> = []
    
    @InjectedProvider(\.mainCoordinator)
    private var mainCoordinator
    
    private var viewModel: NFTRedPacketConfirmViewModel
    
    init(
        gasFeeViewModel: GasFeeViewModel,
        redPacketInput: NFTRedPacketABI.CreateNFTRedPacketInput,
        transaction: EthereumTransaction,
        options: TransactionOptions,
        completion: ((String?, Error?) -> Void)?
    ) {
        let param = NFTRedPacketConfirmViewModel.InitInput(
            gasFeeViewModel: gasFeeViewModel,
            inputParam: redPacketInput,
            transaction: transaction,
            options: options
        )
        viewModel = NFTRedPacketConfirmViewModel(param: param, completion: completion)
        super.init(presenter: SheetPresenter(
            presentStyle: .translucent,
            transition: KeyboardSheetTransition())
        )
        self.dismissAction = { [weak self] in
            self?.viewModel.completion?(nil, LuckyDropConfirmError.cancel)
        }
    }
    
    override func buildContent() {
        super.buildContent()
        
        NFTRedPacketConfirmView(viewModel: viewModel).asSheetContent(in: self)
    }

    override func buildEvent() {
        super.buildEvent()
        
        viewModel
            .$buttonState
            .map({ state in
                state != .sending
            })
            .assign(to: \.dissmissOnTap, on: self)
            .store(in: &disposeBag)
    }
}

extension NFTLuckDropConfirmViewController {
    enum LuckyDropConfirmError: Error {
        case cancel
    }
}
