//
//  TradeProviderSheetController.swift
//  Maskbook
//
//  Created by yzj on 2021/8/14.
//  Copyright © 2021 dimension. All rights reserved.
//

import SwiftUI
import UIKit

final class TradeProviderSheet: SheetViewController {
    private lazy var titleLabel = UILabel().cv.apply { label in
        label.font = FontStyles.BH4
        label.textColor = Asset.Colors.Text.dark.color
        label.textAlignment = .center
        label.text = L10n.Scene.App.swapOptionSource
    }
    
    init() {
        super.init(presenter: SheetPresenter(presentStyle: .translucent))
    }

    override func viewDidLoad() {
        super.viewDidLoad()

        let viewModel = TradeProviderViewModel()
        viewModel.dismissSignal
            .receive(on: DispatchQueue.main)
            .sink { [weak self] _ in
                self?.hide()
            }
            .store(in: &subscriptionSet)
        
        let host = UIHostingController(rootView: SwapProviderListView(viewModel: viewModel))
        host.view.backgroundColor = Asset.Colors.Background.normal.color
        self.addChild(host)
        
        contentView.withSubViews {
            titleLabel
            host.view ?? UIView()
        }

        titleLabel.snp.makeConstraints {
            $0.leading.trailing.equalToSuperview()
            $0.top.equalToSuperview()
                .offset(25)
        }

        host.view.snp.makeConstraints {
            $0.leading.bottom.trailing.equalToSuperview()
            $0.top.equalTo(titleLabel.snp.bottom)
        }
    }
}
