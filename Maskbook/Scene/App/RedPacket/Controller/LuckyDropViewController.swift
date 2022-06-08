//
//  LuckyDropViewController.swift
//  Maskbook
//
//  Created by Hugo L on 2022/4/19.
//  Copyright © 2022 dimension. All rights reserved.
//

import Combine
import Foundation
import SwiftUI

class LuckyDropViewController: BaseViewController {
    private let viewModel: LuckyDropViewModel
    private(set) var cancelableStorage: Set<AnyCancellable> = []

    @InjectedProvider(\.mainCoordinator)
    private var coordinator
    
    let luckyView: LuckyDropView
    
    init(source: LuckyDropViewModel.Source, callback: (@MainActor (RedPacketPayload) -> Void)?) {
        viewModel = LuckyDropViewModel(source: source, callback: callback)
        luckyView = LuckyDropView(viewModel: viewModel)
        super.init(nibName: nil, bundle: nil)
    }
    
    @available(*, unavailable)
    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
    
    override func viewDidLoad() {
        super.viewDidLoad()
        navigationItem.title = L10n.Plugins.Luckydrop.title
    }
    
    override func viewWillAppear(_ animated: Bool) {
        super.viewWillAppear(animated)
        
        navigationController?.navigationBar.setAppearance()
    }

    override func buildContent() {
        super.buildContent()
        let controller = UIHostingController(rootView: luckyView.withResponderChainForCurrentWindow())
        self.addChild(controller)
        self.view.addSubview(controller.view)
        controller.view.snp.makeConstraints { $0.edges.equalToSuperview() }
        controller.view.backgroundColor = Asset.Colors.Background.normal.color

        title = L10n.Tab.labs
    }

    override func  buildEvent() {
        super.buildEvent()
    }

    @objc
    fileprivate func onClose() {
        dismiss(animated: true)
    }
    
    @objc
    fileprivate func onShowHistory() {
        self.navigationController?.pushViewController(LuckDropHistoryController(), animated: true)
    }
}

extension LuckyDropViewController {
    @objc
    override func prepareRightNavigationItems() {
        let closeButton = NavigationBarItemView(imageAsset: Asset.Plugins.LuckyDrop.Icon.close) {
            self.onClose()
        }
        let historyButton = NavigationBarItemView(imageAsset: Asset.Plugins.LuckyDrop.Icon.history) {
            self.onShowHistory()
        }
        self.navigationItem.rightBarButtonItems = [
            .fixedSpace(14),
            UIBarButtonItem(customView: closeButton.asUIView())
        ]
        self.navigationItem.leftBarButtonItems = [
            .fixedSpace(14),
            UIBarButtonItem(customView: historyButton.asUIView())
        ]
    }
}
