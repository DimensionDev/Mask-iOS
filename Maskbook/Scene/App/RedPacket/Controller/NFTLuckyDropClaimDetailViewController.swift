//
//  NFTLuckyDropClaimDetailViewController.swift
//  Maskbook
//
//  Created by xiaojian sun on 2022/8/5.
//  Copyright © 2022 dimension. All rights reserved.
//

import Foundation

final class NFTLuckyDropClaimDetailViewController: SheetViewController {
    
    @InjectedProvider(\.mainCoordinator)
    private var mainCoordinator
    
    private var viewModel: NFTLuckyDropClaimDetailViewModel
    
    init(
        nftRedPacketSubgraph: NftRedPacketSubgraph)
    {
        viewModel = NFTLuckyDropClaimDetailViewModel(nftRedPacketSubgraph: nftRedPacketSubgraph)
        super.init(presenter: SheetPresenter(
            presentStyle: .translucent,
            transition: KeyboardSheetTransition())
        )
    }
    
    override func buildContent() {
        super.buildContent()
        
        NFTLuckyDropClaimDetailView(viewModel: viewModel).asSheetContent(in: self)
    }

    override func buildEvent() {
        super.buildEvent()
        
    }
}
