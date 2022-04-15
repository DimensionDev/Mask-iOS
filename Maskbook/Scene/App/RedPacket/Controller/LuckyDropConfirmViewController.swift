//
//  LuckyDropConfirmViewController.swift
//  Maskbook
//
//  Created by Hugo L on 2022/4/13.
//  Copyright © 2022 dimension. All rights reserved.
//

import Combine
import SwiftUI
import UIKit
import CoreDataStack
import web3swift

final class LuckyDropConfirmViewController: SheetViewController {
    private(set) var disposeBag: Set<AnyCancellable> = []
    
    @InjectedProvider(\.mainCoordinator)
    private var mainCoordinator
    
    private var viewModel: RedPacketConfirmViewModel
    
    init(
        token: Token?,
        gasFeeViewModel: GasFeeViewModel?,
        redPacketInput: HappyRedPacketV4.CreateRedPacketInput,
        transaction: EthereumTransaction,
        options: TransactionOptions,
        completion: ((String?, Error?) -> Void)?
    ) {
        viewModel = RedPacketConfirmViewModel(
            token: token,
            gasFeeViewModel: gasFeeViewModel,
            inputParam: redPacketInput,
            transaction: transaction,
            options: options,
            completion: completion
        )
        super.init(presenter: SheetPresenter(
            presentStyle: .translucent,
            transition: KeyboardSheetTransition())
        )
        self.dismissAction = {
            completion?(nil, LuckyDropConfirmError.cancel)
        }
    }
    
    override func buildContent() {
        super.buildContent()
        
        RedPacketConfirmView(viewModel: viewModel).asSheetContent(in: self)
    }

    override func buildEvent() {
        super.buildEvent()
    }
}

extension LuckyDropConfirmViewController {
    enum LuckyDropConfirmError: Error {
        case cancel
    }
}
